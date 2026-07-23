import { schoolData } from "@/data/school-data";
import { Metadata } from "next";
import Image from '@/components/LazyImage';
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: `Principal's Message | ${schoolData.name}`,
  description: `A personal message from the principal of ${schoolData.name} to students and parents. Read about our educational philosophy and commitment to excellence.`,
  keywords: "Jai Govind Public School principal, principal message, school leadership, Amroha school principal",
};

export default function PrincipalMessagePage() {
  return (
    <>
      <PageHero
        title="Principal's Message"
        subtitle="A Message from our Principal"
        description="A personal message from our school principal to students, parents, and the community."
        breadcrumbs={[
          { label: "About Us", href: "/about" },
          { label: "Principal's Message" }
        ]}
      />
      
      {/* Principal Profile */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Principal Photo and Info */}
            <div className="md:sticky md:top-8">
              <div className="bg-[#035c00]/5 p-6 rounded-lg shadow-md">
                <div className="relative h-80 rounded-lg overflow-hidden shadow-md mb-6">
                  <Image 
                    src="/images/principal.avif" 
                    alt={schoolData.contacts.principal.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold text-[#035c00] mb-2">{schoolData.contacts.principal.name}</h2>
                <p className="text-gray-600 font-medium mb-4">{schoolData.contacts.principal.role}</p>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#035c00] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-600">principal@jaigovindschool.com</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#035c00] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-600">{schoolData.contacts.principal.phone}</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Education & Experience</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>M.A. in Education</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>B.Ed with distinction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>15+ years of teaching experience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#035c00] mr-2">•</span>
                      <span>10+ years in educational leadership</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Principal's Message */}
            <div className="md:col-span-2">
              <div className="prose prose-lg max-w-none">
                <div className="flex items-center mb-6">
                  <div className="h-1 flex-1 bg-[#035c00]/20 rounded-full"></div>
                  <div className="px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#035c00]/60" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <div className="h-1 flex-1 bg-[#035c00]/20 rounded-full"></div>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  Dear Parents, Students, and Community Members,
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  It is with great pleasure that I welcome you to Jai Govind Public School. As the Principal, I am honored to lead an institution that has been committed to educational excellence and all-round growth of students since its inception.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  At Jai Govind Public School, we believe that education is not just about academic achievements but also about character building, skill growth, and helping grow values that will help our students become responsible citizens of tomorrow. Our focused team of teachers works tirelessly to provide a supportive and stimulating environment where each child can discover their potential and grow confidently.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  Our curriculum is designed to be complete and balanced, focusing on both academic toughness and extra activities. We take pride in our special coaching programs that prepare students for entrance examinations to top institutions like AMU, JMI, Sainik School, and more. These programs have helped many of our students achieve their dreams and aspirations.
                </p>
                
                <h3 className="text-xl font-bold text-[#035c00] mt-8 mb-4">Our Educational Philosophy</h3>
                
                <p className="text-gray-600 leading-relaxed">
                  We believe in a student-centered approach to education where each child&apos;s unique abilities and learning styles are recognized and helped grow. Our teaching methods are constantly evolving to incorporate the best practices in education while maintaining our traditional values.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  We emphasize not only on academic excellence but also on the growth of critical thinking, creativity, communication skills, and emotional intelligence. Our goal is to prepare students not just for examinations but for life's challenges.
                </p>
                
                <div className="bg-[#035c00]/5 p-6 rounded-lg my-8">
                  <blockquote className="text-xl text-gray-700 italic font-medium">
                    "Education is not the filling of a pail, but the lighting of a fire."
                    <footer className="text-sm text-gray-500 mt-2">— William Butler Yeats</footer>
                  </blockquote>
                </div>
                
                <h3 className="text-xl font-bold text-[#035c00] mt-8 mb-4">Parental Partnership</h3>
                
                <p className="text-gray-600 leading-relaxed">
                  We recognize that parents are the first teachers of a child and their ongoing involvement is important for educational success. We encourage parents to be active participants in their child&apos;s learning journey and maintain open communication with teachers and school administration.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  Regular parent-teacher meetings, workshops, and other events are organized to strengthen this partnership and provide a platform for productive discussions on student progress and well-being.
                </p>
                
                <h3 className="text-xl font-bold text-[#035c00] mt-8 mb-4">Looking Forward</h3>
                
                <p className="text-gray-600 leading-relaxed">
                  As we move forward, we remain committed to ongoing improvement and new ideas in our educational practices. We are expanding our facilities, enhancing our curriculum, and investing in teacher growth to provide the best possible education to our students.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  I invite you to explore our website to learn more about our programs, facilities, and achievements. Better yet, I welcome you to visit our campus to experience the vibrant learning environment that we have created at Jai Govind Public School.
                </p>
                
                <p className="text-gray-600 leading-relaxed mt-8">
                  Thank you for your interest in our school. I look forward to welcoming you to the Jai Govind family.
                </p>
                
                <p className="text-gray-600 font-medium mt-8">
                  Warm regards,
                  <br />
                  {schoolData.contacts.principal.name}
                  <br />
                  Principal
                </p>
                
                <div className="flex items-center mt-12">
                  <div className="h-1 flex-1 bg-[#035c00]/20 rounded-full"></div>
                  <div className="px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#035c00]/60" fill="currentColor" viewBox="0 0 24 24" transform="rotate(180)">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <div className="h-1 flex-1 bg-[#035c00]/20 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-[#035c00]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold text-[#035c00] mb-6 text-center">Have Questions for Our Principal?</h2>
              <p className="text-gray-600 text-center mb-8">
                Feel free to reach out with any questions, concerns, or feedback. Our principal is always happy to hear from parents and community members.
              </p>
              <div className="flex justify-center">
                <a href="/contact" className="bg-[#035c00] text-white font-bold py-3 px-10 rounded-full shadow-md hover:bg-[#035c00]/90 transition-colors">
                  Contact Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 