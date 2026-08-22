'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PopupAd() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const hasSeenPopup = localStorage.getItem('hasSeenCoachingPopup');
      if (!hasSeenPopup) {
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 3000);
        return () => clearTimeout(timer);
      }
    } catch {
      // localStorage not available (SSR)
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    try {
      localStorage.setItem('hasSeenCoachingPopup', 'true');
    } catch {
      // localStorage not available
    }
  };

  if (!mounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
      <div className="relative max-w-md w-full bg-white rounded-lg overflow-hidden shadow-xl animate-fade-in-up">
        <button
          onClick={closePopup}
          className="absolute top-2 right-2 z-10 w-6 h-6 flex items-center justify-center rounded-full bg-white/80 text-gray-800 hover:bg-white transition-colors"
          aria-label="Close popup"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative p-4 pt-8 bg-gradient-to-br from-[#035c00] to-[#035c00]/80 text-white">
          <h3 className="text-xl font-bold mb-2 text-center">Special Coaching Program!</h3>
          <p className="text-sm mb-3 text-center">Prepare for entrance examinations</p>

          <div className="bg-yellow-500 text-yellow-900 text-xs py-1 px-2 rounded-full font-bold inline-block mb-3 mx-auto w-fit block">Limited Seats Available!</div>

          <div className="mb-3">
            <h4 className="font-semibold text-yellow-300 text-sm">Entrance Exam Coaching:</h4>
            <ul className="text-xs space-y-1 mt-1">
              <li>• Special preparation for AMU, JMI, Sainik School entrance exams</li>
              <li>• Available for Class 6 and 9 students</li>
              <li>• Guidance by experienced teachers</li>
              <li>• Regular tests and assessments</li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="bg-white/10 p-2 rounded text-xs text-center">Mathematics</div>
            <div className="bg-white/10 p-2 rounded text-xs text-center">Science</div>
            <div className="bg-white/10 p-2 rounded text-xs text-center">English</div>
            <div className="bg-white/10 p-2 rounded text-xs text-center">Social Studies</div>
          </div>

          <div className="flex gap-2 mt-4">
            <Link
              href="/coaching"
              className="flex-1 bg-white text-[#035c00] py-2 text-sm rounded font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              View Coaching Programs
            </Link>
            <Link
              href="/contact"
              className="flex-1 border border-white text-white py-2 text-sm rounded font-semibold hover:bg-white/10 transition-colors text-center"
            >
              Register Now
            </Link>
          </div>

          <p className="text-center text-xs mt-3">Contact: Principal - 9412137554</p>
        </div>
      </div>
    </div>
  );
}
