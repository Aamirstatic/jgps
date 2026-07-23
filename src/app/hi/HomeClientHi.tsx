"use client";

import { schoolData } from "@/data/school-data";
import { generateFAQSchema } from "@/lib/schema";
import Hero from "@/components/Hero";
import Link from "next/link";
import ImageSlider from "@/components/ImageSlider";
import Image from '@/components/LazyImage';
import AdmissionFormPopup from "@/components/AdmissionFormPopup";
import LatestBlogCarouselHi from "@/components/LatestBlogCarouselHi";
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

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true, margin: "-100px" }
};

const cardAnimate = {
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

const examTrackerData = [
  { name: "जवाहर नवोदय (JNV)", badge: "JNVST 2027-28", status: "आवेदन करें — अंतिम तिथि 31 जुलाई!", statusColor: "bg-red-100 text-red-800 border-red-200", openDate: "6 जुलाई 2026", closeDate: "31 जुलाई 2026", examDate: "28 नवंबर 2026", resultDate: "मार्च/अप्रैल 2027", link: "/coaching/navodaya-vidyalaya" },
  { name: "सैनिक स्कूल (AISSEE)", badge: "AISSEE 2027", status: "फॉर्म जल्द आएगा", statusColor: "bg-orange-100 text-orange-800 border-orange-200", openDate: "अगस्त 2026 (अपेक्षित)", closeDate: "नवंबर 2026 (अपेक्षित)", examDate: "जनवरी 2027 (अंतिम सप्ताह)", resultDate: "मार्च 2027", link: "/coaching/sainik-school" },
  { name: "राष्ट्रीय मिलिट्री स्कूल", badge: "RMS CET 2027", status: "फॉर्म जल्द आएगा", statusColor: "bg-orange-100 text-orange-800 border-orange-200", openDate: "सितंबर 2026 (अपेक्षित)", closeDate: "अक्टूबर 2026 (अपेक्षित)", examDate: "दिसंबर 2026", resultDate: "फरवरी 2027", link: "/coaching/military-school" },
  { name: "विद्या ज्ञान स्कूल", badge: "कक्षा 6 (ग्रामीण UP)", status: "फॉर्म जल्द आएगा", statusColor: "bg-orange-100 text-orange-800 border-orange-200", openDate: "सितंबर 2026 (अपेक्षित)", closeDate: "नवंबर 2026 (अपेक्षित)", examDate: "दिसंबर 2026", resultDate: "फरवरी 2027", link: "/coaching/vidyagyan-school" },
  { name: "AMU स्कूल प्रवेश", badge: "कक्षा 6 और 9", status: "फॉर्म जल्द आएगा", statusColor: "bg-orange-100 text-orange-800 border-orange-200", openDate: "जनवरी 2027 (अपेक्षित)", closeDate: "मार्च 2027 (अपेक्षित)", examDate: "मार्च/अप्रैल 2027", resultDate: "जून 2027", link: "/coaching/amu-entrance" },
  { name: "जामिया मिलिया इस्लामिया (JMI)", badge: "JMI कक्षा 6 और 9", status: "फॉर्म जल्द आएगा", statusColor: "bg-orange-100 text-orange-800 border-orange-200", openDate: "फरवरी 2027 (अपेक्षित)", closeDate: "मार्च 2027 (अपेक्षित)", examDate: "अप्रैल/मई 2027", resultDate: "जून 2027", link: "/coaching/jmi-entrance" }
];

const homeFaqs = [
  { question: "जोया, अमरोहा में सबसे अच्छी प्रवेश परीक्षा कोचिंग कौन सी है?", answer: "जय गोविंद पब्लिक स्कूल (JGPS) जोया, अमरोहा में प्रवेश परीक्षा कोचिंग का शीर्ष स्कूल है। हम AMU, JMI, सैनिक स्कूल, मिलिट्री स्कूल (RMS) और विद्या ज्ञान की तैयारी कराते हैं।" },
  { question: "JGPS में कौन सी कक्षाएं प्रवेश कोचिंग में शामिल हो सकती हैं?", answer: "कक्षा 5 के छात्र हमारी कक्षा 6 प्रवेश बैच में शामिल हो सकते हैं। कक्षा 8 के छात्र कक्षा 9 प्रवेश बैच में शामिल हो सकते हैं।" },
  { question: "क्या स्कूल कोचिंग छात्रों के लिए हॉस्टल सुविधा प्रदान करता है?", answer: "हां, JGPS में लड़कों के लिए सुरक्षित और साफ हॉस्टल सुविधा है। रात का अध्ययन, खेल, अच्छा भोजन और पूरी देखरेख शामिल है।" },
  { question: "लाइव प्रवेश परीक्षा ट्रैकर माता-पिता की कैसे मदद करता है?", answer: "हमारा लाइव प्रवेश परीक्षा ट्रैकर AISSEE, AMU, JMI और विद्या ज्ञान की फॉर्म तिथियां, अंतिम तिथियां, परीक्षा तिथियां और परिणाम तिथियां दिखाता है।" }
];

export default function HomeClientHi() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [trackerData, setTrackerData] = useState(examTrackerData);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    if (!schoolData.googleSheetCsvUrl) return;
    async function loadSpreadsheetData() {
      try {
        const res = await fetch(schoolData.googleSheetCsvUrl);
        if (!res.ok) throw new Error("Failed to fetch spreadsheet data");
        const csvText = await res.text();
        const lines = csvText.split(/\r?\n/);
        if (lines.length <= 1) return;
        const headers = lines[0].split(',').map(h => h.trim().toLowerCase().replace(/"/g, ''));
        const parsedRows = [];
        for (let i = 1; i < lines.length; i++) {
          const line = lines[i].trim();
          if (!line) continue;
          const values: string[] = [];
          let currentField = '';
          let insideQuotes = false;
          for (let j = 0; j < line.length; j++) {
            const char = line[j];
            if (char === '"') { insideQuotes = !insideQuotes; }
            else if (char === ',' && !insideQuotes) { values.push(currentField.trim()); currentField = ''; }
            else { currentField += char; }
          }
          values.push(currentField.trim());
          const rowData: any = {};
          headers.forEach((header, index) => {
            let val = values[index] || '';
            if (val.startsWith('"') && val.endsWith('"')) { val = val.substring(1, val.length - 1); }
            rowData[header] = val;
          });
          if (rowData.name) {
            let statusColor = "bg-orange-100 text-orange-800 border-orange-200";
            const status = (rowData.status || "").toLowerCase();
            if (status.includes("open") || status.includes("active") || status.includes("start")) { statusColor = "bg-green-100 text-green-800 border-green-200"; }
            else if (status.includes("close") || status.includes("end") || status.includes("declared") || status.includes("over")) { statusColor = "bg-red-100 text-red-800 border-red-200"; }
            parsedRows.push({ name: rowData.name, badge: rowData.badge || "", status: rowData.status || "फॉर्म जल्द आएगा", statusColor: rowData.statuscolor || statusColor, openDate: rowData.opendate || "", closeDate: rowData.closedate || "", examDate: rowData.examdate || "", resultDate: rowData.resultdate || "", link: rowData.link || "/coaching" });
          }
        }
        if (parsedRows.length > 0) { setTrackerData(parsedRows); }
      } catch (error) { console.error("Error loading exam tracker:", error); }
    }
    loadSpreadsheetData();
  }, []);

  return (
    <>
      <Hero />

      {/* Entrance Exam Tracker */}
      <section className="py-16 bg-white relative overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }} className="text-center mb-12">
            <span className="text-[#035c00] font-bold text-xs uppercase tracking-widest bg-[#035c00]/10 px-4 py-1.5 rounded-full mb-3 inline-block">लाइव परीक्षा तिथियां</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#035c00] mb-4">प्रवेश परीक्षा तिथियां (2027)</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">सभी प्रवेश परीक्षाओं की फॉर्म तिथियां, परीक्षा अनुसूची और परिणाम तिथियां अपडेट रहें।</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trackerData.map((exam, idx) => (
              <motion.div key={idx} variants={cardAnimate} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-100px" }} className="bg-gray-50 border border-gray-150 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start gap-2 mb-4">
                    <div>
                      <span className="text-xs font-semibold text-gray-400 block mb-0.5">{exam.badge}</span>
                      <h3 className="text-lg font-bold text-gray-900 leading-snug">{exam.name}</h3>
                    </div>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${exam.statusColor} whitespace-nowrap`}>{exam.status}</span>
                  </div>
                  <div className="space-y-3 py-3 border-t border-b border-gray-200/60 my-4 text-xs text-gray-600">
                    <div className="flex items-center gap-3"><FaCalendarAlt className="text-[#035c00] text-sm flex-shrink-0" /><div><span className="text-gray-400 block">फॉर्म खुलने की तिथि:</span><span className="font-semibold text-gray-800">{exam.openDate}</span></div></div>
                    <div className="flex items-center gap-3"><FaHourglassHalf className="text-[#035c00] text-sm flex-shrink-0" /><div><span className="text-gray-400 block">आवेदन की अंतिम तिथि:</span><span className="font-semibold text-gray-800">{exam.closeDate}</span></div></div>
                    <div className="flex items-center gap-3"><FaClipboardCheck className="text-[#035c00] text-sm flex-shrink-0" /><div><span className="text-gray-400 block">लिखित परीक्षा तिथि:</span><span className="font-semibold text-gray-800">{exam.examDate}</span></div></div>
                    <div className="flex items-center gap-3"><FaTrophy className="text-[#035c00] text-sm flex-shrink-0" /><div><span className="text-gray-400 block">परिणाम तिथि:</span><span className="font-semibold text-gray-800">{exam.resultDate}</span></div></div>
                  </div>
                </div>
                <Link href={exam.link} className="w-full mt-2 py-2.5 px-4 bg-white hover:bg-[#035c00] hover:text-white text-[#035c00] font-bold text-xs rounded-xl border-2 border-[#035c00] text-center transition-all shadow-sm flex items-center justify-center gap-1.5">विवरण और पेपर देखें<FaChevronRight className="text-[10px]" /></Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AdmissionFormPopup isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

      {/* Gallery */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }} className="text-center mb-12">
            <span className="text-[#035c00] font-bold text-xs uppercase tracking-widest bg-[#035c00]/10 px-4 py-1.5 rounded-full mb-3 inline-block">कैंपस फोटो</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#035c00] mb-4">स्कूल गैलरी</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">हमारे कैंपस, कक्षाओं, प्रयोगशालाओं और खेल क्षेत्रों की तस्वीरें देखें।</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <ImageSlider />
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#035c00]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }} className="text-center mb-16">
            <span className="text-[#035c00] font-bold text-xs uppercase tracking-widest bg-[#035c00]/10 px-4 py-1.5 rounded-full mb-3 inline-block">JGPS क्यों चुनें?</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#035c00] mb-4">JGPS क्यों चुनें?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">हम आपके बच्चे को सर्वोत्तम शिक्षा, आधुनिक सुविधाएं और विशेषज्ञ प्रवेश कोचिंग प्रदान करते हैं।</p>
          </motion.div>
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={cardAnimate} className="p-8 border border-gray-150 rounded-2xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between border-t-4 border-t-[#035c00]">
              <div><div className="w-14 h-14 bg-[#035c00]/10 rounded-xl flex items-center justify-center mb-6 text-[#035c00]"><FaGraduationCap className="w-8 h-8" /></div><h3 className="text-xl font-bold text-gray-900 mb-3">गुणवत्तापूर्ण शिक्षा</h3><p className="text-gray-600 text-sm leading-relaxed mb-6">हमारा CBSE-आधारित पाठ्यक्रम मजबूत बुनियादी, स्पष्ट अवधारणाओं और व्यावहारिक शिक्षा पर केंद्रित है।</p></div>
              <Link href="/academics" className="inline-flex items-center text-[#035c00] font-bold text-sm hover:underline">शैक्षणिक जानें <span className="ml-1">&rarr;</span></Link>
            </motion.div>
            <motion.div variants={cardAnimate} className="p-8 border border-gray-150 rounded-2xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between border-t-4 border-t-yellow-500">
              <div><div className="w-14 h-14 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-6 text-yellow-600"><FaSchool className="w-8 h-8" /></div><h3 className="text-xl font-bold text-gray-900 mb-3">आधुनिक सुविधाएं</h3><p className="text-gray-600 text-sm leading-relaxed mb-6">आधुनिक हवादार कक्षाएं, हाई-टेक कंप्यूटर लैब, विज्ञान प्रयोगशाला, पुस्तकालय और सुरक्षित कैंपस।</p></div>
              <Link href="/facilities" className="inline-flex items-center text-yellow-600 font-bold text-sm hover:underline">सुविधाएं देखें <span className="ml-1">&rarr;</span></Link>
            </motion.div>
            <motion.div variants={cardAnimate} className="p-8 border border-gray-150 rounded-2xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between border-t-4 border-t-[#035c00]">
              <div><div className="w-14 h-14 bg-[#035c00]/10 rounded-xl flex items-center justify-center mb-6 text-[#035c00]"><FaBookOpen className="w-8 h-8" /></div><h3 className="text-xl font-bold text-gray-900 mb-3">विशेष कोचिंग</h3><p className="text-gray-600 text-sm leading-relaxed mb-6">AMU, जामिया, सैनिक स्कूल, मिलिट्री स्कूल और विद्या ज्ञान की कक्षा 6 और 9 के लिए विशेष कोचिंग।</p></div>
              <Link href="/coaching" className="inline-flex items-center text-[#035c00] font-bold text-sm hover:underline">कोचिंग देखें <span className="ml-1">&rarr;</span></Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-br from-[#035c00] to-[#024700] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div variants={cardAnimate} className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:scale-[1.03] transition-all duration-300"><div className="text-4xl md:text-5xl font-extrabold text-yellow-300 mb-2">15+</div><div className="text-xs md:text-sm font-semibold text-white/90 uppercase tracking-wider">शैक्षणिक वर्ष</div></motion.div>
            <motion.div variants={cardAnimate} className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:scale-[1.03] transition-all duration-300"><div className="text-4xl md:text-5xl font-extrabold text-yellow-300 mb-2">500+</div><div className="text-xs md:text-sm font-semibold text-white/90 uppercase tracking-wider">प्रवेश चयन</div></motion.div>
            <motion.div variants={cardAnimate} className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:scale-[1.03] transition-all duration-300"><div className="text-4xl md:text-5xl font-extrabold text-yellow-300 mb-2">100%</div><div className="text-xs md:text-sm font-semibold text-white/90 uppercase tracking-wider">GPS सुरक्षित परिवहन</div></motion.div>
            <motion.div variants={cardAnimate} className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:scale-[1.03] transition-all duration-300"><div className="text-4xl md:text-5xl font-extrabold text-yellow-300 mb-2">25:1</div><div className="text-xs md:text-sm font-semibold text-white/90 uppercase tracking-wider">व्यक्तिगत ध्यान अनुपात</div></motion.div>
          </motion.div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }} className="text-center mb-16">
            <span className="text-[#035c00] font-bold text-xs uppercase tracking-widest bg-[#035c00]/10 px-4 py-1.5 rounded-full mb-3 inline-block">मुख्य कार्यक्रम</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#035c00] mb-4">हमारे कार्यक्रम</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">हमारा स्कूल आपके बच्चे को सीखने, बढ़ने और मजबूत मूल्य विकसित करने में मदद करता है।</p>
          </motion.div>
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={cardAnimate} className="bg-white p-8 rounded-2xl border border-gray-150 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border-t-4 border-t-[#035c00] flex flex-col justify-between">
              <div><span className="text-xs font-bold text-[#035c00] uppercase tracking-wider bg-[#035c00]/5 px-2.5 py-1 rounded-md mb-4 inline-block">नींव</span><h3 className="text-xl font-bold text-gray-900 mb-4">नर्सरी और प्री-प्राइमरी</h3><p className="text-gray-600 text-sm leading-relaxed mb-6">{schoolData.academics.curriculum.nursery}</p></div>
              <Link href="/academics" className="inline-flex items-center text-[#035c00] font-bold text-sm hover:underline mt-auto">विवरण पढ़ें <span className="ml-1">&rarr;</span></Link>
            </motion.div>
            <motion.div variants={cardAnimate} className="bg-white p-8 rounded-2xl border border-gray-150 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border-t-4 border-t-yellow-500 flex flex-col justify-between">
              <div><span className="text-xs font-bold text-yellow-600 uppercase tracking-wider bg-yellow-500/5 px-2.5 py-1 rounded-md mb-4 inline-block">प्राथमिक स्तर</span><h3 className="text-xl font-bold text-gray-900 mb-4">प्राथमिक कक्षाएं (1st - 5th)</h3><p className="text-gray-600 text-sm leading-relaxed mb-6">{schoolData.academics.curriculum.primary}</p></div>
              <Link href="/academics" className="inline-flex items-center text-yellow-600 font-bold text-sm hover:underline mt-auto">विवरण पढ़ें <span className="ml-1">&rarr;</span></Link>
            </motion.div>
            <motion.div variants={cardAnimate} className="bg-white p-8 rounded-2xl border border-gray-150 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border-t-4 border-t-[#035c00] flex flex-col justify-between">
              <div><span className="text-xs font-bold text-[#035c00] uppercase tracking-wider bg-[#035c00]/5 px-2.5 py-1 rounded-md mb-4 inline-block">मध्य विद्यालय</span><h3 className="text-xl font-bold text-gray-900 mb-4">मध्य कक्षाएं (6th - 8th)</h3><p className="text-gray-600 text-sm leading-relaxed mb-6">{schoolData.academics.curriculum.middle}</p></div>
              <Link href="/academics" className="inline-flex items-center text-[#035c00] font-bold text-sm hover:underline mt-auto">विवरण पढ़ें <span className="ml-1">&rarr;</span></Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Coaching Program */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }} className="bg-gradient-to-br from-[#035c00] to-[#024700] rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="hidden lg:block lg:col-span-2 relative group overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-all duration-500"></div>
                <Image src="/images/coaching.avif" alt="JGPS में प्रवेश परीक्षा कोचिंग कक्षाएं" fill className="object-cover transform group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 md:p-12 lg:col-span-3 text-white">
                <span className="inline-block bg-yellow-400 text-[#035c00] text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider animate-pulse">प्रवेश खुला 2027-28</span>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">प्रवेश परीक्षा कोचिंग</h2>
                <p className="text-lg text-white/90 mb-8 leading-relaxed">हमारे कोचिंग कार्यक्रमों के साथ अपने बच्चे को शीर्ष स्कूलों में प्रवेश का सर्वोत्तम मौका दें।</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/15 hover:bg-white/15 transition-all"><h3 className="font-bold text-lg text-yellow-300 mb-2">AMU और JMI प्रवेश</h3><p className="text-xs text-white/80 leading-relaxed">AMU और JMI प्रवेश परीक्षाओं की पूरी तैयारी।</p></div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/15 hover:bg-white/15 transition-all"><h3 className="font-bold text-lg text-yellow-300 mb-2">सैनिक स्कूल</h3><p className="text-xs text-white/80 leading-relaxed">AISSEE गणित, रीजनिंग और भाषा सेक्शन की पूरी तैयारी।</p></div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/15 hover:bg-white/15 transition-all"><h3 className="font-bold text-lg text-yellow-300 mb-2">मिलिट्री स्कूल</h3><p className="text-xs text-white/80 leading-relaxed">RMS CET प्रवेश परीक्षा के लिए विशेषज्ञ कोचिंग।</p></div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/15 hover:bg-white/15 transition-all"><h3 className="font-bold text-lg text-yellow-300 mb-2">विद्या ज्ञान स्कूल</h3><p className="text-xs text-white/80 leading-relaxed">ग्रामीण छात्रों के लिए दो-चरण चयन प्रक्रिया की कोचिंग।</p></div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link href="/coaching" className="bg-white text-[#035c00] hover:bg-yellow-300 hover:text-[#035c00] font-bold py-3.5 px-8 rounded-xl text-center transition-all duration-300 shadow-md hover:-translate-y-0.5">प्रवेश परीक्षा कोचिंग देखें &rarr;</Link>
                  <button onClick={() => setIsFormOpen(true)} className="border-2 border-white/85 text-white hover:bg-white/10 font-bold py-3.5 px-8 rounded-xl text-center transition-all duration-300 cursor-pointer">अभी आवेदन करें</button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }} className="text-center mb-16">
            <span className="text-[#035c00] font-bold text-xs uppercase tracking-widest bg-[#035c00]/10 px-4 py-1.5 rounded-full mb-3 inline-block">अभिभावक समीक्षा</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#035c00] mb-4">अभिभावक क्या कहते हैं</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">हमारे स्कूल और कोचिंग कार्यक्रमों के बारे में अभिभावकों की राय।</p>
          </motion.div>
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {schoolData.testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={cardAnimate} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-150 hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative hover:-translate-y-1.5">
                <div><FaQuoteLeft className="text-yellow-500/25 text-4xl mb-4" /><p className="text-gray-600 text-sm italic leading-relaxed mb-6">&quot;{testimonial.quote}&quot;</p></div>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-55"><div className="w-10 h-10 bg-[#035c00] text-yellow-300 rounded-xl flex items-center justify-center font-bold text-base shadow-sm">{testimonial.name.charAt(0)}</div><div><h4 className="text-sm font-bold text-gray-900">{testimonial.name}</h4><p className="text-2xs text-gray-400 uppercase tracking-widest mt-0.5">सत्यापित अभिभावक</p></div></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HelpDesk */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }} className="text-center mb-16">
            <span className="text-[#035c00] font-bold text-xs uppercase tracking-widest bg-[#035c00]/10 px-4 py-1.5 rounded-full mb-3 inline-block">सहायता केंद्र</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#035c00] mb-4">सहायता केंद्र</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">प्रवेश, परिवहन या शुल्क के बारे में प्रश्न हैं? हम मदद के लिए यहां हैं।</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-gray-150">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#035c00] via-[#035c00]/95 to-[#024700]/90 z-10"></div>
            <div className="relative z-20">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-2 relative group overflow-hidden">
                  <div className="hidden lg:block relative h-full w-full"><Image src="/images/helpdesk.avif" alt="JGPS सहायता केंद्र" fill className="object-cover transform group-hover:scale-103 transition-transform duration-700" sizes="(max-width: 1024px) 100vw, 40vw" /><div className="absolute inset-0 bg-[#035c00]/15"></div></div>
                  <div className="lg:hidden relative h-72 w-full"><Image src="/images/helpdesk.avif" alt="JGPS सहायता केंद्र" fill className="object-cover object-center" sizes="100vw" /><div className="absolute inset-0 bg-[#035c00]/15"></div></div>
                </div>
                <div className="lg:col-span-3 p-8 md:p-12 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-2"><span className="w-3 h-3 bg-yellow-400 rounded-full animate-ping"></span>हम कैसे मदद कर सकते हैं?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 hover:bg-white/15 transition-all"><div className="w-9 h-9 bg-yellow-400/20 rounded-lg flex items-center justify-center mb-3 text-yellow-300"><FaSchool className="w-5 h-5" /></div><h4 className="text-lg font-bold mb-1.5">प्रवेश पूछताछ</h4><p className="text-xs text-white/80 leading-relaxed mb-3">कक्षा पंजीकरण, आवश्यक दस्तावेज और प्रवेश प्रक्रिया के बारे में जानकारी।</p><Link href="/admission" className="text-yellow-300 hover:underline text-xs font-bold inline-flex items-center gap-1">विवरण देखें <FaChevronRight className="w-2.5 h-2.5" /></Link></div>
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 hover:bg-white/15 transition-all"><div className="w-9 h-9 bg-yellow-400/20 rounded-lg flex items-center justify-center mb-3 text-yellow-300"><FaGraduationCap className="w-5 h-5" /></div><h4 className="text-lg font-bold mb-1.5">शैक्षणिक और कोचिंग</h4><p className="text-xs text-white/80 leading-relaxed mb-3">CBSE कक्षा पाठ्यक्रम और कोचिंग बैच अनुसूची।</p><Link href="/academics" className="text-yellow-300 hover:underline text-xs font-bold inline-flex items-center gap-1">विवरण देखें <FaChevronRight className="w-2.5 h-2.5" /></Link></div>
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 hover:bg-white/15 transition-all"><div className="w-9 h-9 bg-yellow-400/20 rounded-lg flex items-center justify-center mb-3 text-yellow-300"><FaEnvelopeOpenText className="w-5 h-5" /></div><h4 className="text-lg font-bold mb-1.5">ईमेल सहायता</h4><p className="text-xs text-white/80 leading-relaxed mb-3">हमें ईमेल करें और हम 24 घंटे के भीतर जवाब देंगे।</p><span className="text-yellow-300 text-xs font-bold">jaigovindschool@gmail.com</span></div>
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 hover:bg-white/15 transition-all"><div className="w-9 h-9 bg-yellow-400/20 rounded-lg flex items-center justify-center mb-3 text-yellow-300"><FaMapMarkedAlt className="w-5 h-5" /></div><h4 className="text-lg font-bold mb-1.5">कैंपस विज़िट</h4><p className="text-xs text-white/80 leading-relaxed mb-3">हमारे कैंपस का दौरा करने के लिए दिशा-निर्देश प्राप्त करें।</p><Link href="/contact" className="text-yellow-300 hover:underline text-xs font-bold inline-flex items-center gap-1">संपर्क करें <FaChevronRight className="w-2.5 h-2.5" /></Link></div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <Link href="/about#helpdesk" className="inline-block bg-white text-[#035c00] hover:bg-yellow-300 hover:text-[#035c00] font-bold py-3.5 px-8 rounded-xl transition-all duration-300 text-center shadow-md text-sm">सभी विवरण देखें</Link>
                    <Link href="/contact" className="inline-block bg-transparent border-2 border-white hover:bg-white/10 font-bold py-3.5 px-8 rounded-xl transition-all duration-300 text-center text-sm">अभी संपर्क करें</Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Guides */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }} className="text-center mb-16">
            <span className="text-[#035c00] font-bold text-xs uppercase tracking-widest bg-[#035c00]/10 px-4 py-1.5 rounded-full mb-3 inline-block">परीक्षा गाइड</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">नवीनतम परीक्षा गाइड</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">परीक्षा पैटर्न, तैयारी टिप्स और प्रवेश रणनीतियों पर विशेषज्ञ गाइड पढ़ें।</p>
          </motion.div>
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={cardAnimate} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-150 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
              <div className="p-6 md:p-8"><span className="bg-[#035c00]/10 text-[#035c00] font-bold px-2.5 py-1 rounded text-2xs uppercase tracking-wider mb-4 inline-block">नवोदय (JNVST)</span><h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-[#035c00] transition-colors leading-snug"><Link href="/hi/blog/navodaya-admission-2027-complete-guide/">नवोदय स्कूल में एडमिशन कैसे लें — 2027 की पूरी जानकारी</Link></h3><p className="text-xs text-gray-500 leading-relaxed mb-4">नवोदय स्कूल एडमिशन 2027 की पूरी जानकारी। JNVST नोटिफिकेशन, आवेदन प्रक्रिया, योग्यता, परीक्षा पैटर्न और तैयारी के टिप्स।</p></div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400 font-medium"><span>10 मिनट पढ़ें</span><Link href="/hi/blog/navodaya-admission-2027-complete-guide/" className="text-[#035c00] font-bold hover:underline">लेख पढ़ें &rarr;</Link></div>
            </motion.div>
            <motion.div variants={cardAnimate} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-150 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
              <div className="p-6 md:p-8"><span className="bg-yellow-500/5 text-yellow-600 font-bold px-2.5 py-1 rounded text-2xs uppercase tracking-wider mb-4 inline-block">सैनिक स्कूल (AISSEE)</span><h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-[#035c00] transition-colors leading-snug"><Link href="/hi/blog/sainik-school-admission-2027-complete-guide/">सैनिक स्कूल एडमिशन 2027 — पूरी जानकारी</Link></h3><p className="text-xs text-gray-500 leading-relaxed mb-4">AISSEE 2027 की पूरी जानकारी — आयु नियम, फीस, परीक्षा पैटर्न और तैयारी के 6 कदम।</p></div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400 font-medium"><span>10 मिनट पढ़ें</span><Link href="/hi/blog/sainik-school-admission-2027-complete-guide/" className="text-[#035c00] font-bold hover:underline">लेख पढ़ें &rarr;</Link></div>
            </motion.div>
            <motion.div variants={cardAnimate} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-150 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
              <div className="p-6 md:p-8"><span className="bg-[#035c00]/10 text-[#035c00] font-bold px-2.5 py-1 rounded text-2xs uppercase tracking-wider mb-4 inline-block">विद्या ज्ञान तैयारी</span><h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-[#035c00] transition-colors leading-snug"><Link href="/hi/blog/vidyagyan-school-admission-2027-guide/">विद्या ज्ञान स्कूल एडमिशन 2027 — योग्यता और टिप्स</Link></h3><p className="text-xs text-gray-500 leading-relaxed mb-4">ग्रामीण UP छात्रों के लिए विद्या ज्ञान योग्यता, आय प्रमाण पत्र, परीक्षा पैटर्न और तैयारी के टिप्स।</p></div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400 font-medium"><span>8 मिनट पढ़ें</span><Link href="/hi/blog/vidyagyan-school-admission-2027-guide/" className="text-[#035c00] font-bold hover:underline">लेख पढ़ें &rarr;</Link></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <LatestBlogCarouselHi />

      {/* Quick Links */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }} className="text-center mb-12">
            <span className="text-[#035c00] font-bold text-xs uppercase tracking-widest bg-[#035c00]/10 px-4 py-1.5 rounded-full mb-3 inline-block">त्वरित लिंक</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#035c00] mb-3">त्वरित लिंक</h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto">कोचिंग, अध्ययन सामग्री, प्रवेश जानकारी — सब कुछ एक जगह।</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, delay: 0 }} className="bg-gradient-to-br from-[#035c00] to-[#024700] rounded-2xl p-6 shadow-lg text-white">
              <div className="flex items-center gap-3 mb-5"><div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center text-xl"></div><h3 className="text-lg font-bold">कोचिंग कार्यक्रम</h3></div>
              <ul className="space-y-2.5">
                {[{ label: "AMU कक्षा 6 और 9 कोचिंग", href: "/coaching/amu-entrance" }, { label: "JMI प्रवेश कोचिंग", href: "/coaching/jmi-entrance" }, { label: "सैनिक स्कूल कोचिंग", href: "/coaching/sainik-school" }, { label: "मिलिट्री स्कूल (RMS) कोचिंग", href: "/coaching/military-school" }, { label: "विद्या ज्ञान स्कूल कोचिंग", href: "/coaching/vidyagyan-school" }, { label: "नवोदय (JNVST) कोचिंग", href: "/coaching/navodaya-vidyalaya" }].map((link) => (
                  <li key={link.href}><Link href={link.href} className="flex items-center gap-2.5 text-sm text-white/85 hover:text-yellow-300 transition-colors group"><FaChevronRight className="text-[9px] text-yellow-400 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />{link.label}</Link></li>
                ))}
              </ul>
              <Link href="/coaching" className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-yellow-300 hover:text-yellow-200 transition-colors border-t border-white/15 pt-4 w-full">सभी कोचिंग कार्यक्रम देखें →</Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5"><div className="w-10 h-10 bg-yellow-50 rounded-xl flex items-center justify-center text-xl"></div><h3 className="text-lg font-bold text-gray-900">अध्ययन सामग्री</h3></div>
              <ul className="space-y-2.5">
                {[{ label: "पाठ्यक्रम और अध्ययन सामग्री", href: "/resources/syllabus-and-study-materials" }, { label: "नवोदय JNVST पेपर", href: "/resources/navodaya-class-6-papers/" }, { label: "सैनिक स्कूल प्रश्न पत्र", href: "/resources/sainik-school-question-papers/" }, { label: "AMU प्रवेश पाठ्यक्रम", href: "/resources/amu-class-6-syllabus-and-papers/" }, { label: "विद्या ज्ञान पाठ्यक्रम", href: "/resources/vidyagyan-school-syllabus-and-eligibility/" }, { label: "RMS CET पाठ्यक्रम", href: "/resources/rms-cet-military-school-syllabus/" }].map((link) => (
                  <li key={link.href}><Link href={link.href} className="flex items-center gap-2.5 text-sm text-gray-600 hover:text-[#035c00] transition-colors group"><FaChevronRight className="text-[9px] text-[#035c00] flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />{link.label}</Link></li>
                ))}
              </ul>
              <Link href="/resources" className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#035c00] hover:underline border-t border-gray-100 pt-4 w-full">सभी संसाधन देखें →</Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col gap-5">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex-1">
                <div className="flex items-center gap-3 mb-5"><div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-xl"></div><h3 className="text-lg font-bold text-gray-900">प्रवेश</h3></div>
                <ul className="space-y-2.5">
                  {[{ label: "प्रवेश पोर्टल", href: "/admission" }, { label: "प्रवेश दिशानिर्देश", href: "/admission/guidelines" }, { label: "पात्रता जांचक", href: "/entrance-eligibility-checker" }].map((link) => (
                    <li key={link.href}><Link href={link.href} className="flex items-center gap-2.5 text-sm text-gray-600 hover:text-[#035c00] transition-colors group"><FaChevronRight className="text-[9px] text-[#035c00] flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />{link.label}</Link></li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#035c00]/5 rounded-2xl p-6 border border-[#035c00]/10">
                <div className="flex items-center gap-3 mb-5"><div className="w-10 h-10 bg-[#035c00]/10 rounded-xl flex items-center justify-center text-xl"></div><h3 className="text-lg font-bold text-gray-900">त्वरित लिंक</h3></div>
                <ul className="space-y-2.5">
                  {[{ label: "हमारे स्कूल के बारे में", href: "/about" }, { label: "स्कूल सुविधाएं", href: "/facilities" }, { label: "बस परिवहन मार्ग", href: "/facilities/school-bus-transport" }, { label: "फोटो गैलरी", href: "/gallery" }, { label: "संपर्क करें", href: "/contact" }, { label: "FAQ", href: "/faq" }].map((link) => (
                    <li key={link.href}><Link href={link.href} className="flex items-center gap-2.5 text-sm text-gray-600 hover:text-[#035c00] transition-colors group"><FaChevronRight className="text-[9px] text-[#035c00] flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />{link.label}</Link></li>
                  ))}
                </ul>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, delay: 0.3 }} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
              <div className="flex items-center gap-3 mb-5"><div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-xl">🌐</div><h3 className="text-lg font-bold text-gray-900">आधिकारिक वेबसाइटें</h3></div>
              <p className="text-xs text-gray-400 mb-4 leading-relaxed">सरकारी परीक्षा और प्रवेश पोर्टल के सीधे लिंक।</p>
              <ul className="space-y-3 flex-1">
                {[{ label: "NVS — नवोदय विद्यालय", href: "https://navodaya.gov.in", tag: "JNVST", tagColor: "bg-purple-100 text-purple-700" }, { label: "सैनिक स्कूल प्रवेश (AISSEE)", href: "https://sainikschooladmission.in", tag: "Sainik", tagColor: "bg-blue-100 text-blue-700" }, { label: "AMU — अलीगढ़ मुस्लिम विश्वविद्यालय", href: "https://www.amu.ac.in", tag: "AMU", tagColor: "bg-green-100 text-green-700" }, { label: "JMI — जामिया मिलिया इस्लामिया", href: "https://www.jmi.ac.in", tag: "JMI", tagColor: "bg-teal-100 text-teal-700" }, { label: "RMS — राष्ट्रीय मिलिट्री स्कूल", href: "https://rashtriyamilitaryschools.in", tag: "RMS", tagColor: "bg-red-100 text-red-700" }, { label: "विद्या ज्ञान स्कूल", href: "https://www.vidyagyan.in", tag: "VGS", tagColor: "bg-orange-100 text-orange-700" }, { label: "NTA — राष्ट्रीय परीक्षा एजेंसी", href: "https://nta.ac.in", tag: "NTA", tagColor: "bg-indigo-100 text-indigo-700" }, { label: "CBSE आधिकारिक वेबसाइट", href: "https://cbse.gov.in", tag: "CBSE", tagColor: "bg-yellow-100 text-yellow-700" }].map((link) => (
                  <li key={link.href}><a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-2 text-sm text-gray-600 hover:text-blue-700 transition-colors group"><span className="flex items-center gap-2"><svg className="w-3 h-3 text-blue-400 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>{link.label}</span><span className={`text-[9px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${link.tagColor}`}>{link.tag}</span></a></li>
                ))}
              </ul>
              <p className="text-[10px] text-gray-400 mt-5 pt-4 border-t border-gray-100 leading-relaxed">ये बाहरी सरकारी वेबसाइटें हैं। JGPS इनसे जुड़ा नहीं है।</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }} className="text-center mb-12">
            <span className="text-[#035c00] font-bold text-xs uppercase tracking-widest bg-[#035c00]/10 px-4 py-1.5 rounded-full mb-3 inline-block">सामान्य प्रश्न</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">अक्सर पूछे जाने वाले प्रश्न</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">हमारे स्कूल, कोचिंग और प्रवेश के बारे में त्वरित उत्तर प्राप्त करें।</p>
          </motion.div>
          <div className="space-y-4">
            {homeFaqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="border border-gray-150 rounded-2xl overflow-hidden bg-gray-50 transition-all duration-300 shadow-sm">
                  <button onClick={() => setActiveFaq(isOpen ? null : idx)} className="w-full text-left p-6 font-bold text-gray-900 flex justify-between items-center gap-4 hover:bg-gray-100/50 transition-colors cursor-pointer">
                    <span className="text-sm sm:text-base">{faq.question}</span>
                    <span className={`text-[#035c00] transition-transform duration-300 font-extrabold ${isOpen ? 'rotate-180' : ''}`}><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg></span>
                  </button>
                  <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-60 border-t border-gray-150' : 'max-h-0'}`}><p className="p-6 text-sm text-gray-600 leading-relaxed bg-white">{faq.answer}</p></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(homeFaqs)) }} />

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7, ease: "easeOut" }} className="bg-gradient-to-br from-[#035c00] to-[#023b00] rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="px-6 py-16 md:p-16 text-center text-white relative z-10">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">JGPS से जुड़ने के लिए तैयार?</h2>
              <p className="text-lg text-white/85 mb-8 max-w-2xl mx-auto">अपने बच्चे की यात्रा हमारे साथ शुरू करें। 2027-28 के लिए प्रवेश खुला है। आज ही अपनी सीट बुक करें।</p>
              <button onClick={() => setIsFormOpen(true)} className="inline-block bg-yellow-400 text-[#035c00] hover:bg-yellow-300 font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer">अभी प्रवेश के लिए आवेदन करें</button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
