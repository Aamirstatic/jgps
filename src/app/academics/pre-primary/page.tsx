import { schoolData } from "@/data/school-data";
import { Metadata } from "next";
import Image from '@/components/LazyImage';
import Link from "next/link";

export const metadata: Metadata = {
  title: `Pre-Primary Education | ${schoolData.name}`,
  description: `Early childhood education program for nursery to kindergarten at ${schoolData.name}. Learn about our play-based learning approach for young children.`,
  keywords: "pre-primary education, nursery school, kindergarten, early childhood education, play-based learning, Amroha school",
};

export default function PrePrimaryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#035c00]/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#035c00] mb-6">Pre-Primary Education</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our early childhood education program nurtures young minds through play-based learning and caring guidance.
            </p>
          </div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#035c00] mb-6">Early Childhood Education</h2>
              <p className="text-gray-600 mb-4">
                {schoolData.academics.curriculum.nursery}
              </p>
              <p className="text-gray-600 mb-4">
                Our pre-primary program focuses on developing fundamental skills through play-based activities, creating a solid foundation for future learning. We emphasize all-round growth, helping grow physical, cognitive, social, and emotional growth.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 bg-[#035c00] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Play-based Learning</h3>
                    <p className="text-gray-600">Learning through engaging play activities that develop cognitive and social skills.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 bg-[#035c00] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Child-Centered Approach</h3>
                    <p className="text-gray-600">Activities designed to accommodate different learning styles and growth stages.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 bg-[#035c00] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Safe Learning Environment</h3>
                    <p className="text-gray-600">Age-appropriate facilities with focused teachers providing helping grow care.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/students-coaching-center.avif" 
                alt="Pre-primary classroom at Jai Govind Public School"
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
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">Our Pre-Primary Curriculum</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our curriculum is designed to stimulate curiosity, creativity, and a love for learning in young children.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#035c00]/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#035c00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Language & Communication</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Alphabet recognition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Phonemic awareness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                    <span>Vocabulary growth</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Storytelling and rhymes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Pre-writing skills</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#035c00]/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#035c00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Numeracy & Cognitive Skills</h3>
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
                  <span>Shape and color identification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Pattern recognition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Sorting and classification</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#035c00]/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#035c00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Social & Motor Skills</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Fine motor activities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                    <span>Gross motor growth</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Sharing and cooperation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Self-help skills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#035c00] mr-2">•</span>
                  <span>Creative expression</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Daily Schedule */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">A Day at Pre-Primary</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A balanced schedule designed to keep children engaged and learning throughout the day.
            </p>
          </div>
          
          <div className="bg-[#035c00]/5 p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-[#035c00] mb-4">Morning Activities</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="font-medium text-gray-800 w-24">8:30 AM</span>
                    <span className="text-gray-600">Arrival and Morning Circle</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-gray-800 w-24">9:00 AM</span>
                    <span className="text-gray-600">Language Activities</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-gray-800 w-24">10:00 AM</span>
                    <span className="text-gray-600">Snack Time</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-gray-800 w-24">10:30 AM</span>
                    <span className="text-gray-600">Outdoor Play</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-[#035c00] mb-4">Afternoon Activities</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="font-medium text-gray-800 w-24">11:30 AM</span>
                    <span className="text-gray-600">Numeracy Activities</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-gray-800 w-24">12:30 PM</span>
                    <span className="text-gray-600">Lunch Time</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-gray-800 w-24">1:00 PM</span>
                    <span className="text-gray-600">Rest/Quiet Time</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-gray-800 w-24">1:30 PM</span>
                    <span className="text-gray-600">Creative Activities & Dismissal</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Facilities */}
      <section className="py-16 bg-[#035c00]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">Pre-Primary Facilities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our pre-primary wing is designed to provide a safe, stimulating, and child-friendly environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#035c00] mb-3">Child-Friendly Classrooms</h3>
              <p className="text-gray-600">
                Bright, spacious classrooms with child-sized furniture and engaging learning corners.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#035c00] mb-3">Play Area</h3>
              <p className="text-gray-600">
                Safe outdoor play equipment designed to develop gross motor skills and encourage physical activity.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#035c00] mb-3">Activity Room</h3>
              <p className="text-gray-600">
                Focused space for art, music, and creative activities with a variety of materials and resources.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#035c00] mb-3">Rest Area</h3>
              <p className="text-gray-600">
                Comfortable space for children to rest and relax during quiet time, with clean bedding and soft lighting.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Admission Info */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#035c00] to-[#035c00]/90 rounded-2xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-6 text-center">Join Our Pre-Primary Program</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Admission Criteria</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-white mr-2">✓</span>
                      <span>Nursery: 3-4 years of age</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-2">✓</span>
                      <span>LKG: 4-5 years of age</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-2">✓</span>
                      <span>UKG: 5-6 years of age</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-2">✓</span>
                      <span>Age as of April 1st of the academic year</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Required Documents</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-white mr-2">✓</span>
                      <span>Birth certificate</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-2">✓</span>
                      <span>Passport-size photographs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-2">✓</span>
                      <span>Address proof</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-2">✓</span>
                      <span>Completed application form</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center">
                <Link href="/admission" className="bg-white text-[#035c00] font-bold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition-colors">
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