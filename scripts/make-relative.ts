/**
 * Post-build Relative Path Converter for VPNTOP.BLOG
 *
 * Ensures all CSS, JS, images, icons, and internal page links use standard relative paths
 * (e.g., ./style.css, ../css/style.css, ../../ranking/overall/index.html),
 * strictly eliminating all root-relative paths (/...) so the site works perfectly both under:
 * 1. Local direct double-click (file:// protocol)
 * 2. Web servers / Cloudflare Pages / GitHub Pages
 */

import * as fs from 'fs';
import * as path from 'path';

const DIST_DIR = path.join(process.cwd(), 'dist');

if (!fs.existsSync(DIST_DIR)) {
  console.error('Error: dist directory does not exist. Run astro build first.');
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
console.log(`[make-relative] 正在处理 ${htmlFiles.length} 个 HTML 页面，转换为标准相对路径...`);

let totalReplacements = 0;

for (const filePath of htmlFiles) {
  const relFromDist = path.relative(DIST_DIR, filePath).replace(/\\/g, '/');
  // Calculate directory depth from dist root
  // e.g. "index.html" -> depth 0 -> rootPrefix: "./"
  // e.g. "about/index.html" -> depth 1 -> rootPrefix: "../"
  // e.g. "ranking/overall/index.html" -> depth 2 -> rootPrefix: "../../"
  const segments = relFromDist.split('/');
  const depth = segments.length - 1;
  const rootPrefix = depth === 0 ? './' : '../'.repeat(depth);

  let html = fs.readFileSync(filePath, 'utf-8');
  let fileReplacements = 0;

  /**
   * Helper to convert a root-relative path to a standard relative path
   * @param rawPath e.g. "/", "/favicon.svg", "/_astro/about.css", "/ranking/overall/", "/404/"
   */
  function toRelative(rawPath: string): string {
    // Ignore external URLs, protocols, anchors, javascript, data URIs
    if (
      rawPath.startsWith('http://') ||
      rawPath.startsWith('https://') ||
      rawPath.startsWith('//') ||
      rawPath.startsWith('#') ||
      rawPath.startsWith('mailto:') ||
      rawPath.startsWith('tel:') ||
      rawPath.startsWith('javascript:') ||
      rawPath.startsWith('data:')
    ) {
      return rawPath;
    }

    // Strip leading slashes and any leading "./"
    let clean = rawPath.replace(/^\/+/g, '').replace(/^\.\/+/g, '');

    // Case 1: Root homepage link ("/" or "")
    if (clean === '') {
      return `${rootPrefix}index.html`;
    }

    // Case 2: 404 page link
    if (clean === '404' || clean === '404/' || clean === '404.html') {
      return `${rootPrefix}404.html`;
    }

    // Case 3: Directory routes (e.g. "ranking/overall/", "about", "compare/")
    // If it has no file extension (like .svg, .css, .js, .xml, .txt, .html), append index.html
    const hasExt = path.extname(clean) !== '';
    if (!hasExt) {
      if (!clean.endsWith('/')) {
        clean += '/';
      }
      clean += 'index.html';
    }

    return `${rootPrefix}${clean}`;
  }

  // 1. Transform <link ... href="/..."> (stylesheets, icons, etc.)
  // (Note: We do not alter canonical tags that already have full https:// domain)
  html = html.replace(/(<link\b[^>]*?\bhref=")(\/[^"]*?)(")/gi, (match, p1, p2, p3) => {
    // Check if this link tag is a canonical or alternate with full URL
    if (match.includes('rel="canonical"') && p2.startsWith('http')) {
      return match;
    }
    fileReplacements++;
    return `${p1}${toRelative(p2)}${p3}`;
  });

  // 2. Transform <script ... src="/...">
  html = html.replace(/(<script\b[^>]*?\bsrc=")(\/[^"]*?)(")/gi, (match, p1, p2, p3) => {
    fileReplacements++;
    return `${p1}${toRelative(p2)}${p3}`;
  });

  // 3. Transform <img ... src="/...">
  html = html.replace(/(<img\b[^>]*?\bsrc=")(\/[^"]*?)(")/gi, (match, p1, p2, p3) => {
    fileReplacements++;
    return `${p1}${toRelative(p2)}${p3}`;
  });

  // 4. Transform <a ... href="/..."> (All internal anchor links)
  html = html.replace(/(<a\b[^>]*?\bhref=")(\/[^"]*?)(")/gi, (match, p1, p2, p3) => {
    fileReplacements++;
    return `${p1}${toRelative(p2)}${p3}`;
  });

  // 5. Transform any remaining standalone /./_astro/ or /_astro/ references
  html = html.replace(/href="\/(\.\/)?_astro\//g, () => {
    fileReplacements++;
    return `href="${rootPrefix}_astro/`;
  });
  html = html.replace(/src="\/(\.\/)?_astro\//g, () => {
    fileReplacements++;
    return `src="${rootPrefix}_astro/`;
  });

  // 6. Transform any image references in meta tags (optional, e.g. og:image or favicon)
  html = html.replace(/(<meta\b[^>]*?\bcontent=")(\/(images|favicon)[^"]*?)(")/gi, (match, p1, p2, p3) => {
    fileReplacements++;
    return `${p1}${toRelative(p2)}${p3}`;
  });

  fs.writeFileSync(filePath, html, 'utf-8');
  totalReplacements += fileReplacements;
}

console.log(`[make-relative] 成功完成相对路径替换！共处理 ${totalReplacements} 处链接与静态资源引用。`);
