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
  const explicit = text.match(/\{#([^}]+)\}/);
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
    .replace(/&[#a-z0-9]+;/gi, '')
    .trim();
}


function blockType(raw) {
  const text = raw.trim();
  if (/^#{1,6}\s+/.test(text)) return `heading-${text.match(/^#+/)[0].length}`;
  if (/^```/.test(text)) return 'code';
  if (/^:::/m.test(text)) return 'hint';
  if (/^<Tabs[\s>]/.test(text)) return 'tabs';
  if (/^>\s/.test(text)) return 'quote';
  if (/^!\[[^\]]*\]\([^)]+\)$/.test(text) || /^<div[^>]*>\s*<img[\s\S]*<\/div>$/.test(text) || /^<img[\s\S]*>$/.test(text)) return 'image';
  if (/^\|.+\|\n\|[-:|\s]+\|/.test(text)) return 'table';
  if (/^\s*[-*+]\s+\[[ xX]\]/m.test(text)) return 'task-list';
  if (/^\s*\d+\.\s+/m.test(text)) return 'numbered-list';
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
    const type = blockType(raw);
    const block = {type, raw};
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
    if (line.startsWith('```')) {
      current.push(line);
      inFence = !inFence;
      if (!inFence) flush();
      continue;
    }
    if (inFence) { current.push(line); continue; }

    if (/^<Tabs[\s>]/.test(line)) inTabs = true;
    if (inTabs) {
      current.push(line);
      if (/^<\/Tabs>/.test(line)) { inTabs = false; flush(); }
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
