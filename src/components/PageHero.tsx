"use client";

import { motion } from 'framer-motion';
import Image from '@/components/LazyImage';
import Link from 'next/link';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  badge?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function PageHero({
  title,
  subtitle,
  description,
  backgroundImage = '/images/school-building.avif',
  badge,
  breadcrumbs
}: PageHeroProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#035c00] to-[#023b00] py-20 lg:py-28 text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {backgroundImage && (
          <Image
            src={backgroundImage}
            alt={title}
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-[#035c00]/95 via-[#035c00]/80 to-[#023b00]/60"></div>
      </div>

      {/* Floating Animated Blur Shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
        <motion.div
          className="absolute -top-12 -right-12 w-80 h-80 bg-yellow-400 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.4, 0.25],
            x: [0, 10, 0],
            y: [0, -10, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-16 -left-16 w-96 h-96 bg-white rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.12, 0.22, 0.12],
            x: [0, -15, 0],
            y: [0, 15, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 bg-yellow-400/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-6 border border-yellow-400/30 text-yellow-300 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
              </span>
              {badge}
            </motion.div>
          )}

          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center space-x-2 text-xs md:text-sm mb-4 text-white/85 font-medium bg-black/15 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/10"
            >
              <Link href="/" className="hover:text-yellow-300 transition-colors">Home</Link>
              {breadcrumbs.map((crumb, idx) => (
                <span key={idx} className="flex items-center space-x-2">
                  <span className="text-white/40">/</span>
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-yellow-300 transition-colors">{crumb.label}</Link>
                  ) : (
                    <span className="text-yellow-300 font-semibold">{crumb.label}</span>
                  )}
                </span>
              ))}
            </motion.nav>
          )}

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-white drop-shadow-md leading-tight"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl font-semibold text-yellow-300 mb-4 tracking-wide uppercase drop-shadow-sm"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed font-light max-w-2xl"
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
      
      {/* Decorative Wave/Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-black/10 to-transparent"></div>
    </div>
  );
}
