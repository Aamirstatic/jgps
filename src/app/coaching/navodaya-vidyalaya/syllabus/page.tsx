import { Metadata } from 'next';
import Link from 'next/link';
import Image from '@/components/LazyImage';

export const metadata: Metadata = {
  title: 'Navodaya Syllabus Class 6 PDF 2027 | JNVST Pattern',
  description: 'Download the official navodaya syllabus class 6 pdf. Master the jnvst class 6 syllabus and understand the navodaya exam pattern to score high.',
  keywords: 'navodaya syllabus class 6 pdf, jnvst class 6 syllabus, navodaya exam pattern',
};

export default function NavodayaSyllabusPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-gray-500 flex gap-2">
          <Link href="/" className="hover:text-[#035c00]">Home</Link> / 
          <Link href="/coaching" className="hover:text-[#035c00]">Coaching</Link> / 
          <Link href="/coaching/navodaya-vidyalaya" className="hover:text-[#035c00]">Navodaya Entrance</Link> / 
          <span className="text-gray-800 font-medium">Syllabus</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <Image 
          src="/images/coaching/navodaya_cluster_hero.avif" 
          alt="Navodaya Syllabus and Pattern" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
            <span className="bg-yellow-400 text-yellow-950 font-bold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider mb-4 inline-block">
              Exam Pattern & Syllabus
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
              JNVST Navodaya Syllabus Class 6
            </h1>
            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
              Understand the official <strong>navodaya exam pattern</strong> where Mental Ability holds 50% weightage. Get the detailed topic-wise <strong>jnvst class 6 syllabus</strong>.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-12">
          
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-4">JNVST Class 6 Exam Pattern</h2>
            <p className="text-gray-600 mb-6">
              The selection test is of 2-hour duration from 11:30 AM to 01:30 PM and has 3 sections with only objective type questions. There are 80 questions in all for 100 marks. There is NO negative marking.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6 overflow-x-auto">
              <table className="min-w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-blue-200">
                    <th className="py-2 text-gray-800">Type of Test</th>
                    <th className="py-2 text-gray-800">Number of Questions</th>
                    <th className="py-2 text-gray-800">Marks</th>
                    <th className="py-2 text-gray-800">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-blue-100">
                    <td className="py-2 font-medium text-gray-700">Mental Ability Test</td>
                    <td className="py-2">40</td>
                    <td className="py-2">50</td>
                    <td className="py-2">60 Minutes</td>
                  </tr>
                  <tr className="border-b border-blue-100">
                    <td className="py-2 font-medium text-gray-700">Arithmetic Test</td>
                    <td className="py-2">20</td>
                    <td className="py-2">25</td>
                    <td className="py-2">30 Minutes</td>
                  </tr>
                  <tr className="border-b border-blue-100">
                    <td className="py-2 font-medium text-gray-700">Language Test</td>
                    <td className="py-2">20</td>
                    <td className="py-2">25</td>
                    <td className="py-2">30 Minutes</td>
                  </tr>
                  <tr className="font-bold text-[#035c00]">
                    <td className="py-2">Total</td>
                    <td className="py-2">80 Questions</td>
                    <td className="py-2">100 Marks</td>
                    <td className="py-2">120 Minutes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-6">
              <p className="text-sm text-yellow-900 font-semibold leading-relaxed">
                 STRATEGY: Mental Ability is the easiest section to score full marks in, yet it carries 50% of the weightage. Our coaching focuses heavily on ensuring students never lose a mark here.
              </p>
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100" id="class-6-syllabus">
            <h2 className="text-2xl font-bold text-[#035c00] mb-6">Detailed Navodaya Class 6 Syllabus</h2>

            <div className="space-y-6">
              <div className="border border-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#035c00] mb-3 border-b pb-2">1. Mental Ability Test (MAT)</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  This is a non-verbal test consisting only of figures and diagrams. It assesses general logical functioning.
                </p>
                <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                  <li>Odd-Man Out</li>
                  <li>Figure Matching</li>
                  <li>Pattern Completion</li>
                  <li>Figure Series Completion</li>
                  <li>Analogy</li>
                  <li>Geometrical Figure Completion (Triangle, Square, Circle)</li>
                  <li>Mirror Imaging</li>
                  <li>Punched Hold Pattern (Folding/Unfolding)</li>
                  <li>Space Visualization</li>
                  <li>Embedded Figure</li>
                </ul>
              </div>

              <div className="border border-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#035c00] mb-3 border-b pb-2">2. Arithmetic Test</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  The main purpose of this test is to measure basic competencies in Mathematics.
                </p>
                <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                  <li>Number and numeric system.</li>
                  <li>Four fundamental operations on whole numbers.</li>
                  <li>Fractional numbers and four fundamental operations on them.</li>
                  <li>Factors and multiples including their properties.</li>
                  <li>LCM and HCF of numbers.</li>
                  <li>Decimals and fundamental operations on them.</li>
                  <li>Conversion of fractions to decimals and vice-versa.</li>
                  <li>Measurement of length, mass, capacity, time, money etc.</li>
                  <li>Distance, time and speed.</li>
                  <li>Approximation of expressions.</li>
                  <li>Simplification of Numerical Expressions.</li>
                  <li>Percentage and its applications.</li>
                  <li>Profit and loss.</li>
                  <li>Simple interest.</li>
                  <li>Perimeter, area and volume.</li>
                </ul>
              </div>

              <div className="border border-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#035c00] mb-3 border-b pb-2">3. Language Test</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                  This test is to assess reading comprehension. The test consists of four passages. Each passage is followed by 5 questions.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Candidates are required to read the passage carefully and answer the questions. The questions are based directly on the passage content, vocabulary, and basic grammar (like identifying antonyms or synonyms within the context).
                </p>
              </div>
            </div>
          </section>

        </div>

        {/* Sidebar Info & Links */}
        <div className="space-y-8">
          <div className="bg-[#035c00] text-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-4">Navigate Navodaya Hub</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/coaching/navodaya-vidyalaya/eligibility-and-dates" className="text-white hover:text-yellow-400 font-medium flex items-center justify-between">
                  <span>Eligibility & Dates</span>
                  <span>&rarr;</span>
                </Link>
              </li>
              <li className="border-t border-green-800 pt-3">
                <Link href="/coaching/navodaya-vidyalaya/previous-year-papers" className="text-white hover:text-yellow-400 font-medium flex items-center justify-between">
                  <span>Previous Year Papers</span>
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
            <h3 className="text-lg font-bold text-gray-900 mb-2">Download Official PDF</h3>
            <p className="text-sm text-gray-700 mb-4">
              Get the complete <strong>navodaya syllabus class 6 pdf</strong> direct from the NVS portal along with sample OMR sheets.
            </p>
            <Link
              href="/resources/navodaya-class-6-papers"
              className="bg-[#035c00] text-white font-bold py-3 px-4 rounded-lg text-center block text-sm transition-all shadow-md hover:bg-[#024700]"
            >
              Go to Downloads
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
