import re

with open("src/data/hindi-articles.ts", "r", encoding="utf-8") as f:
    content = f.read()

lines = content.split("\n")
result = []
i = 0
added = 0

while i < len(lines):
    line = lines[i]
    result.append(line)
    
    if "faqs:" in line and "[" in line:
        has_links = False
        for j in range(max(0, i-50), i):
            if "संबंधित लेख" in lines[j]:
                has_links = True
                break
        
        if not has_links:
            links_html = '''

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">संबंधित लेख</h2>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
<a href="/hi/blog/jnvst-2027-exam-pattern-hindi/" class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
<h3 class="font-bold text-green-700 text-sm mb-1">JNVST Exam Pattern 2027</h3>
<p class="text-gray-600 text-xs">80 प्रश्न, नया pattern — पूरी जानकारी</p>
</a>
<a href="/hi/blog/jnvst-2027-mental-ability-50-questions-hindi/" class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
<h3 class="font-bold text-green-700 text-sm mb-1">Mental Ability 50 Questions</h3>
<p class="text-gray-600 text-xs">Practice questions with answers</p>
</a>
<a href="/hi/blog/jnvst-admit-card-2027-kab-aayega/" class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
<h3 class="font-bold text-green-700 text-sm mb-1">JNVST Admit Card 2027</h3>
<p class="text-gray-600 text-xs">Admit Card download करें</p>
</a>
<a href="/hi/blog/jnvst-2027-answer-key-download-navodaya-class-6/" class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
<h3 class="font-bold text-green-700 text-sm mb-1">JNVST Answer Key 2027</h3>
<p class="text-gray-600 text-xs">Answer Key download और score calculate</p>
</a>
</div>
'''
            result.append(links_html)
            added += 1
    
    i += 1

with open("src/data/hindi-articles.ts", "w", encoding="utf-8") as f:
    f.write("\n".join(result))

print(f"Added internal links to {added} articles")
