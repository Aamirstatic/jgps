import { Metadata } from 'next';
import Link from 'next/link';
import Image from '@/components/LazyImage';

export const metadata: Metadata = {
  title: 'Rashtriya Military School Class 6 Syllabus | RMS CET Pattern',
  description: 'Master the rashtriya military school class 6 syllabus and rms cet exam pattern. Get complete rms cet syllabus class 9 pdf details for 2027.',
  keywords: 'rashtriya military school class 6 syllabus, rms cet exam pattern, rms cet syllabus class 9 pdf',
};

export default function RmsSyllabusPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-gray-500 flex gap-2">
          <Link href="/" className="hover:text-[#035c00]">Home</Link> / 
          <Link href="/coaching" className="hover:text-[#035c00]">Coaching</Link> / 
          <Link href="/coaching/military-school" className="hover:text-[#035c00]">RMS Entrance</Link> / 
          <span className="text-gray-800 font-medium">Syllabus</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <Image 
          src="/images/coaching/rms_cluster_hero.avif" 
          alt="RMS CET Syllabus and Pattern" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
            <span className="bg-yellow-400 text-yellow-950 font-bold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider mb-4 inline-block">
              Exam Pattern & Syllabus
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
              RMS CET Syllabus & Exam Pattern 2027
            </h1>
            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
              Understand the official <strong>rashtriya military school class 6 syllabus</strong>. Master the unique 200-mark test pattern where English only acts as a qualifier.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-12">
          
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-4">RMS CET Exam Pattern</h2>
            <p className="text-gray-600 mb-6">
              The <strong>rms cet exam pattern</strong> is very unique compared to Sainik School. The Class 6 exam is an automated OMR based test consisting of 200 marks, but the English section is ONLY qualifying in nature.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Marks Distribution (Class 6 CET)</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex justify-between border-b border-blue-200 pb-2">
                  <span><strong>English:</strong> 50 Questions</span>
                  <span className="font-bold text-red-600">50 Marks (Qualifying Only)*</span>
                </li>
                <li className="flex justify-between border-b border-blue-200 pb-2">
                  <span><strong>Intelligence Test:</strong> 50 Questions</span>
                  <span className="font-bold">50 Marks</span>
                </li>
                <li className="flex justify-between border-b border-blue-200 pb-2">
                  <span><strong>Mathematics:</strong> 50 Questions</span>
                  <span className="font-bold">50 Marks</span>
                </li>
                <li className="flex justify-between border-b border-blue-200 pb-2">
                  <span><strong>General Knowledge:</strong> 50 Questions</span>
                  <span className="font-bold">50 Marks</span>
                </li>
                <li className="flex justify-between text-[#035c00] font-bold pt-2">
                  <span>Total Written Merit Marks</span>
                  <span>150 Marks (Intelligence + Math + GK)</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-sm text-yellow-900 font-semibold leading-relaxed">
                 THE ENGLISH RULE: A candidate must score at least 35% in English (18 marks out of 50). However, these 50 marks are NOT added to the final merit list. The final selection is based out of the remaining 150 marks + 20 marks Interview.
              </p>
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100" id="class-6-syllabus">
            <h2 className="text-2xl font-bold text-[#035c00] mb-6">Detailed RMS CET Class 6 Syllabus</h2>

            <div className="space-y-6">
              <div className="border border-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#035c00] mb-3 border-b pb-2">1. Mathematics (50 Marks)</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  Questions are based strictly on the NCERT syllabus of Class 5, testing conceptual clarity rather than just speed.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Number System, HCF & LCM, Fractions, Decimals, Ratio and Proportion, Profit & Loss, Simple Interest, Percentage, Time & Work, Time & Distance, Area and Perimeter, Geometry Basics.
                </p>
              </div>

              <div className="border border-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#035c00] mb-3 border-b pb-2">2. Intelligence Test (50 Marks)</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Analogies, Classification (Odd one out), Series completion, Coding-decoding, Alphabetical arrangement of words, Mathematical operations, Direction sense, Blood relations, Non-verbal series.
                </p>
              </div>

              <div className="border border-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#035c00] mb-3 border-b pb-2">3. General Knowledge (50 Marks)</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                  History of India, Indian Geography, Indian Constitution basics, General Science, Sports & Awards, Important Days, Defense forces overview, Current Affairs (last 6 months), Inventions and Discoveries.
                </p>
              </div>

              <div className="border border-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#035c00] mb-3 border-b pb-2">4. English (50 Marks - Qualifying)</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                  Antonyms, Synonyms, Prepositions, Composition, Framing Questions, Articles, Comprehension Passages, Affirmative and Interrogative Sentences, Spelling Check, Error Correction.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100" id="class-9-syllabus">
            <h2 className="text-2xl font-bold text-[#035c00] mb-6">RMS CET Class 9 Pattern & Syllabus</h2>
            <p className="text-gray-600 mb-6">
              For complete topic details, students can refer to the official <strong>rms cet syllabus class 9 pdf</strong>. The Class 9 paper is for 200 marks, consisting of two papers.
            </p>
            <div className="space-y-4">
              <p className="text-gray-600 text-sm"><strong>Paper 1 (100 Marks):</strong> English (50 Marks), Hindi (20 Marks), Social Science (30 Marks).</p>
              <p className="text-gray-600 text-sm"><strong>Paper 2 (100 Marks):</strong> Mathematics (50 Marks), Science (50 Marks).</p>
              <p className="text-gray-600 text-sm font-semibold text-red-600">Note: For Class 9, candidate must score 50% in each paper to qualify. There is also a 50 Marks Interview for Class 9.</p>
            </div>
          </section>

        </div>

        {/* Sidebar Info & Links */}
        <div className="space-y-8">
          <div className="bg-[#035c00] text-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-4">Navigate RMS Hub</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/coaching/military-school/eligibility-and-dates" className="text-white hover:text-yellow-400 font-medium flex items-center justify-between">
                  <span>Eligibility & Dates</span>
                  <span>&rarr;</span>
                </Link>
              </li>
              <li className="border-t border-green-800 pt-3">
                <Link href="/coaching/military-school/previous-year-papers" className="text-white hover:text-yellow-400 font-medium flex items-center justify-between">
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
            <h3 className="text-lg font-bold text-gray-900 mb-2">The Interview Phase</h3>
            <p className="text-sm text-gray-700 mb-4">
              Unlike Sainik School, RMS has a strict 20-mark personal interview for Class 6. JGPS Joya provides dedicated mock interview panels for our students who clear the written test.
            </p>
            <Link
              href="/contact"
              className="bg-[#035c00] text-white font-bold py-3 px-4 rounded-lg text-center block text-sm transition-all shadow-md hover:bg-[#024700]"
            >
              Contact Coaching Center
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
