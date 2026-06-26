import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const args = parseArgs(process.argv.slice(2));
const origin = args.origin ?? "http://127.0.0.1:8788";
const basePath = normalizeBasePath(args["base-path"] ?? "/");
const outputDir = args.out ?? ".output/public";

const pending = [basePath, joinUrlPath(basePath, "sitemap.xml")];
const queued = new Set(pending);
const exported = [];

for (let index = 0; index < pending.length; index += 1) {
  const pagePath = pending[index];
  const url = new URL(pagePath, origin);
  const response = await fetch(url, {
    headers: {
      accept: "text/html,application/xhtml+xml,application/xml,text/xml;q=0.9,*/*;q=0.8",
    },
  });

  if (!response.ok) {
    if (pagePath.endsWith("/sitemap.xml") && response.status === 404) {
      continue;
    }
    throw new Error(`Failed to export ${pagePath}: ${response.status} ${response.statusText}`);
  }

  const contentType = response.headers.get("content-type") ?? "";
  const body = await response.text();
  const filePath = outputFileForPath(pagePath, contentType);

  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, body);
  exported.push(pagePath);

  if (contentType.includes("text/html")) {
    for (const href of extractHrefValues(body)) {
      const nextPath = normalizeInternalPath(href, pagePath);
      if (nextPath && !queued.has(nextPath)) {
        queued.add(nextPath);
        pending.push(nextPath);
      }
    }
  }
}

console.log(`Exported ${exported.length} page(s):`);
for (const pagePath of exported) {
  console.log(`- ${pagePath}`);
}

function parseArgs(argv) {
  const parsed = {};

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (!arg.startsWith("--")) continue;

    const key = arg.slice(2);
    const value = argv[index + 1];
    if (!value || value.startsWith("--")) {
      parsed[key] = "true";
      continue;
    }

    parsed[key] = value;
    index += 1;
  }

  return parsed;
}

function normalizeBasePath(value) {
  const withLeadingSlash = value.startsWith("/") ? value : `/${value}`;
  return withLeadingSlash.endsWith("/") ? withLeadingSlash : `${withLeadingSlash}/`;
}

function joinUrlPath(base, suffix) {
  return `${base}${suffix}`.replace(/\/{2,}/g, "/");
}

function normalizeInternalPath(href, currentPath) {
  if (href.startsWith("#")) return undefined;

  let url;
  try {
    url = new URL(href, new URL(currentPath, origin));
  } catch {
    return undefined;
  }

  if (url.origin !== origin) return undefined;
  if (!url.pathname.startsWith(basePath)) return undefined;
  if (url.pathname.includes("/assets/")) return undefined;
  if (path.extname(url.pathname) && !url.pathname.endsWith(".html")) return undefined;

  const normalizedPath = stripTrailingSlash(url.pathname);
  const normalizedBasePath = stripTrailingSlash(basePath);

  return normalizedPath === normalizedBasePath ? basePath : normalizedPath;
}

function stripTrailingSlash(value) {
  if (value === "/") return value;
  return value.endsWith("/") ? value.slice(0, -1) : value;
}

function outputFileForPath(pagePath, contentType) {
  const relativePath = pagePath.slice(basePath.length).replace(/^\/+/, "");

  if (!relativePath) {
    return path.join(outputDir, "index.html");
  }

  if (!contentType.includes("text/html")) {
    return path.join(outputDir, relativePath);
  }

  if (relativePath.endsWith(".html")) {
    return path.join(outputDir, relativePath);
  }

  return path.join(outputDir, relativePath, "index.html");
}

function extractHrefValues(html) {
  const hrefs = [];
  const hrefPattern = /href=["']([^"']+)["']/g;
  let match;

  while ((match = hrefPattern.exec(html)) !== null) {
    hrefs.push(match[1]);
  }

  return hrefs;
}
