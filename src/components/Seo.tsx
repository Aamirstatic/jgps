import { Metadata } from 'next';
import { schoolData } from '@/data/school-data';

type SeoProps = {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
};

export function generateMetadata({
  title,
  description,
  keywords,
  image,
  url,
}: SeoProps): Metadata {
  // Base values
  const baseTitle = `${schoolData.name} - ${schoolData.address}`;
  const baseDescription = `${schoolData.name} offers education from ${schoolData.classes} with special coaching for entrance exams. Located at ${schoolData.address}.`;
  const baseKeywords = `Jai Govind Public School, Amroha school, entrance exam coaching, Nursery to Class 8, NH9 Delhi Road, Joya`;
  const baseImage = '/school-building.jpg';
  const baseUrl = 'https://jgps.in';
  
  // Use provided values or fall back to base values
  const finalTitle = title ? `${title} | ${schoolData.name}` : baseTitle;
  const finalDescription = description || baseDescription;
  const finalKeywords = keywords || baseKeywords;
  const finalImage = image || baseImage;
  const finalUrl = url || baseUrl;
  
  return {
    title: finalTitle,
    description: finalDescription,
    keywords: finalKeywords,
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url: finalUrl,
      siteName: schoolData.name,
      images: [
        {
          url: finalImage,
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
      title: finalTitle,
      description: finalDescription,
      images: [finalImage],
    },
    alternates: {
      canonical: finalUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
    metadataBase: new URL(baseUrl),
    other: {
      "geo.region": "IN-UP",
      "geo.placename": "Joya, Amroha",
    },
    authors: [
      { name: schoolData.contacts.manager.name },
      { name: schoolData.contacts.principal.name }
    ],
  };
} 