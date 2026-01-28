'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    language: '',
    phoneNumber: '',
    consent: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLoading(true);
    setErrorMessage('');
    
    try {
      // Prepare data for backend
      const payload = {
        fullName: formData.fullName,
        phoneNumber: formData.phoneNumber,
        source: 'Kochi Google Ads',
        message: `Language preference: ${formData.language || 'Not specified'}`,
      };

      // Get backend URL from environment or use relative path
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || '';
      const apiEndpoint = `${backendUrl}/api/landing-pages`;

      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      
      // Check for duplicate phone number error FIRST, before checking response.ok
      if (
        data.ExceptionType === 'MXDuplicateEntryException' ||
        data.ExceptionMessage?.includes('same Phone Number already exists') ||
        data.ExceptionMessage?.includes('Phone Number already exists') ||
        (data.Status === 'Error' && data.ExceptionMessage?.toLowerCase().includes('phone number'))
      ) {
        setErrorMessage('Already booked for this number');
        setIsLoading(false);
        return;
      }
      
      if (!response.ok || !data.ok) {
        throw new Error(data.message || data.ExceptionMessage || 'Failed to submit form');
      }
      
      console.log('Form submitted successfully:', data);
      router.push('/thankyou?location=kochi');
    } catch (error: any) {
      console.error('Error submitting form:', error);
      // Check if it's a duplicate error from response data
      if (error.message?.includes('Phone Number') || error.message?.includes('already exists')) {
        setErrorMessage('Already booked for this number');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
    // Clear error message when user starts typing
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Never close modal if loading
    if (isLoading) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    // Only close if clicking directly on backdrop (not modal content)
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 bg-opacity-50" 
      onClick={handleBackdropClick}
      onMouseDown={(e) => {
        // Prevent backdrop interaction during loading
        if (isLoading) {
          e.preventDefault();
          e.stopPropagation();
        }
      }}
    >
      <div 
        className="bg-white rounded-2xl shadow-lg p-12 w-full max-w-md relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (!isLoading) {
              onClose();
            }
          }}
          disabled={isLoading}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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

        <form 
          onSubmit={handleSubmit}
          className="space-y-5"
          onClick={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
        >
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
                disabled={isLoading}
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
                disabled={isLoading}
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
                disabled={isLoading}
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
                disabled={isLoading}
              />
              <label
                htmlFor="consent"
                className="text-sm text-gray-600 leading-relaxed cursor-pointer"
              >
                I consent to get contacted by Seeds Of Innocens IVF representatives
              </label>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="text-red-600 text-sm font-medium text-center py-2">
                {errorMessage}
              </div>
            )}

            {/* Get a Call Back Button */}
            <button
              type="submit"
              disabled={isLoading}
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="w-full py-3 rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>Submitting...</span>
                </>
              ) : (
                'Get a Call Back'
              )}
            </button>
          </form>
      </div>
    </div>
  );
}
