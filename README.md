# lixin.dev

一个仓库，两类项目：

| 目录 | 用途 | 域名 | 部署方式 |
|------|------|------|----------|
| `tools/` | Astro 开发者工具集 | `tools.lixin.dev` | GitHub → Cloudflare Pages |
| `videos/` | 视频库（R2 + Worker） | `videos.lixin.dev` | GitHub → Cloudflare Worker |

## 项目结构

```
/
├── tools/                       # 工具类（Astro）
│   ├── src/
│   ├── astro.config.mjs
│   └── package.json
│
├── videos/
│   ├── files/                   # 本地视频（gitignore，不上传 Git）
│   ├── worker/                  # Worker 代码（Git 部署到 CF）
│   ├── scripts/upload-videos.mjs
│   ├── upload-videos.bat        # 上传 mp4 到 R2
│   ├── login-cloudflare.bat     # 首次登录（上传前）
│   └── package.json
│
└── package.json
```

---

## tools/ — 开发者工具

```bash
npm install
npm run tools:dev
npm run tools:build
```

### Cloudflare Pages 设置

- **Build command**: `npm run tools:build:cf`
- **Build output directory**: `tools/dist`
- **自定义域名**: `tools.lixin.dev`

---

## videos/ — 视频库

### 部署（Cloudflare Dashboard + GitHub）

Worker 代码在 `videos/worker/`，通过 Cloudflare 连 GitHub 自动部署：

- **生产分支**: `cloudflare`
- **构建命令**: `npm install`（或留空）
- **部署命令**: `npx wrangler deploy --config videos/worker/wrangler.jsonc`
- **自定义域名**: `videos.lixin.dev`

### 上传视频（本地 bat，仅 R2）

视频文件不进 Git，用 bat 手动上传到 R2：

1. 把视频放进 `videos/files/`
2. 首次：双击 `login-cloudflare.bat` 登录
3. 双击 `upload-videos.bat` 上传
