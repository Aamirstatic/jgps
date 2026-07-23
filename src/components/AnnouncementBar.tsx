import React from 'react';
import Link from 'next/link';

export default function AnnouncementBar() {
  return (
    <div className="bg-yellow-400 text-yellow-950 py-2.5 overflow-hidden border-b border-yellow-500 shadow-sm relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Badge */}
        <span className="flex-shrink-0 bg-yellow-900 text-yellow-100 text-[10px] font-extrabold px-2.5 py-1 rounded uppercase tracking-wider animate-pulse">
          Announcement
        </span>
        
        {/* Scrolling text container */}
        <div className="flex-grow overflow-hidden relative h-5">
          <div className="absolute whitespace-nowrap text-xs md:text-sm font-semibold flex gap-12 animate-marquee-horizontal">
            <span>Admissions Open for Session 2026-27 (Nursery to Class 8)</span>
            <span>Special Coaching Batches for AMU, JMI, Sainik School, and Vidyagyan!</span>
            <span>Call Admissions Desk at +91 9412137554</span>
            <span>Submit Online Form to reserve your evaluation seat</span>
            {/* Duplicated for seamless loop */}
            <span>Admissions Open for Session 2026-27 (Nursery to Class 8)</span>
            <span>Special Coaching Batches for AMU, JMI, Sainik School, and Vidyagyan!</span>
            <span>Call Admissions Desk at +91 9412137554</span>
            <span>Submit Online Form to reserve your evaluation seat</span>
          </div>
        </div>

        {/* CTA Link */}
        <Link 
          href="/admission/guidelines" 
          className="flex-shrink-0 text-xs font-bold underline hover:text-yellow-800 transition-colors whitespace-nowrap"
        >
          View Process &rarr;
        </Link>
      </div>
      
      {/* Keyframe animation injected inline */}
      <style>{`
        @keyframes marqueeHorizontal {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-horizontal {
          animation: marqueeHorizontal 35s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-marquee-horizontal:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
