import React from 'react';
import Link from 'next/link';
import { schoolData } from "@/data/school-data";
import { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: `Educational Resources | ${schoolData.name}`,
  description: `Explore our collection of educational resources, study materials, and learning guides for students of all ages at ${schoolData.name}.`,
  keywords: "educational resources, study materials, learning guides, student resources, teacher resources, parent resources, school resources",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        title="Resources"
        subtitle="Student & Parent Downloads"
        description="A complete collection of learning materials, guides, and resources for students, teachers, and parents."
        breadcrumbs={[
          { label: "Resources" }
        ]}
      />
      
      {/* Student Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">Student Resources</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Study materials, guides, and tools designed to support student learning and academic success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-150 border-t-4 border-t-[#035c00] hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-12 h-12 bg-[#035c00]/10 rounded-xl flex items-center justify-center mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#035c00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Study Materials</h3>
                <ul className="space-y-2.5 text-gray-600 mb-6 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2 font-bold">•</span>
                    <span>Subject-wise notes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2 font-bold">•</span>
                    <span>Practice worksheets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2 font-bold">•</span>
                    <span>Previous year papers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2 font-bold">•</span>
                    <span>Sample papers</span>
                  </li>
                </ul>
              </div>
              <Link href="/resources/syllabus-and-study-materials" className="inline-flex items-center text-[#035c00] font-bold text-sm hover:underline mt-auto">
                View Study Materials <span className="ml-1">&rarr;</span>
              </Link>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-150 border-t-4 border-t-yellow-500 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Learning Guides</h3>
                <ul className="space-y-2.5 text-gray-600 mb-6 text-sm">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2 font-bold">•</span>
                    <span>Effective study techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2 font-bold">•</span>
                    <span>Exam preparation strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2 font-bold">•</span>
                    <span>Note-taking methods</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2 font-bold">•</span>
                    <span>Time management tips</span>
                  </li>
                </ul>
              </div>
              <Link href="/resources/syllabus-and-study-materials" className="inline-flex items-center text-yellow-600 font-bold text-sm hover:underline mt-auto">
                View Learning Guides <span className="ml-1">&rarr;</span>
              </Link>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-150 border-t-4 border-t-[#035c00] hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-12 h-12 bg-[#035c00]/10 rounded-xl flex items-center justify-center mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#035c00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Subject Resources</h3>
                <ul className="space-y-2.5 text-gray-600 mb-6 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2 font-bold">•</span>
                    <span>Mathematics resources</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2 font-bold">•</span>
                    <span>Science resources</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2 font-bold">•</span>
                    <span>Language resources</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2 font-bold">•</span>
                    <span>Social studies resources</span>
                  </li>
                </ul>
              </div>
              <Link href="/resources/syllabus-and-study-materials" className="inline-flex items-center text-[#035c00] font-bold text-sm hover:underline mt-auto">
                View Subject Resources <span className="ml-1">&rarr;</span>
              </Link>
            </div>
            
            {/* Card 4 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-150 border-t-4 border-t-yellow-500 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Projects & Activities</h3>
                <ul className="space-y-2.5 text-gray-600 mb-6 text-sm">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2 font-bold">•</span>
                    <span>Science projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2 font-bold">•</span>
                    <span>Art and craft activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2 font-bold">•</span>
                    <span>Research project ideas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2 font-bold">•</span>
                    <span>Group activity guides</span>
                  </li>
                </ul>
              </div>
              <Link href="/resources/syllabus-and-study-materials" className="inline-flex items-center text-yellow-600 font-bold text-sm hover:underline mt-auto">
                View Projects & Activities <span className="ml-1">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Teacher Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">Teacher Resources</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Teaching aids, lesson plans, and professional growth materials for educators.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-150 border-t-4 border-t-[#035c00] hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-sm">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Lesson Planning</h3>
                <ul className="space-y-2 text-gray-600 mb-6 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">•</span>
                    <span>Lesson plan templates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">•</span>
                    <span>Activity and project ideas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">•</span>
                    <span>Curriculum mapping guides</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">•</span>
                    <span>Differentiated instruction strategies</span>
                  </li>
                </ul>
              </div>
              <Link href="/contact" className="inline-flex items-center text-[#035c00] font-bold text-sm hover:underline mt-auto">
                View Resources <span className="ml-1">&rarr;</span>
              </Link>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-150 border-t-4 border-t-yellow-500 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-sm">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Assessment Tools</h3>
                <ul className="space-y-2 text-gray-600 mb-6 text-sm">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Formative & summative templates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Rubrics for general assignments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Feedback strategies for improvement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Portfolio assessment guides</span>
                  </li>
                </ul>
              </div>
              <Link href="/contact" className="inline-flex items-center text-yellow-600 font-bold text-sm hover:underline mt-auto">
                View Assessment Tools <span className="ml-1">&rarr;</span>
              </Link>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-150 border-t-4 border-t-[#035c00] hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-sm">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Growth</h3>
                <ul className="space-y-2 text-gray-600 mb-6 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">•</span>
                    <span>Latest research & teaching trends</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">•</span>
                    <span>Reflective teaching logs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">•</span>
                    <span>Peer collaboration guidelines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">•</span>
                    <span>Continuing education webinars</span>
                  </li>
                </ul>
              </div>
              <Link href="/contact" className="inline-flex items-center text-[#035c00] font-bold text-sm hover:underline mt-auto">
                View Growth Guides <span className="ml-1">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Parent Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">Parent Resources</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Guides and information for parents to support their children&apos;s education.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Parent Card 1 */}
            <div className="bg-gradient-to-br from-white to-gray-50/50 p-6 md:p-8 rounded-2xl border border-gray-150 border-t-4 border-t-[#035c00] hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-sm">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Supporting Your child&apos;s Learning</h3>
                <ul className="space-y-3 text-gray-600 mb-6 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2 font-bold">✓</span>
                    <span>Creating a supportive home study environment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2 font-bold">✓</span>
                    <span>Helping with homework without taking over</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2 font-bold">✓</span>
                    <span>Encouraging reading and analytical habits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2 font-bold">✓</span>
                    <span>Supporting different visual/auditory learning styles</span>
                  </li>
                </ul>
              </div>
              <Link href="/contact" className="inline-flex items-center text-[#035c00] font-bold text-sm hover:underline mt-auto">
                Request Parent Guides <span className="ml-1">&rarr;</span>
              </Link>
            </div>
            
            {/* Parent Card 2 */}
            <div className="bg-gradient-to-br from-white to-gray-50/50 p-6 md:p-8 rounded-2xl border border-gray-150 border-t-4 border-t-yellow-500 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-sm">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Educational Articles</h3>
                <div className="space-y-3.5 text-gray-600 mb-6 text-sm">
                  <div>
                    <h4 className="font-bold text-gray-800">The Importance of All-round Education</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Understanding how overall growth impacts scoring capabilities.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Technology and Children: Finding Balance</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Guidelines for managing screen time productively.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Developing Strong Study Habits</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Strategies for helping your child establish self-study routines.</p>
                  </div>
                </div>
              </div>
              <Link href="/contact" className="inline-flex items-center text-yellow-600 font-bold text-sm hover:underline mt-auto">
                Read Articles <span className="ml-1">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Educational Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">Complete Guidelines</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              More learning materials and reference documents for the entire school community.
            </p>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-150 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-5 pb-2 border-b border-gray-100 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#035c00]"></span>
                  Academic Resources
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#035c00] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-bold text-gray-800 text-sm">Academic Calendar</span>
                      <p className="text-xs text-gray-500 mt-0.5">Dates for terminal exams, holidays, and co-curricular meets.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#035c00] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-bold text-gray-800 text-sm">Syllabus Documents</span>
                      <p className="text-xs text-gray-500 mt-0.5">Detailed CBSE-mapped curriculum blueprints for all classes.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#035c00] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-bold text-gray-800 text-sm">Reference Materials</span>
                      <p className="text-xs text-gray-500 mt-0.5">Additional textbook references and conceptual study notes.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-5 pb-2 border-b border-gray-100 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                  School Policies & Guidelines
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#035c00] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-bold text-gray-800 text-sm">School Handbook</span>
                      <p className="text-xs text-gray-500 mt-0.5">Complete guide covering disciplinary rules and standards.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#035c00] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-bold text-gray-800 text-sm">Examination Guidelines</span>
                      <p className="text-xs text-gray-500 mt-0.5">Rules, timings, and OMR assessment protocols for students.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#035c00] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-bold text-gray-800 text-sm">Safety Protocols</span>
                      <p className="text-xs text-gray-500 mt-0.5">Campus entry security checks, CCTV parameters, and transport safety.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Download Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#035c00] to-[#024700] rounded-3xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Download Center</h2>
              <p className="text-base text-white/90 mb-8 max-w-2xl mx-auto">
                Access and download various study guides, calendars, and worksheets directly.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Link href="/resources/syllabus-and-study-materials" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium py-3.5 px-4 rounded-xl text-center transition-all duration-350 shadow-sm hover:shadow-md flex items-center justify-center gap-2 backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Study Materials
                </Link>
                <Link href="/resources/syllabus-and-study-materials" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium py-3.5 px-4 rounded-xl text-center transition-all duration-350 shadow-sm hover:shadow-md flex items-center justify-center gap-2 backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Worksheets
                </Link>
                <Link href="/resources/syllabus-and-study-materials" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium py-3.5 px-4 rounded-xl text-center transition-all duration-350 shadow-sm hover:shadow-md flex items-center justify-center gap-2 backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Sample Papers
                </Link>
                <Link href="/resources/syllabus-and-study-materials" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium py-3.5 px-4 rounded-xl text-center transition-all duration-350 shadow-sm hover:shadow-md flex items-center justify-center gap-2 backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  School Forms
                </Link>
                <Link href="/contact" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium py-3.5 px-4 rounded-xl text-center transition-all duration-350 shadow-sm hover:shadow-md flex items-center justify-center gap-2 backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Parent Guides
                </Link>
                <Link href="/contact" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium py-3.5 px-4 rounded-xl text-center transition-all duration-350 shadow-sm hover:shadow-md flex items-center justify-center gap-2 backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  School Calendar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 