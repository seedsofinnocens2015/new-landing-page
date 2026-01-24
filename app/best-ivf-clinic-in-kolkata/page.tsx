import Banner from './kolkatacomponents/Banner';
import PackageIncludes from './kolkatacomponents/PackageIncludes';
import Specialists from './kolkatacomponents/Specialists';
import WhyChoose from './kolkatacomponents/WhyChoose';
import OurServices from './kolkatacomponents/OurServices';
import PatientSuccessStories from './kolkatacomponents/PatientSuccessStories';
import OurCentres from './kolkatacomponents/OurCentres';
import FAQs from './kolkatacomponents/FAQs';
import Awards from './kolkatacomponents/Awards';
import FindUsHere from './kolkatacomponents/FindUsHere';
import type { Metadata } from 'next';
import Navbar from './kolkatacomponents/Navbar';

export const metadata: Metadata = {
  title: 'Best IVF Clinic in Kolkata - Seeds Of Innocens Fertility & IVF',
  description: 'Best IVF Clinic in Kolkata - Seeds Of Innocens Fertility & IVF offers world-class fertility treatments and IVF services. Book your appointment today.',
};

export default function KolkataPage() {
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