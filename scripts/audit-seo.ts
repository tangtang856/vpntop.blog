/**
 * Technical SEO Audit Script for VPNTOP.BLOG
 * Inspects all built HTML files in dist/ directory.
 */

import * as fs from 'fs';
import * as path from 'path';

const DIST_DIR = path.join(process.cwd(), 'dist');

if (!fs.existsSync(DIST_DIR)) {
  console.error(`错误：dist 目录不存在！请先运行 npm run build 生成静态文件。`);
  process.exit(1);
}

let passCount = 0;
let failCount = 0;
let totalPages = 0;

function assert(condition: boolean, message: string) {
  if (condition) {
    passCount++;
  } else {
    console.error(`  ✗ FAIL: ${message}`);
    failCount++;
  }
}

// Find all HTML files
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
totalPages = htmlFiles.length;

console.log('======================================================');
console.log(`开始全面 SEO 审计：正在检查 ${totalPages} 个静态 HTML 页面...`);
console.log('======================================================\n');

const titlesMap = new Map<string, string>();

for (const filePath of htmlFiles) {
  const relPath = path.relative(DIST_DIR, filePath);
  const is404 = relPath.includes('404');
  const html = fs.readFileSync(filePath, 'utf-8');

  // 1. Title check
  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  assert(Boolean(titleMatch && titleMatch[1].trim()), `${relPath} 必须包含有效的 <title>`);

  if (titleMatch) {
    const titleText = titleMatch[1].trim();
    if (titlesMap.has(titleText) && !is404) {
      assert(false, `${relPath} Title 与 ${titlesMap.get(titleText)} 重复: "${titleText}"`);
    } else {
      titlesMap.set(titleText, relPath);
    }
  }

  // 2. Meta Description check
  const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i) ||
                    html.match(/<meta\s+content="([^"]*)"\s+name="description"/i);
  assert(Boolean(descMatch && descMatch[1].trim()), `${relPath} 必须包含有效的 meta description`);

  // 3. Canonical URL check
  const canonicalMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]*)"/i) ||
                         html.match(/<link\s+href="([^"]*)"\s+rel="canonical"/i);
  assert(Boolean(canonicalMatch && canonicalMatch[1].trim()), `${relPath} 必须包含 Canonical URL`);

  if (canonicalMatch) {
    const canonical = canonicalMatch[1];
    assert(canonical.startsWith('https://vpntop.blog'), `${relPath} Canonical 必须使用正式域名: ${canonical}`);
    assert(!canonical.includes('localhost'), `${relPath} Canonical 禁止出现 localhost`);
    if (!is404) {
      assert(canonical.endsWith('/'), `${relPath} Canonical 必须遵循尾部斜杠规范: ${canonical}`);
    }
  }

  // 4. Single H1 check
  const h1Matches = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
  if (is404) {
    assert(h1Matches.length === 1, `404 页面包含且仅包含 1 个 H1 (当前: ${h1Matches.length})`);
  } else {
    assert(h1Matches.length === 1, `${relPath} 必须包含且仅包含 1 个 <h1> 标签 (当前发现: ${h1Matches.length})`);
  }

  // 5. Robots meta check
  const robotsMatch = html.match(/<meta\s+name="robots"\s+content="([^"]*)"/i);
  assert(Boolean(robotsMatch), `${relPath} 必须显式声明 robots meta`);

  // 6. JSON-LD Schemas check
  const jsonLdMatches = html.match(/<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi) || [];
  assert(jsonLdMatches.length > 0, `${relPath} 至少包含一个 JSON-LD 结构化数据`);
  for (const scriptTag of jsonLdMatches) {
    const jsonContent = scriptTag.replace(/<script[^>]*>|<\/script>/gi, '');
    try {
      JSON.parse(jsonContent);
      passCount++;
    } catch (e: any) {
      assert(false, `${relPath} JSON-LD 解析异常: ${e.message}`);
    }
  }

  // 7. No localhost in links
  assert(!html.includes('http://localhost:'), `${relPath} 不得包含任何硬编码 localhost 链接`);
}

// Check sitemap existence
const sitemapPath = path.join(DIST_DIR, 'sitemap-index.xml');
assert(fs.existsSync(sitemapPath), `dist 目录下生成了 sitemap-index.xml`);

// Check robots.txt
const robotsPath = path.join(DIST_DIR, 'robots.txt');
assert(fs.existsSync(robotsPath), `dist 目录下生成了 robots.txt`);

// Check IndexNow key file
const indexNowPath = path.join(DIST_DIR, 'b6563b7156944e6fa16b0632b851df22.txt');
assert(fs.existsSync(indexNowPath), `dist 目录下生成了 IndexNow Key 验证文件`);

console.log('\n======================================================');
console.log(`SEO 审计完成！共检查 ${totalPages} 个页面。`);
console.log(`审计统计：PASS: ${passCount}, FAIL: ${failCount}`);
console.log('======================================================');

if (failCount > 0) {
  process.exit(1);
} else {
  console.log('🎉 全部 SEO 关键指标均已严格通过！');
}
