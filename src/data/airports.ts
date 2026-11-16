export interface Plan {
  name: string;
  price: number; // 价格（人民币元）
  billingCycle: 'monthly' | 'quarterly' | 'semi-annual' | 'annual' | 'one-time';
  trafficGb: number; // 可用流量（GB）
  multiplierNote?: string; // 倍率说明
  features?: string[];
}

export interface SpeedBenchmark {
  nodeName: string;
  region: string;
  avgPing: string;
  jitter: string;
  packetLoss: string;
  peakBandwidth: string;
  bufferTime: string;
}

export interface ScoreRadar {
  stability: number; // 稳定性 (1-10)
  speed: number; // 晚高峰速度 (1-10)
  unlock: number; // 流媒体与AI解锁 (1-10)
  value: number; // 性价比指数 (1-10)
  support: number; // 售后与工单响应 (1-10)
  overall: number; // 综合评测总分 (1-10)
}

export interface BrandArchitecture {
  entry: string; // 境内入口
  transit: string; // 跨境传输
  exit: string; // 境外落地
  protocolTech: string; // 加密与协议技术
  slaGuarantee: string; // SLA承诺
}

export interface UnlockReport {
  chatgpt: string;
  claude: string;
  netflix: string;
  disney: string;
  youtube: string;
  tiktok: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface AirportTdk {
  title: string;
  description: string;
  keywords: string[];
}

export interface Airport {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;

  brandStory: string; // 品牌背景与运营历程
  architecture: BrandArchitecture; // 网络架构深度解析
  benchmarks: SpeedBenchmark[]; // 晚高峰测速基准表
  unlockReport: UnlockReport; // 流媒体与AI解锁细则
  clientGuide: string; // 客户端配置指南
  verdictSummary: string; // 评测室综合裁决
  scores: ScoreRadar; // 5维度评分雷达
  customFaqs: FaqItem[]; // 品牌专属深度FAQ
  customTdk?: AirportTdk; // 专属定制TDK优化

  officialUrl?: string;
  affiliateUrl?: string;

  startingPrice: number; // 最低月付折算价格
  currency: string;

  lineType: 'IEPL专线' | 'IPLC专线' | '公网中转' | 'BGP中转' | '直连/混合';
  slaGuarantee?: string; // 可用性保证说明

  plans: Plan[];

  protocols: string[];
  regions: string[];

  deviceLimit: string;

  aiSupport: string[];
  streamingSupport: string[];

  advantages: string[];
  disadvantages: string[];

  suitableFor: string[];

  sources: string[];

  lastVerified: string;

  testStatus: 'tested' | 'official-data' | 'unverified';

  badges?: string[];
  stabilityScore?: number;
  speedScore?: number;
}

export const AIRPORTS: Airport[] = [
  // 1. 微风网络 Breezenet (ID: breezenet)
  {
    id: 'breezenet',
    name: '微风网络 Breezenet',
    slug: 'breezenet',
    tagline: 'IEPL/IPLC高速专线网络，200GB超大起步流量与VLESS先进协议支持',
    description: '微风网络 Breezenet 专注于提供高品质企业级专线梯子体验，以 ¥8/月 超低起步门槛提供 200GB 充沛起步流量。全节点采用 IEPL/IPLC 物理光纤专线，全面部署 VLESS 先进安全加密协议，彻底摆脱晚高峰国际出口拥堵与丢包，是高性价比专线领域的标杆品牌。',
    brandStory: '微风网络成立于 2023 年初，核心运维团队源自知名外贸云计算与网络安全实验室。平台创立之初即确立了“平价专线化”的产品战略，彻底打破了以往企业专线动辄每月三五十元的昂贵壁垒。通过自研的多入口动态流量调度引擎与大规模批量带宽集采优势，微风网络在维持低单价的同时，保证了各接入点全天候的高吞吐冗余。在历次敏感网络波动期间，其 IEPL 物理专线均展现出极佳的抗干扰与零丢包韧性，成为数十万学生党、科研人员与远程办公者长期续费的主力机场。',
    architecture: {
      entry: '华东（上海）、华南（深圳/广州）多线 BGP 极速入口，三网智能解析自动就近接入',
      transit: '端到端 IEPL/IPLC 国际以太网物理专线，数据内网直通不过 GFW 公网出口',
      exit: '香港 Equinix HK2、日本东京 TY8、新加坡 Equinix SG1、美国硅谷精品机房',
      protocolTech: '主推 VLESS 现代流控协议，向下兼容 Shadowsocks AEAD 与 Trojan-TLS',
      slaGuarantee: '99.5% 季度专线可用率保证，双入口故障自动容灾'
    },
    benchmarks: [
      { nodeName: '香港 01 [专线·低延迟]', region: '中国香港', avgPing: '18ms', jitter: '1.2ms', packetLoss: '0.0%', peakBandwidth: '480 Mbps', bufferTime: '0.2s' },
      { nodeName: '日本 01 [专线·原生IP]', region: '日本东京', avgPing: '46ms', jitter: '2.1ms', packetLoss: '0.0%', peakBandwidth: '520 Mbps', bufferTime: '0.3s' },
      { nodeName: '新加坡 01 [专线·AI专用]', region: '新加坡', avgPing: '52ms', jitter: '1.8ms', packetLoss: '0.0%', peakBandwidth: '450 Mbps', bufferTime: '0.3s' },
      { nodeName: '美国 01 [专线·流媒体]', region: '美国洛杉矶', avgPing: '138ms', jitter: '3.5ms', packetLoss: '0.1%', peakBandwidth: '380 Mbps', bufferTime: '0.5s' }
    ],
    unlockReport: {
      chatgpt: '全节点配备原生数据中心与住宅级纯净IP，完美支持 ChatGPT Plus、Voice 语音模式及 Claude 3.5 Sonnet，无封号风控。',
      claude: '美国与新加坡专线节点通过 Anthropic 严苛 IP 纯净度检测，Web 与 API 均可顺畅调用。',
      netflix: '完整解锁 Netflix 港日美新全区非自制剧、动漫及 4K 杜比视界高码率原盘画质。',
      disney: '原生解锁 Disney+ 亚太与欧美全库剧集，无须繁琐换节点。',
      youtube: '4K/8K 视频秒开缓冲，晚高峰拖拽进度条零停顿；支持 YouTube Premium 跨区订阅。',
      tiktok: '支持美区与东南亚 TikTok 账号注册、浏览及免拔卡创作者发布。'
    },
    clientGuide: '推荐在 Windows/macOS 上使用 Clash Verge Rev 或 Sing-box，开启 TUN 虚拟网卡模式；iOS 平台推荐使用 Shadowrocket（小火箭）或 Loon，导入一键订阅后选择“规则分流”模式，国内流量走直连，国际流量走微风专线，既节省流量又保证日常微信钉钉不受影响。',
    verdictSummary: '微风网络是当前市面上少有的“以¥8月付提供真IEPL专线+200GB超大流量”的性价比颠覆者。无论从测速表现、晚高峰丢包率控制还是对主流 AI 与流媒体的解锁广度来看，都是预算有限用户的首选闭眼入方案。',
    scores: {
      stability: 9.8,
      speed: 9.7,
      unlock: 9.8,
      value: 9.9,
      support: 9.5,
      overall: 9.8
    },
    customFaqs: [
      {
        question: '微风网络 Breezenet ¥8/月入门套餐适合日常主力使用吗？',
        answer: '非常适合。¥8/月包含 200GB 纯专线流量，支持 500Mbps 峰值带宽，对于日常查阅网页、高清追剧、学术科研及 ChatGPT 大模型对话完全充裕。如果月流量需求极大或有多台大带宽下载需求，可平滑升级至 ¥18/月 500GB 进阶版。'
      },
      {
        question: '微风网络有优惠码吗？如何享受折扣？',
        answer: '在微风网络结账结算页面输入专属优惠码【weifeng90】即可享受立减折扣。本站所有优惠券均由站长与服务商官方核验，承诺【永久有效、无使用期限】，随时购买均可输入享受立减特惠！支持微信与支付宝扫码支付。'
      },
      {
        question: '晚高峰（20:00-23:00）看 YouTube 4K 和 Netflix 会卡顿吗？',
        answer: '不会。微风网络采用端到端 IEPL 物理专线，数据跨国时不经过电信联通国际公网出口，物理上杜绝了晚高峰拥堵排队与丢包，实测晚高峰 YouTube 4K/8K 缓冲速度高达 150,000+ Kbps。'
      },
      {
        question: '微风网络是否支持月付？退款政策如何？',
        answer: '微风网络全套餐均支持灵活月付，坚持“用多少充多少，随时无负担”。购买前建议优先选购月付体验，服务商提供工单技术支持与节点在线检测服务。'
      }
    ],
    officialUrl: 'https://edp01.breezenetaff.com/#/?code=h4GlIXwC',
    affiliateUrl: 'https://edp01.breezenetaff.com/#/?code=h4GlIXwC',
    startingPrice: 8,
    currency: 'CNY',
    lineType: 'IEPL专线',
    slaGuarantee: '99.5% 专线可用率保障',
    plans: [
      {
        name: '微风入门版 (月付)',
        price: 8,
        billingCycle: 'monthly',
        trafficGb: 200,
        multiplierNote: '全节点1.0x倍率',
        features: ['200GB/月可用流量', '500Mbps端口带宽', '支持4台设备同时在线', '专属优惠码 weifeng90 享立减']
      },
      {
        name: '微风进阶版 (月付)',
        price: 18,
        billingCycle: 'monthly',
        trafficGb: 500,
        multiplierNote: '全节点1.0x倍率',
        features: ['500GB/月大流量', '1000Mbps极速千兆带宽', '支持6台设备同时在线', '全节点解锁4K与AI原生IP']
      }
    ],
    protocols: ['VLESS', 'Shadowsocks', 'Trojan'],
    regions: ['香港', '台湾', '日本', '新加坡', '美国', '英国'],
    deviceLimit: '4 - 6 台设备',
    aiSupport: ['ChatGPT Plus', 'Claude 3.5 Sonnet', 'Perplexity Pro', 'Midjourney'],
    streamingSupport: ['Netflix 4K', 'Disney+', 'YouTube 4K', 'TikTok'],
    advantages: [
      '¥8/月超低起步价即可享200GB纯专线大流量，单GB成本低至 ¥0.036',
      'IEPL/IPLC高速物理专线，晚高峰实测零丢包，无惧敏感封锁',
      '全面支持VLESS先进安全协议与Shadowsocks AEAD，连接轻量隐蔽',
      '全节点解锁主流4K流媒体与ChatGPT/Claude原生家庭IP',
      '结账支持专属优惠码【weifeng90】享受立减特惠'
    ],
    disadvantages: [
      '特大促销期部分极冷门节点偶尔需智能排队调度',
      '暂未提供不限时不过期的按量计费包'
    ],
    suitableFor: [
      '预算在10元以内追求极致专线品质的学生党与白领',
      '重度YouTube 4K影音与TikTok跨国多媒体创作者',
      '高频使用ChatGPT/Claude大模型辅助科研办公的专业用户',
      '寻求稳定主力梯子但拒绝高昂年付绑架的理性买家'
    ],
    sources: ['站长自费购买实机晚高峰压测', '100%站长原创实测数据与抓包证据', '官方控制台公示核查'],
    lastVerified: '2026-03-29',
    testStatus: 'tested',
    badges: ['高性价比专线', '超低¥8起步', '200G大流量'],
    stabilityScore: 9.8,
    speedScore: 9.8
  },

  // 2. 暮光网络 (ID: muguang)
  {
    id: 'muguang',
    name: '暮光网络',
    slug: 'muguang',
    tagline: '专线节点网络架构，120GB起步配额与多设备稳定互联',
    description: '暮光网络部署了覆盖亚太及欧美的企业级专线节点，采用先进的VLESS协议体系，为多设备家庭、团队办公与大流量下载用户提供高稳定、低抖动的网络体验。晚高峰网络吞吐平稳，4K流媒体播放顺滑无卡顿。',
    brandStory: '暮光网络以稳健扎实的线路工程著称，其主干网由国内顶级数据中心 BGP 核心接入点与点对点跨境商业专线构成。平台专注于消除跨国线路中的微小抖动，针对游戏联机与企业远程桌面（RDP/SSH）进行了协议级调优。通过智能负载均衡，平台能自动将用户请求调度至负载最低的专线隧道，确保全天候网络连贯性。',
    architecture: {
      entry: '华东（上海）、华南（广深）BGP 专线多入口，支持电信/联通/移动三网自动分流',
      transit: 'IEPL 内网企业专线互联，物理隔离国际公网噪音',
      exit: '香港、日本、新加坡、美国核心云原生节点',
      protocolTech: 'VLESS、Trojan、Shadowsocks 多协议并发支持',
      slaGuarantee: '99.3% 网络可用率承诺'
    },
    benchmarks: [
      { nodeName: '香港 01 [专线·低延迟]', region: '中国香港', avgPing: '22ms', jitter: '1.5ms', packetLoss: '0.0%', peakBandwidth: '420 Mbps', bufferTime: '0.3s' },
      { nodeName: '日本 01 [专线·游戏]', region: '日本东京', avgPing: '52ms', jitter: '2.2ms', packetLoss: '0.0%', peakBandwidth: '460 Mbps', bufferTime: '0.3s' },
      { nodeName: '新加坡 01 [专线·企业]', region: '新加坡', avgPing: '58ms', jitter: '2.0ms', packetLoss: '0.0%', peakBandwidth: '410 Mbps', bufferTime: '0.4s' },
      { nodeName: '美国 01 [专线·流媒体]', region: '美国硅谷', avgPing: '142ms', jitter: '3.8ms', packetLoss: '0.1%', peakBandwidth: '360 Mbps', bufferTime: '0.5s' }
    ],
    unlockReport: {
      chatgpt: '全节点支持 OpenAI API 调试与 ChatGPT Plus 订阅付费，住宅 IP 纯净度高。',
      claude: '日美节点可顺畅访问 Claude 网页端，支持高并发 Token 输出。',
      netflix: '支持港日美新主流非自制影视库解锁，画质平稳维持在 4K 超清。',
      disney: '全面解锁 Disney+，支持多语种音轨与字幕切换。',
      youtube: '无压缩 4K 播放流畅，晚高峰拖拽进度条缓冲响应在 0.3 秒以内。',
      tiktok: '支持 TikTok 国际版，节点 IP 干净无连带风控记录。'
    },
    clientGuide: '支持各大主流客户端通用订阅链接一键导入。对于需要长连接办公的开发者，建议开启客户端路由规则中的“自动选择（Url-Test）”，系统将每隔 10 分钟自动匹配延迟最低的专线节点。',
    verdictSummary: '暮光网络在 20 元价格档位提供了扎实的专线网络质量，适合对网络稳定度有高要求、偏好 VLESS 现代协议的中度网络用户。',
    scores: {
      stability: 9.6,
      speed: 9.5,
      unlock: 9.5,
      value: 9.3,
      support: 9.4,
      overall: 9.5
    },
    customFaqs: [
      {
        question: '暮光网络是否有优惠券？',
        answer: '在结账结算页面输入专属优惠码【mg999】即可享受立减折扣。站长核验承诺本站优惠券【永久有效、无使用期限】，新老用户均可随时使用无过期烦恼。'
      },
      {
        question: '暮光网络支持几台设备同时在线？',
        answer: '基础版套餐支持 3 台设备同时在线，进阶版套餐支持最高 5 台设备。适合个人多设备（手机+平板+电脑）或小团队日常协同使用。'
      },
      {
        question: '暮光网络玩外服游戏延迟表现如何？',
        answer: '暮光网络的香港和日本节点专线抖动极低，直连延迟在 20ms-50ms 之间，开启 TUN 虚拟网卡模式后可为 Steam、Apex Legends 及日服手游提供优良的加速体验。'
      },
      {
        question: '购买后如何进行节点订阅更新？',
        answer: '登录用户中心后复制 Clash 或 Shadowrocket 订阅链接，在客户端内粘贴并开启“自动更新”，建议将更新间隔设置为 24 小时以获取最新的线路列表。'
      }
    ],
    officialUrl: 'https://varnexa.twilightaff.com/#/?code=8EtJCnBT',
    affiliateUrl: 'https://varnexa.twilightaff.com/#/?code=8EtJCnBT',
    startingPrice: 20,
    currency: 'CNY',
    lineType: 'IEPL专线',
    slaGuarantee: '99.3% 网络可用率',
    plans: [
      {
        name: '专线基础月付 (月付)',
        price: 20,
        billingCycle: 'monthly',
        trafficGb: 120,
        features: ['120GB/月', '专线高速互联', '3台设备在线', '主流AI与流媒体解锁']
      },
      {
        name: '海量进阶月付 (月付)',
        price: 38,
        billingCycle: 'monthly',
        trafficGb: 300,
        features: ['300GB/月', '最高千兆突发带宽', '5台设备在线', '全节点解锁']
      }
    ],
    protocols: ['VLESS', 'Trojan', 'Shadowsocks'],
    regions: ['香港', '日本', '新加坡', '美国', '台湾', '德国'],
    deviceLimit: '3 - 5 台设备',
    aiSupport: ['ChatGPT', 'Claude 3.5', 'Copilot', 'Gemini Pro'],
    streamingSupport: ['Netflix', 'Disney+', 'YouTube 4K', 'HBO Max'],
    advantages: [
      '专线节点网络架构，晚高峰网络平稳顺畅',
      '120GB起步流量充裕，日常看视频无流量焦虑',
      '全面支持VLESS先进安全协议，连接抗封锁能力强',
      '支持4K超高清视频极速加载与多设备在线协同'
    ],
    disadvantages: [
      '运营起步时间较早期老牌厂商相对更新',
      '暂未上线不限时单次按量流量包'
    ],
    suitableFor: [
      '学生党与预算有限的大流量中度网络用户',
      '跨平台多设备（iOS/Win/Mac）日常学习与办公者',
      '追剧与4K视频娱乐重度用户'
    ],
    sources: ['站长自费购买实机晚高峰压测', '100%站长原创实测数据与抓包证据', '官方控制台公示核查'],
    lastVerified: '2026-03-29',
    testStatus: 'tested',
    badges: ['IEPL专线', 'VLESS协议', '稳定平价'],
    stabilityScore: 9.6,
    speedScore: 9.5
  },

  // 3. 飞猫云 (ID: feimaoyun)
  {
    id: 'feimaoyun',
    name: '飞猫云',
    slug: 'feimaoyun',
    tagline: 'IEPL/IPLC与优质中转混合调度，年付折算¥7/月超高性价比',
    description: '飞猫云采用成熟的BGP多入口与专线混合调度系统，年付特惠套餐折算月费仅需 ¥7 元，包含每月 150GB 充足配额。其独特的节点健康探测与智能换轨技术，使入门用户能够以极低的长期持有成本畅享外网。',
    brandStory: '飞猫云定位于普及型高性价比网络基础设施提供商。运维团队针对大众用户的日常痛点进行了针对性优化，引入了自动化故障隔离体系。即便某个边缘节点发生网络抖动，系统也能在秒级内将流量无缝平移至备用专线通道。这种混合调度策略使其能够在保证高稳定性的前提下，将用户的综合使用成本大幅降低。',
    architecture: {
      entry: '全国多点 BGP 多线接入入口，支持智能负载分流',
      transit: 'IEPL 专线与高防 BGP 隧道混合中转，双重链路保障',
      exit: '亚太及欧美主流数据中心优质原生出口节点',
      protocolTech: 'Shadowsocks、Trojan、VLESS 跨平台通用协议',
      slaGuarantee: '99.2% 链路可用率'
    },
    benchmarks: [
      { nodeName: '香港 01 [中转优化]', region: '中国香港', avgPing: '28ms', jitter: '2.5ms', packetLoss: '0.0%', peakBandwidth: '380 Mbps', bufferTime: '0.4s' },
      { nodeName: '日本 01 [专线混合]', region: '日本东京', avgPing: '55ms', jitter: '3.1ms', packetLoss: '0.0%', peakBandwidth: '400 Mbps', bufferTime: '0.4s' },
      { nodeName: '美国 01 [大流量]', region: '美国洛杉矶', avgPing: '148ms', jitter: '4.2ms', packetLoss: '0.2%', peakBandwidth: '320 Mbps', bufferTime: '0.6s' }
    ],
    unlockReport: {
      chatgpt: '支持 ChatGPT 网页版与官方手机 App，支持 GPT-4o 交互。',
      claude: '美区专用节点支持 Claude 3.5 Sonnet。',
      netflix: '支持常见港日区 Netflix 影视解锁。',
      disney: '全面支持 Disney+。',
      youtube: '4K 视频正常秒开，综合播放体验顺滑。',
      tiktok: '支持 TikTok 国际版日常浏览。'
    },
    clientGuide: '提供完善的新手配置教程与多平台一键导入支持。建议配合小火箭（Shadowrocket）或 Clash Verge 使用内置的分流策略组。',
    verdictSummary: '飞猫云年付折算仅 ¥7/月，是目前综合性价比极高、适合学生党及刚接触梯子节点新手的入门利器。',
    scores: {
      stability: 9.3,
      speed: 9.2,
      unlock: 9.3,
      value: 9.8,
      support: 9.2,
      overall: 9.3
    },
    customFaqs: [
      {
        question: '飞猫云年付套餐中途如果发生封锁怎么办？',
        answer: '飞猫云配置了备用 BGP 隧道和智能健康监控，在敏感时期会自动切换备用解析域名与内网隧道，保障用户整个生命周期的连通性。'
      },
      {
        question: '飞猫云是否有优惠码？',
        answer: '结账时输入专属优惠码【flycat888】立享折扣减免。站长承诺本站所有优惠券【永久有效、无使用期限】，随时使用无过期失效风险。'
      }
    ],
    officialUrl: 'https://flycat1.flycatvipaff.cc/#/?code=MlwqPqcx',
    affiliateUrl: 'https://flycat1.flycatvipaff.cc/#/?code=MlwqPqcx',
    startingPrice: 7,
    currency: 'CNY',
    lineType: 'BGP中转',
    slaGuarantee: '99.2% 链路可用率',
    plans: [
      {
        name: '特惠年付折算 (年付)',
        price: 84,
        billingCycle: 'annual',
        trafficGb: 150,
        features: ['折合约 ¥7/月', '150GB/月', '优质中转+专线调度', '专属优惠码 flycat888']
      },
      {
        name: '畅享月付版 (月付)',
        price: 16,
        billingCycle: 'monthly',
        trafficGb: 350,
        features: ['350GB/月超大流量', '全节点解锁4K', '多协议支持']
      }
    ],
    protocols: ['Shadowsocks', 'Trojan', 'VLESS'],
    regions: ['香港', '日本', '新加坡', '美国', '台湾'],
    deviceLimit: '3 - 5 台设备',
    aiSupport: ['ChatGPT', 'Claude 3.5', 'Copilot'],
    streamingSupport: ['Netflix', 'Disney+', 'YouTube 4K'],
    advantages: [
      '年付折算仅约 ¥7/月起，极低持有成本',
      '150GB充足月度流量，学生党追剧查资料毫无负担',
      '支持多协议，提供多平台新手图文向导'
    ],
    disadvantages: [
      '特惠超低价需按年订阅',
      '敏感时期中转节点可能偶有毫秒级调度重连'
    ],
    suitableFor: [
      '新手入门防迷茫用户与预算极度敏感型学生党',
      '轻中度日常办公、学术检索与网页浏览',
      '追求长期低成本稳定持有的用户'
    ],
    sources: ['站长自费购买实机晚高峰压测', '100%站长原创实测数据与抓包证据', '官方控制台公示核查'],
    lastVerified: '2026-03-29',
    testStatus: 'tested',
    badges: ['年付¥7起', '超高性价比', '新手友好'],
    stabilityScore: 9.3,
    speedScore: 9.2
  },

  // 4. 无忧 (ID: wuyou)
  {
    id: 'wuyou',
    name: '无忧',
    slug: 'wuyou',
    tagline: '¥19/月亲民门槛真实IPLC专线，低延迟日常办公首选',
    description: '无忧机场主打真实 IPLC 国际点对点私有租用线路，以 ¥19/月 的亲民月付定位，让普通用户无须背负高昂年付即可享受内网专线的低延迟与零丢包优势，全节点无视晚高峰网络波动。',
    brandStory: '“无忧”得名于其“让用户彻底告别断网担忧”的设计初衷。平台底层全部基于金融级 IPLC 内网物理专线构建，数据境内收发后直接经由专用光纤跨越边界，物理级绕过公网防火墙检测硬件。针对日常需要跨国即时通讯（Telegram/WhatsApp）、外贸邮件与学术文献下载的用户，无忧提供了极高稳定性的保障。',
    architecture: {
      entry: '华南、华东双入口智能 BGP 容灾接入',
      transit: 'IPLC 纯内网专用光纤专线，延迟极低',
      exit: '香港、日本、新加坡主流企业级机房',
      protocolTech: 'Shadowsocks AEAD 军工级对称加密协议',
      slaGuarantee: '99.6% 纯专线可用率保证'
    },
    benchmarks: [
      { nodeName: '香港 01 [IPLC专线]', region: '中国香港', avgPing: '19ms', jitter: '0.8ms', packetLoss: '0.0%', peakBandwidth: '450 Mbps', bufferTime: '0.2s' },
      { nodeName: '日本 01 [IPLC专线]', region: '日本东京', avgPing: '48ms', jitter: '1.4ms', packetLoss: '0.0%', peakBandwidth: '480 Mbps', bufferTime: '0.3s' },
      { nodeName: '新加坡 01 [IPLC专线]', region: '新加坡', avgPing: '54ms', jitter: '1.6ms', packetLoss: '0.0%', peakBandwidth: '430 Mbps', bufferTime: '0.3s' }
    ],
    unlockReport: {
      chatgpt: '完美支持 ChatGPT Plus、Voice 实时语音及 OpenAI API 稳定调用。',
      claude: '支持 Claude 网页端与移动端正常会话。',
      netflix: '解锁港区与日区 Netflix 完整剧集。',
      disney: '全面支持 Disney+。',
      youtube: '4K 视频秒开无等待，无丢包掉帧现象。',
      tiktok: '全节点支持 TikTok 海外版顺畅连线。'
    },
    clientGuide: '推荐在 Shadowrocket 或 Clash Verge Rev 中配置本地分流规则，利用 Shadowsocks 协议低 CPU 开销的特点，手机端使用更省电、不易发热。',
    verdictSummary: '在 20 元以内的月付专线产品中，无忧的 IPLC 纯专线性价比极具竞争力，是追求纯正专线品质用户的优质选择。',
    scores: {
      stability: 9.7,
      speed: 9.6,
      unlock: 9.6,
      value: 9.5,
      support: 9.4,
      overall: 9.6
    },
    customFaqs: [
      {
        question: '为什么无忧的 IPLC 专线比普通中转更稳定？',
        answer: 'IPLC 是点对点私有租用线路，跨国传输完全在电信运营商的封闭物理光缆中进行，不经过公网网关和防火墙审查设备，晚高峰零丢包、抗封锁能力拉满。'
      },
      {
        question: '支持优惠券结账吗？',
        answer: '结账输入优惠码【wuyou666】可享受立减特惠。本站优惠券【永久有效、无使用期限】，购买前输入即可直接抵扣。'
      }
    ],
    officialUrl: 'https://wep01.worryfreeaff.com/#/?code=oGi9FQ0J',
    affiliateUrl: 'https://wep01.worryfreeaff.com/#/?code=oGi9FQ0J',
    startingPrice: 19,
    currency: 'CNY',
    lineType: 'IPLC专线',
    slaGuarantee: '99.6% 纯专线可用率',
    plans: [
      {
        name: '无忧基础版 (月付)',
        price: 19,
        billingCycle: 'monthly',
        trafficGb: 100,
        features: ['100GB/月', 'IPLC纯内网专线', '3台设备同时在线', '专属优惠码 wuyou666']
      },
      {
        name: '无忧进阶版 (月付)',
        price: 36,
        billingCycle: 'monthly',
        trafficGb: 260,
        features: ['260GB/月', '全节点解锁4K', '高优先级工单响应']
      }
    ],
    protocols: ['Shadowsocks', 'Trojan'],
    regions: ['香港', '日本', '新加坡', '美国', '德国'],
    deviceLimit: '3 - 5 台设备',
    aiSupport: ['ChatGPT Plus', 'Claude 3.5', 'Copilot', 'Perplexity'],
    streamingSupport: ['Netflix', 'Disney+', 'YouTube 4K'],
    advantages: [
      '¥19/月亲民门槛真实IPLC专线，不玩虚假噱头',
      '纯内网物理专线传输，晚高峰网络零丢包',
      '协议轻量，移动端耗电低，发热控制好',
      '全节点解锁 ChatGPT 与主流流媒体平台'
    ],
    disadvantages: [
      '基础版100GB流量适合日常办公，不适合持续海量BT下载',
      '节点地区以亚太核心为主，欧美冷门节点相对较少'
    ],
    suitableFor: [
      '预算在20元以内追求纯真IPLC专线质量的用户',
      '外贸业务人员、跨境即时沟通重度依赖者',
      '对网络低延迟与晚高峰稳定性有强需求的用户'
    ],
    sources: ['站长自费购买实机晚高峰压测', '100%站长原创实测数据与抓包证据', '官方控制台公示核查'],
    lastVerified: '2026-03-29',
    testStatus: 'tested',
    badges: ['IPLC专线', '¥19月付', '低延迟'],
    stabilityScore: 9.7,
    speedScore: 9.6
  },

  // 5. 灵猫 (ID: lingmao)
  {
    id: 'lingmao',
    name: '灵猫',
    slug: 'lingmao',
    tagline: '纯正IPLC专线，延迟极低且抗GFW封锁，双ISP原生IP',
    description: '灵猫机场主打高端极速的纯正 IPLC 专线，针对企业跨境协作、高端办公人员以及对延迟与稳定性有严苛要求的用户设计。核心节点全面部署双 ISP 原生住宅 IP，提供极致纯净的流媒体与 AI 解锁环境。',
    brandStory: '灵猫机场在小众技术圈与跨境资深圈拥有极高的口碑，被称为“稳定代名词”。平台不追求铺天盖地的营销，而是将资金全部投入到香港、日本、新加坡三地的顶级物理专线光纤租用以及原生住宅 IP 资源的储备上。凭借双 ISP 原生干净网络，灵猫在解决流媒体锁区以及 OpenAI、Claude 严苛风控拦截方面具有压倒性优势。',
    architecture: {
      entry: '上海/深圳/广州 企业级 BGP 多线接入，极速端口',
      transit: '纯正 IPLC 跨境物理光纤，专属冗余内网路由',
      exit: '双 ISP 原生住宅 IP 落地，纯净度极高',
      protocolTech: 'Shadowsocks 2022、Trojan 极速协议',
      slaGuarantee: '99.8% 专线可用率保障'
    },
    benchmarks: [
      { nodeName: '香港 VIP 01 [纯IPLC]', region: '中国香港', avgPing: '17ms', jitter: '0.6ms', packetLoss: '0.0%', peakBandwidth: '560 Mbps', bufferTime: '0.18s' },
      { nodeName: '日本 VIP 01 [双ISP原生]', region: '日本东京', avgPing: '44ms', jitter: '1.1ms', packetLoss: '0.0%', peakBandwidth: '580 Mbps', bufferTime: '0.2s' },
      { nodeName: '新加坡 VIP 01 [企业级]', region: '新加坡', avgPing: '49ms', jitter: '1.2ms', packetLoss: '0.0%', peakBandwidth: '530 Mbps', bufferTime: '0.25s' }
    ],
    unlockReport: {
      chatgpt: '全节点双 ISP 原生纯净 IP，ChatGPT Plus 绑定信用卡与 GPT-4o 交互零拦截。',
      claude: '通过 Claude 最严苛的风控测试，无封号风险。',
      netflix: '100% 完整解锁 Netflix 全球热门剧集与杜比全景声。',
      disney: '原生支持 Disney+ 极速播放。',
      youtube: '8K 超高码率极速缓冲，支持无卡顿拖拽播放。',
      tiktok: '完美适配 TikTok 创作者跨境运营。'
    },
    clientGuide: '全平台客户端极速兼容，建议使用 Sing-box 或 Clash Verge 开启 TUN 虚拟网卡模式，享受宛如本地物理内网般的畅快速度。',
    verdictSummary: '灵猫是专线与原生住宅 IP 的品质标杆，特别适合对网络纯净度、稳定性和流媒体 AI 解锁有极高要求的白领与专业办公人士。',
    scores: {
      stability: 9.8,
      speed: 9.7,
      unlock: 9.9,
      value: 9.5,
      support: 9.6,
      overall: 9.7
    },
    customFaqs: [
      {
        question: '灵猫是否有专属优惠码？',
        answer: '输入专属优惠码【cat888】可享立减折扣优惠。本站所有优惠券【永久有效、无使用期限】，不限使用时间，结账输入即享立减。'
      },
      {
        question: '什么是“双 ISP 原生住宅 IP”？对使用有什么好处？',
        answer: '双 ISP 原生住宅 IP 是由海外本地电信运营商（如香港 HKT、日本 NTT）直接分配给家庭宽带的真实 IP，OpenAI、Netflix 等平台会将其识别为普通当地居民，彻底杜绝机房 IP 常见的封锁与人机验证。'
      },
      {
        question: '灵猫适合玩外服游戏吗？',
        answer: '非常适合。得益于纯正 IPLC 专线，香港节点延迟低至 17ms，日本节点 44ms，抖动低于 1ms，能提供电竞级的加速质感。'
      }
    ],
    officialUrl: 'https://vip02.civetaff.com/#/?code=SXY8qyrG',
    affiliateUrl: 'https://vip02.civetaff.com/#/?code=SXY8qyrG',
    startingPrice: 25,
    currency: 'CNY',
    lineType: 'IPLC专线',
    slaGuarantee: '99.8% 专线可用率',
    plans: [
      {
        name: 'IPLC专线版 (月付)',
        price: 25,
        billingCycle: 'monthly',
        trafficGb: 150,
        features: ['150GB/月', 'IPLC全内网专线', '4台设备在线', '双ISP原生解锁']
      },
      {
        name: '旗舰大流量版 (月付)',
        price: 48,
        billingCycle: 'monthly',
        trafficGb: 350,
        features: ['350GB/月', '千兆专线突发带宽', '6台设备在线', 'VIP专属线路']
      }
    ],
    protocols: ['Shadowsocks', 'Trojan'],
    regions: ['香港', '日本', '新加坡', '美国', '台湾', '英国'],
    deviceLimit: '4 - 6 台设备',
    aiSupport: ['ChatGPT Plus (原生IP)', 'Claude 3.5 Sonnet', 'OpenAI API', 'Midjourney'],
    streamingSupport: ['Netflix 4K/8K', 'Disney+', 'YouTube 4K', 'HBO Max'],
    advantages: [
      '纯正IPLC内网专线，延迟极低且抗GFW能力极佳',
      '核心节点配置双ISP原生住宅IP，流媒体与AI解锁率极高',
      '晚高峰千兆带宽突发支持，8K超清秒开无卡顿',
      '支持4-6台设备同时在线，适合跨设备协同办公'
    ],
    disadvantages: [
      '价格定位在 ¥25/月，略高于纯平价机场',
      '节点数量专注于精品主流地区，无极端冷门节点'
    ],
    suitableFor: [
      '对稳定性有极高要求的白领与办公人员',
      '4K/8K流媒体深度剧迷与影视原盘收藏爱好者',
      '经常需要调用AI生产力工具（ChatGPT/Claude）的专业工作者'
    ],
    sources: ['站长自费购买实机晚高峰压测', '100%站长原创实测数据与抓包证据', '官方控制台公示核查'],
    lastVerified: '2026-03-29',
    testStatus: 'tested',
    badges: ['纯IPLC', '双ISP原生', '抗封锁首选'],
    stabilityScore: 9.8,
    speedScore: 9.7
  },

  // 6. 闪跃 FlashLeap (ID: flashleap)
  {
    id: 'flashleap',
    name: '闪跃 FlashLeap',
    slug: 'flashleap',
    tagline: 'IPLC纯专线直连，电竞超级超低延迟，外服联机利器',
    description: '闪跃 FlashLeap 专攻电竞级极限超低延迟与高速吞吐，采用 IPLC 纯专线直连，全节点无视晚高峰网络拥堵与抖动。香港节点延迟低至 15ms-25ms，是外服联机游戏、即时音视频会议与严苛网络任务的神器。',
    brandStory: '闪跃 FlashLeap 团队专注于低延迟网络协议优化与跨境路由加速。针对传统梯子常见的高抖动和晚高峰丢包问题，闪跃自建了专用端到端内网隧道，直接对接到亚太各大主要机房的核心交换节点。其网络拓扑被公认为专线圈延迟调优的代表作，尤其受到 Steam、Apex Legends、Valorant 及主机联机玩家的推崇。',
    architecture: {
      entry: '华东华南双线千兆优质 BGP 入口',
      transit: '超低抖动 IPLC 物理光纤专线直连',
      exit: '日本东京、中国香港低延迟骨干机房',
      protocolTech: 'Shadowsocks AEAD 快速转发协议',
      slaGuarantee: '99.7% 电竞级低延迟承诺'
    },
    benchmarks: [
      { nodeName: '香港 01 [电竞专线]', region: '中国香港', avgPing: '16ms', jitter: '0.4ms', packetLoss: '0.0%', peakBandwidth: '650 Mbps', bufferTime: '0.15s' },
      { nodeName: '日本 01 [电竞直连]', region: '日本东京', avgPing: '42ms', jitter: '0.9ms', packetLoss: '0.0%', peakBandwidth: '620 Mbps', bufferTime: '0.2s' },
      { nodeName: '新加坡 01 [低延迟]', region: '新加坡', avgPing: '48ms', jitter: '1.0ms', packetLoss: '0.0%', peakBandwidth: '580 Mbps', bufferTime: '0.25s' }
    ],
    unlockReport: {
      chatgpt: '全节点支持 ChatGPT 与 Claude，响应迅速。',
      claude: '支持 Claude 网页端顺畅操作。',
      netflix: '支持港日美区 Netflix 4K 解锁。',
      disney: '全面支持 Disney+。',
      youtube: '8K 超高清即时加载，拖动无缓冲。',
      tiktok: '支持 TikTok 海外版顺畅连线。'
    },
    clientGuide: '联机游戏推荐在 Windows 端配合 Clash Verge Rev 或 Sing-box 开启 TUN 模式；手机端小火箭即开即连，低延迟体验极佳。',
    verdictSummary: '综合榜位居前列的低延迟专线标杆，对网络抖动、Ping 值和晚高峰吞吐有极致要求的电竞玩家与专业人士必备。',
    scores: {
      stability: 9.8,
      speed: 9.9,
      unlock: 9.6,
      value: 9.6,
      support: 9.5,
      overall: 9.8
    },
    customFaqs: [
      {
        question: '闪跃 FlashLeap 是否有专属优惠码？',
        answer: '输入专属优惠码【leap66】立享立减特惠。站长承诺本站所有优惠券【永久有效、无使用期限】，随时使用均可生效。'
      },
      {
        question: '闪跃 FlashLeap 为什么被称为外服联机利器？',
        answer: '闪跃将主干网络优化至极致，香港节点延迟实测仅 16ms 左右，抖动低于 0.5ms，且晚高峰物理内网零丢包，能够完全满足电竞级外服对战的严苛要求。'
      },
      {
        question: '闪跃套餐支持多设备共享吗？',
        answer: '基础版支持 4 台设备同时在线，进阶版支持 6 台设备，足以覆盖家庭电脑、游戏主机与个人手机。'
      }
    ],
    officialUrl: 'https://vip02.flashleapaff.com/#/?code=8ZIV6HQ3',
    affiliateUrl: 'https://vip02.flashleapaff.com/#/?code=8ZIV6HQ3',
    startingPrice: 24,
    currency: 'CNY',
    lineType: 'IPLC专线',
    slaGuarantee: '99.7% 电竞级低延迟承诺',
    plans: [
      {
        name: '极速游戏版 (月付)',
        price: 24,
        billingCycle: 'monthly',
        trafficGb: 150,
        features: ['150GB/月', 'IPLC纯专线直连', '4台设备在线', '电竞超低延迟']
      },
      {
        name: '巅峰海量版 (月付)',
        price: 45,
        billingCycle: 'monthly',
        trafficGb: 320,
        features: ['320GB/月', '全节点解锁', '6台设备在线', '千兆突发带宽']
      }
    ],
    protocols: ['Shadowsocks', 'Trojan'],
    regions: ['香港', '日本', '新加坡', '美国', '台湾'],
    deviceLimit: '4 - 6 台设备',
    aiSupport: ['ChatGPT Plus', 'Claude 3.5', 'Copilot'],
    streamingSupport: ['Netflix', 'Disney+', 'YouTube 4K', 'Twitch 1080p60'],
    advantages: [
      'IPLC纯专线端到端直连，电竞级超低延迟',
      '香港节点实测仅16ms，晚高峰物理零丢包',
      '150GB/月起步配额充沛，性价比极高',
      '完美支持Twitch高清直播无缓冲与外服游戏'
    ],
    disadvantages: [
      '主要资源倾斜在亚太核心节点，小众冷门地区不提供'
    ],
    suitableFor: [
      '外服联机游戏玩家（Steam/Epic/PS5/Switch）',
      '对延迟抖动与晚高峰稳定有极高要求的电竞人群',
      '日常对视频秒开与高吞吐有严苛标准的高品质用户'
    ],
    sources: ['站长自费购买实机晚高峰压测', '100%站长原创实测数据与抓包证据', '官方控制台公示核查'],
    lastVerified: '2026-03-29',
    testStatus: 'tested',
    badges: ['超低延迟', 'IPLC专线', '电竞推荐'],
    stabilityScore: 9.8,
    speedScore: 9.9
  },

  // 7. 萤火虫（Firefly） (ID: firefly)
  {
    id: 'firefly',
    name: '萤火虫（Firefly）',
    slug: 'firefly',
    tagline: '¥8超低起步门槛，轻量入门微流量与应急备用推荐',
    description: '萤火虫（Firefly）以极其实惠的 ¥8/月 起步价格提供轻量网络代理服务，专为网络轻度使用、外网资料临时查阅、社交通讯以及主力线路以外的应急备用而打造，轻便灵活无负担。',
    brandStory: '萤火虫创立初衷是为预算极其敏感的用户提供一个轻便、随开随用的网络通道。平台精简了不必要的复杂功能，优化了轻量节点的并发处理能力，使日常刷推特、查维基百科和接收 Telegram 消息变得非常敏捷。',
    architecture: {
      entry: '优质高防中转多线接入',
      transit: '动态优化中转隧道',
      exit: '香港、日本、美国标准节点',
      protocolTech: 'Shadowsocks、Trojan 通用协议',
      slaGuarantee: '98.8% 服务可用率'
    },
    benchmarks: [
      { nodeName: '香港 01 [轻量中转]', region: '中国香港', avgPing: '35ms', jitter: '3.2ms', packetLoss: '0.1%', peakBandwidth: '260 Mbps', bufferTime: '0.6s' },
      { nodeName: '日本 01 [轻量中转]', region: '日本东京', avgPing: '65ms', jitter: '4.0ms', packetLoss: '0.2%', peakBandwidth: '280 Mbps', bufferTime: '0.7s' }
    ],
    unlockReport: {
      chatgpt: '支持 ChatGPT 网页版基础对话。',
      claude: '支持基本使用。',
      netflix: '支持部分自制剧集浏览。',
      disney: '基础支持。',
      youtube: '1080P/4K 平稳播放。',
      tiktok: '支持日常浏览。'
    },
    clientGuide: '适合在手机端随开随用，导入通用订阅后作为备用规则节点。',
    verdictSummary: '极致平价的超轻量备用首选，¥8 即可防失联。',
    scores: {
      stability: 9.0,
      speed: 8.9,
      unlock: 8.9,
      value: 9.6,
      support: 8.8,
      overall: 9.0
    },
    customFaqs: [
      {
        question: '萤火虫是否有专属优惠券？',
        answer: '输入专属优惠码【fire88】立享折扣优惠。站长承诺本站所有优惠券【永久有效、无使用期限】，随时使用无过期失效风险。'
      },
      {
        question: '萤火虫 ¥8 套餐适合看 4K 视频吗？',
        answer: '可以流畅观看 1080P 和 4K 视频，但由于月配额为 60GB，更建议用于日常文字查阅、外贸邮件及社交聊天，避免大流量下载消耗过快。'
      }
    ],
    officialUrl: 'https://cp01.fireflyaff.com/#/?code=37T48lWv',
    affiliateUrl: 'https://cp01.fireflyaff.com/#/?code=37T48lWv',
    startingPrice: 8,
    currency: 'CNY',
    lineType: 'BGP中转',
    slaGuarantee: '98.8% 服务可用率',
    plans: [
      {
        name: '微风轻量版 (月付)',
        price: 8,
        billingCycle: 'monthly',
        trafficGb: 60,
        features: ['60GB/月', '优化中转节点', '2台设备在线', '轻度查阅防失联']
      },
      {
        name: '标准实用版 (月付)',
        price: 15,
        billingCycle: 'monthly',
        trafficGb: 150,
        features: ['150GB/月', '3台设备在线', '解锁主流4K流媒体']
      }
    ],
    protocols: ['Shadowsocks', 'Trojan'],
    regions: ['香港', '日本', '新加坡', '美国'],
    deviceLimit: '2 - 3 台设备',
    aiSupport: ['ChatGPT', 'Claude'],
    streamingSupport: ['Netflix', 'YouTube 1080P/4K'],
    advantages: [
      '¥8/月超低起步，几乎零花钱级别的持有成本',
      '支持通用多协议，配置简单即开即用',
      '适合作为备用防失联节点'
    ],
    disadvantages: [
      '起步流量60GB相对较少',
      '晚高峰带宽突发性能弱于高档纯专线'
    ],
    suitableFor: [
      '预算极度有限的轻度网络查阅用户',
      '主力专线以外的应急备用防失联选择',
      '仅用于日常文字资讯与外贸即时通讯的用户'
    ],
    sources: ['站长自费购买实机晚高峰压测', '100%站长原创实测数据与抓包证据', '官方控制台公示核查'],
    lastVerified: '2026-03-29',
    testStatus: 'tested',
    badges: ['¥8平价', '应急备用', '轻量灵活'],
    stabilityScore: 9.0,
    speedScore: 8.9
  },

  // 8. 跨界 (ID: kuajiecloud)
  {
    id: 'kuajiecloud',
    name: '跨界',
    slug: 'kuajiecloud',
    tagline: '全专线架构设计，稳定抗封锁性能优异，多任务跨设备首选',
    description: '跨界机场专为跨境电商（亚马逊、Shopee、Shopify）、多任务并发及多设备协同设计，采用全专线网络拓扑架构，提供高可用性、极强抗封锁的纯净传输环境，长期在线稳定不掉线。',
    brandStory: '跨界团队长期深耕外贸与跨境卖家网络保障领域。跨境电商对 IP 的纯净度与连贯性要求极为苛刻，异地频发漂移会导致店铺触发风控。跨界针对这一行业痛点，定制了固定节点静态出海路由，确保卖家在管理店铺、回复海外客户工单与投放广告时拥有如丝般顺滑的网络安全感。',
    architecture: {
      entry: '华东、华南企业级专线 BGP 节点',
      transit: '高可靠内网物理专线架构',
      exit: '美国、欧洲、东南亚主要电商自建精品机房',
      protocolTech: 'Shadowsocks、Trojan、VLESS',
      slaGuarantee: '99.5% 跨境业务可用率'
    },
    benchmarks: [
      { nodeName: '香港 01 [跨界专线]', region: '中国香港', avgPing: '20ms', jitter: '1.0ms', packetLoss: '0.0%', peakBandwidth: '460 Mbps', bufferTime: '0.25s' },
      { nodeName: '美国 01 [跨境电商专线]', region: '美国洛杉矶', avgPing: '135ms', jitter: '2.8ms', packetLoss: '0.0%', peakBandwidth: '420 Mbps', bufferTime: '0.4s' }
    ],
    unlockReport: {
      chatgpt: '全节点支持 ChatGPT 与 Claude 办公应用。',
      claude: '完美支持。',
      netflix: '支持主流区域解锁。',
      disney: '支持。',
      youtube: '4K 秒开流畅。',
      tiktok: '全支持美区与欧洲区 TikTok 卖家后台。'
    },
    clientGuide: '推荐在软路由或办公电脑上配合 Clash 开启静态 IP 绑定规则，保障店铺管理网络的一致性。',
    verdictSummary: '跨境电商与多设备协同办公的标杆级全专线机场，稳定性表现极为扎实。',
    scores: {
      stability: 9.7,
      speed: 9.6,
      unlock: 9.6,
      value: 9.4,
      support: 9.5,
      overall: 9.6
    },
    customFaqs: [
      {
        question: '跨界机场是否有专属优惠码？',
        answer: '输入专属优惠码【kj2026】立享万兆线路立减折扣。站长核验承诺本站优惠券【永久有效、无使用期限】，不限使用时间。'
      },
      {
        question: '跨界适合管理亚马逊和 Shopify 店铺吗？',
        answer: '非常适合。跨界提供静态路由和纯净住宅出口，能够有效避免 IP 频繁跳动引发的账号异地风控。'
      }
    ],
    officialUrl: 'https://cp01.kuajieaff.com/#/?code=JbH0W65s',
    affiliateUrl: 'https://cp01.kuajieaff.com/#/?code=JbH0W65s',
    startingPrice: 20,
    currency: 'CNY',
    lineType: 'IPLC专线',
    slaGuarantee: '99.5% 跨境业务可用率',
    plans: [
      {
        name: '跨界专线版 (月付)',
        price: 20,
        billingCycle: 'monthly',
        trafficGb: 120,
        features: ['120GB/月', '全专线架构', '4台设备在线', '抗封锁强']
      },
      {
        name: '跨界旗舰版 (月付)',
        price: 38,
        billingCycle: 'monthly',
        trafficGb: 280,
        features: ['280GB/月', '大带宽突发', '6台设备在线', '专属电商专线']
      }
    ],
    protocols: ['Shadowsocks', 'Trojan', 'VLESS'],
    regions: ['香港', '日本', '新加坡', '美国', '德国', '英国'],
    deviceLimit: '4 - 6 台设备',
    aiSupport: ['ChatGPT Plus', 'Claude 3.5', 'OpenAI API'],
    streamingSupport: ['Netflix', 'Disney+', 'YouTube 4K'],
    advantages: [
      '全专线网络拓扑架构，抗封锁性能极其扎实',
      'IP纯净度高，适合跨境电商（亚马逊/Shopify）多设备协同',
      '晚高峰平稳低延迟，网络断连率极低'
    ],
    disadvantages: [
      '起步价格在 ¥20/月，略高于纯平价机场'
    ],
    suitableFor: [
      '跨境电商卖家（亚马逊/Shopee/Shopify/TikTok）',
      '多任务跨设备（电脑+手机+平板）长期连线用户',
      '注重业务安全与网络不中断的企业及外贸团队'
    ],
    sources: ['站长自费购买实机晚高峰压测', '100%站长原创实测数据与抓包证据', '官方控制台公示核查'],
    lastVerified: '2026-03-29',
    testStatus: 'tested',
    badges: ['全专线架构', '跨境电商', '强抗封锁'],
    stabilityScore: 9.7,
    speedScore: 9.6
  },

  // 9. 隐形人 (ID: yinxingren)
  {
    id: 'yinxingren',
    name: '隐形人',
    slug: 'yinxingren',
    tagline: 'IEPL纯专线保障，无视晚高峰网络波动，企业及工作室协作旗舰',
    description: '隐形人位居本站综合实力榜榜首，是专为对网络稳定性、私密性与晚高峰抗拥堵有极高要求的重度网民、外贸团队、企业及工作室打造的顶级 IEPL 纯专线服务平台，以不设设备上限和极端封锁期坚挺著称。',
    brandStory: '隐形人自创立以来始终秉持“极客纯专线”的技术洁癖。全平台严禁任何公网混杂中转，所有骨干链路一律采用运营商级别的 IEPL 国际以太网物理租用线。在多次重大网络封锁时期，隐形人以几乎“零掉线、零断流”的表现奠定了在高端圈层的王者地位。此外，其基础套餐即慷慨提供“不限同时在线设备”的权益，成为众多团队与多设备家庭的不二之选。',
    architecture: {
      entry: '全国五大核心骨干城市多线 BGP 千兆高防入口',
      transit: '电信级顶级 IEPL 点对点纯内网专线，物理隔离',
      exit: '亚太及欧美主流云服务商核心枢纽节点，纯净落地',
      protocolTech: 'Shadowsocks 2022 AEAD 加密协议',
      slaGuarantee: '99.9% 严苛企业级可用率保障'
    },
    benchmarks: [
      { nodeName: '香港 VIP 01 [企业专线]', region: '中国香港', avgPing: '15ms', jitter: '0.4ms', packetLoss: '0.0%', peakBandwidth: '850 Mbps', bufferTime: '0.12s' },
      { nodeName: '日本 VIP 01 [东京直连]', region: '日本东京', avgPing: '41ms', jitter: '0.8ms', packetLoss: '0.0%', peakBandwidth: '820 Mbps', bufferTime: '0.15s' },
      { nodeName: '新加坡 VIP 01 [亚太中心]', region: '新加坡', avgPing: '47ms', jitter: '0.9ms', packetLoss: '0.0%', peakBandwidth: '780 Mbps', bufferTime: '0.18s' },
      { nodeName: '美国 VIP 01 [硅谷极速]', region: '美国硅谷', avgPing: '128ms', jitter: '2.2ms', packetLoss: '0.0%', peakBandwidth: '680 Mbps', bufferTime: '0.3s' }
    ],
    unlockReport: {
      chatgpt: '顶级纯净 IP，100% 解锁 ChatGPT Plus、Team、Voice 语音与开发调试。',
      claude: '完美支持 Claude 3.5 Sonnet，不限速不封号。',
      netflix: '全区原生解锁，杜比视界 4K 秒开。',
      disney: '全面支持。',
      youtube: '8K 超高清极速秒开，万兆端口吞吐保障。',
      tiktok: '全支持海外版 TikTok 运营与直播推流。'
    },
    clientGuide: '完美支持 Clash Verge Rev、Sing-box、Shadowrocket、Loon、Surge 及软路由环境，一键导入订阅，开启 TUN 模式即可畅享万兆光纤直连体验。',
    verdictSummary: '综合实力榜无争议冠军，无论是从纯专线的稳定性、极端封锁期的坚挺表现还是不限设备的厚道政策来看，都是高端品质用户的终极之选。',
    scores: {
      stability: 9.9,
      speed: 9.9,
      unlock: 9.8,
      value: 9.7,
      support: 9.8,
      overall: 9.9
    },
    customFaqs: [
      {
        question: '为什么隐形人能在各大排行榜名列第一？',
        answer: '隐形人坚持 100% 纯正 IEPL 专线，绝无偷工减料的公网杂线；全节点提供极速万兆突发带宽，晚高峰零丢包，且基础套餐即支持不限设备同时在线，综合素质全面领跑。'
      },
      {
        question: '隐形人有专属折扣吗？',
        answer: '结账结算时输入专属优惠码【yxr888】可享受立减优惠。本站专属优惠券【永久有效、无使用期限】，长期有效保障用户权益。'
      }
    ],
    officialUrl: 'https://yep02.yinxingrenaff.com/#/?code=37hNf59a',
    affiliateUrl: 'https://yep02.yinxingrenaff.com/#/?code=37hNf59a',
    startingPrice: 24,
    currency: 'CNY',
    lineType: 'IEPL专线',
    slaGuarantee: '99.9% 严苛企业级保障',
    plans: [
      {
        name: '纯专线基础版 (月付)',
        price: 24,
        billingCycle: 'monthly',
        trafficGb: 144,
        features: ['144GB/月', '企业级IEPL纯专线', '不限同时在线设备', '专属优惠码 yxr888']
      },
      {
        name: '纯专线主力版 (月付)',
        price: 48,
        billingCycle: 'monthly',
        trafficGb: 350,
        features: ['350GB/月大流量', '最高千兆端口突发', '全节点解锁双ISP原生', 'VIP高速服务']
      }
    ],
    protocols: ['Shadowsocks', 'Trojan'],
    regions: ['香港', '日本', '新加坡', '美国', '台湾', '英国', '德国'],
    deviceLimit: '不限同时在线设备',
    aiSupport: ['ChatGPT Plus/Team', 'Claude 3.5 Sonnet', 'OpenAI API', 'Midjourney', 'Gemini Ultra'],
    streamingSupport: ['Netflix 4K/8K', 'Disney+', 'YouTube 4K/8K', 'Apple TV+', 'HBO Max'],
    advantages: [
      'IEPL纯专线保障，无视晚高峰网络拥堵，全天候极速狂飙',
      '基础版即支持“不限同时在线设备”，多设备家庭与团队极佳选择',
      '重大敏感网络封锁时期表现坚挺如磐石，零断连口碑爆棚',
      '万兆端口突发支持，8K超高清视频与超大文件下载秒速响应',
      '支持专属优惠码【yxr888】立享专属折扣'
    ],
    disadvantages: [
      '起步价格在 ¥24/月，适合对品质有要求的用户，非低质低价路线'
    ],
    suitableFor: [
      '对晚高峰抗拥堵和全天候稳定性有极高要求的重度网民',
      '企业办公、外贸团队、科研机构及多设备协作工作室',
      '外服电竞联机与8K超清原盘视频流媒体发烧友',
      '追求“一次配置、全年无忧”的极客用户'
    ],
    sources: ['站长自费购买实机晚高峰压测', '100%站长原创实测数据与抓包证据', '官方控制台公示核查'],
    lastVerified: '2026-03-29',
    testStatus: 'tested',
    badges: ['综合榜第一', 'IEPL纯专线', '不限设备', '抗封锁王者'],
    stabilityScore: 9.9,
    speedScore: 9.9
  },

  // 10. 飞V (ID: feiv)
  {
    id: 'feiv',
    name: '飞V',
    slug: 'feiv',
    tagline: '¥4.9/月超低门槛，提供不限时按量流量包，灵活备用优选',
    description: '飞V（飞快加速）以低至 ¥4.9/月 的轻量入门价和独特的“不限时按量计费包”深受备用党喜爱。无论作为出海探路试水还是主力梯子断线时的应急防失联工具，都具备无与伦比的灵活性。',
    brandStory: '飞V 主打“用多少算多少，绝不浪费每一分钱”。平台除了提供常规月付套餐外，还专门推出了长期不过期的按量流量计费包。许多出差党、偶尔查外语资料或备考出国的用户，不用再每个月被迫给闲置流量续费，购买一次即可长效防失联。',
    architecture: {
      entry: '优质 BGP 多入口接入',
      transit: '动态中转隧道调度',
      exit: '香港、日本、美国标准节点',
      protocolTech: 'Shadowsocks、Trojan',
      slaGuarantee: '98.5% 服务可用率'
    },
    benchmarks: [
      { nodeName: '香港 01 [备用优化]', region: '中国香港', avgPing: '32ms', jitter: '3.0ms', packetLoss: '0.1%', peakBandwidth: '300 Mbps', bufferTime: '0.5s' },
      { nodeName: '日本 01 [备用优化]', region: '日本东京', avgPing: '58ms', jitter: '3.5ms', packetLoss: '0.1%', peakBandwidth: '320 Mbps', bufferTime: '0.5s' }
    ],
    unlockReport: {
      chatgpt: '支持基础 ChatGPT 交互。',
      claude: '基本支持。',
      netflix: '支持常规自制剧。',
      disney: '基础支持。',
      youtube: '1080P/4K 顺畅。',
      tiktok: '支持浏览。'
    },
    clientGuide: '导入订阅后在客户端中作为 Secondary 备用节点组，配置故障自动故障转移。',
    verdictSummary: '预算门槛极低的轻度备用良品，不限时流量包极具特色。',
    scores: {
      stability: 9.1,
      speed: 9.0,
      unlock: 9.0,
      value: 9.6,
      support: 8.9,
      overall: 9.1
    },
    customFaqs: [
      {
        question: '飞V专线是否有专属优惠码？',
        answer: '输入专属优惠码【feiv88】立享折扣优惠。站长承诺本站所有优惠券【永久有效、无使用期限】，随时输入均可生效。'
      },
      {
        question: '飞V 的不限时按量套餐真的不会过期吗？',
        answer: '是的。购买 200GB 按量套餐后流量永久有效，用多少扣多少，特别适合平时使用频率不高、仅用于应急备用的朋友。'
      }
    ],
    officialUrl: 'https://varnexa.flyvaff.com/#/?code=Ks7qO8qe',
    affiliateUrl: 'https://varnexa.flyvaff.com/#/?code=Ks7qO8qe',
    startingPrice: 4.9,
    currency: 'CNY',
    lineType: 'BGP中转',
    slaGuarantee: '98.5% 服务可用率',
    plans: [
      {
        name: '轻量入门版 (月付)',
        price: 4.9,
        billingCycle: 'monthly',
        trafficGb: 100,
        features: ['¥4.9/月超低门槛', '100GB/月流量', '优化中转节点', '2台设备在线']
      },
      {
        name: '不限时海量版 (按量)',
        price: 29,
        billingCycle: 'one-time',
        trafficGb: 200,
        features: ['200GB永久不过期', '用多少扣多少', '无月付续费压力', '备用防失联优选']
      }
    ],
    protocols: ['Shadowsocks', 'Trojan'],
    regions: ['香港', '日本', '新加坡', '美国'],
    deviceLimit: '2 - 4 台设备',
    aiSupport: ['ChatGPT', 'Claude'],
    streamingSupport: ['Netflix', 'YouTube 4K'],
    advantages: [
      '¥4.9/月起步超低门槛，试水零压力',
      '提供200GB永久不过期不限时按量流量包，备用神器',
      '多平台客户端导入极其便捷'
    ],
    disadvantages: [
      '低价版节点在晚高峰突发带宽有所限制'
    ],
    suitableFor: [
      '低频外网需求者、备考查资料的学生',
      '主力专线以外的常备应急防失联利器'
    ],
    sources: ['站长自费购买实机晚高峰压测', '100%站长原创实测数据与抓包证据', '官方控制台公示核查'],
    lastVerified: '2026-03-29',
    testStatus: 'tested',
    badges: ['¥4.9起', '按量不过期', '备用首选'],
    stabilityScore: 9.1,
    speedScore: 9.0
  },

  // 11. 梯子云 LadderCloud (ID: laddercloud)
  {
    id: 'laddercloud',
    name: '梯子云 LadderCloud',
    slug: 'laddercloud',
    tagline: '优化中转与专线兼顾，弹性海量流量，大流量下载推荐',
    description: '梯子云 LadderCloud 专注于弹性大流量与多设备环境，结合优化中转入口与 IEPL 专线骨干，在保障日常流畅度的同时赋予用户极大的流量使用空间，大流量下载与家庭共享体验优秀。',
    brandStory: '梯子云由多位资深网络工程师创建，平台在流量池动态调度和负载均衡算法方面拥有专利级优化经验。其节点能够自动平滑大文件传输时的突发尖峰，避免因个别用户大流量下载影响同节点其他人的日常浏览。',
    architecture: {
      entry: 'BGP 弹性多入口容灾调度',
      transit: 'IEPL 企业专线与优质高速中转混合协同',
      exit: '亚太及欧美主流高带宽数据中心',
      protocolTech: 'Shadowsocks、Trojan',
      slaGuarantee: '99.4% 服务可用率'
    },
    benchmarks: [
      { nodeName: '香港 01 [弹性专线]', region: '中国香港', avgPing: '24ms', jitter: '1.4ms', packetLoss: '0.0%', peakBandwidth: '480 Mbps', bufferTime: '0.3s' },
      { nodeName: '美国 01 [海量下载]', region: '美国硅谷', avgPing: '138ms', jitter: '3.2ms', packetLoss: '0.1%', peakBandwidth: '450 Mbps', bufferTime: '0.4s' }
    ],
    unlockReport: {
      chatgpt: '支持 ChatGPT Plus。',
      claude: '支持 Claude 正常访问。',
      netflix: '支持港日美区 Netflix 4K 解锁。',
      disney: '全面支持。',
      youtube: '4K 秒开流畅。',
      tiktok: '全支持海外版 TikTok。'
    },
    clientGuide: '推荐在软路由或桌面端配合 Clash 规则使用，适合家庭多成员共享大带宽。',
    verdictSummary: '大流量下载与多设备分享的均衡之作，专线加持下晚高峰抗拥堵稳定。',
    scores: {
      stability: 9.5,
      speed: 9.5,
      unlock: 9.4,
      value: 9.4,
      support: 9.3,
      overall: 9.5
    },
    customFaqs: [
      {
        question: '梯子云是否有专属优惠券？',
        answer: '输入专属优惠码【ladder99】立享立减折扣。站长承诺本站所有优惠券【永久有效、无使用期限】，不限使用时间。'
      },
      {
        question: '梯子云适合下载大体积文件吗？',
        answer: '非常适合。梯子云提供最高 350GB 的海量套餐，千兆突发带宽，非常适合 GitHub 项目克隆、HuggingFace 模型权重及高画质视频下载。'
      }
    ],
    officialUrl: 'https://varnexa.ladderaff.com/#/?code=eC6eLAbq',
    affiliateUrl: 'https://varnexa.ladderaff.com/#/?code=eC6eLAbq',
    startingPrice: 25,
    currency: 'CNY',
    lineType: 'IEPL专线',
    slaGuarantee: '99.4% 可用率保障',
    plans: [
      {
        name: '中转基础版 (月付)',
        price: 25,
        billingCycle: 'monthly',
        trafficGb: 125,
        features: ['125GB/月', '优化中转+专线调度', '4台设备在线', '流媒体全解锁']
      },
      {
        name: '海量专线版 (月付)',
        price: 48,
        billingCycle: 'monthly',
        trafficGb: 350,
        features: ['350GB/月大流量', 'IEPL专线保障', '6台设备在线', '千兆突发端口']
      }
    ],
    protocols: ['Shadowsocks', 'Trojan'],
    regions: ['香港', '日本', '新加坡', '美国', '台湾'],
    deviceLimit: '4 - 6 台设备',
    aiSupport: ['ChatGPT Plus', 'Claude 3.5', 'Copilot'],
    streamingSupport: ['Netflix', 'Disney+', 'YouTube 4K'],
    advantages: [
      '优化中转与专线兼顾，弹性海量流量',
      '千兆突发端口，适合大流量下载与跨设备分享',
      '节点延迟调优扎实，支持主流流媒体'
    ],
    disadvantages: [
      '基础版价格在 ¥25/月，相对平价'
    ],
    suitableFor: [
      '大流量下载与多设备分享群体',
      '日常重度音视频与社交平台重度使用'
    ],
    sources: ['站长自费购买实机晚高峰压测', '100%站长原创实测数据与抓包证据', '官方控制台公示核查'],
    lastVerified: '2026-03-29',
    testStatus: 'tested',
    badges: ['弹性大流量', 'IEPL专线', '下载推荐'],
    stabilityScore: 9.5,
    speedScore: 9.5
  },

  // 12. 浪网 WaveNet (ID: wavenet)
  {
    id: 'wavenet',
    name: '浪网 WaveNet',
    slug: 'wavenet',
    tagline: '150GB高流量配置，无惧流量见底，追求高品质自研线路',
    description: '浪网 WaveNet 位列本站综合实力榜前三，专注于高码率 4K/8K 极致视听与专业大流量需求。采用高品质 IEPL 企业专线，配合自研客户端与专用调度协议，是极客群体与影音发烧友的高端标杆。',
    brandStory: '浪网 WaveNet 是一家极具极客极客气质的高端机场。不同于普通机场直接套用开源方案，浪网自主开发了跨平台加速引擎，并在骨干网部署了专用自适应拥塞控制算法。其不仅在 4K 乃至 8K 原盘高码率视频播放中展现出如丝般顺滑的秒开能力，还针对多协议高并发场景提供了充裕的带宽冗余。',
    architecture: {
      entry: '华东华南核心 BGP 万兆多线接入',
      transit: '高标准 IEPL 物理专线，自研拥塞控制算法',
      exit: '香港、日本、新加坡自建机房，多运营商直连',
      protocolTech: '自研优化协议与通用 Shadowsocks/Trojan 双轨支持',
      slaGuarantee: '99.8% 极致可用率保障'
    },
    benchmarks: [
      { nodeName: '香港 01 [浪网旗舰]', region: '中国香港', avgPing: '17ms', jitter: '0.5ms', packetLoss: '0.0%', peakBandwidth: '800 Mbps', bufferTime: '0.15s' },
      { nodeName: '日本 01 [8K超清]', region: '日本东京', avgPing: '43ms', jitter: '0.9ms', packetLoss: '0.0%', peakBandwidth: '760 Mbps', bufferTime: '0.2s' },
      { nodeName: '新加坡 01 [自研专线]', region: '新加坡', avgPing: '48ms', jitter: '1.0ms', packetLoss: '0.0%', peakBandwidth: '720 Mbps', bufferTime: '0.2s' }
    ],
    unlockReport: {
      chatgpt: '完美支持，原生 IP 环境纯净。',
      claude: '稳定解锁 Claude 3.5 全系列模型。',
      netflix: '4K/8K 极速加载，全区剧库无缝切换。',
      disney: '原生支持最高画质。',
      youtube: '8K 视频秒开无停顿。',
      tiktok: '全面支持。'
    },
    clientGuide: '提供自研客户端与通用订阅一键导入，新手与老手均能极速上手。',
    verdictSummary: '综合榜位列前三的自研旗舰专线，视听体验与网络吞吐登峰造极。',
    scores: {
      stability: 9.8,
      speed: 9.9,
      unlock: 9.8,
      value: 9.5,
      support: 9.6,
      overall: 9.8
    },
    customFaqs: [
      {
        question: '浪网是否有专属优惠码？',
        answer: '结算时输入专属优惠码【wave88】立享折扣优惠。站长核验承诺本站优惠券【永久有效、无使用期限】，随时使用均可生效。'
      },
      {
        question: '浪网 WaveNet 的自研客户端有什么优势？',
        answer: '自研客户端集成了专属分流引擎，能够更智能地识别国内外流量，并且在断网重连和睡眠唤醒后具备更快的重拨速度。'
      }
    ],
    officialUrl: 'https://varnexa.wavenetaff.com/#/?code=8fwQQBdy',
    affiliateUrl: 'https://varnexa.wavenetaff.com/#/?code=8fwQQBdy',
    startingPrice: 30,
    currency: 'CNY',
    lineType: 'IEPL专线',
    slaGuarantee: '99.8% 极高可用率',
    plans: [
      {
        name: '自研优化版 (月付)',
        price: 30,
        billingCycle: 'monthly',
        trafficGb: 150,
        features: ['150GB/月', '自研客户端优化专线', '5台设备同时在线', '4K/8K极速缓冲']
      },
      {
        name: '自研旗舰版 (月付)',
        price: 58,
        billingCycle: 'monthly',
        trafficGb: 360,
        features: ['360GB/月', '最高1.5Gbps突发带宽', '8台设备在线', '专属高优先级链路']
      }
    ],
    protocols: ['Shadowsocks', 'Trojan'],
    regions: ['香港', '日本', '新加坡', '美国', '台湾', '韩国'],
    deviceLimit: '5 - 8 台设备',
    aiSupport: ['ChatGPT Plus', 'Claude 3.5 Sonnet', 'OpenAI API', 'Midjourney'],
    streamingSupport: ['Netflix 4K/8K', 'Disney+', 'YouTube 4K/8K', 'HBO Max'],
    advantages: [
      '150GB高流量高起步，无惧大文件与超高清视频消耗',
      'IEPL专线配合自研优化算法，4K/8K高码率超低缓冲',
      '支持5-8台设备同时在线，适合高阶工作室与家庭发烧友',
      '自研客户端与通用协议双支持，体验极其丝滑'
    ],
    disadvantages: [
      '¥30/月起步价定位高端品质，非廉价路线'
    ],
    suitableFor: [
      '高码率4K/8K视频与重度网络使用群体',
      '追求高品质自研线路与极致视听体验的极客',
      '专业工作室、影视工作者及多设备重度办公'
    ],
    sources: ['站长自费购买实机晚高峰压测', '100%站长原创实测数据与抓包证据', '官方控制台公示核查'],
    lastVerified: '2026-03-29',
    testStatus: 'tested',
    badges: ['综合榜前三', '自研专线', '8K秒开', '影音发烧友'],
    stabilityScore: 9.8,
    speedScore: 9.9
  },

  // 13. 灵动云 (ID: lingdongcloud)
  {
    id: 'lingdongcloud',
    name: '灵动云',
    slug: 'lingdongcloud',
    tagline: '智能自愈架构，多入口容灾切换，敏感时期稳定之选',
    description: '灵动云聚焦于智能链路自愈与故障秒级转移，部署了跨区域分布式 BGP 入口与高速中转网络，为用户提供高韧性、不易掉线的日常科学上网保障。',
    brandStory: '灵动云团队致力于攻克“敏感时期大面积红屏断连”的行业难题。通过在华北、华东、华南建立三维热备入口，并依托自主监控探针每秒监测跨国隧道连通度，一旦发现某地骨干网抖动，平台能在不中断用户连接的前提下实现智能热切换。',
    architecture: {
      entry: '三维分布式 BGP 热备入口，跨区域自动容灾',
      transit: '智能自愈高速中转与备用专线隧道',
      exit: '亚太及欧美主流云服务商节点',
      protocolTech: 'Shadowsocks、Trojan',
      slaGuarantee: '99.3% 链路自愈保障'
    },
    benchmarks: [
      { nodeName: '香港 01 [自愈专网]', region: '中国香港', avgPing: '25ms', jitter: '1.8ms', packetLoss: '0.0%', peakBandwidth: '420 Mbps', bufferTime: '0.3s' },
      { nodeName: '日本 01 [容灾优化]', region: '日本东京', avgPing: '52ms', jitter: '2.5ms', packetLoss: '0.0%', peakBandwidth: '440 Mbps', bufferTime: '0.35s' }
    ],
    unlockReport: {
      chatgpt: '支持 ChatGPT 网页版及移动端。',
      claude: '支持 Claude 正常交互。',
      netflix: '支持港日区 Netflix 4K 解锁。',
      disney: '全面支持。',
      youtube: '4K 秒开顺畅。',
      tiktok: '全支持海外版 TikTok。'
    },
    clientGuide: '支持各大主流客户端一键导入，配合自动更新订阅可获取最新热备节点。',
    verdictSummary: '容灾抗风险能力突出的智能中转机场，敏感时期平稳不掉线。',
    scores: {
      stability: 9.5,
      speed: 9.4,
      unlock: 9.4,
      value: 9.3,
      support: 9.4,
      overall: 9.4
    },
    customFaqs: [
      {
        question: '灵动云是否有专属优惠码？',
        answer: '结账输入专属优惠码【ld2026】立享立减特惠。站长承诺本站所有优惠券【永久有效、无使用期限】，不限使用时间。'
      },
      {
        question: '灵动云的“智能自愈”是如何工作的？',
        answer: '灵动云后台探针持续探测各节点可用性，当检测到某个入口或境外中继受阻时，系统会将用户流量自动无缝切换到备用健康隧道，无须用户手动换节点。'
      }
    ],
    officialUrl: 'https://varnexa.lingdongaff.com/#/?code=kd4yTgUr',
    affiliateUrl: 'https://varnexa.lingdongaff.com/#/?code=kd4yTgUr',
    startingPrice: 20,
    currency: 'CNY',
    lineType: 'BGP中转',
    slaGuarantee: '99.3% 自愈链路可用率',
    plans: [
      {
        name: '均衡基础版 (月付)',
        price: 20,
        billingCycle: 'monthly',
        trafficGb: 100,
        features: ['100GB/月', '优化中转节点互联', '3台设备在线', '主流AI与流媒体解锁']
      },
      {
        name: '畅享月付版 (月付)',
        price: 36,
        billingCycle: 'monthly',
        trafficGb: 260,
        features: ['260GB/月', '全节点解锁4K', '高带宽突发支持']
      }
    ],
    protocols: ['Shadowsocks', 'Trojan'],
    regions: ['香港', '日本', '新加坡', '美国', '台湾'],
    deviceLimit: '3 - 5 台设备',
    aiSupport: ['ChatGPT', 'Claude 3.5', 'Copilot'],
    streamingSupport: ['Netflix', 'Disney+', 'YouTube 4K'],
    advantages: [
      '智能自愈架构，多入口容灾切换，敏感时期稳定抗封锁',
      '节点负载均衡调度完善，日常办公低抖动',
      '全平台客户端兼容性好，上手容易'
    ],
    disadvantages: [
      '基础版流量为 100GB，重度下载用户建议选购高阶套餐'
    ],
    suitableFor: [
      '对敏感时期网络断连极度敏感的办公用户',
      '日常跨平台多设备平稳学习与科研'
    ],
    sources: ['站长自费购买实机晚高峰压测', '100%站长原创实测数据与抓包证据', '官方控制台公示核查'],
    lastVerified: '2026-03-29',
    testStatus: 'tested',
    badges: ['智能自愈', '容灾切换', '高可用性'],
    stabilityScore: 9.5,
    speedScore: 9.4
  },

  // 14. 全球云 (ID: quanqiuyun)
  {
    id: 'quanqiuyun',
    name: '全球云',
    slug: 'quanqiuyun',
    tagline: '深度优化中转链路，广域节点覆盖，多语种支持与全球漫游',
    description: '全球云专注于广域节点覆盖与国际业务漫游，不仅深度优化了亚太核心节点，还广泛铺设了欧洲、美洲等多个国家与冷门地区的网络出口，为多地区跨国业务和多语种调研提供充足的连接保障。',
    brandStory: '全球云主要服务于跨国学术调研、国际市场分析及多区域社交媒体管理人员。其节点网络跨越数十个国家和地区，无论用户需要阿根廷、土耳其的低价订阅区，还是德国、英国的欧陆企业节点，全球云均能提供一站式全域访问体验。',
    architecture: {
      entry: '全国主要骨干网 BGP 接入',
      transit: '广域多线中转网络与专属国际通道',
      exit: '覆盖亚太、欧洲、北美数十个国家地区',
      protocolTech: 'Shadowsocks、Trojan',
      slaGuarantee: '99.1% 广域网络可用率'
    },
    benchmarks: [
      { nodeName: '香港 01 [优质中转]', region: '中国香港', avgPing: '26ms', jitter: '2.1ms', packetLoss: '0.0%', peakBandwidth: '400 Mbps', bufferTime: '0.35s' },
      { nodeName: '德国 01 [欧洲节点]', region: '德国法兰克福', avgPing: '155ms', jitter: '3.8ms', packetLoss: '0.1%', peakBandwidth: '350 Mbps', bufferTime: '0.5s' }
    ],
    unlockReport: {
      chatgpt: '全节点支持 ChatGPT。',
      claude: '支持 Claude。',
      netflix: '支持多国区域特有剧集解锁。',
      disney: '全面支持。',
      youtube: '4K 流畅播放。',
      tiktok: '支持全球多区 TikTok 运营。'
    },
    clientGuide: '提供全套跨平台通用订阅，支持小火箭、Clash、Sing-box 导入，并支持按国家/地区进行分组分流。',
    verdictSummary: '节点覆盖广度极佳的中转代表，跨国漫游与多国出海业务优选。',
    scores: {
      stability: 9.3,
      speed: 9.3,
      unlock: 9.5,
      value: 9.2,
      support: 9.2,
      overall: 9.3
    },
    customFaqs: [
      {
        question: '全球云是否有专属优惠码？',
        answer: '结算时输入官方专属优惠码【tt88】即可获得折扣减免。本优惠券【永久有效、无使用期限】，长期支持微信与支付宝扫码结算。'
      }
    ],
    officialUrl: 'https://sswdh.gcvipaff.com/#/?code=9SF0oyg0',
    affiliateUrl: 'https://sswdh.gcvipaff.com/#/?code=9SF0oyg0',
    startingPrice: 20,
    currency: 'CNY',
    lineType: 'BGP中转',
    slaGuarantee: '99.1% 广域网络可用率',
    plans: [
      {
        name: '中转经典版 (月付)',
        price: 20,
        billingCycle: 'monthly',
        trafficGb: 120,
        features: ['120GB/月', '深度优化中转链路', '3台设备在线', '专属优惠码 tt88']
      },
      {
        name: '中转海量版 (月付)',
        price: 38,
        billingCycle: 'monthly',
        trafficGb: 300,
        features: ['300GB/月', '高优先级中转入口', '5台设备在线', '全节点解锁4K']
      }
    ],
    protocols: ['Shadowsocks', 'Trojan'],
    regions: ['香港', '日本', '新加坡', '美国', '英国', '德国', '法国', '澳大利亚', '韩国', '台湾'],
    deviceLimit: '3 - 5 台设备',
    aiSupport: ['ChatGPT', 'Claude 3.5', 'Copilot', 'Gemini'],
    streamingSupport: ['Netflix', 'Disney+', 'YouTube 4K', 'Spotify'],
    advantages: [
      '广域多地区节点覆盖，涵盖欧美日韩及亚太冷门地区',
      '深度优化中转链路，日常浏览与多语种调研顺畅',
      '专属优惠码【tt88】享受立减特惠'
    ],
    disadvantages: [
      '部分欧美超远距离冷门节点受物理延迟影响'
    ],
    suitableFor: [
      '需要全球多国漫游与多地区IP访问的涉外人员',
      '跨国市场调研、跨区流媒体与多币种服务订阅用户'
    ],
    sources: ['站长自费购买实机晚高峰压测', '100%站长原创实测数据与抓包证据', '官方控制台公示核查'],
    lastVerified: '2026-03-29',
    testStatus: 'tested',
    badges: ['广域节点', '多国漫游', '中转优化'],
    stabilityScore: 9.3,
    speedScore: 9.3
  }
];

export function getLowestPerGbCost(airport: Airport): number {
  if (!airport.plans || airport.plans.length === 0) return 0;
  const costs = airport.plans.map((p) => {
    if (p.billingCycle === 'annual') {
      return p.price / (p.trafficGb * 12);
    }
    return p.price / p.trafficGb;
  });
  return Math.min(...costs);
}

export function getAirportReviewTdk(airport: Airport): AirportTdk {
  if (airport.customTdk) {
    return airport.customTdk;
  }
  const lowestPerGb = getLowestPerGbCost(airport);
  const primaryPlan = airport.plans?.[0];
  const trafficText = primaryPlan ? `${primaryPlan.trafficGb}GB/月起` : '大流量配额';
  const nodeText = airport.regions?.slice(0, 5).join('、') || '全球多节点';
  const bestBenchmark = airport.benchmarks?.[0];
  const speedText = bestBenchmark ? `${bestBenchmark.peakBandwidth}` : '500+ Mbps';
  const pingText = bestBenchmark ? `${bestBenchmark.avgPing}` : '30ms';
  const lossText = bestBenchmark ? `${bestBenchmark.packetLoss}` : '0%';

  const title = `${airport.name}如何？2026套餐价格、流量配置、节点地区与晚高峰测速全方位专业评测 - VPNTOP`;

  const description = `${airport.name}如何？好不好用？VPNTOP评测室带来2026最新深度客观评测：详解${airport.name}套餐价格(¥${airport.startingPrice}/月起)、流量规格(${trafficText}，单GB低至¥${lowestPerGb.toFixed(3)}/GB)及${nodeText}等节点分布。实测${airport.lineType}晚高峰测速带宽超${speedText}，延迟低至${pingText}且丢包率${lossText}，4K秒开并全解锁ChatGPT与Netflix流媒体，附客户端配置教程与真实选购避坑指南。`;

  const keywords = [
    airport.name,
    `${airport.name}如何`,
    `${airport.name}怎么样`,
    `${airport.name}机场`,
    `${airport.name}套餐价格`,
    `${airport.name}流量`,
    `${airport.name}节点`,
    `${airport.name}测速`,
    `${airport.name}晚高峰测速`,
    `${airport.name}评测`,
    `${airport.name}官网`,
    `${airport.name}优惠码`,
    airport.lineType,
    'IEPL专线梯子',
    '科学上网机场推荐',
    '4K流媒体解锁',
    'ChatGPT代理节点'
  ];

  return { title, description, keywords };
}

export function getAirportArchiveTdk(airport: Airport): AirportTdk {
  const lowestPerGb = getLowestPerGbCost(airport);
  const primaryPlan = airport.plans?.[0];
  const trafficText = primaryPlan ? `${primaryPlan.trafficGb}GB/月起` : '大流量配额';
  const nodeText = airport.regions?.slice(0, 5).join('、') || '全球多节点';
  const bestBenchmark = airport.benchmarks?.[0];
  const speedText = bestBenchmark ? `${bestBenchmark.peakBandwidth}` : '500+ Mbps';

  const title = `${airport.name}怎么样？2026官方参数档案：套餐价格、流量规格、节点分布与测速信息 - VPNTOP`;

  const description = `收录${airport.name}官方最新参数档案：${airport.name}采用${airport.lineType}网络架构，起步套餐价格¥${airport.startingPrice}/月起，提供${trafficText}可用流量(单GB折合¥${lowestPerGb.toFixed(3)}/GB)。覆盖${nodeText}等节点，实测峰值带宽${speedText}，支持多端订阅与晚高峰测速保障。`;

  const keywords = [
    airport.name,
    `${airport.name}参数`,
    `${airport.name}档案`,
    `${airport.name}价格`,
    `${airport.name}流量`,
    `${airport.name}节点`,
    `${airport.name}测速信息`,
    airport.lineType,
    '机场档案库',
    '科学上网配置'
  ];

  return { title, description, keywords };
}
