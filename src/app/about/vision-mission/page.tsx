import { schoolData } from "@/data/school-data";
import { Metadata } from "next";
import Image from '@/components/LazyImage';
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: `Vision & Mission | ${schoolData.name}`,
  description: `Our guiding principles and educational philosophy at ${schoolData.name}. Learn about our vision, mission, and core values that drive our educational approach.`,
  keywords: "Jai Govind Public School vision, school mission, educational philosophy, school values, Amroha school principles",
};

export default function VisionMissionPage() {
  return (
    <>
      <PageHero
        title="Vision & Mission"
        subtitle="Empowering tomorrow&apos;s Leaders"
        description="The guiding principles and educational philosophy that drives Jai Govind Public School."
        breadcrumbs={[
          { label: "About Us", href: "/about" },
          { label: "Vision & Mission" }
        ]}
      />
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Vision Section */}
            <div>
              <div className="mb-8">
                <div className="inline-block bg-[#035c00]/10 rounded-full px-4 py-2 mb-4">
                  <h2 className="text-[#035c00] font-bold text-lg">What is JGPS&apos;s vision?</h2>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Inspiring Excellence, Building Character</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {schoolData.vision}
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#035c00] mb-4">Vision Elements</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 bg-[#035c00] rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Academic Excellence</h4>
                      <p className="text-gray-600">Providing high-quality education that emphasizes both theoretical knowledge and practical skills.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 bg-[#035c00] rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Character Growth</h4>
                      <p className="text-gray-600">Helping grow ethical values, integrity, and respect among our students.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 bg-[#035c00] rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Innovation</h4>
                      <p className="text-gray-600">Embracing new teaching methods and technologies to enhance learning experiences.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/school-building.avif" 
                alt="Jai Govind Public School Campus"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <p className="text-white text-lg font-medium">
                  Our campus - where visions become reality
                </p>
              </div>
            </div>
          </div>
          
          {/* Mission Section */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="order-2 md:order-1 relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/indian-students-studying-classroom.avif" 
                alt="Students in classroom at Jai Govind Public School"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <p className="text-white text-lg font-medium">
                  Helping grow young minds for a better tomorrow
                </p>
              </div>
            </div>
            
            {/* Mission Content */}
            <div className="order-1 md:order-2">
              <div className="mb-8">
                <div className="inline-block bg-[#035c00]/10 rounded-full px-4 py-2 mb-4">
                  <h2 className="text-[#035c00] font-bold text-lg">What is JGPS&apos;s mission?</h2>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Empowering Through Education</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {schoolData.mission}
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#035c00] mb-4">How We Accomplish Our Mission</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 bg-[#035c00] rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Quality Teaching</h4>
                      <p className="text-gray-600">Employing qualified and focused teachers who inspire and motivate students.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 bg-[#035c00] rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Complete Curriculum</h4>
                      <p className="text-gray-600">Offering a balanced curriculum that focuses on academic, physical, social, and emotional growth.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 bg-[#035c00] rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Supportive Environment</h4>
                      <p className="text-gray-600">Creating a safe and helping grow environment where students can grow and learn without fear.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 bg-[#035c00]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-white rounded-full px-5 py-2 mb-4 shadow-md">
              <h2 className="text-[#035c00] font-bold text-lg">What are JGPS&apos;s core values?</h2>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Principles That Guide Us</h3>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              At Jai Govind Public School, our values form the foundation of our educational approach. They guide our actions, decisions, and interactions with students, parents, and the community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {schoolData.values.map((value, index) => {
              const borderColors = [
                'border-t-[#035c00]',
                'border-t-yellow-500',
                'border-t-[#035c00]',
                'border-t-yellow-500',
                'border-t-[#035c00]'
              ];
              const borderColor = borderColors[index % borderColors.length];
              return (
                <div key={index} className={`bg-white p-6 rounded-2xl border border-gray-150 border-t-4 ${borderColor} hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 shadow-sm flex flex-col justify-between`}>
                  <div>
                    <div className="h-10 w-10 bg-[#035c00]/10 rounded-xl flex items-center justify-center mb-5 text-[#035c00] font-bold text-lg">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{value}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value === "Academic Excellence" && "We strive for high standards in teaching and learning, encouraging every student to achieve their full academic potential."}
                      {value === "Character Building" && "We focus on moral values, empathy, and integrity, helping children develop into responsible, ethical citizens."}
                      {value === "Community Service" && "We foster a spirit of giving back and helping others, instilling a sense of social responsibility from an early age."}
                      {value === "Respect for All" && "We celebrate diversity and promote mutual respect, kindness, and understanding among students, teachers, and parents."}
                      {value === "Discipline" && "We emphasize self-discipline, orderliness, and dedication, which form the cornerstone of personal and academic success."}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#035c00] to-[#035c00]/90 rounded-2xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">How can you join JGPS&apos;s mission?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Be a part of Jai Govind Public School&apos;s journey towards educational excellence and all-round growth.
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