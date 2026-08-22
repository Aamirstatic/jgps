"use client";

import Image from '@/components/LazyImage';
import { useState, useEffect } from 'react';
import PageHero from "@/components/PageHero";

// Image gallery data
const galleryImages = [
  { src: "/images/1.JPG", alt: "School Main Building", category: "campus" },
  { src: "/images/2.JPG", alt: "Students in Classroom", category: "academic" },
  { src: "/images/3.JPG", alt: "Science Laboratory", category: "academic" },
  { src: "/images/4.JPG", alt: "Computer Lab", category: "academic" },
  { src: "/images/school-building.avif", alt: "School Campus View", category: "campus" },
  { src: "/images/school-activities-students.avif", alt: "School Activities", category: "events" },
  { src: "/images/science-students-laboratory.avif", alt: "Science Lab", category: "academic" },
  { src: "/images/students-coaching-center.avif", alt: "Coaching Classes", category: "academic" },
  { src: "/images/students-taking-exam-hall.avif", alt: "Exam Hall", category: "academic" },
  { src: "/images/teacher-teaching-classroom.avif", alt: "Classroom Teaching", category: "academic" },
  { src: "/images/coaching.avif", alt: "Special Coaching", category: "academic" },
  { src: "/images/student-studying-stressed-exam.avif", alt: "Students Studying", category: "academic" },
  { src: "/images/students-monsoon-rain.avif", alt: "Monsoon Day", category: "events" },
  { src: "/images/indian-students-studying-classroom.avif", alt: "Students in Class", category: "academic" },
  { src: "/images/parent-counseling-student.avif", alt: "Parent Counseling", category: "events" },
  { src: "/images/summer-vacation-up-student.avif", alt: "Summer Activities", category: "events" },
];

// Video data
const videoThumbnails = [
  { 
    src: "/images/school-activities-students.avif", 
    alt: "Annual Day Performance",
    title: "Annual Day Performance",
    description: "Cultural dance performance by senior students at the Annual Day celebration."
  },
  { 
    src: "/images/science-students-laboratory.avif", 
    alt: "Science Exhibition",
    title: "Science Exhibition Highlights",
    description: "Showcasing new science projects created by our talented students."
  },
  { 
    src: "/images/students-coaching-center.avif", 
    alt: "Sports Day",
    title: "Sports Day Celebration",
    description: "Highlights from our annual sports day featuring various athletic competitions."
  }
];

export default function GalleryPageClient() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [loadMore, setLoadMore] = useState(8);

  // Filter images based on selected category
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(img => img.category === selectedCategory));
    }
  }, [selectedCategory]);

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setLoadMore(8); // Reset load more when category changes
  };

  // Open lightbox with selected image
  const openLightbox = (image) => {
    setSelectedImage(image);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  // Close lightbox
  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Handle "Load More" button click
  const handleLoadMore = () => {
    setLoadMore(prev => prev + 8);
  };

  return (
    <>
      <PageHero
        title="School Gallery"
        subtitle="Moments & Memories"
        description="Explore a collection of memorable moments from our school events, celebrations, and activities."
        breadcrumbs={[
          { label: "Gallery" }
        ]}
      />
      
      {/* Gallery Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#035c00] mb-8 text-center">What Photos and Videos Are in the JGPS Gallery?</h2>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <button 
                onClick={() => handleCategoryChange("all")}
                className={`px-6 py-2.5 rounded-full transition-all duration-300 ${
                  selectedCategory === "all" 
                    ? "bg-[#035c00] text-white shadow-lg scale-105" 
                    : "bg-white text-[#035c00] border border-[#035c00] hover:bg-[#035c00]/10"
                }`}
              >
                All
              </button>
              <button 
                onClick={() => handleCategoryChange("events")}
                className={`px-6 py-2.5 rounded-full transition-all duration-300 ${
                  selectedCategory === "events" 
                    ? "bg-[#035c00] text-white shadow-lg scale-105" 
                    : "bg-white text-[#035c00] border border-[#035c00] hover:bg-[#035c00]/10"
                }`}
              >
                Events
              </button>
              <button 
                onClick={() => handleCategoryChange("sports")}
                className={`px-6 py-2.5 rounded-full transition-all duration-300 ${
                  selectedCategory === "sports" 
                    ? "bg-[#035c00] text-white shadow-lg scale-105" 
                    : "bg-white text-[#035c00] border border-[#035c00] hover:bg-[#035c00]/10"
                }`}
              >
                Sports
              </button>
              <button 
                onClick={() => handleCategoryChange("cultural")}
                className={`px-6 py-2.5 rounded-full transition-all duration-300 ${
                  selectedCategory === "cultural" 
                    ? "bg-[#035c00] text-white shadow-lg scale-105" 
                    : "bg-white text-[#035c00] border border-[#035c00] hover:bg-[#035c00]/10"
                }`}
              >
                Cultural
              </button>
              <button 
                onClick={() => handleCategoryChange("achievements")}
                className={`px-6 py-2.5 rounded-full transition-all duration-300 ${
                  selectedCategory === "achievements" 
                    ? "bg-[#035c00] text-white shadow-lg scale-105" 
                    : "bg-white text-[#035c00] border border-[#035c00] hover:bg-[#035c00]/10"
                }`}
              >
                Achievements
              </button>
              <button 
                onClick={() => handleCategoryChange("campus")}
                className={`px-6 py-2.5 rounded-full transition-all duration-300 ${
                  selectedCategory === "campus" 
                    ? "bg-[#035c00] text-white shadow-lg scale-105" 
                    : "bg-white text-[#035c00] border border-[#035c00] hover:bg-[#035c00]/10"
                }`}
              >
                Campus
              </button>
              <button 
                onClick={() => handleCategoryChange("academic")}
                className={`px-6 py-2.5 rounded-full transition-all duration-300 ${
                  selectedCategory === "academic" 
                    ? "bg-[#035c00] text-white shadow-lg scale-105" 
                    : "bg-white text-[#035c00] border border-[#035c00] hover:bg-[#035c00]/10"
                }`}
              >
                Academic
              </button>
            </div>
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredImages.slice(0, loadMore).map((image, index) => (
              <div 
                key={index} 
                className="group relative cursor-pointer overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl"
                onClick={() => openLightbox(image)}
                role="button"
                tabIndex={0}
                aria-label={`View ${image.alt}`}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openLightbox(image); }}
              >
                <div className="relative h-64 sm:h-60 md:h-56 lg:h-64 w-full bg-gray-100">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Load More Button */}
          {filteredImages.length > loadMore && (
            <div className="text-center mt-12">
              <button 
                onClick={handleLoadMore}
                className="px-8 py-3 bg-[#035c00] text-white rounded-lg hover:bg-[#035c00]/90 transition-colors shadow-md transform hover:translate-y-[-2px] active:translate-y-0 duration-300"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Video Gallery Section */}
      <section className="py-16 bg-gradient-to-b from-white to-[#035c00]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#035c00] mb-4">What Videos Are Available in the JGPS Gallery?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Watch videos of our school events, performances, and educational activities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoThumbnails.map((video, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
                <div className="relative pt-[56.25%] /* 16:9 Aspect Ratio */ bg-gray-200 rounded-t overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <button 
                      className="w-16 h-16 bg-[#035c00]/80 backdrop-blur-sm rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300"
                      aria-label={`Play ${video.title}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  <Image
                    src={video.src}
                    alt={video.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#035c00] mb-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Share Your Memories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#035c00]/5 to-[#035c00]/10 p-8 rounded-2xl shadow-sm">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#035c00] mb-4">How Can Alumni Share Their JGPS Memories?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Are you an alumnus? Share your memories and pictures with us to be featured in our gallery.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#035c00] focus:border-[#035c00] outline-none"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="batch" className="block text-sm font-medium text-gray-700 mb-1">Batch Year</label>
                    <input
                      type="text"
                      id="batch"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#035c00] focus:border-[#035c00] outline-none"
                      placeholder="e.g. 2005-2017"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#035c00] focus:border-[#035c00] outline-none"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Memory</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#035c00] focus:border-[#035c00] outline-none"
                      placeholder="Share your favorite memory from school days..."
                    ></textarea>
                  </div>
                  <div>
                    <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700 mb-1">Upload Images</label>
                    <div className="flex items-center justify-center w-full">
                      <label htmlFor="file-upload" className="flex flex-col w-full h-32 border-2 border-dashed border-gray-300 rounded-md hover:bg-gray-50 hover:border-[#035c00]/60 transition cursor-pointer">
                        <div className="flex flex-col items-center justify-center pt-7">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400 group-hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Upload images (max 3)
                          </p>
                        </div>
                        <input id="file-upload" type="file" className="opacity-0" multiple />
                      </label>
                    </div>
                  </div>
                  <div>
                    <button type="submit" className="w-full px-4 py-2 bg-[#035c00] text-white rounded-md hover:bg-[#035c00]/90 transition">
                      Submit Memory
                    </button>
                  </div>
                </form>
              </div>
              
              <div className="md:ml-8">
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-[#035c00] mb-4">Alumni Memories</h3>
                  
                  <div className="space-y-6">
                    <div className="flex space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-[#035c00]/20 flex items-center justify-center">
                          <span className="text-[#035c00] font-semibold">RS</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Rahul Sharma</h4>
                        <p className="text-sm text-gray-500">Batch of 2005-2017</p>
                        <p className="mt-1 text-gray-600">
                          &quot;The annual science fair was always the highlight of my school years. It inspired me to pursue a career in research.&quot;
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-[#035c00]/20 flex items-center justify-center">
                          <span className="text-[#035c00] font-semibold">PK</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Priya Kumar</h4>
                        <p className="text-sm text-gray-500">Batch of 2008-2020</p>
                        <p className="mt-1 text-gray-600">
                          &quot;My fondest memory is winning the inter-school debate competition. The preparation with my teachers built my confidence.&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Lightbox */}
      {isLightboxOpen && selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <div 
            className="relative max-w-6xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 right-0 z-20 m-4">
              <button
                onClick={closeLightbox}
                className="p-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition"
                aria-label="Close lightbox"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="h-full w-full flex items-center justify-center">
              <div className="relative h-full w-full">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
