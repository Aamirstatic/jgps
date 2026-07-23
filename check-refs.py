import re

files = [
    r"D:\school website - Copy\jai-govind-school\src\data\articles.ts",
    r"D:\school website - Copy\jai-govind-school\src\data\hindi-articles.ts",
    r"D:\school website - Copy\jai-govind-school\src\data\hindi-articles-new.ts",
]

for f in files:
    try:
        content = open(f, encoding='utf-8').read()
        avif_refs = re.findall(r'/images/blog/[^"\']+\.avif', content)
        webp_refs = re.findall(r'/images/blog/[^"\']+\.webp', content)
        
        print(f"\n{f.split(chr(92))[-1]}:")
        print(f"  AVIF: {len(avif_refs)} | WebP: {len(webp_refs)}")
        
        if avif_refs:
            print("  Remaining AVIF refs:")
            for ref in avif_refs:
                print(f"    - {ref}")
    except Exception as e:
        print(f"Error reading {f}: {e}")
