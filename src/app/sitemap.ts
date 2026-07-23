import { MetadataRoute } from 'next';
import { articles } from '@/data/articles';
import { hindiArticles } from '@/data/hindi-articles';
import { authors } from '@/data/authors';

export const dynamic = 'force-static';

function safeDate(dateStr: string): string {
  // Try parsing as-is first
  let d = new Date(dateStr);
  if (!isNaN(d.getTime())) return d.toISOString();

  // Parse Hindi date format: "23 जुलाई 2026, सुबह 8 बजकर 00 मिनट"
  const hindiMonths: Record<string, string> = {
    'जनवरी': 'January', 'फरवरी': 'February', 'मार्च': 'March',
    'अप्रैल': 'April', 'मई': 'May', 'जून': 'June',
    'जुलाई': 'July', 'अगस्त': 'August', 'सितंबर': 'September',
    'अक्टूबर': 'October', 'नवंबर': 'November', 'दिसंबर': 'December'
  };

  const match = dateStr.match(/(\d+)\s+(\S+)\s+(\d{4})/);
  if (match) {
    const day = match[1];
    const monthHi = match[2];
    const year = match[3];
    const monthEn = hindiMonths[monthHi] || monthHi;
    d = new Date(`${monthEn} ${day}, ${year}`);
    if (!isNaN(d.getTime())) return d.toISOString();
  }

  return new Date('2026-07-23').toISOString();
}

// Determine changefreq based on article freshness
function getChangeFreq(dateStr: string): 'daily' | 'weekly' | 'monthly' {
  const lastMod = new Date(safeDate(dateStr));
  const now = new Date('2026-07-23');
  const daysDiff = Math.floor((now.getTime() - lastMod.getTime()) / (1000 * 60 * 60 * 24));
  
  if (daysDiff <= 7) return 'daily';    // Fresh articles
  if (daysDiff <= 30) return 'weekly';  // Recent articles
  return 'monthly';                      // Older articles
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jgps.in';

  // Core site pages
  const routes = [
    { url: `${baseUrl}/`, lastModified: new Date('2026-07-23').toISOString(), changeFrequency: 'daily' as const, priority: 1.0 },
    { url: `${baseUrl}/blog/`, lastModified: new Date('2026-07-23').toISOString(), changeFrequency: 'daily' as const, priority: 0.9 },
    { url: `${baseUrl}/authors/`, lastModified: new Date('2026-07-23').toISOString(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/about/`, lastModified: new Date('2026-07-04').toISOString(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/admission/`, lastModified: new Date('2026-07-04').toISOString(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/coaching/`, lastModified: new Date('2026-07-04').toISOString(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/contact/`, lastModified: new Date('2026-07-04').toISOString(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/faq/`, lastModified: new Date('2026-07-04').toISOString(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/gallery/`, lastModified: new Date('2026-07-04').toISOString(), changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${baseUrl}/resources/`, lastModified: new Date('2026-07-04').toISOString(), changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/facilities/`, lastModified: new Date('2026-07-04').toISOString(), changeFrequency: 'monthly' as const, priority: 0.5 },
  ];

  // Static sub-pages
  const staticPages = [
    '/about/vision-mission/', '/about/principal-message/', '/about/achievements/',
    '/about/history/', '/about/staff/',
    '/academics/', '/academics/curriculum/', '/academics/pre-primary/',
    '/academics/primary/', '/academics/middle-school/', '/academics/co-curricular/',
    '/admission/guidelines/',
    '/coaching/amu-entrance/', '/coaching/amu-entrance/eligibility-and-dates/',
    '/coaching/amu-entrance/previous-year-papers/', '/coaching/amu-entrance/syllabus/',
    '/coaching/jmi-entrance/', '/coaching/jmi-entrance/eligibility-and-dates/',
    '/coaching/jmi-entrance/previous-year-papers/', '/coaching/jmi-entrance/syllabus/',
    '/coaching/military-school/', '/coaching/military-school/eligibility-and-dates/',
    '/coaching/military-school/previous-year-papers/', '/coaching/military-school/syllabus/',
    '/coaching/sainik-school/', '/coaching/sainik-school/eligibility-and-dates/',
    '/coaching/sainik-school/previous-year-papers/', '/coaching/sainik-school/syllabus/',
    '/coaching/vidyagyan-school/', '/coaching/vidyagyan-school/eligibility-and-dates/',
    '/coaching/vidyagyan-school/previous-year-papers/', '/coaching/vidyagyan-school/syllabus/',
    '/entrance-eligibility-checker/',
    '/facilities/school-bus-transport/',
    '/resources/amu-class-6-syllabus-and-papers/', '/resources/navodaya-class-6-papers/',
    '/resources/rms-cet-military-school-syllabus/', '/resources/sainik-school-question-papers/',
    '/resources/syllabus-and-study-materials/', '/resources/vidyagyan-school-syllabus-and-eligibility/',
    '/privacy-policy/', '/terms-and-conditions/', '/cookie-policy/', '/disclaimer/',
    '/sitemap/', '/feed.xml',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2026-07-04').toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  // English blog articles - each with its OWN lastmod
  const blogRoutes = articles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}/`,
    lastModified: safeDate(article.date),
    changeFrequency: getChangeFreq(article.date),
    priority: 0.7,
  }));

  // Hindi pages
  const hindiBase = [
    { url: `${baseUrl}/hi/`, lastModified: new Date('2026-07-23').toISOString(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/hi/blog/`, lastModified: new Date('2026-07-23').toISOString(), changeFrequency: 'daily' as const, priority: 0.8 },
  ];

  // Hindi blog articles - each with its OWN lastmod
  const hindiBlogRoutes = hindiArticles.map((article) => ({
    url: `${baseUrl}/hi/blog/${article.slug}/`,
    lastModified: safeDate(article.date),
    changeFrequency: getChangeFreq(article.date),
    priority: 0.7,
  }));

  // Author pages
  const authorRoutes = authors.map((author) => ({
    url: `${baseUrl}/author/${author.slug}/`,
    lastModified: new Date('2026-07-23').toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...staticPages, ...blogRoutes, ...hindiBase, ...hindiBlogRoutes, ...authorRoutes];
}
