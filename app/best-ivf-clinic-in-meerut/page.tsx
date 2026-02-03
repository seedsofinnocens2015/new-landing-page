import Banner from './meerutcomponents/Banner';
import PackageIncludes from './meerutcomponents/PackageIncludes';
import Specialists from './meerutcomponents/Specialists';
import WhyChoose from './meerutcomponents/WhyChoose';
import OurServices from './meerutcomponents/OurServices';
import PatientSuccessStories from './meerutcomponents/PatientSuccessStories';
import OurCentres from './meerutcomponents/OurCentres';
import FAQs from './meerutcomponents/FAQs';
import Awards from './meerutcomponents/Awards';
import FindUsHere from './meerutcomponents/FindUsHere';
import type { Metadata } from 'next';
import Navbar from './meerutcomponents/Navbar';

export const metadata: Metadata = {
  title: 'Best IVF Clinic in Meerut - Seeds Of Innocens Fertility & IVF',
  description: 'Best IVF Clinic in Meerut - Seeds Of Innocens Fertility & IVF offers world-class fertility treatments and IVF services. Book your appointment today.',
};

export default function MeerutPage() {
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