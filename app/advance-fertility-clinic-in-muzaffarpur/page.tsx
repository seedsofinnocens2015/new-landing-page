import Banner from './muzaffarpurcomponents/Banner';
import PackageIncludes from './muzaffarpurcomponents/PackageIncludes';
import Specialists from './muzaffarpurcomponents/Specialists';
import WhyChoose from './muzaffarpurcomponents/WhyChoose';
import OurServices from './muzaffarpurcomponents/OurServices';
import PatientSuccessStories from './muzaffarpurcomponents/PatientSuccessStories';
import OurCentres from './muzaffarpurcomponents/OurCentres';
import FAQs from './muzaffarpurcomponents/FAQs';
import Awards from './muzaffarpurcomponents/Awards';
import FindUsHere from './muzaffarpurcomponents/FindUsHere';
import type { Metadata } from 'next';
import Navbar from './muzaffarpurcomponents/Navbar';

export const metadata: Metadata = {
  title: 'Advance Fertility Clinic in Muzaffarpur - Seeds Of Innocens Fertility & IVF',
  description: 'Advance Fertility Clinic in Muzaffarpur - Seeds Of Innocens Fertility & IVF offers world-class fertility treatments and IVF services. Book your appointment today.',
};

export default function MuzaffarpurPage() {
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