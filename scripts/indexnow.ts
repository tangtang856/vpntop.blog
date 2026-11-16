/**
 * IndexNow Notification Script for VPNTOP.BLOG (Bing SEO)
 *
 * IndexNow allows website owners to instantly notify search engines
 * (Bing, Yandex, Seznam, Naver) about latest content changes.
 *
 * Usage:
 *   npm run indexnow                      # Submits priority changed landing pages
 *   npx tsx scripts/indexnow.ts --all     # Submits full priority sitemap set
 *   npx tsx scripts/indexnow.ts --url <URL> # Submits a single URL
 */

const INDEXNOW_KEY = 'b6563b7156944e6fa16b0632b851df22';
const HOST = 'vpntop.blog';
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

// Priority updated URLs
const CORE_URLS = [
  `https://${HOST}/`,
  `https://${HOST}/ranking/overall/`,
  `https://${HOST}/ranking/value/`,
  `https://${HOST}/ranking/budget/`,
  `https://${HOST}/ranking/stable/`,
  `https://${HOST}/recommend/budget/`,
  `https://${HOST}/recommend/premium/`,
  `https://${HOST}/recommend/beginner/`,
  `https://${HOST}/recommend/stable/`,
  `https://${HOST}/recommend/ai/`,
  `https://${HOST}/recommend/streaming/`,
  `https://${HOST}/compare/`,
  `https://${HOST}/guides/windows/`,
  `https://${HOST}/guides/android/`,
  `https://${HOST}/guides/ios/`,
  `https://${HOST}/guides/macos/`,
  `https://${HOST}/guides/router/`,
  `https://${HOST}/blog/airport-buying-guide-2026/`,
  `https://${HOST}/blog/vpn-vs-airport/`,
  `https://${HOST}/blog/why-cheap-airports-run/`,
  `https://${HOST}/blog/chatgpt-vpn-fix/`,
  `https://${HOST}/blog/protocols-comparison/`,
  `https://${HOST}/glossary/airport-nodes/`,
  `https://${HOST}/glossary/iepl-iplc/`,
  `https://${HOST}/glossary/node-multiplier/`,
  `https://${HOST}/glossary/subscription-url/`,
  `https://${HOST}/glossary/tun-mode/`,
  `https://${HOST}/review/kuanyun/`,
  `https://${HOST}/review/fycloud/`,
  `https://${HOST}/review/paofu/`,
  `https://${HOST}/review/geekcloud/`,
  `https://${HOST}/review/galaxyspeed/`
];

async function submitIndexNow(urlList: string[], retryCount = 2): Promise<boolean> {
  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urlList,
  };

  console.log(`\n======================================================`);
  console.log(`[IndexNow] 准备向 IndexNow API 提交 ${urlList.length} 个 URL...`);
  console.log(`[IndexNow] 目标域名: ${HOST}`);
  console.log(`[IndexNow] API Key: ${INDEXNOW_KEY}`);
  console.log(`[IndexNow] Key 验证文件地址: ${KEY_LOCATION}`);
  console.log(`======================================================\n`);

  for (let attempt = 1; attempt <= retryCount + 1; attempt++) {
    try {
      console.log(`[IndexNow] 发起 HTTP POST 请求至 ${ENDPOINT} (尝试 ${attempt}/${retryCount + 1})...`);
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'User-Agent': 'VPNTOP-IndexNow-Client/1.0',
        },
        body: JSON.stringify(payload),
      });

      const status = response.status;
      const statusText = response.statusText;
      console.log(`[IndexNow] HTTP 响应状态码: ${status} ${statusText}`);

      if (status === 200 || status === 202) {
        console.log(`\n✅ [IndexNow 成功] 搜索引擎已成功接收提交的 URL 清单！`);
        console.log(`   - 状态说明: ${status === 200 ? '200 OK (成功处理)' : '202 Accepted (已进入处理队列)'}`);
        console.log(`   - 重要提醒：IndexNow 提交代表已通知 Bingbot 优先抓取，但【并不保证】立即收录。最终索引取决于搜索引擎内容质量评估。`);
        return true;
      } else if (status === 400) {
        console.error(`❌ [IndexNow 错误 400] 请求格式无效或参数缺失。`);
        const text = await response.text();
        console.error(`   响应内容: ${text}`);
        return false;
      } else if (status === 403) {
        console.error(`❌ [IndexNow 错误 403] 验证密钥无效或 Key 文件无法在指定域名根目录访问。请确保 ${KEY_LOCATION} 已部署。`);
        return false;
      } else if (status === 422) {
        console.warn(`⚠️ [IndexNow 提示 422] URL 与提交的 Host 域名不匹配。`);
        return false;
      } else if (status === 429) {
        console.warn(`⚠️ [IndexNow 限频 429] 提交过于频繁。等待 3 秒后重试...`);
        if (attempt <= retryCount) {
          await new Promise((r) => setTimeout(r, 3000));
          continue;
        }
      } else {
        const text = await response.text();
        console.error(`❌ [IndexNow 异常] 返回未知状态码 ${status}: ${text}`);
      }
    } catch (err: any) {
      console.error(`❌ [IndexNow 网络异常] 连接失败: ${err.message}`);
      if (attempt <= retryCount) {
        console.log(`[IndexNow] 2 秒后进行重试...`);
        await new Promise((r) => setTimeout(r, 2000));
      }
    }
  }

  return false;
}

async function main() {
  const args = process.argv.slice(2);
  let targetUrls: string[] = [];

  const urlArgIndex = args.indexOf('--url');
  if (urlArgIndex !== -1 && args[urlArgIndex + 1]) {
    targetUrls = [args[urlArgIndex + 1]];
  } else if (args.includes('--all')) {
    targetUrls = CORE_URLS;
  } else {
    // Default submits top 10 high-priority landing pages to avoid abusive full batch submits
    targetUrls = CORE_URLS.slice(0, 12);
  }

  console.log(`[IndexNow] 准备推送以下 URL 清单：`);
  targetUrls.forEach((u, i) => console.log(`  ${i + 1}. ${u}`));

  await submitIndexNow(targetUrls);
}

main().catch((err) => {
  console.error('Fatal error running IndexNow script:', err);
  process.exit(1);
});
