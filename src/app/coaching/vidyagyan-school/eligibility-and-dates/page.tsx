import { Metadata } from 'next';
import Link from 'next/link';
import Image from '@/components/LazyImage';

export const metadata: Metadata = {
  title: 'Vidyagyan Form Date 2027 & Admission Eligibility | Class 6',
  description: 'Check the strict vidyagyan school admission 2027-28 eligibility criteria for rural students. Find the vidyagyan form date 2027 and income limits.',
  keywords: 'vidyagyan school admission 2027-28, vidyagyan form date 2027, vidyagyan school admission for class 6 2027-28',
};

// FAQ Schema for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who is eligible for vidyagyan school admission 2027-28?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The child must belong to a rural area in Uttar Pradesh, must be studying in Class 5 in a recognized rural school, and the family income must be less than ₹1 Lakh per annum."
      }
    },
    {
      "@type": "Question",
      "name": "What is the vidyagyan form date 2027?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The application forms for Vidyagyan usually open in September or October. The preliminary entrance exam is typically held in December."
      }
    },
    {
      "@type": "Question",
      "name": "What is the age limit for vidyagyan school admission for class 6 2027-28?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For boys, the age should be between 10 to 11 years. For girls, the age limit is typically 10 to 12 years as of March 31 of the admission year."
      }
    },
    {
      "@type": "Question",
      "name": "Can urban students apply for Vidyagyan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Vidyagyan is strictly a rural leadership initiative. Students studying in urban schools or residing in urban areas are totally ineligible."
      }
    }
  ]
};

export default function VidyagyanEligibilityPage() {
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
          <Link href="/coaching/vidyagyan-school" className="hover:text-[#035c00]">Vidyagyan Entrance</Link> / 
          <span className="text-gray-800 font-medium">Eligibility & Dates</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <Image 
          src="/images/coaching/vidyagyan_cluster_hero.avif" 
          alt="Vidyagyan Admission Eligibility" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
            <span className="bg-yellow-400 text-yellow-950 font-bold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider mb-4 inline-block">
              Important Criteria
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
              Vidyagyan Eligibility & Dates 2027
            </h1>
            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
              Vidyagyan has the strictest eligibility rules of any school in India. Read the complete <strong>vidyagyan school admission 2027-28</strong> criteria to see if you qualify.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-12">
          
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-6">Vidyagyan Eligibility Criteria (Strict)</h2>
            <p className="text-gray-600 mb-6">
              The <strong>vidyagyan school admission for class 6 2027-28</strong> is exclusively designed for the brightest minds from the rural, economically weaker sections of Uttar Pradesh. If you fail any of the criteria below, your form will be rejected.
            </p>

            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-[#035c00] p-5 rounded-r-xl">
                <h3 className="font-bold text-gray-900 mb-2">1. Rural Domicile & Schooling</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2 text-sm">
                  <li>The candidate must be a permanent resident of a rural area in Uttar Pradesh.</li>
                  <li>The candidate MUST be studying in Class 5 in a recognized rural school located in UP.</li>
                  <li>Students studying in urban areas or private urban schools are NOT eligible.</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-[#035c00] p-5 rounded-r-xl">
                <h3 className="font-bold text-gray-900 mb-2">2. Financial Limit</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2 text-sm">
                  <li>The combined annual income of the family (from all sources) must be <strong>less than ₹1 Lakh (₹1,000,00)</strong>.</li>
                  <li>An authentic income certificate issued by the Tehsildar is mandatory for verification.</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-[#035c00] p-5 rounded-r-xl">
                <h3 className="font-bold text-gray-900 mb-2">3. Age Limit</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2 text-sm">
                  <li><strong>For Boys:</strong> Age must be between 10 to 11 years as of March 31 of the admission year.</li>
                  <li><strong>For Girls:</strong> Age must be between 10 to 12 years as of March 31 of the admission year.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#035c00]">Important Dates for Vidyagyan 2027</h2>
              <span className="text-xs font-bold bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">Tentative</span>
            </div>
            
            <p className="text-gray-600 mb-6">
              If you are waiting for the <strong>vidyagyan form date 2027</strong>, keep all your documents (Income certificate, Aadhar, School certificates) ready by August.
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
                    <td className="p-3 font-medium text-gray-800 border-r border-gray-200">Release of Forms (Through BEO/Schools)</td>
                    <td className="p-3 text-gray-600">September / October 2026</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50/50">
                    <td className="p-3 font-medium text-red-600 border-r border-gray-200">Last Date of Form Submission</td>
                    <td className="p-3 text-red-600 font-bold">November 2026</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-bold text-[#035c00] border-r border-gray-200">Preliminary Written Exam</td>
                    <td className="p-3 text-[#035c00] font-bold">December 2026</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50/50">
                    <td className="p-3 font-medium text-gray-800 border-r border-gray-200">Mains Written Exam</td>
                    <td className="p-3 text-gray-600">February 2027</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium text-gray-800 border-r border-gray-200">Document Verification</td>
                    <td className="p-3 text-gray-600">March / April 2027</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-4 italic">
              *Official dates will be communicated through the Basic Education Officers (BEO) and vidyagyan.in.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Q. Who is eligible for vidyagyan school admission 2027-28?</h3>
                <p className="text-gray-600 text-sm">Rural UP students, currently in Class 5, with family income under ₹1 Lakh.</p>
              </div>
              <div className="border-t border-gray-100 pt-6">
                <h3 className="font-bold text-gray-900 mb-2">Q. Can urban students apply for Vidyagyan?</h3>
                <p className="text-gray-600 text-sm">Absolutely not. The foundation conducts strict physical background checks. If an urban family applies with fake rural documents, they are rejected during the verification phase.</p>
              </div>
              <div className="border-t border-gray-100 pt-6">
                <h3 className="font-bold text-gray-900 mb-2">Q. How much are the fees for Vidyagyan?</h3>
                <p className="text-gray-600 text-sm">Zero. Vidyagyan is completely free, including education, hostel, food, uniforms, laptops, and study materials till Class 12.</p>
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
                <Link href="/coaching/vidyagyan-school/syllabus" className="text-white hover:text-yellow-400 font-medium flex items-center justify-between">
                  <span>Detailed Syllabus</span>
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
            <h3 className="text-lg font-bold text-gray-900 mb-2">Document Preparation</h3>
            <p className="text-sm text-gray-700 mb-4">
              Do not wait for the exam to get your Income and Domicile certificates. Start the process now. JGPS Joya assists our students&apos; parents with all documentation work.
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
