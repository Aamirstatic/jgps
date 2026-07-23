import { Metadata } from 'next';
import Link from 'next/link';
import Image from '@/components/LazyImage';

export const metadata: Metadata = {
  title: 'JNV Admission Form 2027 Class 6 Date & Eligibility Criteria',
  description: 'Check the 75% rural quota rules for navodaya vidyalaya admission class 6. Get the exact jnv admission form 2027 class 6 date and jnvst admission 2027 details.',
  keywords: 'jnvst admission 2027, navodaya vidyalaya admission class 6, jnv admission form 2027 class 6 date',
};

// FAQ Schema for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who is eligible for navodaya vidyalaya admission class 6?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The candidate must be a bona fide resident of the district where the JNV is located. They must be studying in Class-V in a Govt./Govt. recognized school in the same district."
      }
    },
    {
      "@type": "Question",
      "name": "What is the jnv admission form 2027 class 6 date?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The JNVST admission forms usually release in July/August. The last date to apply is typically in September. The exam is conducted in two phases (mostly in January and April depending on the state)."
      }
    },
    {
      "@type": "Question",
      "name": "What is the rural quota in JNVST?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At least 75% of the seats in a district are filled by candidates selected from rural areas. The remaining 25% seats are open and filled on merit from both urban and rural candidates."
      }
    },
    {
      "@type": "Question",
      "name": "Is Navodaya completely free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, education, boarding, lodging, uniforms, and textbooks are entirely free. However, a nominal fee of Rs. 600/- per month is collected from students of Classes 9 to 12 only (SC/ST, Divyang, Girls, and BPL students are exempted)."
      }
    }
  ]
};

export default function NavodayaEligibilityPage() {
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
          <Link href="/coaching/navodaya-vidyalaya" className="hover:text-[#035c00]">Navodaya Entrance</Link> / 
          <span className="text-gray-800 font-medium">Eligibility & Dates</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <Image 
          src="/images/coaching/navodaya_cluster_hero.avif" 
          alt="Navodaya Admission Eligibility" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
            <span className="bg-yellow-400 text-yellow-950 font-bold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider mb-4 inline-block">
              Important Criteria
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
              JNVST Eligibility & Admission Dates 2027
            </h1>
            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
              Before waiting for the <strong>jnv admission form 2027 class 6 date</strong>, carefully read the rural quota and district-specific rules to make sure your child&apos;s <strong>jnvst admission 2027</strong> form is not rejected.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-12">
          
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-6">Navodaya Eligibility Criteria (Class 6)</h2>
            <p className="text-gray-600 mb-6">
              The <strong>navodaya vidyalaya admission class 6</strong> rules are designed to strictly benefit the local population of the specific district.
            </p>

            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-[#035c00] p-5 rounded-r-xl">
                <h3 className="font-bold text-gray-900 mb-2">1. District Rule (Crucial)</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2 text-sm">
                  <li>The candidate must be studying in Class-V in a recognized school located in the <strong>SAME DISTRICT</strong> where the JNV is functioning.</li>
                  <li>The candidate must also be a bona-fide resident of that same district.</li>
                  <li>You cannot apply for a Navodaya school in a neighboring district.</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-[#035c00] p-5 rounded-r-xl">
                <h3 className="font-bold text-gray-900 mb-2">2. Age Limit</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2 text-sm">
                  <li>For the 2027 session, the candidate must generally be born between May 1, 2015, and April 30, 2017 (Tentative; check official notification).</li>
                  <li>The candidate must not be overage or underage. No age relaxation is given to any category.</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-5 rounded-xl">
                <h3 className="font-bold text-yellow-800 mb-2">3. The 75% Rural Quota</h3>
                <p className="text-sm text-yellow-900 leading-relaxed mb-2">
                  At least 75% of the seats in a district are filled by candidates selected from rural areas. To claim rural quota:
                </p>
                <ul className="list-disc pl-5 text-yellow-900 space-y-1 text-sm">
                  <li>The candidate must have studied Classes III, IV, and V for full academic sessions in recognized schools located in <strong>rural areas</strong>.</li>
                  <li>If a candidate has studied in an urban school even for a single day in Class III, IV or V, they will be considered an URBAN candidate.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#035c00]">Important Dates for JNVST 2027</h2>
              <span className="text-xs font-bold bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">Tentative</span>
            </div>
            
            <p className="text-gray-600 mb-6">
              Track the exact <strong>jnv admission form 2027 class 6 date</strong> through navodaya.gov.in. Note that JNVST is conducted in two phases across India depending on the winter/summer zone of the state.
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="p-3 font-semibold text-gray-700 border-r border-gray-200">Event</th>
                    <th className="p-3 font-semibold text-gray-700">Confirmed Timeline (2027-28 Session)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium text-gray-800 border-r border-gray-200">Online Form Release Date</td>
                    <td className="p-3 text-green-700 font-bold">6 July 2026</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50/50">
                    <td className="p-3 font-medium text-red-600 border-r border-gray-200">Last Date to Apply</td>
                    <td className="p-3 text-red-600 font-bold">31 July 2026</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium text-gray-800 border-r border-gray-200">Application Fee</td>
                    <td className="p-3 text-green-700 font-bold">नि:शुल्क (Free)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50/50">
                    <td className="p-3 font-bold text-[#035c00] border-r border-gray-200">JNVST Exam Date</td>
                    <td className="p-3 text-[#035c00] font-bold">28 November 2026</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium text-gray-800 border-r border-gray-200">Result</td>
                    <td className="p-3 text-gray-600">March / April 2027</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Q. What is the reservation for Girls in JNVST?</h3>
                <p className="text-gray-600 text-sm">One-third (33%) of the total seats are reserved for girls. This is an excellent opportunity for female students.</p>
              </div>
              <div className="border-t border-gray-100 pt-6">
                <h3 className="font-bold text-gray-900 mb-2">Q. How many times can a student appear for JNVST?</h3>
                <p className="text-gray-600 text-sm">A candidate is allowed to appear for the selection test ONLY ONCE. Repeaters are strictly not allowed and are disqualified automatically.</p>
              </div>
              <div className="border-t border-gray-100 pt-6">
                <h3 className="font-bold text-gray-900 mb-2">Q. Is Navodaya completely free?</h3>
                <p className="text-gray-600 text-sm">Yes, education, boarding, and lodging are free. A nominal fee of Rs. 600/month is charged ONLY from Class 9 onwards for general boys (SC/ST/Girls/BPL are exempted).</p>
              </div>
            </div>
          </section>

        </div>

        {/* Sidebar Info & Links */}
        <div className="space-y-8">
          <div className="bg-[#035c00] text-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-4">Navigate Navodaya Hub</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/coaching/navodaya-vidyalaya/syllabus" className="text-white hover:text-yellow-400 font-medium flex items-center justify-between">
                  <span>Detailed Syllabus</span>
                  <span>&rarr;</span>
                </Link>
              </li>
              <li className="border-t border-green-800 pt-3">
                <Link href="/coaching/navodaya-vidyalaya/previous-year-papers" className="text-white hover:text-yellow-400 font-medium flex items-center justify-between">
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
            <h3 className="text-lg font-bold text-gray-900 mb-2">Headmaster Certificate</h3>
            <p className="text-sm text-gray-700 mb-4">
              Applying for Navodaya requires a mandatory certificate signed by the Headmaster of your current Class 5 school. We help JGPS students get this processed immediately.
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
