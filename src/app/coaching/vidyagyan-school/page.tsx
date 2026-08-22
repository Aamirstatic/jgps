import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Vidyagyan School Coaching | JGPS',
  description: 'Vidyagyan School admission coaching for rural UP students at JGPS Joya, Amroha.',
  alternates: {
    canonical: 'https://jgps.in/coaching/vidyagyan-school/',
  },
};

export default function VidyagyanHubPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-gray-500 flex gap-2">
          <Link href="/" className="hover:text-[#035c00]">Home</Link> / 
          <Link href="/coaching" className="hover:text-[#035c00]">Coaching</Link> / 
          <span className="text-gray-800 font-medium">Vidyagyan Entrance</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-[#035c00] to-[#023b00] py-16 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="bg-yellow-400 text-yellow-950 font-bold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider mb-4 inline-block">
            Vidyagyan Admissions 2027
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Vidyagyan School Admissions 2027
          </h1>
          <p className="text-lg text-white/90 max-w-3xl leading-relaxed mb-8">
            An initiative by the Shiv Nadar Foundation to transform rural India. Check the strict rural eligibility criteria, download the syllabus, and get previous year papers for the Vidyagyan Entrance Test.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/coaching/vidyagyan-school/eligibility-and-dates" className="bg-white text-[#035c00] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Check Rural Eligibility Requirements
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
            <Link href="/coaching/vidyagyan-school/syllabus" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#035c00] hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-green-50 text-[#035c00] rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">ðŸ"š</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#035c00]">Vidyagyan Syllabus</h2>
              <p className="text-sm text-gray-600 mb-4">Get the detailed syllabus covering Hindi, Maths, Science, and Mental Ability for the Prelims and Mains.</p>
              <span className="text-[#035c00] font-medium text-sm">View Syllabus &rarr;</span>
            </Link>

            {/* Papers Card */}
            <Link href="/coaching/vidyagyan-school/previous-year-papers" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#035c00] hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-green-50 text-[#035c00] rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">ðŸ"„</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#035c00]">Previous Year Papers</h2>
              <p className="text-sm text-gray-600 mb-4">Download past question papers to understand the unique pattern of the Vidyagyan exam.</p>
              <span className="text-[#035c00] font-medium text-sm">Download Papers &rarr;</span>
            </Link>

            {/* Eligibility Card */}
            <Link href="/coaching/vidyagyan-school/eligibility-and-dates" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#035c00] hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-green-50 text-[#035c00] rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">ðŸ"…</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#035c00]">Eligibility & Important Dates</h2>
              <p className="text-sm text-gray-600 mb-4">Vidyagyan is strictly for rural UP students with family income less than â‚¹1 Lakh/year. Read all rules.</p>
              <span className="text-[#035c00] font-medium text-sm">View Dates &rarr;</span>
            </Link>

            {/* Blog Post Feature */}
            <Link href="/blog/vidyagyan-school-admission-eligibility-syllabus" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#035c00] hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-yellow-50 text-yellow-600 rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">ðŸ'¡</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#035c00]">Vidyagyan Deep Dive Guide</h2>
              <p className="text-sm text-gray-600 mb-4">Read our complete analysis on the Vidyagyan selection process and why it&apos;s a golden opportunity.</p>
              <span className="text-[#035c00] font-medium text-sm">Read Article &rarr;</span>
            </Link>
          </div>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-4">About Vidyagyan Schools</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Established in 2009 by the Shiv Nadar Foundation, Vidyagyan is a radical social experiment aimed at transforming bright students from rural Uttar Pradesh into future leaders. There are two campuses: Vidyagyan Bulandshahr and Vidyagyan Sitapur.
            </p>
            <p className="text-gray-600 leading-relaxed">
              These are fully free, world-class boarding schools. Everything from education, lodging, boarding, uniforms, to books is entirely funded by the foundation. Due to its prestige and zero cost, the selection process is tough, comprising a Preliminary written test, a Mains written test, and an extensive background verification process.
            </p>
          </section>
        </div>

        {/* Sidebar Info & Registration */}
        <div className="space-y-8">
          <div className="bg-[#035c00] text-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-2">Vidyagyan Coaching Batch 2027</h3>
            <p className="text-xs text-white/90 mb-6 leading-relaxed">
              We provide special coaching for rural students targeting Vidyagyan.
            </p>
            <ul className="space-y-3 text-sm text-white/90 mb-6">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">âœ"</span>
                <span><strong>Mental Ability Training:</strong> Focused training on logical reasoning which is crucial for the Prelims.</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">âœ"</span>
                <span><strong>UP Board Alignment:</strong> The syllabus is closely aligned with the UP Basic Education Board curriculum.</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">âœ"</span>
                <span><strong>Mains Preparation:</strong> Descriptive writing practice for the Mains examination.</span>
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
