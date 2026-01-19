'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import AppointmentModal from './AppointmentModal';

export default function FindUsHere() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="w-full py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-24">
            Find Us Here
          </h2>

          {/* Content Container */}
          <div className="flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-12">
            {/* Left: Building Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md h-auto">
                <Image
                  src="/gads/assets/image/malviyanagar.webp"
                  alt="Seeds Of Innocens Women & Children's Hospital"
                  width={500}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Right: Contact Information */}
            <div className="w-full md:w-1/2 flex flex-col gap-6">
              {/* Address Block */}
              <div className="flex items-start gap-4">
                {/* Location Icon */}
                <div className="flex-shrink-0 mt-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-800"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                {/* Address Text */}
                <p className="text-gray-800 text-base md:text-lg leading-relaxed">
                3, opposite Aurbindo College, MMTC Colony, Malviya Nagar, New Delhi, Delhi 110017
                </p>
              </div>

              {/* Phone Number Block */}
              <div className="flex items-center gap-4">
                {/* Phone Icon */}
                <div className="flex-shrink-0">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-800"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                {/* Phone Number in Rounded Box */}
                <div className="flex-1 px-4 py-3 bg-white">
                  <p className="text-gray-800 text-base md:text-lg font-medium">
                    96203 96203
                  </p>
                </div>
              </div>

              {/* Book Appointment Button */}
              <div className="mt-8">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full md:w-auto px-8 py-4 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-xl transition-colors duration-200"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Modal */}
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
