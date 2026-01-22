import Banner from './lucknowcomponents/Banner';
import PackageIncludes from './lucknowcomponents/PackageIncludes';
import Specialists from './lucknowcomponents/Specialists';
import WhyChoose from './lucknowcomponents/WhyChoose';
import OurServices from './lucknowcomponents/OurServices';
import PatientSuccessStories from './lucknowcomponents/PatientSuccessStories';
import OurCentres from './lucknowcomponents/OurCentres';
import FAQs from './lucknowcomponents/FAQs';
import Awards from './lucknowcomponents/Awards';
import FindUsHere from './lucknowcomponents/FindUsHere';
import type { Metadata } from 'next';
import Navbar from './lucknowcomponents/Navbar';

export const metadata: Metadata = {
  title: 'Best IVF Clinic in Lucknow - Seeds Of Innocens Fertility & IVF',
  description: 'Best IVF Clinic in Lucknow - Seeds Of Innocens Fertility & IVF offers world-class fertility treatments and IVF services. Book your appointment today.',
};

export default function LucknowPage() {
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