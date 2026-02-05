import React from 'react';
import Image from 'next/image';

export default function OurServices() {
  const services = [
    {
      id: 1,
      title: 'Egg freezing',
      description: 'ভবিষ্যতের গর্ভধারণ পরিকল্পনার জন্য এখন নিরাপদে শুক্রাণু বা ডিম্বাণু হিমায়িত করে আপনার প্রজনন ক্ষমতা সংরক্ষণ করুন।',
      icon: '/gads/assets/image/icons/eggfreezing.svg',
    },
    {
      id: 2,
      title: 'এমব্রো সংরক্ষণ',
      description: 'ভবিষ্যতের গর্ভধারণ পরিকল্পনার জন্য এখন নিরাপদে freezing embryos করে আপনার প্রজনন ক্ষমতা সংরক্ষণ করুন।',
      icon: '/gads/assets/image/icons/embryofreezing.svg',
    },
    {
      id: 3,
      title: 'অক্টোসিট বিটরিফিকেশন',
      description: 'ভবিষ্যতে গর্ভধারণের পরিকল্পনার জন্য উন্নত Vitrification পদ্ধতিতে দ্রুত আপনার ডিম্বাণু সংরক্ষণ করে উর্বরতা সুরক্ষিত রাখুন।',
      icon: '/gads/assets/image/icons/oocyte.svg',
    },
    {
      id: 4,
      title: 'লেজার অস্তিত্বপূর্ণ হাটিং',
      description: 'একটি মৃদু লেজার ব্যবহার করে ভ্রূণের বাইরের আবরণ পাতলা করা হয়, যা তাকে সহজে বেরিয়ে আসতে এবং জরায়ুর সাথে আরও ভালোভাবে সংযুক্ত হতে সাহায্য করে।',
      icon: '/gads/assets/image/icons/laser.svg',
    },
    {
      id: 5,
      title: 'রিপোর্ডাটিভ সার্গিকালি',
      description: 'প্রজননজনিত সমস্যার সংশোধন ও স্বাভাবিক অথবা সহায়তাপ্রাপ্ত গর্ভধারণের সম্ভাবনা বাড়াতে বিশেষায়িত অস্ত্রোপচার।',
      icon: '/gads/assets/image/icons/reproductive.svg',
    },
    {
      id: 6,
      title: 'অভ্যাসন ইনডুকশন',
      description: 'ওষুধ ব্যবহার করে আপনার ডিম্বাশয়কে মৃদুভাবে উদ্দীপিত করা হয়, যাতে সেগুলো নিয়মিত ডিম্বাণু উৎপাদন করে এবং গর্ভধারণের সম্ভাবনা বৃদ্ধি পায়।',
      icon: '/gads/assets/image/icons/ovulation.svg',
    },
  ];

  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          আমাদের সেবা
        </h2>

         {/* Description Text */}
        <p className="text-gray-800 text-center max-w-4xl mx-auto mb-24 leading-relaxed">
         আমরা সিডস অফ ইনোসেন্স IVF-এ কলকাতার জুড়ে বিভিন্ন ধরনের বন্ধ্যাত্ব সমাধানের ব্যবস্থা করি, যা একটি নির্ভরযোগ্য বিকল্প। সিডস অফ ইনোসেন্স IVF হলো কলকাতার সেরা IVF সেন্টার। এছাড়াও, আমরা আমাদের সেরা বন্ধ্যাত্ব বিশেষজ্ঞদের কাছ থেকে বিশেষজ্ঞ পরিচর্যা প্রদান করি, যার সাথে IVF, ICSI, IUI, Egg freezing, Oocyte vitrification, Laser-Assisted Hatching এবং Reproductive surgery মতো বিভিন্ন চিকিৎসা অন্তর্ভুক্ত রয়েছে।
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
