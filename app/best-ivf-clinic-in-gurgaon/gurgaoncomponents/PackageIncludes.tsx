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
                    If you are looking for an IVF treatment near me then you can meet the best IVF specialist at our trusted IVF centre in Gurgaon, Seeds of Innocens IVF is here to guide you.
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
                    Get a comprehensive transparency on IVF treatment cost in India, high IVF success rates and support you through verified IVF clinic reviews.
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
                  Our IVF packages are designed to support each couple’s journey with complete transparency in IVF treatment cost in India. At Seeds of Innocens IVF, an advanced IVF centre in Gurgaon, you can meet the best IVF doctor and book IVF consultation easily. We guide you through the IVF process step by step which includes advanced options such ICSI fertility treatment and egg freezing.
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
                  If you are looking for an IVF treatment near me then you can meet the best IVF specialist at our trusted IVF centre in Gurgaon, Seeds of Innocens IVF is here to guide you.
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
                  Get a comprehensive transparency on IVF treatment cost in India, high IVF success rates and support you through verified IVF clinic reviews.
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
                  Our IVF packages are designed to support each couple’s journey with complete transparency in IVF treatment cost in India. At Seeds of Innocens IVF, an advanced IVF centre in Gurgaon, you can meet the best IVF doctor and book IVF consultation easily. We guide you through the IVF process step by step which includes advanced options such ICSI fertility treatment and egg freezing and IVF cost in India plans. Looking for an IVF clinic near me?
                  With high IVF success rates and customized care, we offer the right treatment solutions for your parenthood dream.
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
