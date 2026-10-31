import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, resolve, extname } from 'node:path';
import { build, walk, root, out } from './build.mjs';
const option = name => {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : undefined;
};
const host = option('--host') || process.env.HOST || '127.0.0.1';
const port = Number(option('--port') || process.env.PORT || 4321);
let { config } = await build();
let building = false, previous = '';
async function fingerprint() {
  const files = [...await walk(join(root, 'content')), ...await walk(join(root, 'assets')), join(root, 'site.config.json')];
  return Promise.all(files.map(async f => f + ':' + (await stat(f)).mtimeMs)).then(x => x.join('|'));
}
previous = await fingerprint();
const timer = setInterval(async () => {
  if (building) return;
  building = true;
  try {
    const next = await fingerprint();
    if (next !== previous) { ({ config } = await build()); previous = next; console.log('Updated. Refresh the browser.'); }
  } catch (error) { console.error(error.message); }
  finally { building = false; }
}, 700);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml', '.md': 'text/markdown; charset=utf-8', '.pdf': 'application/pdf', '.txt': 'text/plain; charset=utf-8' };
const server = http.createServer(async (req, res) => {
  if (building) { res.writeHead(503, { 'Retry-After': '1' }); return res.end('Rebuilding; refresh shortly.'); }
  try {
    let path = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const base = config.basePath.replace(/\/$/, '');
    if (base && !path.startsWith(base + '/')) { res.writeHead(302, { Location: base + '/' }); return res.end(); }
    path = path.slice(base.length);
    let file = resolve(out, '.' + path);
    if (!file.startsWith(out + '/') && file !== out) throw new Error('Invalid path');
    if ((await stat(file)).isDirectory()) file = join(file, 'index.html');
    const body = await readFile(file);
    res.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' }); res.end(body);
  } catch { res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' }); res.end(await readFile(join(out, '404.html'))); }
});
server.listen(port, host, () => console.log('Local: http://' + host + ':' + port + config.basePath + '/'));
server.on('error', error => { clearInterval(timer); console.error(error.message); process.exit(1); });
for (const signal of ['SIGTERM', 'SIGINT']) process.on(signal, () => { clearInterval(timer); server.close(() => process.exit(0)); });

