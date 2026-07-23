import { Metadata } from "next";

export const metadata: Metadata = {
  title: "School Photo Gallery | Jai Govind Public School",
  description: "Browse photos of Jai Govind Public School campus, classrooms, labs, sports areas, and cultural events. See our school in pictures.",
  keywords: "school gallery Amroha, JGPS photos, school campus pictures, school activities Joya",
  alternates: {
    canonical: 'https://jgps.in/gallery',
  },
  openGraph: {
    title: 'School Photo Gallery | Jai Govind Public School',
    description: 'Browse photos of our campus, classrooms, labs, and events.',
    url: 'https://jgps.in/gallery',
    siteName: 'Jai Govind Public School',
    images: [{ url: 'https://jgps.in/images/school-building.avif', width: 1200, height: 630, alt: 'School Gallery' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'School Gallery | JGPS', description: 'Browse photos of our campus.', images: ['https://jgps.in/images/school-building.avif'] },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
