import React from 'react';
import Image from 'next/image';

export default function PackageIncludes() {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Our Package Includes
        </h2>

        {/* Mobile: Single Card with both sections */}
        <div className="block md:hidden max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md p-8">
            {/* Free Fertility Screening Camp Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Free Fertility Screening Camp
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
                    Free Consultation
                  </span>
                  <p className="text-gray-600">
                    Looking for the best IVF specialist in Patna? Then meet the best IVF specialist in Patna who will guide you and take you through every step of the IVF journey with care and compassion.
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
                    Free Scan
                  </span>
                  <p className="text-gray-600">
                    Get whole transparency about the IVF treatment and other fertility treatments at a low cost with Seeds of Innocens IVF Patna, where you can start your parenthood journey.
                  </p>
                </div>
              </div>
            </div>

            {/* Special Benefits Section */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Special Benefits
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
                    No Cost EMI
                  </span>
                </div>

                {/* Free Semen Analysis */}
                <div className="flex items-center gap-4 text-gray-700">
                 Our IVF packages include various fertility treatments like IVF, ICSI, and egg freezing, and we believe in providing you with full transparency. Whether you are searching for an IVF treatment or want to freeze eggs, you can meet our IVF specialist at Seeds of Innocens IVF, where they will guide you and ana will provide you with customized treatment.
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
              Free Fertility Screening Camp
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
                  Free Consultation
                </span>
                <p className="text-gray-600 text-center">
                  Looking for the best IVF specialist in Patna? Then meet the best IVF specialist in Patna who will guide you and take you through every step of the IVF journey with care and compassion.
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
                  Free Scan
                </span>
                <p className="text-gray-600 text-center">
                 Get whole transparency about the IVF treatment and other fertility treatments at a low cost with Seeds of Innocens IVF Patna, where you can start your parenthood journey.
                </p>
              </div>
            </div>
          </div>

          {/* Right Card - Special Benefits */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center justify-center">
            <h3 className="text-xl text-center font-semibold text-gray-900 mb-6">
              Special Benefits
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
                  No Cost EMI
                </span>
              </div>

              {/* Free Semen Analysis */}
              <div className="flex flex-col items-center gap-3">
                <div className="flex-shrink-0 text-center text-gray-700">
                  Our IVF packages include various fertility treatments like IVF, ICSI, and egg freezing, and we believe in providing you with full transparency. Whether you are searching for an IVF treatment or want to freeze eggs, you can meet our IVF specialist at Seeds of Innocens IVF, where they will guide you and ana will provide you with customized treatment.
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
