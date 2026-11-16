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

function removeDirRecursive(dir: string) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

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

// 0. Clean old target directories
FOLDERS.forEach((folder) => {
  const target = path.join(ROOT_DIR, folder);
  removeDirRecursive(target);
});

// 1. Copy folders from dist
FOLDERS.forEach((folder) => {
  const src = path.join(DIST_DIR, folder);
  const dest = path.join(ROOT_DIR, folder);
  copyDirRecursive(src, dest);
});

// 2. Copy root files
['index.html', '404.html', 'sitemap-index.xml', 'sitemap-0.xml', 'robots.txt'].forEach((file) => {
  const src = path.join(DIST_DIR, file);
  const dest = path.join(ROOT_DIR, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
  }
});

// Copy sitemap.xml
if (fs.existsSync(path.join(ROOT_DIR, 'sitemap-index.xml'))) {
  fs.copyFileSync(path.join(ROOT_DIR, 'sitemap-index.xml'), path.join(ROOT_DIR, 'sitemap.xml'));
}

// Ensure dist has css/style.css and images
const distCssDir = path.join(DIST_DIR, 'css');
if (!fs.existsSync(distCssDir)) fs.mkdirSync(distCssDir, { recursive: true });
fs.copyFileSync(path.join(ROOT_DIR, 'css', 'style.css'), path.join(distCssDir, 'style.css'));

console.log('[deploy-static] 已完成纯 HTML 文件结构清理与全新迁移至根目录。');

// 3. Process every HTML file in root AND dist
function getAllHtml(dir: string, excludeDist = false): string[] {
  let res: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === '.astro') {
      continue;
    }
    if (excludeDist && entry.name === 'dist') {
      continue;
    }
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      res = res.concat(getAllHtml(full, excludeDist));
    } else if (entry.name.endsWith('.html')) {
      res.push(full);
    }
  }
  return res;
}

function processHtmlFiles(files: string[], baseDir: string) {
  for (const file of files) {
    const relPath = path.relative(baseDir, file).replace(/\\/g, '/');
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

    // Convert <script type="module"> to plain <script> for 100% file:// compatibility
    html = html.replace(/<script type="module">/gi, '<script>');

    // Ensure generator tag reflects native static HTML
    html = html.replace(/<meta name="generator"[^>]*?>/gi, '<meta name="generator" content="Vanilla HTML5 + Native CSS">');

    fs.writeFileSync(file, html, 'utf-8');
  }
}

const rootHtmlFiles = getAllHtml(ROOT_DIR, true);
console.log(`[deploy-static] 正在注入根目录原生 CSS 与标准相对路径: ${rootHtmlFiles.length} 个页面...`);
processHtmlFiles(rootHtmlFiles, ROOT_DIR);

const distHtmlFiles = getAllHtml(DIST_DIR, false);
console.log(`[deploy-static] 正在注入 dist 原生 CSS 与标准相对路径: ${distHtmlFiles.length} 个页面...`);
processHtmlFiles(distHtmlFiles, DIST_DIR);

console.log(`[deploy-static] 全部静态页面已完美链接至原生 CSS [css/style.css]！`);
