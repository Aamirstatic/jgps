export interface MockQuestion {
  id: number;
  section: "Mathematics" | "EVS" | "English";
  question: string;
  options: [string, string, string, string];
  answer: number; // index of the correct option (0-3)
  explanation: string;
}

export const MOCK_TEST_DURATION_MINUTES = 45;

export const mockQuestions: MockQuestion[] = [
  // ---------------- Mathematics (10) ----------------
  {
    id: 1,
    section: "Mathematics",
    question: "What is the place value of 7 in 4,72,518?",
    options: ["700", "7,000", "70,000", "7,00,000"],
    answer: 2,
    explanation: "In the Indian number system, 4,72,518 means 4 lakh 72 thousand 518. The 7 is at the ten-thousands place, so its place value is 70,000.",
  },
  {
    id: 2,
    section: "Mathematics",
    question: "What is 25 × 16?",
    options: ["350", "400", "450", "300"],
    answer: 1,
    explanation: "25 × 16 = 25 × (10 + 6) = 250 + 150 = 400.",
  },
  {
    id: 3,
    section: "Mathematics",
    question: "Which of these is the smallest fraction?",
    options: ["1/2", "1/5", "1/3", "1/4"],
    answer: 1,
    explanation: "When the numerators are the same, the fraction with the largest denominator is the smallest. So 1/5 is the smallest.",
  },
  {
    id: 4,
    section: "Mathematics",
    question: "A rectangle is 12 cm long and 8 cm wide. What is its perimeter?",
    options: ["20 cm", "96 cm", "40 cm", "48 cm"],
    answer: 2,
    explanation: "Perimeter of a rectangle = 2 × (length + breadth) = 2 × (12 + 8) = 2 × 20 = 40 cm.",
  },
  {
    id: 5,
    section: "Mathematics",
    question: "How many grams are there in 2.5 kg?",
    options: ["250 g", "2,500 g", "25,000 g", "205 g"],
    answer: 1,
    explanation: "1 kg = 1,000 g, so 2.5 kg = 2.5 × 1,000 = 2,500 g.",
  },
  {
    id: 6,
    section: "Mathematics",
    question: "Which of these numbers is divisible by BOTH 2 and 3?",
    options: ["14", "21", "36", "49"],
    answer: 2,
    explanation: "36 is even (divisible by 2) and the sum of its digits, 3 + 6 = 9, is divisible by 3. 14 and 49 are not divisible by 3; 21 is not even.",
  },
  {
    id: 7,
    section: "Mathematics",
    question: "What is the HCF of 12 and 18?",
    options: ["3", "6", "9", "36"],
    answer: 1,
    explanation: "Factors of 12: 1, 2, 3, 4, 6, 12. Factors of 18: 1, 2, 3, 6, 9, 18. The greatest common factor is 6.",
  },
  {
    id: 8,
    section: "Mathematics",
    question: "A train travels 60 km in 1 hour at a constant speed. How far will it travel in 3.5 hours?",
    options: ["180 km", "210 km", "240 km", "200 km"],
    answer: 1,
    explanation: "Distance = speed × time = 60 × 3.5 = 210 km.",
  },
  {
    id: 9,
    section: "Mathematics",
    question: "What is the next number in the pattern: 3, 6, 12, 24, ...?",
    options: ["30", "36", "42", "48"],
    answer: 3,
    explanation: "Each number is double the previous one (×2): 3 → 6 → 12 → 24 → 48.",
  },
  {
    id: 10,
    section: "Mathematics",
    question: "A shopkeeper buys a pen for ₹40 and sells it for ₹50. What is his profit?",
    options: ["₹5", "₹10", "₹90", "₹40"],
    answer: 1,
    explanation: "Profit = Selling price − Cost price = ₹50 − ₹40 = ₹10.",
  },

  // ---------------- EVS / Environmental Studies (10) ----------------
  {
    id: 11,
    section: "EVS",
    question: "Which part of a plant absorbs water and minerals from the soil?",
    options: ["Leaves", "Flowers", "Roots", "Stem"],
    answer: 2,
    explanation: "Roots grow into the soil and absorb water and minerals, which then travel up to the rest of the plant.",
  },
  {
    id: 12,
    section: "EVS",
    question: "How many bones are there in the adult human body?",
    options: ["106", "206", "306", "406"],
    answer: 1,
    explanation: "Babies are born with about 300 bones, but as we grow many fuse together, leaving 206 bones in an adult.",
  },
  {
    id: 13,
    section: "EVS",
    question: "Which is the largest planet in our solar system?",
    options: ["Saturn", "Earth", "Jupiter", "Mars"],
    answer: 2,
    explanation: "Jupiter is the largest planet — it is about 11 times wider than Earth.",
  },
  {
    id: 14,
    section: "EVS",
    question: "At what temperature does water boil at sea level?",
    options: ["90°C", "100°C", "110°C", "0°C"],
    answer: 1,
    explanation: "At sea level, water boils at 100°C and freezes at 0°C.",
  },
  {
    id: 15,
    section: "EVS",
    question: "Which vitamin does our skin make with the help of sunlight?",
    options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    answer: 2,
    explanation: "Sunlight on the skin helps the body make Vitamin D, which keeps bones and teeth strong.",
  },
  {
    id: 16,
    section: "EVS",
    question: "Which of these is a non-renewable resource?",
    options: ["Solar energy", "Wind energy", "Coal", "Water"],
    answer: 2,
    explanation: "Coal takes millions of years to form and will run out one day, so it is non-renewable. Solar, wind and water are renewed by nature.",
  },
  {
    id: 17,
    section: "EVS",
    question: "Which animal is called the 'ship of the desert'?",
    options: ["Horse", "Camel", "Elephant", "Donkey"],
    answer: 1,
    explanation: "Camels carry people and goods across deserts, just as ships carry cargo across the sea.",
  },
  {
    id: 18,
    section: "EVS",
    question: "Which organ pumps blood around the body?",
    options: ["Lungs", "Heart", "Liver", "Kidney"],
    answer: 1,
    explanation: "The heart is a strong muscle that pumps blood through blood vessels to every part of the body.",
  },
  {
    id: 19,
    section: "EVS",
    question: "What is the chemical formula of water?",
    options: ["CO₂", "O₂", "H₂O", "NaCl"],
    answer: 2,
    explanation: "Each water molecule is made of 2 hydrogen atoms and 1 oxygen atom — H₂O.",
  },
  {
    id: 20,
    section: "EVS",
    question: "Which of these diseases spreads from one person to another?",
    options: ["Diabetes", "Common cold", "Asthma", "Obesity"],
    answer: 1,
    explanation: "The common cold spreads through air and touch. Diabetes, asthma and obesity do not spread from person to person.",
  },

  // ---------------- English Language (10) ----------------
  {
    id: 21,
    section: "English",
    question: "What is the plural of 'child'?",
    options: ["Childs", "Children", "Childes", "Childrens"],
    answer: 1,
    explanation: "'Child' has an irregular plural — 'children'.",
  },
  {
    id: 22,
    section: "English",
    question: "Choose the synonym of 'happy'.",
    options: ["Sad", "Angry", "Tired", "Joyful"],
    answer: 3,
    explanation: "A synonym means the same thing. 'Joyful' means the same as 'happy'.",
  },
  {
    id: 23,
    section: "English",
    question: "Choose the antonym of 'ancient'.",
    options: ["Old", "Antique", "Modern", "Aged"],
    answer: 2,
    explanation: "An antonym means the opposite. 'Ancient' means very old, so its opposite is 'modern'.",
  },
  {
    id: 24,
    section: "English",
    question: "Fill in the blank: She ___ to school every day.",
    options: ["go", "goes", "going", "gone"],
    answer: 1,
    explanation: "With he/she/it in the present tense, the verb takes -s/-es: 'she goes'.",
  },
  {
    id: 25,
    section: "English",
    question: "Which of these is a proper noun?",
    options: ["City", "Delhi", "School", "River"],
    answer: 1,
    explanation: "A proper noun names a specific person, place or thing and begins with a capital letter — 'Delhi'.",
  },
  {
    id: 26,
    section: "English",
    question: "Choose the correctly spelt word.",
    options: ["Seprate", "Separete", "Separate", "Saparate"],
    answer: 2,
    explanation: "The correct spelling is s-e-p-a-r-a-t-e: 'separate'.",
  },
  {
    id: 27,
    section: "English",
    question: "What is the past tense of 'teach'?",
    options: ["Teached", "Taught", "Teaching", "Teaches"],
    answer: 1,
    explanation: "'Teach' is an irregular verb — its past tense is 'taught'.",
  },
  {
    id: 28,
    section: "English",
    question: "Fill in the blank: He is good ___ mathematics.",
    options: ["in", "on", "at", "of"],
    answer: 2,
    explanation: "The correct phrase is 'good at' a subject or skill.",
  },
  {
    id: 29,
    section: "English",
    question: "Which sentence is grammatically correct?",
    options: [
      "He don't like tea.",
      "He doesn't likes tea.",
      "He doesn't like tea.",
      "He do not likes tea.",
    ],
    answer: 2,
    explanation: "With he/she/it, use 'doesn't' followed by the base verb: 'He doesn't like tea.'",
  },
  {
    id: 30,
    section: "English",
    question: "Identify the adjective in this sentence: 'The tall boy ran fast.'",
    options: ["Boy", "Tall", "Ran", "Fast"],
    answer: 1,
    explanation: "An adjective describes a noun. 'Tall' describes the boy.",
  },
];

export const SECTIONS = ["Mathematics", "EVS", "English"] as const;

export function getScoreBand(percent: number): { title: string; message: string } {
  if (percent >= 90)
    return {
      title: "Excellent — Entrance Ready!",
      message:
        "Outstanding! Your preparation is on the right track. Keep practising with full-length papers to stay sharp.",
    };
  if (percent >= 70)
    return {
      title: "Strong — Almost There!",
      message:
        "Good performance! A little polishing on your weaker section and regular timed practice will take you to the top.",
    };
  if (percent >= 50)
    return {
      title: "Good Start — Keep Building!",
      message:
        "You have a solid base. Structured coaching and daily practice can turn this into a selection-worthy score.",
    };
  return {
    title: "Foundation Building Needed",
    message:
      "Every topper starts somewhere. With the right guidance and regular practice, scores improve fast — this is exactly what coaching is for.",
  };
}
