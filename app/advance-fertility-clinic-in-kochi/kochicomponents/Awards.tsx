'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Awards() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const awards = [
    {
      id: 1,
      image: '/gads/assets/image/Times-Healthcare-Achievers.png',
    },
    {
      id: 2,
      image: '/gads/assets/image/National-Fertility-Awards-2022.png',
    },
    {
      id: 3,
      image: '/gads/assets/image/Indian-Fertility-Society.png',
    },
    {
      id: 4,
      image: '/gads/assets/image/Association-of-Obstetricians-And-Gynaecologists-of-Delhi.png',
    },
    {
      id: 5,
      image: '/gads/assets/image/Screenshot_2025-05-02_155258-removebg-preview.png',
    },
  ];

  // Auto-slide functionality for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % awards.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [awards.length]);

  return (
    <section className="w-full py-38 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          അവാർഡുകൾ
        </h2>

        {/* Description Text */}
        <p className="text-gray-800 text-center max-w-4xl mx-auto mb-24 leading-relaxed">
          ഞങ്ങളുടെ ഉപഭോക്താക്കളിന് ശേഷം, ഞങ്ങളുടെ അവാർഡുകളാണ് ഞങ്ങളേക്കുറിച്ച് സംസാരിക്കുന്നത്.
          ഒരു ദശാബ്ദത്തിലേറെയായി, ഗൈനക്കോളജി, മാതൃത്വം, ശിശുരോഗ പരിചരണം എന്നിവയിൽ നിങ്ങൾക്ക് ഏറ്റവും മികച്ചതല്ലാതെ മറ്റൊന്നും ലഭിക്കരുതെന്ന് ഉറപ്പാക്കാൻ ഞങ്ങൾ പൂർണ്ണമായി സമർപ്പിതരാണ്. കാരണം, നിങ്ങൾക്ക് ഏറ്റവും ഉയർന്ന നിലവാരമുള്ള പരിചരണം അർഹമാണ്.
          അതുപോലെ, ഞങ്ങൾ നേടിയ ആരോഗ്യപരമായ എല്ലാ ട്രോഫികളും നോക്കുമ്പോൾ, കരുതലോടെയുള്ള സേവനം വലിയ അംഗീകാരങ്ങൾ നേടിക്കൊടുക്കുന്നതാണെന്ന് വ്യക്തമാകുന്നു.
        </p>

        {/* Awards Grid - Desktop: All visible, Mobile: Carousel */}
        <div className="md:flex md:flex-wrap md:justify-center md:items-center md:gap-6 md:gap-8">
          {/* Mobile Carousel */}
          <div className="md:hidden overflow-hidden relative">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {awards.map((award, index) => (
                <div
                  key={award.id}
                  className="w-full flex-shrink-0 flex items-center justify-center px-4"
                >
                  <div className="w-48 h-48 flex items-center justify-center">
                    <Image
                      src={award.image}
                      alt={`Award ${award.id}`}
                      width={192}
                      height={192}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:flex md:flex-wrap md:justify-center md:items-center md:gap-6 md:gap-8">
            {awards.map((award, index) => (
              <div
                key={award.id}
                className={`flex items-center justify-center ${index === 2
                  ? 'w-48 h-48 md:w-56 md:h-56'
                  : 'w-40 h-40 md:w-48 md:h-48'
                  }`}
              >
                <Image
                  src={award.image}
                  alt={`Award ${award.id}`}
                  width={index === 2 ? 224 : 192}
                  height={index === 2 ? 224 : 192}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
