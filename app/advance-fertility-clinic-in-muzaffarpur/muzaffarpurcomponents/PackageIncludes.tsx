import React from 'react';
import Image from 'next/image';

export default function PackageIncludes() {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          हमारे पैकेज में शामिल हैं
        </h2>

        {/* Mobile: Single Card with both sections */}
        <div className="block md:hidden max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md p-8">
            {/* Expert Fertility Screening Camp Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                हमारे पैकेज में शामिल हैं
              </h3>
              <div className="space-y-4">
                {/* Expert Consultation */}
                <div className="items-center gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/gads/assets/image/icons/Tick 1.svg"
                      alt="Expert Consultation"
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  </div>
                  <span className="text-lg text-gray-700 font-medium">
                    एक्सपर्ट कॉन्सलिटेशन
                  </span>
                  <p className="text-gray-600">
                    सीड्स ऑफ़ इनोसेंस IVF में, आप हमारे सबसे अच्छे IVF स्पेशलिस्ट से सलाह ले सकते हैं और आत्मविश्वास के साथ अपनी फर्टिलिटी यात्रा शुरू करने के लिए एक्सपर्ट गाइडेंस पा सकते हैं।
                  </p>
                </div>

                {/* Expert Scan */}
                <div className="items-center gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/gads/assets/image/icons/Tick 1.svg"
                      alt="Expert Scan"
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  </div>
                  <span className="text-lg text-gray-700 font-medium">
                    एक्सपर्ट स्कैन
                  </span>
                  <p className="text-gray-600">
                    हमारी टीम से पर्सनलाइज्ड केयर के साथ एक पूरी फर्टिलिटी जांच करवाएं और IVF प्रोसेस को समझें।
                  </p>
                </div>
              </div>
            </div>

            {/* Special Benefits Section */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                विशेष लाभ
              </h3>
              <div className="space-y-4">
                {/* No Cost EMI */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/gads/assets/image/icons/EMI-Icon 1.svg"
                      alt="No Cost EMI"
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  </div>
                  <span className="text-lg text-gray-700 font-medium">
                    शून्य शुल्क EMI
                  </span>
                </div>

                {/* Expert Semen Analysis */}
                <div className="flex items-center gap-4 text-gray-700">
                  सीड्स ऑफ़ इनोसेंस IVF मुजफ्फरपुर में भारत के सबसे अच्छे IVF सेंटरों में से एक है, जिस पर लोग भरोसा करते हैं, और एडवांस्ड टेक्नोलॉजी और फर्टिलिटी सॉल्यूशंस के साथ, आप आज ही सबसे अच्छी IVF कंसल्टेशन आसानी से बुक कर सकते हैं और हमारे IVF पैकेजों के साथ भारत में IVF इलाज की लागत समझ सकते हैं जो हर कपल के लिए डिज़ाइन किए गए हैं। इसके अलावा, हम हाई IVF सक्सेस रेट पर ध्यान देते हैं और हर कदम पर IVF प्रोसेस के बारे में पूरी गाइडेंस देंगे। साथ ही, मुजफ्फरपुर में IVF सेंटर सबसे अच्छे IVF सेंटरों में से एक है जो एडवांस्ड ICSI फर्टिलिटी इलाज देगा, जिसे भरोसेमंद IVF क्लिनिक रिव्यू का सपोर्ट है।
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Two Separate Cards */}
        <div className="hidden md:grid grid-cols-2 gap-24 max-w-5xl mx-auto">
          {/* Left Card - Expert Fertility Screening Camp */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-xl text-center font-semibold text-gray-900 mb-6">
              एक्सपर्ट फर्टिलिटी स्क्रीनिंग कैंप
            </h3>
            <div className="space-y-6">
              {/* Expert Consultation */}
              <div className="flex flex-col items-center gap-3">
                <div className="flex-shrink-0">
                  <Image
                    src="/gads/assets/image/icons/Tick 1.svg"
                    alt="Expert Consultation"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </div>
                <span className="text-lg text-gray-700 font-medium">
                  एक्सपर्ट कॉन्सलिटेशन
                </span>
                <p className="text-gray-600 text-center">
                  सीड्स ऑफ़ इनोसेंस IVF में, आप हमारे सबसे अच्छे IVF स्पेशलिस्ट से सलाह ले सकते हैं और आत्मविश्वास के साथ अपनी फर्टिलिटी यात्रा शुरू करने के लिए एक्सपर्ट गाइडेंस पा सकते हैं।
                </p>
              </div>

              {/* Expert Scan */}
              <div className="flex flex-col items-center gap-3">
                <div className="flex-shrink-0">
                  <Image
                    src="/gads/assets/image/icons/Tick 1.svg"
                    alt="Expert Scan"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </div>
                <span className="text-lg text-gray-700 font-medium">
                  एक्सपर्ट स्कैन
                </span>
                <p className="text-gray-600 text-center">
                  हमारी टीम से पर्सनलाइज्ड केयर के साथ एक पूरी फर्टिलिटी जांच करवाएं और IVF प्रोसेस को समझें।
                </p>
              </div>
            </div>
          </div>

          {/* Right Card - Special Benefits */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center justify-center">
            <h3 className="text-xl text-center font-semibold text-gray-900 mb-6">
              विशेष लाभ
            </h3>
            <div className="space-y-6">
              {/* No Cost EMI */}
              <div className="flex flex-col items-center gap-3">
                <div className="flex-shrink-0">
                  <Image
                    src="/gads/assets/image/icons/EMI-Icon 1.svg"
                    alt="No Cost EMI"
                    width={80}
                    height={80}
                    className="w-30 h-30"
                  />
                </div>
                <span className="text-lg text-gray-700 font-medium">
                  शून्य शुल्क EMI
                </span>
              </div>

              {/* Expert Semen Analysis */}
              <div className="flex-shrink-0 text-center text-gray-700">
                सीड्स ऑफ़ इनोसेंस IVF मुजफ्फरपुर में भारत के सबसे अच्छे IVF सेंटरों में से एक है, जिस पर लोग भरोसा करते हैं, और एडवांस्ड टेक्नोलॉजी और फर्टिलिटी सॉल्यूशंस के साथ, आप आज ही सबसे अच्छी IVF कंसल्टेशन आसानी से बुक कर सकते हैं और हमारे IVF पैकेजों के साथ भारत में IVF इलाज की लागत समझ सकते हैं जो हर कपल के लिए डिज़ाइन किए गए हैं। इसके अलावा, हम हाई IVF सक्सेस रेट पर ध्यान देते हैं और हर कदम पर IVF प्रोसेस के बारे में पूरी गाइडेंस देंगे। साथ ही, मुजफ्फरपुर में IVF सेंटर सबसे अच्छे IVF सेंटरों में से एक है जो एडवांस्ड ICSI फर्टिलिटी इलाज देगा, जिसे भरोसेमंद IVF क्लिनिक रिव्यू का सपोर्ट है।
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
