"use client";

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import Image from '@/components/LazyImage';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaSearch, FaCalendarAlt, FaClock, FaArrowRight,
  FaWhatsapp, FaGraduationCap, FaBookmark, FaChevronLeft,
  FaChevronRight, FaUser, FaFire, FaTag, FaBullhorn
} from 'react-icons/fa';
import { articles, Article } from '@/data/articles';

const sortedArticles = [...articles].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

const CATEGORY_COLORS: Record<string, string> = {
  "Current Affairs":        "bg-blue-600",
  "Admissions & Test Prep": "bg-purple-600",
  "Academic Planning":      "bg-amber-500",
  "Student Life":           "bg-pink-600",
  "School News":            "bg-teal-600",
  "Study Tips":             "bg-orange-500",
  "Educator Resources":     "bg-indigo-600",
  "Comparison":             "bg-red-600",
};

const CATEGORY_LIGHT: Record<string, string> = {
  "Current Affairs":        "bg-blue-50 text-blue-700 border-blue-200",
  "Admissions & Test Prep": "bg-purple-50 text-purple-700 border-purple-200",
  "Academic Planning":      "bg-amber-50 text-amber-700 border-amber-200",
  "Student Life":           "bg-pink-50 text-pink-700 border-pink-200",
  "School News":            "bg-teal-50 text-teal-700 border-teal-200",
  "Study Tips":             "bg-orange-50 text-orange-700 border-orange-200",
  "Educator Resources":     "bg-indigo-50 text-indigo-700 border-indigo-200",
  "Comparison":             "bg-red-50 text-red-700 border-red-200",
};

function CategoryBadge({ cat, dark = false }: { cat: string; dark?: boolean }) {
  if (dark) {
    const bg = CATEGORY_COLORS[cat] ?? "bg-gray-600";
    return (
      <span className={`inline-block ${bg} text-white text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider`}>
        {cat}
      </span>
    );
  }
  const cls = CATEGORY_LIGHT[cat] ?? "bg-gray-100 text-gray-600 border-gray-200";
  return (
    <span className={`inline-block border text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider ${cls}`}>
      {cat}
    </span>
  );
}

// â"€â"€ Breaking News Ticker â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
function BreakingTicker() {
  const headlines = sortedArticles.slice(0, 8).map(a => a.title);
  return (
    <div className="bg-[#035c00] text-white flex items-stretch overflow-hidden rounded-xl mb-6 shadow-sm">
      <div className="flex items-center gap-2 bg-red-600 px-4 py-2.5 flex-shrink-0 text-xs font-extrabold uppercase tracking-widest">
        <FaBullhorn className="animate-pulse" />
        <span className="hidden sm:inline">Latest</span>
      </div>
      <div className="overflow-hidden flex-1 py-2.5 px-3">
        <motion.div
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap text-xs font-medium text-white/90 flex gap-12"
        >
          {[...headlines, ...headlines].map((h, i) => (
            <span key={i} className="inline-flex items-center gap-3">
              <span className="text-yellow-400 font-bold">â—</span>
              {h}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// â"€â"€ Hero Featured Section â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
function HeroFeatured({ articles }: { articles: Article[] }) {
  const [main, ...rest] = articles.slice(0, 3);
  if (!main) return null;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-8">
      {/* Main big card */}
      <Link href={`/blog/${main.slug}`}
        className="lg:col-span-3 group relative rounded-2xl overflow-hidden min-h-[380px] flex flex-col justify-end shadow-md hover:shadow-2xl transition-all duration-500 block"
      >
        <Image src={main.image} alt={main.title} fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width:1024px) 100vw, 60vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <div className="relative p-6 text-white">
          <div className="mb-3 flex items-center gap-2">
            <CategoryBadge cat={main.category} dark />
            <span className="text-white/60 text-[10px] font-medium flex items-center gap-1">
              <FaCalendarAlt className="text-[9px]" /> {main.date}
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-extrabold leading-tight mb-2 group-hover:text-yellow-300 transition-colors">
            {main.title}
          </h2>
          <p className="text-xs text-white/75 line-clamp-2 leading-relaxed mb-3">{main.description}</p>
          <div className="flex items-center gap-3 text-[11px] text-white/60">
            <span className="flex items-center gap-1"><FaUser className="text-[9px]" /> {main.author}</span>
            <span className="flex items-center gap-1"><FaClock className="text-[9px]" /> {main.readTime}</span>
          </div>
        </div>
      </Link>

      {/* Side cards */}
      <div className="lg:col-span-2 flex flex-col gap-4">
        {rest.map((a) => (
          <Link key={a.slug} href={`/blog/${a.slug}`}
            className="group relative rounded-xl overflow-hidden h-[178px] flex flex-col justify-end shadow-sm hover:shadow-xl transition-all duration-400 block"
          >
            <Image src={a.image} alt={a.title} fill
              className="object-cover group-hover:scale-105 transition-transform duration-600"
              sizes="(max-width:1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="relative p-4 text-white">
              <CategoryBadge cat={a.category} dark />
              <h3 className="mt-2 text-sm font-bold leading-snug line-clamp-2 group-hover:text-yellow-300 transition-colors">
                {a.title}
              </h3>
              <span className="text-[10px] text-white/60 mt-1 block">{a.date} Â· {a.readTime}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// â"€â"€ Article Card (list grid) â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
function ArticleCard({ article }: { article: Article }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.35 }}
      className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col group"
    >
      <Link href={`/blog/${article.slug}`} className="relative h-44 w-full overflow-hidden flex-shrink-0 block">
        <Image src={article.image} alt={article.title} fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3">
          <CategoryBadge cat={article.category} dark />
        </div>
      </Link>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-[11px] text-gray-400 mb-2">
          <span className="flex items-center gap-1"><FaCalendarAlt className="text-[9px]" />{article.date}</span>
          <span className="flex items-center gap-1"><FaClock className="text-[9px]" />{article.readTime}</span>
        </div>
        <Link href={`/blog/${article.slug}`}>
          <h3 className="text-sm font-bold text-gray-900 leading-snug line-clamp-2 mb-2 group-hover:text-[#035c00] transition-colors">
            {article.title}
          </h3>
        </Link>
        <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed flex-1">{article.description}</p>
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
          <span className="text-[11px] text-gray-400 flex items-center gap-1">
            <FaUser className="text-[9px]" /> {article.author}
          </span>
          <Link href={`/blog/${article.slug}`}
            className="text-[11px] font-bold text-[#035c00] flex items-center gap-1 hover:underline">
            Read <FaArrowRight className="text-[9px] group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

// â"€â"€ Sidebar â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
function Sidebar({ trending }: { trending: Article[] }) {
  return (
    <aside className="space-y-6">
      {/* Trending */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="bg-[#035c00] px-5 py-3 flex items-center gap-2">
          <FaFire className="text-yellow-400" />
          <h3 className="text-sm font-extrabold text-white uppercase tracking-wider">Trending Now</h3>
        </div>
        <ul className="divide-y divide-gray-50">
          {trending.map((a, i) => (
            <li key={a.slug}>
              <Link href={`/blog/${a.slug}`}
                className="flex gap-3 p-4 hover:bg-gray-50 transition-colors group"
              >
                <span className="text-2xl font-extrabold text-gray-100 leading-none w-7 flex-shrink-0 group-hover:text-[#035c00]/20 transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0">
                  <CategoryBadge cat={a.category} />
                  <p className="mt-1.5 text-xs font-bold text-gray-800 leading-snug line-clamp-2 group-hover:text-[#035c00] transition-colors">
                    {a.title}
                  </p>
                  <span className="text-[10px] text-gray-400 mt-1 block">{a.readTime}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Coaching CTA */}
      <div className="bg-gradient-to-br from-[#035c00] to-[#024700] rounded-xl p-5 text-white shadow-lg relative overflow-hidden">
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/5 rounded-full" />
        <FaGraduationCap className="text-3xl text-yellow-400 mb-3" />
        <h3 className="font-extrabold text-base mb-1">Crack Entrance Exams</h3>
        <p className="text-xs text-white/80 leading-relaxed mb-4">
          AMU, JMI, Sainik School, Military School & Vidyagyan  -  expert coaching batches with weekly OMR tests.
        </p>
        <Link href="/coaching"
          className="block text-center bg-yellow-400 hover:bg-yellow-300 text-[#035c00] font-extrabold text-xs py-2.5 rounded-lg transition-colors shadow-md">
          Explore Coaching â†'
        </Link>
      </div>

      {/* WhatsApp */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
        <h4 className="text-sm font-bold text-gray-800 mb-2 flex items-center gap-2">
          <FaUser className="text-[#035c00]" /> Ask the Principal
        </h4>
        <p className="text-xs text-gray-500 leading-relaxed mb-4">
          Direct WhatsApp access to Principal Rifaul Hasan for admission & coaching queries.
        </p>
        <a href="https://wa.me/919997161490?text=Hello%20Principal%2C%20I%20have%20an%20inquiry."
          target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs py-2.5 rounded-lg transition-colors shadow-md">
          <FaWhatsapp className="text-base" /> Chat on WhatsApp
        </a>
      </div>

      {/* Categories widget */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
        <h4 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
          <FaTag className="text-[#035c00]" /> Browse Categories
        </h4>
        <div className="flex flex-wrap gap-2">
          {Object.keys(CATEGORY_LIGHT).map(cat => (
            <Link key={cat} href={`/blog?category=${encodeURIComponent(cat)}`}
              className={`text-[10px] font-bold px-2.5 py-1 rounded border ${CATEGORY_LIGHT[cat]} hover:opacity-80 transition-opacity`}>
              {cat}
            </Link>
          ))}
        </div>
      </div>

      {/* Did You Know */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
        <h4 className="text-sm font-bold text-amber-900 mb-2 flex items-center gap-2">
          <span>ðŸ'¡</span> Did You Know?
        </h4>
        <p className="text-[11px] text-amber-800 leading-relaxed">
          Our AMU & Sainik School batches cover subject-specific shortcuts for Mathematics and Urdu language qualifying cutoffs.
        </p>
        <Link href="/faq"
          className="text-xs font-bold text-amber-700 hover:text-amber-900 mt-3 flex items-center gap-1 group">
          Check FAQ <FaArrowRight className="text-[9px] group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </aside>
  );
}

// â"€â"€ Main Export â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€
export default function BlogListClient() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 9;

  const categories = useMemo(() => {
    const cats = Array.from(new Set(sortedArticles.map(a => a.category)));
    return ['All', ...cats];
  }, []);

  useEffect(() => {
    const cat = searchParams.get('category');
    const q   = searchParams.get('q');
    if (q) setSearchQuery(q);
    if (cat) {
      const match = categories.find(c => c.toLowerCase() === cat.toLowerCase());
      if (match) setSelectedCategory(match);
    }
  }, [categories, searchParams]);

  const filtered = useMemo(() => sortedArticles.filter(a => {
    const matchCat  = selectedCategory === 'All' || a.category === selectedCategory;
    const matchQ    = a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      a.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      a.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchQ;
  }), [searchQuery, selectedCategory]);

  useEffect(() => { setCurrentPage(1); }, [searchQuery, selectedCategory]);

  const isDefault = selectedCategory === 'All' && searchQuery === '';
  const heroArticles = isDefault ? filtered.slice(0, 3) : [];
  const listArticles = isDefault ? filtered.slice(3) : filtered;
  const totalPages   = Math.ceil(listArticles.length / ITEMS_PER_PAGE);
  const pageArticles = listArticles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  const trending = sortedArticles.slice(0, 6);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <BreakingTicker />

      {/* Search + Category bar */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-8 bg-white px-5 py-4 rounded-xl border border-gray-100 shadow-sm">
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button key={cat} onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 border ${
                selectedCategory === cat
                  ? 'bg-[#035c00] text-white border-[#035c00] shadow-sm'
                  : 'bg-white text-gray-500 border-gray-200 hover:border-[#035c00] hover:text-[#035c00]'
              }`}>
              {cat}
              <span className="ml-1.5 text-[9px] opacity-60">
                ({cat === 'All' ? sortedArticles.length : sortedArticles.filter(a => a.category === cat).length})
              </span>
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-72 flex-shrink-0">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
          <input type="text" placeholder="Search articles, authors"
            value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-full text-xs bg-gray-50 focus:ring-2 focus:ring-[#035c00] focus:border-transparent outline-none transition-all"
          />
        </div>
      </div>

      {/* Hero featured (default view only) */}
      {isDefault && <HeroFeatured articles={heroArticles} />}

      {/* Main 2-col layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Articles grid */}
        <div className="lg:col-span-2">
          {!isDefault && searchQuery && (
            <p className="text-xs text-gray-500 mb-4">
              <span className="font-bold text-gray-800">{filtered.length}</span> result{filtered.length !== 1 ? 's' : ''} for "<span className="text-[#035c00]">{searchQuery}</span>"
            </p>
          )}

          <AnimatePresence mode="popLayout">
            {pageArticles.length > 0 ? (
              <motion.div
                key={`${selectedCategory}-${currentPage}`}
                className="grid grid-cols-1 sm:grid-cols-2 gap-5"
              >
                {pageArticles.map(a => <ArticleCard key={a.slug} article={a} />)}
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="text-center py-20 bg-white rounded-xl border border-gray-100">
                <FaBookmark className="text-4xl text-gray-200 mx-auto mb-4" />
                <h3 className="font-bold text-gray-700 mb-1">No articles found</h3>
                <p className="text-xs text-gray-400">Try a different category or search term.</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mt-8 pt-6 border-t border-gray-100">
              <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-2.5 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-[#035c00] hover:text-white hover:border-[#035c00] disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm">
                <FaChevronLeft className="text-xs" />
              </button>
              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                  <button key={p} onClick={() => setCurrentPage(p)}
                    className={`w-8 h-8 rounded-full text-xs font-bold transition-all ${
                      p === currentPage ? 'bg-[#035c00] text-white shadow-sm' : 'bg-white border border-gray-200 text-gray-600 hover:border-[#035c00] hover:text-[#035c00]'
                    }`}>
                    {p}
                  </button>
                ))}
              </div>
              <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-2.5 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-[#035c00] hover:text-white hover:border-[#035c00] disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm">
                <FaChevronRight className="text-xs" />
              </button>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <Sidebar trending={trending} />
      </div>
    </div>
  );
}
