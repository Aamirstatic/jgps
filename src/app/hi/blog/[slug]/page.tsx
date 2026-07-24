import { notFound } from 'next/navigation';
import { hindiArticles } from '@/data/hindi-articles';
import { authors } from '@/data/authors';
import HindiArticleTemplate from '@/components/HindiArticleTemplate';

// Parse Hindi date strings like "24 जुलाई 2026, शाम 1 बजकर 12 मिनट"
function parseHindiDate(str: string): Date | null {
  if (!str) return null;
  const months: Record<string, number> = {
    'जनवरी': 0, 'फरवरी': 1, 'मार्च': 2, 'अप्रैल': 3, 'मई': 4, 'जून': 5,
    'जुलाई': 6, 'अगस्त': 7, 'सितंबर': 8, 'अक्टूबर': 9, 'नवंबर': 10, 'दिसंबर': 11
  };
  // Pattern: "24 जुलाई 2026, शाम 1 बजकर 12 मिनट" or "24 जुलाई 2026"
  const match = str.match(/(\d+)\s+(\S+)\s+(\d{4})(?:,\s*(सुबह|शाम)\s+(\d+)\s+बजकर\s+(\d+)\s+मिनट)?/);
  if (!match) return null;
  const day = parseInt(match[1]);
  const month = months[match[2]];
  const year = parseInt(match[3]);
  if (month === undefined) return null;
  let hours = 0, minutes = 0;
  if (match[4]) {
    hours = parseInt(match[5]);
    minutes = parseInt(match[6]);
    if (match[4] === 'शाम' && hours < 12) hours += 12;
  }
  return new Date(year, month, day, hours, minutes);
}

export async function generateStaticParams() {
  return hindiArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = hindiArticles.find((a) => a.slug === slug);

  if (!article) {
    return { title: 'Article Not Found' };
  }

  const articleDate = parseHindiDate(article.date) || new Date(article.date);
  const isoDate = isNaN(articleDate.getTime()) ? new Date().toISOString() : articleDate.toISOString();
  const modifiedDateVal = article.modifiedDate ? (parseHindiDate(article.modifiedDate) || new Date(article.modifiedDate)) : articleDate;
  let isoModifiedDate = isNaN(modifiedDateVal.getTime()) ? isoDate : modifiedDateVal.toISOString();
  // Ensure modifiedDate is never before publishedDate
  if (new Date(isoModifiedDate) < new Date(isoDate)) {
    isoModifiedDate = isoDate;
  }

  return {
    title: `${article.title} | JGPS ब्लॉग`,
    description: article.description,
    keywords: article.keywords,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
      },
    },
    alternates: {
      canonical: `https://jgps.in/hi/blog/${article.slug}/`,
      languages: {
        'hi': `https://jgps.in/hi/blog/${article.slug}/`,
        'en': `https://jgps.in/blog/${article.slug}/`,
        'x-default': `https://jgps.in/blog/${article.slug}/`,
      },
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://jgps.in/hi/blog/${article.slug}/`,
      siteName: 'जय गोविंद पब्लिक स्कूल',
      images: [{
        url: article.image.startsWith('http') ? article.image : `https://jgps.in${article.image}`,
        width: 1200,
        height: 675,
        alt: article.imageAlt || article.title,
      }],
      type: 'article',
      locale: 'hi_IN',
      publishedTime: isoDate,
      modifiedTime: isoModifiedDate,
      authors: [article.author],
      section: article.category,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: [article.image.startsWith('http') ? article.image : `https://jgps.in${article.image}`],
    },
  };
}

export default async function HindiBlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = hindiArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const articleDate = parseHindiDate(article.date) || new Date(article.date);
  const isoDate = isNaN(articleDate.getTime()) ? new Date().toISOString() : articleDate.toISOString();
  const modifiedDateVal = article.modifiedDate ? (parseHindiDate(article.modifiedDate) || new Date(article.modifiedDate)) : articleDate;
  let isoModifiedDate = isNaN(modifiedDateVal.getTime()) ? isoDate : modifiedDateVal.toISOString();
  // Ensure modifiedDate is never before publishedDate
  if (new Date(isoModifiedDate) < new Date(isoDate)) {
    isoModifiedDate = isoDate;
  }
  const authorData = authors.find(a => a.name === article.author);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": article.faqs?.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
    })) || []
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jgps.in/hi/blog/${article.slug}/`
    },
    "headline": article.title,
    "description": article.description,
    "image": article.image.startsWith('http') ? article.image : `https://jgps.in${article.image}`,
    "datePublished": isoDate,
    "dateModified": isoModifiedDate,
    "author": {
      "@type": "Person",
      "name": article.author,
      ...(authorData && { "url": `https://jgps.in/author/${authorData.slug}/` })
    },
    "publisher": {
      "@type": "Organization",
      "name": "Jai Govind Public School",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jgps.in/images/school-logo.avif"
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "होम", "item": "https://jgps.in/hi/" },
      { "@type": "ListItem", "position": 2, "name": "ब्लॉग", "item": "https://jgps.in/hi/blog/" },
      { "@type": "ListItem", "position": 3, "name": article.title, "item": `https://jgps.in/hi/blog/${article.slug}/` }
    ]
  };

  return <HindiArticleTemplate article={article} faqSchema={faqSchema} articleSchema={articleSchema} breadcrumbSchema={breadcrumbSchema} />;
}
