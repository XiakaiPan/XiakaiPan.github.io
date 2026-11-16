import { readFile, writeFile, mkdir, readdir, rm, cp } from 'node:fs/promises';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Marked } from 'marked';
import { parse } from 'yaml';

export const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
export const out = join(root, 'dist');
export async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(e => e.isDirectory() ? walk(join(dir, e.name)) : join(dir, e.name)))).flat();
}
const escape = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export async function build() {
  const config = JSON.parse(await readFile(join(root, 'site.config.json'), 'utf8'));
  const base = config.basePath.replace(/\/$/, '');
  if (base && !/^\/[a-zA-Z0-9/_-]+$/.test(base)) throw new Error('Invalid basePath');
  const href = route => base + route;
  const pages = [];
  for (const file of (await walk(join(root, 'content'))).filter(f => f.endsWith('.md'))) {
    const source = await readFile(file, 'utf8');
    const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
    if (!match) throw new Error('Missing frontmatter: ' + file);
    const meta = parse(match[1]);
    if (meta.draft === true) continue;
    if (!meta.title || !/^\/(?:[a-z0-9-]+\/)*$/.test(meta.permalink)) throw new Error('Invalid title/permalink: ' + file);
    if (pages.some(p => p.meta.permalink === meta.permalink)) throw new Error('Duplicate route: ' + meta.permalink);
    pages.push({ meta, body: source.slice(match[0].length) });
  }
  await rm(out, { recursive: true, force: true });
  await mkdir(out, { recursive: true });
  // Explicit manifest. Never copy the entire private source asset directory.
  const publicAssets = new Set(['assets/site.css', 'assets/favicon.svg', ...(config.publicAssets || [])]);
  for (const rel of publicAssets) {
    if (typeof rel !== 'string' || !/^assets\/(?:[A-Za-z0-9_-]+\/)*[A-Za-z0-9_.-]+$/.test(rel) ||
        rel.split('/').includes('..') || !/\.(css|svg|png|jpe?g|webp|pdf)$/.test(rel)) {
      throw new Error('Invalid public asset path: ' + rel);
    }
    const dest = join(out, rel);
    await mkdir(dirname(dest), { recursive: true });
    await cp(join(root, rel), dest);
  }
  await mkdir(join(out, 'downloads'), { recursive: true });
  const cv = pages.find(p => p.meta.permalink === '/cv/');
  if (cv) await writeFile(join(out, 'downloads', 'Xiakai_Pan_CV.md'), cv.body);
  for (const { meta, body } of pages) {
    const ids = new Map();
    const markdown = new Marked({ gfm: true, renderer: {
      heading({ tokens, depth }) {
        const text = this.parser.parseInline(tokens);
        const slug = text.replace(/<[^>]*>/g, '').toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu, '').trim().replace(/\s+/g, '-');
        const n = ids.get(slug) || 0; ids.set(slug, n + 1);
        return '<h' + depth + ' id="' + escape(slug + (n ? '-' + n : '')) + '">' + text + '</h' + depth + '>\n';
      }
    } });
    const content = markdown.parse(body).replace(/(href|src)="\/(?!\/)([^"]*)"/g, (_, attr, path) => attr + '="' + href('/' + path) + '"');
    const nav = config.navigation.map(([label, path]) => '<a ' + (meta.permalink === path ? 'aria-current="page" ' : '') + 'href="' + href(path) + '">' + escape(label) + '</a>').join('');
    const canonical = config.url ? '<link rel="canonical" href="' + escape(config.url.replace(/\/$/, '') + href(meta.permalink)) + '">' : '';
    const html = '<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">' +
      '<title>' + escape(meta.title) + ' · ' + escape(config.title) + '</title>' +
      '<meta name="description" content="' + escape(meta.description || config.description) + '">' +
      (config.indexable ? '' : '<meta name="robots" content="noindex,nofollow">') + canonical +
      '<link rel="icon" href="' + href('/assets/favicon.svg') + '" type="image/svg+xml">' +
      '<link rel="stylesheet" href="' + href('/assets/site.css') + '"></head><body>' +
      '<a class="skip" href="#main">Skip to content</a><header><a class="brand" href="' + href('/') + '">' + escape(config.title) +
      '<span>AI Computing &amp; Task Intelligence</span></a><nav aria-label="Main navigation">' + nav + '</nav></header>' +
      '<main id="main"><article>' + content + '</article></main><footer><span>Xiakai Pan · Research &amp; writing</span>' +
      '<a href="' + escape(config.github) + '">GitHub ↗</a></footer></body></html>';
    const target = join(out, meta.permalink, 'index.html');
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, html);
  }
  await writeFile(join(out, '.nojekyll'), '');
  await writeFile(join(out, 'robots.txt'), config.indexable ? 'User-agent: *\nAllow: /\n' : 'User-agent: *\nDisallow: /\n');
  await writeFile(join(out, '404.html'), '<!doctype html><html lang="en"><meta charset="utf-8"><title>Page not found</title><h1>Page not found</h1><a href="' + href('/') + '">Return home</a></html>');
  console.log('Built ' + pages.length + ' pages → dist/');
  return { config, pages };
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await build();

