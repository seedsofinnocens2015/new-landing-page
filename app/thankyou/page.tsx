import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You - Seeds Of Innocens IVF',
  description: 'Thank you for contacting Seeds Of Innocens IVF. Our team will get in touch with you soon.',
};



export default function ThankYouPage() {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-white flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center space-y-8">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 24L20 30L34 16"
                  stroke="#22c55e"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Thank You Message */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-800">Thank You!</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We have received your request for our Clinic.
            </p>
          </div>

          {/* What's Next */}
          <div className="bg-pink-50 rounded-2xl p-6 space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">What Happens Next?</h2>
            <div className="space-y-3 text-left">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <p className="text-gray-700">Our fertility expert will call you within 24 hours</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <p className="text-gray-700">We'll understand your specific fertility needs</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <p className="text-gray-700">Schedule your personalized consultation at our clinic</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Need Immediate Assistance?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+918123456789"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 5a2 2 0 012-2h3.586a1 1 0 01.707.293l5.414 5.414a1 1 0 010 1.414l-3.586 3.586a1 1 0 01-1.414 0l-5.414-5.414A1 1 0 014 8.586V5z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="7" cy="7" r="1" fill="currentColor" />
                </svg>
                Call Us Now
              </a>
              <a
                href="mailto:info@seedsofinnocens.com"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8l7 4 7-4M3 4h14v12H3V4z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Email Us
              </a>
            </div>
          </div>         
        </div>
      </div>
    </div>
  );
}
