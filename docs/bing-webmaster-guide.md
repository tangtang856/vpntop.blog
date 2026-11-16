# Bing Webmaster Tools (必应站长平台) 完整实操与索引指南

本文档为 **VPNTOP.BLOG**（正式域名：`https://vpntop.blog`）的必应站长管理工具（Bing Webmaster Tools）官方实操手册。

---

## 一、必应站长平台账号准备与站点添加

> **人工操作步骤**：
> 1. 打开 [Bing Webmaster Tools 官网](https://www.bing.com/webmasters)；
> 2. 使用 Microsoft 账户或 Google 账户直接登录；
> 3. 点击左上角的 **添加站点 (Add Site)**；
> 4. 在“手动添加您的网站”输入框中输入正式域名：`https://vpntop.blog`。

---

## 二、网站所有权验证（三选一，推荐方案 1 或 2）

### 方案 1：HTML Meta 标签验证（代码已预先集成）
1. 在必应站长验证页面，选择 **HTML Meta Tag** 选项；
2. 必应会提供形如 `<meta name="msvalidate.01" content="xxxxxxxx..." />` 的标签；
3. **已集成位置**：在项目的 `src/layouts/BaseLayout.astro` 的 `<head>` 区域，我们已预留该标签位置：
   ```html
   <meta name="msvalidate.01" content="VPNTOP_BING_VERIFICATION_TOKEN" />
   ```
4. 替换其中的 Token 值为你的真实 Token，重新 `npm run build` 并部署即可点击必应页面的“验证 (Verify)”。

### 方案 2：DNS CNAME 记录验证（推荐 Cloudflare 用户）
在 Cloudflare DNS 管理控制台，添加必应指定的 CNAME 解析记录，通常几秒钟内即可全球生效。

### 方案 3：XML 文件上传
将必应提供的 `BingSiteAuth.xml` 存放入本项目的 `public/` 目录下即可。

---

## 三、Sitemap 网站地图提交

本站采用 Astro 官方 `@astrojs/sitemap` 模块，在每次构建时自动生成符合标准规范的 Sitemap 索引。

### 提交路径：
1. 登录必应站长平台后台，点击左侧菜单栏的 **站点地图 (Sitemaps)**；
2. 点击右上角的 **提交站点地图 (Submit Sitemap)**；
3. 输入完整的 XML Sitemap 绝对路径：
   ```text
   https://vpntop.blog/sitemap-index.xml
   ```
4. 点击提交。系统通常在 24-48 小时内处理并抓取包含的所有合法 URL。

---

## 四、IndexNow 实时推送验证与使用

IndexNow 是微软必应联合推出的下一代搜索引擎协议，能在内容发布后几秒钟内直接通知 Bingbot 前来抓取。

### 1. Key 验证文件确认
- 本站已在 `public/b6563b7156944e6fa16b0632b851df22.txt` 放置了验证密钥。
- 网站上线后可直接访问：`https://vpntop.blog/b6563b7156944e6fa16b0632b851df22.txt`，确保返回纯文本 `b6563b7156944e6fa16b0632b851df22`。

### 2. 命令行快速推送（无需登录后台）
在本地终端或 CI/CD 流水线中执行：
```bash
# 提交核心更新落地页（推荐每次小更新后执行）
npm run indexnow

# 批量提交全部重点页面
npx tsx scripts/indexnow.ts --all

# 针对某篇新发布的文章单页提交
npx tsx scripts/indexnow.ts --url https://vpntop.blog/blog/airport-buying-guide-2026/
```

### 3. 查看 IndexNow 接收状态
在必应站长平台后台，点击 **IndexNow** 菜单，可直观查看必应近期收到的 URL 提交数量、接受状态及最近成功处理日志。

> **重要合规提醒**：
> IndexNow 提交成功（HTTP 200/202）仅代表必应爬虫已将该 URL 列入高优先级爬取队列，**不等于必然收录**。搜索引擎会对页面质量、原创度与是否重复进行多维评估。

---

## 五、URL 检查 (URL Inspection)

当某篇核心文章上线后，可在必应后台使用 **URL 检查** 工具进行单页诊断：
1. 在顶部搜索框粘贴目标 URL，例如：`https://vpntop.blog/ranking/value/`；
2. 点击回车进行深度检测；
3. 检查返回的四个关键项目：
   - **抓取是否成功 (Crawl Status)**：应为 Success (200)；
   - **索引是否允许 (Indexation Allowed)**：应为 Yes (无 noindex 拦截)；
   - **规范化网址 (Canonical URL)**：确保声明的规范 URL 与实际一致；
   - **结构化数据 (Schema Markup)**：检查 `Organization`、`BreadcrumbList`、`Product` 或 `FAQPage` 是否被正确识别解析。
4. 如果该页面为新发布或重大改版，可直接点击 **请求索引 (Request Indexing)** 加快收录。

---

## 六、搜索表现与流量监控 (Search Performance)

每周可在必应后台 **搜索表现 (Search Performance)** 模块关注以下指标：
- **总展现量 (Impressions)** 与 **总点击量 (Clicks)**；
- **关键词排名 (Keywords)**：重点监控主攻关键词（`机场推荐`、`性价比机场`、`梯子推荐`、`vpn机场` 等）的排名位次爬升曲线；
- **点击率 (CTR)**：针对展示量高但点击率偏低的落地页，优化其 Title 与 Meta Description，使其更具吸引力。

---

## 七、索引覆盖与抓取错误排查 (Index Coverage & Crawl Issues)

定期进入 **URL 报告** 与 **抓取问题 (Crawl Issues)** 查看：
- **404 错误**：检查是否有旧外链指向不存在的路径；
- **被 robots.txt 屏蔽**：确保未误伤核心 `/recommend/` 或 `/ranking/` 路由；
- **重定向链**：确保全站所有内链均规范带有末尾斜杠（`/`），杜绝 301 重定向跳跃。
