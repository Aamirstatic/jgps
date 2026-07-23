import { schoolData } from "@/data/school-data";
import { Metadata } from "next";
import Image from '@/components/LazyImage';
import Link from "next/link";

export const metadata: Metadata = {
  title: `Middle School | ${schoolData.name}`,
  description: `Educational approach for classes 6 to 8 at ${schoolData.name}. Learn about our middle school curriculum, teaching methodology, and student growth.`,
  keywords: "middle school, classes 6-8, middle school education, junior high school, Amroha school",
};

export default function MiddleSchoolPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#035c00]/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#035c00] mb-6">Middle School Education</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Preparing students for academic excellence and personal growth in classes 6 to 8.
            </p>
          </div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#035c00] mb-6">Middle School (Classes 6-8)</h2>
              <p className="text-gray-600 mb-4">
                {schoolData.academics.curriculum.middle}
              </p>
              <p className="text-gray-600 mb-4">
                Our middle school program builds on the foundation established in primary school, challenging students with a more advanced curriculum while providing the support they need during these formative years.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 bg-[#035c00] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Advanced Academic Curriculum</h3>
                    <p className="text-gray-600">Complete coverage of all subjects with increased depth and complexity.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 bg-[#035c00] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Critical Thinking Growth</h3>
                    <p className="text-gray-600">Focus on analytical skills, problem-solving, and logical reasoning.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 bg-[#035c00] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Personality Growth</h3>
                    <p className="text-gray-600">Nurturing leadership qualities, communication skills, and social awareness.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/middle-school.avif" 
                alt="Middle school students at Jai Govind Public School"
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
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">Our Middle School Curriculum</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A well-built curriculum that prepares students for secondary education while growing essential life skills.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#035c00]/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#035c00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Languages & Social Studies</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>English - Advanced grammar, literature, and composition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Hindi - Advanced grammar, literature, and composition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Social Studies - History, Geography, and Civics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Reading comprehension and critical analysis</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#035c00]/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#035c00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Mathematics & Science</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Mathematics - Algebra, geometry, and data handling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Science - Physics, Chemistry, and Biology concepts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Laboratory experiments and scientific inquiry</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Problem-solving and mathematical reasoning</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#035c00]/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#035c00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Additional Subjects</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Computer Science - Programming basics and applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Art Education - Visual arts and creative expression</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Physical Education - Sports, fitness, and team games</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Life Skills - Value education and personality growth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">Key Features of Our Middle School Program</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              What makes our middle school education special and effective.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#035c00]/5 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#035c00] mb-4">Interactive Teaching Methods</h3>
              <p className="text-gray-600 mb-4">
                Our teachers employ dynamic and interactive teaching methods that engage students and make learning enjoyable and effective.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">✓</span>
                  <span>Group discussions and debates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">✓</span>
                  <span>Project-based learning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">✓</span>
                  <span>Audio-visual presentations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">✓</span>
                  <span>Field trips and educational tours</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#035c00]/5 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#035c00] mb-4">Special Coaching Programs</h3>
              <p className="text-gray-600 mb-4">
                We offer special coaching programs to prepare students for various entrance examinations and competitions.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">✓</span>
                  <span>Olympiad preparation (Mathematics, Science)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">✓</span>
                  <span>NTSE (National Talent Search Examination)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">✓</span>
                  <span>Sainik School, Navodaya School entrance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">✓</span>
                  <span>AMU, JMI entrance preparation</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-[#035c00]/5 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#035c00] mb-4">Technology Integration</h3>
              <p className="text-gray-600 mb-4">
                We integrate modern technology into our teaching to enhance learning experiences and prepare students for the digital age.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">✓</span>
                  <span>Computer-aided learning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">✓</span>
                  <span>Digital resources and educational software</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">✓</span>
                  <span>Interactive digital content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">✓</span>
                  <span>Basic coding and computer literacy</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#035c00]/5 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#035c00] mb-4">Co-Curricular Activities</h3>
              <p className="text-gray-600 mb-4">
                A wide range of extra activities that contribute to all-round growth and talent helping grow.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">✓</span>
                  <span>Literary activities - debates, elocution, quiz</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">✓</span>
                  <span>Cultural activities - music, dance, drama</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">✓</span>
                  <span>Sports and games - individual and team sports</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">✓</span>
                  <span>Clubs - science, eco, math, and language clubs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Achievements */}
      <section className="py-16 bg-[#035c00]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">Middle School Achievements</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our middle school students have excelled in various academic and co-curricular competitions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#035c00] mb-4">Academic Achievements</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Gold medals in National Science Olympiad</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>State rank holders in Mathematics Olympiad</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Selections in NTSE preliminary rounds</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>District toppers in various competitive exams</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#035c00] mb-4">Sports Achievements</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>District champions in Cricket and Kabaddi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Medals in state-level Athletics competitions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Winners of inter-school sports tournaments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Selection in district-level sports teams</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#035c00] mb-4">Cultural Achievements</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>First prize in district-level cultural festivals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Recognition in state-level art competitions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Winners of inter-school debate and quiz competitions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Awards in science and eco-club exhibitions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">What Parents Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from parents about their experience with our middle school program.
            </p>
          </div>
          
          <div className="bg-[#035c00]/5 rounded-xl p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full bg-[#035c00] flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">S</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Mrs. Sunita Verma</h3>
                    <p className="text-gray-600 text-sm">Parent of Aarav Verma, Class 8</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md mb-4 flex-grow">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#035c00]/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-600 italic">
                    "The middle school program at Jai Govind Public School has been transformative for my son. The teachers have done an excellent job in helping grow his academic abilities while also focusing on his overall growth. The special coaching programs have particularly helped him excel in mathematics and science."
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full bg-[#035c00] flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">R</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Mr. Rajiv Singh</h3>
                    <p className="text-gray-600 text-sm">Parent of Ananya Singh, Class 7</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md mb-4 flex-grow">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#035c00]/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-600 italic">
                    "What I appreciate most about the middle school at Jai Govind is the balance between academic toughness and extra activities. My daughter has not only improved academically but has also discovered her passion for public speaking through the various literary activities organized by the school."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#035c00] to-[#035c00]/90 rounded-2xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Join Our Middle School Program</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Give your child the advantage of quality education during these important formative years.
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