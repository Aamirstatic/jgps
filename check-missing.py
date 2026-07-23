import re
from pathlib import Path

BLOG_DIR = Path(r"D:\school website - Copy\jai-govind-school\public\images\blog")

files = [
    r"D:\school website - Copy\jai-govind-school\src\data\articles.ts",
    r"D:\school website - Copy\jai-govind-school\src\data\hindi-articles.ts",
]

all_refs = set()

for f in files:
    content = open(f, encoding='utf-8').read()
    avif_refs = re.findall(r'/images/blog/([^"\']+\.avif)', content)
    for ref in avif_refs:
        all_refs.add(ref)

print("Checking if referenced AVIF files exist...")
print("=" * 60)

existing = 0
missing = 0

for ref in sorted(all_refs):
    path = BLOG_DIR / ref
    if path.exists():
        existing += 1
        print(f"✅ {ref}")
    else:
        missing += 1
        print(f"❌ {ref} — MISSING!")

print()
print(f"Summary: {existing} exist | {missing} missing | {len(all_refs)} total")
