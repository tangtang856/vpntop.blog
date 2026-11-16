/**
 * Internal Link Consistency and 404 Check Script for VPNTOP.BLOG
 */

import * as fs from 'fs';
import * as path from 'path';

const ROOT_DIR = process.cwd();

function getHtmlFiles(dir: string): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of list) {
    if (file.name === 'node_modules' || file.name === '.git' || file.name === 'dist' || file.name === '.astro') {
      continue;
    }
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      results = results.concat(getHtmlFiles(fullPath));
    } else if (file.name.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

const htmlFiles = getHtmlFiles(ROOT_DIR);
let passLinks = 0;
let brokenLinks = 0;
const checkedUrls = new Set<string>();

console.log('======================================================');
console.log(`开始内部链接连通性检查：扫描 ${htmlFiles.length} 个页面...`);
console.log('======================================================\n');

for (const filePath of htmlFiles) {
  const relPath = path.relative(ROOT_DIR, filePath);
  const html = fs.readFileSync(filePath, 'utf-8');

  // Remove <script> blocks to avoid checking JS template strings
  const cleanHtml = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

  // Extract hrefs from anchor tags
  const hrefRegex = /<a\s+(?:[^>]*?\s+)?href="([^"#\s>]+)"/gi;
  let match;
  while ((match = hrefRegex.exec(cleanHtml)) !== null) {
    let link = match[1];

    // Filter out external URLs and anchors
    if (
      link.startsWith('http://') ||
      link.startsWith('https://') ||
      link.startsWith('//') ||
      link.startsWith('#') ||
      link.startsWith('mailto:') ||
      link.startsWith('javascript:')
    ) {
      continue;
    }

    // Key user requirement check: no root-absolute paths starting with /
    if (link.startsWith('/')) {
      console.error(`  ✗ VIOLATION: 在 ${relPath} 中发现以 / 开头的绝对路径链接: ${link}`);
      brokenLinks++;
      continue;
    }

    const fileDir = path.dirname(filePath);
    const cleanLink = link.split('?')[0];
    const targetFile = path.resolve(fileDir, cleanLink);

    let exists = false;
    if (fs.existsSync(targetFile)) {
      const stat = fs.statSync(targetFile);
      if (stat.isFile()) exists = true;
      else if (stat.isDirectory()) {
        if (fs.existsSync(path.join(targetFile, 'index.html'))) exists = true;
      }
    }

    if (exists) {
      passLinks++;
    } else {
      console.error(`  ✗ BROKEN RELATIVE LINK: 在 ${relPath} 中发现相对链接无法在本地磁盘解析: ${link} -> ${targetFile}`);
      brokenLinks++;
    }
  }
}

console.log('\n======================================================');
console.log(`链接检查完成！有效内链: ${passLinks}, 失效链接: ${brokenLinks}`);
console.log('======================================================');

if (brokenLinks > 0) {
  process.exit(1);
} else {
  console.log('🎉 全站所有内部链接均 100% 有效，无任何 404 死链！');
}
