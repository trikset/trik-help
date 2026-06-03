#!/usr/bin/env node
import {mkdir, readdir, readFile, writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const docsRoot = path.join(root, 'docs');
const outputPath = path.join(root, 'static/admin/editor/content.json');

async function walk(dir) {
  const entries = await readdir(dir, {withFileTypes: true});
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    if (entry.isFile() && entry.name.endsWith('.md')) files.push(full);
  }
  return files;
}

function docIdFromFile(file) {
  return path.relative(docsRoot, file).replace(/\\/g, '/').replace(/\.md$/, '');
}

function stripFrontmatter(source) {
  return source.replace(/^---\n[\s\S]*?\n---\n+/, '').replace(/^import .*?;\n/gm, '').trim();
}

function headingAnchor(text) {
  const explicit = text.match(/\{#([^}]+)\}/) || text.match(/&#123;#([^&]+)&#125;/i);
  if (explicit) return explicit[1];
  return text
    .replace(/<[^>]+>/g, '')
    .replace(/&[#a-z0-9]+;/gi, '')
    .replace(/\{#[^}]+\}/g, '')
    .trim()
    .toLowerCase()
    .replace(/ё/g, 'е')
    .replace(/[^a-zа-я0-9\s-]/gi, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function cleanHeading(text) {
  return text
    .replace(/\s*\{#[^}]+\}\s*/g, '')
    .replace(/&#123;#.*?&#125;/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&#x20;|&nbsp;/g, ' ')
    .replace(/[\u200b\u200c\u200d\ufeff]/g, '')
    .replace(/&[#a-z0-9]+;/gi, '')
    .trim();
}



function listBlocksFromText(text) {
  const lines = String(text || '').split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  if (!lines.length) return [];
  if (/^\s*\d+\\?\.\s+/.test(lines[0])) {
    return lines.map((line) => ({type: 'numbered-list', raw: line.replace(/^\s*\d+\\?\.\s+/, '').trim() || 'Новый пункт'}));
  }
  if (/^\s*[-*+]\s+\[[ xX]\]\s+/.test(lines[0])) {
    return lines.map((line) => ({
      type: 'task-list',
      raw: line.replace(/^\s*[-*+]\s+\[[ xX]\]\s+/, '').trim() || 'Новая задача',
      checked: /^\s*[-*+]\s+\[[xX]\]\s+/.test(line),
    }));
  }
  if (/^\s*[-*+]\s+/.test(lines[0])) {
    return lines.map((line) => ({type: 'bulleted-list', raw: line.replace(/^\s*[-*+]\s+/, '').trim() || 'Новый пункт'}));
  }
  return [];
}

function blockType(raw) {
  const text = raw.trim();
  if (/^#{1,6}\s+/.test(text)) return `heading-${text.match(/^#+/)[0].length}`;
  if (/^```/.test(text)) return 'code';
  if (/^:::/m.test(text)) return 'hint';
  if (/^<Tabs[\s>]/.test(text)) return 'tabs';
  if (/^<div className="content-ref-card">/.test(text)) return 'content-ref';
  if (/^<(?:span|a)\s+[^>]*id="[^"]+"[^>]*><\/(?:span|a)>$/.test(text)) return 'anchor';
  if (/^>\s/.test(text)) return 'quote';
  if (/^!\[[^\]]*\]\([^)]+\)$/.test(text) || /^<div[^>]*>\s*<img[\s\S]*<\/div>$/.test(text) || /^<img[\s\S]*>$/.test(text)) return 'image';
  if (/^\|.+\|\n\|[-:|\s]+\|/.test(text)) return 'table';
  if (/^\s*[-*+]\s+\[[ xX]\]/m.test(text)) return 'task-list';
  if (/^\s*\d+\\?\.\s+/m.test(text)) return 'numbered-list';
  if (/^\s*[-*+]\s+/m.test(text)) return 'bulleted-list';
  return 'paragraph';
}

function parseBlocks(source) {
  const lines = stripFrontmatter(source).split(/\r?\n/);
  const blocks = [];
  let current = [];
  let inFence = false;
  let inTabs = false;
  let inAdmonition = false;

  function flush() {
    const raw = current.join('\n').trim();
    if (!raw) { current = []; return; }
    if (raw === '{/* Compatibility anchors for old GitBook/Docusaurus links. */}') { current = []; return; }
    const type = blockType(raw);
    const listBlocks = listBlocksFromText(raw);
    if (listBlocks.length) {
      blocks.push(...listBlocks);
      current = [];
      return;
    }
    const block = {type, raw};
    if (type === 'anchor') {
      const id = raw.match(/id="([^"]+)"/)?.[1];
      block.anchor = id || '';
      blocks.push(block);
      current = [];
      return;
    }
    const heading = raw.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      block.level = heading[1].length;
      block.text = cleanHeading(heading[2]);
      block.anchor = headingAnchor(heading[2]);
      if (!block.text) block.type = 'anchor';
    }
    blocks.push(block);
    current = [];
  }

  for (const line of lines) {
    if (/^<Tabs[\s>]/.test(line)) inTabs = true;
    if (inTabs) {
      current.push(line);
      if (/^<\/Tabs>/.test(line)) { inTabs = false; flush(); }
      continue;
    }

    if (/^<div className="content-ref-card">/.test(line)) {
      flush();
      current.push(line);
      continue;
    }
    if (current.length && /^<\/div>\s*$/.test(line) && /^<div className="content-ref-card">/.test(current[0])) {
      current.push(line);
      flush();
      continue;
    }

    if (/^\s*(?:\d+\\?\.\s+|[-*+]\s+(?:\[[ xX]\]\s+)?)/.test(line)) {
      flush();
      current.push(line);
      flush();
      continue;
    }

    if (line.startsWith('```')) {
      current.push(line);
      inFence = !inFence;
      if (!inFence) flush();
      continue;
    }
    if (inFence) { current.push(line); continue; }

    if (/^#{1,6}\s+/.test(line)) {
      flush();
      current.push(line);
      flush();
      continue;
    }

    if (/^:::/m.test(line)) {
      current.push(line);
      inAdmonition = !inAdmonition;
      if (!inAdmonition) flush();
      continue;
    }
    if (inAdmonition) { current.push(line); continue; }

    if (!line.trim()) { flush(); continue; }
    current.push(line);
  }
  flush();
  return blocks;
}

async function main() {
  const files = await walk(docsRoot);
  const content = {};
  for (const file of files) {
    const id = docIdFromFile(file);
    const raw = await readFile(file, 'utf8');
    const blocks = parseBlocks(raw);
    content[id] = {
      id,
      file: `docs/${id}.md`,
      blocks,
      toc: blocks.filter((block) => block.type.startsWith('heading-') && block.text).map(({level, text, anchor}) => ({level, text, anchor})),
    };
  }
  await mkdir(path.dirname(outputPath), {recursive: true});
  await writeFile(outputPath, `${JSON.stringify(content, null, 2)}\n`);
  console.log(`Generated ${path.relative(root, outputPath)} for ${Object.keys(content).length} docs.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
