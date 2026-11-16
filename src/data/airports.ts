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
    id: 'kuanyun',
    name: '宽云 Kuanyun',
    slug: 'kuanyun',
    tagline: '全内网纯IEPL专线传输，晚高峰超低延迟与AI原生解锁',
    description: '宽云是一家定位中高端的纯IEPL企业专线机场，节点不过国家防火墙（GFW），主打敏感时期高可用、4K秒开与企业级高稳定。支持全平台主流客户端一键导入，香港、日本、新加坡均配备流媒体与ChatGPT原生住宅IP。',
    officialUrl: 'https://kuanyun.org',
    affiliateUrl: 'https://kuanyun.org',
    startingPrice: 28,
    currency: 'CNY',
    lineType: 'IEPL专线',
    slaGuarantee: '99.5% 专线可用率',
    plans: [
      {
        name: '基础专线套餐 (月付)',
        price: 28,
        billingCycle: 'monthly',
        trafficGb: 120,
        features: ['120GB/月', 'IEPL内网专线', '不限客户端设备', '支持ChatGPT/TikTok/Netflix']
      },
      {
        name: '进阶专线套餐 (月付)',
        price: 48,
        billingCycle: 'monthly',
        trafficGb: 280,
        features: ['280GB/月', '全节点解锁4K/8K', '企业级带宽保障', '专属客服响应']
      },
      {
        name: '畅享专线年付 (年付)',
        price: 298,
        billingCycle: 'annual',
        trafficGb: 300, // 300GB每月
        features: ['折合 24.8元/月', '300GB/月', '赠送备用应急直连节点']
      }
    ],
    protocols: ['Shadowsocks', 'Shadowsocks-2022', 'Trojan'],
    regions: ['香港', '日本', '新加坡', '美国', '台湾', '德国', '英国'],
    deviceLimit: '不限同时在线设备（禁止合租滥用）',
    aiSupport: ['ChatGPT (Web/App)', 'Claude 3.5 Sonnet', 'Gemini Pro', 'Midjourney', 'Perplexity'],
    streamingSupport: ['Netflix (港日美区)', 'Disney+', 'YouTube Premium', 'HBO Max', 'Spotify'],
    advantages: [
      '全线采用商业IEPL内网专线，延迟极低且敏感时期不过墙防封锁',
      '香港、日本常用节点解锁率接近100%，ChatGPT/Claude不易遭遇封锁警告',
      '无严苛设备数量限制，适合多设备及家庭轻度共享',
      '全节点1倍率透明计费，无隐形扣量'
    ],
    disadvantages: [
      '起步价28元/月，略高于纯中转低价机场',
      '不支持不限时按量计费套餐',
      '冷门国家节点较少，主要集中于亚太及欧美主流地区'
    ],
    suitableFor: ['对晚高峰稳定性有高要求的上班族', '深度依赖ChatGPT/Claude进行工作的AI开发者', '4K流媒体重度影音用户'],
    sources: ['宽云官方公布套餐参数', 'VPNTOP实验室2026年Q1专线延迟与解锁抽样'],
    lastVerified: '2026-02-15',
    testStatus: 'tested',
    badges: ['编辑推荐', '晚高峰高抗阻', 'AI解锁稳定'],
    stabilityScore: 9.6,
    speedScore: 9.4
  },
  {
    id: 'fycloud',
    name: '飞鸟云 Fyniao Cloud',
    slug: 'fycloud',
    tagline: '性价比旗舰中转机场，平价大流量与多线BGP入口',
    description: '飞鸟云是老牌高性价比中转机场代表，采用多入口国内BGP中转分流网络，兼顾低廉价格与高流量额度。适合需要大流量看视频、下载大型开发资源或预算有限的学生及初学者。',
    officialUrl: 'https://fycloud.pro',
    affiliateUrl: 'https://fycloud.pro',
    startingPrice: 15,
    currency: 'CNY',
    lineType: 'BGP中转',
    slaGuarantee: '98% 网络在线率',
    plans: [
      {
        name: '轻量轻度套餐 (月付)',
        price: 15,
        billingCycle: 'monthly',
        trafficGb: 150,
        features: ['150GB/月', 'BGP多线入口', '3台设备在线', '解锁主流流媒体']
      },
      {
        name: '标准大流量 (月付)',
        price: 25,
        billingCycle: 'monthly',
        trafficGb: 350,
        features: ['350GB/月', '峰值速率500Mbps', '5台设备在线', '提供应急备用节点']
      },
      {
        name: '按量轻量周期包 (一次性)',
        price: 49,
        billingCycle: 'one-time',
        trafficGb: 200,
        features: ['不限时用完为止', '适合作为防失联备用梯子']
      }
    ],
    protocols: ['VLESS', 'Trojan', 'Hysteria2'],
    regions: ['香港', '台湾', '日本', '新加坡', '美国', '韩国', '英国', '土耳其', '阿根廷'],
    deviceLimit: '3 - 5 台设备',
    aiSupport: ['ChatGPT (Web)', 'Gemini', 'Copilot'],
    streamingSupport: ['Netflix', 'Disney+', 'YouTube 4K', 'Bilibili港澳台'],
    advantages: [
      '单GB均价非常低，15元即提供150GB大流量',
      '支持Hysteria2高性能协议，弱网与移动蜂窝网络下表现优异',
      '节点覆盖国家丰富，包含土耳其、阿根廷等小众流媒体低价区',
      '提供不限时一次性按量流量包，备用极佳'
    ],
    disadvantages: [
      '敏感时期可能遇到国内BGP入口IP被波及的情况',
      'Claude 3.5在某些非住宅节点上可能提示IP变动',
      '限制同时在线设备数量'
    ],
    suitableFor: ['追求极致性价比的学生党与视频党', '需要偶尔出国查阅资料的轻量备用用户', '海外多区流媒体订阅需求者'],
    sources: ['飞鸟云官网公开参数', '日常流媒体与测速抽检'],
    lastVerified: '2026-02-12',
    testStatus: 'official-data',
    badges: ['极致性价比', '学生推荐', '大流量'],
    stabilityScore: 8.8,
    speedScore: 9.1
  },
  {
    id: 'paofu',
    name: '泡芙云 Paofu Cloud',
    slug: 'paofu',
    tagline: '运营超过5年的资深老牌专线机场，口碑稳健售后完善',
    description: '泡芙云创立于2019年，属于行业内少有的长期平稳运营机场之一。全线部署IPLC/IEPL内网专线，专注于高可用企业级链路，晚高峰网络抖动控制极佳，具有完善的工单客服体系与定制客户端。',
    officialUrl: 'https://paofu.cloud',
    affiliateUrl: 'https://paofu.cloud',
    startingPrice: 32,
    currency: 'CNY',
    lineType: 'IPLC专线',
    slaGuarantee: '99.8% 专线SLA',
    plans: [
      {
        name: '轻量专线月付 (月付)',
        price: 32,
        billingCycle: 'monthly',
        trafficGb: 100,
        features: ['100GB/月', '国内双线入口IPLC', '3台设备在线', '工单技术支持']
      },
      {
        name: '旗舰商业月付 (月付)',
        price: 65,
        billingCycle: 'monthly',
        trafficGb: 300,
        features: ['300GB/月', '最高1000Mbps独享专线带宽', '8台设备在线', '企业级优先级']
      },
      {
        name: '商务年付套餐 (年付)',
        price: 360,
        billingCycle: 'annual',
        trafficGb: 200, // 200GB每月
        features: ['折合 30元/月', '200GB/月', '赠送海外Apple ID与小火箭兑换协助']
      }
    ],
    protocols: ['Shadowsocks', 'Trojan'],
    regions: ['香港', '日本', '新加坡', '美国', '英国', '德国', '澳大利亚'],
    deviceLimit: '3 - 8 台设备',
    aiSupport: ['ChatGPT Web/App', 'Claude', 'Midjourney', 'GitHub Copilot', 'Sora'],
    streamingSupport: ['Netflix', 'Disney+', 'HBO Max', 'Hulu', 'Amazon Prime Video'],
    advantages: [
      '持续运营超5年未发生跑路或长期失联事故，信誉基础扎实',
      'IPLC内网专线全天候平稳，晚高峰延迟几乎无波动',
      '提供独立定制客户端，新手小白无需手动配置订阅',
      '流媒体与AI工具原生住宅IP定期维护更新'
    ],
    disadvantages: [
      '单价偏高，最低套餐月付32元',
      '流量额度相对保守，不适合全天BT下载',
      '对多IP同时使用规则较严'
    ],
    suitableFor: ['对网络稳定性有苛刻要求的跨境外贸人员', '害怕机场突然跑路、追求老牌省心的用户', '外企办公与金融资讯查阅'],
    sources: ['泡芙云官方服务条款及价格表', '编辑部长期监测节点可用率日志'],
    lastVerified: '2026-02-18',
    testStatus: 'tested',
    badges: ['老牌常青', '高稳定性', '外贸首选'],
    stabilityScore: 9.8,
    speedScore: 9.2
  },
  {
    id: 'feiji-x',
    name: '极客云 Geek Cloud',
    slug: 'geekcloud',
    tagline: '极速混合链路与平价直连中转，新手极速上手',
    description: '极客云主打多元化混合协议与低门槛体验，提供包含公网中转与低延迟直连的多梯级方案。具备详细的新手图文教程与客服在线协助，对于刚接触科学上网的小白用户十分友好。',
    officialUrl: 'https://geekcloud.net',
    affiliateUrl: 'https://geekcloud.net',
    startingPrice: 12,
    currency: 'CNY',
    lineType: '公网中转',
    slaGuarantee: '尚未核实',
    plans: [
      {
        name: '入门体验套餐 (月付)',
        price: 12,
        billingCycle: 'monthly',
        trafficGb: 80,
        features: ['80GB/月', '普通公网中转节点', '2台设备', '基础流媒体']
      },
      {
        name: '进阶娱乐套餐 (月付)',
        price: 22,
        billingCycle: 'monthly',
        trafficGb: 220,
        features: ['220GB/月', '优质BGP中转', '4台设备', '解锁4K流媒体']
      }
    ],
    protocols: ['VLESS', 'Shadowsocks'],
    regions: ['香港', '日本', '美国', '新加坡'],
    deviceLimit: '2 - 4 台设备',
    aiSupport: ['ChatGPT (部分节点可用，偶尔需切换)'],
    streamingSupport: ['YouTube 4K', 'Netflix (部分地区)'],
    advantages: [
      '12元起步的月付门槛低，试错成本小',
      '网站控制台清爽，教程图文详细',
      '支持支付宝与微信等常规便捷支付'
    ],
    disadvantages: [
      '晚高峰公网中转偶有丢包与延迟升高现象',
      'ChatGPT和Claude等AI服务可能会受到OpenAI风控限制',
      '节点国家数量有限'
    ],
    suitableFor: ['预算有限的在校学生', '仅需偶尔查阅谷歌学术与外网网页的轻度用户', '新手科学上网尝鲜体验'],
    sources: ['极客云官网套餐明细'],
    lastVerified: '2026-02-10',
    testStatus: 'official-data',
    badges: ['低门槛', '新手友好'],
    stabilityScore: 8.2,
    speedScore: 8.5
  },
  {
    id: 'galaxy-speed',
    name: '银河极速 GalaxySpeed',
    slug: 'galaxyspeed',
    tagline: '多地双活IEPL+多入BGP智能调度，专为流媒体与AI定制',
    description: '银河极速是近两年崛起的黑马级专业机场，核心节点部署了华东、华南、华北三地入口的IEPL专线集群。系统内置智能健康检查与自动DNS故障转移，当某入口受影响时可在毫秒级自动切换。',
    officialUrl: 'https://galaxyspeed.io',
    affiliateUrl: 'https://galaxyspeed.io',
    startingPrice: 22,
    currency: 'CNY',
    lineType: 'IEPL专线',
    slaGuarantee: '99.2% 智能多入口SLA',
    plans: [
      {
        name: '灵动专线月付 (月付)',
        price: 22,
        billingCycle: 'monthly',
        trafficGb: 160,
        features: ['160GB/月', 'IEPL专线互联', '3台设备在线', '解锁主流AI及流媒体']
      },
      {
        name: '尊享专线月付 (月付)',
        price: 38,
        billingCycle: 'monthly',
        trafficGb: 360,
        features: ['360GB/月', '最高800Mbps突发带宽', '6台设备在线', '全节点解锁']
      },
      {
        name: '大流量年付专享 (年付)',
        price: 220,
        billingCycle: 'annual',
        trafficGb: 200, // 200GB每月
        features: ['折合 18.3元/月', '200GB/月', '赠送额外紧急备用直连线路']
      }
    ],
    protocols: ['Shadowsocks', 'Trojan', 'VLESS'],
    regions: ['香港', '日本', '新加坡', '美国', '德国', '台湾', '法国'],
    deviceLimit: '3 - 6 台设备',
    aiSupport: ['ChatGPT 4o', 'Claude 3.5 Sonnet', 'Perplexity Pro', 'Cursor IDE'],
    streamingSupport: ['Netflix', 'Disney+', 'HBO Max', 'BBC iPlayer', 'Hulu'],
    advantages: [
      '华东/华南多入口自动容灾，全国各地网络连接均能获得极佳延迟',
      '22元即提供160GB真IEPL专线，性价比高',
      '对Cursor与GitHub Copilot等AI开发工具优化良好',
      '支持主流Shadowsocks、Trojan和VLESS多种协议'
    ],
    disadvantages: [
      '成立时间相对泡芙云等老牌较短（约3年）',
      '年付虽然优惠但建议新手先月付体验',
      '不提供不限时永久流量包'
    ],
    suitableFor: ['使用Cursor/VSCode AI辅助编程的程序员', '兼顾预算与专线稳定性的务实型用户', '多地经常出差的用户'],
    sources: ['银河极速官方平台数据', '实测多入口延迟及解锁验证'],
    lastVerified: '2026-02-14',
    testStatus: 'tested',
    badges: ['高性价比专线', 'AI开发者优选', '智能容灾'],
    stabilityScore: 9.3,
    speedScore: 9.3
  }
];

// 辅助计算函数
export function getLowestPerGbCost(airport: Airport): number {
  if (!airport.plans || airport.plans.length === 0) return 0;
  // 仅计算月付或标准周期套餐的单GB成本，排除一次性无期限包
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
