"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from '@/components/LazyImage';

const images = [
  {
    src: "/images/1.JPG",
    alt: "School Main Building",
    fallback: "/images/school-building.avif"
  },
  {
    src: "/images/2.JPG",
    alt: "Students in Classroom",
    fallback: "/images/school-building.avif"
  },
  {
    src: "/images/3.JPG",
    alt: "Science Laboratory",
    fallback: "/images/school-building.avif"
  },
  {
    src: "/images/4.JPG",
    alt: "Computer Lab",
    fallback: "/images/school-building.avif"
  },
  {
    src: "/images/school-building.avif",
    alt: "School Playground",
    fallback: "/images/school-building.avif"
  },
  {
    src: "/images/school-activities-students.avif",
    alt: "School Library",
    fallback: "/images/school-building.avif"
  },
  {
    src: "/images/science-students-laboratory.avif",
    alt: "Science Lab Activities",
    fallback: "/images/school-building.avif"
  },
  {
    src: "/images/students-coaching-center.avif",
    alt: "Smart Classroom",
    fallback: "/images/school-building.avif"
  },
  {
    src: "/images/teacher-teaching-classroom.avif",
    alt: "Teaching in Classroom",
    fallback: "/images/school-building.avif"
  },
  {
    src: "/images/students-taking-exam-hall.avif",
    alt: "Exam Hall",
    fallback: "/images/school-building.avif"
  },
  {
    src: "/images/student-studying-stressed-exam.avif",
    alt: "Students Studying",
    fallback: "/images/school-building.avif"
  }
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({});
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Reduced from 5000 to 4000 for faster slides
    
    return () => clearInterval(interval);
  }, [nextSlide]);

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    
    setIsTransitioning(true);
    setCurrentIndex(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const handleImageError = (index: number) => {
    console.log(`Image at index ${index} failed to load, using fallback`);
    setImageErrors(prev => ({...prev, [index]: true}));
  };

  // Touch events for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // swipe left
      nextSlide();
    }
    
    if (touchStart - touchEnd < -50) {
      // swipe right
      prevSlide();
    }
  };

  return (
    <div 
      className="relative w-full h-[500px] overflow-hidden rounded-lg shadow-2xl"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Loading indicator until images load */}
      <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-0">
        <div className="animate-pulse text-gray-400">Loading images...</div>
      </div>
      
      {/* Main Slider */}
      <div 
        className="flex h-full transition-transform duration-500 ease-in-out relative z-10"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full h-full flex-shrink-0 relative">
            <div className="w-full h-full relative">
              <Image 
                src={imageErrors[index] ? image.fallback : image.src}
                alt={image.alt}
                fill
                quality={85}
                style={{ objectFit: 'cover' }}
                onError={() => handleImageError(index)}
                className="transition-opacity duration-500"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-12 h-12 rounded-full flex items-center justify-center focus:outline-none transition-colors transform hover:scale-110 z-20"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-12 h-12 rounded-full flex items-center justify-center focus:outline-none transition-colors transform hover:scale-110 z-20"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot Indicators with active animation */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full focus:outline-none transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
        <div 
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{ width: `${(currentIndex / (images.length - 1)) * 100}%` }}
        ></div>
      </div>
    </div>
  );
} 