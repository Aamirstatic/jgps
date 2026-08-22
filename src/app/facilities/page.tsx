import { Metadata } from "next";
import Image from '@/components/LazyImage';
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "School Facilities & Infrastructure | Jai Govind Public School",
  description: "Discover campus facilities at Jai Govind Public School Joya. Air-cooled classrooms, modern computer laboratory, science lab, sports playground, library, and transport services.",
  keywords: "school facilities Amroha, school computer lab Joya, science laboratory, school library Joya, playground, school transport routes Amroha, school playground UP",
  alternates: {
    canonical: 'https://jgps.in/facilities',
  },
  openGraph: {
    title: 'School Facilities & Infrastructure | Jai Govind Public School',
    description: 'Discover campus facilities including labs, library, and sports areas.',
    url: 'https://jgps.in/facilities',
    siteName: 'Jai Govind Public School',
    images: [{ url: 'https://jgps.in/images/school-building.avif', width: 1200, height: 630, alt: 'School Facilities' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'School Facilities | JGPS', description: 'Discover campus facilities.', images: ['https://jgps.in/images/school-building.avif'] },
};

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        title="Our Facilities"
        subtitle="World-Class Infrastructure"
        description="We provide modern facilities to make sure a good environment for learning and overall growth."
        breadcrumbs={[
          { label: "Facilities" }
        ]}
      />
      
      {/* Infrastructure Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#035c00] mb-6">What Modern Infrastructure Does JGPS Offer?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our school campus is designed to provide a safe, comfortable, and stimulating environment for students. The buildings are spacious, well-ventilated, and equipped with modern amenities.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2 text-xl">✓</span>
                  <span className="text-gray-600">Spacious and well-ventilated classrooms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2 text-xl">✓</span>
                  <span className="text-gray-600">Safe and secure campus with CCTV surveillance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2 text-xl">✓</span>
                  <span className="text-gray-600">Clean drinking water facility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2 text-xl">✓</span>
                  <span className="text-gray-600">Hygienic washrooms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2 text-xl">✓</span>
                  <span className="text-gray-600">Generator backup for uninterrupted power supply</span>
                </li>
              </ul>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/1.JPG" 
                alt="School Building" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Academic Facilities */}
      <section className="py-16 bg-[#035c00]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">What Academic Facilities Does JGPS Offer?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide various academic facilities to enhance the learning experience of our students.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Smart Classrooms */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col">
              <div className="w-12 h-12 bg-[#035c00]/10 rounded-xl flex items-center justify-center mb-4 border border-[#035c00]/15 group-hover:bg-[#035c00] group-hover:text-white transition-all duration-300 text-[#035c00]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Smart Classrooms</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Our classrooms are equipped with digital smart boards to make learning interactive and engaging. Teachers use multimedia resources to explain complex concepts easily.
              </p>
              <div className="relative h-44 rounded-xl overflow-hidden mt-auto border border-gray-50 shadow-inner">
                <Image 
                  src="/images/students-coaching-center.avif" 
                  alt="Smart Classroom" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            
            {/* Computer Lab */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col">
              <div className="w-12 h-12 bg-[#035c00]/10 rounded-xl flex items-center justify-center mb-4 border border-[#035c00]/15 group-hover:bg-[#035c00] group-hover:text-white transition-all duration-300 text-[#035c00]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Computer Lab</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Our computer lab is equipped with the latest hardware and software to familiarize students with technology. Each student gets individual access to a computer during the class.
              </p>
              <div className="relative h-44 rounded-xl overflow-hidden mt-auto border border-gray-50 shadow-inner">
                <Image 
                  src="/images/student-using-laptop-ai.avif" 
                  alt="Computer Lab" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            
            {/* Science Lab */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col">
              <div className="w-12 h-12 bg-[#035c00]/10 rounded-xl flex items-center justify-center mb-4 border border-[#035c00]/15 group-hover:bg-[#035c00] group-hover:text-white transition-all duration-300 text-[#035c00]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Science Lab</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Our well-equipped science lab allows students to perform experiments and understand scientific concepts through practical demonstrations and hands-on activities.
              </p>
              <div className="relative h-44 rounded-xl overflow-hidden mt-auto border border-gray-50 shadow-inner">
                <Image 
                  src="/images/science-students-laboratory.avif" 
                  alt="Science Lab" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            
            {/* Library */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col">
              <div className="w-12 h-12 bg-[#035c00]/10 rounded-xl flex items-center justify-center mb-4 border border-[#035c00]/15 group-hover:bg-[#035c00] group-hover:text-white transition-all duration-300 text-[#035c00]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Library</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Our library has a rich collection of books covering various subjects, fiction, non-fiction, reference books, and magazines to promote reading habits among students.
              </p>
              <div className="relative h-44 rounded-xl overflow-hidden mt-auto border border-gray-50 shadow-inner">
                <Image 
                  src="/images/indian-students-studying-classroom.avif" 
                  alt="Library" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            
            {/* Math Lab */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col">
              <div className="w-12 h-12 bg-[#035c00]/10 rounded-xl flex items-center justify-center mb-4 border border-[#035c00]/15 group-hover:bg-[#035c00] group-hover:text-white transition-all duration-300 text-[#035c00]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Math Lab</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Our mathematics lab is equipped with various models and teaching aids to make learning mathematics interesting and easy to understand through visual representations.
              </p>
              <div className="relative h-44 rounded-xl overflow-hidden mt-auto border border-gray-50 shadow-inner">
                <Image 
                  src="/images/teacher-teaching-classroom.avif" 
                  alt="Math Lab" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            
            {/* Activity Room */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col">
              <div className="w-12 h-12 bg-[#035c00]/10 rounded-xl flex items-center justify-center mb-4 border border-[#035c00]/15 group-hover:bg-[#035c00] group-hover:text-white transition-all duration-300 text-[#035c00]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Activity Room</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Our activity room is designed for various extra activities like music, dance, art, and craft to help grow the creative talents of students.
              </p>
              <div className="relative h-44 rounded-xl overflow-hidden mt-auto border border-gray-50 shadow-inner">
                <Image 
                  src="/images/school-activities-students.avif" 
                  alt="Activity Room" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sports Facilities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-80 rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/students-coaching-center.avif" 
                alt="Sports Ground" 
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-[#035c00] mb-6">What Sports Facilities Does JGPS Offer?</h2>
              <p className="text-lg text-gray-600 mb-6">
                We provide excellent sports facilities to promote physical fitness and sportsmanship among students. Our school encourages students to participate in various sports and games.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2 text-xl">✓</span>
                  <span className="text-gray-600">Spacious playground for outdoor games</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2 text-xl">✓</span>
                  <span className="text-gray-600">Cricket and football field</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2 text-xl">✓</span>
                  <span className="text-gray-600">Badminton and volleyball courts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2 text-xl">✓</span>
                  <span className="text-gray-600">Table tennis facility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2 text-xl">✓</span>
                  <span className="text-gray-600">Indoor games facility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Transport Facilities */}
      <section className="py-16 bg-[#035c00]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">How Does JGPS School Bus Transport Work?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide safe and reliable transportation for students across various locations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6">
                Our school offers a fleet of well-maintained buses for the convenience of students. The buses are equipped with safety features and are regularly serviced to make sure safe and comfortable transportation.
              </p>
              
              <h3 className="text-xl font-semibold text-[#035c00] mb-4">Key Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2 text-xl">✓</span>
                  <span className="text-gray-600">Fleet of well-maintained school buses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2 text-xl">✓</span>
                  <span className="text-gray-600">GPS tracking system for real-time monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2 text-xl">✓</span>
                  <span className="text-gray-600">Experienced and trained drivers and conductors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2 text-xl">✓</span>
                  <span className="text-gray-600">First-aid kits and safety equipment on all buses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2 text-xl">✓</span>
                  <span className="text-gray-600">Regular maintenance and safety checks</span>
                </li>
              </ul>
              
              <div className="mt-6 bg-white p-5 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-[#035c00] mb-3">Transport Routes</h4>
                <p className="text-gray-600 mb-3">
                  Our buses cover major routes in and around Amroha. For detailed information about bus routes, timings, and fees, please contact the school office.
                </p>
                <p className="text-gray-600 italic">
                  Note: Transport fee varies based on the distance from the school. Fee details can be found on the admission page.
                </p>
              </div>
            </div>
            
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/school-building.avif" 
                alt="School Transport" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Cafeteria */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">Does JGPS Have a School Cafeteria?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Healthy meals and hygienic food service for students and staff.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-80 rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/students-taking-exam-hall.avif" 
                alt="School Events & Catering" 
                fill
                className="object-cover"
              />
            </div>
            
            <div className="order-1 md:order-2">
              <p className="text-gray-600 mb-6">
                Our school cafeteria provides healthy and hygienic meals to students and staff. The cafeteria menu is designed by nutritionists to make sure a balanced diet for growing children. The food is prepared in a clean and hygienic environment.
              </p>
              
              <h3 className="text-xl font-semibold text-[#035c00] mb-4">Cafeteria Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2 text-xl">✓</span>
                  <span className="text-gray-600">Clean and hygienic kitchen and dining area</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2 text-xl">✓</span>
                  <span className="text-gray-600">Nutritionally balanced meals and snacks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2 text-xl">✓</span>
                  <span className="text-gray-600">Regular quality checks and health inspections</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2 text-xl">✓</span>
                  <span className="text-gray-600">Special dietary requirements accommodated</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2 text-xl">✓</span>
                  <span className="text-gray-600">Fresh and locally sourced ingredients</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Medical Facilities */}
      <section className="py-16 bg-[#035c00]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">What Medical Facilities Does JGPS Offer?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              On-campus medical support and emergency care services.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1 md:col-span-2">
                <p className="text-gray-600 mb-6">
                  The health and safety of our students is our top priority. We have a well-equipped medical room with a qualified nurse available during school hours to attend to any health issues or emergencies.
                </p>
                
                <h3 className="text-xl font-semibold text-[#035c00] mb-4">Medical Services</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2 text-xl">✓</span>
                    <span className="text-gray-600">Well-equipped first-aid room</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2 text-xl">✓</span>
                    <span className="text-gray-600">Qualified nurse available during school hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2 text-xl">✓</span>
                    <span className="text-gray-600">Regular health check-ups for students</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2 text-xl">✓</span>
                    <span className="text-gray-600">Immediate attention for injuries or illness</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2 text-xl">✓</span>
                    <span className="text-gray-600">Tie-up with nearby hospital for emergencies</span>
                  </li>
                </ul>
                
                <div className="bg-[#035c00]/5 p-5 rounded-lg">
                  <h4 className="text-lg font-semibold text-[#035c00] mb-3">Emergency Protocols</h4>
                  <p className="text-gray-600">
                    We have established clear protocols for handling medical emergencies. In case of an emergency, parents are immediately notified, and if necessary, the student is taken to the nearest hospital with proper authorization.
                  </p>
                </div>
              </div>
              
              <div className="relative h-64 md:h-full rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/images/parent-counseling-student.avif" 
                  alt="Medical Support Room" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Facilities */}
      <section className="py-16 bg-[#035c00]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">What Additional Facilities Does JGPS Offer?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide several more facilities to make sure the safety, health, and convenience of our students.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#035c00]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#035c00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#035c00] mb-2">Medical Room</h3>
              <p className="text-gray-600">
                A well-equipped medical room with first-aid facilities and a visiting doctor to address medical emergencies.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#035c00]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#035c00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#035c00] mb-2">Cafeteria</h3>
              <p className="text-gray-600">
                A clean and hygienic cafeteria serving healthy and balanced meals for students and staff.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#035c00]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#035c00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#035c00] mb-2">Transport</h3>
              <p className="text-gray-600">
                School buses with GPS tracking for safe transportation of students from various locations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#035c00]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#035c00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#035c00] mb-2">CCTV Surveillance</h3>
              <p className="text-gray-600">
                The entire campus is under CCTV surveillance to make sure the safety and security of students.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 