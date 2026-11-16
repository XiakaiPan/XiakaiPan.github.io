import { readFile, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const originalPath = resolve(root, 'assets/papers/ssg/v0.1/ssg-asplos27-v2.4.7.pdf');
const authorPath = resolve(root, 'assets/papers/ssg/author-2026-11/ssg-technical-report-xiakai-pan.pdf');
const expectedSize = 496736;
const contentLines = [
  "q",
  "0.10 0.35 0.28 rg",
  "65 700 482 4 re f",
  "Q",
  "BT",
  "/F1 13 Tf",
  "0.15 0.27 0.24 rg",
  "65 650 Td",
  "(INDEPENDENT TECHNICAL REPORT) Tj",
  "0 -66 Td",
  "/F1 28 Tf",
  "(System Substrate Graph) Tj",
  "0 -42 Td",
  "/F1 15 Tf",
  "(A Cross-Scale Representation of AI Computing) Tj",
  "0 -76 Td",
  "/F1 15 Tf",
  "(Xiakai Pan) Tj",
  "0 -26 Td",
  "/F1 11 Tf",
  "(November 2026 - Author's web edition) Tj",
  "0 -70 Td",
  "/F1 11 Tf",
  "(This edition adds an author-identification cover to the historical) Tj",
  "0 -18 Td",
  "(September 2026 technical manuscript, which follows unchanged.) Tj",
  "0 -32 Td",
  "(The work is an unreviewed technical report; no conference acceptance) Tj",
  "0 -18 Td",
  "(or independent reproduction is claimed.) Tj",
  "0 -70 Td",
  "/F1 10 Tf",
  "(No institutional affiliation is stated for this edition.) Tj",
  "ET"
];
const contentStream = contentLines.join('\n') + '\n';
function ascii(value) {
  if (/[^\x00-\x7f]/.test(value)) throw new Error('Non-ASCII PDF syntax not allowed');
  return Buffer.from(value, 'ascii');
}
const original = await readFile(originalPath);
if (original.length !== expectedSize) throw new Error('Original source changed: review and revise generator before regenerating author version');
const trailer = original.subarray(Math.max(0, original.length - 2000)).toString('latin1');
const previous = Number([...trailer.matchAll(/startxref\s+(\d+)/g)].at(-1)?.[1]);
if (previous !== 495157 || !trailer.includes('/Root 553 0 R') || !trailer.includes('/Size 556')) {
  throw new Error('Unexpected original PDF structure; generator must be audited before reuse');
}
let cursor = original.length + 1;
const objects = [];
function add(num, dict) {
  const data = ascii(num + ' 0 obj\n' + dict + '\nendobj\n');
  objects.push({ num, offset: cursor, data });
  cursor += data.length;
}
add(556, '<< /Type /Catalog /Pages 557 0 R /Lang (en-US) >>');
add(557, '<< /Type /Pages /Count 14 /Kids [558 0 R 552 0 R] >>');
add(558, '<< /Type /Page /Parent 557 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 559 0 R >> >> /Contents 560 0 R >>');
add(559, '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>');
add(560, '<< /Length ' + ascii(contentStream).length + ' >>\nstream\n' + contentStream + 'endstream');
add(561, '<< /Title (System Substrate Graph - Technical Report, Author Web Edition 2026) /Author (Xiakai Pan) /Subject (Author-cover edition of September 2026 manuscript; original body unchanged) /Creator (Research Portfolio) >>');
const xref = 'xref\n556 6\n' +
  objects.map(o => String(o.offset).padStart(10, '0') + ' 00000 n \n').join('') +
  'trailer\n<< /Size 562 /Root 556 0 R /Info 561 0 R /Prev ' + previous +
  ' >>\nstartxref\n' + cursor + '\n%%EOF\n';
const output = Buffer.concat([original, ascii('\n'), ...objects.map(o => o.data), ascii(xref)]);
const actual = await readFile(authorPath).catch(() => null);
if (process.argv.includes('--check')) {
  if (!actual || !actual.equals(output)) throw new Error('Author PDF is stale or differs from reproducible generator');
  console.log('Verified reproducible author-cover PDF; original bytes preserved');
} else {
  await writeFile(authorPath, output);
  console.log('Wrote ' + authorPath);
}
