import React, { Suspense } from 'react';
import { schoolData } from "@/data/school-data";
import { hindiArticles } from "@/data/hindi-articles";
import { Metadata } from "next";
import HindiBlogListClient from "./HindiBlogListClient";

export const metadata: Metadata = {
  title: `ब्लॉग - JGPS`,
  description: `जय गोविंद पब्लिक स्कूल से नवीनतम शैक्षिक समाचार, प्रवेश परीक्षा अपडेट, और अध्ययन टिप्स। AMU, JMI, सैनिक स्कूल, JNVST की तैयारी के लिए विशेष मार्गदर्शन।`,
  keywords: "शैक्षिक समाचार हिंदी 2026, AMU प्रवेश परीक्षा, सैनिक स्कूल AISSEE 2027, जेएनवीएसटी नवोदय प्रवेश, जामिया प्रवेश कोचिंग, यूपी विद्यालय समाचार, सीबीएसई बोर्ड परीक्षा टिप्स",
  alternates: {
    canonical: "https://jgps.in/hi/blog",
  },
  openGraph: {
    title: "ब्लॉग - JGPS",
    description: "जय गोविंद पब्लिक स्कूल से नवीनतम शैक्षिक समाचार और प्रवेश परीक्षा अपडेट।",
    url: "https://jgps.in/hi/blog",
    siteName: schoolData.name,
    locale: "hi_IN",
    type: "website",
  },
};

export default function HindiBlogPage() {
  const sortedArticles = [...hindiArticles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "JGPS ब्लॉग — शैक्षिक समाचार और परीक्षा अपडेट",
    "description": "जय गोविंद पब्लिक स्कूल से नवीनतम शैक्षिक समाचार, प्रवेश परीक्षा अपडेट, और अध्ययन टिप्स।",
    "url": "https://jgps.in/hi/blog/",
    "inLanguage": "hi-IN",
    "publisher": {
      "@type": "School",
      "name": "Jai Govind Public School",
      "logo": { "@type": "ImageObject", "url": "https://jgps.in/images/school-logo.avif" }
    },
    "blogPost": sortedArticles.slice(0, 10).map(a => ({
      "@type": "BlogPosting",
      "headline": a.title,
      "url": `https://jgps.in/hi/blog/${a.slug}/`,
      "description": a.description,
      "datePublished": "2026-07-11",
      "author": { "@type": "Person", "name": a.author }
    }))
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "JGPS Hindi Blog Articles",
    "numberOfItems": sortedArticles.length,
    "itemListElement": sortedArticles.map((a, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "url": `https://jgps.in/hi/blog/${a.slug}/`,
      "name": a.title
    }))
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      {/* News-style masthead */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#035c00] font-extrabold text-xs uppercase tracking-widest bg-[#035c00]/10 px-3 py-1 rounded-full">
                  JGPS न्यूज़रूम
                </span>
                <span className="text-xs text-gray-400 font-medium">
                  {new Date().toLocaleDateString('hi-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                शैक्षिक समाचार और <span className="text-[#035c00]">परीक्षा अपडेट</span>
              </h1>
              <p className="text-sm text-gray-500 mt-1 max-w-xl">
                AMU, JMI, सैनिक स्कूल, JNVST की तैयारी के लिए विशेष मार्गदर्शन — शिक्षकों द्वारा लिखित, माता-पिता और छात्रों के लिए।
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="inline-flex items-center gap-1.5 bg-red-50 text-red-700 border border-red-200 text-xs font-bold px-3 py-1.5 rounded-full animate-pulse">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
                लाइव अपडेट
              </span>
            </div>
          </div>
        </div>
      </div>

      <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-12 text-center text-gray-400">लोड हो रहा है...</div>}>
        <HindiBlogListClient />
      </Suspense>
    </div>
  );
}
