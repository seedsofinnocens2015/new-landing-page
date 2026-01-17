'use client';

import React, { useState } from 'react';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: 'What is IVF and how does it work?',
      answer: 'IVF (In Vitro Fertilization) is a fertility treatment where eggs are retrieved from the ovaries and fertilized with sperm in a laboratory. The fertilized eggs (embryos) are then transferred to the uterus.',
    },
    {
      id: 2,
      question: 'What is the success rate for IVF?',
      answer: 'The success rate of IVF varies depending on factors like age, medical history, and the specific clinic. On average, success rates range from 40-50% for women under 35, and decrease with age.',
    },
    {
      id: 3,
      question: 'How long does the IVF process take?',
      answer: 'A complete IVF cycle typically takes about 4-6 weeks, including ovarian stimulation, egg retrieval, fertilization, embryo development, and embryo transfer.',
    },
    {
      id: 4,
      question: 'How much does IVF cost?',
      answer: 'IVF costs vary by location and clinic, typically ranging from ₹1.5 lakh to ₹3 lakh per cycle in India. Costs may include medications, procedures, and additional services.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-30 px-6 bg-pink-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Title Section */}
          <div className="flex items-start">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              FAQs
            </h2>
          </div>

          {/* FAQ Questions Section */}
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div key={faq.id} className="border-b border-black">
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex items-center justify-between p-4 text-left transition-colors ${
                    openIndex === index
                      ? 'bg-pink-20'
                      : 'hover:bg-pink-50'
                  }`}
                >
                  <span className="font-medium text-gray-800 pr-4">
                    {faq.question}
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-transform text-black ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="bg-pink-20 p-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
