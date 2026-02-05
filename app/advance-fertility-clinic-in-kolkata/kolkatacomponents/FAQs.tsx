'use client';

import React, { useState } from 'react';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: 'আমার কাছাকাছি সেরা আইভিএফ ডাক্তারকে আমি কীভাবে বেছে নেব?',
      answer: 'আপনি যদি অভিজ্ঞতা, ব্যক্তিগতকৃত চিকিৎসা এবং রোগীর পর্যালোচনা খোঁজেন, তবে সিডস অফ ইনোসেন্সে কলকাতার আমাদের আইভিএফ বিশেষজ্ঞরা প্রমাণ-ভিত্তিক পদ্ধতি অনুসরণ করবেন এবং ব্যক্তিগত চাহিদা অনুযায়ী বন্ধ্যাত্ব চিকিৎসার পরিষেবা প্রদান করবেন।',
    },
    {
      id: 2,
      question: 'কিভাবে আমি আইভিএফ করতে পারি?',
      answer: 'আপনি যদি  এক বছরের বেশি সময় ধরে গর্ভধারণের জন্য চেষ্টা করে থাকেন ( আর আপনার বয়স যদি ৩৫ বছরের বেশি হয় তাহলে ৬ মাসের মধ্যে ) আপনি ডাক্তারের সাথে যোগাযোগ করতে পারেন l',
    },
    {
      id: 3,
      question: 'আপনি কি ব্যর্থ IVF-এর চিকিৎসা প্রদান করেন?',
      answer: 'হ্যাঁ, আমরা পুনরাবৃত্ত IVF ব্যর্থতার মূল্যায়ন এবং চিকিৎসায় বিশেষজ্ঞ। প্রয়োজনে আমরা বিস্তারিত ডায়াগনস্টিক, জরায়ুর মূল্যায়ন এবং ভ্রূণের বিশ্লেষণ করি।',
    },
    {
      id: 4,
      question: 'IVF কি ব্যথাযুক্ত বা জটিল?',
      answer: 'আইভিএফ একটি সুসংগঠিত চিকিৎসা পদ্ধতি। যদিও কিছু ধাপে হালকা অস্বস্তি হতে পারে, আমাদের দল আপনার আরাম নিশ্চিত করে এবং প্রতিটি ধাপে এগিয়ে যাওয়ার আগে তা স্পষ্টভাবে ব্যাখ্যা করে।',
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
              প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী
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
