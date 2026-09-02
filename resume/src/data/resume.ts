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

  // 个人说明偏软、与经历重复，页面已不展示。需要时再打开。
  // strengths: [
  //   '做事情绪稳定，沟通配合顺畅，能据工作需要快速变化响应或探索新内容。',
  //   '有带新、拆任务经验，遵守项目规范写代码，注意可读与扩展。',
  //   '已婚生活稳定，关键节点能抗压。但更希望工作能平衡生活。',
  // ],

  /** 核心技能（置前加粗展示） */
  skills: [
    'Unity/CocosCreator',
    'C#/Lua',
    '战斗/SDK/热更/出包/编辑器',
    '0到1项目/多平台/线上迭代维护',
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
          name: '我在武侠世界朝九晚五(2.5D+模拟经营+RPG)',
          period: '2024.11 — 2025.10',
          overview:
            'ET框架(HybridCLR+YooAsset)下参与城建与局外业务；负责打包出包；接手美术资源块工作，相关工具链(Odin)维护迭代。',
          highlights: [
            '负责日常出包与审核调包；主工程(Git)与美术工程(SVN)资源同步，维护美术侧资源工具',
            '围绕城建模块开发，如场景地图2转2.5D，Mesh/预览图 随camera距离切换，可交互建筑单位业务逻辑。',
            '参与管线迁URP调整：如SRPBatcher替代MPB+Texture2DArray场景方案，增补同步Volume后处理体系，小效果',
            '剧情timeline维护：场景下，镜头、声光电、人物、动作、对话 在轨道结合；及负责资源更新导致轨道绑定断裂的自动回绑',
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
          name: '抖音/快手弹幕游戏 + 微信小游戏',
          period: '2025.10 — 至今',
          overview:
            '弹幕从0-1落地并维护2款上线游戏的多渠道版本；线上维护期同步参与微信小游戏。',
          highlights: [
            'Unity6下（弹幕类），搭建YooAsset资源管理+HybridCLR热更+UIBind绑定与逻辑分离+HTTP/WebSocket通信的基础游戏框架。',
            '接入抖音(LiveOpenSDK指令直推)、快手(玩法伴侣IPC + 自研WS)SDK，分渠道打包，熟悉后台从提案到上架全流程。',
            'TuanJie下(微信小游戏），协助公用件与UI模块开发，熟悉小游戏发布流程。',
          ],
          achievements: [] as string[],
          diagrams: [] as Array<{ title: string; url?: string; note?: string }>,
        },
      ],
    },
    {
      company: '深圳顺源网络科技有限公司',
      role: 'U3D & CCC',
      period: '2019.03 — 2024.11',
      overview:
        '从外围业务到核心战斗相关开发，覆盖双端逻辑、热更出包、版本节奏，并参与带教。',
      highlights: [] as string[],
      achievements: [] as string[],
      projects: [
        {
          name: '幻境旅者(2D塔防+角色养成)',
          overview:
            '重度Lua 双端业务与核心战斗相关开发；参与玩法 / 技能 / PVP 迭代，并协助客户端任务拆解、版本与资源管理，面试及带教实习与初级同学。',
          highlights: [
            '负责多版本塔防战斗调整与新角色技能迭代，配合玩法更迭、表现联调与版本合入。',
            '维护竞技场等相关玩法，跟进 PVE / PVP 问题与发版节奏。',
            '数据埋点上报，基于此延伸的作弊预警与封禁、行为日志分析、客诉数据排查。',
            '据项目阶段，进行游戏瓶颈定位，性能优化（Lua&C#、资源检测、UWA工具等）。',
            '2年执行主程，参与制定版本计划，向程序任务拆解分配，跟踪进度，带教实习/初级程序，管理Git分支代码与约束美术SVN提交习惯。',
          ],
          achievements: [
            '2019–2020：外围UI模块，逐步接触 SDK、热更与工具链。',
            '2021 起：逐步接手战斗；后续围绕战斗玩法、角色新增与策划美术协同推进多版本',
            '2023：项目多渠道上线，转入线上多渠道维护 + 版本迭代。',
            '2024：线上维护，预研类背包乱斗(背包合成+竖屏塔防)小游戏，主写战斗模块（C#）。',
          ],
          diagrams: [
            {
              title: '幻境旅者 · 产品页',
              url: 'https://www.taptap.cn/app/715956/topic',
            },
            {
              title: '战斗管理器导图',
              url: 'https://www.processon.com/view/link/5fd6debf63768906e6db2e36',
            },
            {
              title: '开发周期相关笔记',
              url: 'https://www.processon.com/view/link/6405e6fc0e3e7447cd1eeb3e',
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
      'CCC项目：有Cocos Creator项目《像素迷城》（挂机+暗黑类 ， ts/js+pomelo）上线经验。',
      '服务器经验：lua项目的线上维护，积累了规范且较丰富的服务器业务逻辑开发，异常数据处理，问题排查经验。',
      '拥抱AI：积极使用AI工具参与工作提效，cursor+minimax付费用户。有AI参与Unity全流程的demo(Plan-资源-代码-Build-Debug-Apk）',
      '其他工具：claw类产品部署，直播电商、运营、政企职员的生产力工具的产出',
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
    ] as Array<{ title: string; url: string; note?: string }>,
  },

  education: [
    {
      school: '九江学院',
      degree: '本科 · 数字媒体技术 · 绩点 3.5+ · NCRE-2、CET-4',
      period: '2015.09 — 2019.06',
    },
  ],
} as const;

export type Resume = typeof resume;
