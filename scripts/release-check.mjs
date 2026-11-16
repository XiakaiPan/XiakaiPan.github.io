import { readFile, stat } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { root, out, walk } from './build.mjs';

const config = JSON.parse(await readFile(join(root,'site.config.json'),'utf8'));
const approval = JSON.parse(await readFile(join(root,'publication-approval.json'),'utf8'));
if (approval.schemaVersion !== 1) throw new Error('Unsupported approval schema');
if (approval.approved !== true || !approval.reviewer?.trim() || !/^\d{4}-\d{2}-\d{2}/.test(approval.reviewedAt || '')) throw new Error('PUBLICATION BLOCKED: overall approval, reviewer and review date required');
if (config.indexable !== true || !/^https:\/\/[a-z0-9.-]+$/i.test(config.url || '') || config.basePath !== '') throw new Error('PUBLICATION BLOCKED: canonical URL, basePath or indexability not finalized');
const expected = [...config.publicAssets].sort();
const approvedList = [...(approval.assets || [])].map(x=>x.path).sort();
if (JSON.stringify(expected)!==JSON.stringify(approvedList)) throw new Error('PUBLICATION BLOCKED: manifest and approval records differ');
for (const item of approval.assets) {
 if (item.approved !== true || !item.reviewer?.trim() || !item.basis?.trim()) throw new Error('PUBLICATION BLOCKED: no approval for '+item.path);
 const full=resolve(root,item.path);
 if(!full.startsWith(root+'/')) throw new Error('Asset path escapes root');
 const bytes=await readFile(full);
 const sha=createHash('sha1').update('blob '+bytes.length+'\0').update(bytes).digest('hex');
 if(sha!==item.gitBlobSha) throw new Error('PUBLICATION BLOCKED: reviewed asset changed '+item.path);
}
const all=(await walk(out)).map(p=>p.slice(out.length+1)).sort();
const allowed=new Set(['.nojekyll','robots.txt','404.html','downloads/Xiakai_Pan_CV.md','assets/favicon.svg','assets/site.css',...config.publicAssets]);
for(const p of all) if(!p.endsWith('/index.html') && p!=='index.html' && !allowed.has(p)) throw new Error('Unexpected published file '+p);
if(!(await stat(join(out,'index.html')).catch(()=>null))) throw new Error('Run npm run check first');
console.log('RELEASE CHECK PASS — exact bytes and approvals verified');
