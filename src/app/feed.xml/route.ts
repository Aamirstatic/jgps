import { articles } from '@/data/articles';
import { hindiArticles } from '@/data/hindi-articles';

export const dynamic = 'force-static';

function escapeXml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

function safeDate(dateStr: string): string {
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? new Date().toUTCString() : d.toUTCString();
}

export async function GET() {
  const baseUrl = 'https://jgps.in';

  const englishItems = articles.map(article => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${baseUrl}/blog/${article.slug}/</link>
      <guid>${baseUrl}/blog/${article.slug}/</guid>
      <pubDate>${safeDate(article.date)}</pubDate>
      <description><![CDATA[${article.description}]]></description>
      <category><![CDATA[${article.category}]]></category>
      <author><![CDATA[${article.author}]]></author>
      <enclosure url="${baseUrl}${escapeXml(article.image)}" length="0" type="image/webp" />
    </item>
  `).join('');

  const hindiItems = hindiArticles.map(article => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${baseUrl}/hi/blog/${article.slug}/</link>
      <guid>${baseUrl}/hi/blog/${article.slug}/</guid>
      <pubDate>${safeDate(article.date)}</pubDate>
      <description><![CDATA[${article.description}]]></description>
      <category><![CDATA[${article.category}]]></category>
      <author><![CDATA[${article.author}]]></author>
      <enclosure url="${baseUrl}${escapeXml(article.image)}" length="0" type="image/webp" />
    </item>
  `).join('');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">
    <channel>
      <title>Jai Govind Public School - Blog &amp; News</title>
      <link>${baseUrl}</link>
      <description>Latest educational news, student life tips, and admission guides from Jai Govind Public School.</description>
      <language>en</language>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
      <image>
        <url>${baseUrl}/images/school-logo.avif</url>
        <title>Jai Govind Public School</title>
        <link>${baseUrl}</link>
      </image>
      ${englishItems}
      ${hindiItems}
    </channel>
  </rss>`;

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate',
    },
  });
}
