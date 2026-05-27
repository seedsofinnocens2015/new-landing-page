import Banner from './indiacomponents/Banner';
import PackageIncludes from './indiacomponents/PackageIncludes';
import Specialists from './indiacomponents/Specialists';
import WhyChoose from './indiacomponents/WhyChoose';
import OurServices from './indiacomponents/OurServices';
import PatientSuccessStories from './indiacomponents/PatientSuccessStories';
import OurCentres from './indiacomponents/OurCentres';
import FAQs from './indiacomponents/FAQs';
import Awards from './indiacomponents/Awards';
import FindUsHere from './indiacomponents/FindUsHere';
import type { Metadata } from 'next';
import Navbar from './indiacomponents/Navbar';

export const metadata: Metadata = {
  title: 'Best IVF Clinic in India - Seeds Of Innocens Fertility & IVF',
  description: 'Best IVF Clinic in India - Seeds Of Innocens Fertility & IVF offers world-class fertility treatments and IVF services. Book your appointment today.',
};

export default function MalviyaNagarPage() {
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