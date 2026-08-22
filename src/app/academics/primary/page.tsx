import { schoolData } from "@/data/school-data";
import { Metadata } from "next";
import Image from '@/components/LazyImage';
import Link from "next/link";

export const metadata: Metadata = {
  title: `Primary Education | ${schoolData.name}`,
  description: `Academic program for classes 1 to 5 at ${schoolData.name}. Learn about our primary education curriculum and teaching approach.`,
  keywords: "primary education, primary school, classes 1-5, elementary education, primary curriculum, Amroha school",
};

export default function PrimaryEducationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#035c00]/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#035c00] mb-6">Primary Education</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building a strong foundation for lifelong learning in classes 1 to 5.
            </p>
          </div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#035c00] mb-6">Primary Education (Classes 1-5)</h2>
              <p className="text-gray-600 mb-4">
                {schoolData.academics.curriculum.primary}
              </p>
              <p className="text-gray-600 mb-4">
                Our primary education program is designed to develop essential academic skills, foster curiosity, and build character. We provide a supportive environment where students can explore their potential and develop a love for learning.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 bg-[#035c00] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Strong Academic Foundation</h3>
                    <p className="text-gray-600">Solid grounding in languages, mathematics, and environmental studies.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 bg-[#035c00] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Activity-Based Learning</h3>
                    <p className="text-gray-600">Hands-on activities and projects that make learning engaging and meaningful.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 bg-[#035c00] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Value Education</h3>
                    <p className="text-gray-600">Emphasis on character building, ethical values, and good conduct.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/teacher-teaching-classroom.avif" 
                alt="Primary classroom at Jai Govind Public School"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Curriculum Section */}
      <section className="py-16 bg-[#035c00]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">Our Primary Curriculum</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A complete curriculum that covers core academic subjects and extra activities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#035c00]/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#035c00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Languages</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>English - Reading, writing, grammar, and composition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Hindi - Reading, writing, grammar, and composition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Literature appreciation and comprehension</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Communication skills and vocabulary building</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#035c00]/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#035c00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Mathematics & Science</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Mathematics - Numbers, operations, measurement, geometry</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Environmental Studies (Classes 1-2)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Science (Classes 3-5) - Basic scientific concepts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Social Studies (Classes 3-5) - Geography, history, civics</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#035c00]/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#035c00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Co-Scholastic Areas</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Computer Education - Basic computer skills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Art Education - Drawing, painting, crafts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Physical Education - Sports, yoga, physical fitness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Music and Dance - Vocal music, folk dances</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Teaching Methodology */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">Our Teaching Methodology</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We use modern teaching methods that make learning interactive, engaging, and effective.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#035c00]/5 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#035c00] mb-4">Activity-Based Learning</h3>
              <p className="text-gray-600 mb-4">
                Our teaching approach emphasizes learning by doing. Students participate in hands-on activities, experiments, and projects that help them understand concepts better and retain knowledge longer.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">✓</span>
                  <span>Science experiments and demonstrations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">✓</span>
                  <span>Math manipulatives and concrete materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">✓</span>
                  <span>Project-based learning assignments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">✓</span>
                  <span>Educational games and simulations</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#035c00]/5 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#035c00] mb-4">Integrated Learning Approach</h3>
              <p className="text-gray-600 mb-4">
                We integrate different subjects to help students see connections between various areas of knowledge and develop an all-round understanding of concepts.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">✓</span>
                  <span>Theme-based learning units</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">✓</span>
                  <span>Cross-curricular projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">✓</span>
                  <span>Real-world problem solving</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">✓</span>
                  <span>Collaborative group work</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Class-wise Learning Goals */}
      <section className="py-16 bg-[#035c00]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">Class-wise Learning Goals</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our curriculum sets clear learning objectives for each class level, making sure of steady progress and growth.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#035c00] mb-4">Classes 1-2</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Languages</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>Basic reading and writing skills</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>Phonics and word recognition</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>Simple sentence formation</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Mathematics</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>Number concepts up to 100</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>Basic addition and subtraction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>Shapes and basic measurements</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-2">EVS</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>Awareness about self and surroundings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>Basic concepts of plants, animals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>Food, water, shelter, and clothing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#035c00] mb-4">Classes 3-5</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Languages</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>Advanced reading comprehension</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>Grammar and composition</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>Creative writing and expression</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Mathematics & Science</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>Advanced operations and fractions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>Basic science concepts - matter, energy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>Human body, plants, and environment</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Social Studies</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>Indian history and geography</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>Civic sense and governance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>Cultural diversity and heritage</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Assessment Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">Assessment & Progress Monitoring</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a complete assessment system to monitor student progress and provide timely feedback.
            </p>
          </div>
          
          <div className="bg-[#035c00]/5 p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-[#035c00] mb-4">Continuous Assessment</h3>
                <p className="text-gray-600 mb-4">
                  We conduct regular formative assessments throughout the academic year to track student progress and identify areas that need attention.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">✓</span>
                    <span>Class assignments and homework</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">✓</span>
                    <span>Quizzes and unit tests</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">✓</span>
                    <span>Project work and activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">✓</span>
                    <span>Oral assessments and presentations</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-[#035c00] mb-4">Summative Assessment</h3>
                <p className="text-gray-600 mb-4">
                  Periodic summative assessments are conducted to evaluate overall understanding and application of concepts.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">✓</span>
                    <span>Term examinations (twice a year)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">✓</span>
                    <span>Complete portfolio assessment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">✓</span>
                    <span>Parent-teacher meetings to discuss progress</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">✓</span>
                    <span>Detailed report cards with qualitative feedback</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Admission Info */}
      <section className="py-16 bg-[#035c00]/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold text-[#035c00] mb-6 text-center">Join Our Primary School Program</h2>
              <p className="text-gray-600 text-center mb-8">
                Enroll your child in our primary school program and give them the foundation they need for academic success.
              </p>
              <div className="flex justify-center">
                <Link href="/admission" className="bg-[#035c00] text-white font-bold py-3 px-10 rounded-full shadow-md hover:bg-[#035c00]/90 transition-colors">
                  Apply for Admission
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}