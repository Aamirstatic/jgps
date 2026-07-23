export const meta = {
  name: "daily-article-generator",
  description: "Daily automated trending article research + SEO-optimized humanized content generation for JGPS school website"
};

// ============================================================
// JGPS Daily Article Generator Workflow
// - Researches trending education topics
// - Generates SEO-optimized, humanized articles
// - Implements Semantic SEO, GEO, Schema markup
// - Follows JGPS article-prompt.md format
// ============================================================

const JGPS_CONTEXT = `
You are writing for Jai Govind Public School (JGPS), Joya, Amroha, UP.
Website: https://jgps.in
Target audience: Parents from UP, Bihar, Uttarakhand (small towns, rural areas)
Topics: School admissions (Sainik School, Navodaya, AMU, Vidyagyan, RMS), education tips, exam preparation
`;

const SEO_RULES = `
## SEO Rules (MANDATORY):
1. Main keyword in first 65 words
2. Surprising stat in first 2 paragraphs
3. Official link after dates table
4. Max 15 words per sentence
5. Max 3-4 lines per paragraph
6. Flesch score 65+
7. Simple English (Class 8 level)
8. Banned words: inevitably, simultaneously, rigorous, predominantly, conversely, commitment, proficiency, radically, irrespective, holistic, comprehensive, substantial, ensure, obtain, commence, endeavour, facilitate, leverage, approximately, demonstrate, significant, nurture, meritorious
`;

const GEO_RULES = `
## GEO (Generative Engine Optimization) Rules:
1. Structure content with clear H2/H3 hierarchy
2. Use bullet points and numbered lists for scannability
3. Include FAQ section with 5 questions (matches People Also Ask)
4. Add table-based comparisons for featured snippets
5. Use "What is X?", "How to Y?", "Why Z?" question formats in headings
6. Include definitive answers in 40-60 words after question headings
7. Add speakable schema for voice search
8. Include author E-E-A-T signals (expertise, experience)
9. Use entity-based content (specific names, dates, numbers)
10. Add internal linking to related JGPS pages
`;

const HUMANIZE_RULES = `
## Humanization Rules:
1. Start with a relatable parent moment (not "In this article...")
2. Use "you" and "your child" throughout (never "students should")
3. Include emotional hooks: worry, hope, urgency, relief
4. Add specific numbers and real facts (not vague claims)
5. Use short paragraphs that feel like conversation
6. Include rhetorical questions that a parent would ask
7. Add real-world examples and scenarios
8. Use transitional phrases: "Here's the thing...", "Now, this is important...", "Let me explain..."
9. End with actionable next steps (not generic conclusions)
10. Include a subtle JGPS mention (not an ad)
`;

// ============================================================
// PHASE 1: Trending Topic Research
// ============================================================
async function researchTrendingTopics() {
  phase("Phase 1: Trending Topic Research");

  const searchQueries = [
    "school admission 2027 India trending",
    "Sainik School news 2027 latest",
    "Navodaya Vidyalaya 2027 updates",
    "AMU school entrance 2027",
    "education policy India 2026 2027",
    "CBSE board exam 2027 news",
    "entrance exam preparation tips 2027",
    "best schools India admission open",
    "Vidyagyan school admission 2027",
    "Rashtriya Military School 2027"
  ];

  const trendingResults = await parallel(
    searchQueries.map(query => () =>
      agent(`Search for "${query}" and find the top 3 trending topics, news, or updates. Return: topic title, source URL, key points, and why it's trending. Format as JSON array.`, { schema: { type: "array", items: { type: "object", properties: { topic: { type: "string" }, source: { type: "string" }, keyPoints: { type: "array", items: { type: "string" } }, trendingReason: { type: "string" } } } } })
    )
  );

  log(`Found ${trendingResults.length} trending topic groups`);

  // Flatten and deduplicate
  const allTopics = trendingResults.flat().filter(Boolean);
  log(`Total unique trending topics: ${allTopics.length}`);

  return allTopics;
}

// ============================================================
// PHASE 2: Deep Research on Selected Topic
// ============================================================
async function deepResearchTopic(topic) {
  phase(`Phase 2: Deep Research - ${topic.topic}`);

  const researchQueries = [
    `${topic.topic} official website latest notification`,
    `${topic.topic} eligibility criteria 2027`,
    `${topic.topic} important dates deadline 2027`,
    `${topic.topic} exam pattern syllabus`,
    `${topic.topic} preparation tips strategy`,
    `${topic.topic} fees scholarship`,
    `${topic.topic} previous year cutoff`,
    `${topic.topic} success stories tips`
  ];

  const researchResults = await parallel(
    researchQueries.map(query => () =>
      agent(`Deep research: "${query}". Find official information, dates, eligibility, fees, syllabus, and expert tips. Return structured data with sources. Format as JSON.`, { schema: { type: "object", properties: { officialInfo: { type: "string" }, dates: { type: "object" }, eligibility: { type: "array", items: { type: "string" } }, fees: { type: "string" }, syllabus: { type: "array", items: { type: "string" } }, tips: { type: "array", items: { type: "string" } }, sources: { type: "array", items: { type: "string" } } } } })
    )
  );

  log(`Research complete for ${topic.topic}`);
  return researchResults.filter(Boolean);
}

// ============================================================
// PHASE 3: Keyword Research & SEO Planning
// ============================================================
async function keywordResearch(topic) {
  phase(`Phase 3: Keyword Research - ${topic.topic}`);

  const keywordData = await agent(`
    Research keywords for: "${topic.topic}"

    Find:
    1. Primary keyword (highest volume, most relevant)
    2. 5-7 secondary keywords
    3. Long-tail keywords (5-10)
    4. LSI (Latent Semantic Indexing) keywords
    5. Question-based keywords (People Also Ask)
    6. Related entity keywords

    Target audience: Indian parents (UP, Bihar, Uttarakhand)
    Language: English (simple, Class 8 level)

    Return as structured JSON with keyword, estimated volume, and difficulty.
  `, { schema: { type: "object", properties: { primary: { type: "string" }, secondary: { type: "array", items: { type: "string" } }, longTail: { type: "array", items: { type: "string" } }, lsi: { type: "array", items: { type: "string" } }, questions: { type: "array", items: { type: "string" } }, entities: { type: "array", items: { type: "string" } } } } });

  log(`Keywords identified: ${keywordData?.secondary?.length || 0} secondary, ${keywordData?.longTail?.length || 0} long-tail`);
  return keywordData;
}

// ============================================================
// PHASE 4: Article Generation (Humanized + SEO)
// ============================================================
async function generateArticle(topic, research, keywords) {
  phase(`Phase 4: Article Generation - ${topic.topic}`);

  const articlePrompt = `
${JGPS_CONTEXT}

## Article Details:
- TOPIC: ${topic.topic}
- MAIN KEYWORD: ${keywords.primary}
- SECONDARY KEYWORDS: ${keywords.secondary.join(', ')}
- LONG-TAIL KEYWORDS: ${keywords.longTail.join(', ')}
- TARGET READER: Parents of Class 4-8 students in UP, Bihar, Uttarakhand
- ARTICLE LENGTH: 1800-2200 words
- JGPS MENTION: subtle

## Research Data:
${JSON.stringify(research, null, 2)}

${SEO_RULES}

${GEO_RULES}

${HUMANIZE_RULES}

## Article Structure (FOLLOW EXACTLY):

### PART 1 — SEO META
- SEO Title: (Max 60 chars, keyword in first 4 words)
- Meta Description: (150-160 chars, keyword included, soft CTA)
- URL Slug: (lowercase, hyphens, keyword-first)
- Image Alt Text: (descriptive, keyword included)

### PART 2 — FULL ARTICLE

#### OPENING (No heading, first 80 words)
- Start with a relatable parent moment
- Include main keyword in first 65 words
- Add surprising stat/fact in first 2 paragraphs

#### H2: What Is [Topic]?
- 3-4 short paragraphs
- H3: Daily Life / How It Works (2-3 paragraphs)

#### H2: Who Can Apply — Eligibility & Dates 2027
- H3: Age and Class Rules (bullet points)
- H3: Important Dates 2027 (table format)
- MANDATORY: Official link after dates table

#### H2: What Will Your Child Study — Syllabus
- H3: Section-wise Topics (bullet points)
- H3: Exam Pattern (table format)

#### H2: How to Prepare — Step by Step Plan
- 5-6 numbered steps with bold titles
- Specific, actionable advice

#### H2: 5 Mistakes Parents Must Avoid
- Exactly 5 mistakes
- Each: What, Why it hurts, What to do instead

#### H2: People Also Ask
- Exactly 5 Q&A pairs
- Bold numbers/dates in answers

#### CONCLUSION
- 2 paragraphs only
- Summary + subtle JGPS mention

### PART 3 — FAQ SCHEMA (JSON-LD)
- 5 questions matching the FAQ section
- Proper Schema.org format

### PART 4 — INTERNAL & EXTERNAL LINKS
- 3-4 official external links
- 3-4 JGPS internal links

### PART 5 — SELF CHECK
- 13 points checklist (all must be ✅)

## OUTPUT FORMAT:
Return the complete article with all 5 parts, ready to be added to the website.
`;

  const article = await agent(articlePrompt);
  log(`Article generated: ${article?.length || 0} characters`);
  return article;
}

// ============================================================
// PHASE 5: Semantic SEO Enhancement
// ============================================================
async function enhanceSemanticSEO(article, keywords) {
  phase("Phase 5: Semantic SEO Enhancement");

  const enhanced = await agent(`
    Enhance this article with advanced Semantic SEO:

    ORIGINAL ARTICLE:
    ${article}

    KEYWORDS: ${keywords.primary}, ${keywords.secondary.join(', ')}

    ## Semantic SEO Enhancements:
    1. Add entity-based content (specific names, dates, numbers, places)
    2. Include topical authority signals (expert quotes, statistics, citations)
    3. Add contextual internal linking (related topics, pillar pages)
    4. Include semantic triples (Subject-Predicate-Object relationships)
    5. Add speakable content blocks for voice search
    6. Include knowledge graph entities
    7. Add E-E-A-T signals (Experience, Expertise, Authoritativeness, Trustworthiness)
    8. Include "About" and "Mentions" schema markup
    9. Add breadcrumb navigation context
    10. Include related questions and answers

    ## GEO Enhancements:
    1. Structure for AI Overview extraction
    2. Add definitive answers (40-60 words) after each H2
    3. Include comparison tables for featured snippets
    4. Add step-by-step numbered lists
    5. Include "Key Takeaways" section
    6. Add "Quick Answer" box at the top

    Return the enhanced article maintaining the original structure.
  `);

  log("Semantic SEO enhancement complete");
  return enhanced;
}

// ============================================================
// PHASE 6: Humanization Pass
// ============================================================
async function humanizeArticle(article) {
  phase("Phase 6: Humanization Pass");

  const humanized = await agent(`
    Humanize this article to sound like it was written by a real Indian parent/education expert:

    ORIGINAL ARTICLE:
    ${article}

    ## Humanization Checklist:
    1. ✅ Start with emotion (worry, hope, curiosity)
    2. ✅ Use conversational tone ("you know what?", "here's the thing...")
    3. ✅ Add relatable scenarios (parent at kitchen table, child studying)
    4. ✅ Include real-world examples (specific schools, real cutoffs)
    5. ✅ Use short, punchy sentences mixed with longer ones
    6. ✅ Add rhetorical questions ("Ever wondered why...?")
    7. ✅ Include cultural context (Indian parent concerns, family expectations)
    8. ✅ Use analogies and metaphors ("Think of it like...")
    9. ✅ Add urgency without being pushy ("Time is running out...")
    10. ✅ End with hope and actionable steps

    ## Anti-AI Detection:
    - Vary sentence length (some 5 words, some 20)
    - Use contractions (don't, can't, won't)
    - Add filler words naturally (well, actually, honestly)
    - Include personal anecdotes ("I've seen parents...")
    - Use colloquial expressions ("trust me on this")
    - Add minor imperfections (starting with "And" or "But")

    ## Maintain:
    - SEO structure (H2/H3 hierarchy)
    - Keywords naturally placed
    - Tables and lists intact
    - FAQ section complete
    - Schema markup unchanged

    Return the humanized article.
  `);

  log("Humanization complete");
  return humanized;
}

// ============================================================
// PHASE 7: Schema & Technical SEO
// ============================================================
async function addTechnicalSEO(article, keywords) {
  phase("Phase 7: Technical SEO & Schema");

  const technicalSEO = await agent(`
    Add technical SEO elements to this article:

    ARTICLE:
    ${article}

    KEYWORD: ${keywords.primary}

    ## Add These Technical Elements:

    ### 1. Article Schema (JSON-LD)
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "[extracted title]",
      "description": "[extracted description]",
      "image": "[generated image path]",
      "author": {
        "@type": "Person",
        "name": "JGPS Content Team",
        "url": "https://jgps.in/about"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Jai Govind Public School",
        "logo": {
          "@type": "ImageObject",
          "url": "https://jgps.in/images/school-logo.avif"
        }
      },
      "datePublished": "[today's date]",
      "dateModified": "[today's date]",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://jgps.in/blog/[slug]"
      }
    }

    ### 2. FAQ Schema (already in article, verify format)

    ### 3. Breadcrumb Schema
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://jgps.in"},
        {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://jgps.in/blog"},
        {"@type": "ListItem", "position": 3, "name": "[Article Title]", "item": "https://jgps.in/blog/[slug]"}
      ]
    }

    ### 4. Speakable Schema (for voice search)
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", ".quick-answer", ".key-takeaways"]
      }
    }

    ### 5. Meta Tags
    - <title> (60 chars max)
    - <meta name="description"> (150-160 chars)
    - <meta name="keywords">
    - <link rel="canonical">
    - Open Graph tags (og:title, og:description, og:image, og:type)
    - Twitter Card tags

    Return the complete article with all technical SEO elements included as code blocks.
  `);

  log("Technical SEO added");
  return technicalSEO;
}

// ============================================================
// PHASE 8: Final Validation & Output
// ============================================================
async function validateAndOutput(article, keywords) {
  phase("Phase 8: Final Validation");

  const validation = await agent(`
    Validate this article against JGPS quality standards:

    ARTICLE:
    ${article}

    ## Validation Checklist:

    ### SEO Validation:
    [ ] Main keyword in first 65 words?
    [ ] Keyword density 1-2% (not stuffed)?
    [ ] Meta title under 60 characters?
    [ ] Meta description 150-160 characters?
    [ ] URL slug keyword-first, lowercase, hyphenated?
    [ ] H2/H3 hierarchy correct?
    [ ] Internal links present (3-4)?
    [ ] External official links present?

    ### Content Validation:
    [ ] Flesch score 65+?
    [ ] Max 15 words per sentence?
    [ ] Max 3-4 lines per paragraph?
    [ ] No banned words?
    [ ] "You" and "your child" used throughout?
    [ ] Surprising stat in first 2 paragraphs?
    [ ] 5 FAQ questions present?
    [ ] Tables formatted correctly?

    ### Technical Validation:
    [ ] Article schema valid JSON-LD?
    [ ] FAQ schema valid JSON-LD?
    [ ] Breadcrumb schema present?
    [ ] Meta tags complete?
    [ ] Open Graph tags present?

    ### Humanization Validation:
    [ ] Conversational tone?
    [ ] Emotional hooks present?
    [ ] Real-world examples?
    [ ] Cultural context included?
    [ ] No AI-sounding phrases?

    Return validation results and the FINAL article (fixed if needed).
    Output format: Complete article ready for website integration.
  `);

  log("Validation complete");
  return validation;
}

// ============================================================
// PHASE 9: Generate Website Integration Code
// ============================================================
async function generateIntegrationCode(article, keywords, topic) {
  phase("Phase 9: Website Integration Code");

  const slug = keywords.primary.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

  const integrationCode = `
// ============================================================
// Article Integration Code for JGPS Website
// Generated: ${new Date().toISOString()}
// Topic: ${topic.topic}
// ============================================================

// 1. Add to src/data/articles.ts
// Copy the article object below and add to the articles array:

{
  slug: '${slug}',
  title: '[EXTRACT FROM ARTICLE]',
  description: '[EXTRACT FROM ARTICLE - Meta Description]',
  keywords: '${keywords.primary}, ${keywords.secondary.join(', ')}',
  date: "${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}, ${new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}",
  author: "JGPS Content Team",
  authorName: "JGPS Content Team",
  authorSlug: "jgps-content-team",
  authorRole: "Education Content Writer",
  authorBio: "Expert education content team at Jai Govind Public School, specializing in school admissions and exam preparation guides.",
  readTime: "[CALCULATE] mins",
  category: "Admissions & Test Prep",
  image: "/images/blog/${slug}.avif",
  imageAlt: "[EXTRACT FROM ARTICLE - Image Alt Text]",
  content: \`[PASTE FULL ARTICLE HTML CONTENT HERE]\`,
  faqs: [
    {
      "question": "[FAQ 1]",
      "answer": "[FAQ 1 Answer]"
    },
    // ... add all 5 FAQs
  ]
},

// 2. Add Schema Markup to src/lib/schema.ts
// Add the article schema to the schema graph

// 3. Update Sitemap (automatic via src/app/sitemap.ts)

// 4. Create Image
// Generate image: /images/blog/${slug}.avif
// Alt text: [from article]

// 5. Test Checklist:
// [ ] Article renders correctly on /blog/${slug}
// [ ] Schema validates at https://search.google.com/test/rich-results
// [ ] PageSpeed score > 90
// [ ] Mobile responsive
// [ ] Internal links work
// [ ] FAQ section expands/collapses
`;

  log(`Integration code generated for slug: ${slug}`);
  return integrationCode;
}

// ============================================================
// MAIN WORKFLOW EXECUTION
// ============================================================
async function main() {
  phase("JGPS Daily Article Generator - Starting");

  // Step 1: Research trending topics
  const trendingTopics = await researchTrendingTopics();

  if (!trendingTopics || trendingTopics.length === 0) {
    log("No trending topics found. Using default topics.");
    trendingTopics.push({
      topic: "School Admission 2027 Complete Guide",
      source: "Default",
      keyPoints: ["New admission season", "Updated eligibility", "Important dates"],
      trendingReason: "Annual admission cycle"
    });
  }

  // Step 2: Select top topic (most relevant/trending)
  const selectedTopic = trendingTopics[0];
  log(`Selected topic: ${selectedTopic.topic}`);

  // Step 3: Deep research
  const research = await deepResearchTopic(selectedTopic);

  // Step 4: Keyword research
  const keywords = await keywordResearch(selectedTopic);

  // Step 5: Generate article
  let article = await generateArticle(selectedTopic, research, keywords);

  // Step 6: Enhance with Semantic SEO
  article = await enhanceSemanticSEO(article, keywords);

  // Step 7: Humanize
  article = await humanizeArticle(article);

  // Step 8: Add technical SEO
  article = await addTechnicalSEO(article, keywords);

  // Step 9: Validate
  article = await validateAndOutput(article, keywords);

  // Step 10: Generate integration code
  const integrationCode = await generateIntegrationCode(article, keywords, selectedTopic);

  // Final output
  phase("Workflow Complete");

  return {
    topic: selectedTopic,
    keywords: keywords,
    article: article,
    integrationCode: integrationCode,
    timestamp: new Date().toISOString(),
    status: "SUCCESS"
  };
}

// Execute
return await main();
