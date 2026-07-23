import { Metadata } from 'next';
import Link from 'next/link';
import Image from '@/components/LazyImage';

export const metadata: Metadata = {
  title: 'Sainik School Class 6 Math Syllabus & Exam Pattern | AISSEE 2027',
  description: 'Master the sainik school class 6 math syllabus and sainik school reasoning syllabus. Get the complete aissee syllabus class 9 pdf details for 2027.',
  keywords: 'sainik school class 6 math syllabus, aissee syllabus class 9 pdf, sainik school reasoning syllabus',
};

export default function SainikSyllabusPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-gray-500 flex gap-2">
          <Link href="/" className="hover:text-[#035c00]">Home</Link> / 
          <Link href="/coaching" className="hover:text-[#035c00]">Coaching</Link> / 
          <Link href="/coaching/sainik-school" className="hover:text-[#035c00]">Sainik School</Link> / 
          <span className="text-gray-800 font-medium">Syllabus</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <Image 
          src="/images/coaching/sainik_cluster_hero.avif" 
          alt="Sainik School Syllabus AISSEE" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
            <span className="bg-yellow-400 text-yellow-950 font-bold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider mb-4 inline-block">
              Exam Pattern & Syllabus
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
              AISSEE Sainik School Syllabus 2027
            </h1>
            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
              Understand the official <strong>sainik school class 6 math syllabus</strong> and reasoning topics. Master the exact test pattern to clear the NDA feeder schools entrance.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-12">
          
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-4">AISSEE Exam Pattern</h2>
            <p className="text-gray-600 mb-6">
              The All India Sainik School Entrance Examination (AISSEE) is renowned for its intense focus on Mathematics. Unlike AMU or JMI, a single math question in the Sainik exam carries 3 marks for Class 6!
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Marks Distribution (Class 6)</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex justify-between border-b border-blue-200 pb-2">
                  <span><strong>Mathematics:</strong> 50 Qs × 3 Marks</span>
                  <span className="font-bold">150 Marks</span>
                </li>
                <li className="flex justify-between border-b border-blue-200 pb-2">
                  <span><strong>Intelligence / Reasoning:</strong> 25 Qs × 2 Marks</span>
                  <span className="font-bold">50 Marks</span>
                </li>
                <li className="flex justify-between border-b border-blue-200 pb-2">
                  <span><strong>Language (English/Hindi):</strong> 25 Qs × 2 Marks</span>
                  <span className="font-bold">50 Marks</span>
                </li>
                <li className="flex justify-between border-b border-blue-200 pb-2">
                  <span><strong>General Knowledge:</strong> 25 Qs × 2 Marks</span>
                  <span className="font-bold">50 Marks</span>
                </li>
                <li className="flex justify-between text-[#035c00] font-bold pt-2">
                  <span>Total Written Test</span>
                  <span>300 Marks (150 Minutes)</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-sm text-yellow-900 font-semibold leading-relaxed">
                 THE MATH FACTOR: Mathematics accounts for 50% of your total score. If your child is weak in math, passing the Sainik School exam is mathematically impossible.
              </p>
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100" id="class-6-syllabus">
            <h2 className="text-2xl font-bold text-[#035c00] mb-6">Detailed Sainik School Class 6 Syllabus</h2>

            <div className="space-y-6">
              <div className="border border-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#035c00] mb-3 border-b pb-2">1. Mathematics (150 Marks)</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  The <strong>sainik school class 6 math syllabus</strong> is extensive and goes beyond the standard Class 5 NCERT level. It touches Class 6 concepts.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Number System, Fractional numbers, Decimals, L.C.M. & H.C.F., Ratio & Proportion, Percentage, Profit & Loss, Simple Interest, Unitary Method, Area and Perimeter, Volume, Temperature, Angle, Data Handling, Speed Time & Distance, Average.
                </p>
              </div>

              <div className="border border-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#035c00] mb-3 border-b pb-2">2. Intelligence (50 Marks)</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  The <strong>sainik school reasoning syllabus</strong> requires specific practice as these topics are not taught in regular schools.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Analogies (verbal & non-verbal), Classification, Series completion, Pattern completion, Coding-decoding, Logical Venn diagrams, Direction sense, Mathematical operations, Blood relations, Mirror images.
                </p>
              </div>

              <div className="border border-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#035c00] mb-3 border-b pb-2">3. General Knowledge (50 Marks)</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                  Different types of Scientific instruments, Icons & Symbols of India, Core Indian Constitution parameters, History highlights, Basic Geography, Plants & Animals, Sports & awards, Defense forces overview (Army, Navy, Air Force ranks and commands).
                </p>
              </div>

              <div className="border border-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#035c00] mb-3 border-b pb-2">4. Language (50 Marks)</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                  Comprehension passages, Prepositions, Conjunctions, Tenses, Pronouns, Adverbs, Adjectives, Subject-Verb agreement, Synonyms & Antonyms, Singular & Plural, Correct spellings, Ordering of words in a sentence.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100" id="class-9-syllabus">
            <h2 className="text-2xl font-bold text-[#035c00] mb-6">AISSEE Class 9 Syllabus</h2>
            <p className="text-gray-600 mb-6">
              For complete details, students can refer to the official <strong>aissee syllabus class 9 pdf</strong> provided by NTA. The Class 9 paper is for 400 marks.
            </p>
            <div className="space-y-4">
              <p className="text-gray-600 text-sm"><strong>Mathematics (200 Marks!):</strong> Rational Numbers, Linear Equations, Quadrilaterals, Data Handling, Squares & Roots, Cubes & Roots, Comparing Quantities, Algebraic Expressions, Mensuration, Exponents & Powers, Factorization, Graphs.</p>
              <p className="text-gray-600 text-sm"><strong>English (50 Marks):</strong> Reading comprehension, grammar, vocabulary, active/passive, direct/indirect.</p>
              <p className="text-gray-600 text-sm"><strong>General Science (50 Marks):</strong> Based heavily on NCERT Class 8 Science.</p>
              <p className="text-gray-600 text-sm"><strong>Social Science (50 Marks):</strong> History, Geography, and Civics from NCERT Class 8.</p>
              <p className="text-gray-600 text-sm"><strong>Intelligence (50 Marks):</strong> Advanced logical reasoning and spatial aptitude.</p>
            </div>
          </section>

        </div>

        {/* Sidebar Info & Links */}
        <div className="space-y-8">
          <div className="bg-[#035c00] text-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-4">Navigate Sainik Hub</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/coaching/sainik-school/eligibility-and-dates" className="text-white hover:text-yellow-400 font-medium flex items-center justify-between">
                  <span>Eligibility & Dates</span>
                  <span>&rarr;</span>
                </Link>
              </li>
              <li className="border-t border-green-800 pt-3">
                <Link href="/coaching/sainik-school/previous-year-papers" className="text-white hover:text-yellow-400 font-medium flex items-center justify-between">
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
            <h3 className="text-lg font-bold text-gray-900 mb-2">Math is the Key</h3>
            <p className="text-sm text-gray-700 mb-4">
              Because Math is 50% of the exam, our coaching center dedicates 2 hours daily just to Mathematics, teaching students Vedic Math shortcuts to solve problems faster.
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
