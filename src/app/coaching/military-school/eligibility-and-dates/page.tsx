import { Metadata } from 'next';
import Link from 'next/link';
import Image from '@/components/LazyImage';

export const metadata: Metadata = {
  title: 'RMS Admission Age Limit 2027 & Form Date | Rashtriya Military School',
  description: 'Check the strict rms admission age limit and eligibility criteria for 2027. Find the military school class 6 admission form date and medical standards.',
  keywords: 'rashtriya military school admission 2027, military school class 6 admission form date, rms admission age limit',
};

// FAQ Schema for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the rms admission age limit for Class 6?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For admission to Class 6, a candidate should be between 10 and 12 years of age as on 31 March of the year of admission. Both boys and girls are now eligible for Class 6."
      }
    },
    {
      "@type": "Question",
      "name": "What is the military school class 6 admission form date?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The online application forms for RMS CET are typically released in September or October. Keep checking rashtriyamilitaryschools.edu.in for the official notification."
      }
    },
    {
      "@type": "Question",
      "name": "Can civilians apply for Rashtriya Military School?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, civilians can apply. However, 70% of the seats are reserved for wards of JCOs/ORs in the Army, Navy, and Air Force. Only 30% of seats are available for Officers' wards and Civilians."
      }
    },
    {
      "@type": "Question",
      "name": "Is there an interview in RMS admissions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, unlike Sainik Schools, RMS has a strict interview round carrying 20 marks for Class 6 and 50 marks for Class 9, which is added to the final merit."
      }
    }
  ]
};

export default function RmsEligibilityPage() {
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
          <Link href="/coaching/military-school" className="hover:text-[#035c00]">RMS Entrance</Link> / 
          <span className="text-gray-800 font-medium">Eligibility & Dates</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <Image 
          src="/images/coaching/rms_cluster_hero.avif" 
          alt="RMS Admission Eligibility" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
            <span className="bg-yellow-400 text-yellow-950 font-bold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider mb-4 inline-block">
              Important Criteria
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
              RMS Admission Eligibility & Dates 2027
            </h1>
            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
              Find the official <strong>rms admission age limit</strong> and crucial timeline dates. make sure your child meets the medical and academic criteria before applying for CET.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-12">
          
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-6">RMS Eligibility Criteria (Class 6 & 9)</h2>
            <p className="text-gray-600 mb-6">
              The <strong>rashtriya military school admission 2027</strong> process is governed by strict rules, particularly concerning the reservation of seats for armed forces personnel.
            </p>

            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-[#035c00] p-5 rounded-r-xl">
                <h3 className="font-bold text-gray-900 mb-2">Class 6 Eligibility</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li><strong>Age Limit:</strong> Must be 10 to 12 years old as of March 31 of the admission year.</li>
                  <li><strong>Gender:</strong> Open for both Boys and Girls (Girls admitted from 2022 onwards).</li>
                  <li><strong>Educational Qualification:</strong> Should have passed Class 5 from a govt recognized school before the date of admission. However, a student studying in Class 5 is eligible to appear for the entrance test.</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-[#035c00] p-5 rounded-r-xl">
                <h3 className="font-bold text-gray-900 mb-2">Class 9 Eligibility</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li><strong>Age Limit:</strong> Must be 13 to 15 years old as of March 31 of the admission year.</li>
                  <li><strong>Gender:</strong> Historically open only for Boys (Check latest notification for updates on Girls quota).</li>
                  <li><strong>Educational Qualification:</strong> Must have passed Class 8 from a recognized school at the time of admission.</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-5 rounded-xl">
                <h3 className="font-bold text-yellow-800 mb-2">The Reservation / Quota System</h3>
                <p className="text-sm text-yellow-900 leading-relaxed mb-2">
                  The primary purpose of RMS is to provide education to wards of defense personnel. The seat distribution is:
                </p>
                <ul className="list-disc pl-5 text-yellow-900 space-y-1 text-sm">
                  <li><strong>70% Seats:</strong> Reserved for wards of JCOs/ORs in Army, Navy and Air Force (including Ex-servicemen).</li>
                  <li><strong>30% Seats:</strong> Reserved for wards of Officers of Army, Navy and AF (including retired) and Wards of Civilians.</li>
                  <li>A total of 50 seats (Not percentage) are earmarked for wards of personnel Killed in Action.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#035c00]">Important Dates for RMS CET 2027</h2>
              <span className="text-xs font-bold bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">Tentative</span>
            </div>
            
            <p className="text-gray-600 mb-6">
              If you are waiting for the <strong>military school class 6 admission form date</strong>, be ready by late 2026. RMS forms usually drop before Sainik School forms.
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
                    <td className="p-3 text-gray-600">September 2026</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50/50">
                    <td className="p-3 font-medium text-red-600 border-r border-gray-200">Online Application Form Window</td>
                    <td className="p-3 text-red-600 font-bold">Sep 2026 – Oct 2026</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium text-gray-800 border-r border-gray-200">Admit Card Download</td>
                    <td className="p-3 text-gray-600">Early December 2026</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50/50">
                    <td className="p-3 font-bold text-[#035c00] border-r border-gray-200">RMS CET Written Exam Date</td>
                    <td className="p-3 text-[#035c00] font-bold">December 2026 (Usually a Sunday)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium text-gray-800 border-r border-gray-200">Interview & Medical Examination</td>
                    <td className="p-3 text-gray-600">February / March 2027</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-4 italic">
              *Official dates are announced at rashtriyamilitaryschools.edu.in.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Q. What is the rms admission age limit for class 6?</h3>
                <p className="text-gray-600 text-sm">For the 2027-2028 academic year, the child must be between 10 and 12 years of age as of March 31, 2027.</p>
              </div>
              <div className="border-t border-gray-100 pt-6">
                <h3 className="font-bold text-gray-900 mb-2">Q. Can civilians apply for Rashtriya Military School?</h3>
                <p className="text-gray-600 text-sm">Yes, civilians can apply. However, they share a 30% quota pool along with wards of Officers of the Armed forces.</p>
              </div>
              <div className="border-t border-gray-100 pt-6">
                <h3 className="font-bold text-gray-900 mb-2">Q. Are there interviews for RMS school admissions?</h3>
                <p className="text-gray-600 text-sm">Yes, candidates who clear the CET written exam will be called for an Interview (20 marks for Class 6, 50 marks for Class 9) before the final merit list is created.</p>
              </div>
            </div>
          </section>

        </div>

        {/* Sidebar Info & Links */}
        <div className="space-y-8">
          <div className="bg-[#035c00] text-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-4">Navigate RMS Hub</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/coaching/military-school/syllabus" className="text-white hover:text-yellow-400 font-medium flex items-center justify-between">
                  <span>Detailed Syllabus</span>
                  <span>&rarr;</span>
                </Link>
              </li>
              <li className="border-t border-green-800 pt-3">
                <Link href="/coaching/military-school/previous-year-papers" className="text-white hover:text-yellow-400 font-medium flex items-center justify-between">
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
              The RMS form requires precise category selection (Civilian vs JCO vs Officer). We provide free application form filling assistance to all our enrolled students.
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
