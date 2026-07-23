"use client";

import { schoolData } from '@/data/school-data';
import Image from '@/components/LazyImage';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useState } from 'react';
import AdmissionFormPopup from './AdmissionFormPopup';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const heroSlides = [
  {
    image: '/images/school-building.avif',
    title: schoolData.name,
    subtitle: 'Excellence in Education',
    description: 'An educational institution dedicated to quality education, character building, and holistic development.',
    badge: 'प्रवेश खुले हैं | Admission Open 2026-27'
  },
  {
    image: '/images/1.JPG',
    title: 'Quality Education',
    subtitle: 'Shaping Future Leaders',
    description: 'We provide comprehensive education from Nursery to Class 8 with a focus on academic excellence and character development.',
    badge: 'Classes: Nursery to 8th'
  },
  {
    image: '/images/coaching.avif',
    title: 'Special Coaching',
    subtitle: 'Entrance Exam Preparation',
    description: 'Expert coaching for AMU, JMI, Sainik School, Military School, and Vidyagyan entrance examinations.',
    badge: 'Coaching Available'
  },
  {
    image: '/images/2.JPG',
    title: 'Modern Facilities',
    subtitle: 'Learning Environment',
    description: 'State-of-the-art facilities with well-equipped classrooms, computer labs, library, and sports facilities.',
    badge: 'World-Class Infrastructure'
  }
];

export default function Hero() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="relative overflow-hidden">
      <AdmissionFormPopup isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        loop={true}
        className="hero-swiper h-[600px] md:h-[700px] lg:h-[800px]"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full bg-gradient-to-br from-[#035c00] to-[#023b00]">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover opacity-30"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#035c00]/90 via-[#035c00]/70 to-[#023b00]/50"></div>
              </div>

              {/* Animated floating shapes */}
              <div className="absolute inset-0 overflow-hidden opacity-20">
                <motion.div
                  className="absolute top-20 right-20 w-64 h-64 bg-yellow-300 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full items-center">
                  {/* Text Content */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-white py-12 lg:py-0"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="inline-block bg-white/20 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-white/30"
                    >
                      {slide.badge}
                    </motion.div>

                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4"
                    >
                      <span className="block text-yellow-300 drop-shadow-lg">
                        {slide.title}
                      </span>
                      <span className="block text-2xl md:text-3xl lg:text-4xl mt-3 font-medium text-white/95">
                        {slide.subtitle}
                      </span>
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="text-base md:text-lg lg:text-xl max-w-xl mb-8 text-white/90 leading-relaxed"
                    >
                      {slide.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      <Link
                        href="/about"
                        className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-semibold rounded-full text-lg transition-all duration-300 hover:bg-white hover:text-[#035c00] hover:scale-105 glassy-button"
                      >
                        Explore More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>

                      <button
                        onClick={() => setIsFormOpen(true)}
                        className="group inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-[#035c00] font-bold rounded-full text-lg transition-all duration-300 hover:bg-yellow-300 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
                      >
                        Apply Now
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="grid grid-cols-3 gap-4 mt-12"
                    >
                      <div className="p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-center transform hover:scale-105 transition-transform">
                        <div className="text-3xl md:text-4xl font-bold text-yellow-300">15+</div>
                        <div className="text-xs md:text-sm mt-1">Years of Excellence</div>
                      </div>
                      <div className="p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-center transform hover:scale-105 transition-transform">
                        <div className="text-3xl md:text-4xl font-bold text-yellow-300">1000+</div>
                        <div className="text-xs md:text-sm mt-1">Happy Students</div>
                      </div>
                      <div className="p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-center transform hover:scale-105 transition-transform">
                        <div className="text-3xl md:text-4xl font-bold text-yellow-300">100%</div>
                        <div className="text-xs md:text-sm mt-1">Success Rate</div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Featured Image */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="hidden lg:flex items-center justify-center"
                  >
                    <div className="relative w-full max-w-lg h-[500px] xl:h-[600px]">
                      <motion.div
                        className="relative h-full overflow-hidden rounded-3xl shadow-2xl"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          fill
                          className="object-cover"
                          sizes="50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                        {/* Logo overlay */}
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.6, delay: 0.8 }}
                          className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl"
                        >
                          <Image
                            src="/images/school-logo.avif"
                            alt="School Logo"
                            width={70}
                            height={70}
                            className="rounded-lg"
                          />
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Wave separator */}
      <div className="relative -mt-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full h-auto text-white fill-current"
        >
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
} 