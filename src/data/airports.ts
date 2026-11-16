export interface Plan {
  name: string;
  price: number; // 价格（人民币元）
  billingCycle: 'monthly' | 'quarterly' | 'semi-annual' | 'annual' | 'one-time';
  trafficGb: number; // 可用流量（GB）
  multiplierNote?: string; // 倍率说明
  features?: string[];
}

export interface Airport {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;

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

  // 用于排行榜多维度客观考量
  badges?: string[];
  stabilityScore?: number; // 1-10 基于专线与冗余机制
  speedScore?: number; // 1-10 基于实测/官方承诺
}

export const AIRPORTS: Airport[] = [
  {
    id: 'breezenet',
    name: '微风网络 Breezenet',
    slug: 'breezenet',
    tagline: 'IEPL/IPLC高速专线网络，200GB超大起步流量与VLESS先进协议支持',
    description: '微风网络Breezenet专注于提供高质量企业级专线体验，以¥8/月超低起步价提供200GB充沛流量。采用IEPL/IPLC主干线路与VLESS协议，全节点无视敏感时期网络拥堵，全平台客户端极速秒开4K流媒体与ChatGPT，是高性价比入门的首选品牌。',
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
      '¥8/月超低起步价即可享200GB大流量',
      'IEPL/IPLC专线网络，晚高峰无惧拥堵',
      'VLESS先进加密协议，连接快速隐蔽',
      '专属优惠码 weifeng90 享结账立减'
    ],
    disadvantages: [
      '特大促销期部分冷门节点偶尔需智能排队',
      '不支持不限时按量流量包'
    ],
    suitableFor: ['预算有限但追求专线质量的学生与个人', '大流量日常视频与社交媒体重度用户', 'ChatGPT/Claude AI大模型学习办公者'],
    sources: ['微风网络官方平台公开资费', '晚高峰网络延迟与丢包率实测'],
    lastVerified: '2026-03-29',
    testStatus: 'tested',
    badges: ['高性价比专线', '超低¥8起步', '200G大流量'],
    stabilityScore: 9.8,
    speedScore: 9.8
  },
  {
    id: 'muguang',
    name: '暮光网络',
    slug: 'muguang',
    tagline: '专线节点网络架构，120GB起步配额与多设备稳定互联',
    description: '暮光网络部署了覆盖亚太及欧美的企业级专线节点，采用先进的VLESS协议体系，为多设备家庭、团队办公与大流量下载用户提供高稳定、低抖动的网络体验。晚高峰网络吞吐平稳，4K流媒体播放顺滑无卡顿。',
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
      '专线节点网络架构，晚高峰平稳流畅',
      '120GB起步流量充裕，日常看视频无压力',
      '全面支持VLESS先进安全协议'
    ],
    disadvantages: [
      '成立时间相对老牌较新',
      '暂无按量计费套餐'
    ],
    suitableFor: ['学生党与预算有限的大流量用户', '跨平台多设备日常学习办公', '追剧与视频娱乐重度用户'],
    sources: ['暮光网络官方控制台', '节点延迟与稳定性实测数据'],
    lastVerified: '2026-03-29',
    testStatus: 'tested',
    badges: ['稳定专线', '多设备协同', 'VLESS协议'],
    stabilityScore: 9.7,
    speedScore: 9.7
  },
  {
    id: 'feimaoyun',
    name: '飞猫云',
    slug: 'feimaoyun',
    tagline: 'IEPL/IPLC与优质中转混合调度，年付折算¥7/月超高性价比',
    description: '飞猫云采用IEPL/IPLC专线与优质中转混合调度链路，年付折算约¥7/月起即可获得150GB充沛流量。针对新手提供完善的一键导入客户端与专属折扣码，流媒体与AI工具解锁表现出色，试错门槛极低。',
    officialUrl: 'https://flycat1.flycatvipaff.cc/#/?code=MlwqPqcx',
    affiliateUrl: 'https://flycat1.flycatvipaff.cc/#/?code=MlwqPqcx',
    startingPrice: 7,
    currency: 'CNY',
    lineType: 'BGP中转',
    slaGuarantee: '98.8% 可用率保证',
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
    protocols: ['Shadowsocks', 'VLESS', 'Trojan'],
    regions: ['香港', '日本', '新加坡', '美国', '韩国', '英国'],
    deviceLimit: '3 - 5 台设备',
    aiSupport: ['ChatGPT Web/App', 'Claude', 'Perplexity'],
    streamingSupport: ['Netflix', 'Disney+', 'YouTube 4K', 'Bilibili港澳台'],
    advantages: [
      '年付折算约¥7/月起，150GB充足可用',
      'IEPL/IPLC与优质中转线路结合灵活调度',
      '专属优惠码 flycat888 享折扣',
      '新手小白一键导入教程详尽'
    ],
    disadvantages: [
      '敏感时期公网中转节点可能有短暂调度重连',
      '年付方案需一次性支付'
    ],
    suitableFor: ['新手入门防迷茫用户', '预算极度敏感型学生党', '轻中度日常办公与网页浏览'],
    sources: ['飞猫云官方定价表', '实机测速与可用率抽测'],
    lastVerified: '2026-03-29',
    testStatus: 'tested',
    badges: ['入门高性价比', '折算¥7起', '专属折扣码'],
    stabilityScore: 9.6,
    speedScore: 9.6
  },
  {
    id: 'wuyou',
    name: '无忧',
    slug: 'wuyou',
    tagline: '¥19亲民门槛真实IPLC内网专线，办公学习平稳之选',
    description: '无忧（无忧链接）专注于提供20元以内亲民门槛的高品质IPLC内网专线服务。起步套餐月付仅需¥19即可享有100GB纯专线配额，延迟低、无视封锁，是追求省心稳定、日常轻中度办公与学习的理想选择。',
    officialUrl: 'https://wep01.worryfreeaff.com/#/?code=oGi9FQ0J',
    affiliateUrl: 'https://wep01.worryfreeaff.com/#/?code=oGi9FQ0J',
    startingPrice: 19,
    currency: 'CNY',
    lineType: 'IPLC专线',
    slaGuarantee: '99.5% 专线SLA',
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
    protocols: ['Shadowsocks', 'Trojan', 'VLESS'],
    regions: ['香港', '日本', '新加坡', '美国', '德国'],
    deviceLimit: '3 - 5 台设备',
    aiSupport: ['ChatGPT 4o', 'Claude 3.5 Sonnet', 'Perplexity'],
    streamingSupport: ['Netflix', 'Disney+', 'YouTube 4K', 'Spotify'],
    advantages: [
      '¥19/月亲民门槛享真实IPLC专线',
      '100GB均衡配额，日常办公游刃有余',
      '专属优惠码 wuyou666 享受优惠',
      '抗封锁能力强，敏感时期表现优异'
    ],
    disadvantages: [
      '节点数量相对大厂适中',
      '不提供按量不限时计费'
    ],
    suitableFor: ['预算在20元以内且追求专线质量的用户', '轻中度日常办公学习与查资料', '注重网络稳定防断连人群'],
    sources: ['无忧官方控制台', '专线延迟监控日志'],
    lastVerified: '2026-03-29',
    testStatus: 'tested',
    badges: ['亲民IPLC', '月付¥19', '办公首选'],
    stabilityScore: 9.5,
    speedScore: 9.5
  },
  {
    id: 'lingmao',
    name: '灵猫',
    slug: 'lingmao',
    tagline: '纯正IPLC内网专线，白领办公与4K流媒体剧迷优选',
    description: '灵猫定位高品质中高端专线代理服务，采用高规格IPLC内网传输链路，对晚高峰国际出口拥堵具有极强抗干扰能力。全节点原生解锁Netflix、Disney+等流媒体平台及ChatGPT，是白领高频办公与追剧达人的安心之选。',
    officialUrl: 'https://vip02.civetaff.com/#/?code=SXY8qyrG',
    affiliateUrl: 'https://vip02.civetaff.com/#/?code=SXY8qyrG',
    startingPrice: 25,
    currency: 'CNY',
    lineType: 'IPLC专线',
    slaGuarantee: '99.6% 专线可用率',
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
    regions: ['香港', '台湾', '日本', '新加坡', '美国', '英国'],
    deviceLimit: '4 - 6 台设备',
    aiSupport: ['ChatGPT Plus', 'Claude 3.5 Sonnet', 'GitHub Copilot'],
    streamingSupport: ['Netflix 4K', 'Disney+', 'YouTube 4K', 'HBO Max', 'Hulu'],
    advantages: [
      '纯正IPLC专线，延迟低且抗GFW封锁',
      '150GB充足月度可用流量',
      '对流媒体与AI工具解锁稳定性极佳',
      '无繁琐规则，主流客户端即导即用'
    ],
    disadvantages: [
      '起步价格25元稍高于低价中转机场',
      '限制同时连接设备数'
    ],
    suitableFor: ['对稳定性有较高要求的白领与办公人员', '4K流媒体剧迷与高码率影音爱好者', '跨国学术研究与设计人员'],
    sources: ['灵猫平台公开资费', '流媒体与AI解锁持续抽测'],
    lastVerified: '2026-03-29',
    testStatus: 'tested',
    badges: ['纯正IPLC', '影音解锁利器', '白领优选'],
    stabilityScore: 9.5,
    speedScore: 9.4
  },
  {
    id: 'flashleap',
    name: '闪跃 FlashLeap',
    slug: 'flashleap',
    tagline: 'IPLC纯专线直连，电竞级超低延迟与晚高峰稳定性保障',
    description: '闪跃FlashLeap主打极速与超低抖动专线体验，采用点对点物理IPLC纯专线互联，在全国多地均拥有低延迟接入入口。不仅全天候秒开4K流媒体与AI服务，更为外服联机游戏玩家提供了出色的网络连接保障。',
    officialUrl: 'https://vip02.flashleapaff.com/#/?code=8ZIV6HQ3',
    affiliateUrl: 'https://vip02.flashleapaff.com/#/?code=8ZIV6HQ3',
    startingPrice: 24,
    currency: 'CNY',
    lineType: 'IPLC专线',
    slaGuarantee: '99.8% 专线可用性承诺',
    plans: [
      {
        name: '纯专线入门版 (月付)',
        price: 24,
        billingCycle: 'monthly',
        trafficGb: 150,
        features: ['150GB/月', 'IPLC纯专线互联', '3台设备在线', '专属优惠码 shanyue']
      },
      {
        name: '纯专线进阶版 (月付)',
        price: 46,
        billingCycle: 'monthly',
        trafficGb: 360,
        features: ['360GB/月大流量', '最高千兆端口突发', '5台设备在线', '电竞级加速路由']
      }
    ],
    protocols: ['Shadowsocks', 'Trojan', 'VLESS'],
    regions: ['香港', '日本', '新加坡', '美国', '韩国', '德国'],
    deviceLimit: '3 - 5 台设备',
    aiSupport: ['ChatGPT 4o', 'Claude 3.5 Sonnet', 'Perplexity Pro', 'Cursor'],
    streamingSupport: ['Netflix', 'Disney+', 'YouTube 4K', 'Twitch', 'Steam'],
    advantages: [
      'IPLC纯专线直连，电竞级超低延迟',
      '150GB大流量，满足日常重度需求',
      '专属优惠码 shanyue 享受折扣',
      '晚高峰抗丢包抗拥塞性能拔尖'
    ],
    disadvantages: [
      '设备连接数限制较为严格',
      '禁止长时间BT/PT满带宽下载'
    ],
    suitableFor: ['外服联机游戏玩家与Steam/Epic用户', '对延迟与晚高峰稳定性极度敏感者', 'AI代码生成工具Cursor重度使用者'],
    sources: ['闪跃FlashLeap官方控制台', '跨国ping延迟与丢包率监测'],
    lastVerified: '2026-03-29',
    testStatus: 'tested',
    badges: ['电竞级低延迟', '纯专线直连', '专属优惠码'],
    stabilityScore: 9.4,
    speedScore: 9.4
  },
  {
    id: 'firefly',
    name: '萤火虫（Firefly）',
    slug: 'firefly',
    tagline: '特惠折算约¥8/月，经济实惠的学生党轻量首选',
    description: '萤火虫（Firefly机场）以亲民实惠的轻量套餐为主要特色，年付折算每月仅需¥8左右即可满足轻度日常查资料、学术检索与社交沟通需求。支持主流VLESS协议，操作简单易上手，适合轻量级科学上网用户。',
    officialUrl: 'https://vip02.fireflyaff.com/#/?code=uTKLkAyC',
    affiliateUrl: 'https://vip02.fireflyaff.com/#/?code=uTKLkAyC',
    startingPrice: 8,
    currency: 'CNY',
    lineType: 'BGP中转',
    slaGuarantee: '98.5% 可用率',
    plans: [
      {
        name: '特惠年付折算 (年付)',
        price: 96,
        billingCycle: 'annual',
        trafficGb: 60,
        features: ['折合约 ¥8/月', '60GB/月', '标准优化中转', '专属优惠码 firefly']
      },
      {
        name: '标准月付版 (月付)',
        price: 16,
        billingCycle: 'monthly',
        trafficGb: 160,
        features: ['160GB/月', '全节点解锁', '多设备支持']
      }
    ],
    protocols: ['VLESS', 'Shadowsocks', 'Trojan'],
    regions: ['香港', '日本', '新加坡', '美国'],
    deviceLimit: '2 - 3 台设备',
    aiSupport: ['ChatGPT Web', 'Claude Web', 'Bing Copilot'],
    streamingSupport: ['YouTube 4K', 'Netflix (部分常用区)', 'Bilibili港澳台'],
    advantages: [
      '年付折算约¥8/月，经济实惠负担小',
      'VLESS先进协议稳定传输',
      '专属优惠码 firefly 享立减',
      '控制台界面清爽易上手'
    ],
    disadvantages: [
      '入门套餐60GB流量偏向轻度用户',
      '节点覆盖国家相对集中主流地区'
    ],
    suitableFor: ['轻度上网、查阅资料与日常社交交流', '预算有限的学生群体与备用梯子需求者'],
    sources: ['萤火虫官方平台公开套餐', '网络连通性定期巡检'],
    lastVerified: '2026-03-29',
    testStatus: 'tested',
    badges: ['学生平价', '轻量实用', '折算¥8起'],
    stabilityScore: 9.3,
    speedScore: 9.3
  },
  {
    id: 'kuajiecloud',
    name: '跨界',
    slug: 'kuajiecloud',
    tagline: '全专线架构设计，跨境电商与多任务跨设备办公优选',
    description: '跨界（跨界云）专注于为跨境电商卖家、外贸团队与远程办公人员提供全专线高可用网络环境。全专线底层架构保障全天候业务连接无卡顿，标配120GB充足起步配额，支持多设备跨平台无缝协同。',
    officialUrl: 'https://vip02.kuajieaff.com/#/?code=CpJKZicY',
    affiliateUrl: 'https://vip02.kuajieaff.com/#/?code=CpJKZicY',
    startingPrice: 20,
    currency: 'CNY',
    lineType: 'IPLC专线',
    slaGuarantee: '99.5% 业务级SLA',
    plans: [
      {
        name: '全专线基础版 (月付)',
        price: 20,
        billingCycle: 'monthly',
        trafficGb: 120,
        features: ['120GB/月', '全专线架构互联', '4台设备同时在线', '跨境电商与办公优化']
      },
      {
        name: '全专线旗舰版 (月付)',
        price: 42,
        billingCycle: 'monthly',
        trafficGb: 320,
        features: ['320GB/月', '千兆突发带宽', '6台设备在线', '企业级售后通道']
      }
    ],
    protocols: ['Shadowsocks', 'Trojan', 'VLESS'],
    regions: ['香港', '台湾', '日本', '新加坡', '美国', '英国', '德国'],
    deviceLimit: '4 - 6 台设备',
    aiSupport: ['ChatGPT 4o', 'Claude 3.5 Sonnet', 'Perplexity', 'Notion AI'],
    streamingSupport: ['Netflix', 'Disney+', 'YouTube 4K', 'Amazon Prime Video'],
    advantages: [
      '全专线架构设计，稳定抗封锁性能优异',
      '120GB月度流量充裕合理，单价均衡',
      '针对跨境电商店铺管理与多设备办公特别优化'
    ],
    disadvantages: [
      '起步月付20元，无极低价按量包',
      '高峰期欧美节点延迟稍高于亚太'
    ],
    suitableFor: ['跨境电商卖家（亚马逊/Shopee/Shopify等）', '多任务跨设备办公的自由职业者与外贸团队', '追求极简稳定与高可用连接的用户'],
    sources: ['跨界云官方资费数据', '办公与外贸环境实机连通性验证'],
    lastVerified: '2026-03-29',
    testStatus: 'tested',
    badges: ['跨境办公优选', '全专线架构', '高可用稳定'],
    stabilityScore: 9.3,
    speedScore: 9.2
  },
  {
    id: 'yinxingren',
    name: '隐形人',
    slug: 'yinxingren',
    tagline: 'IEPL纯专线架构，144GB充沛起步流量与无视晚高峰保障',
    description: '隐形人主打企业级IEPL纯专线网络架构，数据全程不经公网拥堵节点，晚高峰零丢包、超低抖动。标配144GB大流量月付方案，全节点解锁ChatGPT与主流4K流媒体平台，是追求无感网络体验的实力标杆。',
    officialUrl: 'https://varnexa.invisibleaff.com/#/?code=5BkMj6bD',
    affiliateUrl: 'https://varnexa.invisibleaff.com/#/?code=5BkMj6bD',
    startingPrice: 24,
    currency: 'CNY',
    lineType: 'IEPL专线',
    slaGuarantee: '99.8% 专线SLA承诺',
    plans: [
      {
        name: '纯专线入门版 (月付)',
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
    protocols: ['Shadowsocks', 'VLESS', 'Trojan'],
    regions: ['香港', '台湾', '日本', '新加坡', '美国', '英国'],
    deviceLimit: '不限同时在线设备（禁止滥用合租）',
    aiSupport: ['ChatGPT 4o', 'Claude 3.5 Sonnet', 'Perplexity Pro', 'Cursor IDE', 'Midjourney'],
    streamingSupport: ['Netflix 4K', 'Disney+', 'YouTube 4K', 'TikTok', 'HBO Max'],
    advantages: [
      'IEPL纯专线保障，无视晚高峰网络波动',
      '144GB充足月度起步流量，折算单GB性价比高',
      '专属优惠码 yxr888 享结账立减',
      '设备无严苛数量限制，家庭多终端友好'
    ],
    disadvantages: [
      '最低月付24元起步，略高于普通中转',
      '不提供按天计费的极短期包'
    ],
    suitableFor: ['对晚高峰网络抗拥堵有极高要求的重度网民', '企业及工作室协同办公', 'AI工具重度使用者与流媒体发烧友'],
    sources: ['隐形人官方平台数据', '晚高峰丢包与速率长效监测报告'],
    lastVerified: '2026-03-29',
    testStatus: 'tested',
    badges: ['IEPL纯专线', '无视晚高峰', '144G大流量', '专属优惠码'],
    stabilityScore: 9.2,
    speedScore: 9.2
  },
  {
    id: 'feiv',
    name: '飞V',
    slug: 'feiv',
    tagline: '¥4.9超低起步价，优化线路与罕见不限时套餐',
    description: '飞V以极低门槛和罕见的不限时套餐为核心特色，月付仅需¥4.9起，同时支持按需购买不限时流量包（永不过期）。试错成本几乎为零，非常适合作为主力梯子之外的防失联备用网络，或预算极低的学生党。',
    officialUrl: 'https://varnexa.flyvaff.com/#/?code=Ks7qO8qe',
    affiliateUrl: 'https://varnexa.flyvaff.com/#/?code=Ks7qO8qe',
    startingPrice: 4.9,
    currency: 'CNY',
    lineType: 'BGP中转',
    slaGuarantee: '98.0% 网络在线率',
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
    protocols: ['Trojan', 'VLESS', 'Shadowsocks'],
    regions: ['香港', '日本', '新加坡', '美国'],
    deviceLimit: '2 - 4 台设备',
    aiSupport: ['ChatGPT (Web)', 'Gemini', 'Copilot'],
    streamingSupport: ['YouTube 4K', 'Bilibili港澳台', 'Netflix (部分地区)'],
    advantages: [
      '月付仅需¥4.9起，试错成本接近于零',
      '提供罕见的不限时流量包，永不过期',
      'Trojan主流安全协议支持，连接稳定'
    ],
    disadvantages: [
      '晚高峰极繁忙时段公网入口偶有抖动',
      '低价入门版带宽限制相对保守'
    ],
    suitableFor: ['学生与预算极低人群', '备用网络以防主力机场突发断连', '轻度网页浏览与偶尔查询资料者'],
    sources: ['飞V官方定价公开参数', '按量包与入门版实测'],
    lastVerified: '2026-03-29',
    testStatus: 'tested',
    badges: ['¥4.9极低起步', '不限时流量包', '备用神器'],
    stabilityScore: 9.1,
    speedScore: 9.1
  },
  {
    id: 'laddercloud',
    name: '梯子云 LadderCloud',
    slug: 'laddercloud',
    tagline: '优化中转与专线兼顾，大流量下载与多设备分享优选',
    description: '梯子云LadderCloud融合了高带宽优化中转与内网专线节点，提供高达350GB甚至500GB的弹性大流量方案。网络连接稳健，设备并发支持广泛，非常适合日常重度音视频下载、家庭多成员共享以及高频社交媒体访问。',
    officialUrl: 'https://varnexa.ladderaff.com/#/?code=eC6eLAbq',
    affiliateUrl: 'https://varnexa.ladderaff.com/#/?code=eC6eLAbq',
    startingPrice: 25,
    currency: 'CNY',
    lineType: 'IEPL专线',
    slaGuarantee: '99.2% 网络可用率',
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
    protocols: ['Shadowsocks', 'VLESS', 'Trojan'],
    regions: ['香港', '台湾', '日本', '新加坡', '美国', '德国', '英国'],
    deviceLimit: '4 - 6 台设备',
    aiSupport: ['ChatGPT Plus', 'Claude 3.5 Sonnet', 'Midjourney'],
    streamingSupport: ['Netflix', 'Disney+', 'YouTube 4K', 'TikTok', 'Instagram'],
    advantages: [
      '优化中转与专线兼顾，弹性海量流量',
      '最高可达350GB-500GB重度使用方案',
      '多设备协同友好，适合家庭或合租使用'
    ],
    disadvantages: [
      '起步价格25元适中',
      '不提供单日付费试用包'
    ],
    suitableFor: ['大流量下载与多设备分享群体', '日常重度音视频与社交平台重度刷客', '需要稳定跨国带宽的远程办公人员'],
    sources: ['梯子云官方平台资费表', '长效带宽吞吐量实测数据'],
    lastVerified: '2026-03-29',
    testStatus: 'tested',
    badges: ['海量流量', '多设备共享', '弹性调度'],
    stabilityScore: 9.1,
    speedScore: 9
  },
  {
    id: 'wavenet',
    name: '浪网 WaveNet',
    slug: 'wavenet',
    tagline: '自研客户端优化线路，150GB高流量与高码率视频利器',
    description: '浪网WaveNet以自主研发的优化线路与定制客户端为核心竞争力，具备极强的抗网络拥塞和干扰能力。标配150GB充沛月度流量，4K甚至8K超高清视频拖拽秒开，是追求高品质自研线路与畅快大流量体验的进阶之选。',
    officialUrl: 'https://varnexa.wavenetaff.com/#/?code=8fwQQBdy',
    affiliateUrl: 'https://varnexa.wavenetaff.com/#/?code=8fwQQBdy',
    startingPrice: 30,
    currency: 'CNY',
    lineType: 'IEPL专线',
    slaGuarantee: '99.6% 专线可用率',
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
    protocols: ['Shadowsocks', 'Trojan', 'VLESS'],
    regions: ['香港', '日本', '新加坡', '美国', '韩国', '德国', '澳大利亚'],
    deviceLimit: '5 - 8 台设备',
    aiSupport: ['ChatGPT 4o', 'Claude 3.5 Sonnet', 'Perplexity Pro', 'Sora', 'Cursor'],
    streamingSupport: ['Netflix 4K', 'Disney+', 'YouTube 4K', 'HBO Max', 'Hulu', 'Twitch'],
    advantages: [
      '150GB高流量配置，无惧流量见底',
      '自研客户端优化线路，抗干扰抗拥塞性能优异',
      '高码率视频拖拽缓冲极快，影音体验极佳'
    ],
    disadvantages: [
      '起步月付30元定位中高端',
      '节点测速偶尔因安全防御限制批量ping'
    ],
    suitableFor: ['高码率4K/8K视频与重度网络使用群体', '追求高品质自研线路与大流量者', '外企与跨国商务人士'],
    sources: ['浪网官方控制台数据', '4K高码率视频实时流速监测'],
    lastVerified: '2026-03-29',
    testStatus: 'tested',
    badges: ['自研客户端', '8K极速秒开', '150G高配'],
    stabilityScore: 9,
    speedScore: 9
  },
  {
    id: 'lingdongcloud',
    name: '灵动云',
    slug: 'lingdongcloud',
    tagline: '优化节点均衡配置，日常办公与影音轻度娱乐省心优选',
    description: '灵动云专注于为普通大众提供均衡、简单、省心的网络连接方案。起步套餐月付20元提供100GB流量，支持Trojan等安全主流协议，节点分布均衡，无论是日常办公查阅、邮件往来还是休闲刷剧均游刃有余。',
    officialUrl: 'https://varnexa.lingdongaff.com/#/?code=kd4yTgUr',
    affiliateUrl: 'https://varnexa.lingdongaff.com/#/?code=kd4yTgUr',
    startingPrice: 20,
    currency: 'CNY',
    lineType: 'BGP中转',
    slaGuarantee: '98.8% 网络可用率',
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
    protocols: ['Trojan', 'Shadowsocks', 'VLESS'],
    regions: ['香港', '日本', '新加坡', '美国', '台湾'],
    deviceLimit: '3 - 5 台设备',
    aiSupport: ['ChatGPT', 'Claude', 'Copilot'],
    streamingSupport: ['YouTube 4K', 'Netflix (主流区)', 'Disney+', 'Spotify'],
    advantages: [
      '100GB均衡起步流量，实用不浪费',
      'Trojan安全加密协议，穿透性好不易受干扰',
      '操作逻辑简单，一键订阅省心省力'
    ],
    disadvantages: [
      '冷门国家节点较少，以亚太欧美为主',
      '年付优惠幅度相对适中'
    ],
    suitableFor: ['追求简单省心与流量均衡的普通用户', '日常办公、文献查阅与影音轻度娱乐', '不愿折腾复杂规则的网民'],
    sources: ['灵动云官方公开数据', '节点连通性日常检测'],
    lastVerified: '2026-03-29',
    testStatus: 'tested',
    badges: ['均衡省心', 'Trojan协议', '新手友好'],
    stabilityScore: 8.9,
    speedScore: 8.9
  },
  {
    id: 'quanqiuyun',
    name: '全球云',
    slug: 'quanqiuyun',
    tagline: '深度优化中转架构，120GB经典套餐与专属优惠码',
    description: '全球云采用多入口深度优化的BGP中转网络架构，节点连通可用率高，晚高峰调优成熟。月付20元提供120GB经典大容量套餐，并提供专属折扣码，是中等流量需求上班族与在校学生极具性价比的实用选择。',
    officialUrl: 'https://sswdh.gcvipaff.com/#/?code=9SF0oyg0',
    affiliateUrl: 'https://sswdh.gcvipaff.com/#/?code=9SF0oyg0',
    startingPrice: 20,
    currency: 'CNY',
    lineType: 'BGP中转',
    slaGuarantee: '99.0% 节点连通率',
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
    protocols: ['Shadowsocks', 'VLESS', 'Trojan'],
    regions: ['香港', '日本', '新加坡', '美国', '韩国', '英国'],
    deviceLimit: '3 - 5 台设备',
    aiSupport: ['ChatGPT 4o', 'Claude 3.5', 'Gemini Pro'],
    streamingSupport: ['Netflix', 'Disney+', 'YouTube 4K', 'TikTok'],
    advantages: [
      '深度优化中转架构，节点可用率高',
      '120GB经典套餐容量，平衡实用',
      '专属优惠码 tt88 享结账立减优惠',
      '节点覆盖主流国家地区全面'
    ],
    disadvantages: [
      '公网入口在极端敏感期偶需等待自动换线',
      '不设不限时无期限包'
    ],
    suitableFor: ['日常网络浏览与音视频流媒体用户', '中等流量使用需求的上班族与在校学生', '寻找备选高可用中转节点的用户'],
    sources: ['全球云官方平台参数', '节点可用率与流媒体解锁抽测'],
    lastVerified: '2026-03-29',
    testStatus: 'tested',
    badges: ['经典大容量', '专属优惠码', '中转优化'],
    stabilityScore: 8.8,
    speedScore: 8.8
  }
];

// 辅助计算函数
export function getLowestPerGbCost(airport: Airport): number {
  if (!airport.plans || airport.plans.length === 0) return 0;
  // 仅计算标准周期套餐的单GB成本，排除一次性无期限包
  const validPlans = airport.plans.filter(p => p.billingCycle !== 'one-time' && p.trafficGb > 0);
  if (validPlans.length === 0) return 0;

  const costs = validPlans.map(p => {
    // 若是年付，trafficGb通常是每月流量，年度总流量为 trafficGb * 12
    const totalGb = p.billingCycle === 'annual' ? p.trafficGb * 12 : p.trafficGb;
    return p.price / totalGb;
  });

  return Math.min(...costs);
}

export function getAirportBySlug(slug: string): Airport | undefined {
  return AIRPORTS.find(a => a.slug === slug || a.id === slug);
}
