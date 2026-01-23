import React from 'react';
import Image from 'next/image';

export default function OurServices() {
  const services = [
    {
      id: 1,
      title: 'एग फ्रीजिंग',
      description: 'भविष्य में प्रेग्नेंसी की प्लॅनिंग के लिए अब सुरक्षित रूप से स्पर्म या अंडे फ्रीज करके अपनी फर्टिलिटी को सुरक्षित रखें।',
      icon: '/gads/assets/image/icons/eggfreezing.svg',
    },
    {
      id: 2,
      title: 'एम्ब्रियो फ्रीजिंग',
      description: 'आज आपके अंडे और स्पर्म से बनाए गए एम्ब्रियो को सुरक्षित रूप से फ्रीज करके भविष्य में प्रेग्नेंसी के विकल्पों को सुरक्षित रखें।',
      icon: '/gads/assets/image/icons/embryofreezing.svg',
    },
    {
      id: 3,
      title: 'ऊसाइट विट्रिफिकेशन',
      description: 'भविष्य में प्रेग्नेंसी की प्लॅनिंग के लिए एडवांस्ड विट्रिफिकेशन के साथ अपने अंडों को तेजी से फ्रीज करके अपनी फर्टिलिटी की शूरक्षित करें।',
      icon: '/gads/assets/image/icons/oocyte.svg',
    },
    {
      id: 4,
      title: 'लेजर असिस्टेड हैचिंग',
      description: 'भ्रूण के बाहरी खोल को पतला करने के लिए एक हल्के लेजर का यूज़ किया जाता है, जिससे उसे हैच होने और गर्भाशय से बेहतर ढंग से जुड़ने में मदद मिलती है।',
      icon: '/gads/assets/image/icons/laser.svg',
    },
    {
      id: 5,
      title: 'रिप्रोडक्टिव सर्जरी',
      description: 'प्रजनन संबंधी समस्याओं को ठीक करने और प्राकृतिक या असिस्टेड प्रेग्नेंसी की संभावनाओं को बेहतर बनाने के लिए विशेष सर्जरी।',
      icon: '/gads/assets/image/icons/reproductive.svg',
    },
    {
      id: 6,
      title: 'ओव्यूलेशन इंडक्शन',
      description: 'आपकी ओवरी को धीरे-धीरे उत्तेजित करने के लिए दवाओं का यूज़ किया जाता है ताकि वे नियमित रूप से अंडे रिलीज करें और प्रेग्नेंसी की संभावनाओं को बेहतर बनाएं।',
      icon: '/gads/assets/image/icons/ovulation.svg',
    },
  ];

  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Mobile: Vertical Layout (Icon top, Title below) */}
              <div className="flex flex-col items-center md:hidden">
                {/* Icon */}
                <div className="mb-3">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={100}
                    height={100}
                    className="w-32 h-32"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 text-center">
                  {service.title}
                </h3>
              </div>

              {/* Desktop: Horizontal Layout (Icon left, Title right, Description below) */}
              <div className="hidden md:block">
                {/* Icon and Title Row */}
                <div className="flex items-center gap-4 mb-3">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={64}
                      height={64}
                      className="w-16 h-16"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 flex-1">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
