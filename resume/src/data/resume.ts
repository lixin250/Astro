/**
 * 简历内容 — 改这里即可更新页面与导出 PDF。
 * 部署后访问：https://resume.lixin.dev
 *
 * 超链接两种写法：
 * 1. keywordLinks：关键词 → 笔记/文档 URL，正文出现即自动可点
 * 2. 内联 Markdown：[显示名](https://你的笔记地址)
 *
 * ProcessOn 思维导图：写在对应 project.diagrams 里
 * url 用分享链接即可，例如 https://www.processon.com/view/link/xxxxxxxx
 */
export const resume = {
  name: '利欣',
  /** 网页默认展示（示意头像） */
  avatarPreview: '/avatar_256.png',
  /** 导出 PDF 时使用的正式头像 */
  avatarExport: '/avatar.jpg',
  title: 'U3D',
  basics: ['男', '29岁', '籍贯：赣州', '共产党员'],
  phone: '18270272781',
  email: '762749051@qq.com',
  /** QQ 号 */
  qq: '762749051',
  /** 微信号 */
  wechat: '18270272781',
  intent: [
    { label: '工作经验', value: '7年' },
    { label: '求职意向', value: 'U3D' },
    { label: '期望城市', value: '深圳' },
  ],

  /**
   * 关键词 → 在线笔记 / 文档（只填 http/https）。
   * 例：'et 框架': 'https://你的笔记站/et'
   * 也可在任意正文里写：[ET 框架](https://你的笔记站/et)
   */
  keywordLinks: {
    // 'et 框架': 'https://example.com/notes/et',
    // Lua: 'https://example.com/notes/lua',
    // Unity: 'https://example.com/notes/unity',
  } as Record<string, string>,

  strengths: [
    '情绪稳定，态度端正，沟通协作能力好，拥抱变化。',
    '有带新、拆解分配任务经验，主动融入项目风格，保持项目代码扩展性、可读性、统一性。',
    '已婚生活节奏稳定，党员关键时刻抗压。',
  ],

  /** 核心技能（置前加粗展示） */
  skills: [
    'Unity / CocosCreator',
    'C# / Lua',
    '热更/出包/编辑器/SDK',
    '0到1项目经验/多平台经验/线上项目迭代维护',
  ],

  experience: [
    {
      company: '深圳市玄鸟纪元网络科技有限公司',
      role: 'U3D客户端',
      period: '2024.11 — 至今',
      overview: '',
      highlights: [] as string[],
      achievements: [] as string[],
      projects: [
        {
          name: '2.5D 我在武侠世界朝九晚五',
          period: '2024.11 — 2025.10',
          overview: 'ET 框架下参与城建与部分局外业务、打包出包，并协助美术资源工具链。',
          highlights: [
            '参与功能模块开发，补充美术侧资源工具（Odin）与日常资源整理。',
            '负责日常打包出包，配合审核与调包流程。',
            '参与 Built-in 迁 URP；城建侧 Tilemap 资源转 Mesh + Atlas 合并进场景等导出与合批相关调整（详见下方文档）。',
          ],
          achievements: [] as string[],
          diagrams: [
            {
              title: '我在武侠世界朝九晚五 · 产品预约页',
              url: 'https://www.taptap.cn/app/785913?os=android',
            },
            {
              title: '场景方案优化记录',
              url: 'https://github.com/lixin250/Astro/blob/cloudflare/doc/HM/场景方案优化记录.docx',
            },
            {
              title: '主工程 Dll 调整后的美术同步',
              url: 'https://github.com/lixin250/Astro/blob/cloudflare/doc/HM/20251028主工程Dll调整后的美术同步.docx',
            },
          ] as Array<{ title: string; url?: string; note?: string }>,
        },
        {
          name: '2D竞速类弹幕游戏',
          period: '2025.10 — 至今',
          overview: 'ET 项目审核申版阶段，参与弹幕业务从 0 到 1 落地。',
          highlights: [
            '接入 YooAsset 资源管理、HybridCLR 热更；用 tag 驱动 UI 绑定生成，并以 partial 拆开逻辑与生成代码。',
            '负责业务逻辑与部分玩法支持；对接抖音、快手等渠道 SDK，梳理平台规则与接入方式。',
            '业务侧使用 HTTP / WebSocket 通讯。',
            '参与多版本迭代与自动化流水线完善。',
          ],
          achievements: [] as string[],
          diagrams: [] as Array<{ title: string; url?: string; note?: string }>,
        },
        {
          name: '微信小游戏',
          period: '2026.3 — 至今',
          overview: '弹幕业务进入线上维护后，同步参与小游戏开发。',
          highlights: [
            '区分 Unity 6 与国内团结引擎在构建目标、插件与发布合规上的差异。',
            '推进微信小游戏测试版，目前暂未对外开放渠道。',
          ],
          achievements: [] as string[],
          diagrams: [] as Array<{ title: string; url?: string; note?: string }>,
        },
      ],
    },
    {
      company: '深圳顺源网络科技有限公司',
      role: 'U3D全栈 & CocosCreator客户端',
      period: '2019.03 — 2024.11',
      overview:
        '从外围业务做到核心战斗相关开发，覆盖双端逻辑、热更出包、版本节奏，并参与带教。',
      highlights: [] as string[],
      achievements: [] as string[],
      projects: [
        {
          name: '幻境旅者',
          overview:
            'Lua 双端业务与核心战斗相关开发；参与玩法 / 技能 / PVP 迭代，并协助客户端任务拆解、版本与资源管理，面试及带教实习与初级同学。',
          highlights: [
            '负责核心战斗与角色技能相关迭代，配合玩法更迭、表现联调与版本合入。',
            '维护竞技场等相关玩法，跟进 PVE / PVP 问题与发版节奏。',
            '按项目需要进行性能排查（Lua、资源、UWA 等）；编写少量 Shader / Unity 扩展与策划工具。',
            '协助客户端进度与任务拆解，带教实习 / 初级程序，对齐代码与资源习惯。',
          ],
          achievements: [
            '2019–2020：外围 UI 模块，逐步接触 SDK、热更与工具链。',
            '2021 起：进入核心战斗相关实现；下半年起主要负责玩法、角色与 PVP 方向工作。',
            '2023：项目多渠道上线，转入线上维护与版本迭代。',
            '2024：并行参与 C# 项目战斗模块，并继续迭代线上版本。',
          ],
          diagrams: [
            {
              title: '战斗管理器导图',
              url: 'https://www.processon.com/view/link/5fd6debf63768906e6db2e36',
            },
            {
              title: '开发部分笔记',
              url: 'https://www.processon.com/view/link/6405e6fc0e3e7447cd1eeb3e',
            },
            {
              title: '幻境旅者 · 产品页',
              url: 'https://www.taptap.cn/app/715956/topic',
            },
          ] as Array<{ title: string; url?: string; note?: string }>,
        },
      ],
    },
  ],

  /**
   * 其他技能：旁路栈 / 自学试做 / 个人仓库（勿重复核心技能）
   * 继续往 links 里加 GitHub 仓库即可
   */
  otherSkills: {
    tags: ['Cocos Creator', '服务器业务逻辑', 'AI辅助开发'],
    notes: [
      '有Cocos Creator项目《像素迷城》上线经验, 验证市场挂机+暗黑类玩法。',
      'lua项目，ET项目，直播平台弹幕游戏C#，均有服务器业务逻辑迭代需求，有规范流程与接受上上线验证的经验。',
      '积极使用AI工具参与工作提效，保持新工具模型技术尝试。',
      '直播电商、运营、政府类信息化、办公向工具的友情产出，为亲友工作减负与提效',
    ],
    links: [
      {
        title: 'GitHub ',
        url: 'https://github.com/lixin250',
      },
      {
        title: '像素迷城 · 产品页',
        url: 'https://www.taptap.cn/app/178517/topic',
      },
      // { title: 'GitHub · 仓库名', note: '一句话说明', url: 'https://github.com/lixin250/仓库' },
    ] as Array<{ title: string; url: string; note?: string }>,
  },

  education: [
    {
      school: '九江学院',
      degree: '本科 · 数字媒体技术 · 资格证书：NCRE-2、CET-4',
      period: '2015.09 — 2019.06',
    },
  ],
} as const;

export type Resume = typeof resume;
