# JGPS Article Generator Skill

Automated daily article generation for Jai Govind Public School website (jgps.in).

## What It Does

1. **Researches Trending Topics**: Searches for latest education news, school admissions, exam updates
2. **Deep Research**: Collects official data, dates, eligibility, fees, syllabus
3. **Keyword Research**: Primary, secondary, long-tail, LSI, question-based keywords
4. **Article Generation**: Creates 1800-2200 word articles following JGPS format
5. **Semantic SEO**: Entity-based content, topical authority, knowledge graph
6. **GEO Optimization**: AI Overview ready, voice search, featured snippets
7. **Humanization**: Conversational tone, emotional hooks, relatable scenarios
8. **Technical SEO**: Schema markup (Article, FAQ, Breadcrumb, Speakable)
9. **Validation**: Quality checklist, readability, SEO compliance

## Usage

### Manual Run
```
/jgps-article-generator
```

### With Specific Topic
```
/jgps-article-generator "Sainik School Admission 2027"
```

### Daily Cron (Auto-run)
Schedule via MiMoCode cron:
```
cron schedule "0 8 * * *" "/jgps-article-generator"
```

## Output

- **Article**: Complete markdown article with all SEO elements
- **Schema**: JSON-LD schema markup (Article, FAQ, Breadcrumb)
- **Integration Code**: Ready-to-paste code for `articles.ts`
- **Image Prompt**: AI image generation prompt for blog image

## Article Format

Following `article-prompt.md` v3.0:

1. **SEO Meta**: Title (60 chars), Description (150-160 chars), Slug, Alt Text
2. **Opening**: Parent moment, keyword in 65 words, surprising stat
3. **What Is [Topic]?**: 3-4 paragraphs
4. **Eligibility & Dates**: Bullet points + table
5. **Syllabus**: Section-wise topics + exam pattern table
6. **Preparation Steps**: 5-6 numbered steps
7. **5 Mistakes**: What, Why, What to do instead
8. **People Also Ask**: 5 Q&A pairs
9. **Conclusion**: Summary + JGPS mention
10. **FAQ Schema**: JSON-LD
11. **Links**: Internal + External

## SEO Features

### Semantic SEO
- Entity-based content (names, dates, numbers, places)
- Topical authority signals (expert quotes, statistics)
- Contextual internal linking
- Semantic triples (Subject-Predicate-Object)
- E-E-A-T signals

### GEO (Generative Engine Optimization)
- Structured for AI Overview extraction
- Definitive answers (40-60 words) after H2s
- Comparison tables for featured snippets
- Step-by-step numbered lists
- "Key Takeaways" section
- Speakable content blocks

### Technical SEO
- Article Schema (JSON-LD)
- FAQ Schema (JSON-LD)
- Breadcrumb Schema
- Speakable Schema
- Open Graph tags
- Twitter Card tags
- Canonical URL

## Humanization

- Conversational tone ("you know what?", "here's the thing...")
- Emotional hooks (worry, hope, urgency, relief)
- Real-world scenarios (parent at kitchen table, child studying)
- Short, punchy sentences mixed with longer ones
- Rhetorical questions
- Cultural context (Indian parent concerns)
- Anti-AI detection (varied sentence length, contractions, filler words)

## Target Topics

| Topic | Main Keyword | Priority |
|-------|--------------|----------|
| Sainik School Admission | sainik school admission 2027 | High |
| Navodaya Vidyalaya | navodaya admission 2027 | High |
| AMU School Entrance | AMU school entrance 2027 | High |
| Vidyagyan School | Vidyagyan admission 2027 | Medium |
| RMS CET | Rashtriya Military School 2027 | Medium |
| CBSE Board | CBSE board exam 2027 | Medium |
| Education Policy | NEP 2020 updates | Low |

## Quality Checklist

Before publishing, verify:
- [ ] Main keyword in first 65 words
- [ ] Surprising stat in first 2 paragraphs
- [ ] Official link after dates table
- [ ] Max 15 words per sentence
- [ ] Max 3-4 lines per paragraph
- [ ] Flesch score 65+
- [ ] No banned words
- [ ] 5 FAQ questions
- [ ] Tables formatted
- [ ] Schema valid
- [ ] Internal links work
- [ ] Mobile responsive
- [ ] PageSpeed > 90

## Files

- Workflow: `.mimocode/workflows/daily-article-generator.js`
- Cron Version: `.mimocode/workflows/daily-article-cron.js`
- Article Template: `article-prompt.md`
- SEO Plan: `seo-complete-plan.md`
- Output: `generated-articles/` directory

## Integration

After article generation:

1. Copy article content to `src/data/articles.ts`
2. Add schema to `src/lib/schema.ts`
3. Create image at `/images/blog/[slug].avif`
4. Test at https://search.google.com/test/rich-results
5. Deploy and monitor in Google Search Console
