export const meta = {
  name: "daily-article-cron",
  description: "Lightweight daily article generation workflow for cron scheduling"
};

// Simplified daily workflow for cron execution
// Runs faster, uses cached research patterns

const ARTICLE_TEMPLATE = `
You are an SEO content writer for Jai Govind Public School (JGPS), Joya, Amroha, UP.
Website: https://jgps.in
Target: Parents from UP, Bihar, Uttarakhand

TASK: Generate a complete, humanized, SEO-optimized article.

TOPIC: {topic}
MAIN KEYWORD: {keyword}
SECONDARY KEYWORDS: {secondary_keywords}

RULES:
1. Main keyword in first 65 words
2. Surprising stat in first 2 paragraphs
3. Max 15 words per sentence
4. Max 3-4 lines per paragraph
5. Flesch score 65+
6. Use "you" and "your child"
7. Start with parent moment (not "In this article")
8. Include 5 FAQ questions
9. Add tables for dates/comparisons
10. Subtle JGPS mention in conclusion

STRUCTURE:
- SEO Meta (title, description, slug, alt text)
- Opening (80 words, emotional hook)
- H2: What Is [Topic]?
- H2: Eligibility & Dates 2027 (table)
- H2: Syllabus & Exam Pattern
- H2: Preparation Steps (5 steps)
- H2: 5 Mistakes to Avoid
- H2: People Also Ask (5 Q&As)
- Conclusion (2 paragraphs)
- FAQ Schema (JSON-LD)
- Internal/External Links

OUTPUT: Complete article with schema markup, ready for website integration.
`;

async function main() {
  phase("Daily Article Cron - Starting");

  // Step 1: Quick trending search
  const trending = await agent(
    "Search for the most trending school admission or education topic in India right now. Focus on: Sainik School, Navodaya, AMU, Vidyagyan, RMS, CBSE, or education policy. Return: topic name and why it's trending.",
    { schema: { type: "object", properties: { topic: { type: "string" }, keyword: { type: "string" }, reason: { type: "string" } } } }
  );

  log(`Trending topic: ${trending?.topic}`);

  // Step 2: Quick research
  const research = await agent(
    `Research "${trending?.topic}" for a school admission blog. Find: official dates, eligibility, fees, syllabus, exam pattern, preparation tips. Return structured data.`,
    { schema: { type: "object", properties: { dates: { type: "object" }, eligibility: { type: "array" }, fees: { type: "string" }, syllabus: { type: "array" }, tips: { type: "array" } } } }
  );

  // Step 3: Generate article
  const article = await agent(
    ARTICLE_TEMPLATE
      .replace('{topic}', trending?.topic || 'School Admission 2027')
      .replace('{keyword}', trending?.keyword || 'school admission 2027')
      .replace('{secondary_keywords}', 'admission, eligibility, exam, preparation')
    + '\n\nRESEARCH DATA:\n' + JSON.stringify(research, null, 2)
  );

  // Step 4: Save to file
  const slug = (trending?.keyword || 'article').toLowerCase().replace(/\s+/g, '-');
  const outputPath = `./generated-articles/${slug}-${Date.now()}.md`;

  await writeFile(outputPath, article);
  log(`Article saved to: ${outputPath}`);

  // Step 5: Generate integration snippet
  const snippet = `
// Add to src/data/articles.ts
{
  slug: '${slug}',
  title: '[EXTRACT FROM ARTICLE]',
  description: '[META DESCRIPTION]',
  date: "${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}",
  author: "JGPS Content Team",
  readTime: "[X] mins",
  category: "Admissions & Test Prep",
  image: "/images/blog/${slug}.avif",
  content: \`[PASTE ARTICLE CONTENT]\`,
  faqs: [/* ADD 5 FAQs */]
}
`;

  await writeFile(`./generated-articles/${slug}-integration.md`, snippet);
  log("Integration snippet saved");

  return {
    topic: trending?.topic,
    articlePath: outputPath,
    status: "SUCCESS"
  };
}

return await main();
