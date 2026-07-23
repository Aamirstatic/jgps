import { Metadata } from 'next';
import Link from 'next/link';
import Image from '@/components/LazyImage';

export const metadata: Metadata = {
  title: 'Sainik School Form Date 2027 Class 6 & Age Limit | AISSEE',
  description: 'Check the sainik school admission 2027 28 eligibility criteria. Find the exact sainik school form date 2027 class 6 and the sainik school age limit for class 6 2027.',
  keywords: 'sainik school admission 2027 28, sainik school form date 2027 class 6, sainik school age limit for class 6 2027',
};

// FAQ Schema for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the sainik school age limit for class 6 2027?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For admission to Class 6, a candidate should be between 10 and 12 years of age as on 31 March of the year of admission (e.g., 31 March 2027 for the 2027-28 session). Admission is open to both boys and girls."
      }
    },
    {
      "@type": "Question",
      "name": "What is the sainik school form date 2027 class 6?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The online application forms for the AISSEE 2027-28 session are typically released by the National Testing Agency (NTA) in October or November 2026. Keep checking exams.nta.ac.in/AISSEE for the official notification."
      }
    },
    {
      "@type": "Question",
      "name": "What is the qualifying marks criteria for AISSEE?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A candidate must secure a minimum of 25% marks in each section/subject and an aggregate of 40% marks in the AISSEE 2027 to qualify (waived for SC/ST candidates)."
      }
    },
    {
      "@type": "Question",
      "name": "Are girls eligible for Sainik School Class 6 admission?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, following recent policy changes, girls are fully eligible to apply and take admission in Class 6 in all Sainik Schools across India."
      }
    }
  ]
};

export default function SainikEligibilityPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Inject FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-gray-500 flex gap-2">
          <Link href="/" className="hover:text-[#035c00]">Home</Link> / 
          <Link href="/coaching" className="hover:text-[#035c00]">Coaching</Link> / 
          <Link href="/coaching/sainik-school" className="hover:text-[#035c00]">Sainik School</Link> / 
          <span className="text-gray-800 font-medium">Eligibility & Dates</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <Image 
          src="/images/coaching/sainik_cluster_hero.avif" 
          alt="Sainik School Admission 2027 28 Eligibility" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
            <span className="bg-yellow-400 text-yellow-950 font-bold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider mb-4 inline-block">
              Important Criteria
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
              Sainik School Admission 2027-28
            </h1>
            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
              Find the official <strong>sainik school age limit for class 6 2027</strong> and crucial timeline dates. make sure your child meets the criteria before applying for AISSEE.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-12">
          
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-6">AISSEE Eligibility Criteria (Class 6 & 9)</h2>
            <p className="text-gray-600 mb-6">
              The <strong>sainik school admission 2027 28</strong> process is governed by strict rules set by the Sainik Schools Society and NTA.
            </p>

            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-[#035c00] p-5 rounded-r-xl">
                <h3 className="font-bold text-gray-900 mb-2">Class 6 Eligibility</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li><strong>Age Limit:</strong> Must be 10 to 12 years old as of March 31, 2027.</li>
                  <li><strong>Gender:</strong> Open for both Boys and Girls.</li>
                  <li><strong>Educational Qualification:</strong> Students should ideally be studying in Class 5 from a recognized school.</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-[#035c00] p-5 rounded-r-xl">
                <h3 className="font-bold text-gray-900 mb-2">Class 9 Eligibility</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li><strong>Age Limit:</strong> Must be 13 to 15 years old as of March 31, 2027.</li>
                  <li><strong>Gender:</strong> Open for Boys (and Girls in select schools based on vacancies).</li>
                  <li><strong>Educational Qualification:</strong> Must have passed Class 8 from a recognized school at the time of admission.</li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 p-5 rounded-xl">
                <h3 className="font-bold text-red-800 mb-2">The 25% / 40% Qualifying Rule</h3>
                <p className="text-sm text-red-700 leading-relaxed">
                  Unlike Navodaya, merely getting a high total score is not enough. To qualify, a candidate must score a minimum of <strong>25% marks in each individual subject</strong> and an overall aggregate of <strong>40% marks</strong>. This means if a student scores 100% in Math but gets 20% in English, they are DISQUALIFIED. (This rule does not apply to SC/ST candidates).
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#035c00]">Important Dates for AISSEE 2027</h2>
              <span className="text-xs font-bold bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">Tentative</span>
            </div>
            
            <p className="text-gray-600 mb-6">
              The NTA conducts the AISSEE exam early in the year. If you are waiting for the <strong>sainik school form date 2027 class 6</strong>, be ready by late 2026.
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="p-3 font-semibold text-gray-700 border-r border-gray-200">Event</th>
                    <th className="p-3 font-semibold text-gray-700">Expected Timeline (2027 Session)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium text-gray-800 border-r border-gray-200">Release of Official Notification</td>
                    <td className="p-3 text-gray-600">October / November 2026</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50/50">
                    <td className="p-3 font-medium text-red-600 border-r border-gray-200">Online Application Form Window</td>
                    <td className="p-3 text-red-600 font-bold">Nov 2026 – Dec 2026</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium text-gray-800 border-r border-gray-200">Admit Card Download</td>
                    <td className="p-3 text-gray-600">January 2027 (First Week)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50/50">
                    <td className="p-3 font-bold text-[#035c00] border-r border-gray-200">AISSEE Written Exam Date</td>
                    <td className="p-3 text-[#035c00] font-bold">Late January / Early February 2027</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium text-gray-800 border-r border-gray-200">Medical Examination</td>
                    <td className="p-3 text-gray-600">March 2027</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-4 italic">
              *Official dates are announced at exams.nta.ac.in/AISSEE.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Q. What is the sainik school age limit for class 6 2027?</h3>
                <p className="text-gray-600 text-sm">For the 2027-2028 academic year, the child must be between 10 and 12 years of age as of March 31, 2027.</p>
              </div>
              <div className="border-t border-gray-100 pt-6">
                <h3 className="font-bold text-gray-900 mb-2">Q. Are girls allowed in Sainik Schools?</h3>
                <p className="text-gray-600 text-sm">Yes, girls are fully eligible to apply and take admission in Class 6 in all Sainik Schools across India.</p>
              </div>
              <div className="border-t border-gray-100 pt-6">
                <h3 className="font-bold text-gray-900 mb-2">Q. What documents are needed for the form?</h3>
                <p className="text-gray-600 text-sm">You generally need a scanned photograph, signature, thumb impression, birth certificate, domicile certificate, and caste certificate (if applicable).</p>
              </div>
            </div>
          </section>

        </div>

        {/* Sidebar Info & Links */}
        <div className="space-y-8">
          <div className="bg-[#035c00] text-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-4">Navigate Sainik Hub</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/coaching/sainik-school/syllabus" className="text-white hover:text-yellow-400 font-medium flex items-center justify-between">
                  <span>Detailed Syllabus</span>
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
            <h3 className="text-lg font-bold text-gray-900 mb-2">Form Filling Assistance</h3>
            <p className="text-sm text-gray-700 mb-4">
              The NTA AISSEE form is notoriously complex. We provide free application form filling assistance to all students enrolled in our Sainik Batch to prevent rejection.
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
