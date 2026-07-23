import { Metadata } from 'next';
import Image from '@/components/LazyImage';
import PageHero from '@/components/PageHero';
import LeadForm from '@/components/LeadForm';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Sainik School Class 6 Previous Year Question Papers PDF & Syllabus',
  description: 'Download All India Sainik School Entrance Examination (AISSEE) Class 6 previous year question papers, math formulas, and official syllabus guidelines. Free PDF download.',
  keywords: 'sainik school previous year question papers class 6 pdf, sainik school syllabus class 6 pdf, sainik school admission 2026 class 6, AISSEE model paper class 6, sainik school exam pattern, JGPS coaching Joya Amroha',
  robots: 'max-image-preview:large',
};

export default function SainikPapersPage() {
  const sainikFaqs = [
    {
      question: "What is the age limit for Sainik School Class 6 admission?",
      answer: "For admission to Class 6 in Sainik Schools, the candidate must be between 10 to 12 years of age as of March 31st of the academic session they are seeking admission in."
    },
    {
      question: "What is the marking scheme for the AISSEE Class 6 entrance exam?",
      answer: "The AISSEE Class 6 written test is worth 300 marks. It consists of 125 questions: Mathematics (50 questions, 3 marks each, total 150), Intelligence (25 questions, 2 marks each, total 50), Language (25 questions, 2 marks each, total 50), and General Knowledge (25 questions, 2 marks each, total 50). There is no negative marking."
    },
    {
      question: "Is there any qualifying cut-off score for individual subjects in Sainik School exam?",
      answer: "Yes, a candidate must secure at least 25% marks in each section (subject) and a minimum of 40% aggregate marks in the written test to qualify for the merit list."
    },
    {
      question: "How can JGPS Joya help candidates from Amroha and Joya prepare for the Sainik School admission?",
      answer: "JGPS offers boarding batches in Joya, Amroha, with focused tutoring on mathematics shortcuts, regular timed OMR practice tests, logical reasoning worksheets, and mock medical/interview simulations to match exact AISSEE standards."
    }
  ];

  const breadcrumbs = [
    { name: "Home", item: "https://jgps.in/" },
    { name: "Resources", item: "https://jgps.in/resources/" },
    { name: "Sainik Papers & Syllabus", item: "https://jgps.in/resources/sainik-school-question-papers/" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <PageHero
        title="Sainik School Class 6 Resources"
        subtitle="Question Papers & Syllabus PDF"
        badge="Download Center"
        description="Access official AISSEE Class 6 previous year solved question booklets, practice OMR mock sheets, and detailed subject weightage blueprints."
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Sainik Papers & Syllabus" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Main Content (2/3 width on desktop) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Main Info */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
              Sainik School Previous Year Question Papers & Syllabus PDF (Class 6)
            </h1>
            <div className="relative w-full mb-6 aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src="/images/coaching.avif"
                alt="Sainik School Entrance Exam Preparation"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Preparing for the All India Sainik Schools Entrance Examination (AISSEE) requires regular practice of previous years' question papers. This page is dedicated to providing high-quality study resources for class 6 students. Solving these model papers helps students understand the exam pattern, question difficulty, and time pacing.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Below, you can access the complete JGPS study pack, which includes past solved booklets (2020-2024), chapter weightage guidelines, and special math formulas.
            </p>
          </section>

          {/* Exam Structure details */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-[#035c00] mb-4">
              AISSEE Class 6 Exam Pattern & Scoring Blueprint
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left font-bold text-gray-700 uppercase tracking-wider">Subject</th>
                    <th className="px-6 py-3 text-left font-bold text-gray-700 uppercase tracking-wider">No. of Questions</th>
                    <th className="px-6 py-3 text-left font-bold text-gray-700 uppercase tracking-wider">Marks per Q</th>
                    <th className="px-6 py-3 text-left font-bold text-gray-700 uppercase tracking-wider">Total Marks</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-150">
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">Mathematics</td>
                    <td className="px-6 py-4 text-gray-600">50</td>
                    <td className="px-6 py-4 text-gray-600">3</td>
                    <td className="px-6 py-4 font-bold text-[#035c00]">150 (50%)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">Intelligence / Reasoning</td>
                    <td className="px-6 py-4 text-gray-600">25</td>
                    <td className="px-6 py-4 text-gray-600">2</td>
                    <td className="px-6 py-4 text-gray-600">50</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">English / Hindi</td>
                    <td className="px-6 py-4 text-gray-600">25</td>
                    <td className="px-6 py-4 text-gray-600">2</td>
                    <td className="px-6 py-4 text-gray-600">50</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">General Knowledge</td>
                    <td className="px-6 py-4 text-gray-600">25</td>
                    <td className="px-6 py-4 text-gray-600">2</td>
                    <td className="px-6 py-4 text-gray-600">50</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-4 leading-relaxed">
              * Note: There is no negative marking in the AISSEE written exam. Total exam duration is 150 minutes (2.5 hours) with 125 multiple choice questions.
            </p>
          </section>

          {/* Syllabus Breakdown */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-[#035c00] mb-4">Syllabus Overview for Class 6 Entrance</h2>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>
                <strong className="text-gray-900">Mathematics:</strong> Number system, LCM & HCF, fractions, decimals, unitary method, ratio & proportion, profit & loss, simple interest, area & perimeter, volume of solids, basic lines and angles.
              </li>
              <li>
                <strong className="text-gray-900">Intelligence Test:</strong> Logical analogical relationships, series completion, figure classification, pattern completion, coding-decoding, direction testing.
              </li>
              <li>
                <strong className="text-gray-900">Language:</strong> Comprehension, parts of speech, prepositions, tenses, subject-verb agreement, spelling corrections, singular-plural, synonyms & antonyms.
              </li>
            </ul>
          </section>

          {/* FAQ section */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQ)</h2>
            <div className="space-y-4">
              {sainikFaqs.map((faq, idx) => (
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

        {/* Right: Lead Capture Form (1/3 width on desktop) */}
        <div className="space-y-8">
          <LeadForm
            examName="Sainik School AISSEE"
            downloadUrl="/downloads/sainik-school-class-6-resources.txt"
            downloadFilename="sainik-school-class-6-resources.txt"
          />

          {/* Special Batch details */}
          <div className="bg-[#035c00] text-white p-6 rounded-2xl shadow-md border border-[#035c00]">
            <h3 className="text-lg font-bold mb-2">JGPS Sainik Coaching Batch</h3>
            <p className="text-xs text-white/90 mb-4 leading-relaxed">
              We offer boarding (hostel) and day-scholar batches for complete Sainik School and Rashtriya Military School preparation.
            </p>
            <ul className="space-y-2 text-xs text-white/95 mb-6">
              <li>âœ" 90%+ selections in key Western UP entrance exams</li>
              <li>âœ" Daily mock exams and OMR bubble filling practice</li>
              <li>âœ" Dedicated Math shortcuts classes by expert faculty</li>
              <li>âœ" Regular medical checkups and posture correction support</li>
            </ul>
            <a
              href="https://wa.me/919997161490?text=Hi,%20I%20want%20to%20inquire%20about%20Sainik%20School%20Coaching%20at%20JGPS%20Joya"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(sainikFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }}
      />
    </div>
  );
}
