'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function PatientSuccessStories() {
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

  const videos = [
    {
      id: 1,
      title: '5 सालों की कोशिशें, 3 महीनों में सफलता!',
      videoId: 'r0ALtfwOocg', // Replace with actual YouTube video ID
    },
    {
      id: 2,
      title: 'गर्भधारण सफलता के कथाएं | पहली कोशिश में गर्भधारण',
      videoId: 'SY-C12ansPo', // Replace with actual YouTube video ID
    },
    {
      id: 3,
      title: 'गर्भधारण सफलता के कथाएं | पहली कोशिश में गर्भधारण',
      videoId: 'wpnZA90hG40', // Replace with actual YouTube video ID
    },
    {
      id: 4,
      title: '10 साल बाद पहली IVF असफलता के बावजूद उम्मीद नहीं छोड़ी, डॉ. निवेदिता नेहल से मिली खुशी!',
      videoId: 't83B5YaAzGo', // Replace with actual YouTube video ID
     
    },
  ];

  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
        गर्भधारण सफलता की कथाएं
        </h2>

        {/* Videos Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Videos Container with Overflow */}
          <div className="overflow-hidden mb-12 md:mb-0">
            <div
              className="flex gap-6 transition-transform duration-300 ease-in-out pb-10"
              style={{
                transform: isMobile
                  ? `translateX(calc(-${currentIndex} * (100% + 1.5rem)))`
                  : `translateX(calc(-${currentIndex} * (100% / 3 + 1.5rem)))`
              }}
            >
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow flex-shrink-0 w-full md:w-[calc((100%-3rem)/3)]"
                >
                  {/* YouTube Video Embed */}
                  <div className="relative w-full pb-[56.25%] h-0 overflow-hidden">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  {/* Video Title */}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 text-center">
                      {video.title}
                    </h3>
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
            {(isMobile ? currentIndex < videos.length - 1 : currentIndex < videos.length - 3) && (
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

        {/* Reviews and Ratings Section */}
        <div className="max-w-4xl mx-auto mt-16">
          {/* Top Ratings Section */}
          <div className="flex flex-row justify-center items-center gap-6 md:flex-row md:justify-center md:gap-0">
            {/* Google Reviews */}
            <div className="text-center md:mx-auto md:w-auto">
              <div className="text-7xl font-bold text-black mb-2">4.8</div>
              <div className="text-xs text-gray-600">1,956 रेव्यू</div>
              <div className="flex flex-col items-center">
                <Image
                  src="/gads/assets/image/icons/googlereview.svg"
                  alt="Google"
                  width={80}
                  height={30}
                  className="h-15 w-auto"
                />
              </div>
            </div>

            {/* Practo Reviews */}
            <div className="text-center md:mx-auto md:w-auto">
              <div className="text-7xl font-bold text-black mb-2">4.9</div>
              <div className="text-xs text-gray-600 mb-4">1,956 रेव्यू</div>
              <div className="flex items-center justify-center">
                <Image
                  src="/gads/assets/image/icons/practo.svg"
                  alt="Practo"
                  width={100}
                  height={30}
                  className="h-10 w-auto"
                />
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <div className="border-t border-gray-300 my-8 mx-auto w-2/3"></div>

          {/* Testimonials Section */}
          <div className="overflow-hidden relative group">
            <div className="flex gap-10 animate-marquee group-hover:[animation-play-state:paused]">
              {[
                {
                  id: 1,
                  quote: 'बहुत अच्छा अनुभव यहां ..सभी स्टाफ डॉक्टर बहुत सहयोगी हैं',
                  name: 'अनुराधा रै',
                },
                {
                  id: 2,
                  quote: 'सुपर फैक्ट्री सबसे अच्छे डॉक्टर..आप भरोसा कर सकते हैं',
                  name: 'नितिन स्रिवास्तव',
                },
                {
                  id: 3,
                  quote: 'अच्छा अनुभव मेरा इलाज सफलतापूर्वक हो गया अच्छा स्टाफ',
                  name: 'पिंकी दासी पिंकी',
                },
                {
                  id: 4,
                  quote: 'अच्छा वातावरण, आप सभी के लिए अत्यधिक सुझाव दिया जाता है!',
                  name: 'प्रिया व्यास',
                },
              ].map((testimonial) => (
                <div key={testimonial.id} className="bg-white p-6 rounded-lg flex-shrink-0 w-[280px] md:w-[320px]">
                  <p className="italic text-gray-700 mb-2 text-sm leading-relaxed text-center">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center justify-center mb-4">
                    <div className="text-black font-medium text-sm">
                      - {testimonial.name}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 justify-center">
                    <Image
                      src="/gads/assets/image/icons/googlereview.svg"
                      alt="Google"
                      width={60}
                      height={20}
                      className="h-8 w-auto"
                    />
                    <span className="text-black font-bold text-2xl ml-1">4.8</span>
                  </div>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {[
                {
                  id: 5,
                  quote: 'मेरी धूप और डॉ. गौरी अग्रवाल के इलाज के बाद फल मिला मैं अब दोहरा उम्मीद कर रहा हूं। एसेड्स ऑफ इनॉवेंस और उसकी टीम के लिए धन्यवाद',
                  name: 'श्वेता सप्रा',
                },
                {
                  id: 6,
                  quote: 'मैंने दस साल बाद फरीदाबाद के एसेड्स ऑफ इनॉवेंस के माध्यम से गर्भधारण प्राप्त की है।',
                  name: 'हेमंत गर्ग',
                },
                {
                  id: 7,
                  quote: 'बहुत संतुष्ट हूं प्रक्रिया के दौरान प्रदान किए गए समर्थन और देखभाल के लिए।',
                  name: 'अमित खत्री',
                },
                {
                  id: 8,
                  quote: 'डॉक्टर और स्टाफ बहुत सहयोगी हैं, बहुत अच्छा अनुभव सार्वजनिक रूप से!',
                  name: 'सपना भाट्ट',
                },
              ].map((testimonial) => (
                <div key={`duplicate-${testimonial.id}`} className="bg-white p-6 rounded-lg flex-shrink-0 w-[280px] md:w-[320px]">
                  <p className="italic text-gray-700 mb-2 text-sm leading-relaxed text-center">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center justify-center mb-4">
                    <div className="text-black font-medium text-sm">
                      - {testimonial.name}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 justify-center">
                    <Image
                      src="/gads/assets/image/icons/googlereview.svg"
                      alt="Google"
                      width={60}
                      height={20}
                      className="h-8 w-auto"
                    />
                    <span className="text-black font-bold text-2xl ml-1">4.8</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
