import { schoolData } from "@/data/school-data";
import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact Best School in Joya Amroha | Phone, Address & Map",
  description: "Get contact details, phone numbers, and school location map of Jai Govind Public School on NH9 Delhi Road Joya, District Amroha. Call us for admission and coaching batch details.",
  keywords: "contact Jai Govind Public School, school phone number Amroha, school address Joya, best school Joya map, school location NH9 Amroha, contact JGPS Joya",
  alternates: {
    canonical: 'https://jgps.in/contact',
  },
  openGraph: {
    title: 'Contact Us | Jai Govind Public School',
    description: 'Get contact details, phone numbers, and school location map.',
    url: 'https://jgps.in/contact',
    siteName: 'Jai Govind Public School',
    images: [{ url: 'https://jgps.in/images/school-building.avif', width: 1200, height: 630, alt: 'Contact JGPS' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Contact | JGPS', description: 'Get contact details and school location.', images: ['https://jgps.in/images/school-building.avif'] },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get In Touch"
        description="Reach out to us for admission inquiries, school visits, or general questions. We are here to help."
        breadcrumbs={[
          { label: "Contact" }
        ]}
      />
      
      {/* Contact Information and Form Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-bold text-[#035c00] mb-2">How to Contact JGPS?</h2>
              <p className="text-gray-600 mb-8">We are responsive and ready to assist you. Drop by our campus or contact us via phone or email.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Address Card */}
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-150 border-t-4 border-t-[#035c00] hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
                  <div className="w-12 h-12 bg-[#035c00]/10 rounded-xl flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#035c00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-gray-800 mb-2">Campus Address</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">{schoolData.address}</p>
                </div>
                
                {/* Phone Card */}
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-150 border-t-4 border-t-yellow-500 hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-gray-800 mb-2">Phone Lines</h3>
                  <div className="text-gray-600 text-sm leading-relaxed space-y-1 flex-grow">
                    <p><span className="font-semibold text-gray-700">Manager:</span> {schoolData.contacts.manager.phone}</p>
                    <p><span className="font-semibold text-gray-700">Principal:</span> {schoolData.contacts.principal.phone}</p>
                  </div>
                </div>
                
                {/* Office Hours Card */}
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-150 border-t-4 border-t-[#035c00] hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
                  <div className="w-12 h-12 bg-[#035c00]/10 rounded-xl flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#035c00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-gray-800 mb-2">Office Hours</h3>
                  <div className="text-gray-600 text-sm leading-relaxed flex-grow">
                    <p className="font-semibold">Mon to Sat:</p>
                    <p className="mb-1">8:00 AM - 3:00 PM</p>
                    <p className="font-semibold text-red-500">Sunday Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 animate-ping"></span>
                  Location Map
                </h3>
                <div className="rounded-2xl overflow-hidden border-4 border-white shadow-lg h-96 bg-gray-150 relative">
                  <iframe 
                    src={schoolData.location.mapEmbedUrl} 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Jai Govind Public School Location Map"
                  ></iframe>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 