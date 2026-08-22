import { notFound } from 'next/navigation';
import { hindiArticles } from '@/data/hindi-articles';
import { authors } from '@/data/authors';
import HindiArticleTemplate from '@/components/HindiArticleTemplate';

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

  const articleDate = new Date(article.date);
  const isoDate = isNaN(articleDate.getTime()) ? new Date().toISOString() : articleDate.toISOString();
  const modifiedDateVal = article.modifiedDate ? new Date(article.modifiedDate) : articleDate;
  const isoModifiedDate = isNaN(modifiedDateVal.getTime()) ? isoDate : modifiedDateVal.toISOString();

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
        url: `https://jgps.in${article.image}`,
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
      images: [`https://jgps.in${article.image}`],
    },
  };
}

export default async function HindiBlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = hindiArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const articleDate = new Date(article.date);
  const isoDate = isNaN(articleDate.getTime()) ? new Date().toISOString() : articleDate.toISOString();
  const modifiedDateVal = article.modifiedDate ? new Date(article.modifiedDate) : articleDate;
  const isoModifiedDate = isNaN(modifiedDateVal.getTime()) ? isoDate : modifiedDateVal.toISOString();
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
    "image": `https://jgps.in${article.image}`,
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
