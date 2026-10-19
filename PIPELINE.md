# JGPS Content Pipeline (jgps.in)

Daily publishing pipeline for jgps.in — Jai Govind Public School (Joya, Amroha).
Next.js site, deployed via Cloudflare Pages from GitHub repo `Aamirstatic/jgps` (branch master).
**4 articles/day**, one per run, at IST slots: 07:15 (morning), 11:15 (latenoon), 14:15 (afternoon), 18:15 (evening).

## How articles work on this site

Articles are TypeScript objects in `src/data/articles.ts` (`export const articles: Article[]`).
The blog route (`src/app/blog/[slug]`) renders each entry; the sitemap (`src/app/sitemap.ts`)
auto-includes every entry. Push to master = Cloudflare Pages rebuilds and deploys.

Article object shape (see `src/data/articles.ts` `Article` interface):
- `slug` (unique, kebab-case), `title`, `description` (meta, ≤160 chars), `keywords`
- `date` — **English format**, e.g. `"19 October 2026, 10:15 AM"` (old articles use Hindi
  timestamps; all NEW articles use English — do not copy the Hindi format)
- `modifiedDate` — English, e.g. `"October 19, 2026"`
- `author` / `authorName` / `authorSlug` / `authorRole` / `authorBio` — use EXISTING authors
  from `src/data/authors.ts` only (amit-kumar, priya-verma, neha-singh, ravi-prakash,
  rifaul-hasan, najma). Rotate sensibly by category; never invent new authors.
- `readTime` (e.g. `'8 mins'`), `category`, `image: "/images/blog/<slug>.webp"`,
  `imageAlt`, `content` (HTML string, backtick template), `faqs` (4–6 Q/A)

## Content rules (all runs)

1. **English only.** No Devanagari/Hinglish anywhere in new articles.
2. **Verification bar = Sainik pipeline:** one Tier-1 source or two independent Tier-2
   sources per hard fact (dates, fees, cutoffs, quotas, names). CONFIRMED/EXPECTED labels.
   NEVER invent dates, fees, cutoffs, quotas, percentages, quotes, or school statistics.
3. **No cannibalization with sainikschooleastsiang.in.** The Sainik site owns general
   AISSEE explainers. JGPS blog angles: coaching method (AMU/JMI/Navodaya/Sainik),
   local Amroha/UP parent guides, admissions/school-life, parenting. When an AISSEE
   topic overlaps, use a distinct coaching/classroom angle — check the other repo's
   `content/blog` + `content/news` slugs before writing.
4. **School claims:** the site states 15+ years, 500+ entrance selections, 25:1 ratio.
   Articles may reference these as the school's stated figures; never invent new ones.
5. **Structure:** h1 + `<p><em>Last verified: <date> | Reading Time: N min | Author: <name></em></p>`,
   h2s with class `text-2xl font-bold text-gray-900 mt-10 mb-4`, one original
   table/checklist, 4–6 FAQs, internal links (descriptive anchors) to jgps.in coaching
   pages and related blog slugs, one CTA box (`bg-[#035c00]/5 ...`) pointing to
   +91 9997161490 / admissions. 800–1200 words of prose.
6. **Images:** `python3 ~/workspace/scripts/cracku_style.py --clean --photo <photo>
   --out public/images/blog/<slug>.webp --size 1200x675` — clean REAL Pexels photos only,
   no text overlay, never AI-generated. Photos from `static/images/photos/` (MANIFEST.md).
7. **Dedup:** `data/pipeline-log.json` is the source of truth (cursor + entries).
   Also grep `src/data/articles.ts` slugs. Never reuse a slug or topic id.

## Run steps (each of the 4 daily crons)

0. Repo `~/workspace/jgps`, branch master. Read this file + `data/pipeline-log.json`.
   If git status dirty, recover (stash/discard per situation; never lose pushed work).
1. Pick topic: next unused id from `data/blog-topics.yaml` after `blog_topic_cursor`
   (skip ids already in log or as slugs). If a genuinely hot parent-relevant development
   (exam date/coaching news, last 48h) exists AND isn't covered, it may take the slot —
   still log it and do not advance the cursor.
2. Web-research the topic (Tier-1/2 sources, open them), write the article HTML.
3. Generate image via cracku_style.py into `public/images/blog/<slug>.webp`.
4. Append via `python3 ~/workspace/scripts/jgps_add_article.py --json <article.json>` —
   validates fields, dedups slug, inserts before the array close, then re-imports the
   file with node to prove the TS is still valid. Fix on failure; never push broken TS.
5. Update `data/pipeline-log.json` (cursor, entry). Push with gh_push.py (UNCOMMITTED
   changes only — do NOT commit first; `git reset` first if anything got staged):
   `PYTHONPATH=/opt/muse/skills/custom-connector-setup/bin python3
   ~/workspace/custom-connectors/custom.legacy-github/bin/gh_push.py
   --repo-dir ~/workspace/jgps --repo Aamirstatic/jgps --message "..."`.
   Then `git fetch origin && git reset --hard origin/master` inside ~/workspace/jgps.
6. Submit the new URL `https://jgps.in/blog/<slug>/` to IndexNow
   (curl POST https://api.indexnow.org/indexnow, key from Sainik pipeline) AND to
   `python3 ~/workspace/scripts/google_indexing.py` (200 per URL; never print the key).
7. Final message: title + slug + push confirmation, 3–4 lines max.

## Cron slots

- `jgps-daily-morning` 07:15 IST · `jgps-daily-latenoon` 11:15 IST
- `jgps-daily-afternoon` 14:15 IST · `jgps-daily-evening` 18:15 IST
- Owner: `goal:jgps-website-content-pipeline`. Bodies under
  `~/workspace/goals/jgps-website-content-pipeline/crons/daily/`.
