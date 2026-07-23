import React from 'react';
import Image from '@/components/LazyImage';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { authors, getAuthorBySlug } from '@/data/authors';
import { getArticlesByAuthor } from '@/data/articles';
import { getHindiArticlesByAuthor } from '@/data/hindi-articles';
import { FaCalendarAlt, FaClock, FaArrowRight, FaCheckCircle, FaPenNib, FaBookReader } from 'react-icons/fa';

interface AuthorPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return authors.map((author) => ({
    slug: author.slug,
  }));
}

export async function generateMetadata({ params }: AuthorPageProps) {
  const resolvedParams = await params;
  const author = getAuthorBySlug(resolvedParams.slug);

  if (!author) {
    return { title: 'Author Not Found' };
  }

  return {
    title: `${author.name} - ${author.role} | JGPS Expert`,
    description: author.bio,
  };
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const resolvedParams = await params;
  const author = getAuthorBySlug(resolvedParams.slug);

  if (!author) {
    notFound();
  }

  const englishArticles = getArticlesByAuthor(author.name);
  const hindiArticlesList = getHindiArticlesByAuthor(author.name);

  // Normalize Hindi articles to match English article shape for display
  const normalizedHindi = hindiArticlesList.map(a => ({
    slug: a.slug,
    title: a.title,
    description: a.description,
    date: a.date,
    author: a.author,
    readTime: a.readTime,
    category: a.category,
    image: a.image,
    isHindi: true,
  }));

  const authorArticles = [...englishArticles, ...normalizedHindi];
  
  // Calculate total reading time (roughly estimating 5 mins per article if not available)
  const totalReadTime = authorArticles.reduce((acc, curr) => {
    const mins = parseInt(curr.readTime.split(' ')[0]) || 5;
    return acc + mins;
  }, 0);

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Premium Author Profile Hero */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#035c00] to-[#023b00] z-0"></div>
        <div className="absolute inset-0 opacity-5 z-0 bg-white/5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl z-0 -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mt-12 relative flex flex-col md:flex-row gap-10 items-center md:items-start border border-gray-100">
            
            {/* Lifted Profile Image */}
            <div className="flex-shrink-0 -mt-24 relative group">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-8 border-white shadow-xl relative z-10 bg-white">
                <Image 
                  src={author.imageUrl} 
                  alt={author.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              {/* Verified Badge */}
              <div className="absolute bottom-4 right-2 bg-white rounded-full p-1.5 shadow-lg z-20 border border-gray-100" title="Verified Educational Expert">
                <FaCheckCircle className="text-blue-500 text-3xl" />
              </div>
            </div>
            
            {/* Author Info */}
            <div className="text-center md:text-left flex-grow w-full">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-1">
                    {author.name}
                  </h1>
                  <h2 className="text-lg md:text-xl font-semibold text-[#035c00]">
                    {author.role}
                  </h2>
                </div>
                
                {/* Stats Bar */}
                <div className="flex gap-6 justify-center md:justify-end bg-gray-50 px-6 py-3 rounded-2xl border border-gray-100">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1.5 text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">
                      <FaPenNib /> Articles
                    </div>
                    <div className="text-2xl font-black text-gray-900">{authorArticles.length}</div>
                  </div>
                  <div className="w-px bg-gray-200"></div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1.5 text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">
                      <FaBookReader /> Read Time
                    </div>
                    <div className="text-2xl font-black text-gray-900">{totalReadTime}<span className="text-sm font-medium text-gray-500">m</span></div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed max-w-3xl text-sm md:text-base mb-8">
                {author.bio}
              </p>
              
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {author.expertise.map((skill, index) => (
                  <span key={index} className="bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs px-4 py-2 rounded-xl font-bold uppercase tracking-wider">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author's Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex items-center gap-3 mb-10 pb-4 border-b-2 border-gray-100">
          <h3 className="text-2xl font-extrabold text-gray-900">Latest from {author.name.split(' ')[0]}</h3>
        </div>

        {authorArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authorArticles.map((article: any) => {
              const basePath = article.isHindi ? '/hi/blog' : '/blog';
              return (
              <div key={article.slug} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-150/70 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full group">
                {/* Image Header */}
                <Link href={`${basePath}/${article.slug}/`} className="relative h-56 w-full overflow-hidden bg-gray-100 block">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-w-768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md border border-white/50 text-[#035c00] text-[10px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider shadow-sm">
                    {article.category}
                  </div>
                </Link>

                {/* Card Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-[11px] text-gray-500 mb-3 font-medium">
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt className="text-[#035c00]/70" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaClock className="text-[#035c00]/70" />
                        {article.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <Link href={`${basePath}/${article.slug}/`}>
                      <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-[#035c00] transition-colors leading-snug line-clamp-2">
                        {article.title}
                      </h3>
                    </Link>

                    {/* Description */}
                    <p className="text-xs text-gray-600 mb-6 leading-relaxed line-clamp-3">
                      {article.description}
                    </p>
                  </div>

                  {/* Read More Link */}
                  <Link
                    href={`${basePath}/${article.slug}/`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#035c00] group-hover:text-[#024700] transition-colors mt-auto border-t border-gray-100 pt-4 w-full"
                  >
                    Read Full Article
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform ml-auto" />
                  </Link>
                </div>
              </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white p-16 text-center rounded-3xl border border-gray-100 shadow-sm max-w-2xl mx-auto mt-12">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaPenNib className="text-gray-300 text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">No articles published yet</h3>
            <p className="text-sm text-gray-500">{author.name} is working on some great new content. Check back soon!</p>
          </div>
        )}
      </section>
    </div>
  );
}
