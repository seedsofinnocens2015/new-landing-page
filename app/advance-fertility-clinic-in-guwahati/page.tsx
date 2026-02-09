import Banner from './guwahaticomponents/Banner';
import PackageIncludes from './guwahaticomponents/PackageIncludes';
import Specialists from './guwahaticomponents/Specialists';
import WhyChoose from './guwahaticomponents/WhyChoose';
import OurServices from './guwahaticomponents/OurServices';
import PatientSuccessStories from './guwahaticomponents/PatientSuccessStories';
import OurCentres from './guwahaticomponents/OurCentres';
import FAQs from './guwahaticomponents/FAQs';
import Awards from './guwahaticomponents/Awards';
import FindUsHere from './guwahaticomponents/FindUsHere';
import type { Metadata } from 'next';
import Navbar from './guwahaticomponents/Navbar';

export const metadata: Metadata = {
  title: 'Best IVF Clinic in Guwahati - Seeds Of Innocens Fertility & IVF',
  description: 'Best IVF Clinic in Guwahati - Seeds Of Innocens Fertility & IVF offers world-class fertility treatments and IVF services. Book your appointment today.',
};

export default function GuwahatiPage() {
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