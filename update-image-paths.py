"""
Update article data files to use .webp instead of .avif for images.
Run this AFTER converting all images to WebP format.

This script will:
1. Check which .webp files exist in public/images/blog/
2. Update articles.ts and hindi-articles.ts to use .webp paths
3. Keep .avif as fallback (won't delete them)
"""

from pathlib import Path
import re

BLOG_DIR = Path(r"D:\school website - Copy\jai-govind-school\public\images\blog")

# Data files to update
DATA_FILES = [
    Path(r"D:\school website - Copy\jai-govind-school\src\data\articles.ts"),
    Path(r"D:\school website - Copy\jai-govind-school\src\data\hindi-articles.ts"),
    Path(r"D:\school website - Copy\jai-govind-school\src\data\hindi-articles-new.ts"),
]

def get_webp_files():
    """Get list of .webp files that have corresponding .avif files."""
    webp_files = set()
    for avif in BLOG_DIR.glob("*.avif"):
        webp_path = BLOG_DIR / (avif.stem + ".webp")
        if webp_path.exists():
            webp_files.add(avif.stem)
    return webp_files

def update_file(file_path, convertible):
    """Update image paths from .avif to .webp."""
    content = file_path.read_text(encoding='utf-8')
    
    # Find all .avif image references
    pattern = r"(/images/blog/[^'\"]+)\.avif"
    
    def replace_path(match):
        path = match.group(1)
        filename = path.split('/')[-1]
        if filename in convertible:
            return path + ".webp"
        return match.group(0)
    
    new_content = re.sub(pattern, replace_path, content)
    
    if new_content != content:
        file_path.write_text(new_content, encoding='utf-8')
        return True
    return False

def main():
    print("IMAGE PATH UPDATER")
    print("=" * 60)
    
    # Get convertible files
    convertible = get_webp_files()
    print(f"Found {len(convertible)} images with both .avif and .webp versions")
    
    # Update each data file
    for file_path in DATA_FILES:
        if not file_path.exists():
            print(f"\n⚠️  {file_path.name} — not found, skipping")
            continue
        
        if update_file(file_path, convertible):
            print(f"\n✅ {file_path.name} — updated")
        else:
            print(f"\n⏭️  {file_path.name} — no changes needed")
    
    print(f"\n{'=' * 60}")
    print("DONE!")
    print("\nNote: .avif files are still kept as backup.")
    print("You can delete them later once WebP images are confirmed working.")

if __name__ == "__main__":
    main()
