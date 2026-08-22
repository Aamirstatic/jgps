import React from 'react';
import Link from 'next/link';
import { hindiArticles } from '@/data/hindi-articles';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rifaul Hasan — प्रधानाचार्य, जय गोविंद पब्लिक स्कूल | JGPS',
  description: 'Rifaul Hasan जी जय गोविंद पब्लिक स्कूल, जोया (अमरोहा) के प्रधानाचार्य हैं। पिछले 12 साल से बच्चों को नवोदय, सैनिक स्कूल और AMU प्रवेश परीक्षा की तैयारी करा रहे हैं।',
  alternates: {
    canonical: 'https://jgps.in/author/rifaul-hasan/',
  },
  robots: 'index, follow',
};

export default function AuthorPage() {
  const authorArticles = hindiArticles.filter(a => a.authorSlug === 'rifaul-hasan');

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rifaul Hasan",
    "jobTitle": "प्रधानाचार्य और शिक्षा विशेषज्ञ",
    "worksFor": {
      "@type": "School",
      "name": "Jai Govind Public School",
      "url": "https://jgps.in"
    },
    "url": "https://jgps.in/author/rifaul-hasan/",
    "description": "Rifaul Hasan जी जय गोविंद पब्लिक स्कूल, जोया (अमरोहा) के प्रधानाचार्य हैं। पिछले 12 साल से बच्चों को नवोदय, सैनिक स्कूल और AMU प्रवेश परीक्षा की तैयारी करा रहे हैं।",
    "knowsAbout": [
      "Navodaya Vidyalaya Entrance Coaching",
      "Sainik School AISSEE Preparation",
      "AMU School Entrance Exam",
      "JMI School Entrance Exam",
      "Primary Education",
      "Competitive Exam Coaching"
    ],
    "sameAs": [
      "https://jgps.in/author/rifaul-hasan/"
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jgps.in/hi/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://jgps.in/hi/blog/" },
      { "@type": "ListItem", "position": 3, "name": "Rifaul Hasan", "item": "https://jgps.in/author/rifaul-hasan/" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Author Header */}
      <div className="bg-gradient-to-r from-[#035c00] to-[#023b00] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-4xl font-bold">
              RH
            </div>
            <div>
              <h1 className="text-3xl font-extrabold">Rifaul Hasan</h1>
              <p className="text-white/80 mt-1">प्रधानाचार्य और शिक्षा विशेषज्ञ</p>
              <p className="text-white/60 text-sm mt-2">जय गोविंद पब्लिक स्कूल, जोया, अमरोहा (UP)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Author Bio */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">परिचय</h2>
          <p className="text-gray-700 leading-relaxed">
            Rifaul Hasan जी जय गोविंद पब्लिक स्कूल, जोया (अमरोहा) के प्रधानाचार्य हैं। पिछले 12 साल से वे बच्चों को नवोदय, सैनिक स्कूल और AMU प्रवेश परीक्षा की तैयारी करा रहे हैं। उनके मार्गदर्शन में 500 से ज़्यादा बच्चों ने विभिन्न प्रतियोगी परीक्षाओं में सफलता हासिल की है।
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {['नवोदय प्रवेश', 'सैनिक स्कूल', 'AMU कोचिंग', 'JMI कोचिंग', 'प्राथमिक शिक्षा'].map(tag => (
              <span key={tag} className="bg-[#035c00]/10 text-[#035c00] text-xs font-bold px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author's Articles */}
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Rifaul Hasan द्वारा लिखित लेख ({authorArticles.length})
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {authorArticles.map(article => (
            <Link key={article.slug} href={`/hi/blog/${article.slug}/`}
              className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group block">
              <div className="p-4">
                <span className="inline-block bg-purple-50 text-purple-700 border-purple-200 border text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                  {article.category}
                </span>
                <h3 className="mt-2 text-sm font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-[#035c00] transition-colors">
                  {article.title}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-2 mt-1">{article.description}</p>
                <div className="flex items-center gap-3 text-[11px] text-gray-400 mt-3">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
