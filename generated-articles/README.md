# Generated Articles

This directory contains auto-generated articles from the JGPS Daily Article Generator workflow.

## Files

- `*.md` - Generated articles with full SEO markup
- `*-integration.md` - Code snippets for website integration

## How to Use

1. Review the generated article
2. Copy content to `src/data/articles.ts`
3. Add schema markup to `src/lib/schema.ts`
4. Create blog image at `/images/blog/[slug].avif`
5. Test schema at https://search.google.com/test/rich-results
6. Deploy and monitor in Google Search Console

## Auto-Generation

Articles are generated daily via MiMoCode workflow:
- Workflow: `.mimocode/workflows/daily-article-generator.js`
- Cron: `.mimocode/workflows/daily-article-cron.js`

## Quality

Each article includes:
- SEO-optimized title and description
- Humanized, conversational content
- Semantic SEO and GEO optimization
- Schema markup (Article, FAQ, Breadcrumb)
- Internal and external links
- FAQ section with 5 questions
