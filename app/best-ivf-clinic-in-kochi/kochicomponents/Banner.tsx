'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Banner() {
  const router = useRouter();
   const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    center: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [utmParams, setUtmParams] = useState({ utm_source: '', utm_medium: '', utm_campaign: '' });
  
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const source = params.get('utm_source') || '';
    const campaign = params.get('utm_campaign') || '';
    let medium = params.get('utm_medium') || '';
    if (!medium) {
      if (source.toLowerCase().includes('youtube')) medium = 'youtube';
      else if (source.toLowerCase().includes('google')) medium = 'cpc';
    }
    setUtmParams({ utm_source: source, utm_medium: medium, utm_campaign: campaign });
  }, []);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      setErrorMessage('Please enter a valid 10-digit phone number');
      return;
    }
    setIsLoading(true);
    setErrorMessage('');
    
    try {
      // Prepare data for backend
      const payload = {
        fullName: formData.fullName,
        phoneNumber: formData.phoneNumber,
        center: formData.center,
        source: 'SOI | IVF | Google Form Fill | Kochi',
        message: formData.message,
        utm_source: utmParams.utm_source,
        utm_medium: utmParams.utm_medium,
        utm_campaign: utmParams.utm_campaign,
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updatedValue =
      name === 'phoneNumber' ? value.replace(/\D/g, '').slice(0, 10) : value;
    setFormData((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));
    // Clear error message when user starts typing
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  return (
    <section className="relative w-full mt-15">
      {/* Desktop Banner Image */}
      <div className="relative w-full hidden md:block">
        <img 
          src="/gads/assets/image/banner/kochi.jpg"
          alt="Banner"
          className="w-full h-auto"
        />
      </div>
      
      {/* Mobile Banner Image */}
      <div className="relative w-full block md:hidden">
        <img 
          src="/gads/assets/image/banner/kochi1.jpg"
          alt="Banner Mobile"
          className="w-full h-auto"
        />
      </div>
      
      {/* Form Card - Positioned absolutely over banner */}
      <div className="absolute top-0 left-0 right-0 bottom-0 max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-12 flex items-end md:items-center justify-center md:justify-end z-10">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
          <form onSubmit={handleSubmit} className="space-y-5">
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
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  minLength={10}
                  maxLength={10}
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="relative">
                <select
                  name="center"
                  value={formData.center}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-pink-300 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 text-gray-700 appearance-none bg-white cursor-pointer"
                  required
                  disabled={isLoading}
                >
                  <option value="" disabled>Select Center</option>
                  <option value="Malviya Nagar, Delhi">Malviya Nagar, Delhi</option>
                  <option value="Ghaziabad, Uttar Pradesh">Ghaziabad, Uttar Pradesh</option>
                  <option value="Lucknow, Uttar Pradesh">Lucknow, Uttar Pradesh</option>
                  <option value="Agra, Uttar Pradesh">Agra, Uttar Pradesh</option>
                  <option value="Gorakhpur, Uttar Pradesh">Gorakhpur, Uttar Pradesh</option>
                  <option value="Patna, Bihar">Patna, Bihar</option>
                  <option value="Faridabad, Haryana">Faridabad, Haryana</option>
                  <option value="Gurugram, Haryana">Gurugram, Haryana</option>
                  <option value="Ranchi, Jharkhand">Ranchi, Jharkhand</option>
                  <option value="Haldwani, Uttarakhand">Haldwani, Uttarakhand</option>
                  <option value="Guwahati, Assam">Guwahati, Assam</option>
                  <option value="Kasaragod, Kerala">Kasaragod, Kerala</option>
                  <option value="Kanpur, Uttar Pradesh">Kanpur, Uttar Pradesh</option>
                  <option value="Kochi, Kerala">Kochi, Kerala</option>
                  <option value="Pitampura, New Delhi">Pitampura, New Delhi</option>
                  <option value="Meerut, Uttar Pradesh">Meerut, Uttar Pradesh</option>
                  <option value="Muzaffarpur, Bihar">Muzaffarpur, Bihar</option>
                  <option value="Srinagar, J&K">Srinagar, J&K</option>
                  <option value="Janakpuri, New Delhi">Janakpuri, New Delhi</option>
                  <option value="Kolkata">Kolkata</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6L8 10L12 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message (Optional)"
                  rows={1}
                  maxLength={1000}
                  className="w-full px-4 py-3 rounded-lg border border-pink-300 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 text-gray-700 placeholder-gray-400 resize-y"
                  disabled={isLoading}
                />
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
    </section>
  );
}
