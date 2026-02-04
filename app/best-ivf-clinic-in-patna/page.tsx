import Banner from './patnacomponents/Banner';
import PackageIncludes from './patnacomponents/PackageIncludes';
import Specialists from './patnacomponents/Specialists';
import WhyChoose from './patnacomponents/WhyChoose';
import OurServices from './patnacomponents/OurServices';
import PatientSuccessStories from './patnacomponents/PatientSuccessStories';
import OurCentres from './patnacomponents/OurCentres';
import FAQs from './patnacomponents/FAQs';
import Awards from './patnacomponents/Awards';
import FindUsHere from './patnacomponents/FindUsHere';
import type { Metadata } from 'next';
import Navbar from './patnacomponents/Navbar';

export const metadata: Metadata = {
  title: 'Best IVF Clinic in Patna - Seeds Of Innocens Fertility & IVF',
  description: 'Best IVF Clinic in Patna - Seeds Of Innocens Fertility & IVF offers world-class fertility treatments and IVF services. Book your appointment today.',
};

export default function PatnaPage() {
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