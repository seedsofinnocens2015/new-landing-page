'use client';

import React, { useState } from 'react';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: 'मैं अपने आस-पास सबसे अच्छा IVF डॉक्टर कैसे चुनूँ?',
      answer: 'अगर आप अनुभव, पर्सनलाइज़्ड इलाज और मरीज़ों के रिव्यू देख रहे हैं। सीड्स ऑफ़ इनोसेंस रांची में हमारे IVF स्पेशलिस्ट हुमारे आइव्फ स्पेशलिस्ट लेटेस्ट प्रोटकोल्स फॉलो करते हैं और व्यक्तिगत फर्टिलिटी केयर देंगे।',
    },
    {
      id: 2,
      question: 'मुझे फर्टिलिटी डॉक्टर से कब सलाह लेनी चाहिए?',
      answer: 'अगर आप 12 महीने से ज़्यादा समय से (या अगर आपकी उम्र 35 से ज़्यादा है तो 6 महीने से) गर्भधारण करने की कोशिश कर रहे हैं, तो सही जांच और गाइडेंस के लिए आप सीड्स ऑफ इंनोसेंस लखनऊ मे आके हमारे फर्टिलिटी एक्सपर्ट से मिल सकते हैं',
    },
    {
      id: 3,
      question: 'क्या आप फेल हुए IVF मामलों का इलाज करते हैं?',
      answer: 'हाँ, हम ज़रूरत पड़ने पर डिटेल में डायग्नोस्टिक्स, यूटेराइन असेसमेंट और एम्ब्रियो एनालिसिस के ज़रिए बार-बार होने वाली IVF फेलियर का मूल्यांकन और इलाज करने में स्पेशलाइज़्ड हैं।',
    },
    {
      id: 4,
      question: 'क्या IVF दर्दनाक या मुश्किल होता है?',
      answer: 'IVF एक स्ट्रक्चर्ड मेडिकल प्रोसेस है। हालांकि कुछ स्टेप्स से हल्का डिस्कम्फर्ट हो सकता है, हमारी टीम आपके पूरे आराम का ध्यान रखती है और आगे बढ़ने से पहले हर स्टेज को साफ़ तौर पर समझाती है।',
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
            पूछे जाने वाले सवाल
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
