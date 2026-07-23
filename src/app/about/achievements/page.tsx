import { schoolData } from "@/data/school-data";
import { Metadata } from "next";
import Image from '@/components/LazyImage';
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: `Achievements | ${schoolData.name}`,
  description: `Recognition, awards, and accomplishments of ${schoolData.name} and our students. Explore our academic, sports, and cultural achievements.`,
  keywords: "Jai Govind Public School achievements, school awards, student accomplishments, academic excellence, sports achievements, cultural achievements, Amroha school",
};

// Sample achievements data - in a real application, this would come from a database or API
const academicAchievements = [
  {
    id: 1,
    title: "Outstanding Performance in Board Examinations",
    description: "Our students consistently achieve excellent results in board examinations with over 90% scoring distinction.",
    year: "2023",
    image: "/images/academic1.avif",
  },
  {
    id: 2,
    title: "Success in Entrance Examinations",
    description: "15 students qualified for top entrance examinations including AMU, JMI, and Sainik School.",
    year: "2023",
    image: "/images/academic2.avif",
  },
  {
    id: 3,
    title: "National Science Olympiad",
    description: "5 students received gold medals and certificates of excellence in the National Science Olympiad.",
    year: "2022",
    image: "/images/academic3.avif",
  },
  {
    id: 4,
    title: "Mathematics Talent Search Examination",
    description: "3 students ranked in the top 100 in the state-level Mathematics Talent Search Examination.",
    year: "2022",
    image: "/images/academic4.avif",
  },
];

const sportsAchievements = [
  {
    id: 101,
    title: "District Level Cricket Championship",
    description: "Our cricket team won the district level inter-school cricket tournament, defeating 15 schools.",
    year: "2023",
    image: "/images/sports1.avif",
  },
  {
    id: 102,
    title: "State Level Athletics Meet",
    description: "Students won 3 gold, 5 silver, and 7 bronze medals in the state level athletics meet.",
    year: "2022",
    image: "/images/sports2.avif",
  },
  {
    id: 103,
    title: "Inter-School Kabaddi Tournament",
    description: "Our kabaddi team secured the runner-up position in the regional inter-school tournament.",
    year: "2022",
    image: "/images/sports3.avif",
  },
];

const culturalAchievements = [
  {
    id: 201,
    title: "District Youth Festival",
    description: "Students won first prize in group dance, solo singing, and debate competitions at the District Youth Festival.",
    year: "2023",
    image: "/images/cultural1.avif",
  },
  {
    id: 202,
    title: "Inter-School Art Competition",
    description: "Two students received awards for their exceptional artwork in the regional painting competition.",
    year: "2022",
    image: "/images/cultural2.avif",
  },
  {
    id: 203,
    title: "Science Exhibition",
    description: "Our students&apos; new science projects received recognition at the District Science Exhibition.",
    year: "2022",
    image: "/images/cultural3.avif",
  },
];

const institutionalAchievements = [
  {
    id: 301,
    title: "Recognition for Educational Excellence",
    description: "Received recognition from the District Education Department for maintaining high standards of education.",
    year: "2023",
    image: "/images/institution1.avif",
  },
  {
    id: 302,
    title: "Best Infrastructure Award",
    description: "Awarded for having one of the best school infrastructures in the region by the Education Council.",
    year: "2021",
    image: "/images/institution2.avif",
  },
  {
    id: 303,
    title: "Green School Initiative",
    description: "Recognized for our environmental conservation efforts and sustainable practices on campus.",
    year: "2022",
    image: "/images/institution3.avif",
  },
];

export default function AchievementsPage() {
  return (
    <>
      <PageHero
        title="Our Achievements"
        subtitle="Celebrating Excellence"
        description="Recognition, awards, and accomplishments of our school and students across academics, sports, and cultural activities."
        breadcrumbs={[
          { label: "About Us", href: "/about" },
          { label: "Our Achievements" }
        ]}
      />
      
      {/* Achievement Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-[#035c00]/5 rounded-lg shadow-md">
              <p className="text-4xl font-bold text-[#035c00] mb-2">500+</p>
              <p className="text-gray-600 font-medium">Awards Won</p>
            </div>
            <div className="p-6 bg-[#035c00]/5 rounded-lg shadow-md">
              <p className="text-4xl font-bold text-[#035c00] mb-2">95%</p>
              <p className="text-gray-600 font-medium">Academic Excellence</p>
            </div>
            <div className="p-6 bg-[#035c00]/5 rounded-lg shadow-md">
              <p className="text-4xl font-bold text-[#035c00] mb-2">50+</p>
              <p className="text-gray-600 font-medium">Sports Medals</p>
            </div>
            <div className="p-6 bg-[#035c00]/5 rounded-lg shadow-md">
              <p className="text-4xl font-bold text-[#035c00] mb-2">15+</p>
              <p className="text-gray-600 font-medium">Competition Wins</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Academic Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">What academic achievements has JGPS earned?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our students consistently excel in academics and competitive examinations, showing their exceptional abilities and preparation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {academicAchievements.map((achievement) => (
              <div key={achievement.id} className="bg-[#035c00]/5 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image 
                    src={achievement.image} 
                    alt={achievement.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white py-1 px-3 rounded-full text-sm font-medium text-[#035c00]">
                    {achievement.year}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Sports Achievements */}
      <section className="py-16 bg-[#035c00]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">What sports achievements has JGPS earned?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our students have achieved remarkable success in various sports at district, state, and national levels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sportsAchievements.map((achievement) => (
              <div key={achievement.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-56">
                  <Image 
                    src={achievement.image} 
                    alt={achievement.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#035c00] py-1 px-3 rounded-full text-sm font-medium text-white">
                    {achievement.year}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Cultural Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">What cultural achievements has JGPS earned?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our students show their talents and creativity in various cultural and co-curricular activities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {culturalAchievements.map((achievement) => (
              <div key={achievement.id} className="bg-[#035c00]/5 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-56">
                  <Image 
                    src={achievement.image} 
                    alt={achievement.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white py-1 px-3 rounded-full text-sm font-medium text-[#035c00]">
                    {achievement.year}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Institutional Achievements */}
      <section className="py-16 bg-[#035c00]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">What institutional recognition has JGPS received?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Recognitions and awards received by Jai Govind Public School for educational excellence and infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {institutionalAchievements.map((achievement) => (
              <div key={achievement.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-56">
                  <Image 
                    src={achievement.image} 
                    alt={achievement.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#035c00] py-1 px-3 rounded-full text-sm font-medium text-white">
                    {achievement.year}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">What Parents & Officials Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from parents and education officials about their experience with our school and our achievements.
            </p>
          </div>
          
          <div className="bg-[#035c00]/5 rounded-xl p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full bg-[#035c00] flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">P</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Mr. Prakash Sharma</h3>
                    <p className="text-gray-600 text-sm">Parent of Aman Sharma, Class 8</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md mb-4 flex-grow">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#035c00]/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-600 italic">
                    "The academic achievements of Jai Govind Public School speak for themselves. My son has not only excelled in studies but has also developed a strong character and leadership qualities. The school's focus on all-round growth is truly commendable."
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full bg-[#035c00] flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">D</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Dr. Rajesh Kumar</h3>
                    <p className="text-gray-600 text-sm">District Education Officer</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md mb-4 flex-grow">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#035c00]/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-600 italic">
                    "Jai Govind Public School has consistently maintained high standards of education in the region. Their achievements in academics, sports, and cultural activities are remarkable. The school serves as a model for other educational institutions in our district."
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
              <h2 className="text-3xl font-bold mb-4">How can you join JGPS&apos;s legacy?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Become a part of Jai Govind Public School and unlock your child&apos;s potential to achieve greatness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/admission" className="bg-white text-[#035c00] font-bold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                  Apply for Admission
                </a>
                <a href="/contact" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white/10 transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 