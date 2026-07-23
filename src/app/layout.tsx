import './globals.css';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import { schoolData } from "@/data/school-data";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import { generateSchemaMarkup } from "@/lib/schema";
import HtmlLangSetter from "@/components/HtmlLangSetter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${schoolData.name} - ${schoolData.address}`,
  description: `${schoolData.name} offers education from ${schoolData.classes} with special coaching for entrance exams. Located at ${schoolData.address}.`,
  keywords: "Jai Govind Public School, Amroha school, entrance exam coaching, Nursery to Class 8, NH9 Delhi Road, Joya",
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
    description: `${schoolData.name} offers education from ${schoolData.classes} with special coaching for entrance exams. Located at ${schoolData.address}.`,
    url: 'https://jgps.in',
    siteName: schoolData.name,
    images: [
      {
        url: 'https://jgps.in/images/school-building.avif',
        width: 1200,
        height: 630,
        alt: schoolData.name,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${schoolData.name} - ${schoolData.address}`,
    description: `${schoolData.name} offers education from ${schoolData.classes} with special coaching for entrance exams. Located at ${schoolData.address}.`,
    images: ['https://jgps.in/images/school-building.avif'],
  },
  alternates: {
    canonical: 'https://jgps.in',
    languages: {
      'en': 'https://jgps.in',
      'hi': 'https://jgps.in/hi',
      'x-default': 'https://jgps.in',
    },
    types: {
      'application/rss+xml': 'https://jgps.in/feed.xml',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = generateSchemaMarkup();
  
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Suspense fallback={null}>
          <HtmlLangSetter />
        </Suspense>
        <TopHeader />
        <Suspense fallback={null}>
          <Navbar />
        </Suspense>
        <AnnouncementBar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
