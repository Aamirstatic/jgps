import { Metadata } from 'next';
import Image from '@/components/LazyImage';
import PageHero from '@/components/PageHero';
import LeadForm from '@/components/LeadForm';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Vidyagyan School Class 6 Admission, Syllabus & Eligibility Guide | JGPS',
  description: 'Download Shiv Nadar Foundation Vidyagyan School admission guidelines, eligibility certificates, and Stage 1 & 2 exam syllabus checklists. Free PDF.',
  keywords: 'vidyagyan school admission 2025-26 class 6, vidyagyan school syllabus, vidyagyan school eligibility criteria, vidyagyan school online form, vidyagyan school UP rural eligibility income, vidyagyan entrance exam syllabus stage 1 2, JGPS coaching Joya, Amroha',
  robots: 'max-image-preview:large',
};

export default function VidyagyanPapersPage() {
  const vidyagyanFaqs = [
    {
      question: "What is the vidyagyan school UP rural eligibility income limit for candidates?",
      answer: "Under the official vidyagyan school UP rural eligibility income guidelines, the applicant's total family income from all sources must not exceed Rs. 1,00,000 (One Lakh) per annum. A certified income certificate issued by the competent Tehsildar must be submitted. This rural eligibility check is strictly enforced for all applicants from UP rural blocks, including local rural regions around Joya and Amroha."
    },
    {
      question: "Are students from urban areas or city schools eligible to apply for Vidyagyan?",
      answer: "No, Vidyagyan School admission is strictly reserved for rural talent in Uttar Pradesh. The candidate must reside in a rural area and be studying in a recognized primary school located in a rural village/panchayat. Urban areas are not eligible."
    },
    {
      question: "What is covered in the vidyagyan entrance exam syllabus stage 1 2?",
      answer: "The vidyagyan entrance exam syllabus stage 1 2 is split into two phases: Stage 1 (OMR pen-and-paper) covers Hindi, Mathematics, and General IQ. Stage 2 (Computer-Based Test) assesses advanced analytical reasoning, online comprehension, and cognitive skills. JGPS provides computer lab mock tests in Joya to make sure candidates are fully prepared for the CBT format."
    },
    {
      question: "How does JGPS prepare students for the Stage 2 online computer-based test?",
      answer: "JGPS houses a modern computer lab where students practice mock exams on computer terminals. This helps rural students from Amroha and Joya get comfortable with computer screens, mouse controls, and timed online test interfaces before the actual exam."
    }
  ];

  const breadcrumbs = [
    { name: "Home", item: "https://jgps.in/" },
    { name: "Resources", item: "https://jgps.in/resources/" },
    { name: "Vidyagyan Syllabus & Guidelines", item: "https://jgps.in/resources/vidyagyan-school-syllabus-and-eligibility/" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <PageHero
        title="Vidyagyan Admission Resources"
        subtitle="Syllabus & Eligibility Checklist"
        badge="Download Center"
        description="Access official Vidyagyan rural scholarship entrance guidelines, Stage-1 preliminary sample papers, and Stage-2 computer test specifications."
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Vidyagyan Syllabus & Guidelines" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Main Info */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-150">
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
              Vidyagyan School Class 6 Admission Syllabus & Rural Eligibility Guidelines
            </h1>
            <div className="relative w-full mb-6 aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src="/images/school-building.avif"
                alt="Vidyagyan School Admission & Scholarship"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Vidyagyan School (Sitapur and Bulandshahr), run by the Shiv Nadar Foundation, offers high-quality free education, boarding, and scholarships to bright rural students in Uttar Pradesh. However, the admission process involves strict eligibility checking and a two-stage examination.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Below, you can download the JGPS Vidyagyan study pack, which includes eligibility verification formats, sample papers for the Stage-1 preliminary written test, and preparation sheets for Stage-2.
            </p>
          </section>

          {/* Eligibility Criteria Details */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-[#035c00] mb-4">
              Vidyagyan Strict Eligibility Rules
            </h2>
            
            <div className="space-y-4 text-sm text-gray-600">
              <p>
                To apply for Vidyagyan admissions, candidates must satisfy all of the following parameters:
              </p>
              
              <ul className="list-styled pl-5 space-y-3">
                <li>
                  <strong>Rural Residence:</strong> The candidate must reside and be studying in a recognized government/private primary school located in a rural (village/panchayat) area of Uttar Pradesh. Municipal/urban schools are not eligible.
                </li>
                <li>
                  <strong>Family Income Limit:</strong> The total annual income of the candidate's family from all sources must be less than <strong>Rs. 1,00,000 (One Lakh Rupees)</strong>. A verified income certificate from the Tahsildar is required.
                </li>
                <li>
                  <strong>Class and Age Limits (as of registration date):</strong>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-xs">
                    <li><strong>Boys:</strong> Studying in Class 5. Age must be between 10 to 11 years.</li>
                    <li><strong>Girls:</strong> Studying in Class 5. Age must be between 10 to 12 years.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </section>

          {/* Exam Stages Breakdown */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-[#035c00] mb-4">Two-Stage Exam Pattern</h2>
            <div className="space-y-4 text-sm text-gray-600">
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Stage-1: Preliminary Exam (OMR Test)</h3>
                <p>
                  An offline written exam conducted at block/district headquarters. Contains questions on Hindi language, Mathematics, and General Aptitude/IQ designed to evaluate critical thinking.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Stage-2: Main Exam (Computer-based Test)</h3>
                <p>
                  For students qualifying Stage-1. An online test conducted at designated IT centers. Evaluates cognitive understanding, comprehension, and analytical reasoning through an interactive computer terminal.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ section */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-150">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQ)</h2>
            <div className="space-y-4">
              {vidyagyanFaqs.map((faq, idx) => (
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
            examName="Vidyagyan School Class 6"
            downloadUrl="/downloads/vidyagyan-school-class-6-resources.txt"
            downloadFilename="vidyagyan-school-class-6-resources.txt"
          />

          {/* Special Batch info */}
          <div className="bg-[#035c00] text-white p-6 rounded-2xl shadow-md border border-[#035c00]">
            <h3 className="text-lg font-bold mb-2">JGPS Vidyagyan Special Batch</h3>
            <p className="text-xs text-white/90 mb-4 leading-relaxed">
              We specialize in guiding and coaching rural bright children to secure selection in Vidyagyan Schools.
            </p>
            <ul className="space-y-2 text-xs text-white/95 mb-6">
              <li>âœ" Full document verification assistance (Income, Residence, School certificates)</li>
              <li>âœ" Extensive preparation for Stage-1 Aptitude, Hindi & Arithmetic</li>
              <li>âœ" Interactive computer lab practice to prepare students for Stage-2 CBT</li>
              <li>âœ" Regular counseling sessions and motivation guidance for rural children</li>
            </ul>
            <a
              href="https://wa.me/919997161490?text=Hi,%20I%20want%20to%20inquire%20about%20Vidyagyan%20School%20Coaching%20at%20JGPS%20Joya"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(vidyagyanFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }}
      />
    </div>
  );
}
