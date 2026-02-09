import React from 'react';
import Image from 'next/image';

export default function OurServices() {
  const services = [
    {
      id: 1,
      title: 'Egg Freezing',
      description: 'ভৱিষ্যতৰ গৰ্ভাৱস্থাৰ পৰিকল্পনাৰ বাবে এতিয়াই বীৰ্য্য বা কণী নিৰাপদে ফ্ৰীজত ৰাখি আপোনাৰ প্ৰজনন ক্ষমতা সংৰক্ষণ কৰক।',
      icon: '/gads/assets/image/icons/eggfreezing.svg',
    },
    {
      id: 2,
      title: 'Embryo Freezing',
      description: 'আপোনাৰ কণী আৰু বীৰ্য্যৰ সহায়ে সৃষ্ট ভৱিষ্যতৰ গৰ্ভাৱস্থাৰ পৰিকল্পনাৰ বাবে এতিয়াই নিৰাপদে ফ্ৰীজত ৰাখি আপোনাৰ প্ৰজনন ক্ষমতা সংৰক্ষণ কৰক।',
      icon: '/gads/assets/image/icons/embryofreezing.svg',
    },
    {
      id: 3,
      title: 'Oocyte Vitrification',
      description: 'আপোনাৰ কণী সুৰক্ষাৰ বাবে এগৰাকী উচ্চ অৱস্থানৰ তাৰতম্য ফ্ৰীজিং প্ৰক্ৰিয়াৰ সহায়ে ভৱিষ্যতৰ গৰ্ভাৱস্থাৰ পৰিকল্পনাৰ বাবে এতিয়াই নিৰাপদে ফ্ৰীজত ৰাখি আপোনাৰ প্ৰজনন ক্ষমতা সংৰক্ষণ কৰক।',
      icon: '/gads/assets/image/icons/oocyte.svg',
    },
    {
      id: 4,
      title: 'Laser Assisted Hatching',
      description: 'এগৰাকী সহায়ক লেজাৰ ব্যৱহাৰ কৰি ভ্ৰূণৰ বাহিৰৰ ছালক পাতি লৈ আৰু ইউটেৰাছৰ সৈতে সংযোগ হওয়াৰ সুবিধা দিয়ে।',
      icon: '/gads/assets/image/icons/laser.svg',
    },
    {
      id: 5,
      title: 'Reproductive Surgery',
      description: 'প্ৰজনন সমস্যা শুধৰণি আৰু আপোনাৰ প্ৰাকৃতিক বা সহায়ক গৰ্ভধাৰণৰ সম্ভাৱনা বৃদ্ধি কৰিবলৈ বিশেষ অস্ত্ৰোপচাৰ।',
      icon: '/gads/assets/image/icons/reproductive.svg',
    },
    {
      id: 6,
      title: 'Ovulation Induction',
      description: 'ঔষধ ব্যৱহাৰ কৰি আপোনাৰ ডিম্বাশয়ক লাহে লাহে উদ্দীপিত কৰা হয় যাতে ই নিয়মিতভাৱে কণী মুক্ত কৰে আৰু আপোনাৰ গৰ্ভাৱস্থাৰ সম্ভাৱনা বৃদ্ধি কৰে।',
      icon: '/gads/assets/image/icons/ovulation.svg',
    },
  ];

  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          আমাৰ সেৱাসমূহ
        </h2>

         {/* Description Text */}
        <p className="text-gray-800 text-center max-w-4xl mx-auto mb-24 leading-relaxed">
         আমি ছিডছ অৱ ইনোচেন্স আইভিএফ গুৱাহাটীত আইভিএফ, আইচিএছআই, আইইউআই, কণী ফ্ৰীজিং, ভ্ৰূণ ফ্ৰীজিং, অ’চাইট ভিট্ৰিফিকেশন, লেজাৰ-এচিষ্টেড হেচিং, আৰু প্ৰজনন অস্ত্ৰোপচাৰকে ধৰি বহুতো প্ৰজনন সমাধান প্ৰদান কৰোঁ। অৱশ্যে মোৰ ওচৰৰ শ্ৰেষ্ঠ আই ভি এফ চেণ্টাৰ বিচাৰিলে ছিডছ অৱ ইনোচেন্স আই ভি এফ গুৱাহাটী মাত্ৰ চুকটোৰ ওচৰত।
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
