'use client';

import React, { useState } from 'react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    language: '',
    phoneNumber: '',
    consent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Add backend API call here
    try {
      // Example API call:
      // const response = await fetch('/api/appointment', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });
      // const data = await response.json();
      
      console.log('Form submitted:', formData);
      
      // Reset form and close modal
      setFormData({
        fullName: '',
        language: '',
        phoneNumber: '',
        consent: false,
      });
      onClose();
      
      // Optional: Show success message
      // alert('Appointment request submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Optional: Show error message
      // alert('Failed to submit appointment request. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 bg-opacity-50" onClick={onClose}>
      <div 
        className="bg-white rounded-2xl shadow-lg p-12 w-full max-w-md relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close modal"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

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
  );
}
