import { schoolData } from "@/data/school-data";
import { Metadata } from "next";
import Image from '@/components/LazyImage';
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: `School History | ${schoolData.name}`,
  description: `The journey and key moments of ${schoolData.name} since its inception. Learn about our founding, growth, and major achievements over the years.`,
  keywords: "Jai Govind Public School history, school founding, school key moments, school journey, Amroha school history",
};

export default function SchoolHistoryPage() {
  return (
    <>
      <PageHero
        title="Our History"
        subtitle="Our Journey & Legacy"
        description="The story of Jai Govind Public School - from humble beginnings to a center of educational excellence."
        breadcrumbs={[
          { label: "About Us", href: "/about" },
          { label: "Our History" }
        ]}
      />
      
      {/* History Timeline Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative border-l-4 border-[#035c00] ml-6 md:ml-0 md:mx-auto pb-8">
            {/* Foundation */}
            <div className="mb-16 relative">
              <div className="absolute -left-8 mt-2 h-12 w-12 rounded-full bg-[#035c00] flex items-center justify-center">
                <span className="text-white font-bold">1</span>
              </div>
              <div className="ml-10 md:ml-14">
                <h2 className="text-2xl font-bold text-[#035c00] mb-3">2005: Foundation</h2>
                <div className="bg-[#035c00]/5 rounded-lg p-6 shadow-md">
                  <p className="text-gray-700 mb-4">
                    Jai Govind Public School was established in 2005 with a vision to provide quality education to the children of Amroha and surrounding areas. The school started with a small building and limited facilities but with a big dream.
                  </p>
                  <div className="relative h-60 rounded-lg overflow-hidden shadow-md mt-6">
                    <Image 
                      src="/images/school-building.avif" 
                      alt="Jai Govind Public School - Early Days"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Growth Period */}
            <div className="mb-16 relative">
              <div className="absolute -left-8 mt-2 h-12 w-12 rounded-full bg-[#035c00] flex items-center justify-center">
                <span className="text-white font-bold">2</span>
              </div>
              <div className="ml-10 md:ml-14">
                <h2 className="text-2xl font-bold text-[#035c00] mb-3">2008-2012: Growth Period</h2>
                <div className="bg-[#035c00]/5 rounded-lg p-6 shadow-md">
                  <p className="text-gray-700 mb-4">
                    During these years, the school witnessed big growth in terms of infrastructure and student joining. New classrooms, laboratories, and sports facilities were added. The school also expanded its curriculum to provide more complete education.
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-4">
                    <li>Expanded from primary to middle school education</li>
                    <li>Built new classrooms and facilities</li>
                    <li>Introduced computer education</li>
                    <li>Added transportation services for students</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Modernization */}
            <div className="mb-16 relative">
              <div className="absolute -left-8 mt-2 h-12 w-12 rounded-full bg-[#035c00] flex items-center justify-center">
                <span className="text-white font-bold">3</span>
              </div>
              <div className="ml-10 md:ml-14">
                <h2 className="text-2xl font-bold text-[#035c00] mb-3">2013-2018: Modernization</h2>
                <div className="bg-[#035c00]/5 rounded-lg p-6 shadow-md">
                  <p className="text-gray-700 mb-4">
                    This period marked the modernization of Jai Govind Public School with the introduction of smart classrooms, advanced laboratories, and improved teaching methods.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-[#035c00] mb-2">Educational Innovations</h3>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>Smart classrooms with digital learning aids</li>
                        <li>Well-equipped science and computer labs</li>
                        <li>Enhanced library with digital resources</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#035c00] mb-2">Co-Curricular Focus</h3>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>Started annual sports meets</li>
                        <li>Introduced cultural programs and competitions</li>
                        <li>Began participating in inter-school competitions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Recent Years */}
            <div className="relative">
              <div className="absolute -left-8 mt-2 h-12 w-12 rounded-full bg-[#035c00] flex items-center justify-center">
                <span className="text-white font-bold">4</span>
              </div>
              <div className="ml-10 md:ml-14">
                <h2 className="text-2xl font-bold text-[#035c00] mb-3">2019-Present: Excellence and Recognition</h2>
                <div className="bg-[#035c00]/5 rounded-lg p-6 shadow-md">
                  <p className="text-gray-700 mb-4">
                    In recent years, Jai Govind Public School has established itself as a center of educational excellence in the region. The school has been recognized for its academic achievements, quality teaching, and contribution to the community.
                  </p>
                  <h3 className="text-lg font-semibold text-[#035c00] mb-2">Key Achievements</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-4">
                    <li>Started special coaching for entrance examinations to top institutions</li>
                    <li>Achieved excellent results in board examinations</li>
                    <li>Recognized for educational excellence by local and state authorities</li>
                    <li>Expanded community outreach programs</li>
                    <li>Ongoing improvements in infrastructure and facilities</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    Today, Jai Govind Public School continues to grow and evolve, always maintaining its commitment to providing quality education and helping grow well-rounded individuals who will contribute positively to society.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision for Future */}
      <section className="py-16 bg-[#035c00]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">What is JGPS&apos;s vision for the future?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As we continue our journey, we remain committed to our founding principles while adapting to the changing educational landscape.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-gray-700 mb-6">
              Looking ahead, Jai Govind Public School aims to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 border border-[#035c00]/20 rounded-lg">
                <h3 className="text-xl font-semibold text-[#035c00] mb-3">Expand Academic Offerings</h3>
                <p className="text-gray-600">
                  Introduce senior secondary classes and diverse academic streams to provide complete education up to class 12.
                </p>
              </div>
              <div className="p-5 border border-[#035c00]/20 rounded-lg">
                <h3 className="text-xl font-semibold text-[#035c00] mb-3">Enhance Digital Learning</h3>
                <p className="text-gray-600">
                  Further integrate technology in education to prepare students for the digital age and global citizenship.
                </p>
              </div>
              <div className="p-5 border border-[#035c00]/20 rounded-lg">
                <h3 className="text-xl font-semibold text-[#035c00] mb-3">Community Engagement</h3>
                <p className="text-gray-600">
                  Strengthen our commitment to community service and social responsibility through various outreach programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 