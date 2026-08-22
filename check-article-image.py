import re

# Check specific article image path
content = open(r"D:\school website - Copy\jai-govind-school\src\data\articles.ts", encoding="utf-8").read()

# Find the sainik-school-fees article
pattern = r"slug:\s*['\"]sainik-school-fees-2027-structure['\"]"
match = re.search(pattern, content)

if match:
    # Get surrounding context
    start = max(0, match.start() - 100)
    end = min(len(content), match.end() + 500)
    block = content[start:end]
    
    # Find image path
    img_match = re.search(r"image:\s*['\"]([^'\"]+)['\"]", block)
    if img_match:
        print(f"Image path: {img_match.group(1)}")
    else:
        print("Image path not found in block")
else:
    print("Article not found")
