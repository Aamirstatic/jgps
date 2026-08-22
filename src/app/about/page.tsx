import { schoolData } from "@/data/school-data";
import { Metadata } from "next";
import Image from '@/components/LazyImage';
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: `About Us | ${schoolData.name}`,
  description: `Information about ${schoolData.name} - our mission, vision, and values. We provide quality education with qualified staff and modern school building.`,
  keywords: "About Jai Govind Public School, school mission, vision, values, qualified staff, school building, Amroha school",
  alternates: {
    canonical: 'https://jgps.in/about',
  },
  openGraph: {
    title: `About Us | ${schoolData.name}`,
    description: `Information about ${schoolData.name} - our mission, vision, and values.`,
    url: 'https://jgps.in/about',
    siteName: 'Jai Govind Public School',
    images: [{
      url: 'https://jgps.in/images/school-building.avif',
      width: 1200,
      height: 630,
      alt: 'Jai Govind Public School Campus',
    }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `About Us | ${schoolData.name}`,
    description: `Information about ${schoolData.name} - our mission, vision, and values.`,
    images: ['https://jgps.in/images/school-building.avif'],
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Building a Bright Future"
        description="At Jai Govind Public School, we are committed to building a bright future and providing excellence in education for our students."
        breadcrumbs={[{ label: "About Us" }]}
      />
      
      {/* Mission, Vision, Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white to-gray-50/50 p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#035c00] to-yellow-400"></div>
              <h2 className="text-2xl font-bold text-[#035c00] mb-4 flex items-center gap-2">
                <span className="p-1.5 bg-[#035c00]/10 rounded-lg text-lg"></span> What is JGPS's mission?
              </h2>
              <p className="text-gray-600 leading-relaxed">{schoolData.mission}</p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-gray-50/50 p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#035c00] to-yellow-400"></div>
              <h2 className="text-2xl font-bold text-[#035c00] mb-4 flex items-center gap-2">
                <span className="p-1.5 bg-[#035c00]/10 rounded-lg text-lg"></span> What is JGPS's vision?
              </h2>
              <p className="text-gray-600 leading-relaxed">{schoolData.vision}</p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-gray-50/50 p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#035c00] to-yellow-400"></div>
              <h2 className="text-2xl font-bold text-[#035c00] mb-4 flex items-center gap-2">
                <span className="p-1.5 bg-[#035c00]/10 rounded-lg text-lg">💎</span> What are JGPS's core values?
              </h2>
              <ul className="text-gray-600 space-y-3">
                {schoolData.values.map((value, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#035c00] mr-2 text-md font-semibold">✓</span>
                    <span className="text-sm font-medium">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* School Infrastructure */}
      <section className="py-20 bg-gradient-to-br from-[#035c00]/5 to-transparent border-y border-[#035c00]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">What facilities does JGPS campus offer?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Jai Govind Public School features modern facilities designed for academic excellence and child-friendly safety.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl group border-4 border-white">
              {/* School building image */}
              <Image
                src="/images/school-building.avif"
                alt="Jai Govind Public School Building"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#035c00] mb-6 flex items-center gap-2">
                <span></span> Campus Features
              </h3>
              <ul className="space-y-6">
                {schoolData.facilities.slice(0, 5).map((facility, index) => (
                  <li key={index} className="flex items-start bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 h-8 w-8 bg-[#035c00]/10 text-[#035c00] rounded-full flex items-center justify-center mr-4 mt-0.5">
                      <span className="font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">{facility}</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {facility === "Modern Classrooms" && "All classrooms provide an air-cooled, comfortable, and modern environment."}
                        {facility === "Computer Lab" && "Students learn technical skills and computer coding in the focused computer lab."}
                        {facility === "Library" && "The library has over 1,500 books on various subjects, references, and children magazines."}
                        {facility === "Sports Ground" && "Students participate in various athletic and sports activities on the playground."}
                        {facility === "Science Lab" && "Students gain practical knowledge in physics, chemistry, and biology in the science laboratory."}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Management Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">Who manages JGPS?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Jai Govind Public School is led by qualified and experienced professionals committed to raising educational standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-white to-gray-50/50 p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="mb-4 sm:mb-0 sm:mr-6 flex-shrink-0">
                <div className="w-32 h-32 sm:w-36 sm:h-36 relative rounded-xl overflow-hidden shadow-md border-2 border-[#035c00]/10">
                  <Image 
                    src="/images/manager.avif" 
                    alt={schoolData.contacts.manager.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div>
                <span className="inline-block bg-[#035c00]/10 text-[#035c00] text-xs font-semibold px-2.5 py-1 rounded-full mb-2">
                  {schoolData.contacts.manager.role}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{schoolData.contacts.manager.name}</h3>
                <p className="text-sm text-gray-500 mb-3 flex items-center gap-1.5">
                  <span> Phone:</span> <a href={`tel:${schoolData.contacts.manager.phone}`} className="hover:text-[#035c00] transition-colors">{schoolData.contacts.manager.phone}</a>
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  As the school Manager, Mr. Saral Kumar leads the school operations, financial administration, and coordinates infrastructure growth projects.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-white to-gray-50/50 p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="mb-4 sm:mb-0 sm:mr-6 flex-shrink-0">
                <div className="w-32 h-32 sm:w-36 sm:h-36 relative rounded-xl overflow-hidden shadow-md border-2 border-[#035c00]/10">
                  <Image 
                    src="/images/principal.avif" 
                    alt={schoolData.contacts.principal.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div>
                <span className="inline-block bg-[#035c00]/10 text-[#035c00] text-xs font-semibold px-2.5 py-1 rounded-full mb-2">
                  {schoolData.contacts.principal.role}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{schoolData.contacts.principal.name}</h3>
                <p className="text-sm text-gray-500 mb-3 flex items-center gap-1.5">
                  <span> Phone:</span> <a href={`tel:${schoolData.contacts.principal.phone}`} className="hover:text-[#035c00] transition-colors">{schoolData.contacts.principal.phone}</a>
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  As our Principal, Mr. Rifaul Hasan directs the academic planning, CBSE syllabus standards, parent communications, and special competitive entrance prep classes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* HelpDesk Section */}
      <section className="py-16 bg-[#035c00]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">How can you contact JGPS?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our helpdesk is available to assist you with any queries or concerns.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left side: Contact Info */}
              <div className="p-8 bg-[#035c00]">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6 text-white">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Address</h4>
                      <p className="mt-1">{schoolData.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Phone</h4>
                      <p className="mt-1">Manager: {schoolData.contacts.manager.phone}</p>
                      <p className="mt-1">Principal: {schoolData.contacts.principal.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Email</h4>
                      <p className="mt-1">jaigovindschool@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Office Hours</h4>
                      <p className="mt-1">Monday - Saturday: 8:00 AM - 3:00 PM</p>
                      <p className="mt-1">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
                  <div className="flex space-x-4">
                    <Link href={schoolData.social.facebook} className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </Link>
                    <Link href={schoolData.social.instagram} className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Right side: Quick Help */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#035c00] mb-6">Quick Help</h3>
                
                <div className="space-y-6">
                  <div className="bg-[#035c00]/10 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-[#035c00] mb-2">Admission Inquiries</h4>
                    <p className="text-gray-600 mb-4">For admission related queries and application process.</p>
                    <Link 
                      href="/admission" 
                      className="inline-flex items-center text-[#035c00] font-medium hover:underline"
                    >
                      View Admission Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                  
                  <div className="bg-[#035c00]/10 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-[#035c00] mb-2">Contact Us</h4>
                    <p className="text-gray-600 mb-4">For admission queries, visit our campus or call the school office.</p>
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center text-[#035c00] font-medium hover:underline"
                    >
                      Get in Touch
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                  
                  <div className="bg-[#035c00]/10 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-[#035c00] mb-2">Entrance Exam Coaching</h4>
                    <p className="text-gray-600 mb-4">Details about special coaching for AMU, JMI, Sainik School, and more.</p>
                    <Link 
                      href="/academics" 
                      className="inline-flex items-center text-[#035c00] font-medium hover:underline"
                    >
                      Explore Academic Programs
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
                
                <div className="mt-8 p-4 border border-[#035c00]/20 rounded-lg">
                  <h4 className="text-lg font-semibold text-[#035c00] mb-2">FAQ</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-gray-800">What are the school timings?</h5>
                      <p className="text-sm text-gray-600">School hours are from 8:00 AM to 2:00 PM, Monday to Saturday.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800">What is the medium of instruction?</h5>
                      <p className="text-sm text-gray-600">The school follows English as the primary medium of instruction.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800">Is transportation available?</h5>
                      <p className="text-sm text-gray-600">Yes, the school provides transportation services for students from nearby areas.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 