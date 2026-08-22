import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Safe School Bus Transport Facility | Joya Amroha UP | JGPS',
  description: 'Learn about the safe school transport van & bus services at Jai Govind Public School. Details of routes covering Joya, Amroha city, Gajraula, and surrounding sectors.',
  keywords: 'school with bus facility Joya, school transport routes Amroha, school van service Joya UP, local transport near Delhi Road Amroha, JGPS bus facility, student transport safety UP schools',
};

const safetyFeatures = [
  { title: 'GPS Tracking Systems', desc: 'All transport vans and buses are fitted with active GPS trackers, allowing our administrative desk to monitor location and speed in real-time.' },
  { title: 'Experienced Gated Drivers', desc: 'Our drivers have a minimum of 5 years of commercial driving experience, clean driving records, and undergo background verification checks.' },
  { title: 'Lady Attendants', desc: 'A dedicated female attendant is present in transport vehicles carrying pre-primary and primary class children to support their entry and exit.' },
  { title: 'Emergency Contact protocols', desc: 'Drivers are equipped with mobile phones for immediate contact. First-aid boxes and fire extinguishers are mandatory in every vehicle.' }
];

const transportRoutes = [
  { sector: 'Sector A: Joya & Local Areas', routes: 'Joya Town local streets, NH9 roadside centers, Delhi Road intersections, Gagan river border border colonies.' },
  { sector: 'Sector B: Amroha City', routes: 'Amroha Railway Station road, Bijnor Road colonies, Azad Bari, Chah-Gori, Katra, and main Amroha market connections.' },
  { sector: 'Sector C: Gajraula & NH9 Route', routes: 'Gajraula border villages, Didoli highway link, highway crossing stops, Kankather border checkposts.' },
  { sector: 'Sector D: Sambhal & Hasanpur Roads', routes: 'Sambhal road crossings, Hasanpur road villages, rural intersections, and intermediate connecting roads.' },
  { sector: 'Sector E: Moradabad Border & Pakbara', routes: 'Pakbara local intersections, Moradabad border entry points, Lodhipur road crossings, Delhi road highway margins.' }
];

export default function SchoolBusTransportPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <PageHero
        title="Bus Transport"
        subtitle="Safe & Monitored Commutes"
        badge="100% Van Coverage"
        description="Ensure your child's safe, comfortable, and punctual commute to school. Our extensive transport network connects JGPS Joya with Amroha, Gajraula, and surrounding rural centers."
        breadcrumbs={[
          { label: "Facilities", href: "/facilities" },
          { label: "Bus Transport" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-12">
          {/* Overview */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-4">How Does JGPS School Bus Transport Work?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At Jai Govind Public School, we understand that a comfortable and secure commute is essential for a productive learning day. We manage a dedicated fleet of well-maintained school vans and buses that cover major state highway points and interior residential lanes.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our transport routes are planned to minimize travel times, ensuring students reach the campus fresh and energetic. Whether you reside in the heart of Amroha city, near Gajraula, or in nearby villages of Joya, JGPS transport services provide reliable door-to-step connectivity.
            </p>
          </section>

          {/* Transport Routes */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-6">Which Transport Sectors and Routes Does JGPS Cover?</h2>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              We cover a broad geographical footprint around Joya, Uttar Pradesh. Please review our main route sectors below to find the nearest pick-up point for your sector.
            </p>
            
            <div className="space-y-6">
              {transportRoutes.map((route, idx) => (
                <div key={idx} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{route.sector}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed"><strong className="text-gray-700">Routes:</strong> {route.routes}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Safety Standards */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-6">What Safety and Security Protocols Does JGPS Follow?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {safetyFeatures.map((feature, idx) => (
                <div key={idx} className="bg-gray-50 p-5 rounded-xl border border-gray-150">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center text-sm md:text-base">
                    <span className="w-2.5 h-2.5 bg-[#035c00] rounded-full mr-2"></span>
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Quick guidelines */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Booking Guidelines</h3>
            <ul className="space-y-3 text-xs text-gray-600">
              <li className="flex items-start">
                <span className="text-[#035c00] mr-2">âœ"</span>
                <span><strong>Early Registration:</strong> Request transport allocation during admission registration itself to secure routing.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#035c00] mr-2">âœ"</span>
                <span><strong>Pick-up Timings:</strong> Students must be at their designated pick-up stops 5 minutes before the scheduled pick-up time.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#035c00] mr-2">âœ"</span>
                <span><strong>Route Modifications:</strong> Requests for route changes must be submitted in writing to the transport desk at least 15 days in advance.</span>
              </li>
            </ul>
          </div>

          {/* Inquiry Box */}
          <div className="bg-[#035c00] text-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-2">Transport Allocation Help</h3>
            <p className="text-xs text-white/90 mb-6 leading-relaxed">
              Need assistance in selecting a transport route or checking van availability for your village?
            </p>
            <div className="space-y-3 text-sm mb-6">
              <p>ðŸ"ž <strong>Transport Head:</strong> +91 9997161490</p>
              <p>ðŸ"ž <strong>Office Desk:</strong> +91 9997161490</p>
              <p>ðŸ•' <strong>Support Hours:</strong> Mon-Sat (8 AM to 4 PM)</p>
            </div>
            <Link
              href="/contact"
              className="bg-yellow-400 hover:bg-yellow-300 text-[#035c00] font-bold py-3 px-6 rounded-lg text-center block text-sm transition-all shadow-md"
            >
              Inquire Route Availability &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
