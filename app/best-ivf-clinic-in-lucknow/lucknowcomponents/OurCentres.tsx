'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function OurCentres() {
  const [selectedCity, setSelectedCity] = useState('उत्तर प्रदेश');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const cities = [
    { id: 1, name: 'दिल्ली', icon: '/gads/assets/image/icons/bangalore-icon.svg' },
    { id: 2, name: 'उत्तर प्रदेश', icon: '/gads/assets/image/icons/chandigarh-icon.svg' },
    { id: 3, name: 'बिहार', icon: '/gads/assets/image/icons/chennai-icon.svg' },
    { id: 4, name: 'हरियाणा', icon: '/gads/assets/image/icons/coimbatore-icon.svg' },
    { id: 5, name: 'झारखंड', icon: '/gads/assets/image/icons/gurgaon-icon.svg' },
    { id: 6, name: 'उत्तराखंड', icon: '/gads/assets/image/icons/indore-icon.svg' },
    { id: 7, name: 'असम', icon: '/gads/assets/image/icons/mohali-icon.svg' },
    { id: 8, name: 'केरला', icon: '/gads/assets/image/icons/mumbai-icon.svg' },
    // { id: 9, name: 'Jammu & Kashmir', icon: '/gads/assets/image/icons/mumbai-icon.svg' },
    { id: 10, name: 'पश्चिम बंगाल', icon: '/gads/assets/image/icons/mumbai-icon.svg' },
  ];

  const centres = [
    {
      id: 1,
      location: 'मल्वियानगर',
      image: '/gads/assets/image/center/malviyanagar.webp',
      city: 'दिल्ली',
    },
    {
      id: 2,
      location: 'पीतमपुरा',
      image: '/gads/assets/image/center/pitampura.webp',
      city: 'दिल्ली',
    },
    {
      id: 3,
      location: 'जनकपुरी',
      image: '/gads/assets/image/center/janakpuri.webp',
      city: 'दिल्ली',
    },
    {
      id: 4,
      location: 'गजियाबाद',
      image: '/gads/assets/image/center/yashoda1.webp',
      city: 'उत्तर प्रदेश',
    },
    {
      id: 5,
      location: 'लखनऊ',
      image: '/gads/assets/image/center/lucknow.webp',
      city: 'उत्तर प्रदेश',
    },
    {
      id: 6,
      location: 'आगरा',
      image: '/gads/assets/image/center/agra1.webp',
      city: 'उत्तर प्रदेश',
    },
    {
      id: 7,
      location: 'गोरखपुर',
      image: '/gads/assets/image/center/gorakhpur1.webp',
      city: 'उत्तर प्रदेश',
    },
    {
      id: 8,
      location: 'कानपुर',
      image: '/gads/assets/image/center/kanpur1.webp',
      city: 'उत्तर प्रदेश',
    },
    {
      id: 9,
      location: 'मेरठ',
      image: '/gads/assets/image/center/meerut1.webp',
      city: 'उत्तर प्रदेश',
    },
    {
      id: 10,
      location: 'पटना',
      image: '/gads/assets/image/center/patna1.webp',
      city: 'बिहार',
    },
    {
      id: 11,
      location: 'मुजफ्फरपुर',
      image: '/gads/assets/image/center/muzaffarpur.webp',
      city: 'बिहार',
    },
    {
      id: 12,
      location: 'फरीदाबाद',
      image: '/gads/assets/image/center/faridabad.webp',
      city: 'हरियाणा',
    },
    {
      id: 13,
      location: 'गुरुग्राम',
      image: '/gads/assets/image/center/gurugram.webp',
      city: 'हरियाणा',
    },
    {
      id: 14,
      location: 'राँची',
      image: '/gads/assets/image/center/ranchi1.webp',
      city: 'झारखंड',
    },
    {
      id: 15,
      location: 'हल्दवानी',
      image: '/gads/assets/image/center/haldwani.webp',
      city: 'उत्तराखंड',
    },
    {
      id: 16,
      location: 'गुवाहाटी',
      image: '/gads/assets/image/center/guwahati.webp',
      city: 'असम',
    },
    {
      id: 17,
      location: 'कोची',
      image: '/gads/assets/image/center/kochi.webp',
      city: 'केरला',
    },
    {
      id: 18,
      location: 'कासरगोद',
      image: '/gads/assets/image/center/kasaragod.webp',
      city: 'केरला',
    },
    {
      id: 19,
      location: 'कोलकाता',
      image: '/gads/assets/image/center/kolkata.webp',
      city: 'पश्चिम बंगाल',
    },
  ];

  const filteredCentres = centres.filter((centre) => centre.city === selectedCity);
  const centresCount = filteredCentres.length;
  const shouldCenter = !isMobile && centresCount <= 2;

  return (
    <section className="w-full py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        हमारे सेंटर इंडिया में
        </h2>

        {/* City Selection Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {cities.map((city) => (
            <button
              key={city.id}
              onClick={() => {
                setSelectedCity(city.name);
                setCurrentIndex(0);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                selectedCity === city.name
                  ? 'text-gray-800 border'
                  : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-50'
              }`}
              style={selectedCity === city.name ? { backgroundColor: '#F4DD95' } : {}}
            >
                {/* <Image
                src={city.icon}
                alt={city.name}
                width={14}
                height={14}
                className="w-3.5 h-3.5"
              /> */}
              <span className="font-medium text-sm whitespace-nowrap">{city.name}</span>
            </button>
          ))}
        </div>

        {/* Centres Cards Container */}
        <div className="relative max-w-6xl mx-auto overflow-hidden pb-10">
          {/* Centres Slider */}
          <div 
            className={`flex mb-8 transition-transform duration-700 ease-in-out ${
              isMobile ? 'gap-0' : 'gap-6'
            } ${shouldCenter ? 'justify-center' : ''}`}
            style={{
              transform: isMobile 
                ? `translateX(-${currentIndex * 100}%)`
                : shouldCenter
                ? 'translateX(0)'
                : `translateX(calc(-${currentIndex} * (calc((100% - 3rem) / 3) + 1.5rem)))`,
            }}
          >
            {filteredCentres.map((centre) => (
              <div
                key={centre.id}
                className={`relative rounded-2xl overflow-hidden shadow-lg group flex-shrink-0 ${
                  isMobile 
                    ? 'w-full min-w-full max-w-full' 
                    : shouldCenter
                    ? centresCount === 1 
                      ? 'w-full max-w-md' 
                      : 'w-[calc((100%-1.5rem)/2)]'
                    : 'w-[calc((100%-3rem)/3)]'
                }`}
              >
                {/* Centre Image */}
                <div className="relative w-full h-64 md:h-80">
                  <Image
                    src={centre.image}
                    alt={centre.location}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Location Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <div className="flex items-center gap-2 text-white font-semibold">
                      <span>{centre.location}</span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 18L15 12L9 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {((isMobile && filteredCentres.length > 1) || (!isMobile && filteredCentres.length > 3)) && (
            <div className="flex justify-center items-center gap-4 md:relative md:mt-0 mt-4">
              <button
                onClick={() => {
                  if (currentIndex > 0) {
                    setCurrentIndex(Math.max(0, currentIndex - 1));
                  }
                }}
                disabled={currentIndex === 0}
                className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${
                  currentIndex === 0
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800 hover:scale-110 active:scale-95'
                }`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                onClick={() => {
                  const maxIndex = isMobile 
                    ? filteredCentres.length - 1 
                    : filteredCentres.length - 3;
                  if (currentIndex < maxIndex) {
                    setCurrentIndex(Math.min(maxIndex, currentIndex + 1));
                  }
                }}
                disabled={isMobile 
                  ? currentIndex >= filteredCentres.length - 1 
                  : currentIndex >= filteredCentres.length - 3}
                className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${
                  (isMobile && currentIndex >= filteredCentres.length - 1) ||
                  (!isMobile && currentIndex >= filteredCentres.length - 3)
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800 hover:scale-110 active:scale-95'
                }`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
