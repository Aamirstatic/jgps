import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from '@/components/LazyImage';
import { authors } from '@/data/authors';
import { articles } from '@/data/articles';
import { hindiArticles } from '@/data/hindi-articles';
import { FaPenNib, FaBookReader, FaArrowRight, FaCheckCircle, FaUsers, FaChalkboardTeacher } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Our Expert Authors & Educators | JGPS Content Team',
  description: 'Meet the expert educators and content creators at Jai Govind Public School (JGPS). Our team specializes in entrance exam preparation, student counseling, and academic guidance for Sainik School, JNVST, AMU, and JMI admissions.',
  keywords: 'JGPS authors, JGPS teachers, entrance exam experts, Sainik School coaches, JNVST preparation, AMU entrance, education content writers',
  openGraph: {
    title: 'Our Expert Authors & Educators | JGPS Content Team',
    description: 'Meet the expert educators at Jai Govind Public School who write about entrance exams, admissions, and student success strategies.',
    url: 'https://jgps.in/authors',
    siteName: 'JGPS - Jai Govind Public School',
    type: 'website',
  },
};

function getAuthorArticleCount(authorName: string): number {
  const enCount = articles.filter(a => a.author === authorName).length;
  const hiCount = hindiArticles.filter(a => a.author === authorName).length;
  return enCount + hiCount;
}

function getAuthorTotalReadTime(authorName: string): number {
  const enTime = articles
    .filter(a => a.author === authorName)
    .reduce((acc, curr) => {
      const mins = parseInt(curr.readTime.split(' ')[0]) || 5;
      return acc + mins;
    }, 0);
  const hiTime = hindiArticles
    .filter(a => a.author === authorName)
    .reduce((acc, curr) => {
      const mins = parseInt(curr.readTime.split(' ')[0]) || 5;
      return acc + mins;
    }, 0);
  return enTime + hiTime;
}

export default function AuthorsPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#035c00] to-[#023b00] z-0"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl z-0 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-300/15 rounded-full blur-3xl z-0 translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-5xl mx-auto relative z-10 text-center mt-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
            <FaUsers /> Meet Our Team
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            The Experts Behind<br />
            <span className="text-yellow-300">JGPS Content</span>
          </h1>
          <p className="text-lg md:text-xl text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
            Our team of experienced educators, counselors, and subject matter experts create 
            trusted guides to help your child succeed in entrance exams and academics.
          </p>
          
          {/* Stats Bar */}
          <div className="flex flex-wrap gap-8 justify-center mt-10">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-4">
              <div className="text-3xl font-black text-white">{authors.length}</div>
              <div className="text-xs text-emerald-200 font-bold uppercase tracking-wider">Expert Authors</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-4">
              <div className="text-3xl font-black text-white">{articles.length + hindiArticles.length}+</div>
              <div className="text-xs text-emerald-200 font-bold uppercase tracking-wider">Articles Published</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-4">
              <div className="text-3xl font-black text-white">50+</div>
              <div className="text-xs text-emerald-200 font-bold uppercase tracking-wider">Years Combined Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Authors Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {authors.map((author) => {
            const articleCount = getAuthorArticleCount(author.name);
            const totalReadTime = getAuthorTotalReadTime(author.name);
            
            return (
              <Link
                key={author.id}
                href={`/author/${author.slug}/`}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 flex flex-col"
              >
                {/* Author Header with Gradient */}
                <div className="relative h-32 bg-gradient-to-br from-[#035c00] to-[#023b00] overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-400/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-300/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
                </div>
                
                {/* Profile Image */}
                <div className="relative px-6 -mt-16 mb-4">
                  <div className="relative w-28 h-28 mx-auto md:mx-0">
                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white group-hover:scale-105 transition-transform duration-500">
                      <Image
                        src={author.imageUrl}
                        alt={author.name}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="absolute bottom-1 right-1 bg-white rounded-full p-1 shadow-md border border-gray-100" title="Verified Expert">
                      <FaCheckCircle className="text-blue-500 text-lg" />
                    </div>
                  </div>
                </div>

                {/* Author Info */}
                <div className="px-6 pb-6 flex-grow flex flex-col">
                  <div className="text-center md:text-left mb-4">
                    <h2 className="text-xl font-extrabold text-gray-900 group-hover:text-[#035c00] transition-colors mb-1">
                      {author.name}
                    </h2>
                    <p className="text-sm font-semibold text-[#035c00]">
                      {author.role}
                    </p>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-5 text-center md:text-left line-clamp-3">
                    {author.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-1.5 justify-center md:justify-start mb-5">
                    {author.expertise.slice(0, 3).map((skill, i) => (
                      <span key={i} className="bg-emerald-50 border border-emerald-100 text-emerald-800 text-[10px] px-3 py-1.5 rounded-lg font-bold uppercase tracking-wider">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex gap-4 justify-center md:justify-start bg-gray-50 rounded-2xl px-5 py-3 mb-5 border border-gray-100">
                    <div className="text-center">
                      <div className="flex items-center gap-1 text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1">
                        <FaPenNib className="text-[10px]" /> Articles
                      </div>
                      <div className="text-xl font-black text-gray-900">{articleCount}</div>
                    </div>
                    <div className="w-px bg-gray-200"></div>
                    <div className="text-center">
                      <div className="flex items-center gap-1 text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1">
                        <FaBookReader className="text-[10px]" /> Read Time
                      </div>
                      <div className="text-xl font-black text-gray-900">{totalReadTime}<span className="text-xs font-medium text-gray-500">m</span></div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto flex items-center justify-center md:justify-start gap-2 text-sm font-bold text-[#035c00] group-hover:text-[#024700] transition-colors border-t border-gray-100 pt-4">
                    <FaChalkboardTeacher /> View Articles
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform ml-auto" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-gradient-to-br from-[#035c00] to-[#023b00] rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
              Want Expert Guidance for Your Child?
            </h2>
            <p className="text-emerald-100/90 mb-8 max-w-xl mx-auto">
              Our authors are real educators at JGPS. Get personalized coaching and admission 
              guidance for Sainik School, JNVST, AMU, JMI, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919412137554"
                className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-4 rounded-xl transition-colors text-sm"
              >
                Call: +91 9412137554
              </a>
              <a
                href="https://wa.me/919412137554"
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-colors text-sm border border-white/20"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
