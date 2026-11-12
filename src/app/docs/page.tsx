import DocsGate from './DocsGate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Private Documents | Jai Govind Public School',
  description: 'Private documents for Jai Govind Public School, Joya, Amroha.',
  robots: { index: false, follow: false },
};

export default function DocsPage() {
  return <DocsGate />;
}
