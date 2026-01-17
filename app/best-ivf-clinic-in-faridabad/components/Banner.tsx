'use client';

import React, { useState } from 'react';

export default function Banner() {
  const [formData, setFormData] = useState({
    fullName: '',
    language: '',
    phoneNumber: '',
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <section className="relative w-full mt-15">
      {/* Desktop Banner Image */}
      <div className="relative w-full hidden md:block">
        <img 
          src="/assets/image/koka.svg"
          alt="Banner"
          className="w-full h-auto"
        />
      </div>
      
      {/* Mobile Banner Image */}
      <div className="relative w-full block md:hidden">
        <img 
          src="/assets/image/koka1.svg"
          alt="Banner Mobile"
          className="w-full h-auto"
        />
      </div>
      
      {/* Form Card - Positioned absolutely over banner */}
      <div className="absolute top-0 left-0 right-0 bottom-0 max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-12 flex items-end md:items-center justify-center md:justify-end z-10">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name Input */}
            <div>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-lg border border-pink-300 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 text-gray-700 placeholder-gray-400"
                required
              />
            </div>

            {/* Select Language Dropdown */}
            <div className="relative">
              <select
                name="language"
                value={formData.language}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-pink-300 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 text-gray-700 appearance-none bg-white cursor-pointer"
                required
              >
                <option value="" disabled>Select Language</option>
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
                <option value="tamil">Tamil</option>
                <option value="telugu">Telugu</option>
                <option value="kannada">Kannada</option>
                <option value="malayalam">Malayalam</option>
              </select>
              {/* Chevron Icon */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="#000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Phone Number Input with +91 prefix */}
            <div className="flex">
              <div className="px-4 py-3 rounded-l-lg border border-r-0 border-pink-300 bg-gray-50 flex items-center">
                <span className="text-gray-700 font-medium">+91</span>
              </div>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className="flex-1 px-4 py-3 rounded-r-lg border border-pink-300 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 text-gray-700 placeholder-gray-400"
                required
              />
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="consent"
                id="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 w-5 h-5 rounded border-gray-300 text-gray-800 focus:ring-pink-500 cursor-pointer"
                required
              />
              <label
                htmlFor="consent"
                className="text-sm text-gray-600 leading-relaxed cursor-pointer"
              >
                I consent to get contacted by Seeds Of Innocens IVF representatives
              </label>
            </div>

            {/* Get a Call Back Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-900 transition-colors"
            >
              Get a Call Back
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
