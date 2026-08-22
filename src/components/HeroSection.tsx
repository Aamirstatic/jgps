import Link from 'next/link';
import Image from '@/components/LazyImage';
import { schoolData } from '@/data/school-data';

export default function HeroSection() {
  return (
    <div className="relative bg-blue-50">
      {/* Background Image (Placeholder) */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-blue-800 to-blue-600 opacity-70"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {schoolData.name}
            </h1>
            <p className="text-xl text-white mb-6">
              उत्कृष्ट शिक्षा के साथ, हम आपके बच्चों का भविष्य निर्माण करते हैं।
            </p>
            <div className="bg-white/90 p-4 rounded-lg shadow-md mb-6">
              <p className="text-blue-800 font-medium mb-2">
                <span className="font-semibold">पता:</span> {schoolData.address}
              </p>
              <p className="text-blue-800 font-medium mb-2">
                <span className="font-semibold">कक्षाएं:</span> {schoolData.classes}
              </p>
              <p className="text-blue-800 font-medium">
                <span className="font-semibold">विशेष कोचिंग:</span> {schoolData.specialCoaching}
              </p>
            </div>
            <Link 
              href="/contact" 
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              संपर्क करें
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="bg-white p-1 rounded-lg shadow-lg">
              <div className="relative h-80 w-full rounded overflow-hidden">
                <Image 
                  src="/images/school-building.avif" 
                  alt="Jai Govind Public School Building"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 