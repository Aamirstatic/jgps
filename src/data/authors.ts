export interface Author {
  id: string;
  slug: string;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  imageUrl: string;
}

export const authors: Author[] = [
  {
    id: "rifaul-hasan",
    slug: "rifaul-hasan",
    name: "Rifaul Hasan",
    role: "Principal & Academic Expert, JGPS",
    bio: "Rifaul Hasan has over 15 years of experience guiding students for competitive exams like Sainik School, JNVST, and AMU. His mission is to make quality education accessible to every child through structured learning methodologies.",
    expertise: ["School Leadership", "Academic Planning", "Entrance Strategy"],
    imageUrl: "/images/authors/rifaul-hasan.jpeg"
  },
  {
    id: "priya-verma",
    slug: "priya-verma",
    name: "Priya Verma",
    role: "Student Counselor",
    bio: "Priya specializes in child psychology and mental well-being. She helps students manage exam stress and build a healthy mindset during tough preparation phases.",
    expertise: ["Child Psychology", "Exam Stress Management", "Counseling"],
    imageUrl: "/images/authors/priya-verma.jpeg"
  },
  {
    id: "amit-kumar",
    slug: "amit-kumar",
    name: "Amit Kumar",
    role: "Entrance Exam Specialist",
    bio: "With a 90% success rate, Amit sir breaks down complex Math and Reasoning concepts for JNVST and Sainik School aspirants. He focuses on speed and accuracy.",
    expertise: ["Sainik School Prep", "JNVST Syllabus", "Mathematics shortcuts"],
    imageUrl: "/images/authors/amit-kumar.jpeg"
  },
  {
    id: "neha-singh",
    slug: "neha-singh",
    name: "Neha Singh",
    role: "Study Habits Expert",
    bio: "Neha develops effective study schedules, pomodoro techniques, and active recall methods to help students retain information efficiently without burnout.",
    expertise: ["Productivity", "Active Recall", "Parenting Tips"],
    imageUrl: "/images/authors/neha-singh.jpeg"
  },
  {
    id: "ravi-prakash",
    slug: "ravi-prakash",
    name: "Ravi Prakash",
    role: "Current Affairs & GK Faculty",
    bio: "Ravi is an expert in keeping young minds updated with global events and static GK. His materials are highly effective for the AISSEE General Knowledge section.",
    expertise: ["General Knowledge", "Current Affairs", "Interview Prep"],
    imageUrl: "/images/authors/ravi-prakash.jpeg"
  },
  {
    id: "sameer",
    slug: "sameer",
    name: "Sameer",
    role: "Entrance Exam Coach, JGPS",
    bio: "Sameer has 8+ years of experience in competitive exam preparation. He teaches Math and Reasoning shortcuts for AMU, Sainik School, and other entrance exams. Known for making complex topics simple.",
    expertise: ["Mathematics", "Reasoning", "AMU Preparation", "Sainik School Prep"],
    imageUrl: "/images/authors/sameer.jpeg"
  },
  {
    id: "aamir",
    slug: "aamir",
    name: "Aamir",
    role: "English & Urdu Language Expert, JGPS",
    bio: "Aamir specializes in English and Urdu language preparation. He makes the language section easy for AMU, JMI, and other entrance exam aspirants with practical tips and techniques.",
    expertise: ["English Language", "Urdu", "JMI Entrance", "AMU Language Section"],
    imageUrl: "/images/authors/aamir.png"
  },
  {
    id: "nisha",
    slug: "nisha",
    name: "Nisha",
    role: "Primary Education Expert, JGPS",
    bio: "Nisha specializes in teaching children from Class 1 to 5. She uses play-based learning methods and guides parents on how to support their child's early education journey.",
    expertise: ["Primary Education", "Child Learning", "Parenting Guidance", "NEP 2020"],
    imageUrl: "/images/authors/nisha.jpeg"
  },
  {
    id: "najma",
    slug: "najma",
    name: "Najma",
    role: "Navodaya & JNVST Coach, JGPS",
    bio: "Najma has 7+ years of experience preparing students for Navodaya Vidyalaya entrance exams. She specializes in coaching rural students for JNVST with an 85% success rate.",
    expertise: ["Navodaya Admission", "JNVST Preparation", "Rural Student Coaching", "Mental Ability"],
    imageUrl: "/images/authors/najma.jpeg"
  }
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find(author => author.slug === slug);
}
