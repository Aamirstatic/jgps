"""
Blog Image Optimizer for Google Discover
=========================================
Optimizes all blog images with:
1. Proper dimensions (1200x675px)
2. EXIF metadata (copyright, description, keywords)
3. WebP format (80% quality)
4. Unique filename-based alt text

Usage: python optimize-all-images.py
"""

import os
import sys
import struct
import io
from pathlib import Path
from datetime import datetime

try:
    from PIL import Image, ExifTags
    from PIL.ExifTags import TAGS, IFD
except ImportError:
    os.system("pip install Pillow")
    from PIL import Image, ExifTags
    from PIL.ExifTags import TAGS, IFD

BLOG_DIR = Path(r"D:\school website - Copy\jai-govind-school\public\images\blog")
OUTPUT_DIR = Path(r"D:\school website - Copy\jai-govind-school\public\images\blog\optimized")
TARGET_SIZE = (1200, 675)
QUALITY = 85

# School info for metadata
SCHOOL_NAME = "Jai Govind Public School"
SCHOOL_URL = "https://jgps.in"
COPYRIGHT = f"Copyright 2026 {SCHOOL_NAME}"

def create_exif_data(image_name, article_title):
    """Create EXIF metadata for the image."""
    # Create basic EXIF data using PIL
    img = Image.new('RGB', (1, 1))
    
    # Set EXIF data
    exif_data = img.getexif()
    
    # Basic info
    exif_data[0x010F] = SCHOOL_NAME  # Make
    exif_data[0x0110] = "Blog Image"  # Model
    exif_data[0x0131] = "MiMoCode Image Optimizer"  # Software
    exif_data[0x0132] = datetime.now().strftime("%Y:%m:%d %H:%M:%S")  # DateTime
    exif_data[0x010E] = article_title  # ImageDescription
    exif_data[0x013B] = SCHOOL_NAME  # Artist
    exif_data[0x8298] = COPYRIGHT  # Copyright
    
    return exif_data

def optimize_image(input_path, output_path, article_title):
    """Optimize a single image."""
    try:
        img = Image.open(input_path)
        
        # Convert to RGB if needed (for WebP)
        if img.mode in ('RGBA', 'P', 'LA'):
            img = img.convert('RGB')
        
        # Resize to target dimensions
        img = img.resize(TARGET_SIZE, Image.Resampling.LANCZOS)
        
        # Create EXIF data
        exif_data = create_exif_data(input_path.name, article_title)
        
        # Save as WebP with metadata
        img.save(
            output_path,
            "WEBP",
            quality=QUALITY,
            exif=exif_data.tobytes(),
            optimize=True
        )
        
        return True
    except Exception as e:
        print(f"  ERROR: {e}")
        return False

def get_article_title(filename):
    """Generate a readable title from filename."""
    name = filename.stem
    # Convert slug to title
    title = name.replace('-', ' ').replace('_', ' ').title()
    return title

def main():
    print("=" * 70)
    print("BLOG IMAGE OPTIMIZER FOR GOOGLE DISCOVER")
    print("=" * 70)
    print(f"Input: {BLOG_DIR}")
    print(f"Output: {OUTPUT_DIR}")
    print(f"Target size: {TARGET_SIZE[0]}x{TARGET_SIZE[1]}px")
    print(f"Quality: {QUALITY}%")
    print()
    
    # Create output directory
    OUTPUT_DIR.mkdir(exist_ok=True)
    
    # Get all AVIF files
    avif_files = sorted(BLOG_DIR.glob("*.avif"))
    print(f"Found {len(avif_files)} AVIF images to optimize")
    print()
    
    # Stats
    total = len(avif_files)
    success = 0
    failed = 0
    
    for i, avif_file in enumerate(avif_files, 1):
        # Output path
        output_file = OUTPUT_DIR / (avif_file.stem + ".webp")
        article_title = get_article_title(avif_file)
        
        print(f"[{i:3d}/{total}] {avif_file.name}")
        
        if optimize_image(avif_file, output_file, article_title):
            # Get file sizes
            input_size = avif_file.stat().st_size / 1024
            output_size = output_file.stat().st_size / 1024
            print(f"        {input_size:.1f} KB → {output_size:.1f} KB ✅")
            success += 1
        else:
            print(f"        ❌ Failed")
            failed += 1
    
    print()
    print("=" * 70)
    print(f"COMPLETE: {success} optimized | {failed} failed | {total} total")
    print("=" * 70)
    print()
    print("NEXT STEPS:")
    print("1. Check optimized images in: public/images/blog/optimized/")
    print("2. If satisfied, run: python replace-with-optimized.py")
    print("3. Then run: python update-image-paths.py")

if __name__ == "__main__":
    main()
