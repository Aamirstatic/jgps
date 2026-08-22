import { Metadata } from 'next';
import Link from 'next/link';
import Image from '@/components/LazyImage';

export const metadata: Metadata = {
  title: 'Vidyagyan Question Paper Class 6 PDF | Model Papers',
  description: 'Download the official vidyagyan question paper class 6 pdf. Practice with the vidyagyan school entrance exam model paper and previous year papers.',
  keywords: 'vidyagyan school entrance exam model paper, vidyagyan question paper class 6 pdf, vidyagyan previous year paper',
};

export default function VidyagyanPapersPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-gray-500 flex gap-2">
          <Link href="/" className="hover:text-[#035c00]">Home</Link> / 
          <Link href="/coaching" className="hover:text-[#035c00]">Coaching</Link> / 
          <Link href="/coaching/vidyagyan-school" className="hover:text-[#035c00]">Vidyagyan Entrance</Link> / 
          <span className="text-gray-800 font-medium">Previous Papers</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <Image 
          src="/images/coaching/vidyagyan_cluster_hero.avif" 
          alt="Vidyagyan Previous Year Papers" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
            <span className="bg-yellow-400 text-yellow-950 font-bold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider mb-4 inline-block">
              Mock Tests & Papers
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
              Vidyagyan Previous Year Papers
            </h1>
            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
              Practicing under timed conditions is crucial for the Prelims. Download the official <strong>vidyagyan question paper class 6 pdf</strong> here.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-12">
          
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-6">Vidyagyan Paper Downloads</h2>
            <p className="text-gray-600 mb-8">
              Because the exam is conducted by a private foundation (Shiv Nadar Foundation), finding authentic papers can be challenging. We have compiled a <strong>vidyagyan previous year paper</strong> archive and a highly accurate <strong>vidyagyan school entrance exam model paper</strong> collection below.
            </p>

            <div className="space-y-4">
              {/* Paper Item */}
              <div className="flex flex-col sm:flex-row items-center justify-between p-5 border border-gray-200 rounded-xl hover:border-[#035c00] transition-colors">
                <div className="flex items-center gap-4 mb-4 sm:mb-0 w-full">
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center font-bold">PDF</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Vidyagyan Class 6 Prelims Paper 2026</h3>
                    <p className="text-sm text-gray-500">Memory Based Question Paper + Answer Key (Hindi Medium)</p>
                  </div>
                </div>
                <button className="w-full sm:w-auto bg-[#035c00] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#024700] transition-colors whitespace-nowrap">
                  Download
                </button>
              </div>

              {/* Paper Item */}
              <div className="flex flex-col sm:flex-row items-center justify-between p-5 border border-gray-200 rounded-xl hover:border-[#035c00] transition-colors">
                <div className="flex items-center gap-4 mb-4 sm:mb-0 w-full">
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center font-bold">PDF</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Vidyagyan Class 6 Prelims Paper 2025</h3>
                    <p className="text-sm text-gray-500">Memory Based Question Paper + Answer Key (Hindi Medium)</p>
                  </div>
                </div>
                <button className="w-full sm:w-auto bg-[#035c00] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#024700] transition-colors whitespace-nowrap">
                  Download
                </button>
              </div>

              {/* Paper Item */}
              <div className="flex flex-col sm:flex-row items-center justify-between p-5 border border-gray-200 rounded-xl hover:border-[#035c00] transition-colors">
                <div className="flex items-center gap-4 mb-4 sm:mb-0 w-full">
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center font-bold">PDF</div>
                  <div>
                    <h3 className="font-bold text-gray-900">JGPS Vidyagyan Model Paper Set 1</h3>
                    <p className="text-sm text-gray-500"><strong>vidyagyan school entrance exam model paper</strong> created by JGPS Experts</p>
                  </div>
                </div>
                <button className="w-full sm:w-auto bg-[#035c00] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#024700] transition-colors whitespace-nowrap">
                  Download
                </button>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-4">How to Use These Papers for Best Results</h2>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <ol className="list-decimal pl-5 space-y-4 text-gray-700">
                <li>
                  <strong>Language Barrier:</strong> The Vidyagyan exam is entirely in Hindi. Make sure your child is practicing reading and understanding questions in pure Hindi.
                </li>
                <li>
                  <strong>Time Management:</strong> The OMR-based test can be overwhelming for a rural 5th grader. Practicing on printed OMR sheets is non-negotiable.
                </li>
                <li>
                  <strong>Focus on Mental Ability:</strong> Mental ability questions often confuse students. Repeated practice using our Model Papers is the key.
                </li>
              </ol>
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
                <Link href="/coaching/vidyagyan-school/eligibility-and-dates" className="text-white hover:text-yellow-400 font-medium flex items-center justify-between">
                  <span>Eligibility & Dates</span>
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
            <h3 className="text-lg font-bold text-gray-900 mb-2">Join Our Test Series</h3>
            <p className="text-sm text-gray-700 mb-4">
              JGPS Joya offers a tough offline test series mimicking the exact Vidyagyan environment. We evaluate OMR sheets digitally to give instant feedback.
            </p>
            <Link
              href="/contact"
              className="bg-[#035c00] text-white font-bold py-3 px-4 rounded-lg text-center block text-sm transition-all shadow-md hover:bg-[#024700]"
            >
              Contact For Mock Tests
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
