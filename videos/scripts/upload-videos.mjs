import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const packageDir = path.resolve(__dirname, "..");
const videosDir = path.join(packageDir, "files");
const bucketName = "videos";
const wranglerConfig = path.join(packageDir, "worker", "wrangler.jsonc");

const VIDEO_EXTENSIONS = new Set([
  ".mp4", ".webm", ".mov", ".mkv", ".avi", ".m4v", ".ogv"
]);

function isVideoFile(fileName) {
  const ext = path.extname(fileName).toLowerCase();
  return VIDEO_EXTENSIONS.has(ext);
}

function runWrangler(args) {
  return new Promise((resolve, reject) => {
    const child = spawn(
      process.platform === "win32" ? "npx.cmd" : "npx",
      ["wrangler", ...args],
      { cwd: packageDir, stdio: "inherit", shell: process.platform === "win32" }
    );

    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`wrangler exited with code ${code}`));
    });
  });
}

async function collectVideos(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await collectVideos(fullPath));
      continue;
    }
    if (!isVideoFile(entry.name)) continue;
    files.push(fullPath);
  }

  return files;
}

async function main() {
  let files;
  try {
    files = await collectVideos(videosDir);
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
      console.error(`视频目录不存在: ${videosDir}`);
      process.exit(1);
    }
    throw error;
  }

  if (files.length === 0) {
    console.log("files/ 目录中没有可上传的视频文件。");
    return;
  }

  console.log(`准备上传 ${files.length} 个视频到 R2 bucket: ${bucketName}`);

  for (const filePath of files) {
    const relativePath = path.relative(videosDir, filePath).replaceAll("\\", "/");
    const fileStat = await stat(filePath);
    const sizeMb = (fileStat.size / (1024 * 1024)).toFixed(1);

    console.log(`\n上传 ${relativePath} (${sizeMb} MB)...`);
    await runWrangler([
      "r2",
      "object",
      "put",
      `${bucketName}/${relativePath}`,
      "--file",
      filePath,
      "--content-type",
      guessContentType(relativePath),
      "--config",
      wranglerConfig,
      "--remote"
    ]);
  }

  console.log("\n全部上传完成。");
}

function guessContentType(fileName) {
  const ext = path.extname(fileName).toLowerCase();
  const map = {
    ".mp4": "video/mp4",
    ".webm": "video/webm",
    ".mov": "video/quicktime",
    ".mkv": "video/x-matroska",
    ".avi": "video/x-msvideo",
    ".m4v": "video/x-m4v",
    ".ogv": "video/ogg"
  };
  return map[ext] ?? "application/octet-stream";
}

main().catch((error) => {
  console.error(error.message ?? error);
  process.exit(1);
});
