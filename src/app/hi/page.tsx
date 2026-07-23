import { Metadata } from "next";
import HomeClientHi from "./HomeClientHi";

export const metadata: Metadata = {
  title: "जय गोविंद पब्लिक स्कूल | JGPS हिंदी",
  description: "जय गोविंद पब्लिक स्कूल, जोया, अमरोहा। नर्सरी से कक्षा 8 तक गुणवत्तापूर्ण अंग्रेजी माध्यम शिक्षा। AMU, JMI, सैनिक स्कूल प्रवेश परीक्षा की तैयारी।",
  alternates: {
    canonical: "https://jgps.in/hi",
  },
  openGraph: {
    title: "जय गोविंद पब्लिक स्कूल | JGPS हिंदी",
    description: "जय गोविंद पब्लिक स्कूल, जोया, अमरोहा। नर्सरी से कक्षा 8 तक गुणवत्तापूर्ण अंग्रेजी माध्यम शिक्षा।",
    url: "https://jgps.in/hi",
    siteName: "जय गोविंद पब्लिक स्कूल",
    images: [
      {
        url: "https://jgps.in/images/school-building.avif",
        width: 1200,
        height: 630,
        alt: "जय गोविंद पब्लिक स्कूल परिसर",
      },
    ],
    locale: "hi_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "जय गोविंद पब्लिक स्कूल | JGPS हिंदी",
    description: "जय गोविंद पब्लिक स्कूल, जोया, अमरोहा। नर्सरी से कक्षा 8 तक गुणवत्तापूर्ण शिक्षा।",
    images: ["https://jgps.in/images/school-building.avif"],
  },
};

export default function HindiHomePage() {
  return <HomeClientHi />;
}
