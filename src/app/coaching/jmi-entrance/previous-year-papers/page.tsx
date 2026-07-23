import { Metadata } from 'next';
import Link from 'next/link';
import Image from '@/components/LazyImage';

export const metadata: Metadata = {
  title: 'Jamia 6th Class Last Year Paper PDF | JMI Entrance Previous Papers',
  description: 'Download the jamia 6th class last year paper and jmi class 9 entrance question paper pdf. Get official jamia entrance previous papers with answer keys.',
  keywords: 'jamia 6th class last year paper, jmi class 9 entrance question paper pdf, jamia entrance previous papers',
};

export default function JmiPapersPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-gray-500 flex gap-2">
          <Link href="/" className="hover:text-[#035c00]">Home</Link> / 
          <Link href="/coaching" className="hover:text-[#035c00]">Coaching</Link> / 
          <Link href="/coaching/jmi-entrance" className="hover:text-[#035c00]">JMI Entrance</Link> / 
          <span className="text-gray-800 font-medium">Previous Papers</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <Image 
          src="/images/coaching/jmi_cluster_hero.avif" 
          alt="Jamia Entrance Previous Year Papers" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
            <span className="bg-yellow-400 text-yellow-950 font-bold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider mb-4 inline-block">
              Mock Tests & Papers
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
              Jamia Entrance Previous Papers
            </h1>
            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
              The best way to prepare for JMI is by solving past papers. Download the <strong>jamia 6th class last year paper</strong> and class 9 PDFs here.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-12">
          
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-6">JMI 6th & 9th Class Question Paper Downloads</h2>
            <p className="text-gray-600 mb-8">
              Practicing with real exam papers helps your child understand the exact difficulty level, time management, and the unique OMR sheet format used by Jamia. Here is our exclusive collection of <strong>jmi class 9 entrance question paper pdf</strong> and class 6 papers.
            </p>

            <div className="space-y-4">
              {/* Paper Item */}
              <div className="flex flex-col sm:flex-row items-center justify-between p-5 border border-gray-200 rounded-xl hover:border-[#035c00] transition-colors">
                <div className="flex items-center gap-4 mb-4 sm:mb-0 w-full">
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center font-bold">PDF</div>
                  <div>
                    <h3 className="font-bold text-gray-900">JMI 6th Class Question Paper 2026</h3>
                    <p className="text-sm text-gray-500">Official Question Paper + Answer Key</p>
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
                    <h3 className="font-bold text-gray-900">JMI 6th Class Question Paper 2025</h3>
                    <p className="text-sm text-gray-500">Official Question Paper + Answer Key</p>
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
                    <h3 className="font-bold text-gray-900">JMI 9th Class Question Paper 2026</h3>
                    <p className="text-sm text-gray-500">Official Question Paper</p>
                  </div>
                </div>
                <button className="w-full sm:w-auto bg-[#035c00] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#024700] transition-colors whitespace-nowrap">
                  Download
                </button>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-4">Exam Pattern at a Glance</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="p-3 font-semibold text-gray-700 border-r border-gray-200">Feature</th>
                    <th className="p-3 font-semibold text-gray-700">Details (Class 6)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-semibold text-gray-800 border-r border-gray-200">Total Marks</td>
                    <td className="p-3 text-gray-600">100 Marks (Written)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50/50">
                    <td className="p-3 font-semibold text-gray-800 border-r border-gray-200">Sections</td>
                    <td className="p-3 text-gray-600">EVS (50m), Maths (30m), English (20m)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-semibold text-gray-800 border-r border-gray-200">Duration</td>
                    <td className="p-3 text-gray-600">2 Hours</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50/50">
                    <td className="p-3 font-semibold text-gray-800 border-r border-gray-200">Question Type</td>
                    <td className="p-3 text-gray-600">Multiple Choice Questions (MCQ) on OMR Sheet</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-semibold text-red-600 border-r border-gray-200">Negative Marking</td>
                    <td className="p-3 text-red-600 font-medium">NO Negative Marking for Class 6 & 9</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50/50">
                    <td className="p-3 font-semibold text-blue-600 border-r border-gray-200">Interview Round</td>
                    <td className="p-3 text-blue-600 font-medium">No Interview. Admission is strictly based on the 100-mark written test.</td>
                  </tr>
                </tbody>
              </table>
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
                <Link href="/coaching/jmi-entrance/eligibility-and-dates" className="text-white hover:text-yellow-400 font-medium flex items-center justify-between">
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
            <h3 className="text-lg font-bold text-gray-900 mb-2">Practice Makes Perfect</h3>
            <p className="text-sm text-gray-700 mb-4">
              JGPS conducts bi-weekly 100-mark OMR tests directly modeled after these Jamia previous year papers. Join our coaching batch to maximize your score.
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
