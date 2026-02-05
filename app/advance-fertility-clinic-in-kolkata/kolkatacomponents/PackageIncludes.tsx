import React from 'react';
import Image from 'next/image';

export default function PackageIncludes() {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          আমাদের প্যাকেজে অন্তর্ভুক্ত রয়েছে
        </h2>

        {/* Mobile: Single Card with both sections */}
        <div className="block md:hidden max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md p-8">
            {/* Free Fertility Screening Camp Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
              বিনামূল্যে বন্ধ্যাত্ব পরীক্ষা শিবির
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
                  বিনামূল্যে পরামর্শ
                  </span>
                  <p className="text-gray-600">
                    কলকাতায় সেরা IVF ডাক্তার খুঁজছেন? সিডস অফ ইনোসেন্স IVF-এ আপনি সেরা IVF বিশেষজ্ঞের সাথে দেখা করবেন, যিনি সহানুভূতি ও যত্নের সাথে আপনাকে পথ দেখাবেন এবং IVF যাত্রার প্রতিটি ধাপে আপনার পাশে থাকবেন।
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
                  বিনামূল্যে স্ক্যান
                  </span>
                  <p className="text-gray-600">
                    সিডস অফ ইনোসেন্স IVF কলকাতার মাধ্যমে ন্যূনতম খরচে IVF চিকিৎসা এবং অন্যান্য বন্ধ্যাত্ব চিকিৎসা সম্পর্কে একটি সম্পূর্ণ স্বচ্ছ ধারণা পান, যেখানে আপনি আপনার মাতাপিতা হওয়ার যাত্রা শুরু করতে পারেন।
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
                  কোনো খরচ ছাড়াই ইএমআই
                  </span>
                </div>

                {/* Free Semen Analysis */}
                <div className="flex items-center gap-4 text-gray-700">
                 আমাদের IVF প্যাকেজগুলো ভারতে IVF চিকিৎসার খরচের ক্ষেত্রে সম্পূর্ণ স্বচ্ছতা বজায় রেখে প্রতিটি দম্পতির যাত্রাকে সহায়তা করার জন্য ডিজাইন করা হয়েছে। কলকাতার একটি উন্নত IVF সেন্টার, সিডস অফ ইনোসেন্স IVF-এ আপনি সেরা IVF ডাক্তারের সাথে দেখা করতে পারেন এবং সহজেই IVF পরামর্শের জন্য বুকিং করতে পারেন। আমরা আপনাকে ICSI ফার্টিলিটি ট্রিটমেন্ট এবং ডিম্বাণু সংরক্ষণের মতো উন্নত বিকল্পসহ IVF প্রক্রিয়ার প্রতিটি ধাপে নির্দেশনা দিয়ে থাকি।
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
            বিনামূল্যে বন্ধ্যাত্ব পরীক্ষা শিবির
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
                বিনামূল্যে পরামর্শ
                </span>
                <p className="text-gray-600 text-center">
                  কলকাতায় সেরা IVF ডাক্তার খুঁজছেন? সিডস অফ ইনোসেন্স IVF-এ আপনি সেরা IVF বিশেষজ্ঞের সাথে দেখা করবেন, যিনি সহানুভূতি ও যত্নের সাথে আপনাকে পথ দেখাবেন এবং IVF যাত্রার প্রতিটি ধাপে আপনার পাশে থাকবেন।
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
                বিনামূল্যে স্ক্যান
                </span>
                <p className="text-gray-600 text-center">
                 সিডস অফ ইনোসেন্স IVF কলকাতার মাধ্যমে ন্যূনতম খরচে IVF চিকিৎসা এবং অন্যান্য বন্ধ্যাত্ব চিকিৎসা সম্পর্কে একটি সম্পূর্ণ স্বচ্ছ ধারণা পান, যেখানে আপনি আপনার মাতাপিতা হওয়ার যাত্রা শুরু করতে পারেন।
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
                কোনো খরচ ছাড়াই ইএমআই
                </span>
              </div>

              {/* Free Semen Analysis */}
              <div className="flex flex-col items-center gap-3">
                <div className="flex-shrink-0 text-center text-gray-700">
                  আমাদের IVF প্যাকেজগুলো ভারতে IVF চিকিৎসার খরচের ক্ষেত্রে সম্পূর্ণ স্বচ্ছতা বজায় রেখে প্রতিটি দম্পতির যাত্রাকে সহায়তা করার জন্য ডিজাইন করা হয়েছে। কলকাতার একটি উন্নত IVF সেন্টার, সিডস অফ ইনোসেন্স IVF-এ আপনি সেরা IVF ডাক্তারের সাথে দেখা করতে পারেন এবং সহজেই IVF পরামর্শের জন্য বুকিং করতে পারেন। আমরা আপনাকে ICSI ফার্টিলিটি ট্রিটমেন্ট এবং ডিম্বাণু সংরক্ষণের মতো উন্নত বিকল্পসহ IVF প্রক্রিয়ার প্রতিটি ধাপে নির্দেশনা দিয়ে থাকি।
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
