import Banner from './haldwanicomponents/Banner';
import PackageIncludes from './haldwanicomponents/PackageIncludes';
import Specialists from './haldwanicomponents/Specialists';
import WhyChoose from './haldwanicomponents/WhyChoose';
import OurServices from './haldwanicomponents/OurServices';
import PatientSuccessStories from './haldwanicomponents/PatientSuccessStories';
import OurCentres from './haldwanicomponents/OurCentres';
import FAQs from './haldwanicomponents/FAQs';
import Awards from './haldwanicomponents/Awards';
import FindUsHere from './haldwanicomponents/FindUsHere';
import type { Metadata } from 'next';
import Navbar from './haldwanicomponents/Navbar';

export const metadata: Metadata = {
  title: 'Best IVF Clinic in Haldwani - Seeds Of Innocens Fertility & IVF',
  description: 'Best IVF Clinic in Haldwani - Seeds Of Innocens Fertility & IVF offers world-class fertility treatments and IVF services. Book your appointment today.',
};

export default function HaldwaniPage() {
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