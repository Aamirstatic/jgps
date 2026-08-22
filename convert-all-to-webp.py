"""
Convert all PNG images in Downloads folder to WebP format.
Place your Canva-exported PNG files in Downloads with the SAME name as the original AVIF.

Usage:
1. Edit image in Canva
2. Export as PNG
3. Save to Downloads folder with same name (e.g., 30-day-july-sprint-study-timetable.png)
4. Run this script
5. WebP files will be created in public/images/blog/
"""

import os
import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("Installing Pillow...")
    os.system("pip install Pillow")
    from PIL import Image

DOWNLOADS = Path.home() / "Downloads"
BLOG_DIR = Path(r"D:\school website - Copy\jai-govind-school\public\images\blog")
QUALITY = 80

def convert_png_to_webp(png_path, output_path):
    """Convert PNG to WebP with specified quality."""
    try:
        img = Image.open(png_path)
        img.save(output_path, "WEBP", quality=QUALITY)
        return True
    except Exception as e:
        print(f"  ERROR: {e}")
        return False

def main():
    # Find all PNG files in Downloads
    png_files = list(DOWNLOADS.glob("*.png"))
    
    if not png_files:
        print("No PNG files found in Downloads folder.")
        print(f"Looking in: {DOWNLOADS}")
        return
    
    print(f"Found {len(png_files)} PNG files in Downloads")
    print(f"Output: {BLOG_DIR}")
    print(f"Quality: {QUALITY}%")
    print("=" * 60)
    
    converted = 0
    skipped = 0
    
    for png_file in sorted(png_files):
        # Create output path
        webp_name = png_file.stem + ".webp"
        webp_path = BLOG_DIR / webp_name
        
        # Check if corresponding AVIF exists
        avif_path = BLOG_DIR / (png_file.stem + ".avif")
        
        if avif_path.exists():
            print(f"\n✅ {png_file.name}")
            print(f"   → {webp_name}")
            
            if convert_png_to_webp(png_file, webp_path):
                # Get file sizes
                png_size = png_file.stat().st_size / 1024
                webp_size = webp_path.stat().st_size / 1024
                print(f"   PNG: {png_size:.1f} KB → WebP: {webp_size:.1f} KB")
                converted += 1
            else:
                print(f"   ❌ Conversion failed")
        else:
            print(f"\n⚠️  {png_file.name}")
            print(f"   No matching AVIF found — skipping")
            skipped += 1
    
    print(f"\n{'=' * 60}")
    print(f"DONE: {converted} converted | {skipped} skipped")
    print(f"\nNext steps:")
    print(f"1. Update articles.ts image paths from .avif to .webp")
    print(f"2. Or keep both and let browser choose")

if __name__ == "__main__":
    main()
