'use client';

import React, { useState } from 'react';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: 'എന്റെ അടുത്തുള്ള ഏറ്റവും മികച്ച IVF ഡോക്ടറെ എങ്ങനെ തിരഞ്ഞെടുക്കാം?',
      answer: 'നിങ്ങൾക്ക് ഒരു അനുഭവം, വ്യക്തിഗത ചികിത്സ, രോഗി അവലോകനങ്ങൾ എന്നിവ ആവശ്യമുണ്ടെങ്കിൽ. സീഡ്സ് ഓഫ് ഇന്നോസെൻസിൽ, കൊച്ചിയിലെ ഞങ്ങളുടെ IVF സ്പെഷ്യലിസ്റ്റുകൾ തെളിവ് അടിസ്ഥാനമാക്കിയുള്ള പ്രോട്ടോക്കോളുകൾ പാലിക്കുകയും വ്യക്തിഗത ഫെർട്ടിലിറ്റി പരിചരണം നൽകുകയും ചെയ്യും.',
    },
    {
      id: 2,
      question: 'ഞാൻ എപ്പോഴാണ് ഒരു ഫെർട്ടിലിറ്റി ഡോക്ടറെ സമീപിക്കേണ്ടത്?',
      answer: 'നിങ്ങൾ 12 മാസത്തിലേറെയായി (അല്ലെങ്കിൽ 35 വയസ്സിന് മുകളിലാണെങ്കിൽ 6 മാസം) ഗർഭം ധരിക്കാൻ ശ്രമിക്കുന്നുണ്ടെങ്കിൽ, ശരിയായ വിലയിരുത്തലിനും മാർഗ്ഗനിർദ്ദേശത്തിനുമായി എന്റെ അടുത്തുള്ള ഒരു ഫെർട്ടിലിറ്റി ഡോക്ടറെ സമീപിക്കുന്നത് നല്ലതാണ്.',
    },
    {
      id: 3,
      question: 'പരാജയപ്പെട്ട IVF കേസുകൾക്ക് നിങ്ങൾ ചികിത്സ വാഗ്ദാനം ചെയ്യുന്നുണ്ടോ?',
      answer: 'അതെ, വിശദമായ ഡയഗ്നോസ്റ്റിക്സ്, ഗർഭാശയ വിലയിരുത്തൽ, ആവശ്യമുള്ളപ്പോൾ ഭ്രൂണം വിശകലനം എന്നിവയിലൂടെ ആവർത്തിച്ചുള്ള IVF പരാജയങ്ങൾ വിലയിരുത്തുന്നതിലും ചികിത്സിക്കുന്നതിലും ഞങ്ങൾ വൈദഗ്ദ്ധ്യം നേടിയിട്ടുണ്ട്',
    },
    {
      id: 4,
      question: 'IVF വേദനാജനകമോ സങ്കീർണ്ണമോ ആണോ?',
      answer: 'IVF ഒരു ഘടനാപരമായ മെഡിക്കൽ പ്രക്രിയയാണ്. ചില ഘട്ടങ്ങൾ നേരിയ അസ്വസ്ഥത ഉണ്ടാക്കിയേക്കാം, എന്നാൽ ഞങ്ങളുടെ ടീം നിങ്ങളുടെ സുഖം ഉറപ്പാക്കുകയും തുടരുന്നതിന് മുമ്പ് ഓരോ ഘട്ടവും വ്യക്തമായി വിശദീകരിക്കുകയും ചെയ്യുന്നു',
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
            സവിശേഷതകൾ
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
