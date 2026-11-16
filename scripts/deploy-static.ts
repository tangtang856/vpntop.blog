/**
 * Deploy Static Pure HTML + Native CSS Site to Root
 */

import * as fs from 'fs';
import * as path from 'path';

const ROOT_DIR = process.cwd();
const DIST_DIR = path.join(ROOT_DIR, 'dist');

// Folders to copy to root
const FOLDERS = [
  'recommend',
  'ranking',
  'review',
  'airport',
  'compare',
  'guides',
  'blog',
  'glossary',
  'about',
  'contact',
  'editorial-policy',
  'privacy-policy',
  'disclaimer'
];

function copyDirRecursive(src: string, dest: string) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 1. Copy folders
FOLDERS.forEach((folder) => {
  const src = path.join(DIST_DIR, folder);
  const dest = path.join(ROOT_DIR, folder);
  copyDirRecursive(src, dest);
});

// 2. Copy root files
['index.html', '404.html', 'sitemap-index.xml', 'sitemap-0.xml'].forEach((file) => {
  const src = path.join(DIST_DIR, file);
  const dest = path.join(ROOT_DIR, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
  }
});

// Also create sitemap.xml pointing to sitemap-index.xml or copy
if (fs.existsSync(path.join(ROOT_DIR, 'sitemap-index.xml'))) {
  fs.copyFileSync(path.join(ROOT_DIR, 'sitemap-index.xml'), path.join(ROOT_DIR, 'sitemap.xml'));
}

console.log('[deploy-static] 已完成纯 HTML 文件结构迁移至根目录。');

// 3. Process every HTML file to strictly use css/style.css and images/
function getAllHtml(dir: string): string[] {
  let res: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === 'dist' || entry.name === '.astro') {
      continue;
    }
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      res = res.concat(getAllHtml(full));
    } else if (entry.name.endsWith('.html')) {
      res.push(full);
    }
  }
  return res;
}

const htmlFiles = getAllHtml(ROOT_DIR);
console.log(`[deploy-static] 正在注入原生 CSS 与纯原生相对路径: ${htmlFiles.length} 个页面...`);

for (const file of htmlFiles) {
  const relPath = path.relative(ROOT_DIR, file).replace(/\\/g, '/');
  const depth = relPath.split('/').length - 1;
  const rootPrefix = depth === 0 ? './' : '../'.repeat(depth);

  let html = fs.readFileSync(file, 'utf-8');

  // Replace stylesheet with css/style.css
  html = html.replace(/<link\b[^>]*?\brel="stylesheet"[^>]*?>/gi, () => {
    return `<link rel="stylesheet" href="${rootPrefix}css/style.css">`;
  });

  // Replace favicon with images/favicon.svg
  html = html.replace(/<link\b[^>]*?\brel="icon"[^>]*?>/gi, () => {
    return `<link rel="icon" type="image/svg+xml" href="${rootPrefix}images/favicon.svg">`;
  });

  // Ensure generator tag reflects native static HTML
  html = html.replace(/<meta name="generator"[^>]*?>/gi, '<meta name="generator" content="Vanilla HTML5 + Native CSS">');

  fs.writeFileSync(file, html, 'utf-8');
}

console.log(`[deploy-static] 全部 ${htmlFiles.length} 个页面已完美链接至原生 CSS [css/style.css]！`);
