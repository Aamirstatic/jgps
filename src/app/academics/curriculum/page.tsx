import { schoolData } from "@/data/school-data";
import { Metadata } from "next";
import Image from '@/components/LazyImage';
import Link from "next/link";

export const metadata: Metadata = {
  title: `Curriculum | ${schoolData.name}`,
  description: `Details about our complete curriculum across all grade levels at ${schoolData.name}. Learn about our academic programs from nursery to class 8.`,
  keywords: "Jai Govind Public School curriculum, school syllabus, academic program, educational approach, Amroha school curriculum",
};

export default function CurriculumPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#035c00]/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#035c00] mb-6">Our Curriculum</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A complete overview of our academic approach and curriculum across all grade levels.
            </p>
          </div>
        </div>
      </section>
      
      {/* Curriculum Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#035c00] mb-6">Our Educational Philosophy</h2>
              <p className="text-gray-600 mb-4">
                At Jai Govind Public School, we believe in an all-round approach to education that helps grow both academic excellence and character growth. Our curriculum is designed to foster critical thinking, creativity, and a love for learning.
              </p>
              <p className="text-gray-600 mb-4">
                We follow a balanced curriculum that integrates traditional academic subjects with modern teaching methods, ensuring that our students are well-prepared for future academic challenges and life beyond school.
              </p>
              
              <div className="bg-[#035c00]/5 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-semibold text-[#035c00] mb-4">Curriculum Highlights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">✓</span>
                    <span className="text-gray-600">Complete coverage of all core subjects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">✓</span>
                    <span className="text-gray-600">Integration of practical activities with theoretical concepts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">✓</span>
                    <span className="text-gray-600">Focus on developing communication and language skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">✓</span>
                    <span className="text-gray-600">Regular assessments to monitor student progress</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">✓</span>
                    <span className="text-gray-600">Emphasis on values and character growth</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
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
      
      {/* Grade-wise Curriculum */}
      <section className="py-16 bg-[#035c00]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">Grade-wise Curriculum</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our curriculum is tailored to meet the growth needs of students at each grade level.
            </p>
          </div>
          
          {/* Nursery */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-10">
            <div className="flex flex-col md:flex-row md:items-center mb-6">
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                <div className="bg-[#035c00] h-16 w-16 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  N
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Nursery Program</h3>
                <p className="text-gray-600 mt-1">Early childhood education for children aged 3-4 years</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6">
              {schoolData.academics.curriculum.nursery}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#035c00]/5 p-5 rounded-lg">
                <h4 className="text-lg font-semibold text-[#035c00] mb-3">Language & Communication</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">•</span>
                    <span>Alphabet recognition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">•</span>
                    <span>Phonics introduction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">•</span>
                    <span>Listening and speaking skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">•</span>
                    <span>Storytelling sessions</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#035c00]/5 p-5 rounded-lg">
                <h4 className="text-lg font-semibold text-[#035c00] mb-3">Numeracy Growth</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">•</span>
                    <span>Number recognition (1-20)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">•</span>
                    <span>Basic counting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">•</span>
                    <span>Shape identification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">•</span>
                    <span>Size and comparison concepts</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#035c00]/5 p-5 rounded-lg">
                <h4 className="text-lg font-semibold text-[#035c00] mb-3">Creative & Motor Skills</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">•</span>
                    <span>Drawing and coloring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">•</span>
                    <span>Clay modeling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">•</span>
                    <span>Fine motor activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">•</span>
                    <span>Movement and rhythm games</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Link href="/academics/pre-primary" className="inline-block bg-[#035c00] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#035c00]/90 transition-colors">
                Learn More About Pre-Primary Education
              </Link>
            </div>
          </div>
          
          {/* Primary */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-10">
            <div className="flex flex-col md:flex-row md:items-center mb-6">
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                <div className="bg-[#035c00] h-16 w-16 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  P
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Primary Program (Classes 1-5)</h3>
                <p className="text-gray-600 mt-1">Foundational education for children aged 6-10 years</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6">
              {schoolData.academics.curriculum.primary}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#035c00]/5 p-5 rounded-lg">
                <h4 className="text-lg font-semibold text-[#035c00] mb-3">Languages</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">•</span>
                    <span>English - Reading, writing, grammar, composition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">•</span>
                    <span>Hindi - Reading, writing, grammar, composition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">•</span>
                    <span>Literature appreciation</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#035c00]/5 p-5 rounded-lg">
                <h4 className="text-lg font-semibold text-[#035c00] mb-3">Mathematics & Science</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">•</span>
                    <span>Mathematics - Numbers, operations, measurement, geometry</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">•</span>
                    <span>Environmental Studies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">•</span>
                    <span>Science (Classes 3-5) - Introduction to basic concepts</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#035c00]/5 p-5 rounded-lg">
                <h4 className="text-lg font-semibold text-[#035c00] mb-3">Co-Scholastic Areas</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">•</span>
                    <span>Art & Craft</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">•</span>
                    <span>Music and Dance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">•</span>
                    <span>Physical Education</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">•</span>
                    <span>Computer Education (basic)</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Link href="/academics/primary" className="inline-block bg-[#035c00] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#035c00]/90 transition-colors">
                Learn More About Primary Education
              </Link>
            </div>
          </div>
          
          {/* Middle School */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center mb-6">
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                <div className="bg-[#035c00] h-16 w-16 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  M
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Middle School Program (Classes 6-8)</h3>
                <p className="text-gray-600 mt-1">Advanced education for children aged 11-14 years</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6">
              {schoolData.academics.curriculum.middle}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#035c00]/5 p-5 rounded-lg">
                <h4 className="text-lg font-semibold text-[#035c00] mb-3">Languages & Social Studies</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">•</span>
                    <span>English - Advanced grammar, literature, composition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">•</span>
                    <span>Hindi - Advanced grammar, literature, composition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">•</span>
                    <span>Social Studies - History, Geography, Civics</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#035c00]/5 p-5 rounded-lg">
                <h4 className="text-lg font-semibold text-[#035c00] mb-3">Science & Mathematics</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">•</span>
                    <span>Mathematics - Algebra, geometry, data handling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">•</span>
                    <span>Science - Physics, Chemistry, Biology concepts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">•</span>
                    <span>Practical experiments and lab work</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#035c00]/5 p-5 rounded-lg">
                <h4 className="text-lg font-semibold text-[#035c00] mb-3">Additional Subjects</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">•</span>
                    <span>Computer Science - Programming basics, applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">•</span>
                    <span>Art Education</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">•</span>
                    <span>Physical Education</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">•</span>
                    <span>Life Skills & Value Education</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Link href="/academics/middle-school" className="inline-block bg-[#035c00] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#035c00]/90 transition-colors">
                Learn More About Middle School Education
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Assessment System */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#035c00] mb-8 text-center">Our Assessment System</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#035c00]/5 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#035c00] mb-4">Ongoing & Complete Evaluation</h3>
              <p className="text-gray-600 mb-4">
                We follow an Ongoing and Complete Evaluation (CCE) system that assesses students throughout the academic year, providing regular feedback on their progress.
              </p>
              <p className="text-gray-600 mb-4">
                This approach helps to reduce exam stress and provides a more all-round view of a student&apos;s growth across various subjects and skills.
              </p>
              <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Components of CCE:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">✓</span>
                  <span>Formative Assessments (FA) - Regular classroom tests, quizzes, projects, and activities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">✓</span>
                  <span>Summative Assessments (SA) - Term-end examinations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">✓</span>
                  <span>Co-Scholastic Assessment - Evaluating art, sports, and value education</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#035c00]/5 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#035c00] mb-4">Report Cards & Parent-Teacher Meetings</h3>
              <p className="text-gray-600 mb-4">
                We believe in maintaining transparent communication with parents about their child&apos;s progress. Detailed report cards are issued at the end of each term, highlighting achievements and areas for improvement.
              </p>
              <p className="text-gray-600 mb-4">
                Regular parent-teacher meetings are organized to discuss student progress and address any concerns. These meetings serve as a platform for collaboration between teachers and parents for the benefit of the student.
              </p>
              <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Schedule:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">✓</span>
                  <span>Quarterly report cards - April, July, October, March</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">✓</span>
                  <span>Parent-teacher meetings - Once every term</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">✓</span>
                  <span>Open house sessions - Twice a year</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Special Coaching Programs */}
      <section className="py-16 bg-[#035c00]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">Special Coaching Programs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              In addition to our regular curriculum, we offer special coaching programs to prepare students for entrance examinations to top institutions.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-gray-600 mb-6">
              {schoolData.academics.entranceCoaching.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-[#035c00] mb-4">Target Institutions</h3>
                <ul className="space-y-3">
                  {schoolData.academics.entranceCoaching.targetInstitutions.map((institution, index) => (
                    <li key={index} className="flex items-start bg-[#035c00]/5 p-4 rounded-lg">
                      <span className="text-[#035c00] mr-2">✓</span>
                      <span className="text-gray-700 font-medium">{institution}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-[#035c00] mb-4">Target Classes</h3>
                <ul className="space-y-3">
                  {schoolData.academics.entranceCoaching.targetClasses.map((classNumber, index) => (
                    <li key={index} className="flex items-start bg-[#035c00]/5 p-4 rounded-lg">
                      <span className="text-[#035c00] mr-2">✓</span>
                      <span className="text-gray-700 font-medium">Class {classNumber}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <Link href="/academics/co-curricular" className="inline-block bg-[#035c00] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#035c00]/90 transition-colors">
                Learn More About Co-Curricular Activities
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#035c00] to-[#035c00]/90 rounded-2xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Experience Our Curriculum</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                We invite you to visit our campus and learn more about our curriculum and teaching methods.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/admission" className="bg-white text-[#035c00] font-bold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                  Apply for Admission
                </Link>
                <Link href="/contact" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white/10 transition-colors">
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