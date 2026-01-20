import Banner from './kochicomponents/Banner';
import PackageIncludes from './kochicomponents/PackageIncludes';
import Specialists from './kochicomponents/Specialists';
import WhyChoose from './kochicomponents/WhyChoose';
import OurServices from './kochicomponents/OurServices';
import PatientSuccessStories from './kochicomponents/PatientSuccessStories';
import OurCentres from './kochicomponents/OurCentres';
import FAQs from './kochicomponents/FAQs';
import Awards from './kochicomponents/Awards';
import FindUsHere from './kochicomponents/FindUsHere';
import type { Metadata } from 'next';
import Navbar from './kochicomponents/Navbar';

export const metadata: Metadata = {
  title: 'Best IVF Clinic in Kochi - Seeds Of Innocens Fertility & IVF',
  description: 'Best IVF Clinic in Kochi - Seeds Of Innocens Fertility & IVF offers world-class fertility treatments and IVF services. Book your appointment today.',
};

export default function KochiPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="w-full">
        <Navbar />
        <Banner />
        <PackageIncludes />
        <Specialists />
        <WhyChoose />
        <OurServices />
        <PatientSuccessStories />
        <OurCentres />
        <FAQs />
        <Awards />
        <FindUsHere />
      </main>
    </div>
  );
}