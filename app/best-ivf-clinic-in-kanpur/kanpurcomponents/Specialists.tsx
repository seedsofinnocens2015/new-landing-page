'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Specialists() {
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
  
  const specialists = [
    {
      id: 1,
      name: 'Dr. Gauri Agarwal',
      qualifications: 'MD, DNB, MBBS',
      specialization: 'IVF, Reproductive Endocrinology, Advanced Fertility Techniques',
      experience: '15+ Years',
      location: 'Delhi/NCR',
      image: '/gads/assets/image/Dr Gauri maam.jpg', // Update with actual image path
    },
    {
      id: 2,
      name: 'Dr. Preeti',
      qualifications: 'MBBS, MD (Obstetrics & Gynecology), Fellowship in IVF',
      specialization: 'IVF, ICSI, Advanced Reproductive Techniques',
      experience: '9+ Years',
      location: 'Kanpur, Uttar Pradesh',
      image: '/gads/assets/image/DR Preeti.png', // Update with actual image path
    },
    // {
    //   id: 3,
    //   name: 'Dr. Lisha Singh',
    //   qualifications: 'MBBS, DGO, DNB, Fellowship in IVF',
    //   specialization: 'IVF, Unexplained Infertility, Recurrent Implantation Failure',
    //   experience: '7+ Years',
    //   location: 'Malviya Nagar, New Delhi',
    //   image: '/gads/assets/image/Dr. Lisha Singh.jpg', // Update with actual image path
    // },
    // {
    //     id: 4,
    //     name: 'Dr. Monika Maan',
    //     qualifications: 'MBBS, MS (Obstetrics & Gynecology), Fellowship in ART',
    //     specialization: 'IVF, Personalized Treatment Protocols, Patient Empowerment',
    //     experience: '12+ Years',
    //     location: 'Pitampura, New Delhi',
    //     image: '/gads/assets/image/Monika.png', // Update with actual image path
    // },
  ];

  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Meet Our Specialists
        </h2>

        {/* Specialists Cards Container */}
        <div className="relative max-w-6xl mx-auto mt-10">
          {/* Cards Container with Overflow */}
          <div className="overflow-hidden mb-12 md:mb-0 pb-10">
            <div 
              className="flex gap-6 transition-transform duration-300 ease-in-out"
              style={{ 
                transform: (() => {
                  const visibleCards = isMobile ? 1 : 3;
                  const hasFewerCards = specialists.length < visibleCards;
                  
                  if (hasFewerCards) {
                    // Center the cards when there are fewer than visible
                    if (isMobile) {
                      // For mobile: center 1 card
                      return 'translateX(0)';
                    } else {
                      // For desktop: center 1 or 2 cards
                      if (specialists.length === 1) {
                        return 'translateX(calc((100% / 3 + 1.5rem) * 1))';
                      } else if (specialists.length === 2) {
                        return 'translateX(calc((100% / 3 + 1.5rem) * 0.5))';
                      }
                      return 'translateX(0)';
                    }
                  }
                  
                  // Normal transform for when we have enough cards
                  return isMobile 
                    ? `translateX(calc(-${currentIndex} * (100% + 1.5rem)))`
                    : `translateX(calc(-${currentIndex} * (100% / 3 + 1.5rem)))`;
                })()
              }}
            >
              {specialists.map((specialist) => (
                <div
                  key={specialist.id}
                  className="bg-white rounded-2xl shadow-md overflow-hidden flex-shrink-0 w-full md:w-[calc((100%-3rem)/3)]"
                >
                {/* Doctor Image */}
                <div className="w-full h-84 relative">
                  <Image
                    src={specialist.image}
                    alt={specialist.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Name */}
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {specialist.name}
                  </h3>

                  {/* Qualifications */}
                  <p className="text-sm text-gray-700 mb-2">
                    {specialist.qualifications}
                  </p>

                  {/* Specialization */}
                  <p className="text-sm text-gray-700 mb-4">
                    {specialist.specialization}
                  </p>

                  {/* Experience */}
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 8C9.65685 8 11 6.65685 11 5C11 3.34315 9.65685 2 8 2C6.34315 2 5 3.34315 5 5C5 6.65685 6.34315 8 8 8Z"
                        fill="#22C55E"
                      />
                      <path
                        d="M8 9C5.23858 9 3 11.2386 3 14H13C13 11.2386 10.7614 9 8 9Z"
                        fill="#22C55E"
                      />
                    </svg>
                    <span className="text-sm text-gray-700">
                      {specialist.experience}
                    </span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 2C5.79086 2 4 3.79086 4 6C4 8.5 8 12 8 12C8 12 12 8.5 12 6C12 3.79086 10.2091 2 8 2Z"
                        fill="#22C55E"
                      />
                      <circle cx="8" cy="6" r="1.5" fill="white" />
                    </svg>
                    <span className="text-sm text-gray-700">
                      {specialist.location}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  {/* <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2 rounded-lg border border-black bg-white text-black hover:bg-gray-50 transition-colors text-sm font-medium">
                      View Profile
                    </button>
                    <button className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-900 transition-colors text-sm font-medium">
                      Book Appointment
                    </button>
                  </div> */}
                </div>
              </div>
                ))}
            </div>
          </div>

          {/* Navigation Arrows Container */}
          <div className="flex justify-center items-center gap-4 md:absolute md:inset-0 md:pointer-events-none">
            {/* Left Navigation Arrow */}
            {currentIndex > 0 && (
              <button
                onClick={() => setCurrentIndex(currentIndex - 1)}
                className="pointer-events-auto w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors flex items-center justify-center shadow-md z-10 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:-translate-x-20"
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
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              </button>
            )}

            {/* Right Navigation Arrow */}
            {(isMobile ? currentIndex < specialists.length - 1 : currentIndex < specialists.length - 3) && (
              <button
                onClick={() => setCurrentIndex(currentIndex + 1)}
                className="pointer-events-auto w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors flex items-center justify-center shadow-md z-10 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:translate-x-20"
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
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
          </div>
        </div>
      </div>
    </section>
  );
}
