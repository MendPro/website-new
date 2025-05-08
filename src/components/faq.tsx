'use client'

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
    <section className="w-full px-4 sm:px-6 md:px-8 py-10 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-[#fefefe] shadow transition-all duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-4 py-4 sm:py-5 text-left text-gray-800 bg-[#f3ff8d16] hover:bg-[#f3ff8d2e] transition-colors"
              >
                <span className="text-sm sm:text-base font-medium">
                  {item.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out bg-[#f3ff8d11] px-4 ${
                  openIndex === index ? 'max-h-40 py-3' : 'max-h-0 py-0'
                }`}
              >
                <p className="text-sm sm:text-base text-gray-700">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
