import Banner from './ghaziabadcomponents/Banner';
import PackageIncludes from './ghaziabadcomponents/PackageIncludes';
import Specialists from './ghaziabadcomponents/Specialists';
import WhyChoose from './ghaziabadcomponents/WhyChoose';
import OurServices from './ghaziabadcomponents/OurServices';
import PatientSuccessStories from './ghaziabadcomponents/PatientSuccessStories';
import OurCentres from './ghaziabadcomponents/OurCentres';
import FAQs from './ghaziabadcomponents/FAQs';
import Awards from './ghaziabadcomponents/Awards';
import FindUsHere from './ghaziabadcomponents/FindUsHere';
import type { Metadata } from 'next';
import Navbar from './ghaziabadcomponents/Navbar';

export const metadata: Metadata = {
  title: 'Best IVF Clinic in Ghaziabad - Seeds Of Innocens Fertility & IVF',
  description: 'Best IVF Clinic in Ghaziabad - Seeds Of Innocens Fertility & IVF offers world-class fertility treatments and IVF services. Book your appointment today.',
};

export default function GhaziabadPage() {
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