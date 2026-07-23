import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "School Admission in Amroha Joya 2027-28 | Jai Govind Public School",
  description: "Get details on admission process, eligibility criteria, and required documents for nursery to class 8 admission at Jai Govind Public School Joya.",
  keywords: "school admission Amroha 2026, nursery admission Joya, JGPS admission open, school admission process Joya UP, admissions form",
  alternates: {
    canonical: 'https://jgps.in/admission',
  },
  openGraph: {
    title: 'School Admission 2027-28 | Jai Govind Public School',
    description: 'Get details on admission process, eligibility criteria, and required documents.',
    url: 'https://jgps.in/admission',
    siteName: 'Jai Govind Public School',
    images: [{ url: 'https://jgps.in/images/school-building.avif', width: 1200, height: 630, alt: 'School Admission' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'School Admission | JGPS', description: 'Get details on admission process.', images: ['https://jgps.in/images/school-building.avif'] },
};

export default function AdmissionPage() {
  return (
    <>
      <PageHero
        title="Admission"
        subtitle="Join Our Learning Community"
        description="Join our school community and embark on a journey of quality education and all-round growth."
        breadcrumbs={[
          { label: "Admission" }
        ]}
      />
      
      {/* Admission Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">What is the admission process at JGPS?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our admission process is designed to be simple.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-white to-gray-50/50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row items-start gap-4 group">
                <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-[#035c00]/10 text-[#035c00] flex items-center justify-center font-bold text-md border border-[#035c00]/10 group-hover:bg-[#035c00] group-hover:text-white transition-colors duration-300">
                  01
                </div>
                <div className="flex-grow">
                  <span className="text-[10px] uppercase font-bold text-yellow-600 tracking-wider">Phase 1</span>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 mt-0.5">Application Submission</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Fill out the application form and submit it along with the required documents. The application form can be collected from the school office or downloaded from our website.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-gray-50/50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row items-start gap-4 group">
                <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-[#035c00]/10 text-[#035c00] flex items-center justify-center font-bold text-md border border-[#035c00]/10 group-hover:bg-[#035c00] group-hover:text-white transition-colors duration-300">
                  02
                </div>
                <div className="flex-grow">
                  <span className="text-[10px] uppercase font-bold text-yellow-600 tracking-wider">Phase 2</span>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 mt-0.5">Entrance Assessment</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Students seeking admission to Class 1 and above will be required to take an entrance assessment to evaluate their current academic level. For nursery admissions, an informal interaction with the child and parents is conducted.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-gray-50/50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row items-start gap-4 group">
                <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-[#035c00]/10 text-[#035c00] flex items-center justify-center font-bold text-md border border-[#035c00]/10 group-hover:bg-[#035c00] group-hover:text-white transition-colors duration-300">
                  03
                </div>
                <div className="flex-grow">
                  <span className="text-[10px] uppercase font-bold text-yellow-600 tracking-wider">Phase 3</span>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 mt-0.5">Parent Interview</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A brief interview with parents/guardians will be conducted to understand the child&apos;s background, interests, and needs.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-gray-50/50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row items-start gap-4 group">
                <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-[#035c00]/10 text-[#035c00] flex items-center justify-center font-bold text-md border border-[#035c00]/10 group-hover:bg-[#035c00] group-hover:text-white transition-colors duration-300">
                  04
                </div>
                <div className="flex-grow">
                  <span className="text-[10px] uppercase font-bold text-yellow-600 tracking-wider">Phase 4</span>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 mt-0.5">Admission Decision</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Based on the application, assessment results, and interview, the admission decision will be communicated to the parents/guardians.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-gray-50/50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row items-start gap-4 group">
                <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-[#035c00]/10 text-[#035c00] flex items-center justify-center font-bold text-md border border-[#035c00]/10 group-hover:bg-[#035c00] group-hover:text-white transition-colors duration-300">
                  05
                </div>
                <div className="flex-grow">
                  <span className="text-[10px] uppercase font-bold text-yellow-600 tracking-wider">Phase 5</span>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 mt-0.5">Fee Payment</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Upon acceptance, parents/guardians are required to pay the admission fee and first term fee to confirm the admission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Eligibility Criteria Section */}
      <section className="py-16 bg-[#035c00]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">What is the eligibility criteria for each class?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Age requirements and eligibility for different grade levels.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#035c00]">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Class
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Age Requirement
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      More Criteria
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Nursery
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      3+ years as of April 1st
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Basic readiness for school environment
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      LKG
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      4+ years as of April 1st
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Basic readiness for school environment
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      UKG
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      5+ years as of April 1st
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Basic readiness for school environment
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Class 1
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      6+ years as of April 1st
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Entrance assessment
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Classes 2-8
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Age appropriate for the class
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Entrance assessment and report card from previous school
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-gray-50 px-6 py-4">
              <p className="text-sm text-gray-700">
                <span className="font-medium text-[#035c00]">Note:</span> Age relaxation may be considered in exceptional cases at the discretion of the school management.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Required Documents Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">What documents are required for admission?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Please make sure you have the following documents ready for the admission process:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#035c00]/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#035c00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#035c00] mb-2">Identity Documents</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">✓</span>
                  <span className="text-gray-600">Birth Certificate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">✓</span>
                  <span className="text-gray-600">Aadhar Card</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">✓</span>
                  <span className="text-gray-600">Passport Size Photographs (4)</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#035c00]/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#035c00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#035c00] mb-2">Academic Documents</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">✓</span>
                  <span className="text-gray-600">Report Card from Previous School</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">✓</span>
                  <span className="text-gray-600">Transfer Certificate (for students from Class 1 and above)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">✓</span>
                  <span className="text-gray-600">Character Certificate (if applicable)</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#035c00]/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#035c00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#035c00] mb-2">More Documents</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">✓</span>
                      <span className="text-gray-600">Boarding Proof</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">✓</span>
                  <span className="text-gray-600">Parents&apos; ID Proof</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">✓</span>
                  <span className="text-gray-600">Medical Certificate (if applicable)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Admission FAQs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">What do parents ask about admission?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Common questions and answers about the admission process.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-[#035c00]/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#035c00] mb-2">When does the admission process start?</h3>
                <p className="text-gray-600">
                  The admission process for the new academic session typically begins in January and continues until all seats are filled. We recommend applying early as seats are limited.
                </p>
              </div>
              
              <div className="bg-[#035c00]/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#035c00] mb-2">Is there an entrance test for all classes?</h3>
                <p className="text-gray-600">
                  Yes, there is an entrance assessment for students seeking admission to Class 1 and above. For Nursery to UKG, we conduct an informal interaction with the child and parents to assess school readiness.
                </p>
              </div>
              
              <div className="bg-[#035c00]/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#035c00] mb-2">How can I prepare my child for the entrance assessment?</h3>
                <p className="text-gray-600">
                  The entrance assessment is designed to evaluate the child&apos;s current knowledge level as per their age group. it&apos;s best to make sure they are familiar with the concepts taught in their previous class. No special preparation is required.
                </p>
              </div>
              
              <div className="bg-[#035c00]/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#035c00] mb-2">Is there a waitlist for admissions?</h3>
                <p className="text-gray-600">
                  Yes, when all seats for a particular class are filled, we maintain a waitlist. If a seat becomes available, we contact the parents of waitlisted students in the order of their application.
                </p>
              </div>
              
              <div className="bg-[#035c00]/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#035c00] mb-2">Do you provide any scholarships?</h3>
                <p className="text-gray-600">
                  Yes, we offer merit-based scholarships to deserving students based on their academic performance and financial need. Please contact the admission office for more information about our scholarship program.
                </p>
              </div>
              
              <div className="bg-[#035c00]/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#035c00] mb-2">Can I transfer my child mid-session?</h3>
                <p className="text-gray-600">
                  Yes, mid-session transfers are accepted subject to seat availability. Additional documentation such as the Transfer Certificate from the previous school and recent progress report will be required.
                </p>
              </div>
              
              <div className="bg-[#035c00]/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#035c00] mb-2">Is transport facility available for all areas?</h3>
                <p className="text-gray-600">
                  Our school buses cover most areas within a 15 km radius of the school. Please check with the admission office for specific routes and availability in your area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Apply Online Section */}
      <section className="py-16 bg-[#035c00]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">How to apply online?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Fill out the online application form below to start the admission process for your child.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="student-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Student&apos;s Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="student-name"
                    name="student-name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#035c00] focus:border-[#035c00]"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#035c00] focus:border-[#035c00]"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-1">
                    Applying for Class <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="grade"
                    name="grade"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#035c00] focus:border-[#035c00]"
                    required
                  >
                    <option value="">Select Class</option>
                    <option value="Nursery">Nursery</option>
                    <option value="LKG">LKG</option>
                    <option value="UKG">UKG</option>
                    <option value="1">Class 1</option>
                    <option value="2">Class 2</option>
                    <option value="3">Class 3</option>
                    <option value="4">Class 4</option>
                    <option value="5">Class 5</option>
                    <option value="6">Class 6</option>
                    <option value="7">Class 7</option>
                    <option value="8">Class 8</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#035c00] focus:border-[#035c00]"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="parent-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Parent/Guardian Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="parent-name"
                    name="parent-name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#035c00] focus:border-[#035c00]"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="relationship" className="block text-sm font-medium text-gray-700 mb-1">
                    Relationship to Student <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="relationship"
                    name="relationship"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#035c00] focus:border-[#035c00]"
                    required
                  >
                    <option value="">Select Relationship</option>
                    <option value="Father">Father</option>
                    <option value="Mother">Mother</option>
                    <option value="Guardian">Legal Guardian</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#035c00] focus:border-[#035c00]"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#035c00] focus:border-[#035c00]"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#035c00] focus:border-[#035c00]"
                  required
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="previous-school" className="block text-sm font-medium text-gray-700 mb-1">
                  Previous School (if applicable)
                </label>
                <input
                  type="text"
                  id="previous-school"
                  name="previous-school"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#035c00] focus:border-[#035c00]"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#035c00] focus:border-[#035c00]"
                  placeholder="Any additional information you would like to share..."
                ></textarea>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    className="h-4 w-4 text-[#035c00] focus:ring-[#035c00] border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="text-gray-700">
                    I agree to the <Link href="/privacy-policy" className="text-[#035c00] hover:underline">Privacy Policy</Link> and <Link href="/terms-and-conditions" className="text-[#035c00] hover:underline">Terms & Conditions</Link>
                  </label>
                </div>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-block bg-[#035c00] text-white py-3 px-8 rounded-md font-semibold text-lg hover:bg-[#024700] transition-colors"
                >
                  Submit Application
                </button>
              </div>
              
              <p className="text-sm text-gray-500 text-center mt-4">
                * Required fields. After submission, our admission team will contact you within 2-3 working days.
              </p>
            </form>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-[#035c00]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#035c00] rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-12 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">How to start your child's journey at JGPS?</h2>
              <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
                Start your child&apos;s educational journey with us. Contact our admission office for more information or to schedule a visit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-block bg-white text-[#035c00] py-3 px-8 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors">
                  Contact Us
                </Link>
                <Link 
                  href="/documents/application-form.pdf" 
                  className="inline-block border border-white text-white py-3 px-8 rounded-md font-semibold text-lg hover:bg-white/10 transition-colors"
                >
                  Download Application Form
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Schema for AI Optimization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "When does the admission process start at JGPS?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The admission process for the new academic session typically begins in January and continues until all seats are filled. We recommend applying early as seats are limited."
              }
            },
            {
              "@type": "Question",
              "name": "Is there an entrance test for all classes?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, there is an entrance assessment for students seeking admission to Class 1 and above. For Nursery to UKG, we conduct an informal interaction with the child and parents to assess school readiness."
              }
            },
            {
              "@type": "Question",
              "name": "How can I prepare my child for the entrance assessment?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The entrance assessment is designed to evaluate the child's current knowledge level as per their age group. It's best to make sure they are familiar with the concepts taught in their previous class. No special preparation is required."
              }
            },
            {
              "@type": "Question",
              "name": "Is there a waitlist for admissions?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, when all seats for a particular class are filled, we maintain a waitlist. If a seat becomes available, we contact the parents of waitlisted students in the order of their application."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide any scholarships?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer merit-based scholarships to deserving students based on their academic performance and financial need. Please contact the admission office for more information about our scholarship program."
              }
            }
          ]
        }) }}
      />
    </>
  );
} 