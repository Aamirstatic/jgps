"use client";

import { schoolData } from "@/data/school-data";
import { generateFAQSchema } from "@/lib/schema";
import Hero from "@/components/Hero";
import Link from "next/link";
import ImageSlider from "@/components/ImageSlider";
import Image from '@/components/LazyImage';
import AdmissionFormPopup from "@/components/AdmissionFormPopup";
import LatestBlogCarousel from "@/components/LatestBlogCarousel";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FaGraduationCap, 
  FaSchool, 
  FaBookOpen, 
  FaQuoteLeft, 
  FaEnvelopeOpenText, 
  FaMapMarkedAlt, 
  FaChevronRight,
  FaCalendarAlt,
  FaHourglassHalf,
  FaClipboardCheck,
  FaTrophy
} from 'react-icons/fa';

// Animation configs
const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true, margin: "-100px" }
};

const cardAnimate = {
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

const examTrackerData = [
  {
    name: "Jawahar Navodaya (JNV)",
    badge: "JNVST 2027-28",
    status: "Apply Now — Last Date 31 July!",
    statusColor: "bg-red-100 text-red-800 border-red-200",
    openDate: "6 July 2026",
    closeDate: "31 July 2026",
    examDate: "28 November 2026",
    resultDate: "March/April 2027",
    link: "/coaching/navodaya-vidyalaya"
  },
  {
    name: "Sainik School (AISSEE)",
    badge: "AISSEE 2027",
    status: "Form Coming Soon",
    statusColor: "bg-orange-100 text-orange-800 border-orange-200",
    openDate: "August 2026 (Expected)",
    closeDate: "November 2026 (Expected)",
    examDate: "January 2027 (Last Week)",
    resultDate: "March 2027",
    link: "/coaching/sainik-school"
  },
  {
    name: "Rashtriya Military School",
    badge: "RMS CET 2027",
    status: "Form Coming Soon",
    statusColor: "bg-orange-100 text-orange-800 border-orange-200",
    openDate: "September 2026 (Expected)",
    closeDate: "October 2026 (Expected)",
    examDate: "December 2026",
    resultDate: "February 2027",
    link: "/coaching/military-school"
  },
  {
    name: "Vidyagyan School",
    badge: "Class 6 (Rural UP)",
    status: "Form Coming Soon",
    statusColor: "bg-orange-100 text-orange-800 border-orange-200",
    openDate: "September 2026 (Expected)",
    closeDate: "November 2026 (Expected)",
    examDate: "December 2026",
    resultDate: "February 2027",
    link: "/coaching/vidyagyan-school"
  },
  {
    name: "AMU School Admission",
    badge: "Class 6 & 9",
    status: "Form Coming Soon",
    statusColor: "bg-orange-100 text-orange-800 border-orange-200",
    openDate: "January 2027 (Expected)",
    closeDate: "March 2027 (Expected)",
    examDate: "March/April 2027",
    resultDate: "June 2027",
    link: "/coaching/amu-entrance"
  },
  {
    name: "Jamia Millia Islamia (JMI)",
    badge: "JMI Class 6 & 9",
    status: "Form Coming Soon",
    statusColor: "bg-orange-100 text-orange-800 border-orange-200",
    openDate: "February 2027 (Expected)",
    closeDate: "March 2027 (Expected)",
    examDate: "April/May 2027",
    resultDate: "June 2027",
    link: "/coaching/jmi-entrance"
  }
];

export default function HomeClient() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [trackerData, setTrackerData] = useState(examTrackerData);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const homeFaqs = [
    {
      question: "Which is the best entrance coaching school in Joya, Amroha?",
      answer: "Jai Govind Public School (JGPS) is the top school in Joya, Amroha for entrance exam coaching. We prepare students for AMU, JMI, Sainik School, Military School (RMS), and Vidyagyan. Our focused teaching and hostel facilities help students get selected."
    },
    {
      question: "What classes can join entrance exam coaching at JGPS?",
      answer: "Students in Class 5 can join our Class 6 entrance batch. Students in Class 8 can join our Class 9 entrance batch. Each batch is built to match the exact exam pattern."
    },
    {
      question: "Does the school provide hostel facilities for coaching students?",
      answer: "Yes. JGPS has safe and clean hostel facilities for boys. The hostel includes night study time, sports, good food, and full supervision. Everything your child needs is on campus."
    },
    {
      question: "How does the Live Entrance Exam Tracker help parents?",
      answer: "Our Live Entrance Exam Tracker shows form dates, last dates, exam dates, and result dates for AISSEE, AMU, JMI, and Vidyagyan. You will never miss an important deadline again."
    }
  ];

  useEffect(() => {
    if (!schoolData.googleSheetCsvUrl) return;

    async function loadSpreadsheetData() {
      try {
        const res = await fetch(schoolData.googleSheetCsvUrl);
        if (!res.ok) throw new Error("Failed to fetch spreadsheet data");
        const csvText = await res.text();
        
        // Simple and robust CSV line parser
        const lines = csvText.split(/\r?\n/);
        if (lines.length <= 1) return;
        
        const headers = lines[0].split(',').map(h => h.trim().toLowerCase().replace(/"/g, ''));
        const parsedRows = [];
        
        for (let i = 1; i < lines.length; i++) {
          const line = lines[i].trim();
          if (!line) continue;
          
          // Split columns while respecting quoted values (e.g. status tags or dates with commas)
          const values: string[] = [];
          let currentField = '';
          let insideQuotes = false;
          for (let j = 0; j < line.length; j++) {
            const char = line[j];
            if (char === '"') {
              insideQuotes = !insideQuotes;
            } else if (char === ',' && !insideQuotes) {
              values.push(currentField.trim());
              currentField = '';
            } else {
              currentField += char;
            }
          }
          values.push(currentField.trim());
          
          const rowData: any = {};
          headers.forEach((header, index) => {
            let val = values[index] || '';
            // Strip surrounding quotes if present
            if (val.startsWith('"') && val.endsWith('"')) {
              val = val.substring(1, val.length - 1);
            }
            rowData[header] = val;
          });
          
          if (rowData.name) {
            // Determine styling color based on status text
            let statusColor = "bg-orange-100 text-orange-800 border-orange-200";
            const status = (rowData.status || "").toLowerCase();
            if (status.includes("open") || status.includes("active") || status.includes("start")) {
              statusColor = "bg-green-100 text-green-800 border-green-200";
            } else if (status.includes("close") || status.includes("end") || status.includes("declared") || status.includes("over")) {
              statusColor = "bg-red-100 text-red-800 border-red-200";
            }
            
              parsedRows.push({
              name: rowData.name,
              badge: rowData.badge || "",
              status: rowData.status || "Form Coming Soon",
              statusColor: rowData.statuscolor || statusColor,
              openDate: rowData.opendate || "",
              closeDate: rowData.closedate || "",
              examDate: rowData.examdate || "",
              resultDate: rowData.resultdate || "",
              link: rowData.link || "/coaching"
            });
          }
        }
        
        if (parsedRows.length > 0) {
          setTrackerData(parsedRows);
        }
      } catch (error) {
        console.error("Error loading exam tracker from Google Sheet:", error);
      }
    }
    
    loadSpreadsheetData();
  }, []);

  return (
    <>
      <Hero />

      {/* Entrance Exam Tracker Section */}
      <section className="py-16 bg-white relative overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="text-[#035c00] font-bold text-xs uppercase tracking-widest bg-[#035c00]/10 px-4 py-1.5 rounded-full mb-3 inline-block">
              Live Exam Dates
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#035c00] mb-4">
              What are the entrance exam dates for 2027?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with form dates, exam schedules, and result dates for all entrance tests.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trackerData.map((exam, idx) => (
              <motion.div
                key={idx}
                variants={cardAnimate}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, margin: "-100px" }}
                className="bg-gray-50 border border-gray-150 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start gap-2 mb-4">
                    <div>
                      <span className="text-xs font-semibold text-gray-400 block mb-0.5">{exam.badge}</span>
                      <h3 className="text-lg font-bold text-gray-900 leading-snug">{exam.name}</h3>
                    </div>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${exam.statusColor} whitespace-nowrap`}>
                      {exam.status}
                    </span>
                  </div>

                  <div className="space-y-3 py-3 border-t border-b border-gray-200/60 my-4 text-xs text-gray-600">
                    <div className="flex items-center gap-3">
                      <FaCalendarAlt className="text-[#035c00] text-sm flex-shrink-0" />
                      <div>
                        <span className="text-gray-400 block">Form Open Date:</span>
                        <span className="font-semibold text-gray-800">{exam.openDate}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaHourglassHalf className="text-[#035c00] text-sm flex-shrink-0" />
                      <div>
                        <span className="text-gray-400 block">Last Date to Apply:</span>
                        <span className="font-semibold text-gray-800">{exam.closeDate}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaClipboardCheck className="text-[#035c00] text-sm flex-shrink-0" />
                      <div>
                        <span className="text-gray-400 block">Written Exam Date:</span>
                        <span className="font-semibold text-gray-800">{exam.examDate}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaTrophy className="text-[#035c00] text-sm flex-shrink-0" />
                      <div>
                        <span className="text-gray-400 block">Result Date:</span>
                        <span className="font-semibold text-gray-800">{exam.resultDate}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  href={exam.link}
                  className="w-full mt-2 py-2.5 px-4 bg-white hover:bg-[#035c00] hover:text-white text-[#035c00] font-bold text-xs rounded-xl border-2 border-[#035c00] text-center transition-all shadow-sm flex items-center justify-center gap-1.5"
                >
                  View Details & Papers
                  <FaChevronRight className="text-[10px]" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Form Popup */}
      <AdmissionFormPopup isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

      {/* Modern Image Slider Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="text-[#035c00] font-bold text-xs uppercase tracking-widest bg-[#035c00]/10 px-4 py-1.5 rounded-full mb-3 inline-block">
              Campus Photos
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#035c00] mb-4">What does JGPS campus look like?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See our campus, classrooms, labs, and sports areas in photos.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <ImageSlider />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Blurry decorative background shapes */}
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#035c00]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-[#035c00] font-bold text-xs uppercase tracking-widest bg-[#035c00]/10 px-4 py-1.5 rounded-full mb-3 inline-block">
              Why JGPS?
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#035c00] mb-4">Why should parents choose JGPS?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We give your child the best education, modern facilities, and expert entrance coaching.
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Feature 1 */}
            <motion.div 
              variants={cardAnimate}
              className="p-8 border border-gray-150 rounded-2xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between border-t-4 border-t-[#035c00]"
            >
              <div>
                <div className="w-14 h-14 bg-[#035c00]/10 rounded-xl flex items-center justify-center mb-6 text-[#035c00]">
                  <FaGraduationCap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Education</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Our CBSE-based curriculum focuses on strong basics, clear concepts, and practical learning for every student.
                </p>
              </div>
              <Link href="/academics" className="inline-flex items-center text-[#035c00] font-bold text-sm hover:underline">
                Explore Academics <span className="ml-1">&rarr;</span>
              </Link>
            </motion.div>
            
            {/* Feature 2 */}
            <motion.div 
              variants={cardAnimate}
              className="p-8 border border-gray-150 rounded-2xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between border-t-4 border-t-yellow-500"
            >
              <div>
                <div className="w-14 h-14 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-6 text-yellow-600">
                  <FaSchool className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Modern Facilities</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Equipped with modern airy classrooms, a high-tech computer laboratory, science setup, a well-stocked library, and safe campus zones.
                </p>
              </div>
              <Link href="/facilities" className="inline-flex items-center text-yellow-600 font-bold text-sm hover:underline">
                Explore Facilities <span className="ml-1">&rarr;</span>
              </Link>
            </motion.div>
            
            {/* Feature 3 */}
            <motion.div 
              variants={cardAnimate}
              className="p-8 border border-gray-150 rounded-2xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between border-t-4 border-t-[#035c00]"
            >
              <div>
                <div className="w-14 h-14 bg-[#035c00]/10 rounded-xl flex items-center justify-center mb-6 text-[#035c00]">
                  <FaBookOpen className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Special Coaching</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Specialized coaching programs for top school entrances (AMU, Jamia, Sainik, Military, Vidyagyan) for Classes 6 and 9.
                </p>
              </div>
              <Link href="/coaching" className="inline-flex items-center text-[#035c00] font-bold text-sm hover:underline">
                Explore Coaching <span className="ml-1">&rarr;</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-[#035c00] to-[#024700] text-white relative overflow-hidden">
        {/* Abstract design elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <motion.div variants={cardAnimate} className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:scale-[1.03] transition-all duration-305">
              <div className="text-4xl md:text-5xl font-extrabold text-yellow-300 mb-2">15+</div>
              <div className="text-xs md:text-sm font-semibold text-white/90 uppercase tracking-wider">Years of Educational Glory</div>
            </motion.div>
            <motion.div variants={cardAnimate} className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:scale-[1.03] transition-all duration-305">
              <div className="text-4xl md:text-5xl font-extrabold text-yellow-300 mb-2">500+</div>
              <div className="text-xs md:text-sm font-semibold text-white/90 uppercase tracking-wider">Entrance Selections Tally</div>
            </motion.div>
            <motion.div variants={cardAnimate} className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:scale-[1.03] transition-all duration-305">
              <div className="text-4xl md:text-5xl font-extrabold text-yellow-300 mb-2">100%</div>
              <div className="text-xs md:text-sm font-semibold text-white/90 uppercase tracking-wider">GPS Gated Transport Safety</div>
            </motion.div>
            <motion.div variants={cardAnimate} className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:scale-[1.03] transition-all duration-305">
              <div className="text-4xl md:text-5xl font-extrabold text-yellow-300 mb-2">25:1</div>
              <div className="text-xs md:text-sm font-semibold text-white/90 uppercase tracking-wider">Personalized Attention Ratio</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Academic Programs Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-[#035c00] font-bold text-xs uppercase tracking-widest bg-[#035c00]/10 px-4 py-1.5 rounded-full mb-3 inline-block">
              Core Programs
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#035c00] mb-4">What classes and programs does JGPS offer?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our school is built to help your child learn, grow, and develop strong values.
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Nursery */}
            <motion.div 
              variants={cardAnimate}
              className="bg-white p-8 rounded-2xl border border-gray-150 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border-t-4 border-t-[#035c00] flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold text-[#035c00] uppercase tracking-wider bg-[#035c00]/5 px-2.5 py-1 rounded-md mb-4 inline-block">
                  Foundation
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Nursery & Pre-Primary</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {schoolData.academics.curriculum.nursery}
                </p>
                <ul className="space-y-3.5 text-sm text-gray-600 mb-8">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#035c00] mr-2.5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Early language, speech, and number foundations</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#035c00] mr-2.5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Creative activity classes & motor-skill play blocks</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#035c00] mr-2.5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Social adjustment & emotional growth circles</span>
                  </li>
                </ul>
              </div>
              <Link href="/academics" className="inline-flex items-center text-[#035c00] font-bold text-sm hover:underline mt-auto">
                Read Details <span className="ml-1">&rarr;</span>
              </Link>
            </motion.div>
            
            {/* Primary */}
            <motion.div 
              variants={cardAnimate}
              className="bg-white p-8 rounded-2xl border border-gray-150 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border-t-4 border-t-yellow-500 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold text-yellow-600 uppercase tracking-wider bg-yellow-500/5 px-2.5 py-1 rounded-md mb-4 inline-block">
                  Primary Level
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Primary Classes (1st - 5th)</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {schoolData.academics.curriculum.primary}
                </p>
                <ul className="space-y-3.5 text-sm text-gray-600 mb-8">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#035c00] mr-2.5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Core subjects: Languages, Math, and EVS</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#035c00] mr-2.5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Integrated arts, crafts, and physical health drills</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#035c00] mr-2.5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Project activity sheets & basic computer drills</span>
                  </li>
                </ul>
              </div>
              <Link href="/academics" className="inline-flex items-center text-yellow-600 font-bold text-sm hover:underline mt-auto">
                Read Details <span className="ml-1">&rarr;</span>
              </Link>
            </motion.div>
            
            {/* Middle */}
            <motion.div 
              variants={cardAnimate}
              className="bg-white p-8 rounded-2xl border border-gray-150 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border-t-4 border-t-[#035c00] flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold text-[#035c00] uppercase tracking-wider bg-[#035c00]/5 px-2.5 py-1 rounded-md mb-4 inline-block">
                  Middle School
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Middle Classes (6th - 8th)</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {schoolData.academics.curriculum.middle}
                </p>
                <ul className="space-y-3.5 text-sm text-gray-600 mb-8">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#035c00] mr-2.5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Advanced Sciences, Mathematics, & Social Studies</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#035c00] mr-2.5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Hands-on computer coding & digital typing literacy</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#035c00] mr-2.5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Advanced sports meet, debates & science quiz meets</span>
                  </li>
                </ul>
              </div>
              <Link href="/academics" className="inline-flex items-center text-[#035c00] font-bold text-sm hover:underline mt-auto">
                Read Details <span className="ml-1">&rarr;</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Coaching Program Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-[#035c00] to-[#024700] rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="hidden lg:block lg:col-span-2 relative group overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-all duration-500"></div>
                <Image
                  src="/images/coaching.avif"
                  alt="Entrance Exam Coaching Classes at JGPS Amroha Joya"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="p-8 md:p-12 lg:col-span-3 text-white">
                <span className="inline-block bg-yellow-400 text-[#035c00] text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider animate-pulse">
                  Admissions Open 2027-28
                </span>
                
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">How does JGPS coaching help students crack entrance exams?</h2>
                <p className="text-lg text-white/90 mb-8 leading-relaxed">
                  Give your child the best chance to get into top schools with our coaching programs.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/15 hover:bg-white/15 transition-all">
                    <h3 className="font-bold text-lg text-yellow-300 mb-2">AMU & JMI Entrance</h3>
                    <p className="text-xs text-white/80 leading-relaxed">
                      Complete preparation for Aligarh Muslim University and Jamia Millia Islamia entrance exams.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/15 hover:bg-white/15 transition-all">
                    <h3 className="font-bold text-lg text-yellow-300 mb-2">Sainik School</h3>
                    <p className="text-xs text-white/80 leading-relaxed">
                      Full preparation for AISSEE maths, reasoning, and language sections.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/15 hover:bg-white/15 transition-all">
                    <h3 className="font-bold text-lg text-yellow-300 mb-2">Military School</h3>
                    <p className="text-xs text-white/80 leading-relaxed">
                      Expert coaching for Rashtriya Military School (RMS CET) entrance exam.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/15 hover:bg-white/15 transition-all">
                    <h3 className="font-bold text-lg text-yellow-300 mb-2">Vidyagyan School</h3>
                    <p className="text-xs text-white/80 leading-relaxed">
                      Two-stage selection process coaching for rural scholarship students.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link 
                    href="/coaching" 
                    className="bg-white text-[#035c00] hover:bg-yellow-300 hover:text-[#035c00] font-bold py-3.5 px-8 rounded-xl text-center transition-all duration-300 shadow-md hover:-translate-y-0.5"
                  >
                    Explore Entrance Exam Coaching &rarr;
                  </Link>
                  <button
                    onClick={() => setIsFormOpen(true)}
                    className="border-2 border-white/85 text-white hover:bg-white/10 font-bold py-3.5 px-8 rounded-xl text-center transition-all duration-300 cursor-pointer"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-[#035c00] font-bold text-xs uppercase tracking-widest bg-[#035c00]/10 px-4 py-1.5 rounded-full mb-3 inline-block">
              Parent Reviews
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#035c00] mb-4">What do parents say about JGPS?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What parents say about our school and coaching programs.
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {schoolData.testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                variants={cardAnimate}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-150 hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative hover:-translate-y-1.5"
              >
                <div>
                  <FaQuoteLeft className="text-yellow-500/25 text-4xl mb-4" />
                  <p className="text-gray-600 text-sm italic leading-relaxed mb-6">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-55">
                  <div className="w-10 h-10 bg-[#035c00] text-yellow-300 rounded-xl flex items-center justify-center font-bold text-base shadow-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-2xs text-gray-400 uppercase tracking-widest mt-0.5">Verified Parent</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HelpDesk Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-[#035c00] font-bold text-xs uppercase tracking-widest bg-[#035c00]/10 px-4 py-1.5 rounded-full mb-3 inline-block">
              Help Center
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#035c00] mb-4">How can we help you?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about admissions, transport, or fees? We are here to help.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-gray-150"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#035c00] via-[#035c00]/95 to-[#024700]/90 z-10"></div>
            
            <div className="relative z-20">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-2 relative group overflow-hidden">
                  <div className="hidden lg:block relative h-full w-full">
                    <Image 
                      src="/images/helpdesk.avif" 
                      alt="School HelpDesk at JGPS Joya Amroha"
                      fill
                      className="object-cover transform group-hover:scale-103 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-[#035c00]/15"></div>
                  </div>
                  
                  <div className="lg:hidden relative h-72 w-full">
                    <Image 
                      src="/images/helpdesk.avif" 
                      alt="School HelpDesk at JGPS Joya Amroha"
                      fill
                      className="object-cover object-center"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-[#035c00]/15"></div>
                  </div>
                </div>
                
                <div className="lg:col-span-3 p-8 md:p-12 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-2">
                    <span className="w-3 h-3 bg-yellow-400 rounded-full animate-ping"></span>
                    How Can We Help?
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 hover:bg-white/15 transition-all">
                      <div className="w-9 h-9 bg-yellow-400/20 rounded-lg flex items-center justify-center mb-3 text-yellow-300">
                        <FaSchool className="w-5 h-5" />
                      </div>
                      <h4 className="text-lg font-bold mb-1.5">Admission Inquiries</h4>
                      <p className="text-xs text-white/80 leading-relaxed mb-3">
                        Details about class registration, required documents, and admission process.
                      </p>
                      <Link href="/admission" className="text-yellow-300 hover:underline text-xs font-bold inline-flex items-center gap-1">
                        View Details <FaChevronRight className="w-2.5 h-2.5" />
                      </Link>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 hover:bg-white/15 transition-all">
                      <div className="w-9 h-9 bg-yellow-400/20 rounded-lg flex items-center justify-center mb-3 text-yellow-300">
                        <FaGraduationCap className="w-5 h-5" />
                      </div>
                      <h4 className="text-lg font-bold mb-1.5">Academic & Coaching</h4>
                      <p className="text-xs text-white/80 leading-relaxed mb-3">
                        CBSE class syllabus details and coaching batch schedules.
                      </p>
                      <Link href="/academics" className="text-yellow-300 hover:underline text-xs font-bold inline-flex items-center gap-1">
                        View Details <FaChevronRight className="w-2.5 h-2.5" />
                      </Link>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 hover:bg-white/15 transition-all">
                      <div className="w-9 h-9 bg-yellow-400/20 rounded-lg flex items-center justify-center mb-3 text-yellow-300">
                        <FaEnvelopeOpenText className="w-5 h-5" />
                      </div>
                      <h4 className="text-lg font-bold mb-1.5">Email Support</h4>
                      <p className="text-xs text-white/80 leading-relaxed mb-3">
                        Send us an email and we will reply within 24 hours.
                      </p>
                      <span className="text-yellow-300 text-xs font-bold">jaigovindschool@gmail.com</span>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 hover:bg-white/15 transition-all">
                      <div className="w-9 h-9 bg-yellow-400/20 rounded-lg flex items-center justify-center mb-3 text-yellow-300">
                        <FaMapMarkedAlt className="w-5 h-5" />
                      </div>
                      <h4 className="text-lg font-bold mb-1.5">Visit Campus</h4>
                      <p className="text-xs text-white/80 leading-relaxed mb-3">
                        Get directions to visit our campus and meet our team.
                      </p>
                      <Link href="/contact" className="text-yellow-300 hover:underline text-xs font-bold inline-flex items-center gap-1">
                        Contact Us <FaChevronRight className="w-2.5 h-2.5" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <Link 
                      href="/about#helpdesk" 
                      className="inline-block bg-white text-[#035c00] hover:bg-yellow-300 hover:text-[#035c00] font-bold py-3.5 px-8 rounded-xl transition-all duration-300 text-center shadow-md text-sm"
                    >
                      View All Details
                    </Link>
                    <Link 
                      href="/contact" 
                      className="inline-block bg-transparent border-2 border-white hover:bg-white/10 font-bold py-3.5 px-8 rounded-xl transition-all duration-300 text-center text-sm"
                    >
                      Contact Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Guides & Latest Insights Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-[#035c00] font-bold text-xs uppercase tracking-widest bg-[#035c00]/10 px-4 py-1.5 rounded-full mb-3 inline-block">
              Exam Guides
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">What exam guides are available?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Read expert guides on exam patterns, preparation tips, and admission strategies.
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Card 1 */}
            <motion.div 
              variants={cardAnimate}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-150 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="p-6 md:p-8">
                <span className="bg-[#035c00]/10 text-[#035c00] font-bold px-2.5 py-1 rounded text-2xs uppercase tracking-wider mb-4 inline-block">
                  Navodaya (JNVST)
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-[#035c00] transition-colors leading-snug">
                  <Link href="/blog/jnvst-class-6-admission-notification-2027-28">
                    JNVST Class 6 Admission 2027-28: NVS Notification Out!
                  </Link>
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  Check the NVS form dates, age rules, rural quota, and exam syllabus for Class 6.
                </p>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400 font-medium">
                <span>5 mins read</span>
                <Link href="/blog/jnvst-class-6-admission-notification-2027-28" className="text-[#035c00] font-bold hover:underline">
                  Read Article &rarr;
                </Link>
              </div>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div 
              variants={cardAnimate}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-150 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="p-6 md:p-8">
                <span className="bg-yellow-500/5 text-yellow-600 font-bold px-2.5 py-1 rounded text-2xs uppercase tracking-wider mb-4 inline-block">
                  Sainik School (AISSEE)
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-[#035c00] transition-colors leading-snug">
                  <Link href="/blog/sainik-school-admission-aissee-2027-28-guide">
                    Sainik School Admission 2027-28: AISSEE Complete Guide
                  </Link>
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  Complete guide for AISSEE 2027 — age rules, marks distribution, OMR tips, and math prep.
                </p>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400 font-medium">
                <span>5 mins read</span>
                <Link href="/blog/sainik-school-admission-aissee-2027-28-guide" className="text-[#035c00] font-bold hover:underline">
                  Read Article &rarr;
                </Link>
              </div>
            </motion.div>
            
            {/* Card 3 */}
            <motion.div 
              variants={cardAnimate}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-150 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="p-6 md:p-8">
                <span className="bg-[#035c00]/10 text-[#035c00] font-bold px-2.5 py-1 rounded text-2xs uppercase tracking-wider mb-4 inline-block">
                  Vidyagyan Prep
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-[#035c00] transition-colors leading-snug">
                  <Link href="/blog/vidyagyan-school-admission-eligibility-syllabus">
                    Vidyagyan School Admission & Scholarship: Eligibility Rules
                  </Link>
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  Vidyagyan eligibility rules for rural UP students, income certificate needs, and exam format.
                </p>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400 font-medium">
                <span> 6 mins read</span>
                <Link href="/blog/vidyagyan-school-admission-eligibility-syllabus" className="text-[#035c00] font-bold hover:underline">
                  Read Article &rarr;
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Latest Blog Carousel Section */}
      <LatestBlogCarousel />

      {/* Important Links Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="text-[#035c00] font-bold text-xs uppercase tracking-widest bg-[#035c00]/10 px-4 py-1.5 rounded-full mb-3 inline-block">
              Quick Links
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#035c00] mb-3">Quick Links</h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto">
              Coaching, study materials, admission info — everything in one place.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

            {/* Coaching Programs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0 }}
              className="bg-gradient-to-br from-[#035c00] to-[#024700] rounded-2xl p-6 shadow-lg text-white"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center text-xl"></div>
                <h3 className="text-lg font-bold">Coaching Programs</h3>
              </div>
              <ul className="space-y-2.5">
                {[
                  { label: "AMU Class 6 & 9 Coaching", href: "/coaching/amu-entrance" },
                  { label: "JMI Entrance Coaching", href: "/coaching/jmi-entrance" },
                  { label: "Sainik School Coaching", href: "/coaching/sainik-school" },
                  { label: "Military School (RMS) Coaching", href: "/coaching/military-school" },
                  { label: "Vidyagyan School Coaching", href: "/coaching/vidyagyan-school" },
                  { label: "Navodaya (JNVST) Coaching", href: "/coaching/navodaya-vidyalaya" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2.5 text-sm text-white/85 hover:text-yellow-300 transition-colors group"
                    >
                      <FaChevronRight className="text-[9px] text-yellow-400 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/coaching"
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-yellow-300 hover:text-yellow-200 transition-colors border-t border-white/15 pt-4 w-full"
              >
                View All Coaching Programs →
              </Link>
            </motion.div>

            {/* Study Resources */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-yellow-50 rounded-xl flex items-center justify-center text-xl"></div>
                <h3 className="text-lg font-bold text-gray-900">Study Materials</h3>
              </div>
              <ul className="space-y-2.5">
                {[
                  { label: "Syllabus & Study Materials", href: "/resources/syllabus-and-study-materials" },
                  { label: "Navodaya JNVST Papers", href: "/resources/navodaya-class-6-papers/" },
                  { label: "Sainik School Question Papers", href: "/resources/sainik-school-question-papers/" },
                  { label: "AMU Entrance Syllabus & Papers", href: "/resources/amu-class-6-syllabus-and-papers/" },
                  { label: "Vidyagyan Syllabus & Eligibility", href: "/resources/vidyagyan-school-syllabus-and-eligibility/" },
                  { label: "RMS CET Military School Syllabus", href: "/resources/rms-cet-military-school-syllabus/" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2.5 text-sm text-gray-600 hover:text-[#035c00] transition-colors group"
                    >
                      <FaChevronRight className="text-[9px] text-[#035c00] flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/resources"
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#035c00] hover:underline border-t border-gray-100 pt-4 w-full"
              >
                Browse All Resources →
              </Link>
            </motion.div>

            {/* Admission + Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-5"
            >
              {/* Admission */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-xl"></div>
                  <h3 className="text-lg font-bold text-gray-900">Admissions</h3>
                </div>
                <ul className="space-y-2.5">
                  {[
                    { label: "Admission Portal", href: "/admission" },
                    { label: "Admission Guidelines", href: "/admission/guidelines" },
                    { label: "Eligibility Checker", href: "/entrance-eligibility-checker" },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-2.5 text-sm text-gray-600 hover:text-[#035c00] transition-colors group"
                      >
                        <FaChevronRight className="text-[9px] text-[#035c00] flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links */}
              <div className="bg-[#035c00]/5 rounded-2xl p-6 border border-[#035c00]/10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-[#035c00]/10 rounded-xl flex items-center justify-center text-xl"></div>
                  <h3 className="text-lg font-bold text-gray-900">Quick Links</h3>
                </div>
                <ul className="space-y-2.5">
                  {[
                    { label: "About Our School", href: "/about" },
                    { label: "School Facilities", href: "/facilities" },
                    { label: "Bus Transport Routes", href: "/facilities/school-bus-transport" },
                    { label: "Photo Gallery", href: "/gallery" },
                    { label: "Contact Us", href: "/contact" },
                    { label: "FAQ", href: "/faq" },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-2.5 text-sm text-gray-600 hover:text-[#035c00] transition-colors group"
                      >
                        <FaChevronRight className="text-[9px] text-[#035c00] flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* External / Official Links */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-xl">🌐</div>
                <h3 className="text-lg font-bold text-gray-900">Official Websites</h3>
              </div>

              <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                Direct links to official government exam & admission portals.
              </p>

              <ul className="space-y-3 flex-1">
                {[
                  {
                    label: "NVS — Navodaya Vidyalaya (JNVST)",
                    href: "https://navodaya.gov.in",
                    tag: "JNVST",
                    tagColor: "bg-purple-100 text-purple-700",
                  },
                  {
                    label: "sainikschooladmission.in (AISSEE)",
                    href: "https://sainikschooladmission.in",
                    tag: "Sainik",
                    tagColor: "bg-blue-100 text-blue-700",
                  },
                  {
                    label: "AMU — Aligarh Muslim University",
                    href: "https://www.amu.ac.in",
                    tag: "AMU",
                    tagColor: "bg-green-100 text-green-700",
                  },
                  {
                    label: "JMI — Jamia Millia Islamia",
                    href: "https://www.jmi.ac.in",
                    tag: "JMI",
                    tagColor: "bg-teal-100 text-teal-700",
                  },
                  {
                    label: "RMS — Rashtriya Military Schools",
                    href: "https://rashtriyamilitaryschools.in",
                    tag: "RMS",
                    tagColor: "bg-red-100 text-red-700",
                  },
                  {
                    label: "Vidyagyan School (HCL Foundation)",
                    href: "https://www.vidyagyan.in",
                    tag: "VGS",
                    tagColor: "bg-orange-100 text-orange-700",
                  },
                  {
                    label: "NTA — National Testing Agency",
                    href: "https://nta.ac.in",
                    tag: "NTA",
                    tagColor: "bg-indigo-100 text-indigo-700",
                  },
                  {
                    label: "CBSE Official Website",
                    href: "https://cbse.gov.in",
                    tag: "CBSE",
                    tagColor: "bg-yellow-100 text-yellow-700",
                  },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-2 text-sm text-gray-600 hover:text-blue-700 transition-colors group"
                    >
                      <span className="flex items-center gap-2">
                        <svg className="w-3 h-3 text-blue-400 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        {link.label}
                      </span>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${link.tagColor}`}>
                        {link.tag}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <p className="text-[10px] text-gray-400 mt-5 pt-4 border-t border-gray-100 leading-relaxed">
                These are external government websites. JGPS is not connected to them.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="text-[#035c00] font-bold text-xs uppercase tracking-widest bg-[#035c00]/10 px-4 py-1.5 rounded-full mb-3 inline-block">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get quick answers about our school, coaching, and admissions.
            </p>
          </motion.div>

          <div className="space-y-4">
            {homeFaqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="border border-gray-150 rounded-2xl overflow-hidden bg-gray-50 transition-all duration-300 shadow-sm"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left p-6 font-bold text-gray-900 flex justify-between items-center gap-4 hover:bg-gray-100/50 transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base">{faq.question}</span>
                    <span className={`text-[#035c00] transition-transform duration-300 font-extrabold ${isOpen ? 'rotate-180' : ''}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-60 border-t border-gray-150' : 'max-h-0'
                    }`}
                  >
                    <p className="p-6 text-sm text-gray-600 leading-relaxed bg-white">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* JSON-LD FAQ Schema injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(homeFaqs)) }}
      />

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-gradient-to-br from-[#035c00] to-[#023b00] rounded-3xl shadow-2xl relative overflow-hidden"
          >
            {/* Floating blurry shapes */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="px-6 py-16 md:p-16 text-center text-white relative z-10">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">How to join JGPS?</h2>
              <p className="text-lg text-white/85 mb-8 max-w-2xl mx-auto">
                Start your child&apos;s journey with us. Admissions are open for 2027-28. Book your seat today.
              </p>
              <button
                onClick={() => setIsFormOpen(true)}
                className="inline-block bg-yellow-400 text-[#035c00] hover:bg-yellow-300 font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
              >
                Apply for Admission Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
