import React from 'react';
import Link from 'next/link';
import Image from '@/components/LazyImage';
import { articles } from '@/data/articles';

interface RelatedArticlesProps {
  currentSlug: string;
  category: string;
}

export default function RelatedArticles({ currentSlug, category }: RelatedArticlesProps) {
  // Find up to 3 articles in the same category, excluding the current one
  let related = articles
    .filter((a) => a.category === category && a.slug !== currentSlug)
    .slice(0, 3);

  // If we don&apos;t have enough in the same category, fill with latest articles
  if (related.length < 3) {
    const filler = articles
      .filter((a) => a.slug !== currentSlug && !related.find(r => r.slug === a.slug))
      .slice(0, 3 - related.length);
    related = [...related, ...filler];
  }

  if (related.length === 0) return null;

  return (
    <div className="mt-16 border-t border-gray-200 pt-10">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Read Next</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {related.map((article) => (
          <Link key={article.slug} href={`/blog/${article.slug}`} className="group block">
            <div className="relative w-full aspect-[16/9] mb-4 overflow-hidden rounded-xl bg-gray-100">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="text-xs text-blue-600 font-bold mb-2 uppercase tracking-wide">
              {article.category}
            </p>
            <h4 className="text-md font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
              {article.title}
            </h4>
          </Link>
        ))}
      </div>
    </div>
  );
}
