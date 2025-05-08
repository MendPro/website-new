'use client'

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react'; // Optional icons, you can replace

const faqData = [
  {
    question: "What is your refund policy?",
    answer: "We offer a 30-day money-back guarantee if you're not satisfied with the product.",
  },
  {
    question: "How can I contact support?",
    answer: "You can reach us anytime via support@example.com or our contact form.",
  },
  {
    question: "Do you offer team pricing?",
    answer: "Yes, we have discounted rates for teams. Contact us to learn more.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-lg font-bold mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between bg-[#f3ff8d11] items-center px-4 py-2  text-left"
            >
              <span className="font-medium">{item.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            <div
              className={`transition-all duration-300 ease-in-out px-4 bg-[#f3ff8d11] text-gray-700 ${
                openIndex === index ? 'max-h-40 py-3' : 'max-h-0 overflow-hidden py-0'
              }`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
