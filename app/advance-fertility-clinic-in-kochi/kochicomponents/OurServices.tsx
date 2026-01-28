import React from 'react';
import Image from 'next/image';

export default function OurServices() {
  const services = [
    {
      id: 1,
      title: 'എഗ് ഫ്രീസിംഗ്',
      description: 'ഭാവിയിലെ ഗർഭധാരണ പദ്ധതികൾക്കായി ബീജമോ അണ്ഡമോ സുരക്ഷിതമായി ഫ്രീസ് ചെയ്തുകൊണ്ട് നിങ്ങളുടെ പ്രത്യുൽപാദനക്ഷമത സംരക്ഷിക്കുക.',
      icon: '/gads/assets/image/icons/eggfreezing.svg',
    },
    {
      id: 2,
      title: 'ഭ്രൂണ ഫ്രീസിംഗ്',
      description: 'ഇന്ന് തന്നെ നിങ്ങളുടെ അണ്ഡങ്ങളും ബീജവും ഉപയോഗിച്ച് സൃഷ്ടിച്ച ഭ്രൂണങ്ങളെ സുരക്ഷിതമായി ഫ്രീസ് ചെയ്തുകൊണ്ട് ഭാവിയിലെ ഗർഭധാരണ ഓപ്ഷനുകൾ സംരക്ഷിക്കുക',
      icon: '/gads/assets/image/icons/embryofreezing.svg',
    },
    {
      id: 3,
      title: 'ഓസൈറ്റ് വിട്രിഫിക്കേഷൻ',
      description: 'ഭാവിയിലെ ഗർഭധാരണ പദ്ധതികൾക്കായി അഡ്വാൻസ്ഡ് വിട്രിഫിക്കേഷൻ ഉപയോഗിച്ച് നിങ്ങളുടെ അണ്ഡങ്ങൾ വേഗത്തിൽ ഫ്രീസ് ചെയ്തുകൊണ്ട് നിങ്ങളുടെ പ്രത്യുൽപാദനക്ഷമത സംരക്ഷിക്കുക',
      icon: '/gads/assets/image/icons/oocyte.svg',
    },
    {
      id: 4,
      title: 'ലേസർ അസിസ്റ്റഡ് ഹാച്ചിംഗ്',
      description: 'ഭ്രൂണത്തിന്റെ പുറംതോട് നേർത്തതാക്കാൻ ഒരു സൗമ്യമായ ലേസർ ഉപയോഗിക്കുന്നു, ഇത് വിരിയാനും ഗർഭാശയവുമായി നന്നായി ബന്ധിപ്പിക്കാനും സഹായിക്കുന്നു.',
      icon: '/gads/assets/image/icons/laser.svg',
    },
    {
      id: 5,
      title: 'പ്രൊഡക്റ്റീവ് സർജറി',
      description: 'പ്രൊഡക്റ്റീവ് പ്രശ്നങ്ങൾ പരിഹരിക്കുന്നതിനും സ്വാഭാവിക അല്ലെങ്കിൽ സഹായത്തോടെയുള്ള ഗർഭധാരണത്തിനുള്ള സാധ്യത മെച്ചപ്പെടുത്തുന്നതിനുമുള്ള പ്രത്യേക ശസ്ത്രക്രിയകൾ.',
      icon: '/gads/assets/image/icons/reproductive.svg',
    },
    {
      id: 6,
      title: 'ഓവുലേഷൻ ഇൻഡക്ഷൻ',
      description: 'നിങ്ങളുടെ അണ്ഡാശയങ്ങളെ സൌമ്യമായി ഉത്തേജിപ്പിക്കാൻ മരുന്നുകൾ ഉപയോഗിക്കുന്നു, അങ്ങനെ അവ പതിവായി മുട്ടകൾ പുറത്തുവിടുകയും ഗർഭധാരണ സാധ്യത മെച്ചപ്പെടുത്തുകയും ചെയ്യുന്നു.',
      icon: '/gads/assets/image/icons/ovulation.svg',
    },
  ];

  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          ഞങ്ങളുടെ സേവനങ്ങൾ
        </h2>

        {/* Description Text */}
        <p className="text-gray-800 text-center max-w-4xl mx-auto mb-24 leading-relaxed">
          കൊച്ചിയിൽ എനിക്ക് സമീപമുള്ള ഒരു IVF ക്ലിനിക്ക് തിരയുകയാണോ? സീഡ്സ് ഓഫ് ഇന്നോസെൻസ് IVF കൊച്ചി മികച്ച IVF സ്പെഷ്യലിസ്റ്റിൽ നിന്ന് നൂതന ഫെർട്ടിലിറ്റി സൊല്യൂഷനുകൾ ഉപയോഗിച്ച് പരിചരണം നൽകുന്നു. ഓരോ ദമ്പതികൾക്കും വേണ്ടി രൂപകൽപ്പന ചെയ്തിട്ടുള്ള ഞങ്ങളുടെ IVF പാക്കേജുകൾ ഉപയോഗിച്ച് നിങ്ങൾക്ക് ഇന്ന് തന്നെ IVF കൺസൾട്ടേഷൻ എളുപ്പത്തിൽ ബുക്ക് ചെയ്യാനും ഇന്ത്യയിലെ IVF ചികിത്സാ ചെലവ് മനസ്സിലാക്കാനും കഴിയും. കൂടാതെ, ഉയർന്ന IVF വിജയ നിരക്കുകളിൽ ഞങ്ങൾ ശ്രദ്ധ കേന്ദ്രീകരിക്കുകയും ഓരോ ഘട്ടത്തിലും IVF പ്രക്രിയയിലൂടെ സമഗ്രമായ മാർഗ്ഗനിർദ്ദേശം നൽകുകയും ചെയ്യും. വിശ്വസനീയമായ IVF ക്ലിനിക്ക് അവലോകനങ്ങൾ പിന്തുണയ്ക്കുന്ന ഒരു നൂതന ICSI ഫെർട്ടിലിറ്റി ചികിത്സ നൽകുന്ന മികച്ച IVF കേന്ദ്രങ്ങളിൽ ഒന്നാണ് കൊച്ചിയിലെ ഞങ്ങളുടെ IVF കേന്ദ്രം.
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
