import { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Check Exam Results Online | Jai Govind Public School Joya",
  description: "Check JGPS exam results online. Enter your details on the school ERP result portal to view class-wise exam results of Jai Govind Public School, Joya, Amroha.",
  keywords: "JGPS result, Jai Govind Public School result, JGPS exam result, school result Joya Amroha, check result online JGPS",
  alternates: {
    canonical: 'https://jgps.in/result',
  },
  openGraph: {
    title: 'Exam Results | Jai Govind Public School',
    description: 'Check your exam results online on the JGPS ERP result portal.',
    url: 'https://jgps.in/result',
    siteName: 'Jai Govind Public School',
    images: [{ url: 'https://jgps.in/images/school-building.avif', width: 1200, height: 630, alt: 'JGPS Exam Results' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Exam Results | JGPS', description: 'Check your exam results online on the JGPS ERP result portal.', images: ['https://jgps.in/images/school-building.avif'] },
};

export default function ResultPage() {
  return (
    <>
      <PageHero
        title="Exam Results"
        subtitle="Check Online"
        description="View your exam results on the school ERP portal below. Enter your admission number and details to see class-wise results."
        breadcrumbs={[
          { label: "Result" }
        ]}
      />

      <section className="py-10 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-150 overflow-hidden">
            <div className="bg-[#035c00] px-6 py-4 flex items-center justify-between flex-wrap gap-3">
              <h2 className="text-white font-bold text-lg">JGPS ERP Result Portal</h2>
              <a
                href="https://erp.jgps.in/examresult/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
              >
                Open in New Tab
              </a>
            </div>
            <iframe
              src="https://erp.jgps.in/examresult/"
              width="100%"
              height="900px"
              frameBorder="0"
              style={{ border: "none", minHeight: "800px" }}
              allow="clipboard-write"
              title="JGPS Exam Result Portal"
            />
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            Result load na ho to upar <span className="font-semibold text-gray-700">"Open in New Tab"</span> button se ERP portal seedha kholein, ya school office se sampark karein.
          </p>
        </div>
      </section>
    </>
  );
}
