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
                    पटना में सबसे अच्छे IVF स्पेशलिस्ट की तलाश है? तो पटना में सबसे अच्छे IVF स्पेशलिस्ट से मिलें जो आपका मार्गदर्शन करेंगे और देखभाल और करुणा के साथ IVF यात्रा के हर कदम पर आपका साथ देंगे।
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
                    सीड्स ऑफ़ इनोसेंस IVF पटना में कम कीमत पर IVF ट्रीटमेंट और अन्य फर्टिलिटी ट्रीटमेंट के बारे में पूरी पारदर्शिता पाएं, जहाँ आप माता-पिता बनने की अपनी यात्रा शुरू कर सकते हैं।
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
                  हमारे IVF पैकेज में IVF, ICSI और एग फ्रीजिंग जैसे कई फर्टिलिटी ट्रीटमेंट शामिल हैं, और हम आपको पूरी पारदर्शिता देने में विश्वास रखते हैं। चाहे आप IVF ट्रीटमेंट की तलाश कर रहे हों या अंडे फ्रीज़ करवाना चाहते हों, आप सीड्स ऑफ़ इनोसेंस IVF में हमारे IVF स्पेशलिस्ट से मिल सकते हैं, जहाँ वे आपका मार्गदर्शन करेंगे और आपको कस्टमाइज़्ड ट्रीटमेंट देंगे।
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
                  पटना में सबसे अच्छे IVF स्पेशलिस्ट की तलाश है? तो पटना में सबसे अच्छे IVF स्पेशलिस्ट से मिलें जो आपका मार्गदर्शन करेंगे और देखभाल और करुणा के साथ IVF यात्रा के हर कदम पर आपका साथ देंगे।
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
                  सीड्स ऑफ़ इनोसेंस IVF पटना में कम कीमत पर IVF ट्रीटमेंट और अन्य फर्टिलिटी ट्रीटमेंट के बारे में पूरी पारदर्शिता पाएं, जहाँ आप माता-पिता बनने की अपनी यात्रा शुरू कर सकते हैं।
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
                हमारे IVF पैकेज में IVF, ICSI और एग फ्रीजिंग जैसे कई फर्टिलिटी ट्रीटमेंट शामिल हैं, और हम आपको पूरी पारदर्शिता देने में विश्वास रखते हैं। चाहे आप IVF ट्रीटमेंट की तलाश कर रहे हों या अंडे फ्रीज़ करवाना चाहते हों, आप सीड्स ऑफ़ इनोसेंस IVF में हमारे IVF स्पेशलिस्ट से मिल सकते हैं, जहाँ वे आपका मार्गदर्शन करेंगे और आपको कस्टमाइज़्ड ट्रीटमेंट देंगे।
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
