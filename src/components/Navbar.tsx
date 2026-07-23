"use client";

import Link from 'next/link';
import Image from '@/components/LazyImage';
import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { schoolData } from '@/data/school-data';
import AdmissionFormPopup from './AdmissionFormPopup';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    {
      href: '/academics',
      label: 'Academics',
      submenu: [
        { href: '/academics', label: 'Curriculum & Academics' },
        { href: '/resources/syllabus-and-study-materials', label: 'Syllabus & Study Materials' },
        { href: '/resources/navodaya-class-6-papers/', label: 'Navodaya JNVST Papers' },
        { href: '/resources/sainik-school-question-papers/', label: 'Sainik School Papers' },
        { href: '/resources/amu-class-6-syllabus-and-papers/', label: 'AMU Entrance Papers' },
        { href: '/resources/vidyagyan-school-syllabus-and-eligibility/', label: 'Vidyagyan Guide' },
        { href: '/resources/rms-cet-military-school-syllabus/', label: 'RMS CET Syllabus' },
      ],
    },
    {
      href: '/admission',
      label: 'Admission',
      submenu: [
        { href: '/admission', label: 'Admission Portal' },
        { href: '/admission/guidelines', label: 'Admission Guidelines' },
      ],
    },
    {
      href: '/coaching',
      label: 'Coaching',
      submenu: [
        { href: '/coaching', label: 'Coaching Home' },
        { href: '/coaching/amu-entrance', label: 'AMU Entrance' },
        { href: '/coaching/jmi-entrance', label: 'JMI Entrance' },
        { href: '/coaching/sainik-school', label: 'Sainik School' },
        { href: '/coaching/military-school', label: 'Military School' },
        { href: '/coaching/vidyagyan-school', label: 'Vidyagyan School' },
      ],
    },
    {
      href: '/facilities',
      label: 'Facilities',
      submenu: [
        { href: '/facilities', label: 'All Facilities' },
        { href: '/facilities/school-bus-transport', label: 'Bus Transport Routes' },
      ],
    },
    {
      href: '/blog',
      label: 'Blog',
      submenu: [
        { href: '/blog', label: 'Latest Articles' },
        { href: '/blog?category=Current%20Affairs', label: 'Current Affairs' },
        { href: '/blog?category=Admissions%20%26%20Test%20Prep', label: 'Admissions & Prep' },
        { href: '/blog?category=Student%20Life', label: 'Student Life' },
      ],
    },
  ];

  // These go inside "More" dropdown to keep navbar compact
  const moreLinks = [
    { href: '/gallery', label: 'Gallery' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActiveHref = (href: string) => {
    const [targetPath, queryString] = href.split('?');
    const isPathMatch =
      targetPath === '/'
        ? pathname === '/'
        : pathname === targetPath || pathname.startsWith(`${targetPath}/`);
    if (!isPathMatch) return false;
    if (!queryString) return true;
    const query = new URLSearchParams(queryString);
    for (const [key, value] of query.entries()) {
      if (searchParams.get(key) !== value) return false;
    }
    return true;
  };

  const isBlogActive = pathname.startsWith('/blog');
  const isMoreActive = moreLinks.some((l) => isActiveHref(l.href));

  return (
    <div>
      <AdmissionFormPopup isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

      <motion.nav
        className={`sticky top-0 z-40 transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md border-gray-200/60 shadow-[0_2px_15px_rgba(0,0,0,0.05)]'
            : 'bg-white border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} className="relative">
                <Image
                  className="h-10 w-10 rounded-lg object-cover shadow-sm border border-gray-100"
                  src={schoolData.logo}
                  alt={schoolData.name}
                  width={40}
                  height={40}
                />
              </motion.div>
              <div className="block">
                <h1 className="text-xs sm:text-sm font-bold text-[#035c00] leading-tight group-hover:text-[#024700] transition-colors max-w-[140px] sm:max-w-[180px]">
                  {schoolData.name}
                </h1>
                <p className="text-[9px] sm:text-[10px] text-gray-500 font-medium">Excellence in Education</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              {navLinks.map((link) => {
                if (link.submenu) {
                  const active = link.href === '/blog' ? isBlogActive : isActiveHref(link.href);
                  return (
                    <div key={link.href} className="relative group py-4">
                      <Link
                        href={link.href}
                        className={`relative px-3 py-1.5 text-[13px] font-semibold transition-colors flex items-center gap-0.5 ${
                          active ? 'text-[#035c00]' : 'text-gray-700 hover:text-[#035c00]'
                        }`}
                      >
                        {link.label}
                        <svg
                          className="w-3 h-3 transition-transform group-hover:rotate-180 text-gray-400 group-hover:text-[#035c00] mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                        </svg>
                        <span
                          className={`absolute bottom-0 left-3 right-3 h-0.5 bg-[#035c00] transition-transform duration-300 origin-left ${
                            active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                          }`}
                        />
                      </Link>
                      {/* Dropdown */}
                      <div className="absolute left-0 top-full w-60 bg-white rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.1)] border border-gray-100 py-2 opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className={`block px-4 py-2 text-[13px] rounded-lg mx-1.5 transition-all duration-150 font-medium ${
                              isActiveHref(sub.href)
                                ? 'bg-[#035c00]/8 text-[#035c00]'
                                : 'text-gray-600 hover:bg-[#035c00]/5 hover:text-[#035c00]'
                            }`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3 py-1.5 text-[13px] font-semibold transition-colors group ${
                      isActiveHref(link.href) ? 'text-[#035c00]' : 'text-gray-700 hover:text-[#035c00]'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-3 right-3 h-0.5 bg-[#035c00] transition-transform duration-300 origin-left ${
                        isActiveHref(link.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </Link>
                );
              })}

              {/* More Dropdown */}
              <div className="relative group py-4">
                <button
                  className={`relative px-3 py-1.5 text-[13px] font-semibold transition-colors flex items-center gap-0.5 ${
                    isMoreActive ? 'text-[#035c00]' : 'text-gray-700 hover:text-[#035c00]'
                  }`}
                >
                  More
                  <svg
                    className="w-3 h-3 transition-transform group-hover:rotate-180 text-gray-400 group-hover:text-[#035c00] mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-0.5 bg-[#035c00] transition-transform duration-300 origin-left ${
                      isMoreActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </button>
                <div className="absolute right-0 top-full w-44 bg-white rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.1)] border border-gray-100 py-2 opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                  {moreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-2 text-[13px] rounded-lg mx-1.5 transition-all duration-150 font-medium ${
                        isActiveHref(link.href)
                          ? 'bg-[#035c00]/8 text-[#035c00]'
                          : 'text-gray-600 hover:bg-[#035c00]/5 hover:text-[#035c00]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-2">
              <Link
                href="/hi"
                className="hidden lg:flex items-center gap-1 px-3 py-1.5 text-[12px] font-bold text-gray-600 hover:text-[#035c00] border border-gray-200 hover:border-[#035c00] rounded-lg transition-all duration-200"
                title="हिंदी में देखें"
              >
                🇮🇳 हिंदी
              </Link>
              <button
                onClick={() => setIsFormOpen(true)}
                className="hidden lg:block px-5 py-2 bg-[#035c00] hover:bg-[#024700] text-white text-[13px] font-bold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                Apply Now
              </button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                <div className="w-5 h-4 flex flex-col justify-between">
                  <motion.span
                    animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                    className="w-full h-0.5 bg-gray-700 rounded-full"
                  />
                  <motion.span
                    animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="w-full h-0.5 bg-gray-700 rounded-full"
                  />
                  <motion.span
                    animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                    className="w-full h-0.5 bg-gray-700 rounded-full"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
            >
              <div className="px-4 py-4 space-y-1">
                {[...navLinks, ...moreLinks.map((l) => ({ ...l, submenu: undefined }))].map((link, index) => {
                  if ('submenu' in link && link.submenu) {
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.04 }}
                        className="space-y-0.5"
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block px-3 py-2 text-sm font-bold rounded-lg ${
                            link.href === '/blog' && isBlogActive
                              ? 'text-[#035c00] bg-[#035c00]/5'
                              : 'text-[#035c00] bg-gray-50'
                          }`}
                        >
                          {link.label}
                        </Link>
                        <div className="pl-3 border-l-2 border-gray-100 ml-3 space-y-0.5">
                          {link.submenu.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setIsMenuOpen(false)}
                              className={`block px-3 py-1.5 text-sm rounded-lg ${
                                isActiveHref(sub.href)
                                  ? 'text-[#035c00] bg-gray-50'
                                  : 'text-gray-600 hover:text-[#035c00] hover:bg-gray-50'
                              }`}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    );
                  }
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.04 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block px-3 py-2 text-sm rounded-lg font-medium transition-all ${
                          isActiveHref(link.href)
                            ? 'text-[#035c00] bg-[#035c00]/5'
                            : 'text-gray-700 hover:text-[#035c00] hover:bg-gray-50'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                  className="pt-3"
                >
                  <Link
                    href="/hi"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full px-4 py-2.5 mb-2 text-center border border-[#035c00] text-[#035c00] font-semibold rounded-lg transition-all text-sm hover:bg-[#035c00]/5"
                  >
                    🇮🇳 हिंदी में देखें
                  </Link>
                  <button
                    onClick={() => {
                      setIsFormOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="w-full px-4 py-2.5 bg-[#035c00] hover:bg-[#024700] text-white font-semibold rounded-lg transition-all text-sm"
                  >
                    Apply Now
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
