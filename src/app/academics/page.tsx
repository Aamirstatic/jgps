import { Metadata } from "next";
import Image from '@/components/LazyImage';
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Academic Programs & CBSE Syllabus | Jai Govind Public School",
  description: "Explore our nursery, primary, and middle school academic programs at Jai Govind Public School Joya. Quality English medium education with CBSE syllabus standards in Amroha.",
  keywords: "school academics Amroha, CBSE school Joya, English medium school UP, primary school curriculum Amroha, middle school education Joya, best academic school Amroha",
  alternates: {
    canonical: 'https://jgps.in/academics',
  },
  openGraph: {
    title: 'Academic Programs & CBSE Syllabus | Jai Govind Public School',
    description: 'Explore our nursery, primary, and middle school academic programs.',
    url: 'https://jgps.in/academics',
    siteName: 'Jai Govind Public School',
    images: [{ url: 'https://jgps.in/images/school-building.avif', width: 1200, height: 630, alt: 'Academic Programs' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Academic Programs | JGPS', description: 'Explore our academic programs.', images: ['https://jgps.in/images/school-building.avif'] },
};

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        title="Academic Programs"
        subtitle="All-round Curriculum"
        description="Our complete academic program focuses on excellence, new ideas, and all-round growth."
        breadcrumbs={[
          { label: "Academics" }
        ]}
      />
      
      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#035c00] mb-6">Academic Excellence</h2>
              <p className="text-gray-600 mb-4">
                At Jai Govind Public School, we are committed to providing a well-rounded education that challenges students intellectually while helping grow their overall growth. Our academic program is designed to foster critical thinking, creativity, and a love for learning.
              </p>
              <p className="text-gray-600 mb-6">
                We follow a complete curriculum that aligns with national educational standards while incorporating new teaching methods and tools to enhance the learning experience.
              </p>
              
              <div className="bg-[#035c00]/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#035c00] mb-4">Our Academic Approach</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">✓</span>
                    <span className="text-gray-600">Balanced curriculum focusing on academic excellence and character growth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">✓</span>
                    <span className="text-gray-600">Experienced and qualified teaching staff focused on student success</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">✓</span>
                    <span className="text-gray-600">Modern teaching methods that make learning engaging and effective</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">✓</span>
                    <span className="text-gray-600">Regular assessments and feedback to monitor student progress</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">✓</span>
                    <span className="text-gray-600">Special programs for academically gifted students and those needing more support</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative h-[450px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/indian-students-studying-classroom.avif" 
                alt="Students in a classroom at Jai Govind Public School"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Educational Levels Section */}
      <section className="py-16 bg-[#035c00]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">Educational Levels</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our school offers complete education from pre-primary to middle school, with a built curriculum for each level.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col">
              <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                <Image 
                  src="/images/students-coaching-center.avif" 
                  alt="Pre-primary education at Jai Govind Public School"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Pre-Primary Education</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Our early childhood education program helps grow young minds through play-based learning, developing foundational skills and a love for school.
              </p>
              <Link href="/academics/pre-primary" className="inline-flex items-center text-[#035c00] font-bold text-sm hover:text-[#024700] mt-auto">
                Explore Pre-Primary <span className="ml-1 text-xs">→</span>
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col">
              <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                <Image 
                  src="/images/teacher-teaching-classroom.avif" 
                  alt="Primary education at Jai Govind Public School"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Primary Education</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Building a strong foundation in core subjects while encouraging curiosity, creativity, and critical thinking in students of classes 1-5.
              </p>
              <Link href="/academics/primary" className="inline-flex items-center text-[#035c00] font-bold text-sm hover:text-[#024700] mt-auto">
                Explore Primary <span className="ml-1 text-xs">→</span>
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col">
              <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                <Image 
                  src="/images/middle-school.avif" 
                  alt="Middle school education at Jai Govind Public School"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Middle School</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Preparing students for higher education through an advanced curriculum that develops analytical skills and subject mastery in classes 6-8.
              </p>
              <Link href="/academics/middle-school" className="inline-flex items-center text-[#035c00] font-bold text-sm hover:text-[#024700] mt-auto">
                Explore Middle School <span className="ml-1 text-xs">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Curriculum & Co-Curricular Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">Curriculum & Beyond</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our complete approach to education extends beyond textbooks to develop well-rounded individuals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-white to-gray-50/50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col">
              <div className="relative h-52 rounded-xl overflow-hidden mb-4">
                <Image 
                  src="/images/curriculum.avif" 
                  alt="Curriculum at Jai Govind Public School"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Our Curriculum</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                We follow a balanced curriculum that integrates traditional academic subjects with modern teaching methods, ensuring our students are well-prepared for future academic challenges.
              </p>
              <Link href="/academics/curriculum" className="inline-flex items-center text-[#035c00] font-bold text-sm hover:text-[#024700] mt-auto">
                Explore Curriculum <span className="ml-1 text-xs">→</span>
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-white to-gray-50/50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col">
              <div className="relative h-52 rounded-xl overflow-hidden mb-4">
                <Image 
                  src="/images/co-curricular.avif" 
                  alt="Co-curricular activities at Jai Govind Public School"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Co-Curricular Activities</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Our extensive co-curricular program provides opportunities for students to explore their interests, develop talents, and build essential life skills through sports, arts, and clubs.
              </p>
              <Link href="/academics/co-curricular" className="inline-flex items-center text-[#035c00] font-bold text-sm hover:text-[#024700] mt-auto">
                Discover Activities <span className="ml-1 text-xs">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Teaching Methodology */}
      <section className="py-16 bg-[#035c00]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">Our Teaching Methodology</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We use modern, student-centered teaching approaches that make learning engaging and effective.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center h-12 w-12 bg-[#035c00]/10 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#035c00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#035c00] mb-3">Activity-Based Learning</h3>
              <p className="text-gray-600">
                We prioritize hands-on activities and practical applications of concepts to make learning more engaging and meaningful. Students learn by doing, experimenting, and exploring.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center h-12 w-12 bg-[#035c00]/10 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#035c00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#035c00] mb-3">Collaborative Learning</h3>
              <p className="text-gray-600">
                We encourage students to work together, share ideas, and learn from each other. Group projects, discussions, and team activities foster collaboration and communication skills.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center h-12 w-12 bg-[#035c00]/10 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#035c00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#035c00] mb-3">Personalized Approach</h3>
              <p className="text-gray-600">
                We recognize that each student is unique with different learning styles and paces. Our teachers adapt their methods to meet individual needs and provide more support when necessary.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Faculty Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">Our Faculty</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our team of focused and qualified teachers is committed to providing quality education and helping grow student growth.
            </p>
          </div>
          
          <div className="bg-[#035c00]/5 p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-[#035c00] mb-4">Qualified Educators</h3>
                <p className="text-gray-600 mb-4">
                  Our teachers are well-qualified professionals with expertise in their respective fields. They regularly participate in professional growth programs to stay updated with the latest teaching methods and educational trends.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">✓</span>
                    <span>Experienced faculty with advanced degrees</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">✓</span>
                    <span>Regular training and skill enhancement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">✓</span>
                    <span>Subject specialists for all major subjects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">✓</span>
                    <span>Focused mentors for student guidance</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-[#035c00] mb-4">Teaching Philosophy</h3>
                <p className="text-gray-600 mb-4">
                  Our teachers are not just educators but also mentors and guides who help grow the overall growth of students. They create a supportive learning environment where students feel valued, respected, and encouraged to explore their potential.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">✓</span>
                    <span>Student-centered learning approach</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">✓</span>
                    <span>Focus on conceptual understanding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">✓</span>
                    <span>Integration of values and life skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">✓</span>
                    <span>Personalized attention to student needs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-[#035c00]/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold text-[#035c00] mb-6 text-center">Experience Academic Excellence</h2>
              <p className="text-gray-600 text-center mb-8">
                Join Jai Govind Public School and give your child the advantage of quality education that prepares them for future success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/admission" className="bg-[#035c00] text-white font-bold py-3 px-8 rounded-full shadow-md hover:bg-[#035c00]/90 transition-colors text-center">
                  Apply for Admission
                </Link>
                <Link href="/contact" className="bg-[#035c00]/10 text-[#035c00] font-bold py-3 px-8 rounded-full shadow-md hover:bg-[#035c00]/20 transition-colors text-center">
                  Schedule a Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 