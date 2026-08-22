import { Metadata } from 'next';
import Image from '@/components/LazyImage';
import PageHero from '@/components/PageHero';
import LeadForm from '@/components/LeadForm';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Rashtriya Military School (RMS) CET Syllabus Class 6 PDF & Papers | JGPS',
  description: 'Download Rashtriya Military School (RMS) Common Entrance Test (CET) Class 6 exam syllabus, mock question papers, and english qualifying guides. Free PDF.',
  keywords: 'rashtriya military school admission 2026, rms cet syllabus class 6 pdf, rms cet question paper pdf, military school admission class 6, RMS CET test pattern, JGPS coaching Joya, Amroha',
  robots: 'max-image-preview:large',
};

export default function RmsPapersPage() {
  const rmsFaqs = [
    {
      question: "What is the expected RMS CET Class 6 cutoff score?",
      answer: "The final merit list is prepared out of 150 marks (Intelligence, Mathematics, and General Knowledge). Generally, securing above 115-120 marks is considered safe for selection in Rashtriya Military Schools."
    },
    {
      question: "How can candidates from Joya and Amroha prepare for the Rashtriya Military School (RMS) CET?",
      answer: "Local students from Joya and Amroha can enroll in the special coaching program at JGPS Joya, which offers extensive daily OMR mock test practice, logical reasoning modules, and personal mentoring to tackle the RMS entrance requirements."
    }
  ];

  const breadcrumbs = [
    { name: "Home", item: "https://jgps.in/" },
    { name: "Resources", item: "https://jgps.in/resources/" },
    { name: "RMS CET Syllabus & Papers", item: "https://jgps.in/resources/rms-cet-military-school-syllabus/" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <PageHero
        title="Military School CET Resources"
        subtitle="Syllabus & Past Papers PDF"
        badge="Download Center"
        description="Access official Rashtriya Military School (RMS) CET entrance syllabus guidelines, solved question papers, and math revision cards."
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "RMS CET Syllabus & Papers" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Main Info */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
              Rashtriya Military School Common Entrance Test (RMS CET) Class 6 Syllabus & Papers
            </h1>
            <div className="relative w-full mb-6 aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src="/images/coaching.avif"
                alt="Rashtriya Military School CET Preparation"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Rashtriya Military Schools (located in Chail, Shimla, Jalandhar, Belgaum, Bangalore, and Dholpur) are premium institutions grooming students for national leadership. Admission into Class 6 is highly competitive, based on the centralized written Common Entrance Test (CET).
            </p>
            <p className="text-gray-600 leading-relaxed">
              Below, you can access the JGPS RMS preparation bundle, which includes official CET syllabus breakdowns, sample papers, and revision guidelines for the English and Intelligence sections.
            </p>
          </section>

          {/* Exam Structure details */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-[#035c00] mb-4">
              RMS CET Class 6 Exam Pattern & Section rules
            </h2>
            
            <div className="space-y-4 text-sm text-gray-600">
              <p>
                The CET written exam is an offline OMR-based test containing <strong>200 questions (200 marks)</strong> with a duration of 150 minutes.
              </p>
              
              <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg font-medium text-gray-800">
                âš ï¸ ENGLISH QUALIFYING RULE: English marks are qualifying only (minimum 35% or 17.5 marks required). English marks are NOT added to the final merit ranking. The final merit is prepared out of 150 marks (Intelligence, Mathematics, GK).
              </div>

              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong>Intelligence (Reasoning):</strong> 50 Questions (50 Marks) - Added to merit.
                </li>
                <li>
                  <strong>Mathematics:</strong> 50 Questions (50 Marks) - Added to merit.
                </li>
                <li>
                  <strong>General Knowledge & Current Affairs:</strong> 50 Questions (50 Marks) - Added to merit.
                </li>
                <li>
                  <strong>English (Qualifying Only):</strong> 50 Questions (50 Marks) - Must score at least 17.5.
                </li>
              </ul>
            </div>
          </section>

          {/* Subject syllabus highlights */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-[#035c00] mb-4">Subject-wise Syllabus Highlights</h2>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>
                <strong className="text-gray-900">Mathematics (50 Marks):</strong> Decimals, fractions, LCM & HCF, unitary method, ratio & proportion, profit & loss, simple interest, average, basic area & perimeter.
              </li>
              <li>
                <strong className="text-gray-900">Intelligence Test (50 Marks):</strong> Verbal/non-verbal reasoning analogies, series completion, coding-decoding, logical reasoning, and relation puzzles.
              </li>
              <li>
                <strong className="text-gray-900">General Knowledge (50 Marks):</strong> History of India, geography basics, space & solar system, general science (human body, vitamins), current affairs, defense forces, sports & awards.
              </li>
            </ul>
          </section>

          {/* FAQ section */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-150">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQ)</h2>
            <div className="space-y-4">
              {rmsFaqs.map((faq, idx) => (
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
            examName="RMS CET Military School"
            downloadUrl="/downloads/rms-military-school-class-6-resources.txt"
            downloadFilename="rms-military-school-class-6-resources.txt"
          />

          {/* Special Batch info */}
          <div className="bg-[#035c00] text-white p-6 rounded-2xl shadow-md border border-[#035c00]">
            <h3 className="text-lg font-bold mb-2">JGPS Military School Coaching</h3>
            <p className="text-xs text-white/90 mb-4 leading-relaxed">
              We run dedicated preparatory batches for Military School Common Entrance Tests (CET) in Joya.
            </p>
            <ul className="space-y-2 text-xs text-white/95 mb-6">
              <li>âœ" Disciplined hostel/boarding environment for outstation students</li>
              <li>âœ" Daily strong sessions for CET Intelligence & Math speed-solving</li>
              <li>âœ" Focus on English language basics to secure qualifying cuts easily</li>
              <li>âœ" Mock OMR tests conducted weekly with actual CET timer guidelines</li>
            </ul>
            <a
              href="https://wa.me/919997161490?text=Hi,%20I%20want%20to%20inquire%20about%20Military%20School%20Coaching%20at%20JGPS%20Joya"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(rmsFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }}
      />
    </div>
  );
}
