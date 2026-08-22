import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import FaqContent from '@/components/FaqContent';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQs) | Jai Govind Public School Joya',
  description: 'Find answers to common questions about JGPS admissions, CBSE academic programs, transport coverage, and special coaching for AMU/Sainik entrance exams.',
  keywords: 'school FAQs Amroha, Jai Govind Public School admission questions, AMU entrance coaching timing, school bus routes Amroha, best English medium school Joya UP, admissions age limit Class 1, documents required school admission',
  alternates: {
    canonical: 'https://jgps.in/faq',
  },
  openGraph: {
    title: 'Frequently Asked Questions | Jai Govind Public School',
    description: 'Find answers to common questions about admissions, fees, and coaching.',
    url: 'https://jgps.in/faq',
    siteName: 'Jai Govind Public School',
    images: [{
      url: 'https://jgps.in/images/school-building.avif',
      width: 1200,
      height: 630,
      alt: 'Frequently Asked Questions',
    }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions | Jai Govind Public School',
    description: 'Find answers to common questions about admissions, fees, and coaching.',
    images: ['https://jgps.in/images/school-building.avif'],
  },
};

const faqSections = [
  {
    category: 'Admissions',
    items: [
      {
        q: 'What is the age criteria for Nursery and Class 1 admissions?',
        a: 'For Nursery admission, the child must be at least 3 years old by March 31 of the academic year. For Class 1 admission, the child must have completed 6 years of age by March 31.'
      },
      {
        q: 'What documents are required for the admission process?',
        a: 'You will need: (1) Original Birth Certificate for verification, (2) Transfer Certificate (TC) from the previous recognized school, (3) Report card of the qualifying class, (4) Passport-size photographs of the student and parents, and (5) Aadhaar Card copy of the student and parents.'
      },
      {
        q: 'How can I know about school fees at JGPS?',
        a: 'We do not publish fee details online. Please visit our school office at Joya or call +91 9997161490 to discuss fees and payment options directly with our admissions team.'
      },
      {
        q: 'When do admissions close for the academic session 2027-28?',
        a: 'Admissions typically open in January and close by the end of April. However, subject to seat availability, registration for pre-primary classes may remain open slightly longer. We recommend applying early as our seats are limited to 25 per class.'
      },
      {
        q: 'Is there an entrance test for new admissions?',
        a: 'Yes, for Class 1 and above, students undergo a basic academic assessment in Mathematics and English to evaluate their baseline concepts. For Nursery and Kindergarten admissions, there is only an informal interaction with the child and parents.'
      },
      {
        q: 'Do you accept mid-term admissions?',
        a: 'Mid-term admissions are accepted only in exceptional cases (such as parental transfer) and are strictly subject to seat availability and submission of a valid Transfer Certificate.'
      }
    ]
  },
  {
    category: 'Academics & CBSE Curriculum',
    items: [
      {
        q: 'Is the medium of instruction at JGPS English or Hindi?',
        a: 'Jai Govind Public School is a focused English medium school. All major subjects (Science, Mathematics, Social Studies, Computer Science) are taught in English. Hindi and Urdu are taught as language subjects.'
      },
      {
        q: 'What is the student-to-teacher ratio at JGPS?',
        a: 'We maintain an average student-teacher ratio of 25:1. This makes sure that every child receives individual attention, customized feedback, and focused support from our teaching staff.'
      },
      {
        q: 'Does the school follow the CBSE syllabus?',
        a: 'Yes, our academic curriculum and syllabus are based on NCERT guidelines in strict alignment with CBSE standards. This prepares students seamlessly for higher secondary boards.'
      },
      {
        q: 'Do you offer computer education from early classes?',
        a: 'Yes, computer education starts from Class 1. We have a focused computer laboratory where students gain hands-on digital literacy, programming basics, and typing skills.'
      },
      {
        q: 'Are co-curricular activities part of the school routine?',
        a: 'Absolutely. We conduct weekly activities including debate competition, GK quizzes, drawing/painting contests, science model exhibitions, and sports meets to make sure all-round personality growth.'
      }
    ]
  },
  {
    category: 'Entrance Exam Coaching Classes',
    items: [
      {
        q: 'Which competitive exams does JGPS prepare students for?',
        a: 'We run special coaching programs for entrance examinations to top schools: (1) Aligarh Muslim University (AMU), (2) Jamia Millia Islamia (JMI), (3) Sainik School (AISSEE), (4) Rashtriya Military School (RMS), and (5) Vidyagyan School.'
      },
      {
        q: 'Are the coaching classes integrated into the regular school timings?',
        a: 'Yes, we offer both integrated options where foundation topics are covered during school hours, and special extension batches after regular school timings (extra classes) for thorough mock testing and paper solving.'
      },
      {
        q: 'Which classes are eligible for entrance coaching?',
        a: 'Our coaching program specifically targets Class 6 Entrance (students preparing during Class 5) and Class 9 Entrance (students preparing during Class 8).'
      },
      {
        q: 'Is there a separate charge for entrance coaching batches?',
        a: 'Coaching batch details are shared in person at the school office. Please contact the Principal at +91 9997161490 for coaching registration and related information.'
      },
      {
        q: 'How does JGPS prepare students for the AMU language cutoff?',
        a: 'For AMU, qualifying the language section (Urdu, Hindi, English) with minimum 40% is mandatory. JGPS provides special Urdu grammar and vocabulary classes from basic levels to make sure every student clears the cutoff easily.'
      },
      {
        q: 'What is JGPS selection track record in entrance exams?',
        a: 'We have a highly successful track record with numerous selections in AMU, Jamia Millia Islamia, and various Sainik and Military schools. Our selection list is updated annually on the notice board.'
      }
    ]
  },
  {
    category: 'Facilities & Transport',
    items: [
      {
        q: 'Does the school provide a bus/van transport facility?',
        a: 'Yes, we operate a fleet of safe and monitored school vans/buses covering major routes in Joya, Amroha city, and nearby areas.'
      },
      {
        q: 'Which specific local areas are covered by the school transport?',
        a: 'Our transport routes cover: Joya, Amroha City, Gajraula routes, Sambhal Road routes, Moradabad border areas, Didoli, Pakbara, Hasanpur road, and nearby rural centers. Contact the school office to verify route availability for your sector.'
      },
      {
        q: 'Are classrooms air-cooled and comfortable?',
        a: 'Yes, all our classrooms are spacious, well-ventilated, and equipped with air-cooling systems to make sure comfort during peak summer months.'
      },
      {
        q: 'What lab facilities are available at the campus?',
        a: 'We have a fully equipped Computer Laboratory with internet connectivity, a Science Laboratory for chemistry/physics experiments, and a focused Activity Room for pre-primary sections.'
      },
      {
        q: 'How does the school make sure student safety on campus?',
        a: 'Student safety is our top priority. Our entire campus is under active 24/7 CCTV surveillance. We have gated security entry, and students are never allowed to leave the campus without written parental authorization.'
      }
    ]
  },
  {
    category: 'General Administration',
    items: [
      {
        q: 'What are the school timings during summer and winter?',
        a: 'Summer Timings are: 7:30 AM to 1:30 PM. Winter Timings are: 8:30 AM to 2:30 PM. Exact change dates are communicated via notice and SMS.'
      },
      {
        q: 'What are the school office working hours?',
        a: 'The school office works from Monday to Saturday, 8:00 AM to 3:00 PM. Parents can visit during these hours for queries, fee submissions, or admissions registration.'
      },
      {
        q: "How can parents track their child's academic performance?",
        a: 'We host regular Parent-Teacher Meetings (PTMs) after every unit test and terminal examination. Additionally, class test reports and homework updates are sent directly to parents.'
      },
      {
        q: 'Is there a school uniform, and where can it be purchased?',
        a: 'Yes, we have a specific uniform for weekdays and a separate house/sports uniform for Saturdays. Uniform specifications and local vendor lists can be collected from the school desk.'
      }
    ]
  }
];

export default function FaqPage() {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqSections.flatMap(section => 
      section.items.map(item => ({
        '@type': 'Question',
        'name': item.q,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': item.a
        }
      }))
    )
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Inject FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <PageHero
        title="FAQ"
        subtitle="Frequently Asked Questions"
        description="Have questions about admissions, transport, or entrance coaching? Find complete answers below."
        breadcrumbs={[
          { label: "FAQ" }
        ]}
      />

      <FaqContent sections={faqSections} />

      {/* Support CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-20">
        <div className="bg-[#035c00]/5 border border-[#035c00]/10 rounded-2xl p-8 text-center shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-6 text-sm max-w-xl mx-auto">
            Contact our school administration directly. We are happy to guide you with any queries regarding admissions or competitive exam batches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+919997161490"
              className="w-full sm:w-auto bg-[#035c00] hover:bg-[#024700] text-white font-bold py-3 px-8 rounded-xl text-sm transition shadow-md hover:-translate-y-0.5 duration-300 text-center"
            >
              Call Principal (+91 9997161490)
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 font-bold py-3 px-8 rounded-xl text-sm transition shadow-sm hover:-translate-y-0.5 duration-300 text-center"
            >
              Send Message
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
