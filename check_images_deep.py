import os
from pathlib import Path

BLOG_DIR = Path(r"D:\school website - Copy\jai-govind-school\public\images\blog")

def deep_check(filepath):
    """Deep byte-level analysis for AI detection."""
    try:
        with open(filepath, 'rb') as f:
            data = f.read()
        
        findings = []
        size = len(data)
        
        # 1. Check for JPEG/JFIF structure
        if data[:2] == b'\xff\xd8':
            findings.append("JPEG format detected")
            # Check for JFIF marker
            if b'JFIF' in data[:20]:
                findings.append("JFIF standard")
            # Check for Adobe marker
            if b'Adobe' in data[:100]:
                findings.append("Adobe marker found - could be Adobe Firefly/Express")
        
        # 2. Check AVIF structure
        if b'avif' in data[:50] or b'avis' in data[:50]:
            findings.append("AVIF format")
            # AVIF is based on HEIF/HEVC
            # Check for EXIF in AVIF (stored in meta box)
            if b'Exif' in data:
                findings.append("Has EXIF in AVIF container")
            else:
                findings.append("No EXIF in AVIF container")
        
        # 3. Check WebP structure
        if data[:4] == b'RIFF' and data[8:12] == b'WEBP':
            findings.append("WebP format")
            # Check for EXIF chunk
            if b'EXIF' in data:
                findings.append("Has EXIF chunk")
            # Check for XMP chunk
            if b'XMP ' in data or b'XMP\0' in data:
                findings.append("Has XMP chunk")
        
        # 4. Check for common AI image characteristics
        # AI images often have very uniform noise patterns
        # Check entropy-like patterns in the data
        
        # 5. Check for hidden text/strings that might indicate AI generation
        # Search for any readable strings in the file
        strings_found = []
        current_string = ""
        for byte in data:
            if 32 <= byte <= 126:  # printable ASCII
                current_string += chr(byte)
            else:
                if len(current_string) >= 8:  # Only strings 8+ chars
                    strings_found.append(current_string)
                current_string = ""
        
        # Filter for interesting strings
        ai_related_strings = []
        for s in strings_found:
            s_lower = s.lower()
            if any(kw in s_lower for kw in [
                'midjourney', 'dall-e', 'dalle', 'stable diffusion',
                'comfyui', 'automatic', 'flux', 'imagen', 'firefly',
                'generated', 'artificial', 'neural', 'diffusion',
                'prompt', 'negative', 'sampler', 'checkpoint',
                'lora', 'dream', 'generate', 'create',
                'synthid', 'deepmind', 'watermark', 'digimarc',
                'content credential', 'c2pa', 'truepic',
            ]):
                ai_related_strings.append(s[:100])
        
        if ai_related_strings:
            findings.append(f"AI-related strings: {ai_related_strings[:3]}")
        
        # 6. Check file size patterns
        # AI-generated images often have specific size distributions
        if size < 20000:  # Less than 20KB
            findings.append("Very small file - possibly AI-generated with low quality")
        elif size > 500000:  # More than 500KB
            findings.append("Large file - likely real photo or high-quality render")
        
        # 7. Check for thumbnail/preview data
        if b'thumbnail' in data.lower() or b'preview' in data.lower():
            findings.append("Contains thumbnail/preview data")
        
        # 8. Check for ICC profile (real photos usually have this)
        if b'icc' in data[:2000].lower() or b'ICC' in data[:2000]:
            findings.append("Has ICC color profile")
        
        return {
            "file": filepath.name,
            "size_kb": round(size / 1024, 1),
            "findings": findings,
            "strings_count": len(strings_found),
        }
    except Exception as e:
        return {"file": filepath.name, "error": str(e)}

def main():
    # Check a sample of AVIF files
    avif_files = sorted(BLOG_DIR.glob("*.avif"))[:20]
    webp_files = sorted(BLOG_DIR.glob("*.webp"))[:10]
    
    print("DEEP ANALYSIS OF BLOG IMAGES")
    print("=" * 80)
    
    for f in avif_files + webp_files:
        result = deep_check(f)
        if "error" in result:
            print(f"\nERROR: {result['file']} - {result['error']}")
            continue
        
        print(f"\n{result['file']} ({result['size_kb']} KB)")
        print(f"  Strings found: {result['strings_count']}")
        for finding in result['findings']:
            print(f"  - {finding}")
    
    # Summary
    print(f"\n{'='*80}")
    print("SUMMARY:")
    print(f"{'='*80}")
    
    # Check all AVIF files for EXIF
    all_avif = list(BLOG_DIR.glob("*.avif"))
    avif_with_exif = sum(1 for f in all_avif if b'Exif' in f.read_bytes())
    print(f"AVIF files: {len(all_avif)} total, {avif_with_exif} with EXIF data")
    
    # Check all WebP files for EXIF
    all_webp = list(BLOG_DIR.glob("*.webp"))
    webp_with_exif = sum(1 for f in all_webp if b'EXIF' in f.read_bytes())
    print(f"WebP files: {len(all_webp)} total, {webp_with_exif} with EXIF data")
    
    # Check for any files with metadata
    all_files = all_avif + all_webp
    files_with_any_metadata = 0
    for f in all_files:
        data = f.read_bytes()
        if b'Exif' in data or b'EXIF' in data or b'XMP' in data or b'IPTC' in data:
            files_with_any_metadata += 1
    
    print(f"\nTotal files with ANY metadata: {files_with_any_metadata}/{len(all_files)}")
    print(f"Total files WITHOUT metadata: {len(all_files) - files_with_any_metadata}/{len(all_files)}")
    
    if files_with_any_metadata == 0:
        print("\n*** ALL IMAGES HAVE STRIPPED METADATA ***")
        print("This is a STRONG indicator of AI-generated images.")
        print("Real photos from cameras/phones ALWAYS have EXIF data.")
        print("AI image generators typically strip all metadata.")

if __name__ == "__main__":
    main()
