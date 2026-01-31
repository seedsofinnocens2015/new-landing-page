import Banner from './kasaragodcomponents/Banner';
import PackageIncludes from './kasaragodcomponents/PackageIncludes';
import Specialists from './kasaragodcomponents/Specialists';
import WhyChoose from './kasaragodcomponents/WhyChoose';
import OurServices from './kasaragodcomponents/OurServices';
import PatientSuccessStories from './kasaragodcomponents/PatientSuccessStories';
import OurCentres from './kasaragodcomponents/OurCentres';
import FAQs from './kasaragodcomponents/FAQs';
import Awards from './kasaragodcomponents/Awards';
import FindUsHere from './kasaragodcomponents/FindUsHere';
import type { Metadata } from 'next';
import Navbar from './kasaragodcomponents/Navbar';

export const metadata: Metadata = {
  title: 'Advance Fertility Clinic in Kasaragod - Seeds Of Innocens Fertility & IVF',
  description: 'Advance Fertility Clinic in Kasaragod - Seeds Of Innocens Fertility & IVF offers world-class fertility treatments and IVF services. Book your appointment today.',
};

export default function KasaragodPage() {
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