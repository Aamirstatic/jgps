import { Metadata } from 'next';
import Link from 'next/link';
import Image from '@/components/LazyImage';

export const metadata: Metadata = {
  title: 'Navodaya Vidyalaya Coaching 2027-28 | JNVST Class 6 Admission Guide',
  description: 'JNVST 2027-28 application form is open! Last date 31 July 2026. Exam 28 Nov 2026. Get expert coaching, syllabus, previous papers & eligibility details at JGPS Joya.',
  keywords: 'Navodaya Vidyalaya coaching, JNVST 2027-28, Navodaya admission 2027, JNVST Class 6, Navodaya coaching Joya Amroha, JNVST preparation, Navodaya exam date 2027',
  alternates: {
    canonical: 'https://jgps.in/coaching/navodaya-vidyalaya/',
  },
  openGraph: {
    title: 'Navodaya Vidyalaya Coaching 2027-28 | JGPS Joya',
    description: 'JNVST 2027-28 form is open. Last date 31 July 2026. Expert coaching for Navodaya Class 6 admission at JGPS Joya, Amroha.',
    url: 'https://jgps.in/coaching/navodaya-vidyalaya/',
    siteName: 'Jai Govind Public School',
    images: [{
      url: 'https://jgps.in/images/coaching/navodaya_cluster_hero.avif',
      width: 1200,
      height: 675,
      alt: 'Navodaya Vidyalaya Coaching at JGPS Joya',
    }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Navodaya Vidyalaya Coaching 2027-28 | JGPS Joya',
    description: 'JNVST 2027-28 form is open. Last date 31 July 2026. Expert coaching at JGPS Joya, Amroha.',
    images: ['https://jgps.in/images/coaching/navodaya_cluster_hero.avif'],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "JNVST 2027-28 की परीक्षा कब होगी?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JNVST 2027-28 की परीक्षा 28 नवंबर 2026 को होगी। आवेदन 6 जुलाई से 31 जुलाई 2026 तक भरे जा रहे हैं।"
      }
    },
    {
      "@type": "Question",
      "name": "नवोदय स्कूल में एडमिशन के लिए उम्र सीमा क्या है?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "बच्चे का जन्म 1 मई 2015 से 31 जुलाई 2017 के बीच होना चाहिए। बच्चा 2026-27 सत्र में कक्षा 5 में पढ़ रहा होना चाहिए।"
      }
    },
    {
      "@type": "Question",
      "name": "नवोदय स्कूल की फीस कितनी है?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "नवोदय स्कूल पूरी तरह मुफ्त है। पढ़ाई, हॉस्टल, खाना, किताबें, यूनिफॉर्म — सब कुछ सरकार देती है। सिर्फ कक्षा 9 से ₹600/माह खाने का शुल्क लगता है (SC/ST/लड़कियाँ/BPL मुक्त)।"
      }
    },
    {
      "@type": "Question",
      "name": "JNVST में कितने अंकों का पेपर आता है?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JNVST में कुल 100 अंकों का पेपर आता है। मानसिक योग्यता 50 अंक, गणित 25 अंक और भाषा 25 अंक। परीक्षा 2 घंटे की होती है। नेगेटिव मार्किंग नहीं है।"
      }
    },
    {
      "@type": "Question",
      "name": "क्या प्राइवेट स्कूल के बच्चे नवोदय में आवेदन कर सकते हैं?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "हाँ, सरकार से मान्यता प्राप्त किसी भी स्कूल (सरकारी या प्राइवेट) में कक्षा 5 में पढ़ने वाले बच्चे आवेदन कर सकते हैं।"
      }
    },
    {
      "@type": "Question",
      "name": "JGPS में नवोदय कोचिंग की फीस कितनी है?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JGPS में नवोदय कोचिंग की फीस बहुत कम है। सटीक जानकारी के लिए +91 9412137554 पर कॉल करें।"
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Jai Govind Public School - Navodaya Coaching Center",
  "description": "Expert JNVST coaching for Class 6 Navodaya Vidyalaya admission. Located in Joya, Amroha, UP.",
  "url": "https://jgps.in/coaching/navodaya-vidyalaya/",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Joya, Amroha",
    "addressRegion": "Uttar Pradesh",
    "addressCountry": "IN"
  },
  "telephone": "+91-9412137554"
};

export default function NavodayaHubPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-gray-500 flex gap-2">
          <Link href="/" className="hover:text-[#035c00]">Home</Link> / 
          <Link href="/coaching" className="hover:text-[#035c00]">Coaching</Link> / 
          <span className="text-gray-800 font-medium">Navodaya Entrance</span>
        </div>
      </div>

      {/* Hero Header with Featured Image */}
      <section className="relative w-full h-[420px] md:h-[480px]">
        <Image 
          src="/images/coaching/navodaya_cluster_hero.avif" 
          alt="नवोदय विद्यालय कोचिंग — JNVST 2027-28 प्रवेश गाइड" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#035c00]/90 to-[#023b00]/80 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <span className="bg-red-500 text-white font-bold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider mb-4 inline-block animate-pulse">
            आवेदन चालू — अंतिम तिथि 31 जुलाई 2026
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">
            नवोदय विद्यालय कोचिंग (JNVST) 2027-28
          </h1>
          <p className="text-lg text-white/90 max-w-3xl leading-relaxed mb-4">
            भारत के सबसे बड़े मुफ्त बोर्डिंग स्कूल नेटवर्क में प्रवेश पाने का मौका। JNVST 2027-28 का आवेदन फॉर्म <strong>6 जुलाई 2026</strong> को जारी हो चुका है। परीक्षा <strong>28 नवंबर 2026</strong> को होगी।
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-8 max-w-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-yellow-400 font-bold text-lg">6 जुलाई</div>
                <div className="text-xs text-white/70">आवेदन शुरू</div>
              </div>
              <div>
                <div className="text-red-400 font-bold text-lg">31 जुलाई</div>
                <div className="text-xs text-white/70">अंतिम तिथि</div>
              </div>
              <div>
                <div className="text-blue-300 font-bold text-lg">28 नवंबर</div>
                <div className="text-xs text-white/70">परीक्षा</div>
              </div>
              <div>
                <div className="text-green-300 font-bold text-lg">मार्च/अप्रैल</div>
                <div className="text-xs text-white/70">रिज़ल्ट</div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/coaching/navodaya-vidyalaya/eligibility-and-dates" className="bg-white text-[#035c00] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              पात्रता और तारीखें देखें
            </Link>
            <Link href="/entrance-eligibility-checker" className="bg-yellow-400 text-[#035c00] px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors">
              Free Eligibility Checker
            </Link>
          </div>
        </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Quick Nav Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/coaching/navodaya-vidyalaya/syllabus" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#035c00] hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-green-50 text-[#035c00] rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform"></div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#035c00]">JNVST Syllabus</h2>
              <p className="text-sm text-gray-600 mb-4">मानसिक योग्यता 50% वेटेज रखती है। सेक्शन-वाइज पूरा सिलेबस यहाँ देखें।</p>
              <span className="text-[#035c00] font-medium text-sm">सिलेबस देखें &rarr;</span>
            </Link>

            <Link href="/coaching/navodaya-vidyalaya/previous-year-papers" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#035c00] hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-green-50 text-[#035c00] rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">📄</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#035c00]">Previous Year Papers</h2>
              <p className="text-sm text-gray-600 mb-4">पिछले 5 साल के JNVST पेपर डाउनलोड करें। OMR शीट प्रैक्टिस के साथ।</p>
              <span className="text-[#035c00] font-medium text-sm">पेपर डाउनलोड &rarr;</span>
            </Link>

            <Link href="/coaching/navodaya-vidyalaya/eligibility-and-dates" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#035c00] hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-green-50 text-[#035c00] rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform"></div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#035c00]">पात्रता और तारीखें</h2>
              <p className="text-sm text-gray-600 mb-4">75% ग्रामीण कोटा, जिला-वार नियम और सटीक तारीखों की जानकारी।</p>
              <span className="text-[#035c00] font-medium text-sm">विवरण देखें &rarr;</span>
            </Link>

            <Link href="/blog/sainik-school-vs-jnvst-2027" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#035c00] hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-yellow-50 text-yellow-600 rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform"></div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#035c00]">Navodaya vs Sainik School</h2>
              <p className="text-sm text-gray-600 mb-4">कौन सा स्कूल बेहतर है? पूरी तुलना पढ़ें और सही फैसला लें।</p>
              <span className="text-[#035c00] font-medium text-sm">तुलना पढ़ें &rarr;</span>
            </Link>
          </div>

          {/* About JNV - Expanded */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-6">नवोदय विद्यालय क्या है?</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                जवाहर नवोदय विद्यालय (JNV) भारत सरकार के शिक्षा मंत्रालय के अंतर्गत <strong>नवोदय विद्यालय समिति (NVS)</strong> द्वारा चलाए जाने वाले आवासीय विद्यालय हैं। इनकी स्थापना <strong>1986</strong> में राष्ट्रीय शिक्षा नीति के तहत हुई थी। इन स्कूलों का मुख्य उद्देश्य ग्रामीण क्षेत्र के प्रतिभाशाली बच्चों को गुणवत्तापूर्ण आधुनिक शिक्षा देना है — वो भी पूरी तरह <strong>मुफ्त</strong>।
              </p>
              <p>
                आज भारत में <strong>661 नवोदय स्कूल</strong> हैं। लगभग हर जिले में एक नवोदय स्कूल है। ये स्कूल <strong>CBSE बोर्ड</strong> से जुड़े हैं और कक्षा 6 से 12 तक की शिक्षा देते हैं। हर साल लगभग <strong>47,000 नई सीटों</strong> पर प्रवेश होता है। अब तक <strong>3 लाख से ज़्यादा छात्र</strong> इन स्कूलों से पढ़कर निकल चुके हैं।
              </p>
              <p>
                नवोदय स्कूलों की सबसे बड़ी खासियत यह है कि यहाँ <strong>75% सीटें ग्रामीण क्षेत्र</strong> के बच्चों के लिए आरक्षित हैं। बाकी 25% सीटें शहरी क्षेत्र के बच्चों के लिए हैं। इसके अलावा <strong>33% सीटें लड़कियों</strong> के लिए और <strong>SC/ST वर्ग</strong> के लिए भी आरक्षण है।
              </p>
            </div>

            {/* JNV vs Regular School Table */}
            <div className="overflow-x-auto mt-8">
              <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden text-sm">
                <thead className="bg-[#035c00]">
                  <tr>
                    <th className="py-3 px-4 border-b font-bold text-white text-left">पहलू</th>
                    <th className="py-3 px-4 border-b font-bold text-white text-left">नवोदय स्कूल</th>
                    <th className="py-3 px-4 border-b font-bold text-white text-left">सामान्य सरकारी स्कूल</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="py-3 px-4 border-b font-medium text-gray-900">फीस</td><td className="py-3 px-4 border-b font-bold text-green-700">मुफ्त</td><td className="py-3 px-4 border-b">मुफ्त</td></tr>
                  <tr className="bg-gray-50"><td className="py-3 px-4 border-b font-medium text-gray-900">हॉस्टल</td><td className="py-3 px-4 border-b font-bold text-green-700">है (मुफ्त)</td><td className="py-3 px-4 border-b">नहीं</td></tr>
                  <tr><td className="py-3 px-4 border-b font-medium text-gray-900">शिक्षक-छात्र अनुपात</td><td className="py-3 px-4 border-b font-bold">1:30</td><td className="py-3 px-4 border-b">1:50+</td></tr>
                  <tr className="bg-gray-50"><td className="py-3 px-4 border-b font-medium text-gray-900">कंप्यूटर लैब</td><td className="py-3 px-4 border-b font-bold text-green-700">हर स्कूल में</td><td className="py-3 px-4 border-b">ज़्यादातर में नहीं</td></tr>
                  <tr><td className="py-3 px-4 border-b font-medium text-gray-900">खेल सुविधाएं</td><td className="py-3 px-4 border-b font-bold text-green-700">शानदार</td><td className="py-3 px-4 border-b">बुनियादी</td></tr>
                  <tr className="bg-gray-50"><td className="py-3 px-4 border-b font-medium text-gray-900">बोर्ड रिज़ल्ट</td><td className="py-3 px-4 border-b font-bold text-green-700">95%+ पास रेट</td><td className="py-3 px-4 border-b">65-70%</td></tr>
                  <tr><td className="py-3 px-4 border-b font-medium text-gray-900">किताबें और यूनिफॉर्म</td><td className="py-3 px-4 border-b font-bold text-green-700">मुफ्त</td><td className="py-3 px-4 border-b">खुद खरीदना होता है</td></tr>
                  <tr className="bg-gray-50"><td className="py-3 px-4 font-medium text-gray-900">मेडिकल सुविधा</td><td className="py-3 px-4 font-bold text-green-700">मुफ्त</td><td className="py-3 px-4">सीमित</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* JNVST Exam Details */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-6">JNVST 2027-28 परीक्षा की पूरी जानकारी</h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
              <p>
                <strong>जवाहर नवोदय विद्यालय चयन परीक्षा (JNVST)</strong> हर साल नवोदय विद्यालय समिति द्वारा आयोजित की जाती है। यह परीक्षा कक्षा 6 में प्रवेश के लिए होती है। शैक्षणिक सत्र 2027-28 के लिए परीक्षा <strong>28 नवंबर 2026</strong> को आयोजित की जाएगी।
              </p>
              <p>
                परीक्षा पूरी तरह <strong>OMR शीट</strong> आधारित है। कुल <strong>100 प्रश्न</strong> आते हैं और समय <strong>2 घंटे</strong> का होता है। सबसे अच्छी बात यह है कि <strong>नेगेटिव मार्किंग नहीं</strong> है, इसलिए हर सवाल का जवाब देना चाहिए।
              </p>
            </div>

            {/* Exam Pattern Table */}
            <h3 className="text-xl font-bold text-gray-900 mb-4">परीक्षा पैटर्न — 100 अंक</h3>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden text-sm">
                <thead className="bg-[#035c00]">
                  <tr>
                    <th className="py-3 px-4 border-b font-bold text-white text-left">सेक्शन</th>
                    <th className="py-3 px-4 border-b font-bold text-white text-left">प्रश्न</th>
                    <th className="py-3 px-4 border-b font-bold text-white text-left">अंक</th>
                    <th className="py-3 px-4 border-b font-bold text-white text-left">समय</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="py-3 px-4 border-b font-medium text-gray-900">मानसिक योग्यता (Mental Ability)</td><td className="py-3 px-4 border-b font-bold">40</td><td className="py-3 px-4 border-b font-bold text-green-700">50</td><td className="py-3 px-4 border-b">60 मिनट</td></tr>
                  <tr className="bg-gray-50"><td className="py-3 px-4 border-b font-medium text-gray-900">गणित (Arithmetic)</td><td className="py-3 px-4 border-b font-bold">20</td><td className="py-3 px-4 border-b font-bold text-green-700">25</td><td className="py-3 px-4 border-b">30 मिनट</td></tr>
                  <tr><td className="py-3 px-4 border-b font-medium text-gray-900">भाषा (Hindi/English/Urdu)</td><td className="py-3 px-4 border-b font-bold">20</td><td className="py-3 px-4 border-b font-bold text-green-700">25</td><td className="py-3 px-4 border-b">30 मिनट</td></tr>
                  <tr className="bg-gray-50"><td className="py-3 px-4 font-bold text-gray-900">कुल</td><td className="py-3 px-4 font-bold">80</td><td className="py-3 px-4 font-bold text-green-700">100</td><td className="py-3 px-4 font-bold">120 मिनट</td></tr>
                </tbody>
              </table>
            </div>

            {/* Section Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <h4 className="font-bold text-green-900 mb-2">मानसिक योग्यता (50 अंक)</h4>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• पैटर्न फिगर</li>
                  <li>• मिरर इमेज</li>
                  <li>• सीरीज पूरी करना</li>
                  <li>• कोडिंग-डीकोडिंग</li>
                  <li>• वेन डायग्राम</li>
                  <li>• दिशा और दूरी</li>
                  <li>• रक्त संबंध</li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h4 className="font-bold text-blue-900 mb-2">गणित (25 अंक)</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• संख्या पद्धति</li>
                  <li>• भिन्न और दशमलव</li>
                  <li>• LCM और HCF</li>
                  <li>• सरल ब्याज</li>
                  <li>• क्षेत्रफल-परिमाप</li>
                  <li>• शब्द समस्याएं</li>
                </ul>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
                <h4 className="font-bold text-purple-900 mb-2">भाषा (25 अंक)</h4>
                <ul className="text-sm text-purple-800 space-y-1">
                  <li>• गद्यांश (Passage)</li>
                  <li>• व्याकरण</li>
                  <li>• मुहावरे</li>
                  <li>• वाक्य पूर्ण करना</li>
                  <li>• पर्यायवाची/विलोम</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Eligibility */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-6">JNVST 2027-28 पात्रता (Eligibility)</h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
              <p>
                नवोदय में आवेदन करने से पहले यह सुनिश्चित कर लें कि आपका बच्चा नीचे दी गई सभी शर्तें पूरी करता है। गलत जानकारी देने पर आवेदन निरस्त हो सकता है।
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-green-50 border-l-4 border-[#035c00] p-5 rounded-r-xl">
                <h3 className="font-bold text-gray-900 mb-2">1. जन्म तिथि</h3>
                <p className="text-sm text-gray-700">बच्चे का जन्म <strong>1 मई 2015</strong> से <strong>31 जुलाई 2017</strong> के बीच होना चाहिए। इससे पहले या बाद में जन्मे बच्चे पात्र नहीं हैं।</p>
              </div>

              <div className="bg-green-50 border-l-4 border-[#035c00] p-5 rounded-r-xl">
                <h3 className="font-bold text-gray-900 mb-2">2. कक्षा और स्कूल</h3>
                <p className="text-sm text-gray-700">बच्चा <strong>2026-27 सत्र</strong> में उसी जिले के किसी सरकारी या मान्यता प्राप्त स्कूल में <strong>कक्षा 5</strong> में पढ़ रहा होना चाहिए। जो बच्चे 2026-27 से पहले ही कक्षा 5 पास कर चुके हैं या रिपीटर हैं, वे पात्र नहीं हैं।</p>
              </div>

              <div className="bg-green-50 border-l-4 border-[#035c00] p-5 rounded-r-xl">
                <h3 className="font-bold text-gray-900 mb-2">3. पूर्ण शैक्षणिक सत्र</h3>
                <p className="text-sm text-gray-700">बच्चे ने <strong>कक्षा 3, 4 और 5</strong> की पढ़ाई पूर्ण शैक्षणिक सत्र में की हो। बीच में छोड़ने या अधूरे सत्र की स्थिति में आवेदन अमान्य होगा।</p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-5 rounded-xl">
                <h3 className="font-bold text-yellow-800 mb-2">4. ग्रामीण कोटा (75% सीटें)</h3>
                <p className="text-sm text-yellow-900 mb-2">
                  कम से कम 75% सीटें ग्रामीण क्षेत्र के बच्चों के लिए आरक्षित हैं। ग्रामीण कोटे में आवेदन के लिए:
                </p>
                <ul className="list-disc pl-5 text-yellow-900 space-y-1 text-sm">
                  <li>बच्चे ने कक्षा 3 से 5 तक की पढ़ाई <strong>ग्रामीण क्षेत्र</strong> के स्कूल में की हो</li>
                  <li>अगर एक भी दिन शहरी स्कूल में पढ़ा है तो शहरी कोटे में गिना जाएगा</li>
                  <li>शहरी बच्चों के लिए सिर्फ 25% सीटें उपलब्ध हैं</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How to Apply */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-6">आवेदन कैसे करें — स्टेप बाय स्टेप</h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
              <p>
                JNVST 2027-28 का आवेदन पूरी तरह <strong>ऑनलाइन</strong> और <strong>नि:शुल्क</strong> है। आवेदन <strong>31 जुलाई 2026</strong> से पहले करना ज़रूरी है।
              </p>
            </div>

            <div className="space-y-4">
              {[
                { step: "1", title: "वेबसाइट पर जाएं", desc: "navodaya.gov.in पर जाएं। होमपेज पर 'JNV Class 6 Admission 2027-28' लिंक पर क्लिक करें।" },
                { step: "2", title: "दिशा-निर्देश पढ़ें", desc: "आवेदन से संबंधित सभी दिशा-निर्देश ध्यानपूर्वक पढ़ें। यह बहुत ज़रूरी है क्योंकि गलत आवेदन निरस्त हो जाता है।" },
                { step: "3", title: "जानकारी भरें", desc: "छात्र की व्यक्तिगत, शैक्षणिक और पता संबंधी जानकारी भरें। सभी जानकारी सही-सही भरें।" },
                { step: "4", title: "दस्तावेज़ अपलोड करें", desc: "निर्धारित प्रारूप में बच्चे का फोटो, जन्म प्रमाण पत्र, आधार कार्ड और अन्य दस्तावेज़ अपलोड करें।" },
                { step: "5", title: "फॉर्म जांचें और सबमिट करें", desc: "सभी जानकारी एक बार फिर से जांच लें। सही होने पर फॉर्म सबमिट करें।" },
                { step: "6", title: "रजिस्ट्रेशन नंबर सुरक्षित रखें", desc: "सबमिट करने के बाद रजिस्ट्रेशन नंबर और कन्फर्मेशन पेज डाउनलोड करके प्रिंट कर लें।" },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#035c00] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-5 mt-6">
              <p className="text-red-800 font-bold text-sm">
                 महत्वपूर्ण: आवेदन में गलत जानकारी देने पर आवेदन निरस्त हो जाएगा। सभी दस्तावेज़ सही और पढ़ने योग्य होने चाहिए। अंतिम तिथि के बाद कोई मौका नहीं मिलेगा।
              </p>
            </div>
          </section>

          {/* Required Documents */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-6">ज़रूरी दस्तावेजों की सूची</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { doc: "जन्म प्रमाण पत्र", note: "नगर निगम/ग्राम पंचायत से जारी" },
                { doc: "आधार कार्ड", note: "बच्चे और माता-पिता दोनों का" },
                { doc: "कक्षा 5 की मार्कशीट", note: "2025-26 सत्र की" },
                { doc: "पासपोर्ट साइज फोटो", note: "हाल का रंगीन फोटो" },
                { doc: "जाति प्रमाण पत्र", note: "SC/ST/OBC के लिए (यदि लागू हो)" },
                { doc: "निवास प्रमाण पत्र", note: "जिले का प्रमाण" },
                { doc: "BPL प्रमाण पत्र", note: "यदि लागू हो" },
                { doc: "स्कूल प्रमाण पत्र", note: "प्रधानाचार्य द्वारा हस्ताक्षरित" },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start bg-gray-50 p-4 rounded-lg">
                  <span className="text-[#035c00] mt-0.5"></span>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{item.doc}</p>
                    <p className="text-xs text-gray-500">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* JGPS Coaching Methodology */}
          <section className="bg-gradient-to-br from-[#035c00] to-[#023b00] p-8 rounded-2xl text-white">
            <h2 className="text-2xl font-bold mb-6">JGPS में नवोदय कोचिंग — हमारा तरीका</h2>
            
            <div className="space-y-4 text-white/90 leading-relaxed mb-8">
              <p>
                जय गोविंद पब्लिक स्कूल, जोया (अमरोहा) में हम पिछले कई सालों से नवोदय की तैयारी करा रहे हैं। हमारे छात्रों का चयन रेट बहुत अच्छा रहा है। हमारी कोचिंग की कुछ खास बातें:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: "🧠", title: "मानसिक योग्यता पर फोकस", desc: "50 अंकों के इस सेक्शन के लिए रोज़ाना 30 मिनट पज़ल और रीजनिंग प्रैक्टिस। विशेष वर्कबुक और विजुअल एड्स का उपयोग।" },
                { icon: "📐", title: "गणित की मज़बूत नींव", desc: "कक्षा 5 के NCERT सिलेबस पर आधारित। बिना कैलकुलेटर के तेज़ गणना का अभ्यास।" },
                { icon: "", title: "भाषा सुधार कार्यक्रम", desc: "रोज़ाना हिंदी/अंग्रेजी पढ़ने और लिखने का अभ्यास। गद्यांश और व्याकरण पर विशेष ध्यान।" },
                { icon: "", title: "वीकली Mock Test", desc: "हर हफ्ते JNVST पैटर्न पर मॉक टेस्ट। 2 घंटे में पूरा पेपर हल करने की प्रैक्टिस।" },
                { icon: "", title: "पिछले साल के पेपर", desc: "पिछले 10 साल के JNVST पेपर हल करना अनिवार्य। 70% प्रश्न पिछले पैटर्न से आते हैं।" },
                { icon: "", title: "अनुभवी शिक्षक", desc: "6+ साल का अनुभव रखने वाले शिक्षक। 1500+ छात्रों को नवोदय में प्रवेश दिला चुके हैं।" },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h4 className="font-bold text-yellow-400 mb-1">{item.title}</h4>
                  <p className="text-sm text-white/80">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Success Tips */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-6">JNVST की तैयारी के 8 ज़रूरी टिप्स</h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div className="bg-green-50 p-4 rounded-lg">
                <p><strong>टिप 1: मानसिक योग्यता पर सबसे ज़्यादा समय दें।</strong> यह 50 अंकों का सबसे बड़ा सेक्शन है। रोज़ाना कम से कम 20-30 सवाल प्रैक्टिस करें। पैटर्न फिगर, मिरर इमेज और सीरीज पर खास ध्यान दें।</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p><strong>टिप 2: NCERT की किताबें अच्छी तरह पढ़ें।</strong> कक्षा 5 की गणित और हिंदी/अंग्रेजी की NCERT किताबें JNVST के लिए सबसे अच्छी तैयारी हैं। हर चैप्टर के हर सवाल को हल करें।</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p><strong>टिप 3: पिछले 5 साल के पेपर हल करें।</strong> JNVST में 70% प्रश्न पिछले पैटर्न से आते हैं। पिछले 5 साल के पेपर हल करने से पैटर्न समझ में आ जाएगा।</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p><strong>टिप 4: Mock Test ज़रूर दें।</strong> हफ्ते में कम से कम 2-3 Mock Test दें। 2 घंटे में पूरा पेपर हल करने की प्रैक्टिस करें। टाइम मैनेजमेंट सबसे ज़रूरी है।</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p><strong>टिप 5: गणित में स्पीड बढ़ाएं।</strong> गणित के सवाल बिना कैलकुलेटर के हल करने की प्रैक्टिस करें। गुणा-भाग, भिन्न और दशमलव की शॉर्टकट ट्रिक्स सीखें।</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p><strong>टिप 6: भाषा पर रोज़ाना काम करें।</strong> रोज़ाना 15-20 मिनट हिंदी या अंग्रेजी की किताब पढ़ें। गद्यांश समझने की क्षमता बढ़ाएं। मुहावरे और व्याकरण के नियम याद करें।</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg">
                <p><strong>टिप 7: एग्जाम से पहले अच्छी नींद लें।</strong> परीक्षा से एक रात पहले जल्दी सोएं। घबराएं नहीं। आराम से पेपर दें। जिस सवाल का जवाब न आए, उसे छोड़कर आगे बढ़ें।</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p><strong>टिप 8: हर सवाल का जवाब दें।</strong> JNVST में नेगेटिव मार्किंग नहीं है। इसलिए जिस सवाल का जवाब नहीं आता, उसमें भी कोई एक विकल्प चुन लें। अनुमान से सही जवाब आ सकता है।</p>
              </div>
            </div>
          </section>

          {/* Why Navodaya - Benefits */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-6">नवोदय स्कूल क्यों चुनें? — 8 बड़े फायदे</h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                नवोदय स्कूल सिर्फ एक स्कूल नहीं, बल्कि एक <strong>जीवन बदलने वाला अवसर</strong> है। यहाँ पढ़ने वाले बच्चे IIT, AIIMS, IAS जैसी परीक्षाओं में टॉप करते हैं। आइए जानते हैं नवोदय के 8 बड़े फायदे:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {[
                { icon: "", title: "पूरी तरह मुफ्त शिक्षा", desc: "कक्षा 6 से 12 तक पढ़ाई, हॉस्टल, खाना, किताबें, यूनिफॉर्म — सब कुछ मुफ्त। 7 साल की पढ़ाई में एक भी पैसा नहीं लगता।" },
                { icon: "🏠", title: "आवासीय सुविधा", desc: "हर बच्चे को हॉस्टल मिलता है। सुरक्षित और साफ माहौल। 24 घंटे शिक्षकों की देखरेख।" },
                { icon: "", title: "CBSE बोर्ड सिलेबस", desc: "देश भर में मान्यता प्राप्त CBSE बोर्ड से जुड़ाव। आधुनिक कंप्यूटर लैब और लाइब्रेरी।" },
                { icon: "🏃", title: "खेल और एक्टिविटी", desc: "शानदार खेल मैदान, एनसीसी, स्काउटिंग और सांस्कृतिक गतिविधियाँ। सर्वांगीण विकास।" },
                { icon: "", title: "अनुभवी शिक्षक", desc: "केंद्र सरकार द्वारा नियुक्त प्रशिक्षित शिक्षक। 1:30 का शिक्षक-छात्र अनुपात।" },
                { icon: "🏥", title: "मुफ्त स्वास्थ्य सेवा", desc: "हर स्कूल में मेडिकल रूम। नियमित स्वास्थ्य जांच। बीमार होने पर मुफ्त इलाज।" },
                { icon: "🌍", title: "हिंदी-अंग्रेजी दोनों", desc: "तीन भाषाओं की शिक्षा। अंग्रेजी माध्यम से पढ़ाई। राष्ट्रीय स्तर की प्रतियोगिता।" },
                { icon: "", title: "शानदार रिज़ल्ट", desc: "95%+ बोर्ड पास रेट। बड़ी संख्या में छात्र IIT, NEET, NDA में चुने जाते हैं।" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-6">5 गलतियाँ जो ज़्यादातर माता-पिता करते हैं</h2>
            
            <div className="space-y-4">
              {[
                { num: "1", title: "ग्रामीण/शहरी कोटा समझ न पाना", desc: "75% सीटें ग्रामीण के लिए हैं। अगर बच्चे ने एक भी दिन शहरी स्कूल में पढ़ा है तो वह शहरी कोटे में आएगा। सिर्फ 25% सीटों के लिए कम्पटीशन बहुत ज़्यादा है।" },
                { num: "2", title: "मानसिक योग्यता को नज़रअंदाज़ करना", desc: "50 अंकों का ये सबसे बड़ा सेक्शन है। ज़्यादातर माता-पिता सिर्फ गणित पर ध्यान देते हैं। मानसिक योग्यता की तैयारी अलग से करनी होती है।" },
                { num: "3", title: "बहुत देर से शुरू करना", desc: "4-5 महीने की तैयारी ज़रूरी है। अगस्त-सितंबर से शुरू करना सही है। अक्टूबर-नवंबर में शुरू करना बहुत देर हो सकती है।" },
                { num: "4", title: "सिर्फ किताबों से पढ़ना", desc: "Mock Test और पिछले साल के पेपर भी ज़रूरी हैं। सिर्फ किताब पढ़ने से टाइम मैनेजमेंट नहीं सीखा जा सकता।" },
                { num: "5", title: "आवेदन में गलती करना", desc: "आवेदन भरते समय सारी जानकारी सही भरें। फोटो और सिग्नेचर अच्छे से अपलोड करें। गलत जानकारी पर आवेदन निरस्त हो जाएगा।" },
              ].map((item) => (
                <div key={item.num} className="flex gap-4 items-start bg-red-50 p-4 rounded-lg">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {item.num}
                  </div>
                  <div>
                    <h4 className="font-bold text-red-900 text-sm">{item.title}</h4>
                    <p className="text-sm text-red-800">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-6">अक्सर पूछे जाने वाले सवाल (FAQ)</h2>
            
            <div className="space-y-6">
              {[
                { q: "JNVST 2027-28 की परीक्षा कब होगी?", a: "JNVST 2027-28 की परीक्षा 28 नवंबर 2026 को होगी। आवेदन 6 जुलाई से 31 जुलाई 2026 तक भरे जा रहे हैं।" },
                { q: "नवोदय स्कूल में फीस कितनी है?", a: "नवोदय स्कूल पूरी तरह मुफ्त है। पढ़ाई, हॉस्टल, खाना, किताबें, यूनिफॉर्म — सब कुछ सरकार देती है। सिर्फ कक्षा 9 से ₹600/माह खाने का शुल्क लगता है। SC/ST, लड़कियाँ और BPL छात्र इससे भी मुक्त हैं।" },
                { q: "क्या प्राइवेट स्कूल के बच्चे आवेदन कर सकते हैं?", a: "हाँ, बिल्कुल। सरकार से मान्यता प्राप्त किसी भी स्कूल (सरकारी या प्राइवेट) में कक्षा 5 में पढ़ने वाले बच्चे आवेदन कर सकते हैं।" },
                { q: "एक बच्चा कितनी बार JNVST दे सकता है?", a: "बच्चा सिर्फ एक बार JNVST दे सकता है। कक्षा 5 से कक्षा 6 में एडमिशन के लिए सिर्फ एक मौका मिलता है। रिपीटर (दोबारा पढ़ने वाले) पात्र नहीं हैं।" },
                { q: "नवोदय में कितनी सीटें हैं?", a: "हर जिले में एक नवोदय स्कूल है। हर स्कूल में लगभग 80 सीटें होती हैं। पूरे भारत में 661 स्कूल हैं, यानी कुल लगभग 47,000 सीटें।" },
                { q: "JNVST में नेगेटिव मार्किंग है?", a: "नहीं, JNVST में कोई नेगेटिव मार्किंग नहीं है। इसलिए हर सवाल का जवाब देना चाहिए, भले ही अनुमान से ही सही।" },
                { q: "नवोदय की तैयारी कब से शुरू करें?", a: "कक्षा 4 में आते ही तैयारी शुरू कर दें। कम से कम 4-5 महीने रोज़ाना 1-2 घंटे पढ़ाई ज़रूरी है। JGPS में हम जुलाई से बैच शुरू करते हैं।" },
                { q: "JGPS में कोचिंग की फीस कितनी है?", a: "JGPS में नवोदय कोचिंग की फीस बहुत कम और सभी के लिए सुलभ है। सटीक जानकारी के लिए +91 9412137554 पर कॉल करें।" },
              ].map((item, i) => (
                <div key={i} className={i > 0 ? "border-t border-gray-100 pt-6" : ""}>
                  <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Blog Posts */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-6">संबंधित लेख</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "नवोदय एडमिशन 2027-28 पूरी गाइड", link: "/hi/blog/navodaya-admission-2027-complete-guide/" },
                { title: "Navodaya vs Sainik School — कौन सा बेहतर?", link: "/blog/sainik-school-vs-jnvst-2027" },
                { title: "नवोदय ग्रामीण कोटा — पूरी जानकारी", link: "/blog/navodaya-rural-quota-2027" },
                { title: "JNVST 6 महीने की तैयारी योजना", link: "/blog/jnvst-6-month-preparation-plan-2027" },
              ].map((item, i) => (
                <Link key={i} href={item.link} className="bg-gray-50 p-4 rounded-lg hover:bg-green-50 transition-colors">
                  <p className="font-medium text-gray-900 text-sm">{item.title}</p>
                  <span className="text-[#035c00] text-xs">पढ़ें &rarr;</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-r from-yellow-400 to-yellow-300 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">अभी शुरू करें — अंतिम तिथि 31 जुलाई 2026</h2>
            <p className="text-gray-800 mb-6 leading-relaxed">
              JNVST 2027-28 का आवेदन फॉर्म जारी हो चुका है। अंतिम तिथि <strong>31 जुलाई 2026</strong> है। परीक्षा <strong>28 नवंबर 2026</strong> को होगी। अगर आप अमरोहा, जोया या आसपास के इलाके में रहते हैं, तो JGPS School में नवोदय की तैयारी कराई जाती है।
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="bg-[#035c00] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#024700] transition-colors">
                कोचिंग के लिए संपर्क करें
              </Link>
              <a href="tel:+919412137554" className="bg-white text-[#035c00] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                 +91 9412137554
              </a>
            </div>
          </section>

        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-[#035c00] text-white p-6 rounded-2xl shadow-md sticky top-4">
            <h3 className="text-xl font-bold mb-2">JNVST कोचिंग बैच 2027</h3>
            <p className="text-xs text-white/90 mb-4 leading-relaxed">
              हर जिले में 80 सीटें और हज़ारों बच्चे कम्पटीशन में। नवोदय में सफलता के लिए स्पीड और एक्यूरेसी ज़रूरी है।
            </p>

            <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-3 mb-4">
              <p className="text-yellow-400 font-bold text-sm"> अंतिम तिथि: 31 जुलाई 2026</p>
              <p className="text-xs text-white/80">आवेदन फॉर्म जारी हो चुका है</p>
            </div>

            <ul className="space-y-3 text-sm text-white/90 mb-6">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">✓</span>
                <span><strong>मानसिक योग्यता (50%):</strong> विजुअल एड्स और स्पेशल वर्कबुक से ट्रेनिंग</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">✓</span>
                <span><strong>गणित:</strong> बिना कैलकुलेटर के तेज़ गणना की प्रैक्टिस</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">✓</span>
                <span><strong>भाषा:</strong> रोज़ाना हिंदी/अंग्रेजी कॉम्प्रिहेंशन प्रैक्टिस</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">✓</span>
                <span><strong>Mock Test:</strong> हर हफ्ते JNVST पैटर्न पर टेस्ट</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">✓</span>
                <span><strong>पिछले पेपर:</strong> 10 साल के पेपर हल करना अनिवार्य</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="bg-yellow-400 hover:bg-yellow-300 text-[#035c00] font-bold py-3 px-6 rounded-lg text-center block text-sm transition-all shadow-md"
            >
              कोचिंग के बारे में पूछें
            </Link>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/coaching/navodaya-vidyalaya/syllabus" className="text-[#035c00] hover:underline font-medium flex items-center justify-between text-sm">
                  <span>विस्तृत सिलेबस</span><span>&rarr;</span>
                </Link>
              </li>
              <li className="border-t border-gray-100 pt-3">
                <Link href="/coaching/navodaya-vidyalaya/previous-year-papers" className="text-[#035c00] hover:underline font-medium flex items-center justify-between text-sm">
                  <span>पिछले साल के पेपर</span><span>&rarr;</span>
                </Link>
              </li>
              <li className="border-t border-gray-100 pt-3">
                <Link href="/coaching/navodaya-vidyalaya/eligibility-and-dates" className="text-[#035c00] hover:underline font-medium flex items-center justify-between text-sm">
                  <span>पात्रता और तारीखें</span><span>&rarr;</span>
                </Link>
              </li>
              <li className="border-t border-gray-100 pt-3">
                <Link href="/entrance-eligibility-checker" className="text-[#035c00] hover:underline font-medium flex items-center justify-between text-sm">
                  <span>Eligibility Checker</span><span>&rarr;</span>
                </Link>
              </li>
              <li className="border-t border-gray-100 pt-3">
                <a href="https://navodaya.gov.in" target="_blank" rel="noopener noreferrer" className="text-[#035c00] hover:underline font-medium flex items-center justify-between text-sm">
                  <span>navodaya.gov.in</span><span>↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
