import React from 'react';
import Image from 'next/image';

export default function PackageIncludes() {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          ഞങ്ങളുടെ പാക്കേജിൽ ഇവ ഉൾപ്പെടുന്നു
        </h2>

        {/* Mobile: Single Card with both sections */}
        <div className="block md:hidden max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md p-8">
            {/* Free Fertility Screening Camp Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                സൗജന്യ ഫെർട്ടിലിറ്റി സ്ക്രീനിംഗ് ക്യാമ്പ്
              </h3>
              <div className="space-y-4">
                {/* Free Consultation */}
                <div className="items-center gap-4">
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
                    സൗജന്യ കൺസൾട്ടേഷൻ
                  </span>
                  <p className="text-gray-600">
                    കൊച്ചിയിലെ ഞങ്ങളുടെ വിശ്വസനീയമായ സീഡ്സ് ഓഫ് ഇന്നോസെൻസ് മികച്ച IVF സെന്ററിൽ നിങ്ങൾക്ക് ഒരു IVF ഡോക്ടറെയും സ്പെഷ്യലിസ്റ്റിനെയും സന്ദർശിക്കാം. ആത്മവിശ്വാസത്തോടെ നിങ്ങളുടെ ഫെർട്ടിലിറ്റി യാത്ര ആരംഭിക്കുന്നതിന് നിങ്ങൾക്ക് വിദഗ്ദ്ധ മാർഗ്ഗനിർദ്ദേശവും ലഭിക്കും
                  </p>
                </div>

                {/* Free Scan */}
                <div className="items-center gap-4">
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
                    സൗജന്യ സ്കാൻ
                  </span>
                  <p className="text-gray-600">
                    ഞങ്ങളുടെ ടീമിൽ നിന്ന് ഇഷ്ടാനുസൃത പരിചരണത്തോടെ സമഗ്രമായ ഫെർട്ടിലിറ്റി വിലയിരുത്തൽ സ്വീകരിക്കുകയും IVF പ്രക്രിയ മനസ്സിലാക്കുകയും ചെയ്യുക.
                  </p>
                </div>
              </div>
            </div>

            {/* Special Benefits Section */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                പ്രത്യേക ആനുകൂല്യങ്ങൾ
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
                    ചെലവില്ലാതെ EMI
                  </span>
                </div>

                {/* Free Semen Analysis */}
                <div className="flex items-center gap-4 text-gray-700">
                  കൊച്ചിയിൽ എനിക്ക് സമീപമുള്ള ഒരു IVF ക്ലിനിക്ക് തിരയുകയാണോ? ഇപ്പോൾ നിങ്ങൾക്ക് IVF കൺസൾട്ടേഷൻ എളുപ്പത്തിൽ ബുക്ക് ചെയ്യാനും ഫ്ലെക്സിബിൾ EMI ഓപ്ഷനുകളുള്ള ഞങ്ങളുടെ മികച്ച IVF പാക്കേജുകൾ വഴി കൊച്ചിയിലെ IVF ചികിത്സാ ചെലവ് പര്യവേക്ഷണം ചെയ്യാനും കഴിയും.
                  യഥാർത്ഥ IVF ക്ലിനിക്ക് അവലോകനങ്ങളുടെ പിന്തുണയുള്ള ഉയർന്ന IVF വിജയ നിരക്കും, നൂതന ICSI ഫെർട്ടിലിറ്റി ചികിത്സയും ഞങ്ങൾ വാഗ്ദാനം ചെയ്യുന്നു. എന്നിരുന്നാലും, നിരവധി ഫെർട്ടിലിറ്റി ചികിത്സകൾക്കായി ഞങ്ങളുടെ IVF സ്പെഷ്യലിസ്റ്റുകൾ നിങ്ങളെ പൂർണ്ണമായും നയിക്കും.

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
              സൗജന്യ ഫെർട്ടിലിറ്റി സ്ക്രീനിംഗ് ക്യാമ്പ്
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
                <span className="text-lg text-gray-700 font-medium">
                  സൗജന്യ കൺസൾട്ടേഷൻ
                </span>
                <p className="text-gray-600 text-center">
                  കൊച്ചിയിലെ ഞങ്ങളുടെ വിശ്വസനീയമായ സീഡ്സ് ഓഫ് ഇന്നോസെൻസ് മികച്ച IVF സെന്ററിൽ നിങ്ങൾക്ക് ഒരു IVF ഡോക്ടറെയും സ്പെഷ്യലിസ്റ്റിനെയും സന്ദർശിക്കാം. ആത്മവിശ്വാസത്തോടെ നിങ്ങളുടെ ഫെർട്ടിലിറ്റി യാത്ര ആരംഭിക്കുന്നതിന് നിങ്ങൾക്ക് വിദഗ്ദ്ധ മാർഗ്ഗനിർദ്ദേശവും ലഭിക്കും.
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
                <span className="text-lg text-gray-700 font-medium">
                  സൗജന്യ സ്കാൻ
                </span>
                <p className="text-gray-600 text-center">
                  ഞങ്ങളുടെ ടീമിൽ നിന്ന് ഇഷ്ടാനുസൃത പരിചരണത്തോടെ സമഗ്രമായ ഫെർട്ടിലിറ്റി വിലയിരുത്തൽ സ്വീകരിക്കുകയും IVF പ്രക്രിയ മനസ്സിലാക്കുകയും ചെയ്യുക.
                </p>
              </div>
            </div>
          </div>

          {/* Right Card - Special Benefits */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center justify-center">
            <h3 className="text-xl text-center font-semibold text-gray-900 mb-6">
              പ്രത്യേക ആനുകൂല്യങ്ങൾ
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
                  ചെലവില്ലാതെ EMI
                </span>
              </div>

              {/* Free Semen Analysis */}
              <div className="flex flex-col items-center gap-3">
                <div className="flex-shrink-0 text-center text-gray-700">
                  കൊച്ചിയിൽ എനിക്ക് സമീപമുള്ള ഒരു IVF ക്ലിനിക്ക് തിരയുകയാണോ? ഇപ്പോൾ നിങ്ങൾക്ക് IVF കൺസൾട്ടേഷൻ എളുപ്പത്തിൽ ബുക്ക് ചെയ്യാനും ഫ്ലെക്സിബിൾ EMI ഓപ്ഷനുകളുള്ള ഞങ്ങളുടെ മികച്ച IVF പാക്കേജുകൾ വഴി കൊച്ചിയിലെ IVF ചികിത്സാ ചെലവ് പര്യവേക്ഷണം ചെയ്യാനും കഴിയും.
                  യഥാർത്ഥ IVF ക്ലിനിക്ക് അവലോകനങ്ങളുടെ പിന്തുണയുള്ള ഉയർന്ന IVF വിജയ നിരക്കും, നൂതന ICSI ഫെർട്ടിലിറ്റി ചികിത്സയും ഞങ്ങൾ വാഗ്ദാനം ചെയ്യുന്നു. എന്നിരുന്നാലും, നിരവധി ഫെർട്ടിലിറ്റി ചികിത്സകൾക്കായി ഞങ്ങളുടെ IVF സ്പെഷ്യലിസ്റ്റുകൾ നിങ്ങളെ പൂർണ്ണമായും നയിക്കും.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
