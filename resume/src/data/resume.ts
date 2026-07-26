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
    '热更 / 出包 / 编辑器',
    '渠道 SDK',
    '0到1项目经验 / 多平台经验',
  ],

  experience: [
    {
      company: '深圳市玄鸟纪元网络科技有限公司',
      role: 'U3D',
      period: '2024.11 — 至今',
      overview: '',
      highlights: [] as string[],
      achievements: [] as string[],
      projects: [
        {
          name: '我在武侠世界朝九晚五',
          period: '2024.11 — 2025.10',
          overview: 'ET 框架功能开发与工具链；负责打包出包与版本节奏，直至游戏进入审核 / 调包与版号申请阶段。',
          highlights: [
            'ET 框架下功能模块全栈开发；补充美术资源工具，资源管理。',
            '负责打包出包与版本节奏，配合审核与调包流程。',
            '管线迁移URP,优化游戏城建这块资源',
          ],
          achievements: [] as string[],
          diagrams: [
            {
              title: '我在武侠世界朝九晚五 · 产品预约页',
              url: 'https://www.taptap.cn/app/785913?os=android',
            },
          ] as Array<{ title: string; url?: string; note?: string }>,
        },
        {
          name: '视频平台 · 弹幕游戏',
          period: '2025.10 — 至今',
          overview:
            '朝九晚五进入审核 / 调包阶段后转入；负责弹幕业务从 0-1 落地与多渠道适配。',
          highlights: [
            '负责多数业务逻辑与部分玩法支持；对接多视频平台 SDK（抖音，快手平台规则与能力）。',
            '线上问题解决，版本功能迭代',
          ],
          achievements: [] as string[],
          diagrams: [] as Array<{ title: string; url?: string; note?: string }>,
        },
        {
          name: '微信小游戏',
          period: '2026.3 — 至今',
          overview: '与弹幕业务同期推进；工程侧区分 Unity 6 与国内团结引擎路径。',
          highlights: [
            '区分 Unity 6 与国内团结引擎（构建目标、插件生态、发布与合规路径不同）。',
            '推进微信小游戏测试版，暂未对外开放渠道。',
          ],
          achievements: [] as string[],
          diagrams: [] as Array<{ title: string; url?: string; note?: string }>,
        },
      ],
    },
    {
      company: '深圳顺源网络科技有限公司',
      role: 'U3D',
      period: '2019.03 — 2024.11',
      overview:
        '从外围业务成长为核心战斗主责，覆盖双端逻辑、热更出包、版本节奏与带教。',
      highlights: [] as string[],
      achievements: [] as string[],
      projects: [
        {
          name: 'MS · 幻境旅者',
          overview:
            'Lua 双端业务与核心战斗；主导玩法 / 技能 / PVP 迭代，兼顾客户端任务拆解、版本与资源管理，面试并带教实习与初级同学。',
          highlights: [
            '负责 2D 重度核心战斗与角色技能体系，持续交付玩法更迭、表现联调与版本合入。',
            '主导 PVP 维护与问题闭环，保障对战稳定性与发版节奏。',
            '落地渠道 SDK、热更流程脚本化，以及轻量 Shader / Unity 扩展 / 策划工具，提升联调与出包效率。',
            '兼任客户端进度与任务拆解，指导多名实习 / 初级程序，统一代码与资源规范。',
          ],
          achievements: [
            '2019–2020：外围模块与 Lua 业务起步，逐步覆盖 SDK、热更与工具链。',
            '2021 起：进入核心战斗实现；下半年起独立负责玩法、角色与 PVP。',
            '2023：项目多渠道上线，转入线上维护与版本迭代。',
            '2024：并行推进 C# 项目战斗模块，并持续迭代线上版本。',
          ],
          /** 外链仅作公开检索，不强调单一渠道 */
          diagrams: [
            {
              title: 'MGR 架构导图',
              url: 'https://www.processon.com/view/link/5fd6debf63768906e6db2e36',
            },
            {
              title: 'MS 模块导图',
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
    tags: ['Cocos Creator', 'Python', 'AI 辅助开发', '直播电商工具', '政府类信息化工具'],
    notes: [
      '早期接触 Cocos Creator，参与《像素迷城》上线项目。',
      '日常使用 Cursor、ChatGPT 等 AI 工具辅助编码、排查与文档整理，提升交付效率。',
      '具备 Python 脚本能力，可用于数据处理、自动化与小工具开发。',
      '接触过直播电商相关业务工具，以及政府类信息化 / 办公向工具的对接与使用。',
    ],
    links: [
      {
        title: 'GitHub · lixin250',
        note: '个人仓库主页',
        url: 'https://github.com/lixin250',
      },
      {
        title: '像素迷城 · 产品页',
        note: '早期 Cocos Creator 上线项目（顺源）',
        url: 'https://www.taptap.cn/app/178517/topic',
      },
      // { title: 'GitHub · 仓库名', note: '一句话说明', url: 'https://github.com/lixin250/仓库' },
    ] as Array<{ title: string; url: string; note?: string }>,
  },

  education: [
    {
      school: '九江学院（公办普通本科）',
      degree: '本科 · 数字媒体技术 · 资格证书：NCRE-2、CET-4',
      period: '2015.09 — 2019.06',
    },
  ],
} as const;

export type Resume = typeof resume;
