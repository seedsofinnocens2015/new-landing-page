import React from 'react';
import Image from 'next/image';

export default function OurServices() {
  const services = [
    {
      id: 1,
      title: 'Egg Freezing',
      description: 'Preserve your fertility by safely freezing semen or eggs now for future pregnancy plans.',
      icon: '/gads/assets/image/icons/eggfreezing.svg',
    },
    {
      id: 2,
      title: 'Embryo Freezing',
      description: 'Preserve future pregnancy options by safely freezing embryos created with your eggs and sperm today.',
      icon: '/gads/assets/image/icons/embryofreezing.svg',
    },
    {
      id: 3,
      title: 'Oocyte Vitrification',
      description: 'Protect your fertility by rapidly freezing your eggs with advanced vitrification for future pregnancy plans.',
      icon: '/gads/assets/image/icons/oocyte.svg',
    },
    {
      id: 4,
      title: 'Laser Assisted Hatching',
      description: 'A gentle laser is used to thin the embryo\'s outer shell, helping it hatch and attach better to the uterus.',
      icon: '/gads/assets/image/icons/laser.svg',
    },
    {
      id: 5,
      title: 'Reproductive Surgery',
      description: 'Specialized surgeries to correct reproductive problems and improve your chances of natural or assisted pregnancy.',
      icon: '/gads/assets/image/icons/reproductive.svg',
    },
    {
      id: 6,
      title: 'Ovulation Induction',
      description: 'Medicines are used to gently stimulate your ovaries so they release eggs regularly and improve your chances of pregnancy.',
      icon: '/gads/assets/image/icons/ovulation.svg',
    },
  ];

  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Our Services
        </h2>

         {/* Description Text */}
        <p className="text-gray-800 text-center max-w-4xl mx-auto mb-24 leading-relaxed">
          Our services include the whole fertility solutions at a trusted IVF clinic near me option for the couples across Gurgaon. Seeds of Innocens IVF is a leading IVF centre in Gurgaon, we offer expert care from the best fertility specialist along with several treatments which includes IVF, ICSI, IUI, Egg freezing, Embryo Freezing, Oocyte vitrification, Laser Assisted Hatching, Ovulation Induction and reproductive surgery.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Mobile: Vertical Layout (Icon top, Title below) */}
              <div className="flex flex-col items-center md:hidden">
                {/* Icon */}
                <div className="mb-3">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={100}
                    height={100}
                    className="w-32 h-32"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 text-center">
                  {service.title}
                </h3>
              </div>

              {/* Desktop: Horizontal Layout (Icon left, Title right, Description below) */}
              <div className="hidden md:block">
                {/* Icon and Title Row */}
                <div className="flex items-center gap-4 mb-3">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={64}
                      height={64}
                      className="w-16 h-16"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 flex-1">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
