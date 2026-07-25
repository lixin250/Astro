/**
 * 简历内容 — 改这里即可更新页面与导出 PDF。
 * 部署后访问：https://resume.lixin.dev
 *
 * 超链接两种写法：
 * 1. keywordLinks：关键词 → 笔记/文档 URL，正文出现即自动可点
 * 2. 内联 Markdown：[显示名](https://你的笔记地址)
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

  experience: [
    {
      company: '深圳市玄鸟纪元网络科技有限公司',
      role: 'U3D',
      period: '2024.11 — 至今',
      overview: '',
      highlights: [
        'et 框架下，功能模块的全栈开发。',
        '美术资源工具补充，与工程间美术资源规划管理。',
        '打包出包。',
        '项目进入维护与版号周期，精力投入新视频平台弹幕游戏开发。',
        '弹幕游戏负责从 0-1 流程所需内容：部分玩法、多数业务逻辑、不同平台 SDK 接入、渠道出包、版本管理。',
      ],
      achievements: [],
    },
    {
      company: '深圳顺源网络科技有限公司',
      role: 'U3D',
      period: '2019.03 — 2024.11',
      overview:
        'Lua 写双端业务逻辑，熟练版本控制工具。当前负责 2D 塔防类 + 卡牌角色核心战斗的玩法和角色技能迭代，兼顾客户端工作进度管理与分配，面试带实习生。',
      highlights: [],
      achievements: [
        '2019：外围功能模块，主要 Lua 业务逻辑。',
        '2020：增加 SDK 接入、自动化脚本优化热更流程、简单 shader 处理、Unity 扩展支持、策划工具等实际操作。',
        '2021：参与 2D 重度 Lua 核心战斗实现。',
        '2021 下半年起：负责核心战斗玩法更迭、角色迭代、PVP 维护。',
        '兼任项目开发程序任务拆解与进度管理、版本管理、资源管理；有数位客户端（实习 / 初级）指导经验。',
        '2023：项目上线，进入总体维护迭代。',
        '2024：C# 项目推进战斗相关开发，同时迭代老项目；年底公司解散。',
      ],
    },
  ],
  education: [
    {
      school: '九江学院',
      degree: '本科 - 数字媒体技术',
      period: '2015.09 — 2019.06',
    },
  ],
} as const;

export type Resume = typeof resume;
