import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Best School in Joya Amroha | AMU, JMI & Sainik School Coaching | JGPS",
  description: "Jai Govind Public School (JGPS) Joya, Amroha offers quality English medium education from Nursery to Class 8. Expert entrance exam coaching for AMU, Jamia Millia Islamia (JMI), Sainik School, Rashtriya Military School (RMS), and Vidyagyan. Admissions Open 2027-28.",
  keywords: "best school in Amroha, best school in Joya, Jai Govind Public School, JGPS Joya, school near me, English medium school Amroha, CBSE school Amroha, school near Delhi Road Joya, AMU entrance coaching Amroha, Sainik school coaching near me, JMI entrance preparation UP, Military school entrance coaching, Vidyagyan admission coaching, private school Joya, school admission Amroha 2026",
  alternates: {
    canonical: "https://jgps.in/",
  },
  openGraph: {
    title: "Best School in Joya Amroha | AMU, JMI & Sainik School Coaching | JGPS",
    description: "Jai Govind Public School (JGPS) Joya, Amroha offers quality English medium education from Nursery to Class 8. Expert entrance exam coaching for AMU, Jamia Millia Islamia (JMI), Sainik School, Rashtriya Military School (RMS), and Vidyagyan.",
    url: "https://jgps.in/",
    siteName: "Jai Govind Public School",
    images: [
      {
        url: "https://jgps.in/images/school-building.avif",
        width: 1200,
        height: 630,
        alt: "Jai Govind Public School Campus Building",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best School in Joya Amroha | AMU, JMI & Sainik School Coaching | JGPS",
    description: "Quality education from Nursery to Class 8 with dedicated entrance prep classes for AMU, Jamia, Sainik, Military schools.",
    images: ["https://jgps.in/images/school-building.avif"],
  },
};

export default function Page() {
  return <HomeClient />;
}
