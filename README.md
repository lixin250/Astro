# lixin.dev

一个仓库，两类项目：

| 目录 | 用途 | 域名 |
|------|------|------|
| `tools/` | Astro 开发者工具集 | `tools.lixin.dev` |
| `videos/` | 视频库（R2 + Worker） | `videos.lixin.dev` |

## 项目结构

```
/
├── tools/                       # 工具类（Astro）
│   ├── src/
│   │   ├── layouts/
│   │   └── pages/
│   ├── astro.config.mjs
│   ├── wrangler.toml
│   └── package.json
│
├── videos/                      # 视频类（Worker + R2）
│   ├── files/                   # 本地视频放这里
│   ├── worker/                  # Worker 代码
│   ├── scripts/                 # 上传脚本
│   ├── upload-videos.bat        # 双击上传
│   ├── deploy-videos.bat        # 双击部署
│   ├── setup-videos.bat         # 首次创建 R2
│   ├── login-cloudflare.bat     # 登录 Cloudflare
│   └── package.json
│
└── package.json                 # 根目录统一入口
```

---

## tools/ — 开发者工具

- 时间戳转换
- Tween 可视化
- 颜色转换
- JSON 格式化

```bash
npm install
npm run tools:dev      # 本地开发
npm run tools:build    # 构建
```

### Cloudflare Pages 部署

GitHub 连接后，构建设置改为：

- **Build command**: `npm run tools:build`
- **Build output directory**: `tools/dist`
- **自定义域名**: `tools.lixin.dev`

---

## videos/ — 视频库

视频文件放 `videos/files/`，通过 R2 托管，Worker 提供画廊页面。

### 全部用 bat 双击操作（无需命令行）

进入 `videos/` 文件夹：

| bat 文件 | 作用 |
|----------|------|
| **`首次使用.bat`** | 一键走完首次 4 步（推荐） |
| `login-cloudflare.bat` | 登录 Cloudflare |
| `setup-videos.bat` | 创建 R2 bucket |
| `upload-videos.bat` | 上传视频 |
| `deploy-videos.bat` | 部署 Worker |

首次：双击 **`首次使用.bat`** 即可，会自动安装依赖、登录、创建 bucket、上传、部署。

日常：把新视频放进 `videos/files/`，双击 **`upload-videos.bat`**。
