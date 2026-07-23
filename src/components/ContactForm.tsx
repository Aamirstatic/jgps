"use client";

import { useState } from 'react';
import { FaWhatsapp, FaUser, FaEnvelope, FaPhone, FaComment } from 'react-icons/fa';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create WhatsApp message
    const message = `
📧 *NEW CONTACT INQUIRY*

 *Name:* ${formData.name}
📦 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone}

💬 *Message:*
${formData.message}

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
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 1000);
  };
  
  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="text-center mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-[#035c00] mb-2">Contact Us</h3>
          <p className="text-gray-600">Send us a message via WhatsApp</p>
        </div>
        
        <div>
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#035c00] focus:border-[#035c00] outline-none transition-all"
              placeholder="Enter your name"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#035c00] focus:border-[#035c00] outline-none transition-all"
              placeholder="your@email.com"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#035c00] focus:border-[#035c00] outline-none transition-all"
              placeholder="10-digit mobile number"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <FaComment className="absolute left-4 top-4 text-gray-400" />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#035c00] focus:border-[#035c00] outline-none transition-all resize-none"
              placeholder="Type your message here..."
            ></textarea>
          </div>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-[#035c00] to-[#024700] hover:from-[#024700] hover:to-[#035c00] text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg shadow-lg hover:shadow-xl"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <FaWhatsapp className="text-2xl" />
              Send via WhatsApp
            </>
          )}
        </button>

        <p className="text-sm text-gray-500 text-center">
          Your message will be sent to our WhatsApp for quick response
        </p>
      </form>
    </div>
  );
} 