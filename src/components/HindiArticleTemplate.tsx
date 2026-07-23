"use client";

import React, { useState, useEffect } from 'react';
import Image from '@/components/LazyImage';
import Link from 'next/link';
import AuthorBox from '@/components/AuthorBox';
import { HindiArticle, hindiArticles } from '@/data/hindi-articles';
import { authors } from '@/data/authors';
import {
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaWhatsapp,
  FaChevronDown,
  FaChevronUp,
  FaFire,
  FaBookmark,
  FaShare,
  FaCheckCircle,
} from 'react-icons/fa';

interface HindiArticleTemplateProps {
  article: HindiArticle;
  faqSchema: object;
  articleSchema: object;
  breadcrumbSchema: object;
}

// Reading Progress Bar
function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? Math.min(100, (scrolled / total) * 100) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200">
      <div className="h-full bg-[#035c00] transition-all duration-100" style={{ width: `${progress}%` }} />
    </div>
  );
}

// Sticky Share Bar
function StickyShareBar({ title }: { title: string }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const waText = encodeURIComponent(`${title}\n\n${shareUrl}`);
  if (!visible) return null;
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2 items-end">
      <a href={`https://wa.me/?text=${waText}`} target="_blank" rel="noopener noreferrer"
        className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-lg transition-all">
        <FaWhatsapp className="text-sm" /> WhatsApp
      </a>
      <button onClick={() => navigator.clipboard?.writeText(shareUrl)}
        className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-xs font-bold px-4 py-2.5 rounded-full shadow-lg transition-all">
        <FaShare className="text-xs" /> Link Copy
      </button>
    </div>
  );
}

// FAQ Accordion
function FaqAccordion({ faqs }: { faqs: HindiArticle['faqs'] }) {
  const [open, setOpen] = useState<number | null>(0);
  if (!faqs || !faqs.length) return null;
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-2xl font-extrabold text-gray-900 mb-6 flex items-center gap-3">
        <span className="w-8 h-8 bg-[#035c00] text-white rounded-lg flex items-center justify-center text-sm flex-shrink-0">?</span>
        अक्सर पूछे जाने वाले सवाल
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
            <button onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-start justify-between gap-3 px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors">
              <span className="font-bold text-gray-900 text-sm leading-snug">{faq.question}</span>
              {open === i ? <FaChevronUp className="text-[#035c00] flex-shrink-0 mt-0.5 text-sm" /> : <FaChevronDown className="text-gray-400 flex-shrink-0 mt-0.5 text-sm" />}
            </button>
            {open === i && (
              <div className="px-5 pb-4 bg-green-50 border-t border-gray-100">
                <p className="text-sm text-gray-700 leading-relaxed m-0 pt-3">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Related Hindi Articles
function RelatedHindiArticles({ currentSlug, category }: { currentSlug: string; category: string }) {
  const related = hindiArticles.filter((a) => a.slug !== currentSlug)
    .sort((a, b) => (a.category === category ? 1 : 0) - (b.category === category ? 1 : 0))
    .slice(0, 4);
  if (!related.length) return null;
  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h3 className="text-xl font-extrabold text-gray-900 mb-6 flex items-center gap-2">
        <FaFire className="text-orange-500" /> और पढ़ें
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {related.map((a) => (
          <Link key={a.slug} href={`/hi/blog/${a.slug}/`}
            className="group flex gap-3 bg-white border border-gray-100 rounded-xl p-3 hover:shadow-md hover:border-[#035c00]/20 transition-all">
            <div className="relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
              <Image src={a.image} alt={a.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="80px" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-bold text-[#035c00] uppercase tracking-wide mb-1 truncate">{a.category}</p>
              <h4 className="text-xs font-bold text-gray-800 leading-snug line-clamp-2 group-hover:text-[#035c00] transition-colors">{a.title}</h4>
              <span className="text-[10px] text-gray-400 mt-1 flex items-center gap-1"><FaClock className="text-[9px]" />{a.readTime}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Coaching CTA
function CoachingCTA() {
  return (
    <div className="my-10 bg-gradient-to-br from-[#035c00] to-[#024700] rounded-2xl p-6 text-white relative overflow-hidden">
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/5 rounded-full" />
      <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-yellow-400/10 rounded-full" />
      <div className="relative z-10">
        <span className="inline-block bg-yellow-400 text-[#035c00] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
          प्रवेश खुला 2026-27
        </span>
        <h3 className="text-xl font-extrabold mb-2 leading-snug">क्या आपका बच्चा सरकारी स्कूल में जाना चाहता है?</h3>
        <p className="text-sm text-white/85 leading-relaxed mb-4">
          JGPS में AMU, JMI, सैनिक स्कूल, नवोदय और मिलिट्री स्कूल के लिए विशेष कोचिंग बैच। साप्ताहिक OMR टेस्ट। अनुभवी शिक्षक।
        </p>
        <ul className="text-xs text-white/80 space-y-1.5 mb-5">
          {['मुफ्त काउंसलिंग', 'पिछले साल के पेपर', 'साप्ताहिक Mock Tests'].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <FaCheckCircle className="text-yellow-400 flex-shrink-0 text-[11px]" />{item}
            </li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/coaching" className="flex-1 text-center bg-white text-[#035c00] hover:bg-yellow-300 font-extrabold text-sm py-2.5 px-4 rounded-xl transition-all shadow-sm">
            कोचिंग देखें
          </Link>
          <a href="https://wa.me/919997161490?text=Hello%2C%20I%20want%20coaching%20information." target="_blank" rel="noopener noreferrer"
            className="flex-1 text-center bg-emerald-500 hover:bg-emerald-400 text-white font-extrabold text-sm py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2">
            <FaWhatsapp /> WhatsApp करें
          </a>
        </div>
      </div>
    </div>
  );
}

// Key Takeaways
function KeyTakeaways({ points }: { points: string[] }) {
  if (!points.length) return null;
  return (
    <div className="my-8 bg-amber-50 border border-amber-200 rounded-2xl p-6">
      <h3 className="text-base font-extrabold text-amber-900 mb-4 flex items-center gap-2">
        <FaBookmark className="text-amber-500" /> मुख्य बातें
      </h3>
      <ul className="space-y-2">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-amber-800">
            <FaCheckCircle className="text-amber-500 flex-shrink-0 mt-0.5 text-[13px]" /><span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Main Export
export default function HindiArticleTemplate({ article, faqSchema, articleSchema, breadcrumbSchema }: HindiArticleTemplateProps) {
  const keyTakeaways = (article.faqs ?? []).slice(0, 4).map(
    (f) => `${f.question.replace(/\?$/, '')} - ${f.answer.slice(0, 80)}${f.answer.length > 80 ? '...' : ''}`
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <ReadingProgressBar />
      <StickyShareBar title={article.title} />

      <div className="bg-gray-50 min-h-screen">
        <header className="bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-0">

            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-xs text-gray-400 mb-5 flex-wrap">
              <Link href="/hi/" className="hover:text-[#035c00] transition-colors">होम</Link>
              <span>/</span>
              <Link href="/hi/blog/" className="hover:text-[#035c00] transition-colors">ब्लॉग</Link>
              <span>/</span>
              <span className="text-gray-600 line-clamp-1">{article.title}</span>
            </nav>

            {/* Category + freshness badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-purple-100 text-purple-800 font-bold px-3 py-1 rounded-full text-[11px] uppercase tracking-wider">
                {article.category}
              </span>
              <span className="bg-green-100 text-green-800 font-bold px-3 py-1 rounded-full text-[11px] uppercase tracking-wider">
                अपडेट: {article.modifiedDate || article.date}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-3">
              {article.title}
            </h1>

            {/* Description */}
            <p className="text-base text-gray-600 leading-relaxed mb-6 max-w-2xl">
              {article.description}
            </p>

            {/* Author + Date + Share Row - Aaj Tak Style */}
            <div className="border-t border-gray-200 pt-4 pb-4">
              {/* Author Row */}
              {(() => {
                const authorData = authors.find(a => a.name === article.author);
                return (
                  <div className="flex items-center gap-3 mb-3">
                    {authorData ? (
                      <>
                        <Link href={`/author/${authorData.slug}/`} className="flex items-center gap-2.5 group">
                          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#035c00]/20">
                            <Image
                              src={authorData.imageUrl}
                              alt={authorData.name}
                              width={40}
                              height={40}
                              className="object-cover w-10 h-10"
                              unoptimized
                            />
                          </div>
                          <div>
                            <div className="flex items-center gap-1">
                              <span className="font-bold text-gray-900 text-sm group-hover:text-[#035c00] transition-colors">{authorData.name}</span>
                              <FaCheckCircle className="text-blue-500 text-[10px]" />
                            </div>
                          </div>
                        </Link>
                        <span className="text-gray-300">|</span>
                        <Link href={`/author/${authorData.slug}/`} className="text-xs text-[#035c00] font-medium hover:underline">
                          प्रोफाइल देखें
                        </Link>
                      </>
                    ) : (
                      <div className="flex items-center gap-2">
                        <FaUser className="text-[#035c00] text-sm" />
                        <span className="font-bold text-gray-900 text-sm">{article.author}</span>
                      </div>
                    )}
                  </div>
                );
              })()}

              {/* Date + Read Time + Share Row */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt className="text-[#035c00] text-[10px]" />
                    {article.date}
                  </span>
                  <span className="text-gray-300">|</span>
                  <span className="flex items-center gap-1">
                    <FaClock className="text-[#035c00] text-[10px]" />
                    {article.readTime}
                  </span>
                  {article.modifiedDate && (
                    <>
                      <span className="text-gray-300">|</span>
                      <span className="text-green-600 font-medium">अपडेटेड: {article.modifiedDate}</span>
                    </>
                  )}
                </div>

                {/* Share Buttons */}
                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(article.title + '\n\nhttps://jgps.in/hi/blog/' + article.slug + '/')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <FaWhatsapp className="text-xs" /> WhatsApp
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://jgps.in/hi/blog/' + article.slug + '/')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg transition-colors"
                  >
                    Facebook
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent('https://jgps.in/hi/blog/' + article.slug + '/')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-gray-800 hover:bg-gray-900 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg transition-colors"
                  >
                    Twitter
                  </a>
                  <button
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        navigator.clipboard?.writeText(window.location.href);
                        alert('Link copy ho gaya!');
                      }
                    }}
                    className="flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-[11px] font-bold px-3 py-1.5 rounded-lg transition-colors border border-gray-200"
                  >
                    Copy Link
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Featured image */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-0">
            <div className="relative blog-featured-image w-full rounded-t-2xl overflow-hidden shadow-lg">
              <Image
                src={article.image}
                alt={article.imageAlt || article.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 896px"
              />
            </div>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <KeyTakeaways points={keyTakeaways} />

          <div
            className="blog-article-content space-y-6 text-gray-700 leading-relaxed text-base"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <CoachingCTA />

          <FaqAccordion faqs={article.faqs} />

          <AuthorBox
            name={article.author}
            slug={article.authorSlug}
            role={article.authorRole}
            bio={article.authorBio}
            imageUrl={authors.find(a => a.name === article.author)?.imageUrl}
          />

          <RelatedHindiArticles currentSlug={article.slug} category={article.category} />

          {/* Bottom Share CTA */}
          <div className="mt-10 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500 mb-4">
              इस लेख को उन माता-पिता के साथ शेयर करें जिन्हें इसकी जरूरत है।
            </p>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(article.title + '\n\nhttps://jgps.in/hi/blog/' + article.slug + '/')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-md"
            >
              <FaWhatsapp className="text-base" /> WhatsApp पर शेयर करें
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
