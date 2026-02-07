import Banner from './ranchicomponents/Banner';
import PackageIncludes from './ranchicomponents/PackageIncludes';
import Specialists from './ranchicomponents/Specialists';
import WhyChoose from './ranchicomponents/WhyChoose';
import OurServices from './ranchicomponents/OurServices';
import PatientSuccessStories from './ranchicomponents/PatientSuccessStories';
import OurCentres from './ranchicomponents/OurCentres';
import FAQs from './ranchicomponents/FAQs';
import Awards from './ranchicomponents/Awards';
import FindUsHere from './ranchicomponents/FindUsHere';
import type { Metadata } from 'next';
import Navbar from './ranchicomponents/Navbar';

export const metadata: Metadata = {
  title: 'Best IVF Clinic in Ranchi - Seeds Of Innocens Fertility & IVF',
  description: 'Best IVF Clinic in Ranchi - Seeds Of Innocens Fertility & IVF offers world-class fertility treatments and IVF services. Book your appointment today.',
};

export default function RanchiPage() {
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