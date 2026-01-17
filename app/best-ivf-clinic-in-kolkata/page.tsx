import Banner from '../components/Banner';
import PackageIncludes from '../components/PackageIncludes';
import Specialists from '../components/Specialists';
import WhyChoose from '../components/WhyChoose';
import OurServices from '../components/OurServices';
import PatientSuccessStories from '../components/PatientSuccessStories';
import OurCentres from '../components/OurCentres';
import FAQs from '../components/FAQs';
import Awards from '../components/Awards';
import FindUsHere from '../components/FindUsHere';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best IVF Clinic in Kolkata - Seeds Of Innocens Fertility & IVF',
  description: 'Best IVF Clinic in Kolkata - Seeds Of Innocens Fertility & IVF offers world-class fertility treatments and IVF services. Book your appointment today.',
};

export default function KolkataPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="w-full">
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