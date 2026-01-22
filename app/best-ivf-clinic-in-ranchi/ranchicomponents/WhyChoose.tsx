import React from 'react';
import Image from 'next/image';

export default function WhyChoose() {
  const stats = [
    {
      id: 1,
      number: '20,000+',
      description: 'स्वस्थ बच्चे',
      icon: '/gads/assets/image/icons/healthybabies.svg',
      bgColor: '#CBC8F4', // Light purple
    },
    {
      id: 2,
      number: '30+',
      description: 'डॉक्टर',
      icon: '/gads/assets/image/icons/doctors.svg',
      bgColor: '#F4B5AC', // Light orange/coral
    },
    {
      id: 3,
      number: '35+',
      description: 'इवीएफ सेंटर',
      icon: '/gads/assets/image/icons/ivfcentres.svg',
      bgColor: '#F6BDDE', // Light pink
    },
    {
      id: 4,
      number: '78%+',
      description: 'सफलता दर',
      icon: '/gads/assets/image/icons/successrate.svg',
      bgColor: '#F4DD95', // Light yellow
    },
  ];

  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
        सीड्स ऑफ़ इनोसेंस IVF क्यों चुनें?
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 md:gap-6"
              style={{ backgroundColor: stat.bgColor }}
            >
              {/* Icon */}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <Image
                  src={stat.icon}
                  alt={stat.description}
                  width={48}
                  height={48}
                  className="w-18 h-18 md:w-20 md:h-20"
                />
              </div>

              {/* Number and Description Container */}
              <div className="flex flex-col">
                {/* Number */}
                <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-1 md:mb-2 text-center">
                  {stat.number}
                </div>

                {/* Description */}
                <div className="text-lg md:text-xl text-gray-700 font-medium text-center ">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
