import { readFile, stat } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { build, walk, out } from './build.mjs';
const { config } = await build();
const base = config.basePath.replace(/\/$/, '');
let count = 0;
for (const file of (await walk(out)).filter(f => f.endsWith('.html'))) {
  const html = await readFile(file, 'utf8');
  for (const [, raw] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (/^(?:https?:|mailto:|data:|\/\/)/.test(raw)) continue;
    const url = new URL(raw.replace(/&amp;/g, '&'), 'https://local.invalid' + base + '/' + file.slice(out.length + 1));
    let pathname = decodeURIComponent(url.pathname);
    if (base && !pathname.startsWith(base + '/')) throw new Error('Link outside basePath: ' + raw);
    pathname = pathname.slice(base.length);
    let target = resolve(out, '.' + pathname);
    if (!target.startsWith(out + '/') && target !== out) throw new Error('Invalid link: ' + raw);
    const info = await stat(target).catch(() => null);
    if (!info) throw new Error('Missing target in ' + file + ': ' + raw);
    if (info.isDirectory()) target = join(target, 'index.html');
    const content = await readFile(target, 'utf8');
    if (url.hash && !content.includes('id="' + decodeURIComponent(url.hash.slice(1)) + '"')) throw new Error('Missing anchor: ' + raw + ' in ' + file);
    count++;
  }
}
console.log('Validated ' + count + ' internal links/assets/anchors.');

