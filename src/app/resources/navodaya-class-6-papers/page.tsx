import { Metadata } from 'next';
import Image from '@/components/LazyImage';
import PageHero from '@/components/PageHero';
import LeadForm from '@/components/LeadForm';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Navodaya Class 6 Question Papers PDF & JNVST Syllabus | JGPS',
  description: 'Download Jawahar Navodaya Vidyalaya Selection Test (JNVST) Class 6 previous year solved question papers, OMR mock test booklets, and official syllabus guidelines. Free PDF.',
  keywords: 'navodaya class 6 question paper pdf, jnvst class 6 syllabus 2027, navodaya school admission form class 6, navodaya class 6 model paper, JGPS Navodaya coaching Amroha Joya',
  robots: 'max-image-preview:large',
};

export default function NavodayaPapersPage() {
  const navodayaFaqs = [
    {
      question: "What is the exam pattern for JNVST Class 6 selection test?",
      answer: "The Jawahar Navodaya Vidyalaya Selection Test (JNVST) Class 6 exam is a 2-hour offline written test of 100 marks containing 80 multiple choice questions. It is divided into three sections: Mental Ability Test (MAT) - 40 questions (50 marks), Arithmetic Test - 20 questions (25 marks), and Language Test - 20 questions (25 marks)."
    },
    {
      question: "Is there any negative marking in Navodaya entrance exam?",
      answer: "No, there is no negative marking in the JNVST entrance examination. Candidates are rewarded 1.25 marks for every correct answer, and no marks are deducted for incorrect or unattempted questions."
    },
    {
      question: "What is the age eligibility to apply for Navodaya Class 6 admission?",
      answer: "A candidate seeking admission must be between 10 to 12 years of age as of April 30th of the year of admission. For example, for 2027 admissions, the candidate must be born between 01-05-2015 and 30-04-2017 (both dates inclusive)."
    },
    {
      question: "Can a student appear for the JNVST Class 6 exam a second time?",
      answer: "No. Under Navodaya Vidyalaya Samiti (NVS) regulations, a candidate is allowed to appear for the selection test only once. Repeated attempts are strictly prohibited and will lead to immediate rejection."
    },
    {
      question: "JNVST 2027 ke liye Amroha aur Joya district ke students ko online admission ke liye kya karna hoga?",
      answer: "Joya aur Amroha blocks ke rural/village schools mein padh rahe students ko Navodaya Vidyalaya Amroha Admission 2027 ke liye online form bharna hoga. Iske liye current Class 5 headmaster dwara verified bonafide certificate, Aadhaar card, aur rural area category proof upload karna mandatory hai."
    },
    {
      question: "JNVST UP district wise cutoff marks 2026/2027 aur JNVST Class 6 Syllabus 2027 PDF rules kya hain?",
      answer: "UP ke districts (jaise Amroha) mein JNVST cutoff marks rural quota (75% seats) aur gender reservation par nirdharit hote hain. JNVST Class 6 Syllabus 2027 PDF guidelines ke anusaar, general category ke liye cutoff 90-95% marks aur reserved categories ke liye 82-88% expected hai. JGPS Joya campus local admissions mock tests se cutoff clear karne ki tayaari karwata hai."
    }
  ];

  const breadcrumbs = [
    { name: "Home", item: "https://jgps.in/" },
    { name: "Resources", item: "https://jgps.in/resources/" },
    { name: "Navodaya Papers & Syllabus", item: "https://jgps.in/resources/navodaya-class-6-papers/" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <PageHero
        title="JNVST Navodaya Class 6 Resources"
        subtitle="Question Papers & Syllabus PDF"
        badge="Download Center"
        description="Access official Jawahar Navodaya Vidyalaya Selection Test (JNVST) solved previous year papers, mental ability guides, and arithmetic worksheets."
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Navodaya Papers & Syllabus" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Main Content */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Main Info */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-150">
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
              Jawahar Navodaya Vidyalaya (JNVST) Class 6 Question Papers & Syllabus PDF
            </h1>
            <div className="relative w-full mb-6 aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src="/images/students-coaching-center.avif"
                alt="Navodaya Entrance Exam Class 6 Preparation"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Jawahar Navodaya Vidyalaya Selection Test (JNVST) is a highly competitive, national-level exam designed to identify and support talented rural students across India. Clearing this exam grants free boarding CBSE education at top Navodaya schools.
            </p>
            <p className="text-gray-600 leading-relaxed">
              To help parents guide their children at home, JGPS offers free access to official JNVST Class 6 syllabus patterns, mental ability reasoning mock question sheets, and solved papers from the last 5 years.
            </p>
          </section>

          {/* Exam Pattern Table */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-[#035c00] mb-4">
              JNVST Class 6 Written Test Scoring Pattern
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left font-bold text-gray-700 uppercase tracking-wider">Test Section</th>
                    <th className="px-6 py-3 text-left font-bold text-gray-700 uppercase tracking-wider">No. of Questions</th>
                    <th className="px-6 py-3 text-left font-bold text-gray-700 uppercase tracking-wider">Marks</th>
                    <th className="px-6 py-3 text-left font-bold text-gray-700 uppercase tracking-wider">Duration</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-150">
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">Mental Ability Test (MAT)</td>
                    <td className="px-6 py-4 text-gray-600">40</td>
                    <td className="px-6 py-4 font-bold text-[#035c00]">50 (50%)</td>
                    <td className="px-6 py-4 text-gray-600">60 Minutes</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">Arithmetic Test</td>
                    <td className="px-6 py-4 text-gray-600">20</td>
                    <td className="px-6 py-4 text-gray-600">25</td>
                    <td className="px-6 py-4 text-gray-600">30 Minutes</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">Language Test (Urdu/Hindi/English)</td>
                    <td className="px-6 py-4 text-gray-600">20</td>
                    <td className="px-6 py-4 text-gray-600">25</td>
                    <td className="px-6 py-4 text-gray-600">30 Minutes</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="px-6 py-4 font-bold text-gray-900">Total Selection Test</td>
                    <td className="px-6 py-4 font-bold text-gray-900">80 Questions</td>
                    <td className="px-6 py-4 font-bold text-[#035c00]">100 Marks</td>
                    <td className="px-6 py-4 font-bold text-gray-900">120 Minutes (2 hrs)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Syllabus Section */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-[#035c00] mb-4">Detailed Syllabus Breakdown</h2>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>
                <strong className="text-gray-900">Mental Ability Test (50 Marks):</strong> Non-verbal intelligence puzzles including figure matching, pattern completion, odd-one-out, mirror images, space visualization, and paper folding.
              </li>
              <li>
                <strong className="text-gray-900">Arithmetic Test (25 Marks):</strong> Number systems, fractional operations, LCM & HCF, decimals, simple interest, profit & loss, distance & speed, percentage, average, and perimeter/area/volume.
              </li>
              <li>
                <strong className="text-gray-900">Language Test (25 Marks):</strong> Reading comprehension passages, identifying synonyms/antonyms, grammar structures, and vocabulary assessments in the selected regional language.
              </li>
            </ul>
          </section>

          {/* FAQ section */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-150">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQ)</h2>
            <div className="space-y-4">
              {navodayaFaqs.map((faq, idx) => (
                <details 
                  key={idx} 
                  className="group border border-gray-150 rounded-xl overflow-hidden bg-gray-50 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex justify-between items-center p-5 font-bold text-gray-900 cursor-pointer hover:bg-gray-100/50 transition-colors select-none">
                    <span className="text-sm">{faq.question}</span>
                    <span className="text-[#035c00] transition-transform duration-300 group-open:rotate-180">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="p-5 text-sm text-gray-600 leading-relaxed bg-white border-t border-gray-150">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>
        </div>

        {/* Right: Lead Capture Form */}
        <div className="space-y-8">
          <LeadForm
            examName="JNVST Navodaya Class 6"
            downloadUrl="/downloads/navodaya-class-6-entrance-resources.txt"
            downloadFilename="navodaya-class-6-entrance-resources.txt"
          />

          {/* JGPS Batches details */}
          <div className="bg-[#035c00] text-white p-6 rounded-2xl shadow-md border border-[#035c00]">
            <h3 className="text-lg font-bold mb-2">JGPS Navodaya batches</h3>
            <p className="text-xs text-white/90 mb-4 leading-relaxed">
              We offer targeted day-scholar and boarding hostel batches for Navodaya school selection preparation.
            </p>
            <ul className="space-y-2 text-xs text-white/95 mb-6">
              <li>âœ" Daily 2-hour dedicated MAT reasoning practice</li>
              <li>âœ" Arithmetic concepts taught from basic calculation levels</li>
              <li>âœ" Weekly timed OMR mock tests mirroring real NVS centers</li>
              <li>âœ" Boarding place with supervised night revision hours</li>
            </ul>
            <a
              href="https://wa.me/919997161490?text=Hi,%20I%20want%20to%20inquire%20about%20Navodaya%20School%20Entrance%20Coaching%20at%20JGPS%20Joya"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-300 text-[#035c00] font-bold py-3 px-4 rounded-xl text-center block text-sm transition-all shadow"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(navodayaFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }}
      />
    </div>
  );
}
