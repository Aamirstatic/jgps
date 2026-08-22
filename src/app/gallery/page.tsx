import { Metadata } from 'next';
import GalleryPageClient from './GalleryClient';

export const metadata: Metadata = {
  title: 'School Gallery - Photos & Videos | Jai Govind Public School',
  description: 'View photos and videos of JGPS campus, classrooms, science lab, sports events, cultural activities, and student life at Jai Govind Public School Joya Amroha.',
  keywords: 'JGPS gallery, school photos Amroha, school campus images, Jai Govind Public School photos, school events gallery, student activities Joya',
  alternates: {
    canonical: 'https://jgps.in/gallery',
  },
  openGraph: {
    title: 'School Gallery | Jai Govind Public School',
    description: 'View photos and videos of JGPS campus, events, and student life.',
    url: 'https://jgps.in/gallery',
    siteName: 'Jai Govind Public School',
    images: [{
      url: 'https://jgps.in/images/school-building.avif',
      width: 1200,
      height: 630,
      alt: 'JGPS School Gallery',
    }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'School Gallery | Jai Govind Public School',
    description: 'View photos and videos of JGPS campus, events, and student life.',
    images: ['https://jgps.in/images/school-building.avif'],
  },
};

export default function GalleryPage() {
  return <GalleryPageClient />;
}
