#!/usr/bin/env node
import {access, readFile} from 'node:fs/promises';
import {constants} from 'node:fs';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sidebarPath = path.join(root, 'sidebars.json');
const docsRoot = path.join(root, 'docs');
const problems = [];
let itemsSeen = 0;
let docsSeen = 0;

function fail(message) {
  problems.push(message);
}

function docPathForId(id) {
  return path.join(docsRoot, `${id}.md`);
}

async function fileExists(filePath) {
  try {
    await access(filePath, constants.R_OK);
    return true;
  } catch {
    return false;
  }
}

async function validateItem(item, trail = []) {
  itemsSeen += 1;
  if (!item || typeof item !== 'object') {
    fail(`${trail.join(' / ') || 'root'}: item должен быть объектом`);
    return;
  }
  const label = item.label || item.id || item.type || '<без названия>';
  const nextTrail = [...trail, label];
  if (item.type !== 'doc' && item.type !== 'category') {
    fail(`${nextTrail.join(' / ')}: неизвестный type=${JSON.stringify(item.type)}`);
    return;
  }
  if (item.type === 'doc') {
    docsSeen += 1;
    if (!item.id || typeof item.id !== 'string') {
      fail(`${nextTrail.join(' / ')}: doc без строкового id`);
    } else if (!(await fileExists(docPathForId(item.id)))) {
      fail(`${nextTrail.join(' / ')}: нет docs/${item.id}.md`);
    }
  }
  if (item.type === 'category') {
    if (!item.label || typeof item.label !== 'string') {
      fail(`${nextTrail.join(' / ')}: category без label`);
    }
    if (item.link) {
      if (item.link.type !== 'doc' || !item.link.id) {
        fail(`${nextTrail.join(' / ')}: category link должен быть {type:"doc", id:"..."}`);
      } else if (!(await fileExists(docPathForId(item.link.id)))) {
        fail(`${nextTrail.join(' / ')}: нет docs/${item.link.id}.md для category link`);
      }
    }
    if (!Array.isArray(item.items)) {
      fail(`${nextTrail.join(' / ')}: category без массива items`);
    } else {
      for (const child of item.items) {
        await validateItem(child, nextTrail);
      }
    }
  }
}

async function main() {
  let sidebars;
  try {
    sidebars = JSON.parse(await readFile(sidebarPath, 'utf8'));
  } catch (error) {
    console.error(`Не удалось разобрать ${path.relative(root, sidebarPath)} как JSON:`);
    console.error(error.message);
    process.exit(1);
  }

  if (!sidebars || typeof sidebars !== 'object' || !Array.isArray(sidebars.docs)) {
    console.error('sidebars.json должен содержать объект с массивом "docs".');
    process.exit(1);
  }

  for (const item of sidebars.docs) {
    await validateItem(item);
  }

  if (problems.length) {
    console.error(`Sidebar validation failed: ${problems.length} problem(s).`);
    for (const problem of problems.slice(0, 40)) console.error(`- ${problem}`);
    if (problems.length > 40) console.error(`...and ${problems.length - 40} more.`);
    process.exit(1);
  }

  console.log(`Sidebar validation OK: ${itemsSeen} items, ${docsSeen} doc links.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
