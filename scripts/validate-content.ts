/**
 * Content Validation Script for VPNTOP.BLOG
 * Checks data consistency, template variables, duplicate slugs, and pricing integrity.
 */

import { AIRPORTS } from '../src/data/airports.js';
import * as fs from 'fs';
import * as path from 'path';

let passCount = 0;
let failCount = 0;

function assert(condition: boolean, message: string) {
  if (condition) {
    console.log(`  ✓ PASS: ${message}`);
    passCount++;
  } else {
    console.error(`  ✗ FAIL: ${message}`);
    failCount++;
  }
}

console.log('======================================================');
console.log('1. 验证机场核心数据库 (src/data/airports.ts)');
console.log('======================================================');

assert(AIRPORTS.length >= 5, `收录机场数量至少 5 家 (当前: ${AIRPORTS.length})`);

const slugs = new Set<string>();
AIRPORTS.forEach((airport) => {
  assert(!slugs.has(airport.slug), `机场 Slug 唯一性: ${airport.slug}`);
  slugs.add(airport.slug);

  assert(Boolean(airport.name && airport.name.trim()), `机场存在名称: ${airport.name}`);
  assert(airport.startingPrice > 0, `${airport.name} 起步价格合法 (>0): ¥${airport.startingPrice}`);
  assert(airport.plans.length > 0, `${airport.name} 包含至少一个套餐 (当前: ${airport.plans.length})`);
  assert(airport.protocols.length > 0, `${airport.name} 包含协议支持`);
  assert(airport.regions.length > 0, `${airport.name} 包含节点地区`);
  assert(airport.advantages.length > 0, `${airport.name} 包含优势说明`);
  assert(airport.suitableFor.length > 0, `${airport.name} 包含适合人群`);
  assert(Boolean(airport.lastVerified), `${airport.name} 包含最后核验日期: ${airport.lastVerified}`);
  assert(['tested', 'official-data', 'unverified'].includes(airport.testStatus), `${airport.name} testStatus 符合规范枚举`);
});

console.log('\n======================================================');
console.log('2. 检查未替换的模板占位符 ({{...}})');
console.log('======================================================');

function checkNoPlaceholders(dir: string) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.git' && entry.name !== 'dist') {
        checkNoPlaceholders(fullPath);
      }
    } else if (entry.name.endsWith('.ts') || entry.name.endsWith('.astro') || entry.name.endsWith('.md')) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      const placeholderMatch = content.match(/\{\{([a-zA-Z0-9_\u4e00-\u9fa5]+)\}\}/);
      assert(!placeholderMatch, `无未替换模板变量: ${path.relative(process.cwd(), fullPath)}`);
    }
  }
}

checkNoPlaceholders(path.join(process.cwd(), 'src'));

console.log('\n======================================================');
console.log('3. 检查文章与百科 Content Markdown 完整度');
console.log('======================================================');

const contentDir = path.join(process.cwd(), 'src/content');
const collections = ['guides', 'blog', 'glossary'];

collections.forEach((col) => {
  const colPath = path.join(contentDir, col);
  if (fs.existsSync(colPath)) {
    const files = fs.readdirSync(colPath).filter(f => f.endsWith('.md'));
    assert(files.length >= 5, `Collection [${col}] 包含至少 5 篇内容 (当前: ${files.length})`);
    files.forEach((f) => {
      const content = fs.readFileSync(path.join(colPath, f), 'utf-8');
      assert(content.includes('title:'), `文件包含 title: ${col}/${f}`);
      assert(content.includes('description:'), `文件包含 description: ${col}/${f}`);
      assert(content.length > 300, `正文内容长度充足 (>300字节): ${col}/${f}`);
    });
  }
});

console.log('\n======================================================');
console.log(`内容数据验证完成！PASS: ${passCount}, FAIL: ${failCount}`);
console.log('======================================================');

if (failCount > 0) {
  process.exit(1);
}
