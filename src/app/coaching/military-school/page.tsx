import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Military School Coaching | JGPS',
  description: 'RMS CET Military School coaching for Class 6 and 9 at JGPS Joya, Amroha.',
  alternates: {
    canonical: 'https://jgps.in/coaching/military-school/',
  },
};

export default function MilitarySchoolHubPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-gray-500 flex gap-2">
          <Link href="/" className="hover:text-[#035c00]">Home</Link> / 
          <Link href="/coaching" className="hover:text-[#035c00]">Coaching</Link> / 
          <span className="text-gray-800 font-medium">RMS Entrance</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-[#035c00] to-[#023b00] py-16 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="bg-yellow-400 text-yellow-950 font-bold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider mb-4 inline-block">
            RMS CET Admissions 2027
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Rashtriya Military School Admissions 2027
          </h1>
          <p className="text-lg text-white/90 max-w-3xl leading-relaxed mb-8">
            Your complete guide to India's most top military schools. Check your eligibility, download the official RMS CET syllabus, and access previous year question papers.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/coaching/military-school/eligibility-and-dates" className="bg-white text-[#035c00] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Check Eligibility & Dates
            </Link>
            <Link href="/entrance-eligibility-checker" className="bg-yellow-400 text-[#035c00] px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors">
              Free Eligibility Checker Widget
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Syllabus Card */}
            <Link href="/coaching/military-school/syllabus" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#035c00] hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-green-50 text-[#035c00] rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">ðŸ"š</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#035c00]">RMS CET Syllabus</h2>
              <p className="text-sm text-gray-600 mb-4">Get the detailed, subject-wise syllabus for the 200 marks exam including the Interview phase.</p>
              <span className="text-[#035c00] font-medium text-sm">View Syllabus &rarr;</span>
            </Link>

            {/* Papers Card */}
            <Link href="/coaching/military-school/previous-year-papers" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#035c00] hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-green-50 text-[#035c00] rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">ðŸ"„</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#035c00]">Previous Year Papers</h2>
              <p className="text-sm text-gray-600 mb-4">Download official RMS CET past question papers in PDF format to build speed and accuracy.</p>
              <span className="text-[#035c00] font-medium text-sm">Download Papers &rarr;</span>
            </Link>

            {/* Eligibility Card */}
            <Link href="/coaching/military-school/eligibility-and-dates" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#035c00] hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-green-50 text-[#035c00] rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">ðŸ"…</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#035c00]">Eligibility & Important Dates</h2>
              <p className="text-sm text-gray-600 mb-4">Check age limits, medical criteria, application form last dates, and civilian vs JCO/OR quotas.</p>
              <span className="text-[#035c00] font-medium text-sm">View Dates &rarr;</span>
            </Link>

            {/* Blog Post Feature */}
            <Link href="/blog/rashtriya-military-school-admission-2027-class-6-guide" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#035c00] hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-yellow-50 text-yellow-600 rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">ðŸ'¡</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#035c00]">RMS Ultimate Guide</h2>
              <p className="text-sm text-gray-600 mb-4">Read our deep dive guide into how to prepare for the toughest school entrance exam in India.</p>
              <span className="text-[#035c00] font-medium text-sm">Read Article &rarr;</span>
            </Link>
          </div>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-4">About Rashtriya Military Schools</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Rashtriya Military Schools (RMS) are CBSE affiliated boarding schools strictly for boys (and now girls for class 6) run by the Ministry of Defence, Government of India. There are only five Rashtriya Military Schools in India: RMS Chail (Himachal Pradesh), RMS Ajmer (Rajasthan), RMS Belgaum (Karnataka), RMS Bengaluru (Karnataka), and RMS Dholpur (Rajasthan).
            </p>
            <p className="text-gray-600 leading-relaxed">
              Admissions are conducted through the <strong>Common Entrance Test (CET)</strong>. The examination is highly competitive due to the extremely limited number of seats (approx 400 seats total across India for Class 6) and features a quota system heavily favoring wards of JCOs/ORs in the Armed Forces.
            </p>
          </section>
        </div>

        {/* Sidebar Info & Registration */}
        <div className="space-y-8">
          <div className="bg-[#035c00] text-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-2">RMS Coaching Batch 2027</h3>
            <p className="text-xs text-white/90 mb-6 leading-relaxed">
              RMS CET is tougher than Sainik School. Join our special, tough RMS batches in Joya to make sure your child&apos;s success.
            </p>
            <ul className="space-y-3 text-sm text-white/90 mb-6">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">âœ"</span>
                <span><strong>special Intelligence Training:</strong> The reasoning section in RMS requires high speed logic. We train daily for this.</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">âœ"</span>
                <span><strong>Interview Prep:</strong> Unlike Sainik School, RMS has a strict 20-mark personal interview. We conduct mock interviews.</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">âœ"</span>
                <span><strong>OMR Practice:</strong> Weekly mock tests to reduce filling errors.</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="bg-yellow-400 hover:bg-yellow-300 text-[#035c00] font-bold py-3 px-6 rounded-lg text-center block text-sm transition-all shadow-md"
            >
              Inquire About Coaching
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
