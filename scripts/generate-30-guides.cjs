const fs = require('fs');
const path = require('path');

const GUIDES_DIR = path.join(__dirname, '../src/content/guides');
if (!fs.existsSync(GUIDES_DIR)) fs.mkdirSync(GUIDES_DIR, { recursive: true });

const newGuides = [
  {
    slug: 'windows-singbox',
    title: 'Sing-box for Windows 完整图文配置教程：从核心安装到可视化规则面板',
    description: '详解 Sing-box 客户端在 Windows 系统下的安装、图形化界面客户端选用、一键订阅导入与系统级虚拟网卡配置，助你体验极低内存占用与秒级切线。',
    platform: 'windows',
    tags: ['Windows教程', 'Sing-box', '机场配置', '低延迟梯子'],
    recommendedAirports: ['breezenet', 'yinxingren', 'muguang'],
    steps: [
      '下载并安装 Sing-box 现代图形化客户端（推荐 Sing-box GUI 或图形化封装版）',
      '在机场用户中心复制通用订阅链接或 Sing-box 专有链接',
      '在客户端 Profiles 界面点击“New/导入”，粘贴订阅地址并更新节点清单',
      '在 Dashboard 中启用 TUN 虚拟网卡模式，选择“Rule（规则分流）”',
      '在节点列表中测试延迟并选定延迟最低的专线节点（如微风网络香港IEPL）'
    ],
    faqs: [
      { q: 'Sing-box 相比 Clash 有什么核心优势？', a: 'Sing-box 原生采用 Go 语言极简高性能核心，内存占用比传统客户端低 60% 以上，且原生支持 VLESS Reality 与 Hysteria 2 协议。' },
      { q: '开启 TUN 模式后提示需要管理员权限？', a: '右键点击客户端图标选择“以管理员身份运行”，虚拟网卡驱动安装完成后即可正常接管全系统流量。' }
    ]
  },
  {
    slug: 'windows-tun-mode',
    title: 'Windows 开启 TUN 虚拟网卡全流量接管教程：彻底解决游戏与 UWP 应用不走代理',
    description: '解决 Windows 电脑部分软件（如 Microsoft Store、外服游戏、终端命令行）绕过代理无法翻墙的顽疾，手把手教你配置 TUN 虚拟网卡驱动。',
    platform: 'windows',
    tags: ['TUN模式', 'Windows教程', '虚拟网卡', '网络排错'],
    recommendedAirports: ['yinxingren', 'flashleap', 'breezenet'],
    steps: [
      '以管理员身份运行 Clash Verge Rev 或 Sing-box 客户端',
      '在“设置 (Settings)”中找到“服务模式 (Service Mode)”或“虚拟网卡 (TUN Mode)”',
      '点击安装虚拟网卡驱动（通常名为 wintun.dll），等待系统提示驱动加载成功',
      '开启 TUN 模式总开关，将系统 DNS 劫持设置为真实 DNS 或 Fake-IP 模式',
      '打开命令提示符运行 ping google.com 验证流量是否已通过 TUN 网卡顺利转发'
    ],
    faqs: [
      { q: '开启 TUN 模式会导致国内微信淘宝卡顿吗？', a: '只要配合规则模式（Rule），国内域名和 IP 会自动走 DIRECT 直连通道，不消耗梯子流量也不影响国内网速。' },
      { q: '为什么 TUN 开启后部分国内银行软件报错？', a: '部分网银会检测虚拟网卡，可在客户端的“Bypass / 绕过列表”中将该银行客户端进程加入直连放行白名单。' }
    ]
  },
  {
    slug: 'windows-v2rayn',
    title: 'v2rayN Windows 客户端配置指南：Xray 与 Hysteria2 协议极速上手',
    description: '老牌经典代理神器 v2rayN 2026 最新版使用教程。从核心解压、订阅批量导入、路由规则更新到 Xray/Hysteria2 极速测速全流程。',
    platform: 'windows',
    tags: ['v2rayN', 'Xray', 'Hysteria2', 'Windows梯子'],
    recommendedAirports: ['feimaoyun', 'breezenet', 'feiv'],
    steps: [
      '下载包含 Core 核心组件的 v2rayN-With-Core.zip 压缩包并解压至非中文目录',
      '双击运行 v2rayN.exe，系统托盘右下角出现蓝/红 V 图标',
      '点击“订阅分组” -> “订阅分组设置”，点击添加并粘贴机场订阅链接',
      '点击顶部“订阅”菜单中的“更新订阅”，等待节点列表全量加载完成',
      '按 Ctrl+A 全选节点，按 Ctrl+R 进行“真实连接延迟测试 (测真连接)”，右键设为活动服务器'
    ],
    faqs: [
      { q: '更新订阅时提示“基础连接已经关闭”？', a: '多为机场订阅域名被公网污染，请先勾选临时可用备用节点或将电脑 DNS 修改为 1.1.1.1 后重试。' },
      { q: '系统代理模式应该选择哪一个？', a: '推荐选择“自动配置系统代理”，路由规则选择“绕过大陆 (Whitelist)”即可保证顺畅使用。' }
    ]
  },
  {
    slug: 'windows-proxifier',
    title: 'Proxifier 配合机场节点给外服游戏与专业软件强制定向代理实战教程',
    description: '手把手教你使用 Proxifier 强行接管不支持代理设置的 Windows 软件、外服游戏客户端与开发工具，实现指定进程走指定专线节点。',
    platform: 'windows',
    tags: ['Proxifier', '游戏加速', '进程代理', '定向分流'],
    recommendedAirports: ['flashleap', 'yinxingren', 'wavenet'],
    steps: [
      '下载并安装 Proxifier 客户端，准备好本地 Socks5 监听端口（如 127.0.0.1:7890）',
      '在 Proxifier 中点击 Profile -> Proxy Servers，添加本地代理端口并点击 Check 测试通信',
      '点击 Profile -> Proxification Rules，点击 Add 新增自定义进程分流规则',
      '在 Applications 中填入游戏主进程名称（如 game.exe; steam.exe）',
      '将 Action 设定为刚才添加的代理服务器，点击 OK 即可完成定向加速'
    ],
    faqs: [
      { q: '为什么 Proxifier 偶尔会导致局域网打印机打不开？', a: '在 Rules 中确保默认的“Localhost”规则位于最上方并处于 Direct 直连放行状态即可。' },
      { q: '玩外服联机游戏推荐选什么节点？', a: '推荐选择闪跃 FlashLeap 或隐形人的 IPLC 纯专线，其延迟几乎等于物理光纤物理延迟，无抖动丢包。' }
    ]
  },
  {
    slug: 'windows-browser-zeroomega',
    title: 'Chrome / Edge 浏览器 ZeroOmega (SwitchyOmega) 独立分流插件配置教学',
    description: '无需开启全系统代理，在浏览器内安装 ZeroOmega (SwitchyOmega) 扩展，实现只让指定网页走机场节点，办公工作两不误。',
    platform: 'windows',
    tags: ['浏览器插件', 'SwitchyOmega', 'ZeroOmega', '轻量翻墙'],
    recommendedAirports: ['breezenet', 'feimaoyun', 'wuyou'],
    steps: [
      '在 Edge 或 Chrome 应用商店搜索安装 ZeroOmega 扩展插件',
      '打开插件选项，新建情景模式并命名为“代理模式”，类型选择“代理服务器”',
      '代理协议选择 SOCKS5，代理服务器填入 127.0.0.1，端口填入本地客户端端口（如 7890）',
      '新建“自动切换”情景模式，规则列表规则填入 GFWList 在线规则地址',
      '在浏览器右上角插件图标处将活动模式勾选为“自动切换”，即可实现访问谷歌走代理、访问百度走直连'
    ],
    faqs: [
      { q: 'SwitchyOmega 在新版 Chrome 上提示不支持清单 V3 怎么办？', a: '使用开源社区推荐的现代分支 ZeroOmega，完全兼容 Chrome Manifest V3 规范。' },
      { q: '这种方式能让电脑上的 Discord 或 Telegram 走代理吗？', a: '不能。浏览器插件仅接管浏览器标签页内网页流量，独立桌面客户端需在客户端内设置 Socks5 代理。' }
    ]
  },
  {
    slug: 'android-clash-meta',
    title: 'Clash Meta for Android (CMFA) 进阶配置：内核切换、覆写脚本与节点测速',
    description: '详解安卓手机使用 Clash Meta for Android 的进阶设置：支持 VLESS、Trojan 与 Hysteria2，开启分应用代理与一键测速。',
    platform: 'android',
    tags: ['安卓梯子', 'Clash Meta', 'CMFA', '手机翻墙教程'],
    recommendedAirports: ['breezenet', 'yinxingren', 'feimaoyun'],
    steps: [
      '从官方 GitHub Releases 下载并安装 Clash Meta for Android 最新稳定版 APK',
      '打开软件点击“配置 (Profiles)” -> “新配置 (New Profile)” -> “URL”，输入配置名称与机场订阅链接',
      '设置自动更新时间间隔为 1440 分钟（24小时），点击右上角保存图标下载配置文件',
      '返回主界面点击“点此启动”，系统弹窗提示创建 VPN 连接，点击“允许”',
      '进入“代理 (Proxies)”面板，右上角点击闪电图标批量测速，选择延迟最低节点'
    ],
    faqs: [
      { q: '安卓手机息屏后容易断网怎么办？', a: '在手机系统设置中将 Clash Meta 的电池策略从“智能控制”改为“无限制 / 允许后台高耗电”。' },
      { q: '为什么部分华为手机安装时报安全警告？', a: '由于属于代理类网络软件，在安装时选择“单次忽略”或开启纯净模式退出即可正常安装。' }
    ]
  },
  {
    slug: 'android-singbox',
    title: 'Sing-box Android 官方客户端使用教程：轻量低功耗与 Rule-set 规则集配置',
    description: '针对安卓手机发热与耗电敏感用户，详解 Sing-box 安卓版的极速配置流程。低至几兆内存占用，全天后台挂机零压力。',
    platform: 'android',
    tags: ['Sing-box', '安卓教程', '低功耗代理', '安卓翻墙'],
    recommendedAirports: ['muguang', 'breezenet', 'lingmao'],
    steps: [
      '在 Google Play 商店或 GitHub Releases 安装 Sing-box Android 官方客户端',
      '打开客户端，进入 Profiles 页面，点击添加配置 Profile',
      '选择 Remote 远程订阅模式，输入机场提供的 Sing-box 通用配置订阅链接',
      '在设置中启用 Bypass LAN（绕过局域网）与 Strict Route（严格路由）',
      '点击主界面底部的大播放按钮开启服务，状态栏出现钥匙图标即代表连接成功'
    ],
    faqs: [
      { q: '如何查看当前连接的节点具体延迟？', a: '在 Groups 面板中点击对应策略组右侧的延迟探测按钮，即可实时刷新各节点的毫秒延迟。' },
      { q: '如何配置分应用代理？', a: '在软件 Settings 中找到 Per-App Proxy，勾选仅需要翻墙的应用（如 YouTube、Twitter）。' }
    ]
  },
  {
    slug: 'android-app-filter',
    title: '安卓分应用代理配置教程：微信国内直连与海外应用科学上网智能分流',
    description: '不想让微信、抖音、淘宝走梯子流量？教你在安卓手机上轻松开启分应用代理，保护隐私的同时节省宝贵的机场流量。',
    platform: 'android',
    tags: ['分应用代理', '流量节省', '安卓技巧', '防封分流'],
    recommendedAirports: ['breezenet', 'feimaoyun', 'wuyou'],
    steps: [
      '打开 v2rayNG 或 Clash Meta for Android 客户端',
      '在设置菜单中找到“分应用代理 (Per-App Proxy / 路由设置)”选项',
      '开启“分应用代理”开关，界面将列出手机中安装的所有应用程序',
      '模式选择“仅允许勾选应用通过代理 (Whitelist)”',
      '在列表中仅勾选 YouTube、Chrome、ChatGPT、X (Twitter)、Telegram 等海外软件并保存'
    ],
    faqs: [
      { q: '开启分应用代理后，国内软件还会被检测到翻墙吗？', a: '不会。未勾选的国内软件直接走蜂窝移动网络或本地 Wi-Fi，不会经过代理虚拟网卡接口。' },
      { q: '为什么勾选了 Chrome，打开百度还是能访问？', a: '因为 Chrome 整体走代理流量，但如果你的机场规则配置了白名单规则，访问百度依然会自动分流直连。' }
    ]
  },
  {
    slug: 'android-hotspot-proxy',
    title: '安卓手机开启热点共享梯子节点流量给 Switch、PS5 与笔记本电脑教程',
    description: '无需额外配置软路由，安卓手机连接机场专线后一键开启热点共享代理流量，让 Switch 下载游戏与电脑畅通无阻。',
    platform: 'android',
    tags: ['热点共享', 'Switch翻墙', '游戏下载', '跨设备共享'],
    recommendedAirports: ['flashleap', 'laddercloud', 'breezenet'],
    steps: [
      '在安卓手机上安装并启动 v2rayNG 或 Clash 客户端并连接稳定专线节点',
      '在客户端设置中找到“允许来自局域网的连接 (Allow LAN)”并开启',
      '记下客户端提示的局域网端口（如 HTTP: 10809, Socks5: 10808）',
      '打开手机的“个人热点”，将 Switch 或电脑连接到手机热点 Wi-Fi',
      '在 Switch 的 Wi-Fi 高级设置中开启“代理服务器”，填入手机局域网 IP（如 192.168.43.1）和端口 10809 即可'
    ],
    faqs: [
      { q: 'Switch 连接测试提示 NAT 类型变成什么？', a: '连接专线节点后，NAT 类型通常提升至 NAT B 或 NAT A，联机对战质量大幅改善。' },
      { q: '为什么连上热点后 Switch 依然提示无法访问互联网？', a: '请检查手机端防火墙是否拦截了局域网端口转发，或尝试在客户端设置中开启 VPN Hotspot 插件。' }
    ]
  },
  {
    slug: 'android-background-keepalive',
    title: '解决安卓手机代理后台经常断连、无声被杀问题：电池保活设置全解析',
    description: '详解小米 MIUI/HyperOS、华为鸿蒙、vivo OriginOS、OPPO ColorOS 等国产安卓系统如何设置后台白名单，防止梯子意外断开。',
    platform: 'android',
    tags: ['后台保活', '安卓排错', '断线重连', '电池优化'],
    recommendedAirports: ['breezenet', 'muguang', 'yinxingren'],
    steps: [
      '打开手机“设置” -> “应用管理”，找到你所使用的代理客户端（如 Clash Meta 或 v2rayNG）',
      '在“自启动管理”中勾选“允许应用自启动”以及“允许关联启动”',
      '进入“电池 / 省电策略”，将后台耗电管理从“智能推荐”修改为“无限制”',
      '打开手机多任务多窗口后台卡片界面，长按客户端卡片点击“加锁 (Lock)”图标',
      '部分机型在“特殊应用权限”中确保“不经过电池优化”已勾选该软件'
    ],
    faqs: [
      { q: '晚上睡觉起来发现通知栏钥匙图标没了是怎么回事？', a: '系统夜间极度省电机制强制清理了常驻服务，完成上述五步锁定后即可杜绝被杀。' },
      { q: '保活之后手机耗电会显著增加吗？', a: '不会。现代客户端在无网络请求时处于极低功耗事件监听模式，全天耗电量通常不足 2%-3%。' }
    ]
  },
  {
    slug: 'ios-surge',
    title: 'iOS 顶级代理工具 Surge 5 新手配置教程：托管配置、模块 (Modules) 与面板使用',
    description: '苹果生态顶级网络调试与科学上网工具 Surge 5 保姆级入门手册：从买断激活、托管配置安装到策略组自由切线。',
    platform: 'ios',
    tags: ['Surge5', 'iOS教程', '高端网络工具', '苹果翻墙'],
    recommendedAirports: ['yinxingren', 'lingmao', 'breezenet'],
    steps: [
      '在美区 App Store 搜索安装 Surge 5 并完成激活注册',
      '在机场控制台找到“一键导入 Surge 订阅”或复制通用托管订阅链接',
      '在 Surge 首页点击当前配置文件 -> “Download Profile from URL”，粘贴托管链接并下载',
      '点击 Start 启动 VPN，系统弹出权限提示，输入锁屏密码允许安装 VPN Profile',
      '在 Policy 策略组面板中选择“Auto (自动测速)”或手动锁定优质 IEPL 香港节点'
    ],
    faqs: [
      { q: 'Surge 为什么比其他软件贵那么多？', a: 'Surge 拥有全行业最顶级的网络协议栈性能、极其强大的抓包分析能力与无可挑剔的系统契合度。' },
      { q: 'Surge 配置文件支持导入 Clash 规则吗？', a: '两者语法结构不同，但目前主流机场后台均原生提供专属的 Surge 托管配置导出链接。' }
    ]
  },
  {
    slug: 'ios-stash',
    title: 'Stash iOS 客户端从入门到精通教程：完美继承 Clash 配置与快捷按键配置',
    description: '被誉为 iOS 端最好用的“Clash 孪生兄弟”——Stash 客户端图文指南。无缝兼容 Clash.Meta 核心配置规则与桌面小组件。',
    platform: 'ios',
    tags: ['Stash', 'iOS教程', 'Clash替代品', '小组件'],
    recommendedAirports: ['breezenet', 'muguang', 'feimaoyun'],
    steps: [
      '在美区 Apple Store 购买并下载 Stash 客户端',
      '打开机场官网复制 Clash 格式订阅链接',
      '进入 Stash 点击 Config -> Download from URL，粘贴订阅链接并完成解析保存',
      '点击主界面 Connect 开关，同意系统加载网络扩展配置',
      '在仪表盘 Proxy 面板中直观查看各节点延迟，并通过长按添加 iOS 桌面快捷开关小组件'
    ],
    faqs: [
      { q: 'Stash 支持按需连接 (On Demand) 吗？', a: '支持。可以在设置中开启当连接蜂窝或特定 Wi-Fi 时自动唤醒或关闭代理。' },
      { q: 'Stash 节点列表更新失败怎么处理？', a: '进入 Config 界面左滑配置文件，点击 Update 更新；如超时可开启备用节点后重试。' }
    ]
  },
  {
    slug: 'ios-loon',
    title: 'Loon 客户端入门配置教程：一键订阅导入、插件商店与分流规则策略',
    description: 'UI 优雅、功能强大且性价比超高的 iOS 代理工具 Loon 详细教学：涵盖订阅管理、插件库使用与节点连通性检测。',
    platform: 'ios',
    tags: ['Loon', 'iOS教程', '插件配置', '节点切换'],
    recommendedAirports: ['breezenet', 'lingmao', 'flashleap'],
    steps: [
      '在美区 App Store 搜索购买安装 Loon 客户端',
      '进入配置页面点击“订阅”，选择“添加节点订阅”，粘贴机场订阅 URL',
      '设置订阅更新周期为每日自动更新，点击保存拉取最新节点',
      '在“策略”选项卡中可以直观查阅自动故障转移组与手工自选组',
      '点击底部悬浮启动按钮，验证 YouTube 与海外网站顺畅加载'
    ],
    faqs: [
      { q: 'Loon 的插件功能主要是做什么用的？', a: '支持去网页广告、解除网页限制以及流媒体界面净化等扩展脚本。' },
      { q: 'Loon 支持 UDP 转发吗？', a: '支持，在节点设置中默认开启 UDP 转发，支持 WhatsApp 与海外游戏语音畅连。' }
    ]
  },
  {
    slug: 'ios-quantumult-x',
    title: 'Quantumult X (圈X) 2026最新使用教程：重写规则、Task 脚本与节点健康度测速',
    description: '详细拆解 iOS 经典老牌神器 Quantumult X (圈X) 的玩法：从引入 Server 分组到配置 Rewrite 重写分流规则全流程。',
    platform: 'ios',
    tags: ['Quantumult X', '圈X', 'iOS教程', '进阶分流'],
    recommendedAirports: ['yinxingren', 'muguang', 'breezenet'],
    steps: [
      '打开 Quantumult X 点击右下角风车图标进入设置',
      '在“节点”模块下点击“引用 (资源解析器)”，添加机场专属订阅链接',
      '在“分流”模块下添加 GeoIP 与经典远程分流规则集',
      '长按右下角小风车按钮可以快速触发全部节点的批量可用性 Ping 测速',
      '返回主界面右上角开启主开关，长按节点可在不同出口间瞬间热切换'
    ],
    faqs: [
      { q: '圈X 导入节点显示一堆代码没有名字？', a: '请在引用订阅链接时确认勾选了“资源解析器 (Resource Parser)”。' },
      { q: '圈X 适合完全不懂技术的新手吗？', a: '门槛相对小火箭略高，但其策略定制极其灵活，掌握后体验无可替代。' }
    ]
  },
  {
    slug: 'ios-apple-id',
    title: '2026新手注册美区 Apple ID 购买 Shadowrocket 小火箭与客户端保姆级教程',
    description: '无需国外信用卡、无需肉身出海！最新 2026 免绑定支付方式注册全新美区 Apple ID 购买正版 Shadowrocket 小火箭教程。',
    platform: 'ios',
    tags: ['美区AppleID', '小火箭购买', 'iOS新手教程', '充值教程'],
    recommendedAirports: ['breezenet', 'yinxingren', 'feimaoyun'],
    steps: [
      '在电脑或手机浏览器打开苹果官方 Apple ID 注册官网，地区选择“美国”',
      '填写真实邮箱与能接收短信的大陆手机号完成基础账号注册与双重验证',
      '在 iPhone App Store 退出原国区账号，登录新注册的美区 Apple ID',
      '在弹出的“检查账户”页面选择付款方式为“None（无）”，地址使用美国免税州真实生成地址填入',
      '在正规电商或苹果官网购买 5 美元或 10 美元 App Store 礼品卡充值，即可搜索购买正版 Shadowrocket'
    ],
    faqs: [
      { q: '千​​万不要在手机的“系统设置”登录美区 ID？', a: '是的！绝对不要在“设置”最顶端登录 iCloud，只需在“App Store”商店内登录即可，确保手机安全。' },
      { q: '美区免税州地址有哪些？', a: '推荐选择俄勒冈州 (Oregon)、特拉华州 (Delaware) 或阿拉斯加州，购买软件无额外消费税。' }
    ]
  },
  {
    slug: 'macos-singbox',
    title: 'Sing-box for macOS 独立客户端使用指南：低资源占用与系统级透明代理',
    description: 'Mac 用户新宠：原生 Apple Silicon 芯片深度优化的 Sing-box 客户端安装与使用教程，极致轻盈秒杀传统全家桶。',
    platform: 'macos',
    tags: ['macOS教程', 'Sing-box Mac', 'M芯片优化', '苹果电脑翻墙'],
    recommendedAirports: ['breezenet', 'yinxingren', 'wavenet'],
    steps: [
      '前往 GitHub 或官方发布页下载适用于 Apple Silicon (arm64) 的 dmg 安装包并拖入应用程序',
      '初次打开客户端时授予网络扩展 (Network Extension) 系统安全权限',
      '在 Profiles 界面点击“+”，填入机场提供的 Sing-box 订阅链接并拉取',
      '在设置中启用 System Proxy 与 TUN 虚拟网络接口',
      '菜单栏常驻状态图标显示实时上传/下载速率与当前活动的低延迟专线'
    ],
    faqs: [
      { q: 'macOS 提示“无法打开开发者未知应用”怎么办？', a: '打开“系统设置” -> “隐私与安全性”，在下方找到被阻止的应用点击“仍要打开”即可。' },
      { q: '用 Sing-box 观看 YouTube 4K 能达到什么速度？', a: '配合微风网络或隐形人的优质 IEPL 专线，在 M3/M4 Mac 上 4K 拖拽秒开，缓冲常驻 150Mbps+。' }
    ]
  },
  {
    slug: 'macos-terminal-proxy',
    title: 'Mac 终端代理配置全攻略：让 Git、Homebrew、npm、pip 命令行秒速拉取',
    description: '即便开启了图形客户端，Mac 终端依然经常网络超时？三行命令配置终端环境变量代理，程序员开发效率翻倍。',
    platform: 'macos',
    tags: ['Mac终端', '命令行代理', 'Git加速', '开发者教程'],
    recommendedAirports: ['yinxingren', 'breezenet', 'flashleap'],
    steps: [
      '确认本地桌面代理软件（如 Clash Verge）正在运行，默认监听端口通常为 7890',
      '打开 Mac“终端 (Terminal)”应用，执行命令：export http_proxy=http://127.0.0.1:7890 https_proxy=http://127.0.0.1:7890',
      '运行 curl -i https://google.com 验证终端是否输出 HTTP/2 200 成功响应',
      '若需长期生效，打开 ~/.zshrc 文件将上述 export 命令写入文件末尾并执行 source ~/.zshrc',
      '针对 Git 单独配置加速：git config --global http.proxy http://127.0.0.1:7890'
    ],
    faqs: [
      { q: '如何在不需要代理时临时关闭终端代理？', a: '执行 unset http_proxy https_proxy 即可一键恢复直连环境。' },
      { q: '拉取 GitHub 仓库依然频繁 Connection Reset？', a: '请在代理软件中开启 TUN 模式或检查是否勾选了针对 github.com 域名的规则代理策略。' }
    ]
  },
  {
    slug: 'macos-surge',
    title: 'Surge Mac 作为网关服务器 (Gateway) 实现局域网设备代理设置指南',
    description: '将你的 Mac 电脑打造成全屋高性能透明代理网关：通过 Surge Mac 的 Enhanced Mode 与路由器 DHCP 联动实战。',
    platform: 'macos',
    tags: ['Surge Mac', '局域网网关', '旁路由', '网络进阶'],
    recommendedAirports: ['yinxingren', 'wavenet', 'lingmao'],
    steps: [
      '在 Mac 上安装 Surge 并开启“增强模式 (Enhanced Mode)”与“允许局域网连接 (Allow LAN)”',
      '在 Surge 网络设置中开启“作为网关服务器运行 (Serve as Gateway)”',
      '在其他设备（如电视盒子、手机或备用机）的 Wi-Fi 高级设置中，将路由器 (Gateway) 修改为 Mac 的局域网静态 IP',
      '将 DNS 服务器同步修改为 Mac 的局域网 IP',
      '局域网其他所有设备即可无需安装任何客户端自动享受原生专线分流'
    ],
    faqs: [
      { q: '这种方案相比软路由有什么优缺点？', a: '优点在于 Mac CPU 算力超强，解密吞吐极限高；缺点在于 Mac 必须保持开机不能完全休眠。' },
      { q: '如何防止 Mac 休眠导致全屋断网？', a: '在 Mac 系统设置的“节能”选项中勾选“网络访问时唤醒”或使用 Amphetamine 等防休眠插件。' }
    ]
  },
  {
    slug: 'router-openclash',
    title: 'OpenWrt OpenClash 插件深度调优教程：Fake-IP 与 Redir-Host 模式避坑指南',
    description: '软路由核心插件 OpenClash 2026 高效避坑指南：内核选型、模式对比、DNS 防污染配置与防失联容灾策略。',
    platform: 'router',
    tags: ['OpenClash', '软路由教程', 'OpenWrt', '全屋透明代理'],
    recommendedAirports: ['breezenet', 'yinxingren', 'flashleap'],
    steps: [
      '登录 OpenWrt 路由器后台，进入“服务” -> OpenClash 页面',
      '在“版本更新”中确认已下载安装好适配 CPU 架构的 Clash Meta 内核',
      '进入“配置文件订阅”，填入机场专属订阅链接并更新成功',
      '在“模式设置”中运行模式推荐选择“Fake-IP (TUN 混合模式)”，开启硬件加速',
      '启动 OpenClash 服务，通过 Yacd 控制面板进行可视化节点健康检查与延迟筛选'
    ],
    faqs: [
      { q: '为什么 Fake-IP 模式下部分国内智能家居设备连接异常？', a: '在 OpenClash 高级设置中，将米家、华为智慧生活等内网域名加入 Fake-IP 黑名单（直连解析）即可。' },
      { q: '软路由内存不足引起 Clash 进程频繁崩溃怎么办？', a: '关闭无用的规则集订阅，开启“绕过中国大陆 IP”减少内存占用，或在后台挂载外部 Swap 交换分区。' }
    ]
  },
  {
    slug: 'router-clash-docker',
    title: '群晖 NAS / Linux Docker 容器化部署 Clash Meta 作为旁路由网关教程',
    description: '无需额外购买软路由硬件，利用现有的群晖 NAS 或居家 Linux 主机运行 Docker 版 Clash Meta，实现局域网静默分流。',
    platform: 'router',
    tags: ['Docker', '群晖NAS', '旁路由', '透明代理'],
    recommendedAirports: ['breezenet', 'yinxingren', 'muguang'],
    steps: [
      '在群晖 Docker (Container Manager) 中创建 macvlan 虚拟网络打通局域网网段',
      '拉取 mihomo (Clash Meta) 官方轻量镜像并挂载本地 config.yaml 配置文件目录',
      '配置 Docker 启动参数赋予 NET_ADMIN 容器网络管理特权',
      '在容器内配置 TUN 接口并启动 Clash 内核',
      '在需要翻墙的电脑、电视上手动将网关和 DNS 指向该 Docker 容器被分配的局域网 IP'
    ],
    faqs: [
      { q: '群晖系统升级重启后容器会自动拉起吗？', a: '在 Docker 运行配置中将重启策略设置为 restart: always 即可保证开机自启。' },
      { q: 'NAS 运行代理会不会拖累原本的存储读取性能？', a: '不会。Clash Meta 资源开销极小，日常仅占用几十兆内存与 1% 以内的 CPU 占用。' }
    ]
  },
  {
    slug: 'router-adguard-home',
    title: '软路由去广告与防止 DNS 污染泄漏：AdGuard Home 协同代理工具配置实战',
    description: 'AdGuard Home + 代理插件黄金搭档搭建指南：上游 DNS 分流、重定向处理、广告拦截与纯净 DNS 权威解析。',
    platform: 'router',
    tags: ['AdGuardHome', 'DNS防污染', '去广告', '软路由进阶'],
    recommendedAirports: ['breezenet', 'yinxingren', 'lingmao'],
    steps: [
      '在软路由系统中部署 AdGuard Home 并将其默认监听端口配置为 5335',
      '将 AdGuard Home 上游服务器分为国内 DNS（119.29.29.29, 223.5.5.5）与国外加密 DNS',
      '在 Clash 或 PassWall 的 DNS 设置中，将“直连 DNS 解析器”指向 AdGuard Home 的 5335 端口',
      '开启 ECS (EDNS Client Subnet) 选项保证国内 CDN 精准就近分配',
      '在 AdGuard 仪表盘中实时观察拦截日志，确认海外域名的查询均由代理通道安全加密返回'
    ],
    faqs: [
      { q: '双重 DNS 解析会导致网页打开变慢吗？', a: 'AdGuard Home 拥有高效的内存 DNS 缓存机制，命中缓存的请求响应在 1ms 以内，实际体验反而是网页秒开。' },
      { q: '广告拦截规则推荐哪些列表？', a: '推荐使用国内乘风广告过滤规则与 Anti-AD，规则精简不杀伤正常业务。' }
    ]
  },
  {
    slug: 'tv-apple-tv',
    title: 'Apple TV tvOS 17 独立代理客户端（Sing-box / Surge）大屏 4K HDR 观影配置指南',
    description: '告别繁琐的软路由设置，教你利用 tvOS 17 原生 VPN 功能在 Apple TV 上直接运行代理工具，畅享 Netflix 4K 与 YouTube 巨幕体验。',
    platform: 'tv',
    tags: ['AppleTV', '大屏观影', 'tvOS17', 'Netflix4K'],
    recommendedAirports: ['breezenet', 'wavenet', 'lingmao'],
    steps: [
      '将 Apple TV 系统升级至 tvOS 17 或更高版本',
      '在美区 App Store 中搜索并下载支持 tvOS 的客户端（如 Sing-box 或 Surge）',
      '在 iPhone 上打开相应 App，通过 iCloud 账号同步或隔空投送配置订阅给 Apple TV',
      '在 Apple TV 上点击开启 VPN 开关，选择亚太原生解锁专线（如微风网络或浪网的香港/日本专线）',
      '打开 Netflix、Disney+ 或 Infuse 播放器，验证 Dolby Vision 与 4K 极速加载'
    ],
    faqs: [
      { q: 'Apple TV 原生运行代理相比旁路由有什么优势？', a: '即开即用、无需改动家庭主路由设置，且网络抖动时不会影响全家其他不翻墙的亲人。' },
      { q: '看 4K 高码率视频建议多大带宽？', a: '建议选择起步带宽 500Mbps 以上的纯专线机场，保证视频拖拉进度条瞬间响应。' }
    ]
  },
  {
    slug: 'tv-android-tv',
    title: 'Google TV / 索尼电视 / 小米盒子安装代理客户端与大屏 Netflix/YouTube 教程',
    description: '手把手教你在各类安卓电视机顶盒上通过 U 盘安装适配电视遥控器的翻墙客户端，解锁大屏 4K 超高清视听盛宴。',
    platform: 'tv',
    tags: ['AndroidTV', '电视盒子', '索尼电视', '大屏翻墙'],
    recommendedAirports: ['breezenet', 'feimaoyun', 'wavenet'],
    steps: [
      '下载适配电视遥控器交互的 Clash for Android (TV UI) 或 v2rayNG TV 版 APK 至 U 盘',
      '将 U 盘插入电视或投影仪，在文件管理器中点击 APK 完成安装（需在设置中允许未知来源安装）',
      '使用手机扫描电视屏幕上的二维码或局域网剪贴板将订阅链接传给电视',
      '更新节点后，使用遥控器方向键选择“自动测速”或切换至新加坡/日本 4K 解锁节点',
      '启动系统 VPN 连接，打开电视内置 YouTube 畅看 4K 60fps 顶级画质'
    ],
    faqs: [
      { q: '为什么部分电视打开客户端后遥控器无法移动光标？', a: '请确保下载的是 TV 专版 APK；普通手机触屏版需在手机端安装远程投屏触控辅助软件。' },
      { q: '小米盒子提示“禁止安装非官方应用”怎么解决？', a: '进入安全设置开启开发者模式与“未知来源应用安装”即可绕过限制。' }
    ]
  },
  {
    slug: 'linux-server-proxy',
    title: 'Linux (Ubuntu/Debian) 无头服务器命令行代理环境配置与系统全局 Proxy 导出',
    description: '在云服务器或 Linux 开发环境中优雅配置代理通道：让 apt update、docker pull、wget 以及 Python pip 告别网络阻断。',
    platform: 'linux',
    tags: ['Linux教程', 'Ubuntu', '命令行代理', '服务器翻墙'],
    recommendedAirports: ['yinxingren', 'breezenet', 'flashleap'],
    steps: [
      '在 Linux 上下载解压 sing-box 或 clash-meta 的 linux-amd64 单二进制可执行文件',
      '将订阅生成的 config.json/config.yaml 文件放置在 /etc/clash/ 目录中',
      '编写 systemd 服务文件将代理设为系统守护进程：systemctl enable --now clash',
      '在用户 ~/.bashrc 中加入代理函数：alias setproxy="export all_proxy=socks5://127.0.0.1:7890"',
      '执行 setproxy 后通过 curl ipinfo.io 验证返回的海外 IP'
    ],
    faqs: [
      { q: '如何给 apt 包管理器单独配置代理？', a: '在 /etc/apt/apt.conf.d/proxy.conf 中写入 Acquire::http::Proxy "http://127.0.0.1:7890"; 即可。' },
      { q: '如何让 Docker 拉取海外镜像走代理？', a: '在 /etc/systemd/system/docker.service.d/http-proxy.conf 中配置 HTTP_PROXY 环境变量并重启 Docker 服务。' }
    ]
  },
  {
    slug: 'general-speedtest',
    title: '机场节点测速与连通性诊断指南：Stair Speedtest 工具与晚高峰延迟实测方法',
    description: '如何科学客观测试一家机场的真实可用性？手把手教你使用开源 Stair Speedtest 测速工具，绘制晚高峰速率与延迟图谱。',
    platform: 'general',
    tags: ['机场测速', 'StairSpeedtest', '晚高峰实测', '网络评测'],
    recommendedAirports: ['breezenet', 'muguang', 'feimaoyun'],
    steps: [
      '下载开源免费的 Stair Speedtest 测速工具包（支持 Windows 与 macOS）',
      '将需要评测的机场订阅链接填入测试输入框，选择测试项（Ping 延迟 + 带宽测速 + 流媒体解锁）',
      '建议分别在下午 14:00（闲时）与晚上 21:30（晚高峰）各执行一次完整测试',
      '观察测试生成的色彩图谱：绿条代表千兆满速，红条代表严重丢包断流',
      '重点关注常用香港、日本、美国专线在晚高峰时段的抖动均值（Jitter）'
    ],
    faqs: [
      { q: '单次全节点测速大概会消耗多少流量？', a: '一次完整的全节点下行测速通常消耗 2GB-5GB 流量，请在流量充裕时测试，避免耗尽月付配额。' },
      { q: '为什么测速很高但看视频依然经常转圈？', a: '单线程并发与多线程测速存在差异，高码率视频更看重单线程持续稳定性和无丢包率。' }
    ]
  }
];

newGuides.forEach((g) => {
  const filePath = path.join(GUIDES_DIR, `${g.slug}.md`);
  const content = `---
title: "${g.title}"
metaTitle: "${g.title} - VPNTOP"
description: "${g.description}"
publishDate: "2026-02-18"
updateDate: "2026-03-29"
platform: "${g.platform}"
author: "VPNTOP 编辑部"
tags: ${JSON.stringify(g.tags)}
recommendedAirports: ${JSON.stringify(g.recommendedAirports)}
featured: false
---

## 教程概述与立即可用答案

在日常科学上网和翻墙配置过程中，**${g.title}** 是许多用户在提高网络连通率、跨平台协同以及解锁海外生产力工具时最常面临的关键环节。本篇实战指南由 VPNTOP 实验室工程师团队结合 2026 年最新网络环境撰写，旨在提供简单、清晰、可直接照做且零死角的图文配置步骤。

按照本教程指引，通常仅需 **3 至 5 分钟** 即可顺利完成全套配置，无需复杂代码功底。

---

## 一、前期环境准备与工具清单

在开始配置前，请确保具备以下基础设施准备：

1. **稳定的网络代理节点支持**：建议优先选择经过本站核验的真实内网专线服务商（如 [微风网络 Breezenet](/review/breezenet/)、[暮光网络](/review/muguang/) 或 [隐形人](/review/yinxingren/)），避免使用已被 GFW 大面积阻断的廉价小作坊。
2. **最新客户端软件包**：建议直接通过 GitHub 官方 Releases 仓库或正规应用商店获取纯净安装包，切勿下载第三方破解版或二次打包的高危木马版本。
3. **已激活的通用订阅链接**：确保机场控制台处于正常服务期内，剩余可用流量充裕。

---

## 二、图文保姆级操作步骤详解

${g.steps.map((step, idx) => `### 第 ${idx + 1} 步：${step.split('（')[0]}

${step}。在执行此步骤时，请留意系统是否弹出安全授权请求。对于虚拟网卡模式（TUN），必须赋予对应的管理员网络配置特权才能正常启动。
`).join('\n')}

---

## 三、网络参数与选型推荐配置对照

| 考量维度 | 推荐配置选项 | 避坑禁忌与错误选项 |
| :--- | :--- | :--- |
| **路由运行模式** | **Rule (规则模式)** / 绕过大陆 | 全局模式 (Global) 容易导致国内应用严重卡顿 |
| **DNS 模式** | **Fake-IP** 或 127.0.0.1 纯净解析 | 系统默认明文 DNS 容易发生 DNS 劫持与污染 |
| **核心协议** | **VLESS** / **Shadowsocks-2022** | 传统明文或过时加密协议易遭特征识别阻断 |
| **首选节点** | **香港/日本 IEPL 专线** | 避开晚高峰公网出口拥挤的廉价直连节点 |

---

## 四、常见问题解答与故障排错 (FAQ)

${g.faqs.map(faq => `### Q: ${faq.q}

**A**: ${faq.a}
`).join('\n')}

---

## 五、延伸阅读与相关资源

- [2026最新优质机场综合排行榜与专线评测](/ranking/overall/)
- [高性价比机场推荐专题（学生党与大流量优选）](/ranking/value/)
- [主流机场横向对比工具（自选对比价格与线路）](/compare/)
- [返回教程中心查看更多客户端配置指南](/guides/)
`;

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`✓ Generated guide: ${g.slug}.md`);
});

console.log(`\nSuccessfully created ${newGuides.length} new guides! Total guides: 30.`);
