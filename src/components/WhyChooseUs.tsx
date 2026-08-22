export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#035c00] mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive education and development opportunities for students
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#035c00]/10 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#035c00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Education</h3>
            <p className="text-gray-600">
              Our curriculum is designed to provide comprehensive education that focuses on academic excellence and practical knowledge.
            </p>
          </div>
          
          <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#035c00]/10 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#035c00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Modern Facilities</h3>
            <p className="text-gray-600">
              Our school is equipped with modern classrooms, computer labs, library, and other facilities to enhance the learning experience.
            </p>
          </div>
          
          <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#035c00]/10 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#035c00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Special Coaching</h3>
            <p className="text-gray-600">
              We provide special coaching for entrance exams like AMU, JMI, Sainik School, Military School, and Vidyagyan for classes 6 and 9.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 