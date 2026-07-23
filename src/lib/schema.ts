import { schoolData } from "@/data/school-data";

export function generateSchemaMarkup() {
  const schoolSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "School",
        "@id": "https://jgps.in/#school",
        "name": schoolData.name,
        "description": `${schoolData.name} in Joya, Amroha offers quality English medium education from Nursery to Class 8, with expert entrance exam coaching for AMU, JMI, Sainik School, Military School, and Vidyagyan.`,
        "url": "https://jgps.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://jgps.in/images/school-logo.avif"
        },
        "image": "https://jgps.in/images/school-building.avif",
        "telephone": schoolData.contacts.principal.phone,
        "email": "jaigovindschool@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "NH9 Delhi Road, Joya",
          "addressLocality": "Joya",
          "addressRegion": "Amroha, Uttar Pradesh",
          "postalCode": "244222",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": schoolData.location.coordinates.lat,
          "longitude": schoolData.location.coordinates.lng
        },
        "hasMap": schoolData.location.mapEmbedUrl,
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Joya",
            "sameAs": "https://www.wikidata.org/wiki/Q1929949"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Amroha",
            "sameAs": "https://en.wikipedia.org/wiki/Amroha"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Moradabad",
            "sameAs": "https://en.wikipedia.org/wiki/Moradabad"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Sambhal",
            "sameAs": "https://en.wikipedia.org/wiki/Sambhal"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Gajraula",
            "sameAs": "https://en.wikipedia.org/wiki/Gajraula"
          }
        ],
        "sameAs": [
          schoolData.social.facebook,
          schoolData.social.instagram,
          "https://www.wikidata.org/wiki/Q1929949"
        ],
        "employee": [
          {
            "@type": "Person",
            "name": schoolData.contacts.manager.name,
            "jobTitle": schoolData.contacts.manager.role,
            "telephone": schoolData.contacts.manager.phone
          },
          {
            "@type": "Person",
            "name": schoolData.contacts.principal.name,
            "jobTitle": schoolData.contacts.principal.role,
            "telephone": schoolData.contacts.principal.phone
          }
        ],
        "knowsAbout": [
          "Primary Education",
          "Secondary Education Preparation",
          "AMU Class 6 Entrance Exam Coaching",
          "AMU Class 9 Entrance Exam Coaching",
          "JMI Class 6 Entrance Exam Preparation",
          "JMI Class 9 Entrance Exam Preparation",
          "Sainik School Entrance Exam (AISSEE) Coaching",
          "Rashtriya Military School (RMS) Entrance Coaching",
          "Vidyagyan School Admission Coaching",
          "Class 6 Entrance Coaching",
          "Class 9 Entrance Coaching",
          "English Medium School Joya Amroha"
        ]
      },
      {
        "@type": "Course",
        "@id": "https://jgps.in/coaching/#amu-course",
        "name": "AMU Class 6 & 9 Entrance Exam Coaching",
        "description": "Expert coaching and syllabus preparation for Aligarh Muslim University (AMU) school entrance examinations.",
        "sameAs": [
          "https://en.wikipedia.org/wiki/Aligarh_Muslim_University",
          "https://www.wikidata.org/wiki/Q442345"
        ],
        "provider": {
          "@type": "School",
          "@id": "https://jgps.in/#school"
        }
      },
      {
        "@type": "Course",
        "@id": "https://jgps.in/coaching/#jmi-course",
        "name": "JMI Class 6 & 9 Entrance Exam Coaching",
        "description": "Comprehensive guidance and practice tests for Jamia Millia Islamia (JMI) school entrance exams.",
        "sameAs": [
          "https://en.wikipedia.org/wiki/Jamia_Millia_Islamia",
          "https://www.wikidata.org/wiki/Q1255476"
        ],
        "provider": {
          "@type": "School",
          "@id": "https://jgps.in/#school"
        }
      },
      {
        "@type": "Course",
        "@id": "https://jgps.in/coaching/#sainik-course",
        "name": "Sainik School Entrance Exam (AISSEE) Coaching",
        "description": "Specialized coaching for All India Sainik School Entrance Examination for Admission in Classes 6 and 9.",
        "sameAs": [
          "https://en.wikipedia.org/wiki/Sainik_School",
          "https://www.wikidata.org/wiki/Q3522204"
        ],
        "provider": {
          "@type": "School",
          "@id": "https://jgps.in/#school"
        }
      },
      {
        "@type": "Course",
        "@id": "https://jgps.in/coaching/#rms-course",
        "name": "Rashtriya Military School (RMS) Coaching",
        "description": "Dedicated entrance preparation classes for Rashtriya Military School admissions.",
        "sameAs": [
          "https://en.wikipedia.org/wiki/Rashtriya_Military_School",
          "https://www.wikidata.org/wiki/Q7294975"
        ],
        "provider": {
          "@type": "School",
          "@id": "https://jgps.in/#school"
        }
      },
      {
        "@type": "Course",
        "@id": "https://jgps.in/coaching/#vidyagyan-course",
        "name": "Vidyagyan School Entrance Exam Coaching",
        "description": "Focused coaching for Vidyagyan rural talent search scholarship entrance exams.",
        "sameAs": [
          "https://en.wikipedia.org/wiki/VidyaGyan",
          "https://www.wikidata.org/wiki/Q25302636"
        ],
        "provider": {
          "@type": "School",
          "@id": "https://jgps.in/#school"
        }
      }
    ]
  };

  return schoolSchema;
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateBreadcrumbSchema(breadcrumbs: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": crumb.name,
      "item": crumb.item
    }))
  };
} 