import { Metadata } from "next";
import MockTest from "@/components/MockTest";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Free Class 6 Entrance Mock Test Online | Jai Govind Public School",
  description:
    "Attempt a free Class 6 entrance mock test online — 30 questions on Maths, EVS and English based on the AMU, JMI, Navodaya and Sainik School pattern. Instant result with answer explanations. No registration needed.",
  keywords:
    "free mock test class 6, entrance mock test online, AMU class 6 mock test, Navodaya mock test free, Sainik school practice test, JMI class 6 sample paper, JGPS mock test",
  alternates: {
    canonical: "https://jgps.in/mock-test",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    title: "Free Class 6 Entrance Mock Test | Jai Govind Public School",
    description:
      "30 questions · Maths, EVS, English · Instant result with explanations. Free for all students.",
    url: "https://jgps.in/mock-test",
    siteName: "Jai Govind Public School",
    images: [
      {
        url: "https://jgps.in/images/school-building.avif",
        width: 1200,
        height: 630,
        alt: "Free Class 6 Entrance Mock Test at JGPS",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Class 6 Entrance Mock Test | JGPS",
    description:
      "30 questions · Maths, EVS, English · Instant result. Free for all students.",
    images: ["https://jgps.in/images/school-building.avif"],
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Free Class 6 Entrance Mock Test Online | Jai Govind Public School",
  description:
    "Attempt a free Class 6 entrance mock test online — 30 questions on Maths, EVS and English based on the AMU, JMI, Navodaya and Sainik School pattern.",
  url: "https://jgps.in/mock-test/",
  inLanguage: "en",
  isPartOf: {
    "@type": "WebSite",
    name: "Jai Govind Public School",
    url: "https://jgps.in/",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://jgps.in/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Free Mock Test",
        item: "https://jgps.in/mock-test/",
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the JGPS mock test really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Class 6 entrance mock test is completely free — no registration, no fees and no login required. Just click Start and attempt all 30 questions.",
      },
    },
    {
      "@type": "Question",
      name: "Which entrance exams does this mock test cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The test follows the Class 6 entrance pattern used by AMU, Jamia Millia Islamia, Navodaya (JNVST) and Sainik Schools — with sections on Mathematics, EVS and English.",
      },
    },
    {
      "@type": "Question",
      name: "How many questions are there and what is the time limit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There are 30 questions (10 each from Maths, EVS and English) with a 45-minute time limit, similar to the real entrance exam conditions.",
      },
    },
    {
      "@type": "Question",
      name: "Do I get the correct answers after the test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. After submitting, you see your total score, section-wise marks and a full review of every question with the correct answer and a short explanation.",
      },
    },
  ],
};

const faqs = [
  {
    q: "Is the JGPS mock test really free?",
    a: "Yes. The Class 6 entrance mock test is completely free — no registration, no fees and no login required. Just click Start and attempt all 30 questions.",
  },
  {
    q: "Which entrance exams does this mock test cover?",
    a: "The test follows the Class 6 entrance pattern used by AMU, Jamia Millia Islamia, Navodaya (JNVST) and Sainik Schools — with sections on Mathematics, EVS and English.",
  },
  {
    q: "How many questions are there and what is the time limit?",
    a: "There are 30 questions (10 each from Maths, EVS and English) with a 45-minute time limit, similar to the real entrance exam conditions.",
  },
  {
    q: "Do I get the correct answers after the test?",
    a: "Yes. After submitting, you see your total score, section-wise marks and a full review of every question with the correct answer and a short explanation.",
  },
];

export default function MockTestPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="py-10 md:py-14 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="sr-only">
            Free Class 6 Entrance Mock Test Online — AMU, JMI, Navodaya & Sainik
            Pattern
          </h1>
          <Suspense fallback={null}>
            <MockTest />
          </Suspense>

          <div className="mt-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-150 rounded-xl p-5"
                >
                  <h3 className="font-bold text-gray-900 mb-1.5">{f.q}</h3>
                  <p className="text-sm text-gray-600">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
