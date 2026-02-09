'use client';

import React, { useState } from 'react';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: 'মোৰ ওচৰৰ শ্ৰেষ্ঠ আইভিএফ ডাক্তৰক কেনেকৈ বাছি ল’ম?',
      answer: 'যদি আপুনি অভিজ্ঞতা, ব্যক্তিগতকৃত চিকিৎসা, আৰু ৰোগীৰ পৰ্যালোচনা বিচাৰিছে। ছিডছ অৱ ইনোচেন্সত গুৱাহাটীত থকা আমাৰ আইভিএফ বিশেষজ্ঞসকলে প্ৰমাণভিত্তিক প্ৰট’কল মানি চলিব আৰু ব্যক্তিগতকৃত প্ৰজনন যত্ন প্ৰদান কৰিব।',
    },
    {
      id: 2,
      question: 'কেতিয়া প্ৰজনন চিকিৎসকৰ পৰামৰ্শ ল’ব লাগে?',
      answer: 'যদি আপুনি ১২ মাহৰ ওপৰত গৰ্ভধাৰণ কৰিবলৈ চেষ্টা কৰি আছে (বা ৩৫ বছৰৰ ওপৰৰ হ’লে ৬ মাহ) তেন্তে সঠিক মূল্যায়ন আৰু নিৰ্দেশনাৰ বাবে মোৰ ওচৰৰ প্ৰজনন চিকিৎসকৰ পৰামৰ্শ লোৱাটো ভাল।',
    },
    {
      id: 3,
      question: 'ব্যৰ্থ আইভিএফৰ ক্ষেত্ৰত আপুনি চিকিৎসা আগবঢ়ায়নে?',
      answer: 'হয়, আমি বিশদ নিদান, জৰায়ুৰ মূল্যায়ন, আৰু প্ৰয়োজনৰ সময়ত ভ্ৰূণ বিশ্লেষণৰ জৰিয়তে পুনৰাবৃত্তিমূলক আইভিএফ বিফলতাৰ মূল্যায়ন আৰু চিকিৎসাত বিশেষজ্ঞ',
    },
    {
      id: 4,
      question: 'আইভিএফ বিষাদজনক নে জটিল?',
      answer: 'আইভিএফ হৈছে এক গাঁথনিগত চিকিৎসা প্ৰক্ৰিয়া। কিছুমান বিশেষ পদক্ষেপে মৃদু অস্বস্তিৰ সৃষ্টি কৰিব পাৰে যদিও আমাৰ দলটোৱে আপোনাৰ আৰাম নিশ্চিত কৰে আৰু আগবাঢ়ি যোৱাৰ আগতে প্ৰতিটো পৰ্যায় স্পষ্টকৈ বুজায়।',
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
              সঘনাই সোধা প্ৰশ্ন
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
