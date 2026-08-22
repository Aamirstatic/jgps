import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import EligibilityChecker from '@/components/EligibilityChecker';

export const metadata: Metadata = {
  title: 'Entrance Exam Eligibility Checker 2027 | AMU, JMI, Sainik School',
  description: 'Use our free eligibility checker to find out which entrance exams your child can appear for in 2027. Covers AMU, JMI, Sainik School, RMS, Vidyagyan, and JNVST.',
  keywords: 'entrance exam eligibility checker, sainik school eligibility, amu class 6 age limit, jnvst eligibility',
  alternates: {
    canonical: 'https://jgps.in/entrance-eligibility-checker',
  },
};

export default function EligibilityCheckerPage() {
  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Entrance Exam Eligibility Checker 2027
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stop guessing! Enter your child&apos;s date of birth and current class to instantly find out which premium entrance exams they qualify for this year.
          </p>
        </div>

        <EligibilityChecker />

        <div className="mt-16 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore Exam Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/coaching/amu-entrance" className="p-4 border border-gray-100 rounded-xl hover:border-[#035c00] hover:shadow-md transition-all group">
              <h3 className="font-bold text-gray-900 group-hover:text-[#035c00]">AMU Entrance Exam &rarr;</h3>
              <p className="text-sm text-gray-500 mt-1">Syllabus, Previous Papers & Dates</p>
            </Link>
            <Link href="/coaching/jmi-entrance" className="p-4 border border-gray-100 rounded-xl hover:border-[#035c00] hover:shadow-md transition-all group">
              <h3 className="font-bold text-gray-900 group-hover:text-[#035c00]">JMI Entrance Exam &rarr;</h3>
              <p className="text-sm text-gray-500 mt-1">Syllabus, Previous Papers & Dates</p>
            </Link>
            <Link href="/coaching/sainik-school" className="p-4 border border-gray-100 rounded-xl hover:border-[#035c00] hover:shadow-md transition-all group">
              <h3 className="font-bold text-gray-900 group-hover:text-[#035c00]">Sainik School (AISSEE) &rarr;</h3>
              <p className="text-sm text-gray-500 mt-1">Syllabus, Previous Papers & Dates</p>
            </Link>
            <Link href="/coaching/military-school" className="p-4 border border-gray-100 rounded-xl hover:border-[#035c00] hover:shadow-md transition-all group">
              <h3 className="font-bold text-gray-900 group-hover:text-[#035c00]">RMS CET &rarr;</h3>
              <p className="text-sm text-gray-500 mt-1">Syllabus, Previous Papers & Dates</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
