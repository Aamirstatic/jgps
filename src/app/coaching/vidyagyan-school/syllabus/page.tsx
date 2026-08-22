import { Metadata } from 'next';
import Link from 'next/link';
import Image from '@/components/LazyImage';

export const metadata: Metadata = {
  title: 'Vidyagyan School Syllabus For Class 6 In Hindi & Pattern 2027',
  description: 'Download the official vidyagyan school syllabus for class 6 in hindi. Understand the vidyagyan exam pattern for prelims and mains.',
  keywords: 'vidyagyan school syllabus for class 6 in hindi, vidyagyan entrance exam class 6 syllabus, vidyagyan exam pattern',
};

export default function VidyagyanSyllabusPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-gray-500 flex gap-2">
          <Link href="/" className="hover:text-[#035c00]">Home</Link> / 
          <Link href="/coaching" className="hover:text-[#035c00]">Coaching</Link> / 
          <Link href="/coaching/vidyagyan-school" className="hover:text-[#035c00]">Vidyagyan Entrance</Link> / 
          <span className="text-gray-800 font-medium">Syllabus</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <Image 
          src="/images/coaching/vidyagyan_cluster_hero.avif" 
          alt="Vidyagyan Syllabus and Pattern" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
            <span className="bg-yellow-400 text-yellow-950 font-bold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider mb-4 inline-block">
              Exam Pattern & Syllabus
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
              Vidyagyan School Syllabus & Pattern 2027
            </h1>
            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
              Understand the two-tier <strong>vidyagyan exam pattern</strong>. Get the complete <strong>vidyagyan school syllabus for class 6 in hindi</strong>.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-12">
          
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-4">Vidyagyan Exam Pattern (Two-Tier)</h2>
            <p className="text-gray-600 mb-6">
              The selection process is highly tough. Unlike Navodaya, Vidyagyan has a two-tier exam system: Prelims and Mains.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Tier 1: Preliminary Exam</h3>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Mode:</strong> Offline OMR-based test.</li>
                <li><strong>Language:</strong> Hindi (Since it targets rural UP students).</li>
                <li><strong>Duration:</strong> 2 Hours.</li>
                <li><strong>Subjects:</strong> Language (Hindi), Mathematics, and Mental Ability.</li>
                <li><strong>Objective:</strong> To shortlist the top performing students for the Mains examination. Lakhs of students appear for this stage.</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Tier 2: Mains Exam</h3>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Mode:</strong> Computer-based / Detailed written test at select centers.</li>
                <li><strong>Focus:</strong> Tests deeper conceptual understanding, writing ability, and advanced logical reasoning.</li>
                <li><strong>Verification:</strong> This stage is coupled with intense document and background verification to make sure the student genuinely belongs to a rural, low-income background.</li>
              </ul>
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100" id="class-6-syllabus">
            <h2 className="text-2xl font-bold text-[#035c00] mb-6">Vidyagyan School Syllabus For Class 6 In Hindi</h2>
            <p className="text-gray-600 mb-6">
              The <strong>vidyagyan entrance exam class 6 syllabus</strong> is strictly based on the Class 4 and Class 5 curriculum of the Uttar Pradesh Basic Education Board (UP Board).
            </p>

            <div className="space-y-6">
              <div className="border border-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#035c00] mb-3 border-b pb-2">1. भाषा (Hindi Language)</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  Focuses on basic grammar and reading comprehension abilities.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  अपठित गद्यांश (Unseen Passages), विलोम शब्द (Antonyms), पर्यायवाची शब्द (Synonyms), लिंग (Gender), वचन (Number), मुहावरे (Idioms), संज्ञा, सर्वनाम, विशेषण (Nouns, Pronouns, Adjectives).
                </p>
              </div>

              <div className="border border-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#035c00] mb-3 border-b pb-2">2. गणित (Mathematics)</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  Based on UP Board's "Gintara" books for Classes 4 and 5.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  संख्या पद्धति (Number System), जोड़, घटाना, गुणा, भाग (Basic Operations), भिन्न (Fractions), दशमलव (Decimals), ल.स. और म.स. (LCM & HCF), ऐकिक नियम (Unitary Method), समय और दूरी (Time & Distance), मापन (Measurement), लाभ-हानि (Profit & Loss).
                </p>
              </div>

              <div className="border border-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#035c00] mb-3 border-b pb-2">3. मानसिक योग्यता (Mental Ability)</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                  This section tests raw intelligence and problem-solving speed.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  सादृश्यता (Analogy), वर्गीकरण (Classification/Odd One Out), श्रृंखला (Series Completion), पैटर्न पूरा करना (Pattern Completion), छिपी हुई आकृति खोजना (Embedded Figures).
                </p>
              </div>
            </div>
          </section>

        </div>

        {/* Sidebar Info & Links */}
        <div className="space-y-8">
          <div className="bg-[#035c00] text-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-4">Navigate Vidyagyan Hub</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/coaching/vidyagyan-school/eligibility-and-dates" className="text-white hover:text-yellow-400 font-medium flex items-center justify-between">
                  <span>Eligibility & Dates</span>
                  <span>&rarr;</span>
                </Link>
              </li>
              <li className="border-t border-green-800 pt-3">
                <Link href="/coaching/vidyagyan-school/previous-year-papers" className="text-white hover:text-yellow-400 font-medium flex items-center justify-between">
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
            <h3 className="text-lg font-bold text-gray-900 mb-2">UP Board Alignment</h3>
            <p className="text-sm text-gray-700 mb-4">
              Since the exam targets rural government school students, the entire syllabus is firmly anchored in the UP Basic Education Board's curriculum. We provide special notes in Hindi.
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
