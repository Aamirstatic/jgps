import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { schoolData } from '@/data/school-data';

export default function TopHeader() {
  return (
    <div className="bg-gradient-to-r from-[#035c00] to-[#023b00] border-b border-[#024700] py-2.5 animate-fade-in-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-2">
          {/* Contact Info - Left */}
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-4 gap-y-1 sm:gap-x-6">
            <a 
              href="tel:+919997161490"
              className="flex items-center gap-2 text-white/80 hover:text-yellow-300 transition-colors group"
            >
              <FaPhone className="text-yellow-300 text-xs" />
              <span className="font-medium">Manager: +91 9997161490</span>
            </a>

            <div className="flex items-center gap-2">
              <a 
                href="tel:+919412137554"
                className="flex items-center gap-2 text-white/80 hover:text-yellow-300 transition-colors group"
              >
                <FaPhone className="text-yellow-300 text-xs" />
                <span className="font-medium">Principal: +91 9412137554</span>
              </a>

              <a 
                href="https://wa.me/919412137554"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-green-400 hover:text-green-300 transition-colors"
                title="Chat on WhatsApp"
              >
                <FaWhatsapp className="text-base" />
              </a>
            </div>
            
            <a 
              href="mailto:jaigovindschool@gmail.com"
              className="hidden lg:flex items-center gap-2 text-white/80 hover:text-yellow-300 transition-colors group"
            >
              <FaEnvelope className="text-yellow-300 text-xs" />
              <span className="font-medium">jaigovindschool@gmail.com</span>
            </a>
          </div>

          {/* Announcement - Center */}
          <div className="hidden xl:flex items-center gap-2 bg-gradient-to-r from-[#035c00] to-[#024700] text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-sm animate-pulse-shadow">
            <span>Admissions Open 2026-27</span>
          </div>

          {/* Social Links - Right */}
          <div className="flex items-center gap-3">
            <a
              href={schoolData.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full bg-white/15 hover:bg-yellow-400 text-white/80 hover:text-[#035c00] flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
              aria-label="Visit our Facebook profile"
            >
              <FaFacebook size={14} />
            </a>
            <a
              href={schoolData.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full bg-white/15 hover:bg-yellow-400 text-white/80 hover:text-[#035c00] flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
              aria-label="Visit our Instagram profile"
            >
              <FaInstagram size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
