import { Metadata } from 'next';
import Link from 'next/link';
import Image from '@/components/LazyImage';

export const metadata: Metadata = {
  title: 'Jamia Class 6 Syllabus 2027 – JMI Entrance Exam Pattern | JGPS',
  description: 'Complete Jamia class 6 syllabus and jmi class 9 syllabus for 2027. Understand the Jamia entrance exam pattern and subject-wise weightage (EVS, Math, English).',
  keywords: 'jamia class 6 syllabus, jmi entrance exam syllabus class 6 9, jamia entrance exam pattern, jmi class 9 syllabus',
};

export default function JmiSyllabusPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-gray-500 flex gap-2">
          <Link href="/" className="hover:text-[#035c00]">Home</Link> / 
          <Link href="/coaching" className="hover:text-[#035c00]">Coaching</Link> / 
          <Link href="/coaching/jmi-entrance" className="hover:text-[#035c00]">JMI Entrance</Link> / 
          <span className="text-gray-800 font-medium">Syllabus</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <Image 
          src="/images/coaching/jmi_cluster_hero.avif" 
          alt="Jamia Millia Islamia Entrance Syllabus" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
            <span className="bg-yellow-400 text-yellow-950 font-bold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider mb-4 inline-block">
              Exam Pattern & Syllabus
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
              Jamia Class 6 & 9 Syllabus 2027
            </h1>
            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
              Understand the official <strong>jmi entrance exam syllabus class 6 9</strong>. Get a full breakdown of the 100-mark objective test pattern to plan your preparation.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-12">
          
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-4">Jamia Entrance Exam Pattern</h2>
            <p className="text-gray-600 mb-6">
              Before looking at the chapters, you need to understand the <strong>jamia entrance exam pattern</strong>. Unlike AMU, Jamia Millia Islamia does not conduct interviews for Class 6 and 9. Selection is 100% based on the written OMR test.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Marks Distribution (Class 6)</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex justify-between border-b border-blue-200 pb-2">
                  <span><strong>Section I:</strong> Environmental Studies (EVS) / Science</span>
                  <span className="font-bold">50 Marks</span>
                </li>
                <li className="flex justify-between border-b border-blue-200 pb-2">
                  <span><strong>Section II:</strong> Mathematics</span>
                  <span className="font-bold">30 Marks</span>
                </li>
                <li className="flex justify-between border-b border-blue-200 pb-2">
                  <span><strong>Section III:</strong> English</span>
                  <span className="font-bold">20 Marks</span>
                </li>
                <li className="flex justify-between text-[#035c00] font-bold pt-2">
                  <span>Total Written Test</span>
                  <span>100 Marks (2 Hours)</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-sm text-yellow-900 font-semibold leading-relaxed">
                 THE EVS FACTOR: In Class 6, EVS carries 50% of the total weightage. This is the make-or-break section for Jamia.
              </p>
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100" id="jamia-class-6-syllabus">
            <h2 className="text-2xl font-bold text-[#035c00] mb-6">Detailed Jamia Class 6 Syllabus</h2>
            <p className="text-gray-600 mb-6">
              The <strong>jamia class 6 syllabus</strong> is based on the NCERT/CBSE curriculum of Class 5.
            </p>

            <div className="space-y-6">
              <div className="border border-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 border-b pb-2">1. Environmental Studies (50 Marks)</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Super Senses, A Snake Charmer's Story, From Tasting to Digesting, Mangoes Round the Year, Seeds and Seeds, Every Drop Counts, Experiments with Water, A Treat for Mosquitoes, Up You Go!, Walls Tell Stories, Sunita in Space, What if it Finishes...?, A Shelter so High!, When the Earth Shook!, Blow Hot Blow Cold, Who will do this Work?, Across the Wall, No Place for Us?, A Seed tells a Farmer's Story, Whose Forests?, Like Father Like Daughter, On the Move Again.
                </p>
              </div>

              <div className="border border-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 border-b pb-2">2. Mathematics (30 Marks)</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The Fish Tale, Shapes and Angles, How Many Squares?, Parts and Wholes, Does it Look the Same?, Be My Multiple I&apos;ll be Your Factor, Can You See the Pattern?, Mapping Your Way, Boxes and Sketches, Tenths and Hundredths, Area and its Boundary, Smart Charts, Ways to Multiply and Divide, How Big? How Heavy?
                </p>
              </div>

              <div className="border border-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 border-b pb-2">3. English (20 Marks)</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                  Nouns, Pronouns, Adjectives, Adverbs, Prepositions, Conjunctions, Articles, Tenses, Vocabulary (Synonyms & Antonyms), Reading Comprehension (Unseen Passages).
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100" id="jamia-class-9-syllabus">
            <h2 className="text-2xl font-bold text-[#035c00] mb-6">Detailed Jamia Class 9 Syllabus</h2>
            <p className="text-gray-600 mb-6">
              The <strong>jmi class 9 syllabus</strong> is strictly based on the NCERT Class 8 curriculum. The exam pattern shifts to: English (25 Marks), Math (30 Marks), Science (25 Marks), and Social Science (20 Marks).
            </p>
            <div className="space-y-4">
              <p className="text-gray-600 text-sm"><strong>Mathematics (30 Marks):</strong> Rational Numbers, Linear Equations, Quadrilaterals, Data Handling, Squares & Roots, Cubes & Roots, Comparing Quantities, Algebraic Expressions, Mensuration, Exponents & Powers, Factorization, Graphs.</p>
              <p className="text-gray-600 text-sm"><strong>Science (25 Marks):</strong> Crop Production, Microorganisms, Synthetic Fibres, Metals & Non-Metals, Coal & Petroleum, Combustion, Cell Structure, Reproduction, Force & Pressure, Friction, Sound, Chemical Effects of Current, Light, Solar System.</p>
              <p className="text-gray-600 text-sm"><strong>English (25 Marks):</strong> Comprehension, Active/Passive Voice, Direct/Indirect Speech, Tenses, Modals, Prepositions.</p>
              <p className="text-gray-600 text-sm"><strong>Social Science (20 Marks):</strong> History (1857 Revolt, Colonialism), Geography (Resources, Agriculture), Civics (Constitution, Judiciary).</p>
            </div>
          </section>

        </div>

        {/* Sidebar Info & Links */}
        <div className="space-y-8">
          <div className="bg-[#035c00] text-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-4">Navigate JMI Hub</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/coaching/jmi-entrance/eligibility-and-dates" className="text-white hover:text-yellow-400 font-medium flex items-center justify-between">
                  <span>Eligibility & Dates</span>
                  <span>&rarr;</span>
                </Link>
              </li>
              <li className="border-t border-green-800 pt-3">
                <Link href="/coaching/jmi-entrance/previous-year-papers" className="text-white hover:text-yellow-400 font-medium flex items-center justify-between">
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
              At JGPS Joya, our dedicated JMI batches cover this exact syllabus with a massive focus on the NCERT EVS section to guarantee qualification.
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
