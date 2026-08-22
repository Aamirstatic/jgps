import re
from pathlib import Path

def extract_images(file_path, lang="en"):
    content = Path(file_path).read_text(encoding='utf-8')
    
    # Find all image paths
    pattern = r"image:\s*['\"](/images/blog/[^'\"]+)['\"]"
    matches = re.findall(pattern, content)
    
    return matches

# English articles
en_path = Path(r"D:\school website - Copy\jai-govind-school\src\data\articles.ts")
en_images = extract_images(en_path, "en")

# Hindi articles
hi_path = Path(r"D:\school website - Copy\jai-govind-school\src\data\hindi-articles.ts")
hi_images = extract_images(hi_path, "hi")

# Hindi articles new
hi_new_path = Path(r"D:\school website - Copy\jai-govind-school\src\data\hindi-articles-new.ts")
if hi_new_path.exists():
    hi_new_images = extract_images(hi_new_path, "hi")
else:
    hi_new_images = []

# All images in blog folder
blog_dir = Path(r"D:\school website - Copy\jai-govind-school\public\images\blog")
all_avif = sorted([f.name for f in blog_dir.glob("*.avif")])

# Collect all used images
used_images = set()
for img in en_images + hi_images + hi_new_images:
    used_images.add(img.split('/')[-1])

print("=" * 80)
print("COMPLETE IMAGE LIST — Blog Images")
print("=" * 80)

print(f"\nTotal AVIF files in folder: {len(all_avif)}")
print(f"Total used in English articles: {len(en_images)}")
print(f"Total used in Hindi articles: {len(hi_images)}")
if hi_new_images:
    print(f"Total used in Hindi articles (new): {len(hi_new_images)}")

print("\n" + "=" * 80)
print("ALL IMAGES WITH PROPER NAMES:")
print("=" * 80)

for i, img in enumerate(all_avif, 1):
    status = "✅ USED" if img in used_images else "❌ UNUSED"
    # Create a readable name from filename
    readable = img.replace('.avif', '').replace('-', ' ').replace('_', ' ').title()
    print(f"{i:3d}. {img}")
    print(f"     Name: {readable}")
    print(f"     Status: {status}")
    print()
