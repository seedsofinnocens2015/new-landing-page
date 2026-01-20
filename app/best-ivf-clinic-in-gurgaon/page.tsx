import Banner from './gurgaoncomponents/Banner';
import PackageIncludes from './gurgaoncomponents/PackageIncludes';
import Specialists from './gurgaoncomponents/Specialists';
import WhyChoose from './gurgaoncomponents/WhyChoose';
import OurServices from './gurgaoncomponents/OurServices';
import PatientSuccessStories from './gurgaoncomponents/PatientSuccessStories';
import OurCentres from './gurgaoncomponents/OurCentres';
import FAQs from './gurgaoncomponents/FAQs';
import Awards from './gurgaoncomponents/Awards';
import FindUsHere from './gurgaoncomponents/FindUsHere';
import type { Metadata } from 'next';
import Navbar from './gurgaoncomponents/Navbar';

export const metadata: Metadata = {
  title: 'Best IVF Clinic in Gurgaon - Seeds Of Innocens Fertility & IVF',
  description: 'Best IVF Clinic in Gurgaon - Seeds Of Innocens Fertility & IVF offers world-class fertility treatments and IVF services. Book your appointment today.',
};

export default function GurgaonPage() {
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