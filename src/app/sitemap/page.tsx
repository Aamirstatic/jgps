import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Sitemap | Jai Govind Public School',
  description: 'Navigate through all pages of the Jai Govind Public School (JGPS) website using our complete HTML sitemap.',
};

export default function SitemapPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Sitemap</h1>
      
      <div className="prose prose-lg mx-auto">
        <p className="mb-8">
          Welcome to the sitemap of the Jai Govind Public School website. This page provides a complete overview of all the available pages on our website for easy navigation and indexing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <section className="bg-[#035c00]/5 p-6 rounded-lg border border-[#035c00]/10">
            <h2 className="text-2xl font-semibold mb-4 border-b border-[#035c00]/20 pb-2 text-[#035c00]">Main Pages</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-600 hover:underline font-medium">Home</Link>
                <p className="text-sm text-gray-600">Our main landing page with featured content and announcements.</p>
              </li>
              <li>
                <Link href="/about" className="text-blue-600 hover:underline font-medium">About Us</Link>
                <p className="text-sm text-gray-600">Learn about our school&apos;s vision, mission, and core values.</p>
              </li>
              <li>
                <Link href="/academics" className="text-blue-600 hover:underline font-medium">Academics</Link>
                <p className="text-sm text-gray-600">Information about our academic programs and teaching approach.</p>
              </li>
              <li>
                <Link href="/coaching" className="text-blue-600 hover:underline font-medium">Entrance Exam Coaching</Link>
                <p className="text-sm text-gray-600">Special preparation batches for AMU, JMI, Sainik School, Military School, and Vidyagyan.</p>
              </li>
              <li>
                <Link href="/admission" className="text-blue-600 hover:underline font-medium">Admissions</Link>
                <p className="text-sm text-gray-600">Details about the admission process, requirements, and fees structure.</p>
              </li>
              <li>
                <Link href="/facilities" className="text-blue-600 hover:underline font-medium">Facilities</Link>
                <p className="text-sm text-gray-600">Explore our campus classrooms, computer lab, library, and sports ground.</p>
              </li>
              <li>
                <Link href="/gallery" className="text-blue-600 hover:underline font-medium">Gallery</Link>
                <p className="text-sm text-gray-600">Photo gallery showcasing school events, activities, and campus life.</p>
              </li>
              <li>
                <Link href="/blog" className="text-blue-600 hover:underline font-medium">Blog</Link>
                <p className="text-sm text-gray-600">Educational articles, school updates, and admission announcements.</p>
              </li>
              <li>
                <Link href="/contact" className="text-blue-600 hover:underline font-medium">Contact Us</Link>
                <p className="text-sm text-gray-600">Get in touch with us for inquiries, feedback, or school location map.</p>
              </li>
            </ul>
          </section>

          <section className="bg-[#035c00]/5 p-6 rounded-lg border border-[#035c00]/10">
            <h2 className="text-2xl font-semibold mb-4 border-b border-[#035c00]/20 pb-2 text-[#035c00]">About Us Section</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/about/history" className="text-blue-600 hover:underline font-medium">School History</Link>
                <p className="text-sm text-gray-600">The journey and key moments of Jai Govind Public School.</p>
              </li>
              <li>
                <Link href="/about/vision-mission" className="text-blue-600 hover:underline font-medium">Vision & Mission</Link>
                <p className="text-sm text-gray-600">Our guiding principles, vision statement, and educational philosophy.</p>
              </li>
              <li>
                <Link href="/about/principal-message" className="text-blue-600 hover:underline font-medium">Principal&apos;s Message</Link>
                <p className="text-sm text-gray-600">A welcome message from our school principal to students and parents.</p>
              </li>
              <li>
                <Link href="/about/staff" className="text-blue-600 hover:underline font-medium">Our Staff</Link>
                <p className="text-sm text-gray-600">Meet our experienced and focused teaching faculty members.</p>
              </li>
              <li>
                <Link href="/about/achievements" className="text-blue-600 hover:underline font-medium">Achievements</Link>
                <p className="text-sm text-gray-600">Recognition, awards, and entrance exam selection achievements.</p>
              </li>
            </ul>
          </section>

          <section className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
            <h2 className="text-2xl font-semibold mb-4 border-b border-indigo-200 pb-2 text-indigo-800">Academics Section</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/academics/curriculum" className="text-blue-600 hover:underline font-medium">Curriculum Overview</Link>
                <p className="text-sm text-gray-600">Details about our academic structure and curriculum guidelines.</p>
              </li>
              <li>
                <Link href="/academics/pre-primary" className="text-blue-600 hover:underline font-medium">Pre-Primary (Nursery to UKG)</Link>
                <p className="text-sm text-gray-600">Foundation and play-based learning programs for early childhood.</p>
              </li>
              <li>
                <Link href="/academics/primary" className="text-blue-600 hover:underline font-medium">Primary School (Classes 1 to 5)</Link>
                <p className="text-sm text-gray-600">Elementary academic curriculum focusing on core language and numerical concepts.</p>
              </li>
              <li>
                <Link href="/academics/middle-school" className="text-blue-600 hover:underline font-medium">Middle School (Classes 6 to 8)</Link>
                <p className="text-sm text-gray-600">Academic structure preparing students for higher studies and competitive exams.</p>
              </li>
              <li>
                <Link href="/academics/co-curricular" className="text-blue-600 hover:underline font-medium">Co-Curricular Activities</Link>
                <p className="text-sm text-gray-600">Sports, arts, quiz clubs, and events beyond traditional academics.</p>
              </li>
            </ul>
          </section>

          <section className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
            <h2 className="text-2xl font-semibold mb-4 border-b border-indigo-200 pb-2 text-indigo-800">Admissions & Coaching</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/admission" className="text-blue-600 hover:underline font-medium">Admissions Page</Link>
                <p className="text-sm text-gray-600">Complete admission procedure and eligibility rules.</p>
              </li>
              <li>
                <Link href="/admission/guidelines" className="text-blue-600 hover:underline font-medium">Admissions Guidelines</Link>
                <p className="text-sm text-gray-600">Official guidelines on required documentation and step-by-step registration instructions.</p>
              </li>
              <li>
                <Link href="/coaching/amu-entrance" className="text-blue-600 hover:underline font-medium">AMU Entrance Coaching</Link>
                <p className="text-sm text-gray-600">Syllabus and test prep details for Aligarh Muslim University school exam.</p>
              </li>
              <li>
                <Link href="/coaching/jmi-entrance" className="text-blue-600 hover:underline font-medium">Jamia (JMI) Entrance Prep</Link>
                <p className="text-sm text-gray-600">Test patterns and EVS/Math syllabus for Jamia Millia Islamia school admissions.</p>
              </li>
              <li>
                <Link href="/coaching/sainik-school" className="text-blue-600 hover:underline font-medium">Sainik School Preparation</Link>
                <p className="text-sm text-gray-600">Coaching details for All India Sainik School Entrance Exam (AISSEE).</p>
              </li>
              <li>
                <Link href="/coaching/military-school" className="text-blue-600 hover:underline font-medium">Rashtriya Military School Prep</Link>
                <p className="text-sm text-gray-600">RMS CET written examination guidelines and qualifying English prep.</p>
              </li>
              <li>
                <Link href="/coaching/vidyagyan-school" className="text-blue-600 hover:underline font-medium">Vidyagyan scholarship coaching</Link>
                <p className="text-sm text-gray-600">Stage 1 & 2 preparation details for Shiv Nadar Foundation scholarship.</p>
              </li>
              <li>
                <Link href="/blog/how-to-prepare-amu-class-6-entrance-exam" className="text-blue-600 hover:underline font-medium">AMU Class 6 Prep Blog</Link>
                <p className="text-sm text-gray-600">Teacher's guide on syllabus split, OMR sheets, and qualifying language hacks.</p>
              </li>
              <li>
                <Link href="/blog/sainik-school-class-6-preparation-tips" className="text-blue-600 hover:underline font-medium">Sainik School Class 6 Prep Blog</Link>
                <p className="text-sm text-gray-600">Detailed roadmap focusing on Math weightages, Intelligence reasoning, and GK lists.</p>
              </li>
              <li>
                <Link href="/blog/vidyagyan-school-admission-eligibility-syllabus" className="text-blue-600 hover:underline font-medium">Vidyagyan Scholarship Prep Blog</Link>
                <p className="text-sm text-gray-600">Expert guidelines on rural eligibility rules, stages of exams, and mental aptitude.</p>
              </li>
              <li>
                <Link href="/blog/jnvst-class-6-admission-notification-2027-28" className="text-blue-600 hover:underline font-medium">JNVST Class 6 2027 Admission Blog</Link>
                <p className="text-sm text-gray-600">Check the official NVS Class 6 registration dates, age rules, rural area reservation quota, and syllabus PDF.</p>
              </li>
              <li>
                <Link href="/blog/sainik-school-admission-aissee-2027-28-guide" className="text-blue-600 hover:underline font-medium">Sainik School AISSEE 2027 Blog</Link>
                <p className="text-sm text-gray-600">Complete preparation guide for cracking AISSEE 2027 with section-wise scoring strategies, age limits, and patterns.</p>
              </li>
            </ul>
          </section>

          <section className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
            <h2 className="text-2xl font-semibold mb-4 border-b border-yellow-200 pb-2 text-yellow-800">Legal Information</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-blue-600 hover:underline font-medium">Privacy Policy</Link>
                <p className="text-sm text-gray-600">Information about how we collect, use, and protect your data.</p>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-blue-600 hover:underline font-medium">Terms & Conditions</Link>
                <p className="text-sm text-gray-600">Rules and regulations governing the use of our school website.</p>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-blue-600 hover:underline font-medium">Cookie Policy</Link>
                <p className="text-sm text-gray-600">Details about how we use cookies to improve user experience.</p>
              </li>
              <li>
                <Link href="/disclaimer" className="text-blue-600 hover:underline font-medium">Disclaimer</Link>
                <p className="text-sm text-gray-600">Legal disclaimers regarding website content and external links.</p>
              </li>
            </ul>
          </section>

          <section className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
            <h2 className="text-2xl font-semibold mb-4 border-b border-yellow-200 pb-2 text-yellow-800">Resources & Support</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/resources" className="text-blue-600 hover:underline font-medium">Educational Resources</Link>
                <p className="text-sm text-gray-600">Study materials, guides, and download documents for parents and teachers.</p>
              </li>
              <li>
                <Link href="/resources/syllabus-and-study-materials" className="text-blue-600 hover:underline font-medium">Syllabus & Mock Resources</Link>
                <p className="text-sm text-gray-600">Download syllabus structures, previous year papers, and math formula sheets.</p>
              </li>
              <li>
                <Link href="/facilities" className="text-blue-600 hover:underline font-medium">School Facilities</Link>
                <p className="text-sm text-gray-600">Classrooms, computer lab, library, sports field, and transport systems.</p>
              </li>
              <li>
                <Link href="/facilities/school-bus-transport" className="text-blue-600 hover:underline font-medium">School Bus Transport</Link>
                <p className="text-sm text-gray-600">Detailed route list, safety standards (GPS, CCTV, panic keys), and contacts.</p>
              </li>
              <li>
                <Link href="/contact" className="text-blue-600 hover:underline font-medium">Contact Office</Link>
                <p className="text-sm text-gray-600">Visit our campus on NH9 Delhi Road, Joya, or call our administration.</p>
              </li>
              <li>
                <Link href="/faq" className="text-blue-600 hover:underline font-medium">Frequently Asked Questions (FAQ)</Link>
                <p className="text-sm text-gray-600">Find answers to key questions about admissions, transport, and coaching.</p>
              </li>
              <li>
                <Link href="/sitemap" className="text-blue-600 hover:underline font-medium">Sitemap</Link>
                <p className="text-sm text-gray-600">This page - a complete directory of all school website pages.</p>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}