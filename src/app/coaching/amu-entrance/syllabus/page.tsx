import { Metadata } from 'next';
import Link from 'next/link';
import Image from '@/components/LazyImage';

export const metadata: Metadata = {
  title: 'AMU Class 6 Syllabus 2027 – Exam Pattern & Subject-wise PDF | JGPS',
  description: 'Download the complete AMU Class 6 syllabus and AMU Class 9 syllabus for 2027. Understand the AMU 6th class entrance exam pattern (85 marks) and subject weightage.',
  keywords: 'amu class 6 syllabus, amu 6th class entrance exam pattern, amu class 6 exam pattern 85 marks, amu class 9 syllabus, AMU entrance syllabus PDF',
};

export default function AmuSyllabusPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-gray-500 flex gap-2">
          <Link href="/" className="hover:text-[#035c00]">Home</Link> / 
          <Link href="/coaching" className="hover:text-[#035c00]">Coaching</Link> / 
          <Link href="/coaching/amu-entrance" className="hover:text-[#035c00]">AMU Entrance</Link> / 
          <span className="text-gray-800 font-medium">Syllabus</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <Image 
          src="/images/coaching/amu_cluster_hero.avif" 
          alt="AMU Entrance Preparation Students" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
            <span className="bg-yellow-400 text-yellow-950 font-bold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider mb-4 inline-block">
              Exam Pattern & Syllabus
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
              AMU Class 6 & 9 Syllabus 2027
            </h1>
            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
              Understand exactly what to study. A complete breakdown of the 85-mark exam pattern and subject-wise topics for Aligarh Muslim University school admissions.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-12">
          
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-4">The AMU 6th Class Entrance Exam Pattern</h2>
            <p className="text-gray-600 mb-6">
              Before jumping into the syllabus, it is critical for parents to understand the <strong>amu 6th class entrance exam pattern</strong>. The AMU written test is entirely objective (Multiple Choice Questions) and carries a total of <strong>85 marks</strong>. The remaining 15 marks are reserved for an interview.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Marks Distribution (AMU Class 6 Exam Pattern 85 Marks)</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex justify-between border-b border-green-200 pb-2">
                  <span><strong>Section I:</strong> Languages (English, Hindi, Urdu)</span>
                  <span className="font-bold">25 Marks</span>
                </li>
                <li className="flex justify-between border-b border-green-200 pb-2">
                  <span><strong>Section II:</strong> Mathematics</span>
                  <span className="font-bold">30 Marks</span>
                </li>
                <li className="flex justify-between border-b border-green-200 pb-2">
                  <span><strong>Section II:</strong> Science</span>
                  <span className="font-bold">30 Marks</span>
                </li>
                <li className="flex justify-between text-[#035c00] font-bold pt-2">
                  <span>Total Written Test</span>
                  <span>85 Marks</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-sm text-yellow-900 font-semibold leading-relaxed">
                 THE 40% RULE: A student MUST score at least 10 marks (40%) in Section I (Languages). If your child scores brilliant marks in Math and Science but fails to get 10 marks in languages, their paper will be disqualified. This is why Urdu preparation is essential!
              </p>
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100" id="amu-class-6-syllabus">
            <h2 className="text-2xl font-bold text-[#035c00] mb-6">Detailed AMU Class 6 Syllabus</h2>
            <p className="text-gray-600 mb-6">
              The <strong>amu class 6 syllabus</strong> is strictly based on the NCERT/CBSE curriculum of Class 5. However, the difficulty level of the questions is high.
            </p>

            <div className="space-y-6">
              <div className="border border-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 border-b pb-2">1. Mathematics (30 Marks)</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Number System, Roman Numerals, Factors & Multiples (LCM & HCF), Fractions & Decimals, Unitary Method, Ratio & Proportion, Percentage, Profit & Loss, Simple Interest, Geometry (Lines, Angles, Triangles, Circles), Area & Perimeter, Volume, Basic Algebra, and Data Handling.
                </p>
              </div>

              <div className="border border-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 border-b pb-2">2. Science (30 Marks)</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Food & Health, Deficiency Diseases, Materials & Resources, Living World (Plants & Animals), Adaptations, Force, Work & Energy, Simple Machines, Light & Sound, Air & Water, Natural Disasters, Human Body Systems, and Our Environment.
                </p>
              </div>

              <div className="border border-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 border-b pb-2">3. Languages (25 Marks)</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                  <strong>English:</strong> Nouns, Pronouns, Verbs, Adjectives, Prepositions, Conjunctions, Articles, Tenses, Antonyms & Synonyms, Unseen Passages.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                  <strong>Hindi:</strong> Vyakaran (Sangya, Sarvanam, Visheshan), Ling, Vachan, Vilom Shabd, Paryayvachi Shabd, Muhavare.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <strong>Urdu:</strong> Basic Grammar (Ism, Zameer, Sifat), Vocabulary, Opposite words, Singular-Plural, and basic reading comprehension.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100" id="amu-class-9-syllabus">
            <h2 className="text-2xl font-bold text-[#035c00] mb-6">Detailed AMU Class 9 Syllabus</h2>
            <p className="text-gray-600 mb-6">
              The <strong>amu class 9 syllabus</strong> is based on the NCERT Class 8 curriculum. The exam pattern is identical (85 marks objective, 15 marks interview) with the same 40% language qualifying rule.
            </p>
            <div className="space-y-4">
              <p className="text-gray-600 text-sm"><strong>Mathematics (30 Marks):</strong> Rational Numbers, Linear Equations, Quadrilaterals, Data Handling, Squares & Roots, Cubes & Roots, Comparing Quantities, Algebraic Expressions, Mensuration, Exponents & Powers, Factorization.</p>
              <p className="text-gray-600 text-sm"><strong>Science (30 Marks):</strong> Crop Production, Microorganisms, Synthetic Fibres, Metals & Non-Metals, Coal & Petroleum, Combustion, Cell Structure, Reproduction, Force & Pressure, Friction, Sound, Chemical Effects of Current, Light, Solar System.</p>
              <p className="text-gray-600 text-sm"><strong>Languages (25 Marks):</strong> Advanced Grammar and Reading Comprehension in English, Hindi, and Urdu (Class 8 standard).</p>
            </div>
          </section>

        </div>

        {/* Sidebar Info & Links */}
        <div className="space-y-8">
          <div className="bg-[#035c00] text-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-4">Navigate AMU Hub</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/coaching/amu-entrance/eligibility-and-dates" className="text-white hover:text-yellow-400 font-medium flex items-center justify-between">
                  <span>Eligibility & Dates</span>
                  <span>&rarr;</span>
                </Link>
              </li>
              <li className="border-t border-green-800 pt-3">
                <Link href="/coaching/amu-entrance/previous-year-papers" className="text-white hover:text-yellow-400 font-medium flex items-center justify-between">
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
            <h3 className="text-lg font-bold text-gray-900 mb-2">Need Expert Coaching?</h3>
            <p className="text-sm text-gray-700 mb-4">
              At JGPS Joya, our dedicated AMU batches cover this exact syllabus with a special focus on the Urdu section to guarantee qualification.
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
