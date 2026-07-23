import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AMU Entrance Coaching | JGPS',
  description: 'AMU Class 6 and 9 entrance exam coaching at JGPS Joya, Amroha.',
  alternates: {
    canonical: 'https://jgps.in/coaching/amu-entrance/',
  },
};

export default function AmuEntranceHubPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-gray-500 flex gap-2">
          <Link href="/" className="hover:text-[#035c00]">Home</Link> / 
          <Link href="/coaching" className="hover:text-[#035c00]">Coaching</Link> / 
          <span className="text-gray-800 font-medium">AMU Entrance</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-[#035c00] to-[#023b00] py-16 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="bg-yellow-400 text-yellow-950 font-bold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider mb-4 inline-block">
            AMU Admissions 2027
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Aligarh Muslim University (AMU) School Admissions 2027
          </h1>
          <p className="text-lg text-white/90 max-w-3xl leading-relaxed mb-8">
            The ultimate resource hub for AMU Class 6 & 9 entrance preparation. Check your eligibility, download the official syllabus, and get previous year solved papers.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/coaching/amu-entrance/eligibility-and-dates" className="bg-white text-[#035c00] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
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
            <Link href="/coaching/amu-entrance/syllabus" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#035c00] hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-green-50 text-[#035c00] rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">ðŸ"š</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#035c00]">AMU Entrance Syllabus</h2>
              <p className="text-sm text-gray-600 mb-4">Get the detailed, subject-wise syllabus for Class 6 and 9 entrance tests (85 Marks Pattern).</p>
              <span className="text-[#035c00] font-medium text-sm">View Syllabus &rarr;</span>
            </Link>

            {/* Papers Card */}
            <Link href="/coaching/amu-entrance/previous-year-papers" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#035c00] hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-green-50 text-[#035c00] rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">ðŸ"„</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#035c00]">Previous Year Papers</h2>
              <p className="text-sm text-gray-600 mb-4">Download official past 3-5 years AMU question papers in PDF format for practice.</p>
              <span className="text-[#035c00] font-medium text-sm">Download Papers &rarr;</span>
            </Link>

            {/* Eligibility Card */}
            <Link href="/coaching/amu-entrance/eligibility-and-dates" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#035c00] hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-green-50 text-[#035c00] rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">ðŸ"…</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#035c00]">Eligibility & Important Dates</h2>
              <p className="text-sm text-gray-600 mb-4">Check the age limits (10-12 years for Class 6), application windows, and exam dates for 2027.</p>
              <span className="text-[#035c00] font-medium text-sm">View Dates &rarr;</span>
            </Link>

            {/* Blog Post Feature */}
            <Link href="/blog/feynman-technique-amu-class-6-math" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#035c00] hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-yellow-50 text-yellow-600 rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">ðŸ'¡</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#035c00]">How to Prepare for AMU Math</h2>
              <p className="text-sm text-gray-600 mb-4">Read our expert strategy guide on cracking the AMU Mathematics section using the Feynman technique.</p>
              <span className="text-[#035c00] font-medium text-sm">Read Article &rarr;</span>
            </Link>
          </div>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-4">Why Prepare for AMU School Admissions?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Aligarh Muslim University (AMU) runs some of the most top schools in North India, including STS School (Minto Circle), AMU City School, and AMU Girls School. Studying at AMU schools provides students with exceptional academic foundations, world-class extracurricular exposure, and a direct internal quota path for future university admissions (engineering, medicine, law, commerce, etc.).
            </p>
            <p className="text-gray-600 leading-relaxed">
              Because of these advantages, lakhs of students apply every year, making the selection ratio highly competitive. JGPS provides dedicated AMU coaching to help students bridge the gap between their regular school curriculum and the specific requirements of the AMU test pattern.
            </p>
          </section>
        </div>

        {/* Sidebar Info & Registration */}
        <div className="space-y-8">
          <div className="bg-[#035c00] text-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-2">AMU Coaching Batch 2027</h3>
            <p className="text-xs text-white/90 mb-6 leading-relaxed">
              We conduct a free diagnostic test to evaluate your child's baseline score. Join our special AMU preparation batch in Joya.
            </p>
            <ul className="space-y-3 text-sm text-white/90 mb-6">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">âœ"</span>
                <span><strong>Special Urdu Classes:</strong> Crucial for the 40% qualifying criteria.</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">âœ"</span>
                <span><strong>OMR Training:</strong> Weekly mock tests.</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">âœ"</span>
                <span><strong>Interview Prep:</strong> Built-in training for the 15-mark interaction.</span>
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
