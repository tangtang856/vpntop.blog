/**
 * Internal Link Consistency and 404 Check Script for VPNTOP.BLOG
 */

import * as fs from 'fs';
import * as path from 'path';

const DIST_DIR = path.join(process.cwd(), 'dist');

if (!fs.existsSync(DIST_DIR)) {
  console.error(`错误：dist 目录不存在！请先运行 npm run build。`);
  process.exit(1);
}

function getHtmlFiles(dir: string): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of list) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      results = results.concat(getHtmlFiles(fullPath));
    } else if (file.name.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

const htmlFiles = getHtmlFiles(DIST_DIR);
let passLinks = 0;
let brokenLinks = 0;
const checkedUrls = new Set<string>();

console.log('======================================================');
console.log(`开始内部链接连通性检查：扫描 ${htmlFiles.length} 个页面...`);
console.log('======================================================\n');

for (const filePath of htmlFiles) {
  const relPath = path.relative(DIST_DIR, filePath);
  const html = fs.readFileSync(filePath, 'utf-8');

  // Remove <script> blocks to avoid checking JS template strings
  const cleanHtml = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

  // Extract hrefs from anchor tags
  const hrefRegex = /<a\s+(?:[^>]*?\s+)?href="([^"#\s>]+)"/gi;
  let match;
  while ((match = hrefRegex.exec(cleanHtml)) !== null) {
    let link = match[1];

    // Filter for internal links
    let internalPath: string | null = null;
    if (link.startsWith('/')) {
      internalPath = link;
    } else if (link.startsWith('https://vpntop.blog/')) {
      internalPath = link.replace('https://vpntop.blog', '');
    }

    if (internalPath) {
      if (checkedUrls.has(internalPath)) {
        continue;
      }
      checkedUrls.add(internalPath);

      // Resolve file target in dist
      // Strip query parameters
      const cleanPath = internalPath.split('?')[0];

      // Targets can be:
      // / -> dist/index.html
      // /foo/ -> dist/foo/index.html or dist/foo.html
      // /sitemap-index.xml -> dist/sitemap-index.xml
      // /favicon.svg -> dist/favicon.svg
      let targetFile = path.join(DIST_DIR, cleanPath);
      let exists = false;

      if (fs.existsSync(targetFile)) {
        const stat = fs.statSync(targetFile);
        if (stat.isFile()) exists = true;
        else if (stat.isDirectory()) {
          const indexHtml = path.join(targetFile, 'index.html');
          if (fs.existsSync(indexHtml)) exists = true;
        }
      } else {
        // Try appending index.html or .html
        if (fs.existsSync(path.join(targetFile, 'index.html'))) {
          exists = true;
        } else if (fs.existsSync(`${targetFile}.html`)) {
          exists = true;
        }
      }

      if (exists) {
        passLinks++;
      } else {
        console.error(`  ✗ BROKEN LINK: 在 ${relPath} 中发现失效链接: ${internalPath}`);
        brokenLinks++;
      }
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
