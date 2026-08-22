"""
Fix hardcoded .avif references in static blog page files.
These files have their own image paths that need to be updated to .webp.
"""

import re
from pathlib import Path

SRC_DIR = Path(r"D:\school website - Copy\jai-govind-school\src")
BLOG_DIR = Path(r"D:\school website - Copy\jai-govind-school\public\images\blog")

def get_existing_webp_files():
    """Get list of .webp files that exist."""
    return {f.stem for f in BLOG_DIR.glob("*.webp")}

def fix_file(file_path, existing_webp):
    """Fix .avif references in a file."""
    content = file_path.read_text(encoding='utf-8')
    
    # Find all .avif references
    def replace_avif(match):
        full_match = match.group(0)
        # Extract the filename part
        if '/images/blog/' in full_match:
            # Blog image - check if .webp exists
            parts = full_match.split('/images/blog/')
            if len(parts) > 1:
                avif_name = parts[1].split('.')[0]
                if avif_name in existing_webp:
                    return full_match.replace('.avif', '.webp')
        elif '/images/' in full_match:
            # Other images (school-logo, school-building) - keep as is
            return full_match
        return full_match
    
    # Replace .avif with .webp where applicable
    new_content = re.sub(r'[^"\']*\.avif', replace_avif, content)
    
    if new_content != content:
        file_path.write_text(new_content, encoding='utf-8')
        return True
    return False

def main():
    print("FIXING STATIC BLOG PAGES")
    print("=" * 60)
    
    existing_webp = get_existing_webp_files()
    print(f"Found {len(existing_webp)} .webp files")
    
    # Find all TypeScript/TSX files
    ts_files = list(SRC_DIR.rglob("*.ts")) + list(SRC_DIR.rglob("*.tsx"))
    
    fixed_count = 0
    for file_path in ts_files:
        if fix_file(file_path, existing_webp):
            print(f"  ✅ {file_path.relative_to(SRC_DIR)}")
            fixed_count += 1
    
    print(f"\n{'=' * 60}")
    print(f"Fixed {fixed_count} files")

if __name__ == "__main__":
    main()
