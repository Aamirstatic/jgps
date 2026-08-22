"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaUser, FaPhone, FaEnvelope, FaGraduationCap, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

interface AdmissionFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdmissionFormPopup({ isOpen, onClose }: AdmissionFormPopupProps) {
  const [formData, setFormData] = useState({
    studentName: '',
    fatherName: '',
    motherName: '',
    phone: '',
    email: '',
    address: '',
    classApplying: '',
    previousSchool: '',
    dateOfBirth: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create WhatsApp message
    const message = `
*NEW ADMISSION INQUIRY*

*Student Details:*
Name: ${formData.studentName}
Date of Birth: ${formData.dateOfBirth}
Class Applying For: ${formData.classApplying}

"" *Parent Details:*
Father's Name: ${formData.fatherName}
Mother's Name: ${formData.motherName}
Phone: ${formData.phone}
Email: ${formData.email}

  *Address:*
${formData.address}

 *Previous School:*
${formData.previousSchool || 'N/A'}

---
Sent from Jai Govind Public School Website
    `.trim();

    // WhatsApp number
    const whatsappNumber = '919997161490';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank');

    // Reset form
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        studentName: '',
        fatherName: '',
        motherName: '',
        phone: '',
        email: '',
        address: '',
        classApplying: '',
        previousSchool: '',
        dateOfBirth: '',
      });
      onClose();
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-[#035c00] to-[#024700] text-white p-6 rounded-t-2xl">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Admission Form</h2>
                    <p className="text-white/90 text-sm">Fill the form and submit via WhatsApp</p>
                  </div>
                  <button
                    onClick={onClose}
                    className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                  >
                    <FaTimes className="text-xl" />
                  </button>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {/* Student Details */}
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h3 className="text-lg font-bold text-[#035c00] mb-4 flex items-center gap-2">
                    <FaGraduationCap />
                    Student Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Student Name *
                      </label>
                      <div className="relative">
                        <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          name="studentName"
                          value={formData.studentName}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#035c00] focus:border-transparent outline-none transition-all"
                          placeholder="Enter student name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#035c00] focus:border-transparent outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Class Applying For *
                      </label>
                      <select
                        name="classApplying"
                        value={formData.classApplying}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#035c00] focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Select Class</option>
                        <option value="Nursery">Nursery</option>
                        <option value="LKG">LKG</option>
                        <option value="UKG">UKG</option>
                        <option value="Class 1">Class 1</option>
                        <option value="Class 2">Class 2</option>
                        <option value="Class 3">Class 3</option>
                        <option value="Class 4">Class 4</option>
                        <option value="Class 5">Class 5</option>
                        <option value="Class 6">Class 6</option>
                        <option value="Class 7">Class 7</option>
                        <option value="Class 8">Class 8</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Previous School
                      </label>
                      <input
                        type="text"
                        name="previousSchool"
                        value={formData.previousSchool}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#035c00] focus:border-transparent outline-none transition-all"
                        placeholder="Previous school name"
                      />
                    </div>
                  </div>
                </div>

                {/* Parent Details */}
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h3 className="text-lg font-bold text-[#035c00] mb-4 flex items-center gap-2">
                    <FaUser />
                    Parent Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Father&apos;s Name *
                      </label>
                      <input
                        type="text"
                        name="fatherName"
                        value={formData.fatherName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#035c00] focus:border-transparent outline-none transition-all"
                        placeholder="Enter father's name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Mother&apos;s Name *
                      </label>
                      <input
                        type="text"
                        name="motherName"
                        value={formData.motherName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#035c00] focus:border-transparent outline-none transition-all"
                        placeholder="Enter mother's name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          pattern="[0-9]{10}"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#035c00] focus:border-transparent outline-none transition-all"
                          placeholder="10-digit mobile number"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#035c00] focus:border-transparent outline-none transition-all"
                          placeholder="email@example.com"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h3 className="text-lg font-bold text-[#035c00] mb-4 flex items-center gap-2">
                    <FaMapMarkerAlt />
                    Address
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Complete Address *
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#035c00] focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Enter complete address with city and pincode"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-gradient-to-r from-[#035c00] to-[#024700] text-white py-4 px-6 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <FaWhatsapp className="text-2xl" />
                        Submit via WhatsApp
                      </>
                    )}
                  </button>
                  
                  <button
                    type="button"
                    onClick={onClose}
                    className="sm:w-32 bg-gray-200 text-gray-700 py-4 px-6 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                </div>

                <p className="text-sm text-gray-500 text-center">
                  Your form details will be sent to our WhatsApp number for quick response
                </p>
              </form>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
