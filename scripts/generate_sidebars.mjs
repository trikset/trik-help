#!/usr/bin/env node
import {readFile, writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const inputPath = path.join(root, 'sidebars.json');
const outputPath = path.join(root, 'sidebars.ts');

async function main() {
  const raw = await readFile(inputPath, 'utf8');
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    console.error(`Не удалось разобрать ${path.relative(root, inputPath)} как JSON:`);
    console.error(error.message);
    process.exit(1);
  }

  if (!parsed || typeof parsed !== 'object' || !Array.isArray(parsed.docs)) {
    console.error('sidebars.json должен содержать объект с массивом "docs".');
    process.exit(1);
  }

  const source = `import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';\n\nimport sidebarsData from './sidebars.json';\n\nconst sidebars = sidebarsData as SidebarsConfig;\n\nexport default sidebars;\n`;
  await writeFile(outputPath, source);
  console.log(`Generated ${path.relative(root, outputPath)} from ${path.relative(root, inputPath)} (${parsed.docs.length} top-level items).`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
