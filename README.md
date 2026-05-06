# Unity Dev Tools

基于 Astro + Cloudflare Pages 构建的 Unity 开发者工具集。

## 工具列表

- 🕐 时间戳转换 - Unix 时间戳与 DateTime 互转
- 📈 Tween 可视化 - 缓动函数图表展示
- 🎨 颜色转换 - Hex / RGB / HSV / Unity Color 互转
- 📄 JSON 格式化 - JSON 压缩/格式化

## 本地开发

```bash
npm install
npm run dev
```

## 构建部署

```bash
npm run build
```

## Cloudflare Pages 部署

### 方式一：Wrangler CLI

```bash
npm install -D wrangler
npx wrangler pages deploy dist
```

### 方式二：GitHub Actions 自动部署

1. 在 Cloudflare Dashboard 创建 Pages 项目
2. 连接到 GitHub 仓库
3. 设置构建设置：
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. 配置自定义域名 `tools.lixin.dev`

### 手动部署步骤

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 进入 **Workers & Pages** → **Create application** → **Pages** → **Create a project**
3. 选择 **Direct upload** 或 **GitHub**
4. 上传 `dist` 文件夹（或配置 GitHub 集成）
5. 在 **Custom domains** 中添加 `tools.lixin.dev`

## 项目结构

```
/
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro    # 基础布局
│   └── pages/
│       ├── index.astro          # 首页
│       ├── timestamp.astro      # 时间戳工具
│       ├── tween.astro          # Tween 可视化
│       ├── color.astro          # 颜色转换
│       └── json.astro           # JSON 格式化
├── astro.config.mjs             # Astro 配置
├── wrangler.toml                # Wrangler 配置
└── package.json
```
