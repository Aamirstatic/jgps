"use client";

import Link from 'next/link';
import Image from '@/components/LazyImage';
import { schoolData } from '@/data/school-data';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowUp, FaRss } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    quickLinks: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About Us' },
      { href: '/academics', label: 'Academics' },
      { href: '/admission/guidelines', label: 'Admission Guidelines' },
      { href: '/coaching', label: 'Coaching Portal' },
      { href: '/facilities/school-bus-transport', label: 'Bus Transport Routes' },
      { href: '/faq', label: 'FAQs Page' },
    ],
    resources: [
      { href: '/resources/syllabus-and-study-materials', label: 'Syllabus & Mock Papers' },
      { href: '/coaching/amu-entrance', label: 'AMU Entrance Coaching' },
      { href: '/coaching/jmi-entrance', label: 'Jamia Entrance Prep' },
      { href: '/coaching/sainik-school', label: 'Sainik School CET' },
      { href: '/coaching/military-school', label: 'Military School Prep' },
      { href: '/coaching/vidyagyan-school', label: 'Vidyagyan Scholarship' },
    ],
    legal: [
      { href: '/privacy-policy', label: 'Privacy Policy' },
      { href: '/terms-and-conditions', label: 'Terms & Conditions' },
      { href: '/cookie-policy', label: 'Cookie Policy' },
      { href: '/disclaimer', label: 'Disclaimer' },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#035c00] via-[#024700] to-[#023b00] text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* Wave separator at top */}
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full h-auto text-white fill-current transform rotate-180"
        >
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* School Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                <Image
                  src={schoolData.logo}
                  alt={schoolData.name}
                  width={60}
                  height={60}
                  className="rounded-lg"
                />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                  {schoolData.name}
                </h3>
                <p className="text-xs text-white/70">Excellence in Education</p>
              </div>
            </Link>
            <p className="text-white/80 mb-4 text-sm leading-relaxed">
              Dedicated to providing quality education and shaping future leaders through comprehensive learning and character development.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <motion.a
                href={`tel:${schoolData.contacts.manager.phone}`}
                className="flex items-center gap-3 text-sm hover:text-yellow-300 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-yellow-300/20 transition-colors">
                  <FaPhone className="text-yellow-300" />
                </div>
                <div>
                  <p className="text-white/60 text-xs">Call Us</p>
                  <p className="font-medium">{schoolData.contacts.manager.phone}</p>
                </div>
              </motion.a>
              
              <motion.a
                href="mailto:jaigovindschool@gmail.com"
                className="flex items-center gap-3 text-sm hover:text-yellow-300 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-yellow-300/20 transition-colors">
                  <FaEnvelope className="text-yellow-300" />
                </div>
                <div>
                  <p className="text-white/60 text-xs">Email Us</p>
                  <p className="font-medium text-xs">jaigovindschool@gmail.com</p>
                </div>
              </motion.a>
              
              <motion.div
                className="flex items-center gap-3 text-sm"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <FaMapMarkerAlt className="text-yellow-300" />
                </div>
                <div>
                  <p className="text-white/60 text-xs">Location</p>
                  <p className="font-medium">{schoolData.address}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6 text-yellow-300">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-yellow-300 transition-colors flex items-center gap-2 group text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-yellow-300 rounded-full group-hover:w-3 transition-all"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6 text-yellow-300">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-yellow-300 transition-colors flex items-center gap-2 group text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-yellow-300 rounded-full group-hover:w-3 transition-all"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal & Newsletter */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6 text-yellow-300">Legal</h3>
            <ul className="space-y-3 mb-6">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-yellow-300 transition-colors flex items-center gap-2 group text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-yellow-300 rounded-full group-hover:w-3 transition-all"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-4 text-yellow-300">Follow Us</h4>
              <div className="flex gap-3">
                <motion.a
                  href={schoolData.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-yellow-300 hover:text-[#035c00] transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Follow us on Facebook"
                >
                  <FaFacebook size={20} />
                </motion.a>
                <motion.a
                  href={schoolData.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-yellow-300 hover:text-[#035c00] transition-colors"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Follow us on Instagram"
                >
                  <FaInstagram size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Local SEO Transport Coverage */}
        <div className="border-t border-white/10 mt-8 pt-6 text-center text-xs text-white/50 leading-relaxed">
          <p>
            <strong>School Transport Facility Coverage (15km Joya Block Radius):</strong> Our secure school transport vehicles connect families from Joya Town, Amroha City, Didauli, Chaudharpur, Pakbara, Kailsa, Atrasi, Rajabpur, Amhera, Daidera, Dariyapur, Salempur, Mubarakpur Joya, Shahpur, Saintli, and surrounding rural centers in Uttar Pradesh (UP).
          </p>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="border-t border-white/20 mt-12 pt-8 text-center"
        >
          <p className="text-white/70 text-sm mb-4">
            &copy; {new Date().getFullYear()} {schoolData.name}. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-white/60">
            <Link href="/sitemap" className="hover:text-yellow-300 transition-colors">
              Sitemap
            </Link>
            <span>|</span>
            <a href="/feed.xml" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors inline-flex items-center gap-1">
              <FaRss className="text-[10px]" /> RSS Feed
            </a>
            <span>|</span>
            <span>Classes: {schoolData.classes}</span>
            <span>|</span>
            <span>Powered by <a href="https://lexx.in" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 underline transition-colors">Lexx.in</a></span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0,
        }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-[#035c00] to-[#024700] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform glassy-button"
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </motion.button>
    </footer>
  );
} 