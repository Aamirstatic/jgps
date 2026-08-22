import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sainik School Coaching | JGPS',
  description: 'Top-rated Sainik School AISSEE coaching for Class 6 and 9 at JGPS Joya, Amroha.',
  alternates: {
    canonical: 'https://jgps.in/coaching/sainik-school/',
  },
};

export default function SainikSchoolHubPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-gray-500 flex gap-2">
          <Link href="/" className="hover:text-[#035c00]">Home</Link> / 
          <Link href="/coaching" className="hover:text-[#035c00]">Coaching</Link> / 
          <span className="text-gray-800 font-medium">Sainik School</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-[#035c00] to-[#023b00] py-16 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="bg-yellow-400 text-yellow-950 font-bold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider mb-4 inline-block">
            AISSEE Admissions 2027
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Sainik School (AISSEE) Admissions 2027
          </h1>
          <p className="text-lg text-white/90 max-w-3xl leading-relaxed mb-8">
            Your complete guide to India's elite defense-oriented schools. Check your eligibility, download the official AISSEE syllabus, and get previous year question papers.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/coaching/sainik-school/eligibility-and-dates" className="bg-white text-[#035c00] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
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
            <Link href="/coaching/sainik-school/syllabus" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#035c00] hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-green-50 text-[#035c00] rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">ðŸ"š</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#035c00]">AISSEE Syllabus</h2>
              <p className="text-sm text-gray-600 mb-4">Get the detailed, subject-wise syllabus (Maths, Reasoning, GK, Language) for the 300 marks exam.</p>
              <span className="text-[#035c00] font-medium text-sm">View Syllabus &rarr;</span>
            </Link>

            {/* Papers Card */}
            <Link href="/coaching/sainik-school/previous-year-papers" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#035c00] hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-green-50 text-[#035c00] rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">ðŸ"„</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#035c00]">Previous Year Papers</h2>
              <p className="text-sm text-gray-600 mb-4">Download official AISSEE past question papers in PDF format to build speed and accuracy.</p>
              <span className="text-[#035c00] font-medium text-sm">Download Papers &rarr;</span>
            </Link>

            {/* Eligibility Card */}
            <Link href="/coaching/sainik-school/eligibility-and-dates" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#035c00] hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-green-50 text-[#035c00] rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">ðŸ"…</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#035c00]">Eligibility & Important Dates</h2>
              <p className="text-sm text-gray-600 mb-4">Check age limits, medical criteria, application form last dates, and 40% passing rules.</p>
              <span className="text-[#035c00] font-medium text-sm">View Dates &rarr;</span>
            </Link>

            {/* Blog Post Feature */}
            <Link href="/blog/sainik-school-vs-jnvst-2027" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#035c00] hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-yellow-50 text-yellow-600 rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">ðŸ'¡</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#035c00]">Sainik School vs Navodaya</h2>
              <p className="text-sm text-gray-600 mb-4">Confused between JNVST and AISSEE? Read our deep dive comparison to choose the right path.</p>
              <span className="text-[#035c00] font-medium text-sm">Read Article &rarr;</span>
            </Link>
          </div>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-4">About Sainik Schools & AISSEE</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sainik Schools are managed by the Sainik Schools Society under the Ministry of Defence, India. Their primary goal is to prepare students academically, physically, and mentally for entry into the National Defence Academy (NDA) and Indian Naval Academy (INA). Notable schools include <strong>Sainik School Ghorakhal (Nainital)</strong>, <strong>Sainik School Mainpuri</strong>, and <strong>UP Sainik School Lucknow</strong>.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Admissions are conducted through the <strong>All India Sainik School Entrance Examination (AISSEE)</strong>. The examination is highly competitive and demands deep analytical skills, specifically in Mathematics and logical Reasoning.
            </p>
          </section>
        </div>

        {/* Sidebar Info & Registration */}
        <div className="space-y-8">
          <div className="bg-[#035c00] text-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-2">AISSEE Coaching Batch 2027</h3>
            <p className="text-xs text-white/90 mb-6 leading-relaxed">
              Mathematics makes up 50% of the AISSEE exam. Join our special math and reasoning batches in Joya.
            </p>
            <ul className="space-y-3 text-sm text-white/90 mb-6">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">âœ"</span>
                <span><strong>special Math Training:</strong> Daily 2-hour Math sessions with shortcuts.</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">âœ"</span>
                <span><strong>Reasoning Worksheets:</strong> complete practice for analogies and puzzles.</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">âœ"</span>
                <span><strong>OMR Practice:</strong> Mock tests to reduce filling errors under timed pressure.</span>
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
