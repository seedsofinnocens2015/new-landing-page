'use client';

import React, { useState } from 'react';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: 'How do I choose the best IVF doctor near me?',
      answer: 'If you are looking for an experience, personalized treatment, and patient reviews. At Seeds of Innocens, our IVF specialists in Kanpur will follow evidence-based protocols and will provide individualized fertility care.',
    },
    {
      id: 2,
      question: 'When should I consult a fertility doctor?',
      answer: 'If you’ve been trying to conceive for over 12 months (or 6 months if you’re above 35), it’s advisable to consult a fertility doctor near me for proper evaluation and guidance.',
    },
    {
      id: 3,
      question: 'Do you offer treatment for failed IVF cases?',
      answer: 'Yes, We specialize in evaluating and treating recurrent IVF failures through detailed diagnostics, uterine assessment, and embryo analysis when required',
    },
    {
      id: 4,
      question: 'Is IVF painful or complicated?',
      answer: 'IVF is a structured medical process. While certain steps may cause mild discomfort, our team ensures your comfort and explains every stage clearly before proceeding.',
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
