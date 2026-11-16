from pathlib import Path
from pypdf import PdfReader

root = Path(__file__).resolve().parent.parent
original = PdfReader(str(root / 'assets/papers/ssg/v0.1/ssg-asplos27-v2.4.7.pdf'), strict=True)
author = PdfReader(str(root / 'assets/papers/ssg/author-2026-11/ssg-technical-report-xiakai-pan.pdf'), strict=True)

print('ORIGINAL PAGES ROOT:', original.trailer['/Root'].raw_get('/Pages'), 'COUNT:', len(original.pages), flush=True)
print('DERIVED PAGES COUNT:', len(author.pages), flush=True)

assert len(original.pages) == 13, f"Unexpected historical pages: {len(original.pages)}"
assert len(author.pages) == 14, f"Unexpected derived page count: {len(author.pages)}"
assert author.metadata.author == 'Xiakai Pan', author.metadata
cover = author.pages[0].extract_text()
assert 'System Substrate Graph' in cover
assert 'Xiakai Pan' in cover
assert 'No institutional affiliation' in cover
assert 'unreviewed technical report' in cover

# The original PDF body follows the cover. Check all extracted text pages.
for i in range(len(original.pages)):
    assert author.pages[i + 1].extract_text() == original.pages[i].extract_text(), f"Source page {i+1} text changed"
print("SSG author PDF verified: 14 pages, cover metadata, 13 source pages unchanged.")
