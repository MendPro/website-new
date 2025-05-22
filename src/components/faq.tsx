'use client'

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
const faqData = [
  {
    question: "What exactly is MendPro, and who is it for?",
    answer:
      "MendPro is an all-in-one social commerce platform built for social media managers, solo entrepreneurs, digital marketers, and growing businesses that sell online. If you run a product-based business through platforms like Instagram, WhatsApp, or TikTok, MendPro helps simplify, automate, and scale your workflow.",
  },
  {
    question: "Can I try MendPro before subscribing?",
    answer:
      "While we don’t offer a free plan, you can explore detailed demos, resources, and onboarding support to help you understand how MendPro works before committing.",
  },
  {
    question: "How is MendPro different from other social media tools like Hootsuite or Buffer?",
    answer:
      "MendPro goes beyond scheduling. It includes DM auto-capture, CRM, inventory tracking, pricing tools, bookkeeping, order tracking, and built-in AI assistants. It’s designed specifically for social selling, not just content management.",
  },
  {
    question: "Can I connect all my social media accounts?",
    answer:
      "Yes. You can manage Instagram, WhatsApp, Facebook, TikTok, LinkedIn, Google Business, X (Twitter), and more in one unified dashboard.",
  },
  {
    question: "How does the AI assistant (nia Ai) help me?",
    answer:
      "NIA GPT is your smart business sidekick. It helps generate captions and hashtags, conduct competitor research, track trends, respond to messages, and offer tailored content suggestions.",
  },
  {
    question: "I’m not very tech-savvy. Can I still use MendPro?",
    answer:
      "Absolutely. MendPro is designed to be user-friendly and intuitive. Our templates, automations, and guided setup make it easy for anyone to use, even without a technical background.",
  },
  {
    question: "Is my data and customer information safe?",
    answer:
      "Yes. Your data is protected with industry-standard encryption. We do not sell or share your information. You remain in full control of your business and your customers’ privacy.",
  },
  {
    question: "How much does MendPro cost?",
    answer:
      "Plans start at ₦39,000 per month ($25) per user. You can add tools or upgrade plans as your business grows, or choose annual billing to save up to two months.",
  },
  {
    question: "Can I cancel or switch plans?",
    answer:
      "Yes. You can upgrade, downgrade, or cancel your plan at any time. There are no hidden fees or long-term commitments.",
  },
  {
    question: "Do you offer onboarding or support?",
    answer:
      "Yes. All Agency plans come with free onboarding. Plus, our chatbot NIA and help center are available to guide you whenever you need support.",
  },
  {
    question: "What if I run into a problem?",
    answer:
      "You can reach out through our chatbot NIA for instant help, or contact our support team directly for more personalized assistance.",
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
                className={`overflow-hidden transition-all duration-300 ease-in-out bg-[#f3ff8d11] px-4 ${openIndex === index ? 'max-h-40 py-3' : 'max-h-0 py-0'
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
