import type { Metadata } from 'next';
import { schoolData } from "@/data/school-data";

export const metadata: Metadata = {
  title: `${schoolData.name} - ${schoolData.address}`,
  description: `${schoolData.name} ${schoolData.classes} तक शिक्षा प्रदान करता है और प्रवेश परीक्षाओं के लिए विशेष कोचिंग देता है। ${schoolData.address} पर स्थित।`,
  keywords: "जय गोविंद पब्लिक स्कूल, अमरोहा स्कूल, प्रवेश परीक्षा कोचिंग, नर्सरी से कक्षा 8, NH9 दिल्ली रोड, जोया",
  icons: {
    icon: '/favicon.ico',
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
    title: `${schoolData.name} - ${schoolData.address}`,
    description: `${schoolData.name} ${schoolData.classes} तक शिक्षा प्रदान करता है और प्रवेश परीक्षाओं के लिए विशेष कोचिंग देता है। ${schoolData.address} पर स्थित।`,
    url: 'https://jgps.in/hi',
    siteName: schoolData.name,
    images: [
      {
        url: 'https://jgps.in/images/school-building.avif',
        width: 1200,
        height: 630,
        alt: schoolData.name,
      },
    ],
    locale: 'hi_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${schoolData.name} - ${schoolData.address}`,
    description: `${schoolData.name} ${schoolData.classes} तक शिक्षा प्रदान करता है और प्रवेश परीक्षाओं के लिए विशेष कोचिंग देता है। ${schoolData.address} पर स्थित।`,
    images: ['https://jgps.in/images/school-building.avif'],
  },
  alternates: {
    canonical: 'https://jgps.in/hi',
    languages: {
      'en': '/',
      'hi': '/hi',
      'x-default': '/',
    },
    types: {
      'application/rss+xml': 'https://jgps.in/feed.xml',
    },
  },
};

export default function HiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Root layout already provides TopHeader, Navbar, AnnouncementBar, Footer, PopupAd
  // This layout only overrides metadata for Hindi pages
  return <>{children}</>;
}
