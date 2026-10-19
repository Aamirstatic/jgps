import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Check Exam Results Online | Jai Govind Public School Joya",
  description: "Check JGPS exam results online. Enter your admission number and details on the school ERP result portal to view class-wise exam results of Jai Govind Public School, Joya, Amroha.",
  keywords: "JGPS result, Jai Govind Public School result, JGPS exam result, school result Joya Amroha, check result online JGPS, erp jgps result",
  alternates: {
    canonical: 'https://jgps.in/result',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
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

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Check Exam Results Online | Jai Govind Public School Joya",
  "description": "Check JGPS exam results online on the school ERP result portal. Enter your admission number and details to view class-wise exam results of Jai Govind Public School, Joya, Amroha.",
  "url": "https://jgps.in/result/",
  "inLanguage": "en",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Jai Govind Public School",
    "url": "https://jgps.in/"
  },
  "about": {
    "@type": "EducationalOrganization",
    "name": "Jai Govind Public School",
    "url": "https://jgps.in/"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jgps.in/" },
      { "@type": "ListItem", "position": 2, "name": "Exam Results", "item": "https://jgps.in/result/" }
    ]
  }
};

export default function ResultPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <main>
        <h1 className="sr-only">JGPS Exam Results — Check Online on the School ERP Portal</h1>
        <p className="sr-only">
          Students and parents of Jai Govind Public School, Joya (Amroha) can check
          class-wise exam results online through the school ERP result portal below.
        </p>
        <iframe
          src="https://erp.jgps.in/examresult/"
          width="100%"
          height="900px"
          frameBorder="0"
          style={{ border: "none", minHeight: "800px" }}
          allow="clipboard-write"
          title="JGPS Exam Result Portal"
        />
      </main>
    </>
  );
}
