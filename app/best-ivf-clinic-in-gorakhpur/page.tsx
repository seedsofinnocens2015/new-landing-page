import Banner from './gorakhpurcomponents/Banner';
import PackageIncludes from './gorakhpurcomponents/PackageIncludes';
import Specialists from './gorakhpurcomponents/Specialists';
import WhyChoose from './gorakhpurcomponents/WhyChoose';
import OurServices from './gorakhpurcomponents/OurServices';
import PatientSuccessStories from './gorakhpurcomponents/PatientSuccessStories';
import OurCentres from './gorakhpurcomponents/OurCentres';
import FAQs from './gorakhpurcomponents/FAQs';
import Awards from './gorakhpurcomponents/Awards';
import FindUsHere from './gorakhpurcomponents/FindUsHere';
import type { Metadata } from 'next';
import Navbar from './gorakhpurcomponents/Navbar';

export const metadata: Metadata = {
  title: 'Best IVF Clinic in Gorakhpur - Seeds Of Innocens Fertility & IVF',
  description: 'Best IVF Clinic in Gorakhpur - Seeds Of Innocens Fertility & IVF offers world-class fertility treatments and IVF services. Book your appointment today.',
};

export default function GorakhpurPage() {
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