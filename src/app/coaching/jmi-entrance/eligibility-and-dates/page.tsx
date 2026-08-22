import { Metadata } from 'next';
import Link from 'next/link';
import Image from '@/components/LazyImage';

export const metadata: Metadata = {
  title: 'Jamia Class 6 Age Limit & Eligibility 2027 | JMI Admission Dates',
  description: 'Check the official jamia class 6 age limit and jmi admission eligibility class 9 41 percent criteria for 2027. View form release dates and the jamia class 6 qualifying exam class 5 requirement.',
  keywords: 'jamia class 6 age limit, jmi admission eligibility class 9 41 percent, jamia class 6 qualifying exam class 5',
};

// FAQ Schema for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the Jamia class 6 age limit for 2027?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Jamia Class 6 minimum age is typically 10 to 12 years. For the 2027 session, the child&apos;s age should strictly fall within this bracket as of March 31 of the admission year."
      }
    },
    {
      "@type": "Question",
      "name": "What is the jmi admission eligibility class 9 41 percent rule?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To be eligible for Jamia Class 9 admission, students must have passed Class 8 with an aggregate of at least 41% marks or equivalent grade from a recognized school."
      }
    },
    {
      "@type": "Question",
      "name": "What is the jamia class 6 qualifying exam requirement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For Jamia class 6 entrance, the qualifying exam is Class 5. The student must have passed Class 5 from a CBSE/Govt. recognized school."
      }
    },
    {
      "@type": "Question",
      "name": "When does the Jamia application form typically release?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JMI school admission forms usually release in March, and the entrance test is conducted in late April or early May."
      }
    }
  ]
};

export default function JmiEligibilityPage() {
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
          <Link href="/coaching/jmi-entrance" className="hover:text-[#035c00]">JMI Entrance</Link> / 
          <span className="text-gray-800 font-medium">Eligibility & Dates</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <Image 
          src="/images/coaching/jmi_cluster_hero.avif" 
          alt="JMI Entrance Eligibility" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
            <span className="bg-yellow-400 text-yellow-950 font-bold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider mb-4 inline-block">
              Important Criteria
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
              JMI Class 6 & 9 Eligibility Criteria & Dates
            </h1>
            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
              Find out if your child meets the age limits and academic qualifications required for Jamia Millia Islamia School Admissions in 2027.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-12">
          
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-6">Jamia Class 6 & 9 Eligibility Criteria</h2>
            <p className="text-gray-600 mb-6">
              Before applying, verify the strict <strong>jamia class 6 age limit</strong> and academic qualifications. Unlike AMU, Jamia has specific percentage-based cutoffs for qualifying exams.
            </p>

            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-[#035c00] p-5 rounded-r-xl">
                <h3 className="font-bold text-gray-900 mb-2">Class 6 Eligibility</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li><strong>Age Limit:</strong> Must be 10 to 12 years old as of March 31 of the admission year.</li>
                  <li><strong>Qualifying Exam:</strong> Must have passed the <strong>jamia class 6 qualifying exam class 5</strong> from a school recognized by a competent government authority.</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-[#035c00] p-5 rounded-r-xl">
                <h3 className="font-bold text-gray-900 mb-2">Class 9 Eligibility</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li><strong>Age Limit:</strong> Must be 13 to 15 years old as of March 31 of the admission year.</li>
                  <li><strong>Qualifying Exam (41% Rule):</strong> According to the <strong>jmi admission eligibility class 9 41 percent</strong> rule, the candidate must have passed Class 8 with an aggregate of at least 41% marks or an equivalent grade.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#035c00]">Important Dates for JMI 2027</h2>
              <span className="text-xs font-bold bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">Updated Live</span>
            </div>
            
            <p className="text-gray-600 mb-6">
              Keep track of these tentative dates to make sure you do not miss the application window. JMI&apos;s process often starts slightly later than AMU.
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
                    <td className="p-3 font-medium text-gray-800 border-r border-gray-200">Availability of Online Forms</td>
                    <td className="p-3 text-gray-600">March 2027</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50/50">
                    <td className="p-3 font-medium text-red-600 border-r border-gray-200">Last Date to Submit Online Form</td>
                    <td className="p-3 text-red-600 font-bold">April 2027</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium text-gray-800 border-r border-gray-200">Admit Card Release Date</td>
                    <td className="p-3 text-gray-600">Late April 2027</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50/50">
                    <td className="p-3 font-bold text-[#035c00] border-r border-gray-200">JMI Entrance Written Test</td>
                    <td className="p-3 text-[#035c00] font-bold">May 2027</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-4 italic">
              *Please always verify the final exact dates at the official portal: jmicoe.in once the notification is out.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Q. What is the Jamia class 6 age limit for 2027?</h3>
                <p className="text-gray-600 text-sm">The minimum age limit is 10-12 years. The student must not be born before or after the designated cut-off dates for the 2027-2028 session.</p>
              </div>
              <div className="border-t border-gray-100 pt-6">
                <h3 className="font-bold text-gray-900 mb-2">Q. What is the jmi admission eligibility class 9 41 percent rule?</h3>
                <p className="text-gray-600 text-sm">For Class 9 admissions, JMI requires the candidate to have passed Class 8 with an aggregate score of at least 41%.</p>
              </div>
              <div className="border-t border-gray-100 pt-6">
                <h3 className="font-bold text-gray-900 mb-2">Q. Are there interviews for JMI school admissions?</h3>
                <p className="text-gray-600 text-sm">No. Jamia Millia Islamia does not conduct interviews for Class 6 or Class 9 school admissions. The selection is 100% based on the 100-marks written OMR test.</p>
              </div>
            </div>
          </section>

        </div>

        {/* Sidebar Info & Links */}
        <div className="space-y-8">
          <div className="bg-[#035c00] text-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-4">Navigate JMI Hub</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/coaching/jmi-entrance/syllabus" className="text-white hover:text-yellow-400 font-medium flex items-center justify-between">
                  <span>Detailed Syllabus</span>
                  <span>&rarr;</span>
                </Link>
              </li>
              <li className="border-t border-green-800 pt-3">
                <Link href="/coaching/jmi-entrance/previous-year-papers" className="text-white hover:text-yellow-400 font-medium flex items-center justify-between">
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
              Parents at JGPS Coaching do not need to worry about missing deadlines or making errors. We assist all our enrolled students in officially filling out the JMI application forms correctly.
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
