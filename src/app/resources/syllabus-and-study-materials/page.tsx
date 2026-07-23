import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Syllabus & Past Exam Question Papers Download | JGPS',
  description: 'Download CBSE syllabus guidelines and entrance exam previous years question papers (pdf) for AMU, Jamia (JMI), Sainik School, and Vidyagyan.',
  keywords: 'AMU previous year question papers pdf class 6, Sainik school AISSEE test paper download, JMI entrance exam syllabus class 9, Vidyagyan prep materials UP, school syllabus download JGPS, competitive exam guides, JGPS Joya, Amroha',
};

const resourceSections = [
  {
    category: 'Aligarh Muslim University (AMU) Entrance Resources',
    items: [
      { name: 'AMU Class 6 Entrance Syllabus & Guidelines (PDF)', details: 'Syllabus breakdown for Mathematics, Science, and Languages (Hindi, Urdu, English).', link: '/resources/amu-class-6-syllabus-and-papers/' },
      { name: 'AMU Class 6 Past 5 Years Question Papers (2020-2024)', details: 'Solved question papers with answer keys to practice qualifying language cuts.', link: '/resources/amu-class-6-syllabus-and-papers/' },
      { name: 'AMU Class 9 Admission Test Guidelines & Pattern', details: 'Important chapters and marks weightage card for Class 9 selection.', link: '/resources/amu-class-6-syllabus-and-papers/' }
    ]
  },
  {
    category: 'Sainik School (AISSEE) Study Materials',
    items: [
      { name: 'AISSEE Class 6 Syllabus & Model Question Booklet', details: 'Includes Mathematics (150 marks focus), Intelligence, and GK syllabus parameters.', link: '/resources/sainik-school-question-papers/' },
      { name: 'Intelligence & Reasoning Mock Test Sheets (Series-A)', details: 'Practice worksheets for verbal and non-verbal reasoning analogical questions.', link: '/resources/sainik-school-question-papers/' },
      { name: 'AISSEE Class 6 Math Formula Quick Guide', details: 'Self-developed formula cards covering area, simple interest, unitary methods.', link: '/resources/sainik-school-question-papers/' }
    ]
  },
  {
    category: 'Jamia Millia Islamia (JMI) Entrance resources',
    items: [
      { name: 'JMI Class 6 CET Syllabus & EVS Focus Chapters', details: 'Special guide on highest-scoring EVS chapters (50 marks weightage).', link: '/resources/amu-class-6-syllabus-and-papers/' },
      { name: 'JMI Class 6 Solved Sample Paper CET (2023)', details: 'Sample mock sheet to practice speed and accuracy under 120-minute constraints.', link: '/resources/amu-class-6-syllabus-and-papers/' }
    ]
  },
  {
    category: 'Vidyagyan scholarship entrance materials',
    items: [
      { name: 'Vidyagyan Class 6 Stage-1 Preliminary Exam Sample Paper', details: 'Aptitude and intelligence assessment tests for rural talent selection.', link: '/resources/vidyagyan-school-syllabus-and-eligibility/' },
      { name: 'Vidyagyan Stage-2 Mains computer interface Guidelines', details: 'An overview booklet to prepare children for computer-based tests.', link: '/resources/vidyagyan-school-syllabus-and-eligibility/' }
    ]
  }
];

export default function SyllabusStudyMaterialsPage() {
  const syllabusFaqs = [
    {
      question: "Are these entrance exam syllabus files updated for 2026-2027 and 2027-2028?",
      answer: "Yes, all syllabus documents and question paper links are updated to reflect the latest rules and patterns of exams like JNVST 2027, Vidyagyan, Sainik School (AISSEE), and AMU Class 6 admissions."
    },
    {
      question: "Can students from Joya and Amroha get physical copies of these study guides?",
      answer: "Absolutely. Parents and students from Joya, Amroha, and nearby rural areas are welcome to visit the JGPS admissions desk on NH9 Delhi Road, Joya, to collect printed booklets of syllabus guides, worksheets, and past papers."
    }
  ];

  const breadcrumbs = [
    { name: "Home", item: "https://jgps.in/" },
    { name: "Resources", item: "https://jgps.in/resources/" },
    { name: "Syllabus & Materials", item: "https://jgps.in/resources/syllabus-and-study-materials/" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <PageHero
        title="Syllabus & Mock Papers"
        subtitle="Free Study Resources"
        badge="Download Center"
        description="Support your child's self-study routine. Download official syllabus documents, quick revision worksheets, and previous years question papers."
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Syllabus & Materials" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-12">
          {/* Intro */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-4">Self-Study Materials & Mock Guides</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Academic excellence requires a perfect balance of structured classroom sessions and independent self-study. At Jai Govind Public School, we encourage students to practice past entrance papers to understand exam patterns, difficulty levels, and time management.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Below, we have compiled official syllabus guidelines and preparation booklets designed by our coaching faculty. Parents can print these resources to guide their children&apos;s home study schedules.
            </p>
          </section>

          {/* Resources Download Grid */}
          <div className="space-y-10">
            {resourceSections.map((section, sIdx) => (
              <section key={sIdx} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-150 border-t-4 border-t-[#035c00]">
                <h2 className="text-xl font-bold text-[#035c00] mb-6 border-b border-gray-100 pb-3 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                  {section.category}
                </h2>
                
                <div className="space-y-5">
                  {section.items.map((item, iIdx) => (
                    <div key={iIdx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 border-b border-gray-50 last:border-b-0 last:pb-0">
                      <div className="w-10 h-10 bg-red-50 text-red-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5.5 w-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 00-2 2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-grow flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="max-w-xl">
                          <h3 className="text-sm md:text-base font-bold text-gray-900 leading-snug">{item.name}</h3>
                          <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.details}</p>
                        </div>
                        <Link
                          href={item.link || "/contact"}
                          className="inline-flex items-center justify-center whitespace-nowrap border-2 border-[#035c00] text-[#035c00] hover:bg-[#035c00] hover:text-white font-bold py-2 px-4 rounded-xl text-xs transition duration-300 shadow-sm"
                        >
                          Request PDF Access
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* FAQ section */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-150">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQ)</h2>
            <div className="space-y-4">
              {syllabusFaqs.map((faq, idx) => (
                <details 
                  key={idx} 
                  className="group border border-gray-150 rounded-xl overflow-hidden bg-gray-50 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex justify-between items-center p-5 font-bold text-gray-900 cursor-pointer hover:bg-gray-100/50 transition-colors select-none">
                    <span className="text-sm">{faq.question}</span>
                    <span className="text-[#035c00] transition-transform duration-300 group-open:rotate-180">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
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

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Revision Tips */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-150 border-t-4 border-t-yellow-500">
            <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2 flex items-center gap-2">
              Revision Guidelines
            </h3>
            <ul className="space-y-4 text-xs text-gray-600">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 text-[#035c00] mr-2.5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Solve Timer-Based:</strong> Sit in a quiet room and solve past papers with a 2-hour stopwatch to build time pacing.</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 text-[#035c00] mr-2.5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Qualifying Cutoff:</strong> Focus heavily on languages (Urdu/English qualifying sections) before evaluating math.</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 text-[#035c00] mr-2.5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Review Mistakes:</strong> Re-solve incorrect questions immediately to reinforce core formula steps.</span>
              </li>
            </ul>
          </div>

          {/* Call desk */}
          <div className="bg-gradient-to-br from-[#035c00] to-[#024700] text-white p-6 rounded-2xl shadow-lg border border-yellow-500/20 hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-bold mb-2 text-yellow-400">Need Hardcopy Booklets?</h3>
            <p className="text-xs text-white/90 mb-6 leading-relaxed">
              We distribute free syllabus booklets and past paper worksheets at our admissions helpdesk on NH9 Delhi Road Joya.
            </p>
            <div className="space-y-3.5 text-sm mb-6 bg-white/10 p-3.5 rounded-xl border border-white/10">
              <p className="flex items-center gap-2"> <span className="font-semibold">Principal:</span> +91 9412137554</p>
              <p className="flex items-center gap-2"> <span className="font-semibold">Manager:</span> +91 9997161490</p>
            </div>
            <Link
              href="/contact"
              className="bg-yellow-400 hover:bg-yellow-300 text-[#035c00] font-bold py-3 px-6 rounded-xl text-center block text-sm transition-all shadow-md"
            >
              Contact Desk &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(syllabusFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }}
      />
    </div>
  );
}
