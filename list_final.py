import re
from pathlib import Path

def extract_articles(file_path):
    content = Path(file_path).read_text(encoding='utf-8')
    
    # Extract slug, title, image
    articles = []
    # Find blocks between { and }
    blocks = re.findall(r'\{[^{}]*slug:\s*["\']([^"\']+)["\'][^{}]*\}', content, re.DOTALL)
    
    # Better approach: find each article block
    pattern = r"slug:\s*['\"]([^'\"]+)['\"]"
    slug_matches = re.finditer(pattern, content)
    
    for match in slug_matches:
        slug = match.group(1)
        # Find title near this slug
        start = max(0, match.start() - 500)
        end = min(len(content), match.end() + 2000)
        block = content[start:end]
        
        title_match = re.search(r"title:\s*['\"]([^'\"]+)['\"]", block)
        image_match = re.search(r"image:\s*['\"]([^'\"]+)['\"]", block)
        
        if title_match and image_match:
            articles.append({
                'slug': slug,
                'title': title_match.group(1),
                'image': image_match.group(1).split('/')[-1]
            })
    
    return articles

# Get all articles
en_articles = extract_articles(Path(r"D:\school website - Copy\jai-govind-school\src\data\articles.ts"))
hi_articles = extract_articles(Path(r"D:\school website - Copy\jai-govind-school\src\data\hindi-articles.ts"))

# All images in folder
blog_dir = Path(r"D:\school website - Copy\jai-govind-school\public\images\blog")
all_avif = sorted([f.name for f in blog_dir.glob("*.avif")])

# Build lookup: image -> article
image_to_article = {}
for a in en_articles:
    image_to_article[a['image']] = {'title': a['title'], 'lang': 'EN', 'slug': a['slug']}
for a in hi_articles:
    if a['image'] not in image_to_article:
        image_to_article[a['image']] = {'title': a['title'], 'lang': 'HI', 'slug': a['slug']}

print("=" * 100)
print("COMPLETE BLOG IMAGE LIST WITH ARTICLE TITLES")
print("=" * 100)

used_count = 0
unused_count = 0

for i, img in enumerate(all_avif, 1):
    if img in image_to_article:
        info = image_to_article[img]
        status = f"✅ {info['lang']}"
        title = info['title'][:70]
        used_count += 1
    else:
        status = "❌ UNUSED"
        title = "—"
        unused_count += 1
    
    print(f"\n{i:3d}. {img}")
    print(f"     Article: {title}")
    print(f"     Status: {status}")

print(f"\n{'=' * 100}")
print(f"SUMMARY: {used_count} used | {unused_count} unused | {len(all_avif)} total")
print(f"{'=' * 100}")
