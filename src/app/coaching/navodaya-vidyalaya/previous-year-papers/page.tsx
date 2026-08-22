import { Metadata } from 'next';
import Link from 'next/link';
import Image from '@/components/LazyImage';

export const metadata: Metadata = {
  title: 'Navodaya Previous Year Paper PDF Class 6 | JNVST Sample Papers',
  description: 'Download the official navodaya vidyalaya entrance exam question paper and navodaya previous year paper pdf class 6. Get jnvst sample paper sets with OMR.',
  keywords: 'navodaya vidyalaya entrance exam question paper, navodaya previous year paper pdf class 6, jnvst sample paper',
};

export default function NavodayaPapersPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-gray-500 flex gap-2">
          <Link href="/" className="hover:text-[#035c00]">Home</Link> / 
          <Link href="/coaching" className="hover:text-[#035c00]">Coaching</Link> / 
          <Link href="/coaching/navodaya-vidyalaya" className="hover:text-[#035c00]">Navodaya Entrance</Link> / 
          <span className="text-gray-800 font-medium">Previous Papers</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <Image 
          src="/images/coaching/navodaya_cluster_hero.avif" 
          alt="Navodaya Previous Year Papers" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
            <span className="bg-yellow-400 text-yellow-950 font-bold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider mb-4 inline-block">
              Mock Tests & Papers
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
              JNVST Navodaya Question Papers
            </h1>
            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
              Practicing under timed conditions is crucial for the JNVST. Download the official <strong>navodaya previous year paper pdf class 6</strong> here.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-12">
          
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-6">Navodaya Paper Downloads</h2>
            <p className="text-gray-600 mb-8">
              Because of the strict 120-minute time limit for 80 questions, students must practice heavily. Get your <strong>jnvst sample paper</strong> and <strong>navodaya vidyalaya entrance exam question paper</strong> downloads below.
            </p>

            <div className="space-y-4">
              {/* Paper Item */}
              <div className="flex flex-col sm:flex-row items-center justify-between p-5 border border-gray-200 rounded-xl hover:border-[#035c00] transition-colors">
                <div className="flex items-center gap-4 mb-4 sm:mb-0 w-full">
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center font-bold">PDF</div>
                  <div>
                    <h3 className="font-bold text-gray-900">JNVST 2026 Class 6 Question Paper</h3>
                    <p className="text-sm text-gray-500">Official Question Paper + Answer Key (Hindi/English Medium)</p>
                  </div>
                </div>
                <button className="w-full sm:w-auto bg-[#035c00] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#024700] transition-colors whitespace-nowrap">
                  Download
                </button>
              </div>

              {/* Paper Item */}
              <div className="flex flex-col sm:flex-row items-center justify-between p-5 border border-gray-200 rounded-xl hover:border-[#035c00] transition-colors">
                <div className="flex items-center gap-4 mb-4 sm:mb-0 w-full">
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center font-bold">PDF</div>
                  <div>
                    <h3 className="font-bold text-gray-900">JNVST 2025 Class 6 Question Paper</h3>
                    <p className="text-sm text-gray-500">Official Question Paper + Answer Key (Hindi/English Medium)</p>
                  </div>
                </div>
                <button className="w-full sm:w-auto bg-[#035c00] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#024700] transition-colors whitespace-nowrap">
                  Download
                </button>
              </div>

              {/* Paper Item */}
              <div className="flex flex-col sm:flex-row items-center justify-between p-5 border border-gray-200 rounded-xl hover:border-[#035c00] transition-colors">
                <div className="flex items-center gap-4 mb-4 sm:mb-0 w-full">
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center font-bold">PDF</div>
                  <div>
                    <h3 className="font-bold text-gray-900">JNVST Official OMR Sheet Template</h3>
                    <p className="text-sm text-gray-500">Printable OMR sheet for daily practice</p>
                  </div>
                </div>
                <button className="w-full sm:w-auto bg-[#035c00] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#024700] transition-colors whitespace-nowrap">
                  Download
                </button>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-4">How to Attempt the Paper</h2>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <ol className="list-decimal pl-5 space-y-4 text-gray-700">
                <li>
                  <strong>Start with Mental Ability:</strong> Since this section has 40 questions (50 Marks), finish it first within 45-50 minutes. Do not spend too much time on a single tricky figure.
                </li>
                <li>
                  <strong>Attempt Language Next:</strong> Read the passages carefully. The 20 questions here should take about 20-25 minutes.
                </li>
                <li>
                  <strong>Arithmetic at the End:</strong> Mathematics requires calculation and rough work. Dedicate the remaining 45 minutes solely to this section to avoid silly mistakes.
                </li>
                <li>
                  <strong>Fill OMR Correctly:</strong> Use only Blue/Black Ball Point Pen. Do not use pencil. Darken the circles completely.
                </li>
              </ol>
            </div>
          </section>

        </div>

        {/* Sidebar Info & Links */}
        <div className="space-y-8">
          <div className="bg-[#035c00] text-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-4">Navigate Navodaya Hub</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/coaching/navodaya-vidyalaya/syllabus" className="text-white hover:text-yellow-400 font-medium flex items-center justify-between">
                  <span>Detailed Syllabus</span>
                  <span>&rarr;</span>
                </Link>
              </li>
              <li className="border-t border-green-800 pt-3">
                <Link href="/coaching/navodaya-vidyalaya/eligibility-and-dates" className="text-white hover:text-yellow-400 font-medium flex items-center justify-between">
                  <span>Eligibility & Dates</span>
                  <span>&rarr;</span>
                </Link>
              </li>
              <li className="border-t border-green-800 pt-3">
                <Link href="/entrance-eligibility-checker" className="text-white hover:text-yellow-400 font-medium flex items-center justify-between">
                  <span>Eligibility Checker Tool</span>
                  <span>&rarr;</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Join Our Test Series</h3>
            <p className="text-sm text-gray-700 mb-4">
              JGPS Joya offers a tough offline test series mimicking the exact JNVST environment. We evaluate OMR sheets digitally to give instant feedback.
            </p>
            <Link
              href="/contact"
              className="bg-[#035c00] text-white font-bold py-3 px-4 rounded-lg text-center block text-sm transition-all shadow-md hover:bg-[#024700]"
            >
              Contact For Mock Tests
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
