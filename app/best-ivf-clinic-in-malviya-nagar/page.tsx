import Banner from './malviyanagarcomponents/Banner';
import PackageIncludes from './malviyanagarcomponents/PackageIncludes';
import Specialists from './malviyanagarcomponents/Specialists';
import WhyChoose from './malviyanagarcomponents/WhyChoose';
import OurServices from './malviyanagarcomponents/OurServices';
import PatientSuccessStories from './malviyanagarcomponents/PatientSuccessStories';
import OurCentres from './malviyanagarcomponents/OurCentres';
import FAQs from './malviyanagarcomponents/FAQs';
import Awards from './malviyanagarcomponents/Awards';
import FindUsHere from './malviyanagarcomponents/FindUsHere';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best IVF Clinic in Malviya Nagar - Seeds Of Innocens Fertility & IVF',
  description: 'Best IVF Clinic in Malviya Nagar - Seeds Of Innocens Fertility & IVF offers world-class fertility treatments and IVF services. Book your appointment today.',
};

export default function MalviyaNagarPage() {
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