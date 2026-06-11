interface Env {
  VIDEOS: R2Bucket;
}

const VIDEO_EXTENSIONS = new Set([
  ".mp4", ".webm", ".mov", ".mkv", ".avi", ".m4v", ".ogv"
]);

function isVideoKey(key: string): boolean {
  const dot = key.lastIndexOf(".");
  if (dot === -1) return false;
  return VIDEO_EXTENSIONS.has(key.slice(dot).toLowerCase());
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}

function formatDate(date: Date): string {
  return date.toLocaleString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function parseRangeHeader(range: string, size: number): R2Range | undefined {
  const match = /^bytes=(\d+)-(\d*)$/.exec(range);
  if (!match) return undefined;

  const start = Number.parseInt(match[1], 10);
  const end = match[2] ? Number.parseInt(match[2], 10) : size - 1;
  if (start > end || end >= size) return undefined;

  return { offset: start, length: end - start + 1 };
}

async function listVideos(bucket: R2Bucket) {
  const videos: Array<{
    key: string;
    name: string;
    size: number;
    uploaded: string;
    url: string;
  }> = [];

  let cursor: string | undefined;
  let truncated = true;

  while (truncated) {
    const listed = await bucket.list({ limit: 1000, cursor });
    for (const object of listed.objects) {
      if (!isVideoKey(object.key)) continue;
      videos.push({
        key: object.key,
        name: object.key.split("/").pop() ?? object.key,
        size: object.size,
        uploaded: formatDate(object.uploaded),
        url: `/${encodeURI(object.key)}`
      });
    }
    truncated = listed.truncated;
    cursor = listed.cursor;
  }

  videos.sort((a, b) => a.name.localeCompare(b.name, "zh-CN"));
  return videos;
}

function renderGallery(videos: Awaited<ReturnType<typeof listVideos>>): string {
  const cards = videos.length === 0
    ? `<p class="empty">暂无视频。把视频放进 <code>videos/files/</code> 后，运行 <code>upload-videos.bat</code> 上传到 R2。</p>`
    : videos.map((video) => `
        <article class="card">
          <div class="player-wrap">
            <video controls preload="metadata" playsinline src="${video.url}"></video>
          </div>
          <div class="meta">
            <h2>${video.name}</h2>
            <p>${formatSize(video.size)} · ${video.uploaded}</p>
            <a href="${video.url}" download>下载</a>
          </div>
        </article>
      `).join("");

  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>视频库 - lixin.dev</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      line-height: 1.6;
      background: #0f172a;
      color: #e2e8f0;
      min-height: 100vh;
    }
    header {
      background: #1e293b;
      padding: 1rem 2rem;
      border-bottom: 1px solid #334155;
    }
    nav {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      flex-wrap: wrap;
    }
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      color: #38bdf8;
      text-decoration: none;
    }
    .count { color: #94a3b8; font-size: 0.95rem; }
    main {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      display: grid;
      gap: 1.5rem;
    }
    .card {
      background: #1e293b;
      border: 1px solid #334155;
      border-radius: 12px;
      overflow: hidden;
    }
    .player-wrap {
      background: #000;
      aspect-ratio: 16 / 9;
    }
    video {
      width: 100%;
      height: 100%;
      display: block;
      background: #000;
    }
    .meta {
      padding: 1rem 1.25rem 1.25rem;
      display: grid;
      gap: 0.35rem;
    }
    .meta h2 {
      font-size: 1.05rem;
      word-break: break-all;
    }
    .meta p { color: #94a3b8; font-size: 0.9rem; }
    .meta a {
      color: #38bdf8;
      text-decoration: none;
      width: fit-content;
    }
    .meta a:hover { text-decoration: underline; }
    .empty {
      color: #94a3b8;
      background: #1e293b;
      border: 1px dashed #334155;
      border-radius: 12px;
      padding: 2rem;
    }
    code {
      background: #0f172a;
      padding: 0.15rem 0.4rem;
      border-radius: 4px;
      font-size: 0.9em;
    }
    footer {
      text-align: center;
      padding: 2rem;
      color: #64748b;
      font-size: 0.875rem;
    }
  </style>
</head>
<body>
  <header>
    <nav>
      <a class="logo" href="/">Video Library</a>
      <span class="count">${videos.length} 个视频</span>
    </nav>
  </header>
  <main>${cards}</main>
  <footer>Hosted on Cloudflare R2 + Workers</footer>
</body>
</html>`;
}

async function serveVideo(request: Request, env: Env, key: string): Promise<Response> {
  const head = await env.VIDEOS.head(key);
  if (!head) return new Response("Not found", { status: 404 });

  const rangeHeader = request.headers.get("range");
  const range = rangeHeader ? parseRangeHeader(rangeHeader, head.size) : undefined;
  const object = await env.VIDEOS.get(key, range ? { range } : undefined);
  if (!object) return new Response("Not found", { status: 404 });

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set("etag", object.httpEtag);
  headers.set("accept-ranges", "bytes");
  headers.set("cache-control", "public, max-age=31536000, immutable");
  headers.set("access-control-allow-origin", "*");

  if (range) {
    const start = range.offset ?? 0;
    const end = start + (range.length ?? 0) - 1;
    headers.set("content-range", `bytes ${start}-${end}/${head.size}`);
    return new Response(object.body, { status: 206, headers });
  }

  return new Response(object.body, { headers });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const pathname = decodeURIComponent(url.pathname);

    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "access-control-allow-origin": "*",
          "access-control-allow-methods": "GET, HEAD, OPTIONS",
          "access-control-max-age": "86400"
        }
      });
    }

    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method not allowed", { status: 405 });
    }

    if (pathname === "/" || pathname === "/index.html") {
      const videos = await listVideos(env.VIDEOS);
      return new Response(renderGallery(videos), {
        headers: { "content-type": "text/html; charset=utf-8" }
      });
    }

    if (pathname === "/api/videos") {
      const videos = await listVideos(env.VIDEOS);
      return Response.json(videos, {
        headers: { "access-control-allow-origin": "*" }
      });
    }

    const key = pathname.startsWith("/") ? pathname.slice(1) : pathname;
    if (!key || key.includes("..")) {
      return new Response("Invalid path", { status: 400 });
    }

    if (!isVideoKey(key)) {
      return new Response("Not found", { status: 404 });
    }

    if (request.method === "HEAD") {
      const head = await env.VIDEOS.head(key);
      if (!head) return new Response("Not found", { status: 404 });
      const headers = new Headers();
      head.writeHttpMetadata(headers);
      headers.set("etag", head.httpEtag);
      headers.set("accept-ranges", "bytes");
      return new Response(null, { headers });
    }

    return serveVideo(request, env, key);
  }
};
