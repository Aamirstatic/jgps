"use client";

import React, { useState } from 'react';

interface LeadFormProps {
  examName: string;
  downloadUrl: string;
  downloadFilename: string;
}

export default function LeadForm({ examName, downloadUrl, downloadFilename }: LeadFormProps) {
  const [formData, setFormData] = useState({
    parentName: '',
    phoneNumber: '',
    studentName: '',
    targetClass: 'Class 6',
    agreeWhatsApp: true
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Form Validation
    if (!formData.parentName.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);

    // Simulate sending lead to server/database
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Store lead in localStorage to simulate lead collection locally
      const existingLeads = JSON.parse(localStorage.getItem('jgps_leads') || '[]');
      const newLead = {
        ...formData,
        examName,
        timestamp: new Date().toISOString()
      };
      existingLeads.push(newLead);
      localStorage.setItem('jgps_leads', JSON.stringify(existingLeads));

      // Trigger automatic file download
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.setAttribute('download', downloadFilename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1200);
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden">
      {/* Decorative green accent line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#035c00]"></div>

      {!isSubmitted ? (
        <>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Download {examName} Prep Material
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            Enter your details below to get instant download access to syllabus guidelines, past year outlines, and preparation sheets.
          </p>

          {errorMsg && (
            <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 text-xs font-semibold rounded-r-lg">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                parent&apos;s Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                placeholder="Enter parent&apos;s full name"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#035c00]/20 focus:border-[#035c00] text-sm text-gray-900 placeholder-gray-400 transition-colors"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#035c00]/20 focus:border-[#035c00] text-sm text-gray-900 placeholder-gray-400 transition-colors"
                  maxLength={10}
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Target Class
                </label>
                <select
                  name="targetClass"
                  value={formData.targetClass}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#035c00]/20 focus:border-[#035c00] text-sm text-gray-900 bg-white transition-colors"
                >
                  <option value="Class 6">Class 6 Entrance</option>
                  <option value="Class 9">Class 9 Entrance</option>
                  <option value="Other">Other Classes</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                student&apos;s Name (Optional)
              </label>
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                placeholder="Enter student&apos;s name"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#035c00]/20 focus:border-[#035c00] text-sm text-gray-900 placeholder-gray-400 transition-colors"
              />
            </div>

            <div className="flex items-start mt-2">
              <input
                type="checkbox"
                id="agreeWhatsApp"
                name="agreeWhatsApp"
                checked={formData.agreeWhatsApp}
                onChange={handleChange}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-[#035c00] focus:ring-[#035c00] cursor-pointer"
              />
              <label htmlFor="agreeWhatsApp" className="ml-2 block text-xs text-gray-500 leading-normal cursor-pointer select-none">
                Yes, send me admission updates, mock tests and coaching details on WhatsApp.
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3.5 px-6 mt-4 rounded-xl text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-[#035c00] hover:bg-[#024a00] hover:shadow-lg active:scale-[0.98]'
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting details...
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Verify Mobile & Download PDF
                </>
              )}
            </button>
          </form>
        </>
      ) : (
        <div className="text-center py-6">
          <div className="w-16 h-16 bg-green-50 text-[#035c00] rounded-full flex items-center justify-center mx-auto mb-4 border border-green-150">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Download Started!</h3>
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            Thank you, <strong>{formData.parentName}</strong>. Your requested file, <strong>{downloadFilename}</strong>, is now downloading.
          </p>
          <div className="bg-gray-50 p-4 rounded-xl text-left border border-gray-150 mb-6 text-xs text-gray-600 leading-normal">
            <p className="font-semibold text-gray-900 mb-1">What happens next?</p>
            <p>1. Check your downloads folder for the file.</p>
            <p>2. We will send you sample mock test papers on WhatsApp (+91 {formData.phoneNumber}) within 24 hours.</p>
            <p>3. Our coaching coordinator will call you to offer a free baseline diagnostics test for your child.</p>
          </div>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-xs text-[#035c00] font-bold hover:underline"
          >
            ← Download another copy / Submit new request
          </button>
        </div>
      )}
    </div>
  );
}
