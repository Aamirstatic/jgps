import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'JMI Entrance Coaching | JGPS',
  description: 'Jamia Millia Islamia Class 6 entrance coaching at JGPS Joya, Amroha.',
  alternates: {
    canonical: 'https://jgps.in/coaching/jmi-entrance/',
  },
};

export default function JmiEntranceHubPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-gray-500 flex gap-2">
          <Link href="/" className="hover:text-[#035c00]">Home</Link> / 
          <Link href="/coaching" className="hover:text-[#035c00]">Coaching</Link> / 
          <span className="text-gray-800 font-medium">JMI Entrance</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-[#035c00] to-[#023b00] py-16 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="bg-yellow-400 text-yellow-950 font-bold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider mb-4 inline-block">
            JMI Admissions 2027
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Jamia Millia Islamia (JMI) School Admissions 2027
          </h1>
          <p className="text-lg text-white/90 max-w-3xl leading-relaxed mb-8">
            The ultimate resource hub for Jamia Millia Islamia Class 6 & 9 entrance preparation. Check eligibility, download the official syllabus, and access previous year papers.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/coaching/jmi-entrance/eligibility-and-dates" className="bg-white text-[#035c00] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
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
            <Link href="/coaching/jmi-entrance/syllabus" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#035c00] hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-green-50 text-[#035c00] rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">ðŸ"š</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#035c00]">JMI Entrance Syllabus</h2>
              <p className="text-sm text-gray-600 mb-4">Get the detailed, subject-wise syllabus (EVS, Math, English) for the 100 marks objective exam.</p>
              <span className="text-[#035c00] font-medium text-sm">View Syllabus &rarr;</span>
            </Link>

            {/* Papers Card */}
            <Link href="/coaching/jmi-entrance/previous-year-papers" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#035c00] hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-green-50 text-[#035c00] rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">ðŸ"„</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#035c00]">Previous Year Papers</h2>
              <p className="text-sm text-gray-600 mb-4">Download official Jamia 6th and 9th class past question papers in PDF format for practice.</p>
              <span className="text-[#035c00] font-medium text-sm">Download Papers &rarr;</span>
            </Link>

            {/* Eligibility Card */}
            <Link href="/coaching/jmi-entrance/eligibility-and-dates" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#035c00] hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-green-50 text-[#035c00] rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">ðŸ"…</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#035c00]">Eligibility & Important Dates</h2>
              <p className="text-sm text-gray-600 mb-4">Check age limits, form release dates, and academic requirements for JMI 2027 admissions.</p>
              <span className="text-[#035c00] font-medium text-sm">View Dates &rarr;</span>
            </Link>

            {/* General Info Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 group">
              <div className="w-12 h-12 bg-yellow-50 text-yellow-600 rounded-xl flex items-center justify-center text-xl mb-4">ðŸ†</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">No Interview required</h2>
              <p className="text-sm text-gray-600 mb-4">Unlike AMU, JMI doesn&apos;t have a personal interview round. Selection is determined 100% by the written exam score.</p>
            </div>
          </div>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-4">Why Choose JMI Schools?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Jamia Millia Islamia (JMI) is a top central university that runs highly-rated schools in New Delhi, including Jamia Senior Secondary School, Syed Abid Husain Senior Secondary School, and Jamia Girls Senior Secondary School. These institutions offer quality education at a nominal fee, excellent infrastructure, sports training, and an advantageous internal quota for Jamia's college admissions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              JGPS provides focused, result-oriented coaching programs in Joya, Amroha, to help students crack the JMI CET for Class 6 & 9 by targeting the EVS and Math sections heavily.
            </p>
          </section>
        </div>

        {/* Sidebar Info & Registration */}
        <div className="space-y-8">
          <div className="bg-[#035c00] text-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-2">JMI Coaching Batch 2027</h3>
            <p className="text-xs text-white/90 mb-6 leading-relaxed">
              We conduct a free diagnostic test to evaluate your child's baseline score. Join our special JMI preparation batch in Joya.
            </p>
            <ul className="space-y-3 text-sm text-white/90 mb-6">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">âœ"</span>
                <span><strong>special EVS Classes:</strong> As JMI weights EVS at 50% for Class 6, we use rich visual charts to make sure deep understanding.</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">âœ"</span>
                <span><strong>Speed Tests:</strong> Bi-weekly 100-mark OMR tests to train speed and accuracy.</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">âœ"</span>
                <span><strong>Solved Papers:</strong> Detailed solving sessions for the last 8 years JMI CET papers.</span>
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
