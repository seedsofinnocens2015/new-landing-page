import Banner from './kanpurcomponents/Banner';
import PackageIncludes from './kanpurcomponents/PackageIncludes';
import Specialists from './kanpurcomponents/Specialists';
import WhyChoose from './kanpurcomponents/WhyChoose';
import OurServices from './kanpurcomponents/OurServices';
import PatientSuccessStories from './kanpurcomponents/PatientSuccessStories';
import OurCentres from './kanpurcomponents/OurCentres';
import FAQs from './kanpurcomponents/FAQs';
import Awards from './kanpurcomponents/Awards';
import FindUsHere from './kanpurcomponents/FindUsHere';
import type { Metadata } from 'next';
import Navbar from './kanpurcomponents/Navbar';

export const metadata: Metadata = {
  title: 'Best IVF Clinic in Kanpur - Seeds Of Innocens Fertility & IVF',
  description: 'Best IVF Clinic in Kanpur - Seeds Of Innocens Fertility & IVF offers world-class fertility treatments and IVF services. Book your appointment today.',
};

export default function KanpurPage() {
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