"use client";

import { useState } from 'react';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';

interface FaqItem {
  q: string;
  a: string;
}

interface FaqSection {
  category: string;
  items: FaqItem[];
}

interface FaqContentProps {
  sections: FaqSection[];
}

export default function FaqContent({ sections }: FaqContentProps) {
  const [activeCategory, setActiveCategory] = useState(sections[0]?.category ?? '');
  const [openIndexes, setOpenIndexes] = useState<{ [key: string]: number | null }>({});

  const activeSection = sections.find(s => s.category === activeCategory) || sections[0];

  const toggleQuestion = (category: string, index: number) => {
    setOpenIndexes(prev => ({
      ...prev,
      [category]: prev[category] === index ? null : index
    }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-8">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3">
        {sections.map((section, idx) => (
          <button
            key={idx}
            onClick={() => setActiveCategory(section.category)}
            className={`px-5 py-3 rounded-full text-sm font-semibold transition-all duration-350 shadow-sm ${
              activeCategory === section.category
                ? 'bg-[#035c00] text-white shadow-md scale-105'
                : 'bg-white text-[#035c00] border border-gray-200 hover:bg-[#035c00]/5 hover:border-[#035c00]/30'
            }`}
          >
            {section.category}
          </button>
        ))}
      </div>

      {/* Accordion Questions */}
      <div className="mt-8 space-y-4">
        {activeSection.items.map((item, idx) => {
          const isOpen = openIndexes[activeCategory] === idx;
          return (
            <div
              key={idx}
              className={`bg-white rounded-2xl border transition-all duration-300 shadow-sm ${
                isOpen 
                  ? 'border-[#035c00]/30 shadow-md ring-1 ring-[#035c00]/5' 
                  : 'border-gray-150 hover:border-gray-300 hover:shadow-md'
              }`}
            >
              <button
                onClick={() => toggleQuestion(activeCategory, idx)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
              >
                <div className="flex items-start gap-3.5 pr-4">
                  <FaQuestionCircle className={`w-5 h-5 mt-1 flex-shrink-0 transition-colors ${isOpen ? 'text-[#035c00]' : 'text-gray-400'}`} />
                  <span className="font-bold text-gray-900 text-base md:text-lg leading-snug">
                    {item.q}
                  </span>
                </div>
                <div className={`p-1.5 rounded-full transition-all duration-300 ${isOpen ? 'bg-[#035c00]/10' : 'bg-gray-100'}`}>
                  <FaChevronDown
                    className={`w-4 h-4 text-[#035c00] transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? 'max-h-[500px] border-t border-gray-100' : 'max-h-0'
                }`}
              >
                <div className="p-5 md:p-6 bg-gray-50/50">
                  <p className="text-gray-600 pl-8 leading-relaxed text-sm md:text-base">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
