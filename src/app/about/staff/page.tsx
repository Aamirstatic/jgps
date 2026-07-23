import { schoolData } from "@/data/school-data";
import { Metadata } from "next";
import Image from '@/components/LazyImage';
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: `Our Staff | ${schoolData.name}`,
  description: `Meet our focused teaching and non-teaching staff members at ${schoolData.name}. Learn about our qualified educators committed to providing quality education.`,
  keywords: "Jai Govind Public School staff, school teachers, teaching staff, non-teaching staff, Amroha school faculty",
};

// Sample staff data - in a real application, this might come from a database or API
const teachingStaff = [
  {
    id: 1,
    name: "Mrs. Anjali Sharma",
    position: "Senior Math Teacher",
    qualification: "M.Sc. Mathematics, B.Ed.",
    experience: "12 years",
    image: "/images/teacher1.avif",
    subjects: ["Mathematics"],
    classes: ["6-8"],
  },
  {
    id: 2,
    name: "Mr. Rajesh Kumar",
    position: "Science Teacher",
    qualification: "M.Sc. Physics, B.Ed.",
    experience: "8 years",
    image: "/images/teacher2.avif",
    subjects: ["Physics", "General Science"],
    classes: ["6-8"],
  },
  {
    id: 3,
    name: "Ms. Priya Gupta",
    position: "English Teacher",
    qualification: "M.A. English, B.Ed.",
    experience: "6 years",
    image: "/images/teacher3.avif",
    subjects: ["English Language", "English Literature"],
    classes: ["3-8"],
  },
  {
    id: 4,
    name: "Mr. Amit Singh",
    position: "Hindi Teacher",
    qualification: "M.A. Hindi, B.Ed.",
    experience: "10 years",
    image: "/images/teacher4.avif",
    subjects: ["Hindi Language", "Hindi Literature"],
    classes: ["1-8"],
  },
  {
    id: 5,
    name: "Mrs. Sunita Verma",
    position: "Social Studies Teacher",
    qualification: "M.A. History, B.Ed.",
    experience: "7 years",
    image: "/images/teacher5.avif",
    subjects: ["History", "Civics", "Geography"],
    classes: ["6-8"],
  },
  {
    id: 6,
    name: "Mr. Deepak Mishra",
    position: "Computer Teacher",
    qualification: "MCA, B.Ed.",
    experience: "5 years",
    image: "/images/teacher6.avif",
    subjects: ["Computer Science", "Information Technology"],
    classes: ["1-8"],
  },
  {
    id: 7,
    name: "Mrs. Neha Jain",
    position: "Primary Teacher",
    qualification: "B.El.Ed.",
    experience: "9 years",
    image: "/images/teacher7.avif",
    subjects: ["All Subjects"],
    classes: ["1-5"],
  },
  {
    id: 8,
    name: "Mr. Sanjay Tiwari",
    position: "Physical Education Teacher",
    qualification: "B.P.Ed.",
    experience: "8 years",
    image: "/images/teacher8.avif",
    subjects: ["Physical Education", "Sports"],
    classes: ["1-8"],
  },
];

const nonTeachingStaff = [
  {
    id: 101,
    name: "Mr. Rakesh Sharma",
    position: "Administrative Officer",
    experience: "15 years",
    image: "/images/staff1.avif",
  },
  {
    id: 102,
    name: "Mrs. Meenakshi Patel",
    position: "Librarian",
    qualification: "B.Lib.",
    experience: "7 years",
    image: "/images/staff2.avif",
  },
  {
    id: 103,
    name: "Mr. Suresh Kumar",
    position: "Lab Assistant",
    qualification: "B.Sc.",
    experience: "5 years",
    image: "/images/staff3.avif",
  },
  {
    id: 104,
    name: "Mrs. Pooja Singh",
    position: "Accounts Officer",
    qualification: "B.Com",
    experience: "8 years",
    image: "/images/staff4.avif",
  },
];

export default function OurStaffPage() {
  return (
    <>
      <PageHero
        title="Our Staff"
        subtitle="Dedicated Educators"
        description="Meet our focused team of teachers and staff members who are committed to providing quality education and support to our students."
        breadcrumbs={[
          { label: "About Us", href: "/about" },
          { label: "Our Staff" }
        ]}
      />
      
      {/* Management Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">Who manages JGPS?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our school is led by qualified and experienced professionals who guide our educational mission.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Manager */}
            <div className="bg-gradient-to-br from-white to-gray-50/50 p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="mb-4 sm:mb-0 sm:mr-6 flex-shrink-0">
                <div className="w-36 h-36 relative rounded-xl overflow-hidden shadow-md border-2 border-[#035c00]/10">
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
                
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#035c00] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href={`tel:${schoolData.contacts.manager.phone}`} className="hover:text-[#035c00] transition-colors">{schoolData.contacts.manager.phone}</a>
                  </p>
                  <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#035c00] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    manager@jaigovindschool.com
                  </p>
                </div>
              </div>
            </div>
            
            {/* Principal */}
            <div className="bg-gradient-to-br from-white to-gray-50/50 p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="mb-4 sm:mb-0 sm:mr-6 flex-shrink-0">
                <div className="w-36 h-36 relative rounded-xl overflow-hidden shadow-md border-2 border-[#035c00]/10">
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
                
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#035c00] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href={`tel:${schoolData.contacts.principal.phone}`} className="hover:text-[#035c00] transition-colors">{schoolData.contacts.principal.phone}</a>
                  </p>
                  <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#035c00] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    principal@jaigovindschool.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Teaching Staff Section */}
      <section className="py-16 bg-[#035c00]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">Who are the teachers at JGPS?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our qualified teachers are focused on providing excellent education and helping grow each student&apos;s potential.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachingStaff.map((teacher) => (
              <div key={teacher.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
                <div className="relative h-52 rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-[#035c00]/5 to-[#035c00]/15 flex items-center justify-center border border-[#035c00]/10 shadow-inner">
                  <div className="text-[#035c00] font-black text-5xl tracking-wider select-none transform group-hover:scale-110 transition-transform duration-300">
                    {teacher.name.split(' ').filter(n => n.toLowerCase() !== 'mr.' && n.toLowerCase() !== 'mrs.' && n.toLowerCase() !== 'ms.').map(n => n[0]).join('')}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-0.5">{teacher.name}</h3>
                <p className="text-xs text-[#035c00] font-semibold tracking-wide uppercase mb-3">{teacher.position}</p>
                
                <div className="space-y-2 text-xs text-gray-600 mt-auto pt-2 border-t border-gray-50">
                  <p className="flex items-start">
                    <span className="text-gray-400 font-semibold w-24 flex-shrink-0">Qualification:</span>
                    <span className="font-medium text-gray-700">{teacher.qualification}</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-gray-400 font-semibold w-24 flex-shrink-0">Experience:</span>
                    <span className="font-medium text-gray-700">{teacher.experience}</span>
                  </p>
                  <div className="pt-1">
                    <span className="text-gray-400 font-semibold text-xs block mb-1">Subjects:</span>
                    <div className="flex flex-wrap gap-1">
                      {teacher.subjects.map((sub, sIdx) => (
                        <span key={sIdx} className="bg-[#035c00]/5 text-[#035c00] text-[10px] font-semibold px-2 py-0.5 rounded-md">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-1">
                    <span className="text-gray-400 font-semibold text-xs block mb-1">Classes:</span>
                    <div className="flex flex-wrap gap-1">
                      {teacher.classes.map((cls, cIdx) => (
                        <span key={cIdx} className="bg-yellow-400/10 text-yellow-800 text-[10px] font-semibold px-2 py-0.5 rounded-md">
                          Class {cls}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Non-Teaching Staff Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">Who handles administration at JGPS?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our administrative and support staff make sure the smooth functioning of the school and provide essential services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {nonTeachingStaff.map((staff) => (
              <div key={staff.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
                <div className="relative h-52 rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-[#035c00]/5 to-[#035c00]/15 flex items-center justify-center border border-[#035c00]/10 shadow-inner">
                  <div className="text-[#035c00] font-black text-5xl tracking-wider select-none transform group-hover:scale-110 transition-transform duration-300">
                    {staff.name.split(' ').filter(n => n.toLowerCase() !== 'mr.' && n.toLowerCase() !== 'mrs.' && n.toLowerCase() !== 'ms.').map(n => n[0]).join('')}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-0.5">{staff.name}</h3>
                <p className="text-xs text-[#035c00] font-semibold tracking-wide uppercase mb-3">{staff.position}</p>
                
                <div className="space-y-2 text-xs text-gray-600 mt-auto pt-2 border-t border-gray-50">
                  {staff.qualification && (
                    <p className="flex items-start">
                      <span className="text-gray-400 font-semibold w-24 flex-shrink-0">Qualification:</span>
                      <span className="font-medium text-gray-700">{staff.qualification}</span>
                    </p>
                  )}
                  <p className="flex items-start">
                    <span className="text-[#035c00] font-medium mr-2">Experience:</span>
                    <span>{staff.experience}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Join Our Team Section */}
      <section className="py-16 bg-[#035c00]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold text-[#035c00] mb-6 text-center">How to join JGPS team?</h2>
              <p className="text-gray-600 text-center mb-8">
                We are always looking for focused and passionate educators to join our team. If you are interested in making a difference in students&apos; lives, consider a career with us.
              </p>
              <div className="flex justify-center">
                <a href="/careers" className="bg-[#035c00] text-white font-bold py-3 px-10 rounded-full shadow-md hover:bg-[#035c00]/90 transition-colors">
                  View Openings
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 