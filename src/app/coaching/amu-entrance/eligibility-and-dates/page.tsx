import { Metadata } from 'next';
import Link from 'next/link';
import Image from '@/components/LazyImage';

export const metadata: Metadata = {
  title: 'AMU Class 6 Eligibility & Important Dates 2027 | Age Limit',
  description: 'Check the exact AMU Class 6 eligibility criteria, minimum age limit (10 to 12 years), application form last date, and admission process for 2027.',
  keywords: 'amu class 6 age limit, amu class 6 eligibility criteria, amu class 6 minimum age 10 to 12 years, amu class 6 admission form last date',
};

// FAQ Schema for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the AMU class 6 age limit for 2027?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The AMU Class 6 minimum age is 10 to 12 years. Specifically, for the 2027-28 session, the candidate must be born between April 1, 2015, and March 31, 2017."
      }
    },
    {
      "@type": "Question",
      "name": "What are the AMU class 6 eligibility criteria?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The candidate must have passed Class 5 from a school recognized by the government and must meet the 10-12 years age limit criteria."
      }
    },
    {
      "@type": "Question",
      "name": "When is the AMU class 6 admission form last date?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The AMU school admission forms are typically released in February. The last date to submit the form without a late fee is usually expected in the first week of March."
      }
    },
    {
      "@type": "Question",
      "name": "What is the 40% language section qualifying rule?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In the AMU Class 6 entrance, students must score at least 40% (10 marks out of 25) in the Languages section (English, Hindi, Urdu combined) to have their Mathematics and Science sections evaluated."
      }
    }
  ]
};

export default function AmuEligibilityPage() {
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
          <Link href="/coaching/amu-entrance" className="hover:text-[#035c00]">AMU Entrance</Link> / 
          <span className="text-gray-800 font-medium">Eligibility & Dates</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <Image 
          src="/images/coaching/amu_cluster_hero.avif" 
          alt="AMU Entrance Eligibility" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
            <span className="bg-yellow-400 text-yellow-950 font-bold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider mb-4 inline-block">
              Important Criteria
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
              AMU Class 6 Eligibility Criteria & Dates
            </h1>
            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
              Find out if your child meets the age limits and academic qualifications required for AMU School Admissions in 2027.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-12">
          
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-6">AMU Class 6 Eligibility Criteria</h2>
            <p className="text-gray-600 mb-6">
              Before beginning preparation, parents must strictly verify the <strong>amu class 6 eligibility criteria</strong>. If a child&apos;s age or academic record does not match the official AMU guidelines, their application will be rejected regardless of their entrance test score.
            </p>

            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-[#035c00] p-5 rounded-r-xl">
                <h3 className="font-bold text-gray-900 mb-2">1. Age Limit (Crucial)</h3>
                <p className="text-gray-700">
                  The official <strong>amu class 6 age limit</strong> strictly mandates that the candidate must be between <strong>10 to 12 years</strong> as of March 31 of the admission year. 
                  <br /><br />
                  For 2027 admissions, the child must be born between <strong>April 1, 2015, and March 31, 2017</strong>.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-[#035c00] p-5 rounded-r-xl">
                <h3 className="font-bold text-gray-900 mb-2">2. Educational Qualification</h3>
                <p className="text-gray-700">
                  The candidate must have passed the Class 5 examination from a school which is registered and recognized by a competent government authority.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#035c00]">Important Dates for 2027</h2>
              <span className="text-xs font-bold bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">Updated Live</span>
            </div>
            
            <p className="text-gray-600 mb-6">
              Keep track of these tentative dates to make sure you do not miss the <strong>amu class 6 admission form last date</strong>. All dates are sourced directly from standard Aligarh Muslim University controller trends.
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="p-3 font-semibold text-gray-700 border-r border-gray-200">Event</th>
                    <th className="p-3 font-semibold text-gray-700">Expected Timeline (2027)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium text-gray-800 border-r border-gray-200">Online Application Form Release</td>
                    <td className="p-3 text-gray-600">1st Week of February 2027</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50/50">
                    <td className="p-3 font-medium text-red-600 border-r border-gray-200">Form Last Date (Without Late Fee)</td>
                    <td className="p-3 text-red-600 font-bold">1st Week of March 2027</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium text-gray-800 border-r border-gray-200">Form Last Date (With Late Fee)</td>
                    <td className="p-3 text-gray-600">2nd Week of March 2027</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50/50">
                    <td className="p-3 font-medium text-gray-800 border-r border-gray-200">Admit Card Availability</td>
                    <td className="p-3 text-gray-600">1 Week before Exam</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-bold text-[#035c00] border-r border-gray-200">AMU Entrance Exam Date</td>
                    <td className="p-3 text-[#035c00] font-bold">April 2027</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-4 italic">
              *Please always verify the final exact dates at the official portal: amucontrollerexams.com once the notification is out.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Q. What is the AMU class 6 age limit for 2027?</h3>
                <p className="text-gray-600 text-sm">The AMU Class 6 minimum age is 10 to 12 years. For the 2027 session, the candidate must be born between April 1, 2015, and March 31, 2017.</p>
              </div>
              <div className="border-t border-gray-100 pt-6">
                <h3 className="font-bold text-gray-900 mb-2">Q. What is the 40% language section qualifying rule?</h3>
                <p className="text-gray-600 text-sm">In the AMU Class 6 entrance, students must score at least 40% (10 marks out of 25) in the Languages section (English, Hindi, Urdu combined) to have their Mathematics and Science sections evaluated.</p>
              </div>
              <div className="border-t border-gray-100 pt-6">
                <h3 className="font-bold text-gray-900 mb-2">Q. Which AMU schools accept Class 6 admissions?</h3>
                <p className="text-gray-600 text-sm">Admissions are made for STS School (Minto Circle), AMU City School, AMU Girls School, and RMPS AMU City School.</p>
              </div>
            </div>
          </section>

        </div>

        {/* Sidebar Info & Links */}
        <div className="space-y-8">
          <div className="bg-[#035c00] text-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-4">Navigate AMU Hub</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/coaching/amu-entrance/syllabus" className="text-white hover:text-yellow-400 font-medium flex items-center justify-between">
                  <span>Detailed Syllabus</span>
                  <span>&rarr;</span>
                </Link>
              </li>
              <li className="border-t border-green-800 pt-3">
                <Link href="/coaching/amu-entrance/previous-year-papers" className="text-white hover:text-yellow-400 font-medium flex items-center justify-between">
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
            <h3 className="text-lg font-bold text-gray-900 mb-2">We Handle The Forms</h3>
            <p className="text-sm text-gray-700 mb-4">
              Parents at JGPS Coaching do not need to worry about missing deadlines or making errors. We assist all our enrolled students in officially filling out the AMU application forms correctly.
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
