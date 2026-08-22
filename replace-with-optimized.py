"""
Replace old blog images with optimized WebP versions.
Run this AFTER optimize-all-images.py and verifying the results.

This script will:
1. Copy optimized .webp files to public/images/blog/
2. Optionally backup old .avif files
3. Update article data files to use .webp paths
"""

import shutil
from pathlib import Path
import re

BLOG_DIR = Path(r"D:\school website - Copy\jai-govind-school\public\images\blog")
OPTIMIZED_DIR = BLOG_DIR / "optimized"
BACKUP_DIR = BLOG_DIR / "backup_avif"

# Data files to update
DATA_FILES = [
    Path(r"D:\school website - Copy\jai-govind-school\src\data\articles.ts"),
    Path(r"D:\school website - Copy\jai-govind-school\src\data\hindi-articles.ts"),
    Path(r"D:\school website - Copy\jai-govind-school\src\data\hindi-articles-new.ts"),
]

def backup_old_files():
    """Backup old AVIF files."""
    BACKUP_DIR.mkdir(exist_ok=True)
    
    backed_up = 0
    for avif_file in BLOG_DIR.glob("*.avif"):
        backup_path = BACKUP_DIR / avif_file.name
        if not backup_path.exists():
            shutil.copy2(avif_file, backup_path)
            backed_up += 1
    
    return backed_up

def copy_optimized_files():
    """Copy optimized WebP files to blog directory."""
    copied = 0
    
    for webp_file in OPTIMIZED_DIR.glob("*.webp"):
        dest_path = BLOG_DIR / webp_file.name
        shutil.copy2(webp_file, dest_path)
        copied += 1
    
    return copied

def update_data_files():
    """Update image paths in data files."""
    updated = 0
    
    for file_path in DATA_FILES:
        if not file_path.exists():
            continue
        
        content = file_path.read_text(encoding='utf-8')
        
        # Replace .avif with .webp for optimized images
        def replace_path(match):
            path = match.group(0)
            # Check if corresponding .webp exists
            avif_name = path.split('/')[-1]
            webp_name = avif_name.replace('.avif', '.webp')
            webp_path = BLOG_DIR / webp_name
            
            if webp_path.exists():
                return path.replace('.avif', '.webp')
            return path
        
        new_content = re.sub(r"/images/blog/[^'\"]+\.avif", replace_path, content)
        
        if new_content != content:
            file_path.write_text(new_content, encoding='utf-8')
            updated += 1
            print(f"  ✅ {file_path.name}")
    
    return updated

def main():
    print("=" * 60)
    print("REPLACE IMAGES WITH OPTIMIZED VERSIONS")
    print("=" * 60)
    
    # Check if optimized files exist
    if not OPTIMIZED_DIR.exists():
        print("ERROR: Optimized directory not found!")
        print("Run optimize-all-images.py first.")
        return
    
    optimized_count = len(list(OPTIMIZED_DIR.glob("*.webp")))
    print(f"Found {optimized_count} optimized WebP files")
    
    if optimized_count == 0:
        print("No optimized files found. Run optimize-all-images.py first.")
        return
    
    # Step 1: Backup old files
    print("\nStep 1: Backing up old AVIF files...")
    backed_up = backup_old_files()
    print(f"  Backed up {backed_up} files to: {BACKUP_DIR}")
    
    # Step 2: Copy optimized files
    print("\nStep 2: Copying optimized WebP files...")
    copied = copy_optimized_files()
    print(f"  Copied {copied} files to: {BLOG_DIR}")
    
    # Step 3: Update data files
    print("\nStep 3: Updating article data files...")
    updated = update_data_files()
    
    print()
    print("=" * 60)
    print("COMPLETE!")
    print("=" * 60)
    print(f"  - {backed_up} AVIF files backed up")
    print(f"  - {copied} WebP files deployed")
    print(f"  - {updated} data files updated")
    print()
    print("Old AVIF files are in: public/images/blog/backup_avif/")
    print("You can delete them later once everything is working.")

if __name__ == "__main__":
    main()
