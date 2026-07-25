/**
 * 将正文中的关键词 / Markdown 链接转成安全 HTML。
 * 支持：
 * 1. [显示名](https://...) 内联写法
 * 2. keywordLinks 表里登记的关键词自动匹配（长词优先）
 */
export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isSafeHttpUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

function renderAnchor(label: string, href: string): string {
  const safeHref = escapeHtml(href);
  const safeLabel = escapeHtml(label);
  return `<a class="inline-link" href="${safeHref}" target="_blank" rel="noopener noreferrer">${safeLabel}</a>`;
}

/** 提取 Markdown 链接，占位后再做关键词替换，避免互相干扰 */
function extractMarkdownLinks(text: string): { text: string; slots: string[] } {
  const slots: string[] = [];
  const replaced = text.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, (full, label: string, href: string) => {
    if (!isSafeHttpUrl(href)) return full;
    const token = `@@LINK${slots.length}@@`;
    slots.push(renderAnchor(label, href));
    return token;
  });
  return { text: replaced, slots };
}

function applyKeywordLinks(escapedText: string, glossary: Record<string, string>): string {
  const entries = Object.entries(glossary)
    .filter(([key, url]) => key.trim() && isSafeHttpUrl(url))
    .sort((a, b) => b[0].length - a[0].length);

  if (entries.length === 0) return escapedText;

  const pattern = new RegExp(
    entries.map(([key]) => key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'),
    'g',
  );

  const urlByKey = new Map(entries.map(([key, url]) => [key, url]));

  return escapedText.replace(pattern, (match) => {
    const href = urlByKey.get(match);
    if (!href) return match;
    return renderAnchor(match, href);
  });
}

export function linkify(text: string, glossary: Record<string, string> = {}): string {
  const { text: withSlots, slots } = extractMarkdownLinks(text);
  // 占位符经 escape 后仍是 @@LINKn@@，再做关键词匹配，最后还原锚点 HTML
  let html = escapeHtml(withSlots);
  html = applyKeywordLinks(html, glossary);
  html = html.replace(/@@LINK(\d+)@@/g, (_m, i) => slots[Number(i)] ?? '');
  return html;
}
