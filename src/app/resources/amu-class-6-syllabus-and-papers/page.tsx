import { Metadata } from 'next';
import Image from '@/components/LazyImage';
import PageHero from '@/components/PageHero';
import LeadForm from '@/components/LeadForm';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'AMU Class 6 Entrance Syllabus PDF & Previous Year Papers | JGPS',
  description: 'Download Aligarh Muslim University (AMU) school admission Class 6 entrance exam syllabus, solved question papers, and language cut-off guides. Free PDF.',
  keywords: 'amu class 6 entrance syllabus, amu school admission 2027-28, amu class 6 entrance paper pdf, amu school admission form class 6, amu entrance Urdu syllabus, amu class 6 urdu cutoff marks 2026, JGPS coaching Amroha',
  robots: 'max-image-preview:large',
};

export default function AmuPapersPage() {
  const amuFaqs = [
    {
      question: "Is Urdu mandatory to qualify the AMU Class 6 entrance exam?",
      answer: "Yes. The exam has a mandatory Languages section (Section-I) worth 25 marks consisting of English, Hindi, and Urdu. A candidate must score at least 40% (10 marks out of 25) in this section to qualify. If they score less than 10 marks, their Mathematics and Science sections are not evaluated."
    },
    {
      question: "What is the expected amu class 6 urdu cutoff marks 2026 for students from Joya and Amroha?",
      answer: "To qualify for evaluation in Section-II, students from Joya and Amroha must score at least 10 marks out of 25 (40% cutoff) in the Language section, which includes Urdu. Historically, getting higher marks in the amu class 6 urdu cutoff marks 2026 selection has been important for overall merit. JGPS Joya offers special language classes to help rural candidates cross the cutoff margins easily."
    },
    {
      question: "What is the age limit for AMU Class 6 school admission?",
      answer: "Candidates must be between 10 to 12 years of age as of March 31st of the year of admission."
    },
    {
      question: "What is the syllabus for the Mathematics section in AMU Class 6 exam?",
      answer: "The mathematics syllabus is based on the CBSE/NCERT Class 5 curriculum. Key topics include Number Systems, LCM & HCF, Fractions, Decimals, Profit & Loss, Simple Interest, Unitary Method, and Area & Perimeter."
    },
    {
      question: "Where can I download the official AMU Class 6 entrance previous year papers?",
      answer: "You can download verified previous year solved question papers (2020-2024) from the JGPS download panel on this page by submitting the resource download request form."
    }
  ];

  const breadcrumbs = [
    { name: "Home", item: "https://jgps.in/" },
    { name: "Resources", item: "https://jgps.in/resources/" },
    { name: "AMU Syllabus & Papers", item: "https://jgps.in/resources/amu-class-6-syllabus-and-papers/" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <PageHero
        title="AMU Class 6 Resources"
        subtitle="Syllabus & Past Papers PDF"
        badge="Download Center"
        description="Access official AMU school admission syllabus guidelines, solved question booklets (2020-2024), and expert Urdu grammar worksheets."
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "AMU Syllabus & Papers" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Main Info */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
              AMU Class 6 Entrance Exam Syllabus & Solved Question Papers PDF
            </h1>
            <div className="relative w-full mb-6 aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src="/images/blog/amu-coaching-featured.avif"
                alt="AMU Entrance Exam Preparation"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Securing admission in Aligarh Muslim University (AMU) schools (like STS School or AMU Girls High School) is highly competitive. Candidates must clear a written exam of 85 marks and subsequent personal interviews. 
            </p>
            <p className="text-gray-600 leading-relaxed">
              To support parent-led home preparation, this page provides free access to official AMU Class 6 syllabus files, solved past question papers, and guidelines for the mandatory language section.
            </p>
          </section>

          {/* Exam Structure details */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-[#035c00] mb-4">
              AMU Class 6 Written Test Pattern & Selection Rules
            </h2>
            
            <div className="space-y-4 text-sm text-gray-600">
              <p>
                The AMU written test is worth <strong>85 marks</strong> (Objective MCQs) with a duration of 2 hours.
              </p>
              
              <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg font-medium text-gray-800">
                âš ï¸ CRITICAL RULE: A candidate must score at least 40% (10 marks out of 25) in Section-I (Languages) to qualify. If they fail this section, their Math and Science marks are not even evaluated.
              </div>

              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong>Section-I (Languages):</strong> English, Hindi, Urdu - 25 Questions (25 Marks)
                </li>
                <li>
                  <strong>Section-II (Maths & Science):</strong> Mathematics (30 Marks) and General Science (30 Marks) - 60 Questions (60 Marks)
                </li>
                <li>
                  <strong>Personal Interview:</strong> Worth 15 Marks (For candidates qualifying the written cutoff list)
                </li>
              </ul>
            </div>
          </section>

          {/* Subject syllabus highlights */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-[#035c00] mb-4">Subject-wise Syllabus Details</h2>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>
                <strong className="text-gray-900">Mathematics (30 Marks):</strong> LCM & HCF, fractions, decimals, area and perimeter of basic shapes, unitary method, profit & loss, number properties based on Class 5 CBSE curriculum.
              </li>
              <li>
                <strong className="text-gray-900">General Science (30 Marks):</strong> Reproduction in plants, food & health, states of matter, force and work, natural resources, basic human body organs.
              </li>
              <li>
                <strong className="text-gray-900">Urdu Language:</strong> Alphabet connections, spelling corrections, synonyms/antonyms, writing simple words, genders, singular/plural.
              </li>
            </ul>
          </section>

          {/* Native HTML FAQ Accordion section */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQ)</h2>
            <div className="space-y-4">
              {amuFaqs.map((faq, idx) => (
                <details 
                  key={idx} 
                  className="group border border-gray-150 rounded-xl overflow-hidden bg-gray-50 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex justify-between items-center p-5 font-bold text-gray-900 cursor-pointer hover:bg-gray-100/50 transition-colors select-none">
                    <span className="text-sm">{faq.question}</span>
                    <span className="text-[#035c00] transition-transform duration-300 group-open:rotate-180">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="p-5 text-sm text-gray-600 leading-relaxed bg-white border-t border-gray-150">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>
        </div>

        {/* Right: Lead Capture Form */}
        <div className="space-y-8">
          <LeadForm
            examName="AMU Class 6 Entrance"
            downloadUrl="/downloads/amu-class-6-entrance-resources.txt"
            downloadFilename="amu-class-6-entrance-resources.txt"
          />

          {/* Special Batch info */}
          <div className="bg-[#035c00] text-white p-6 rounded-2xl shadow-md border border-[#035c00]">
            <h3 className="text-lg font-bold mb-2">JGPS Dedicated AMU Batch</h3>
            <p className="text-xs text-white/90 mb-4 leading-relaxed">
              We run highly successful preparation batches in Joya with dedicated faculty for the AMU school admissions exams.
            </p>
            <ul className="space-y-2 text-xs text-white/95 mb-6">
              <li>âœ" Special focus on Urdu grammar and basic script writing</li>
              <li>âœ" Daily math calculations and science reasoning worksheets</li>
              <li>âœ" 15+ years solved papers practiced under timed conditions</li>
              <li>âœ" Mock interview simulations by senior academic panels</li>
            </ul>
            <a
              href="https://wa.me/919997161490?text=Hi,%20I%20want%20to%20inquire%20about%20AMU%20School%20Entrance%20Coaching%20at%20JGPS%20Joya"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-300 text-[#035c00] font-bold py-3 px-4 rounded-xl text-center block text-sm transition-all shadow"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(amuFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }}
      />
    </div>
  );
}
