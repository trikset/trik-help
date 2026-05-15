import fs from 'fs';
import path from 'path';

const scriptDir = path.dirname(new URL(import.meta.url).pathname);
const base = process.env.TRIK_HELP_CONVERT_BASE || path.resolve(scriptDir, '..');
const src = process.env.TRIK_HELP_SOURCE || path.join(base, 'source');
const site = process.env.TRIK_HELP_SITE || base;
const docs = path.join(site, 'docs');
const staticAssets = path.join(site, 'static', 'gitbook', 'assets');

fs.rmSync(docs, {recursive:true, force:true});
fs.mkdirSync(docs, {recursive:true});
fs.rmSync(staticAssets, {recursive:true, force:true});
fs.mkdirSync(staticAssets, {recursive:true});
fs.cpSync(path.join(src, '.gitbook', 'assets'), staticAssets, {recursive:true});
// Remove case-insensitive duplicate asset names that break webpack emit; keep the lower-case variant.
{
  const seen = new Map();
  for (const f of fs.readdirSync(staticAssets)) {
    const lower = f.toLowerCase();
    if (!seen.has(lower)) { seen.set(lower, f); continue; }
    const keep = seen.get(lower);
    const remove = keep === lower ? f : keep;
    fs.rmSync(path.join(staticAssets, remove), {force:true});
    if (remove === keep) seen.set(lower, f);
  }
}

function walk(dir, out=[]) {
  for (const ent of fs.readdirSync(dir, {withFileTypes:true})) {
    if (ent.name === '.git') continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const allMd = walk(src).filter(p => p.endsWith('.md') && !p.includes(`${path.sep}.git${path.sep}`));
const relMd = allMd.map(p => path.relative(src, p).split(path.sep).join('/'))
  .filter(rel => rel !== 'SUMMARY.md');
const existingRel = new Set(relMd);

function ensureDir(file){ fs.mkdirSync(path.dirname(file), {recursive:true}); }
function readUtf(file){ return fs.readFileSync(file, 'utf8'); }
function writeUtf(file, text){ ensureDir(file); fs.writeFileSync(file, text); }
function titleFrom(text, rel){
  const m = text.match(/^#\s+(.+)$/m);
  if (m) return cleanTitle(m[1]);
  return path.basename(rel, '.md');
}
function cleanTitle(s){
  return s.replace(/<[^>]+>/g,'').replace(/#\w[\w-]*/g,'').trim().replace(/\s+/g,' ');
}
function outRelFor(rel){
  if (rel === 'README.md') return 'intro.md';
  return rel.replace(/README\.md$/, 'index.md');
}
function docIdFor(rel){
  return outRelFor(rel).replace(/\.md$/, '');
}
function sidebarIdForLink(link){
  let url = link.split('#')[0].replace(/^\.\//, '');
  if (!url || /^https?:/.test(url)) return null;
  url = decodeURI(url);
  if (url.endsWith('/')) url += 'README.md';
  if (!url.endsWith('.md')) url += '.md';
  if (!existingRel.has(url)) return null;
  return docIdFor(url);
}
function escapeFrontmatterValue(v){ return JSON.stringify(v.replace(/\"/g, '"')); }

function encodeGitbookAssetUrl(rawUrl) {
  let url = rawUrl.trim()
    .replace(/^&lt;|^</, '')
    .replace(/&gt;$|>$/, '')
    .replace(/&#x26;|&#38;|&amp;/g, '&')
    // GitBook sometimes escapes underscores in Markdown URLs; the real files do not.
    .replace(/\\([_() ])/g, '$1');
  const match = url.match(/^([^?#]*)([?#].*)?$/);
  const pathname = match?.[1] || url;
  const suffix = match?.[2] || '';
  const encodedPathname = pathname.split('/').map((segment) => {
    if (!segment) return segment;
    try { segment = decodeURIComponent(segment); } catch {}
    return encodeURIComponent(segment).replace(/[()]/g, (ch) => ch === '(' ? '%28' : '%29');
  }).join('/');
  return encodedPathname + suffix;
}

function normalizeGitbookAssetUrls(text) {
  const assetFile = String.raw`[^\n]*?/gitbook/assets/[^\n]*?\.(?:png|jpe?g|gif|webp|svg)`;
  const markdownAsset = new RegExp(String.raw`(!\[[^\]\n]*\]\()(${assetFile})(\s+(?:"[^"]*"|'[^']*'))?(\))`, 'gi');
  const markdownLinkAsset = new RegExp(String.raw`(\[[^\]\n]+\]\()(${assetFile})(\s+(?:"[^"]*"|'[^']*'))?(\))`, 'gi');
  text = text.replace(markdownAsset, (_, prefix, url, title = '', suffix) => `${prefix}${encodeGitbookAssetUrl(url)}${title}${suffix}`);
  text = text.replace(markdownLinkAsset, (_, prefix, url, title = '', suffix) => `${prefix}${encodeGitbookAssetUrl(url)}${title}${suffix}`);
  text = text.replace(/(<img\b[^>]*?\bsrc=["'])([^"']*\/gitbook\/assets\/[^"']+)(["'][^>]*>)/gi,
    (_, prefix, url, suffix) => `${prefix}${encodeGitbookAssetUrl(url)}${suffix}`);
  text = text.replace(/(src=["'])([^"']*\/gitbook\/assets\/[^"']+)(["'])/gi,
    (_, prefix, url, suffix) => `${prefix}${encodeGitbookAssetUrl(url)}${suffix}`);
  return text;
}

function convert(text, rel){
  const needsTabs = /\{% tabs %\}/.test(text);
  const title = titleFrom(text, rel);

  // Remove existing generated frontmatter if any accidental.
  text = text.replace(/^---\n[\s\S]*?\n---\n+/, '');

  // GitBook content refs -> inner link.
  text = text.replace(/\{% content-ref[^%]*%\}\s*([\s\S]*?)\s*\{% endcontent-ref %\}/g, '$1');

  // GitBook code/file.
  text = text.replace(/\{% code(?: [^%]*)?%\}/g, '');
  text = text.replace(/\{% endcode %\}/g, '');
  text = text.replace(/\{% file src="([^"]+)" %\}\s*([\s\S]*?)\s*\{% endfile %\}/g, (_, url, label) => `[${label.trim() || 'Скачать'}](${url})`);

  // Hints.
  const hintMap = {info:'info', warning:'warning', danger:'danger', success:'tip'};
  text = text.replace(/\{% hint style="(.*?)" %\}/g, (_, s) => `:::${hintMap[s] || 'note'}`);
  text = text.replace(/\{% endhint %\}/g, ':::');

  // Tabs.
  text = text.replace(/\{% tabs %\}/g, '<Tabs>');
  text = text.replace(/\{% endtabs %\}/g, '</Tabs>');
  text = text.replace(/\{% tab title="([^"]+)" %\}/g, (_, title) => {
    const value = title.toLowerCase().replace(/[^a-zа-я0-9]+/gi,'-').replace(/^-|-$/g,'') || 'tab';
    return `<TabItem value={${JSON.stringify(value)}} label={${JSON.stringify(title)}}>`;
  });
  text = text.replace(/\{% endtab %\}/g, '</TabItem>');

  // Drop any other unknown GitBook tags instead of breaking MDX; log-worthy later.
  text = text.replace(/\{%[^%]*%\}/g, '');

  // Asset paths: relative climbs to GitBook assets -> site-absolute static path.
  text = text.replace(/(?:\.\.\/)*\.gitbook\/assets\//g, '/gitbook/assets/');
  text = text.replace(/src="(?:\.\.\/)*\.gitbook\/assets\//g, 'src="/gitbook/assets/');

  // Preserve GitBook explicit anchors. If anchor is attached to a heading,
  // convert it to Docusaurus custom heading id so onBrokenAnchors can see it.
  text = text.replace(/^(#{1,6}\s+.*?)\s+<a\s+href="#[^"]+"\s+id="([^"]+)"[^>]*><\/a>\s*$/gm, (_, heading, id) => `${heading} {#${id}}`);
  text = text.replace(/<a\s+href="#[^"]+"\s+id="([^"]+)"[^>]*>\s*<\/a>/g, (_, id) => `<span id="${id}"></span>`);
  text = text.replace(/<a\s+(?:[^>]*?\s)?id="([^"]+)"[^>]*>\s*<\/a>/g, (_, id) => `<span id="${id}"></span>`);

  // Escape non-HTML angle-bracket placeholders/terms before MDX parses them as JSX.
  const allowedTags = new Set(['a','div','img','br','hr','p','figure','figcaption','table','thead','tbody','tr','td','th','ul','ol','li','span','strong','em','b','i','code','pre','kbd','details','summary','Tabs','TabItem']);
  {
    let inFence = false;
    text = text.split('\n').map(line => {
      if (line.trim().startsWith('```')) { inFence = !inFence; return line; }
      if (inFence) return line;
      line = line.replace(/<\/?([^\s>/]+)([^>]*)>/g, (m, tag, rest) => {
        const clean = tag.replace(/^\//, '');
        if (allowedTags.has(clean)) return m;
        return m.replace(/</g, '&lt;').replace(/>/g, '&gt;');
      });
      return line.replace(/<(?!\/?(?:a|div|img|br|hr|p|figure|figcaption|table|thead|tbody|tr|td|th|ul|ol|li|span|strong|em|b|i|code|pre|kbd|details|summary|Tabs|TabItem)\b|!--)/g, '&lt;');
    }).join('\n');
  }

  // Void tags for MDX.
  text = text.replace(/<img([^>]*?)(?<!\/)>(?!\s*<\/img>)/g, '<img$1 />');
  text = text.replace(/<br([^>]*?)(?<!\/)>(?!\s*<\/br>)/g, '<br$1 />');
  text = text.replace(/<hr([^>]*?)(?<!\/)>(?!\s*<\/hr>)/g, '<hr$1 />');

  // Simplify GitBook-ish HTML anchors that conflict with markdown links/minifier.
  text = text.replace(/<a href="([^"]+)"[^>]*>(.*?)<\/a>/g, '[$2]($1)');
  text = text.replace(/&lt;a href="([^"]+)"[^&]*&gt;(.*?)<\/a>/g, '[$2]($1)');
  text = text.replace(/&lt;a href="([^"]+)"[^&]*&gt;(.*?)&lt;\/a&gt;/g, '[$2]($1)');

  // Restore anchors if previous escaping touched them.
  text = text.replace(/&lt;span id="([^"]+)"&gt;<\/span>/g, '<span id="$1"></span>');
  text = text.replace(/&lt;span id="([^"]+)"&gt;&lt;\/span&gt;/g, '<span id="$1"></span>');

  // Drop leftover raw/escaped HTML tags that otherwise become bogus links to '/'.
  text = text.replace(/&lt;\/?(?:p|div|span|a|br|img|table|thead|tbody|tr|td|th|ul|ol|li|strong|em|code|pre|figure|figcaption)[^>]*&gt;/g, '');

  // Normalize GitBook asset image links wrapped in angle brackets, including escaped forms.
  text = text.replace(/!\[([^\]]*)\]\(&lt;([^)]*?\/gitbook\/assets\/[^)]*?)&gt;\)/g, '![$1]($2)');
  text = text.replace(/!\[([^\]]*)\]\(<([^)]*?\/gitbook\/assets\/[^)]*?)>\)/g, '![$1]($2)');
  text = text.replace(/\[([^\]]+)\]\(&lt;([^)]*?\/gitbook\/assets\/[^)]*?)&gt;\)/g, '[$1]($2)');
  text = text.replace(/!\[([^\]]*)\]\(&lt;([^&]*?\/gitbook\/assets\/.*?)&gt;\)/g, '![$1]($2)');
  text = text.replace(/\[([^\]]+)\]\(&lt;([^&]*?\/gitbook\/assets\/.*?)&gt;\)/g, '[$1]($2)');
  text = normalizeGitbookAssetUrls(text);

  // README links -> Docusaurus route-ish links.
  text = text.replace(/\]\(([^)]+)README\.md(#[^)]+)?\)/g, ']($1$2)');

  // Escape remaining single-brace placeholders outside generated JSX lines and fenced code blocks.
  let inFence = false;
  text = text.split('\n').map(line => {
    if (line.trim().startsWith('```')) inFence = !inFence;
    if (inFence || line.startsWith('<TabItem ')) return line;
    return line.replace(/\{([^{}\n]+)\}/g, '&#123;$1&#125;');
  }).join('\n');

  // Frontmatter must be first; imports after frontmatter for MDX.
  const fm = `---\ntitle: ${escapeFrontmatterValue(title)}\n---\n\n`;
  const imports = needsTabs ? `import Tabs from '@theme/Tabs';\nimport TabItem from '@theme/TabItem';\n\n` : '';
  return fm + imports + text.trim() + '\n';
}


function docRouteForOutRel(outRel) {
  let noExt = outRel.replace(/\.md$/, '');
  if (noExt === 'intro') return '/docs/intro';
  if (noExt.endsWith('/index')) noExt = noExt.slice(0, -('/index'.length));
  return '/docs/' + noExt;
}
function resolveDocOutRel(fromOutRel, href) {
  const raw = href.split('#')[0];
  if (!href.includes('#') || /^https?:/.test(href) || raw.startsWith('/gitbook/')) return null;
  let route;
  const fromRoute = docRouteForOutRel(fromOutRel).replace(/\/$/, '');
  if (raw.startsWith('/docs/')) route = raw.replace(/\/$/, '');
  else if (!raw || raw === '.' || raw === './') route = fromRoute;
  else {
    const baseRoute = fromRoute.endsWith('/') ? fromRoute : fromRoute.replace(/\/[^/]*$/, '/');
    const normalized = path.posix.normalize(path.posix.join(baseRoute, raw));
    route = normalized.replace(/\/$/, '');
  }
  route = route.replace(/\/README\.md$/, '').replace(/\.md$/, '');
  if (route === '/docs') route = '/docs/intro';
  for (const [outRel, r] of outRelToRoute.entries()) {
    if (r === route || r + '/' === route + '/') return outRel;
  }
  return null;
}
function slugifyCompatHeading(title) {
  const map = {
    а:'a', б:'b', в:'v', г:'g', д:'d', е:'e', ё:'e', ж:'zh', з:'z', и:'i', й:'i', к:'k', л:'l', м:'m', н:'n', о:'o', п:'p', р:'r', с:'s', т:'t', у:'u', ф:'f', х:'kh', ц:'c', ч:'ch', ш:'sh', щ:'sh', ъ:'', ы:'y', ь:'', э:'e', ю:'yu', я:'ya'
  };
  return title
    .toLowerCase()
    .replace(/[а-яё]/g, ch => map[ch] ?? ch)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
function stripHeadingSyntax(line) {
  return cleanTitle(line
    .replace(/^#{1,6}\s+/, '')
    .replace(/\s*\{#[^}]+\}\s*$/, '')
    .replace(/\s*&#123;#[^&]+&#125;\s*$/, '')
    .replace(/<a\s+[^>]*id="[^"]+"[^>]*><\/a>/g, '')
  );
}
function insertCompatAnchorNearHeading(text, safe) {
  const lines = text.split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (!/^#{1,6}\s+/.test(lines[i])) continue;
    const title = stripHeadingSyntax(lines[i]);
    if (!title) continue;
    if (slugifyCompatHeading(title) !== safe) continue;
    lines.splice(i, 0, `###### \u200b {#${safe}}`);
    return {text: lines.join('\n'), inserted: true};
  }
  return {text, inserted: false};
}
function addCompatAnchorsForReferencedHashes() {
  const anchorsByOut = new Map();
  for (const outRel of relMd.map(outRelFor)) {
    const file = path.join(docs, outRel);
    const text = readUtf(file);
    const hrefs = [...text.matchAll(/\]\(([^)]+#[^)]+)\)/g)].map(m => m[1]);
    for (const href of hrefs) {
      const hash = href.split('#')[1]?.split(/[?&]/)[0];
      if (!hash) continue;
      const targetOut = resolveDocOutRel(outRel, href);
      if (!targetOut) continue;
      if (!anchorsByOut.has(targetOut)) anchorsByOut.set(targetOut, new Set());
      anchorsByOut.get(targetOut).add(decodeURIComponent(hash));
    }
  }
  for (const [outRel, anchors] of anchorsByOut.entries()) {
    const file = path.join(docs, outRel);
    let text = readUtf(file);
    if (outRel === 'studio/2d-model/restrictions/index.md') {
      ['less-than-inside-greater-than','less-than-trigger-greater-than-less-than-trigger-greater-than','less-than-success-greater-than','less-than-equals-greater-than-less-than-equals-greater-than','less-than-objectstate-greater-than','less-than-int-greater-than'].forEach(a => anchors.add(a));
    }
    if (outRel === 'studio/programming-visual/blocks.md') {
      ['initialization','vse-obshie-bloki','vyrazhenie','inicializaciya-peremennoi'].forEach(a => anchors.add(a));
    }
    const additions = [];
    for (const id of anchors) {
      const safe = id.replace(/[^A-Za-z0-9А-Яа-я._~%:-]/g, '-');
      if (!safe) continue;
      if (text.includes(`{#${safe}}`) || text.includes(`id="${safe}"`)) continue;
      const placed = insertCompatAnchorNearHeading(text, safe);
      text = placed.text;
      if (!placed.inserted) additions.push(`###### \u200b {#${safe}}`);
    }
    if (additions.length) {
      text += `\n\n{/* Compatibility anchors for old GitBook/Docusaurus links. */}\n` + additions.join('\n') + '\n';
      writeUtf(file, text);
    }
  }
}

function addCompatAnchorsNearLinkedHeadings() {
  const wanted = new Map();
  for (const outRel of relMd.map(outRelFor)) {
    const file = path.join(docs, outRel);
    const text = readUtf(file);
    for (const m of text.matchAll(/\[([^\]\n]+)\]\(([^)]+#[^)]+)\)/g)) {
      const label = cleanTitle(m[1].replace(/[*_`\[\]]/g, ''));
      const href = m[2];
      const hash = href.split('#')[1]?.split(/[?&]/)[0];
      const targetOut = resolveDocOutRel(outRel, href);
      if (!label || !hash || !targetOut) continue;
      if (!wanted.has(targetOut)) wanted.set(targetOut, []);
      wanted.get(targetOut).push({hash: decodeURIComponent(hash), label});
    }
  }
  for (const [outRel, items] of wanted.entries()) {
    const file = path.join(docs, outRel);
    let text = readUtf(file);
    const lines = text.split('\n');
    const existing = new Set([...text.matchAll(/\{#([^}]+)\}|id="([^"]+)"/g)].map(m => m[1] || m[2]));
    const inserts = [];
    for (const {hash, label} of items) {
      const safe = hash.replace(/[^A-Za-z0-9А-Яа-я._~%:-]/g, '-');
      if (!safe || existing.has(safe)) continue;
      const idx = lines.findIndex(line => /^#{1,6}\s+/.test(line) && stripHeadingSyntax(line) === label);
      if (idx === -1) continue;
      inserts.push({idx, line: `###### \u200b {#${safe}}`});
      existing.add(safe);
    }
    if (inserts.length) {
      for (const ins of inserts.sort((a, b) => b.idx - a.idx)) lines.splice(ins.idx, 0, ins.line);
      writeUtf(file, lines.join('\n'));
    }
  }
}

function addLocalCompatAnchorsForSelfLinks() {
  for (const outRel of relMd.map(outRelFor)) {
    const file = path.join(docs, outRel);
    let text = readUtf(file);
    const lines = text.split('\n');
    const existing = new Set([...text.matchAll(/\{#([^}]+)\}|id="([^"]+)"/g)].map(m => m[1] || m[2]));
    const selfNames = new Set([path.posix.basename(outRel), path.posix.basename(outRel).replace(/\.md$/, ''), './', '.', '']);
    if (outRel.endsWith('/index.md')) selfNames.add('README.md');
    const inserts = [];
    const append = [];
    for (const m of text.matchAll(/\]\(([^)]+#[^)]+)\)/g)) {
      const href = m[1];
      const raw = href.split('#')[0].replace(/^\.\//, '');
      if (/^https?:/.test(raw) || raw.startsWith('/gitbook/')) continue;
      if (raw && !selfNames.has(raw) && !raw.endsWith('/' + path.posix.basename(outRel))) continue;
      const hash = decodeURIComponent(href.split('#')[1]?.split(/[?&]/)[0] || '');
      const safe = hash.replace(/[^A-Za-z0-9А-Яа-я._~%:-]/g, '-');
      if (!safe || existing.has(safe)) continue;
      let idx = -1;
      for (let i = 0; i < lines.length; i++) {
        if (/^#{1,6}\s+/.test(lines[i]) && slugifyCompatHeading(stripHeadingSyntax(lines[i])) === safe) { idx = i; break; }
      }
      if (idx >= 0) inserts.push({idx, line: `###### \u200b {#${safe}}`});
      else append.push(`###### \u200b {#${safe}}`);
      existing.add(safe);
    }
    if (inserts.length || append.length) {
      for (const ins of inserts.sort((a, b) => b.idx - a.idx)) lines.splice(ins.idx, 0, ins.line);
      if (append.length) lines.push('', '{/* Compatibility anchors for old GitBook/Docusaurus links. */}', ...append);
      writeUtf(file, lines.join('\n'));
    }
  }
}

const outRelToRoute = new Map(relMd.map(rel => [outRelFor(rel), docRouteForOutRel(outRelFor(rel))]));

for (const rel of relMd) {
  const outRel = outRelFor(rel);
  writeUtf(path.join(docs, outRel), convert(readUtf(path.join(src, rel)), rel));
}
addCompatAnchorsForReferencedHashes();
addCompatAnchorsNearLinkedHeadings();
addLocalCompatAnchorsForSelfLinks();

function parseSummary(){
  const lines = readUtf(path.join(src, 'SUMMARY.md')).split('\n');
  const root = [];
  let currentSection = null;
  const stack = [{indent:-1, children:root}];
  for (const line of lines) {
    const h = line.match(/^##\s+(.+?)(?:\s+<.*)?$/);
    if (h) {
      const label = cleanTitle(h[1]);
      currentSection = {type:'category', label, items:[], className:'sidebar-section'};
      root.push(currentSection);
      stack.length = 0;
      stack.push({indent:-1, children:currentSection.items});
      continue;
    }
    const m = line.match(/^(\s*)\*\s+\[([^\]]+)\]\(([^)]+)\)/);
    if (!m) continue;
    const indent = Math.floor(m[1].length / 2);
    const label = cleanTitle(m[2]);
    const link = m[3];
    const id = sidebarIdForLink(link);
    if (!id && /^https?:/.test(link)) continue;
    const item = {type:'doc', id, label, items:[]};
    while (stack.length > 1 && stack[stack.length-1].indent >= indent) stack.pop();
    stack[stack.length-1].children.push(item);
    stack.push({indent, children:item.items});
  }
  function normalize(items){
    return items.map(item => {
      if (item.type === 'category') {
        item.items = normalize(item.items || []);
        return item;
      }
      if (item.items && item.items.length) {
        const category = {type:'category', label:item.label, link:{type:'doc', id:item.id}, items: normalize(item.items)};
        return category;
      }
      delete item.items;
      return item;
    });
  }
  return normalize(root);
}

function sidebarItemToTs(item, depth=2){
  const pad = ' '.repeat(depth);
  if (item.type === 'doc') return `${pad}{type: 'doc', id: ${JSON.stringify(item.id)}, label: ${JSON.stringify(item.label)}}`;
  const link = item.link ? `, link: {type: 'doc', id: ${JSON.stringify(item.link.id)}}` : '';
  const className = item.className ? `, className: ${JSON.stringify(item.className)}` : '';
  const items = (item.items || []).map(x => sidebarItemToTs(x, depth+4)).join(',\n');
  return `${pad}{type: 'category', label: ${JSON.stringify(item.label)}${link}${className}, collapsed: true, items: [\n${items}\n${pad}]}`;
}
const sidebar = parseSummary();
writeUtf(path.join(site, 'sidebars.ts'), `import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';\n\nconst sidebars: SidebarsConfig = {\n  docs: [\n${sidebar.map(x => sidebarItemToTs(x, 4)).join(',\n')}\n  ],\n};\n\nexport default sidebars;\n`);

// Clean Docusaurus sample artifacts.
fs.rmSync(path.join(site, 'blog'), {recursive:true, force:true});
fs.mkdirSync(path.join(site, 'src', 'pages'), {recursive:true});
fs.writeFileSync(path.join(site, 'src', 'pages', 'index.tsx'), `import React from 'react';\nimport {Redirect} from '@docusaurus/router';\n\nexport default function Home(): JSX.Element {\n  return <Redirect to="/docs/intro" />;\n}\n`);
try { fs.rmSync(path.join(site, 'src', 'components', 'HomepageFeatures'), {recursive:true, force:true}); } catch {}
try { fs.rmSync(path.join(site, 'static', 'img', 'docusaurus.png'), {force:true}); } catch {}

writeUtf(path.join(site, 'docusaurus.config.ts'), `import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Справочный центр ТРИК',
  tagline: 'Справка по TRIK Studio и контроллерам',
  favicon: 'img/favicon.ico',

  url: 'https://help-new.trikset.com',
  baseUrl: '/',

  organizationName: 'trikset',
  projectName: 'trik-help',

  onBrokenLinks: 'warn',
  onBrokenAnchors: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['ru', 'en'],
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: '/docs',
        searchBarPosition: 'right',
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Справочный центр ТРИК',
      items: [
        {
          href: 'https://github.com/trikset/trik-help',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: ` + '`© ${new Date().getFullYear()} TRIK`' + `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
`);

console.log(`Converted ${relMd.length} markdown files`);
console.log(`Assets copied to ${staticAssets}`);
console.log(`Sidebar top-level items: ${sidebar.length}`);
