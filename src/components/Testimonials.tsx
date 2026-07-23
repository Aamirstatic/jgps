import { schoolData } from "@/data/school-data";

export default function Testimonials() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">अभिभावकों और छात्रों के विचार</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            जय गोविंद पब्लिक स्कूल में शिक्षा प्राप्त करने वाले छात्रों और उनके अभिभावकों के अनुभव।
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {schoolData.testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <div className="testimonial-content">
                <p className="text-gray-700 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>
              <p className="font-semibold text-blue-800">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 