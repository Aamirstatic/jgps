import React, { Suspense } from 'react';
import { schoolData } from "@/data/school-data";
import { Metadata } from "next";
import BlogListClient from "./BlogListClient";

export const metadata: Metadata = {
  title: `Education News & Exam Updates 2027 | JGPS Blog`,
  description: `Latest education news, entrance exam updates for AMU, Sainik School, JNVST, JMI, RMS & Vidyagyan. Expert guides by ${schoolData.name} — trusted by thousands of parents in UP.`,
  keywords: "education news India 2026, AMU entrance exam updates, Sainik School AISSEE 2027, JNVST navodaya admission, JMI entrance coaching, UP school news, CBSE board exam tips, school blog Amroha",
  alternates: {
    canonical: "https://jgps.in/blog",
  },
  openGraph: {
    title: "Education News & Exam Updates 2027 | JGPS Blog",
    description: "Latest entrance exam news, study tips, and school updates from Jai Govind Public School, Joya Amroha.",
    url: "https://jgps.in/blog",
    siteName: schoolData.name,
    locale: "en_IN",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* News-style masthead */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#035c00] font-extrabold text-xs uppercase tracking-widest bg-[#035c00]/10 px-3 py-1 rounded-full">
                  JGPS Newsroom
                </span>
                <span className="text-xs text-gray-400 font-medium">
                  {new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                Education News & <span className="text-[#035c00]">Exam Updates</span>
              </h1>
              <p className="text-sm text-gray-500 mt-1 max-w-xl">
                Expert guides on AMU, JMI, Sainik School, JNVST & more — written by educators, for parents & students.
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="inline-flex items-center gap-1.5 bg-red-50 text-red-700 border border-red-200 text-xs font-bold px-3 py-1.5 rounded-full animate-pulse">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
                Live Updates
              </span>
            </div>
          </div>
        </div>
      </div>

      <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-12 text-center text-gray-400">Loading posts...</div>}>
        <BlogListClient />
      </Suspense>
    </div>
  );
}
