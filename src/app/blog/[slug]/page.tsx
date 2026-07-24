import { notFound } from 'next/navigation';
import { articles } from '@/data/articles';
import { authors } from '@/data/authors';
import ArticleTemplate from '@/components/ArticleTemplate';

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  
  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  const articleDate = new Date(article.date);
  const isoDate = isNaN(articleDate.getTime()) ? new Date().toISOString() : articleDate.toISOString();
  const modifiedDateVal = article.modifiedDate ? new Date(article.modifiedDate) : articleDate;
  let isoModifiedDate = isNaN(modifiedDateVal.getTime()) ? isoDate : modifiedDateVal.toISOString();
  // Ensure modifiedDate is never before publishedDate
  if (new Date(isoModifiedDate) < new Date(isoDate)) {
    isoModifiedDate = isoDate;
  }

  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords || article.title,
    alternates: {
      canonical: `https://jgps.in/blog/${article.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
      },
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://jgps.in/blog/${article.slug}`,
      siteName: 'Jai Govind Public School',
      images: [{
        url: article.image.startsWith('http') ? article.image : `https://jgps.in${article.image}`,
        width: 1200,
        height: 675,
        alt: article.title,
      }],
      type: 'article',
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

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const articleDate = new Date(article.date);
  const isoDate = isNaN(articleDate.getTime()) ? new Date().toISOString() : articleDate.toISOString();
  const modifiedDateVal = article.modifiedDate ? new Date(article.modifiedDate) : articleDate;
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
      "@id": `https://jgps.in/blog/${article.slug}/`
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
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://jgps.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://jgps.in/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.title,
        "item": `https://jgps.in/blog/${article.slug}`
      }
    ]
  };

  return <ArticleTemplate article={article} faqSchema={faqSchema} articleSchema={articleSchema} breadcrumbSchema={breadcrumbSchema} />;
}
