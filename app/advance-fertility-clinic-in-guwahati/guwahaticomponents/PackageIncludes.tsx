import React from 'react';
import Image from 'next/image';

export default function PackageIncludes() {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          আমাৰ পেকেজত অন্তৰ্ভুক্ত
        </h2>

        {/* Mobile: Single Card with both sections */}
        <div className="block md:hidden max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md p-8">
            {/* Free Fertility Screening Camp Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
              বিনামূলীয়া প্ৰজনন পৰীক্ষা শিবিৰ
              </h3>
              <div className="space-y-4">
                {/* Free Consultation */}
                <div className="gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/gads/assets/image/icons/Tick 1.svg"
                      alt="Free Consultation"
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  </div>
                  <span className="text-lg text-gray-700 font-medium">
                  বিনামূলীয়া আইভিএফ পৰামৰ্শ
                  </span>
                  <p className="text-gray-600">
                    যদি আপুনি সৰ্বোত্তম আইভিএফ চিকিৎসা বিচাৰিছে, তেন্তে আপুনি ছিডছ অৱ ইনোচেন্স আইভিএফৰ শ্ৰেষ্ঠ আইভিএফ বিশেষজ্ঞক লগ পাব পাৰে।
                  </p>
                </div>

                {/* Free Scan */}
                <div className=" items-center gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/gads/assets/image/icons/Tick 1.svg"
                      alt="Free Scan"
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  </div>
                  <span className="text-lg text-gray-700 font-medium">
                  বিনামূলীয়া স্কেন
                  </span>
                  <p className="text-gray-600">
                    ভাৰতত আইভিএফ চিকিৎসাৰ খৰচৰ ওপৰত ব্যাপক স্বচ্ছতা লাভ কৰক, পৰীক্ষিত আইভিএফ ক্লিনিক পৰ্যালোচনাৰ জৰিয়তে বিশ্বাসযোগ্য সমৰ্থনৰ সৈতে উচ্চ সফলতাৰ হাৰৰ পৰা লাভৱান হওক।
                  </p>
                </div>
              </div>
            </div>

            {/* Special Benefits Section */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
              বিশেষ সুবিধা
              </h3>
              <div className="space-y-4">
                {/* No Cost EMI */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/gads/assets/image/icons/EMI-Icon 1.svg"
                      alt="No Cost EMI"
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  </div>
                  <span className="text-lg text-gray-700 font-medium">
                  কোনো খৰচ নাই EMI
                  </span>
                </div>

                {/* Free Semen Analysis */}
                <div className="flex items-center gap-4 text-gray-700">
                 আমাৰ আইভিএফ পেকেজসমূহ ভাৰতত আইভিএফ চিকিৎসাৰ খৰচৰ সম্পূৰ্ণ স্বচ্ছতাৰে অসংখ্য দম্পতীৰ যাত্ৰাক সমৰ্থন কৰিবলৈ ডিজাইন কৰা হৈছে। অসমত উন্নত আইভিএফ চেণ্টাৰৰ সহায়ত আপুনি শ্ৰেষ্ঠ আইভিএফ ডাক্তৰক লগ পাব পাৰে আৰু আইভিএফৰ পৰামৰ্শ সহজে বুকিং কৰিব পাৰে। আমি আপোনাক প্ৰতিটো পদক্ষেপৰ পিছত পদক্ষেপৰ মাজেৰে পথ প্ৰদৰ্শন কৰিম, য’ত কণী ফ্ৰীজিং আৰু আইচিএছআই প্ৰজনন চিকিৎসাৰ দৰে উন্নত বিকল্পসমূহ অন্তৰ্ভুক্ত কৰা হ’ব।
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Two Separate Cards */}
        <div className="hidden md:grid grid-cols-2 gap-24 max-w-5xl mx-auto">
          {/* Left Card - Free Fertility Screening Camp */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-xl text-center font-semibold text-gray-900 mb-6">
            বিনামূলীয়া প্ৰজনন পৰীক্ষা শিবিৰ
            </h3>
            <div className="space-y-6">
              {/* Free Consultation */}
              <div className="flex flex-col items-center gap-3">
                <div className="flex-shrink-0">
                  <Image
                    src="/gads/assets/image/icons/Tick 1.svg"
                    alt="Free Consultation"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </div>
                <span className="text-gray-700 font-medium">
                বিনামূলীয়া আইভিএফ পৰামৰ্শ
                </span>
                <p className="text-gray-600 text-center">
                  যদি আপুনি সৰ্বোত্তম আইভিএফ চিকিৎসা বিচাৰিছে, তেন্তে আপুনি ছিডছ অৱ ইনোচেন্স আইভিএফৰ শ্ৰেষ্ঠ আইভিএফ বিশেষজ্ঞক লগ পাব পাৰে।
                </p>
              </div>

              {/* Free Scan */}
              <div className="flex flex-col items-center gap-3">
                <div className="flex-shrink-0">
                  <Image
                    src="/gads/assets/image/icons/Tick 1.svg"
                    alt="Free Scan"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </div>
                <span className="text-gray-700 font-medium">
                বিনামূলীয়া স্কেন
                </span>
                <p className="text-gray-600 text-center">
                 ভাৰতত আইভিএফ চিকিৎসাৰ খৰচৰ ওপৰত ব্যাপক স্বচ্ছতা লাভ কৰক, পৰীক্ষিত আইভিএফ ক্লিনিক পৰ্যালোচনাৰ জৰিয়তে বিশ্বাসযোগ্য সমৰ্থনৰ সৈতে উচ্চ সফলতাৰ হাৰৰ পৰা লাভৱান হওক।
                </p>
              </div>
            </div>
          </div>

          {/* Right Card - Special Benefits */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center justify-center">
            <h3 className="text-xl text-center font-semibold text-gray-900 mb-6">
            বিশেষ সুবিধা
            </h3>
            <div className="space-y-6">
              {/* No Cost EMI */}
              <div className="flex flex-col items-center gap-3">
                <div className="flex-shrink-0">
                  <Image
                    src="/gads/assets/image/icons/EMI-Icon 1.svg"
                    alt="No Cost EMI"
                    width={80}
                    height={80}
                    className="w-30 h-30"
                  />
                </div>
                <span className="text-lg text-gray-700 font-medium">
                কোনো খৰচ নাই EMI
                </span>
              </div>

              {/* Free Semen Analysis */}
              <div className="flex flex-col items-center gap-3">
                <div className="flex-shrink-0 text-center text-gray-700">
                  আমাৰ আইভিএফ পেকেজসমূহ ভাৰতত আইভিএফ চিকিৎসাৰ খৰচৰ সম্পূৰ্ণ স্বচ্ছতাৰে অসংখ্য দম্পতীৰ যাত্ৰাক সমৰ্থন কৰিবলৈ ডিজাইন কৰা হৈছে। অসমত উন্নত আইভিএফ চেণ্টাৰৰ সহায়ত আপুনি শ্ৰেষ্ঠ আইভিএফ ডাক্তৰক লগ পাব পাৰে আৰু আইভিএফৰ পৰামৰ্শ সহজে বুকিং কৰিব পাৰে। আমি আপোনাক প্ৰতিটো পদক্ষেপৰ পিছত পদক্ষেপৰ মাজেৰে পথ প্ৰদৰ্শন কৰিম, য’ত কণী ফ্ৰীজিং আৰু আইচিএছআই প্ৰজনন চিকিৎসাৰ দৰে উন্নত বিকল্পসমূহ অন্তৰ্ভুক্ত কৰা হ’ব।
                </div>
                {/* <span className="text-lg text-gray-700 font-medium">
                  Free Semen Analysis
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
