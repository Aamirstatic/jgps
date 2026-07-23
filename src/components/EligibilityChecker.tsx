'use client';

import React, { useState } from 'react';

export default function EligibilityChecker() {
  const [dob, setDob] = useState('');
  const [currentClass, setCurrentClass] = useState('5');
  const [domicile, setDomicile] = useState('UP_RURAL');
  const [results, setResults] = useState<any>(null);

  const checkEligibility = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dob) return;

    const birthDate = new Date(dob);
    // Rough estimation for 2027 admissions
    // For Class 6: usually born between 1 April 2015 to 31 March 2017 (10-12 years)
    // For Class 9: usually born between 1 April 2012 to 31 March 2014 (13-15 years)
    
    const isClass6Target = currentClass === '5' || currentClass === '4';
    const isClass9Target = currentClass === '8' || currentClass === '7';
    
    // Calculate age as of 31 March 2027
    const cutoffDate = new Date('2027-03-31');
    const ageInMilliseconds = cutoffDate.getTime() - birthDate.getTime();
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

    const eligibleExams = [];

    if (isClass6Target) {
      if (ageInYears >= 10 && ageInYears <= 12.5) {
        eligibleExams.push({ name: 'Sainik School (AISSEE) Class 6', status: 'Eligible', link: '/coaching/sainik-school' });
        eligibleExams.push({ name: 'AMU Class 6 Entrance', status: 'Eligible', link: '/coaching/amu-entrance' });
        eligibleExams.push({ name: 'JMI Class 6 Entrance', status: 'Eligible', link: '/coaching/jmi-entrance' });
        eligibleExams.push({ name: 'RMS CET Class 6', status: 'Eligible', link: '/coaching/military-school' });
        eligibleExams.push({ name: 'JNVST (Navodaya) Class 6', status: 'Eligible', link: '/coaching' });
        
        if (domicile === 'UP_RURAL') {
           eligibleExams.push({ name: 'Vidyagyan School Class 6', status: 'Eligible (Subject to income verification)', link: '/coaching/vidyagyan-school' });
        }
      } else {
        eligibleExams.push({ name: 'Class 6 Entrances', status: 'Not Eligible (Age limit mismatch)', desc: 'Age must be between 10-12 years.' });
      }
    } else if (isClass9Target) {
      if (ageInYears >= 13 && ageInYears <= 15.5) {
        eligibleExams.push({ name: 'Sainik School (AISSEE) Class 9', status: 'Eligible', link: '/coaching/sainik-school' });
        eligibleExams.push({ name: 'AMU Class 9 Entrance', status: 'Eligible', link: '/coaching/amu-entrance' });
        eligibleExams.push({ name: 'JMI Class 9 Entrance', status: 'Eligible', link: '/coaching/jmi-entrance' });
        eligibleExams.push({ name: 'RMS CET Class 9', status: 'Eligible', link: '/coaching/military-school' });
      } else {
        eligibleExams.push({ name: 'Class 9 Entrances', status: 'Not Eligible (Age limit mismatch)', desc: 'Age must be between 13-15 years.' });
      }
    } else {
      eligibleExams.push({ name: 'General', status: 'Wait for next year', desc: 'Focus on building foundational knowledge.' });
    }

    setResults({ age: ageInYears.toFixed(1), exams: eligibleExams });
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 max-w-3xl mx-auto my-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Check Entrance Exam Eligibility</h2>
        <p className="text-gray-500">Enter your child&apos;s details to see which 2027 entrance exams they qualify for.</p>
      </div>

      <form onSubmit={checkEligibility} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">child&apos;s Date of Birth</label>
            <input 
              type="date" 
              required
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#035c00] focus:border-transparent transition-all outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Currently Studying In (2026-27)</label>
            <select 
              value={currentClass}
              onChange={(e) => setCurrentClass(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#035c00] focus:border-transparent transition-all outline-none"
            >
              <option value="3">Class 3</option>
              <option value="4">Class 4</option>
              <option value="5">Class 5 (Targeting Class 6)</option>
              <option value="6">Class 6</option>
              <option value="7">Class 7</option>
              <option value="8">Class 8 (Targeting Class 9)</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Domicile & Background</label>
          <select 
            value={domicile}
            onChange={(e) => setDomicile(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#035c00] focus:border-transparent transition-all outline-none"
          >
            <option value="UP_RURAL">Uttar Pradesh - Rural (Annual Income &lt; 3 Lakh)</option>
            <option value="UP_URBAN">Uttar Pradesh - Urban</option>
            <option value="OTHER_STATE">Other State</option>
          </select>
        </div>

        <button 
          type="submit" 
          className="w-full bg-[#035c00] text-white font-bold py-4 rounded-xl hover:bg-[#024700] transition-colors shadow-lg shadow-green-900/20"
        >
          Check My child&apos;s Eligibility
        </button>
      </form>

      {results && (
        <div className="mt-8 pt-8 border-t border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Results (Estimated Age in March 2027: {results.age} years)</h3>
          
          <div className="space-y-4">
            {results.exams.map((exam: any, idx: number) => (
              <div key={idx} className={`p-4 rounded-xl border ${exam.status.includes('Eligible') ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'} flex flex-col md:flex-row md:items-center justify-between gap-4`}>
                <div>
                  <h4 className={`font-bold ${exam.status.includes('Eligible') ? 'text-green-800' : 'text-red-800'}`}>{exam.name}</h4>
                  <p className={`text-sm ${exam.status.includes('Eligible') ? 'text-green-600' : 'text-red-600'}`}>{exam.status}</p>
                  {exam.desc && <p className="text-sm text-gray-500 mt-1">{exam.desc}</p>}
                </div>
                {exam.link && exam.status.includes('Eligible') && (
                  <a href={exam.link} className="px-4 py-2 bg-white text-[#035c00] font-medium rounded-lg text-sm border border-green-200 hover:bg-green-50 transition-colors whitespace-nowrap text-center">
                    View Syllabus & Papers
                  </a>
                )}
              </div>
            ))}
          </div>
          
          <p className="text-xs text-gray-400 mt-6 text-center">
            *Disclaimer: This tool provides an estimate based on standard exam guidelines. Always verify with official notifications for exact cutoff dates.
          </p>
        </div>
      )}
    </div>
  );
}
