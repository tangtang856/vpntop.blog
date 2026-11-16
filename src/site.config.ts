export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; desc?: string }[];
}

export const SITE = {
  name: 'VPNTOP',
  fullName: 'VPNTOP 机场推荐与VPN节点评测网',
  domain: 'vpntop.blog',
  url: 'https://vpntop.blog',
  description: '专业的中文机场推荐、VPN节点评测与科学上网配置指南。专注IEPL专线、性价比机场与流媒体AI解锁，提供客观数据与多维度排行榜。',
  keywords: [
    '机场推荐',
    '机场节点',
    '性价比机场',
    '梯子推荐',
    'vpn',
    'vpn机场',
    'vpn节点',
    'vpn推荐',
    'IEPL专线',
    'Clash节点',
    '科学上网',
  ],
  author: 'VPNTOP 编辑部',
  locale: 'zh-CN',
  indexNowKey: 'b6563b7156944e6fa16b0632b851df22',
  foundingYear: 2024,
};

export const NAV_ITEMS: NavItem[] = [
  { label: '首页', href: '/' },
  {
    label: '机场推荐',
    href: '/recommend/budget/',
    children: [
      { label: '低预算平价', href: '/recommend/budget/', desc: '月付几元也能用的便宜实惠机场' },
      { label: '高端专线', href: '/recommend/premium/', desc: 'IEPL/IPLC不过墙稳定专线' },
      { label: '新手零门槛', href: '/recommend/beginner/', desc: '一键导入、有客户端的防迷茫推荐' },
      { label: '稳定优先', href: '/recommend/stable/', desc: '敏感时期高可用、防失联线路' },
      { label: 'AI 服务专用', href: '/recommend/ai/', desc: 'ChatGPT/Claude原生IP防封' },
      { label: '4K流媒体', href: '/recommend/streaming/', desc: 'Netflix/Disney+/YouTube全解锁' },
    ],
  },
  {
    label: '排行榜',
    href: '/ranking/overall/',
    children: [
      { label: '综合实力榜', href: '/ranking/overall/', desc: '多维度实测加权综合榜单' },
      { label: '极致性价比榜', href: '/ranking/value/', desc: '单GB成本与流量折算排名' },
      { label: '低预算平价榜', href: '/ranking/budget/', desc: '学生党与备用轻度用户优选' },
      { label: '高稳定性榜', href: '/ranking/stable/', desc: '晚高峰与特殊时期抗波动排行' },
    ],
  },
  { label: '机场横向对比', href: '/compare/' },
  { label: '资讯博客', href: '/blog/' },
  { label: '知识百科', href: '/glossary/' },
  {
    label: '教程中心',
    href: '/guides/',
    children: [
      { label: '全部教程总览', href: '/guides/', desc: '30 篇全平台多协议客户端实操指南大全' },
      { label: 'Windows 教程', href: '/guides/windows/', desc: 'Clash Verge / Sing-box / v2rayN' },
      { label: 'Android 教程', href: '/guides/android/', desc: 'v2rayNG / Clash Meta / 规则分流' },
      { label: 'iOS 教程', href: '/guides/ios/', desc: 'Shadowrocket / Surge / Stash / Loon' },
      { label: 'macOS 教程', href: '/guides/macos/', desc: 'Mac 客户端与系统全局代理教程' },
      { label: 'OpenWrt 软路由', href: '/guides/router/', desc: '家庭网关与 Docker 全屋透明代理' },
      { label: '智能电视 TV', href: '/guides/tv-apple-tv/', desc: 'Apple TV 与 Android TV 电视端配置' },
      { label: 'Linux 与测速', href: '/guides/general-speedtest/', desc: '服务器代理与 Stair Speedtest 测速' },
    ],
  },
];

export const FOOTER_LINKS = {
  topics: [
    { label: '性价比机场推荐', href: '/ranking/value/' },
    { label: '梯子推荐新手榜', href: '/recommend/beginner/' },
    { label: '高端IEPL专线', href: '/recommend/premium/' },
    { label: 'VPN与机场区别', href: '/blog/vpn-vs-airport/' },
    { label: '机场节点倍率解析', href: '/glossary/node-multiplier/' },
  ],
  guides: [
    { label: 'Windows客户端配置', href: '/guides/windows/' },
    { label: 'Android客户端配置', href: '/guides/android/' },
    { label: 'iOS小火箭教程', href: '/guides/ios/' },
    { label: 'macOS客户端教程', href: '/guides/macos/' },
    { label: '软路由全屋代理', href: '/guides/router/' },
  ],
  legal: [
    { label: '关于本站', href: '/about/' },
    { label: '联系我们', href: '/contact/' },
    { label: '编辑政策与评测标准', href: '/editorial-policy/' },
    { label: '隐私政策', href: '/privacy-policy/' },
    { label: '免责声明', href: '/disclaimer/' },
    { label: '网站地图 (Sitemap)', href: '/sitemap-index.xml' },
  ],
};
