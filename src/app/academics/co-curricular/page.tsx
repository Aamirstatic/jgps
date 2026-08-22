import { schoolData } from "@/data/school-data";
import { Metadata } from "next";
import Image from '@/components/LazyImage';
import Link from "next/link";

export const metadata: Metadata = {
  title: `Co-Curricular Activities | ${schoolData.name}`,
  description: `Sports, arts, clubs, and other activities beyond academics at ${schoolData.name}. Explore our all-round approach to education through extra programs.`,
  keywords: "extra activities, extra, sports, arts, clubs, student activities, school events, Amroha school",
};

export default function CoCurricularPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#035c00]/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#035c00] mb-6">Co-Curricular Activities</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond academics: helping grow talents, building character, and creating well-rounded individuals.
            </p>
          </div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#035c00] mb-6">All-round Growth</h2>
              <p className="text-gray-600 mb-4">
                At Jai Govind Public School, we believe that education extends beyond textbooks and classrooms. Our co-curricular activities program is designed to develop the whole child by providing opportunities to explore interests, discover talents, and build essential life skills.
              </p>
              <p className="text-gray-600 mb-6">
                Through a diverse range of activities in sports, arts, culture, and academic clubs, we help students develop leadership, teamwork, discipline, and creativity. These activities complement our academic curriculum and contribute to the all-round growth of our students.
              </p>
              
              <div className="bg-[#035c00]/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#035c00] mb-4">Benefits of Co-Curricular Activities</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">✓</span>
                    <span className="text-gray-600">Builds confidence and self-esteem</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">✓</span>
                    <span className="text-gray-600">Develops teamwork and leadership skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">✓</span>
                    <span className="text-gray-600">Enhances physical fitness and coordination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">✓</span>
                    <span className="text-gray-600">Fosters creativity and artistic expression</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#035c00] mr-2">✓</span>
                    <span className="text-gray-600">Improves time management and discipline</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative h-[450px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/co-curricular.avif" 
                alt="Students participating in co-curricular activities at Jai Govind Public School"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Sports Section */}
      <section className="py-16 bg-[#035c00]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">Sports & Physical Education</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Promoting physical fitness, teamwork, and sportsmanship through a variety of sporting activities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                <Image 
                  src="/images/sports1.avif" 
                  alt="Students playing cricket at Jai Govind Public School"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#035c00] mb-3">Team Sports</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Cricket</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Football</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Volleyball</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Kabaddi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Kho-Kho</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                <Image 
                  src="/images/sports2.avif" 
                  alt="Students participating in athletics at Jai Govind Public School"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#035c00] mb-3">Individual Sports</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Athletics (Track and Field)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Badminton</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Table Tennis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Chess</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Carrom</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                <Image 
                  src="/images/sports3.avif" 
                  alt="Yoga and fitness activities at Jai Govind Public School"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#035c00] mb-3">Fitness & Wellness</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Yoga and Meditation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Physical Fitness Training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Mass PT and Drill</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Health and Hygiene Awareness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Nutrition Education</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Arts & Culture Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">Arts & Cultural Activities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nurturing creativity, artistic expression, and cultural awareness through various forms of art.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#035c00]/5 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#035c00] mb-3">Visual Arts</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Drawing and Painting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Crafts and Pottery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Rangoli and Mehendi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Photography</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Model Making</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#035c00]/5 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#035c00] mb-3">Performing Arts</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Classical and Folk Dance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Vocal and Instrumental Music</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Drama and Theatre</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Mime and Expressions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Public Speaking</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#035c00]/5 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#035c00] mb-3">Literary Activities</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Debate and Elocution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Creative Writing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Poetry Recitation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Quiz Competitions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Essay and Story Writing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Clubs & Special Programs */}
      <section className="py-16 bg-[#035c00]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">Clubs & Special Programs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Interest-based clubs and special programs that develop specific skills and foster collaboration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#035c00] mb-4">Academic Clubs</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Science Club</h4>
                  <p className="text-gray-600 mb-3">Exploring scientific concepts through experiments, projects, and field visits.</p>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>Science exhibitions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>Practical demonstrations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>Science quizzes</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Mathematics Club</h4>
                  <p className="text-gray-600 mb-3">Developing mathematical skills through puzzles, games, and problem-solving activities.</p>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>Math Olympiad preparation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>Vedic mathematics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>Math games and puzzles</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Language Club</h4>
                  <p className="text-gray-600 mb-3">Enhancing language skills through creative writing, reading, and speaking activities.</p>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>Book reading sessions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>Creative writing workshops</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>Storytelling competitions</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Computer Club</h4>
                  <p className="text-gray-600 mb-3">Learning computer skills, coding, and digital literacy through hands-on activities.</p>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>Basic coding and programming</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>Digital presentations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>Computer graphics</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#035c00] mb-4">Special Programs</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Eco Club</h4>
                  <p className="text-gray-600 mb-3">Promoting environmental awareness and conservation through various activities.</p>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>Tree plantation drives</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>Waste management projects</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>Environmental awareness campaigns</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Social Service Club</h4>
                  <p className="text-gray-600 mb-3">Developing social responsibility and community service through volunteer activities.</p>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>Community outreach programs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>Awareness campaigns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>Charity drives</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Health & Wellness Club</h4>
                  <p className="text-gray-600 mb-3">Promoting healthy lifestyle and mental well-being through various activities.</p>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>Yoga and meditation sessions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>Health awareness campaigns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>Mental health workshops</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Annual Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">Annual Events & Celebrations</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Special events and celebrations that show student talents and foster school spirit.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#035c00]/5 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#035c00] mb-3">Annual Sports Day</h3>
              <p className="text-gray-600">
                A grand celebration of sports featuring athletic competitions, march past, PT displays, and award ceremonies.
              </p>
            </div>
            
            <div className="bg-[#035c00]/5 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#035c00] mb-3">Annual Cultural Fest</h3>
              <p className="text-gray-600">
                A platform for students to show their talents in music, dance, drama, and other performing arts.
              </p>
            </div>
            
            <div className="bg-[#035c00]/5 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#035c00] mb-3">Science Exhibition</h3>
              <p className="text-gray-600">
                An exhibition showcasing new science projects and models created by students.
              </p>
            </div>
            
            <div className="bg-[#035c00]/5 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#035c00] mb-3">National Celebrations</h3>
              <p className="text-gray-600">
                Patriotic celebrations of Independence Day, Republic Day, and other important national days.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-[#035c00]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold text-[#035c00] mb-6 text-center">Discover Your child&apos;s Hidden Talents</h2>
              <p className="text-gray-600 text-center mb-8">
                Our co-curricular program provides ample opportunities for your child to explore their interests, develop their talents, and build essential life skills.
              </p>
              <div className="flex justify-center">
                <Link href="/contact" className="bg-[#035c00] text-white font-bold py-3 px-10 rounded-full shadow-md hover:bg-[#035c00]/90 transition-colors">
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