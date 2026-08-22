"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from '@/components/LazyImage';
import { motion, AnimatePresence } from "framer-motion";
import { hindiArticles, HindiArticle } from "@/data/hindi-articles";
import { FaClock, FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CATEGORIES = [
  "सभी",
  "नवोदय प्रवेश",
  "सैनिक स्कूल",
  "शैक्षिक योजना",
  "छात्र जीवन",
  "अध्ययन टिप्स",
];

const CATEGORY_COLORS: Record<string, string> = {
  "नवोदय प्रवेश": "bg-purple-100 text-purple-700",
  "प्रवेश और परीक्षा तैयारी": "bg-purple-100 text-purple-700",
  "विद्यालय समाचार": "bg-teal-100 text-teal-700",
  "शैक्षिक योजना": "bg-amber-100 text-amber-700",
  "छात्र जीवन": "bg-pink-100 text-pink-700",
  "अध्ययन टिप्स": "bg-orange-100 text-orange-700",
  "सैनिक स्कूल": "bg-blue-100 text-blue-700",
  "शिक्षक संसाधन": "bg-indigo-100 text-indigo-700",
  "तुलना": "bg-red-100 text-red-700",
};

const CARDS_PER_VIEW = 3;
const AUTO_SLIDE_INTERVAL = 3000;

export default function LatestBlogCarouselHi() {
  const [activeCategory, setActiveCategory] = useState("सभी");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const hindiMonthsMap: Record<string, number> = {
    'जनवरी': 0, 'फरवरी': 1, 'मार्च': 2, 'अप्रैल': 3, 'मई': 4, 'जून': 5,
    'जुलाई': 6, 'अगस्त': 7, 'सितंबर': 8, 'अक्टूबर': 9, 'नवंबर': 10, 'दिसंबर': 11,
  };

  const parseHindiDate = (d: string): number => {
    const parsed = new Date(d);
    if (!isNaN(parsed.getTime())) return parsed.getTime();
    const match = d.match(/(\d+)\s+(\S+)\s+(\d{4})/);
    if (match) {
      const day = parseInt(match[1]);
      const month = hindiMonthsMap[match[2]] ?? 0;
      const year = parseInt(match[3]);
      const timeMatch = d.match(/(\d+)\s+बजकर\s+(\d+)\s+मिनट/);
      let hours = 0, minutes = 0;
      if (timeMatch) {
        hours = parseInt(timeMatch[1]);
        minutes = parseInt(timeMatch[2]);
        if (d.includes('दोपहर') && hours < 12) hours += 12;
        if (d.includes('सुबह') && hours === 12) hours = 0;
        if (d.includes('शाम') && hours < 12) hours += 12;
      }
      return new Date(year, month, day, hours, minutes).getTime();
    }
    return 0;
  };

  const sortedArticles = [...hindiArticles].sort(
    (a, b) => parseHindiDate(b.date) - parseHindiDate(a.date)
  );

  const filtered =
    activeCategory === "सभी"
      ? sortedArticles
      : sortedArticles.filter((a) => a.category === activeCategory);

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  const maxIndex = Math.max(0, filtered.length - CARDS_PER_VIEW);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (isPaused || filtered.length <= CARDS_PER_VIEW) return;
    timerRef.current = setInterval(next, AUTO_SLIDE_INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, next, filtered.length]);

  const visibleCards = filtered.slice(currentIndex, currentIndex + CARDS_PER_VIEW);
  const paddedCards =
    visibleCards.length < CARDS_PER_VIEW
      ? [...visibleCards, ...filtered.slice(0, CARDS_PER_VIEW - visibleCards.length)]
      : visibleCards;

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-[#035c00] font-bold text-xs uppercase tracking-widest bg-[#035c00]/10 px-4 py-1.5 rounded-full mb-3 inline-block">
              ब्लॉग से नवीनतम
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#035c00] leading-tight">
              नवीनतम लेख और अपडेट
            </h2>
          </div>
          <Link
            href="/hi/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#035c00] hover:underline flex-shrink-0"
          >
            सभी लेख देखें <FaArrowRight className="text-xs" />
          </Link>
        </div>

        <div className="flex gap-2 flex-wrap mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 border ${
                activeCategory === cat
                  ? "bg-[#035c00] text-white border-[#035c00] shadow-sm"
                  : "bg-white text-gray-600 border-gray-200 hover:border-[#035c00] hover:text-[#035c00]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${currentIndex}`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {paddedCards.map((article, i) => (
                <Link
                  key={`${article.slug}-${i}`}
                  href={`/hi/blog/${article.slug}/`}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
                >
                  <div className="relative h-48 w-full overflow-hidden flex-shrink-0">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <span
                      className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full ${
                        CATEGORY_COLORS[article.category] ?? "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {article.category}
                    </span>
                  </div>

                  <div className="flex flex-col flex-1 p-5">
                    <h3 className="text-sm font-bold text-gray-900 leading-snug mb-2 line-clamp-2 group-hover:text-[#035c00] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-4 flex-1">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
                        <FaClock className="text-[#035c00] flex-shrink-0" />
                        <span>{article.readTime}</span>
                      </div>
                      <span className="text-[11px] text-gray-400">{article.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length > CARDS_PER_VIEW && (
            <>
              <button
                onClick={prev}
                className="absolute -left-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center text-gray-600 hover:bg-[#035c00] hover:text-white hover:border-[#035c00] transition-all duration-200 z-10"
                aria-label="Previous"
              >
                <FaChevronLeft className="text-xs" />
              </button>
              <button
                onClick={next}
                className="absolute -right-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center text-gray-600 hover:bg-[#035c00] hover:text-white hover:border-[#035c00] transition-all duration-200 z-10"
                aria-label="Next"
              >
                <FaChevronRight className="text-xs" />
              </button>
            </>
          )}
        </div>

        {filtered.length > CARDS_PER_VIEW && (
          <div className="flex justify-center gap-1.5 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "w-6 h-2 bg-[#035c00]"
                    : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
