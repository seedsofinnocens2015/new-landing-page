import Banner from './delhicomponents/Banner';
import PackageIncludes from './delhicomponents/PackageIncludes';
import Specialists from './delhicomponents/Specialists';
import WhyChoose from './delhicomponents/WhyChoose';
import OurServices from './delhicomponents/OurServices';
import PatientSuccessStories from './delhicomponents/PatientSuccessStories';
import OurCentres from './delhicomponents/OurCentres';
import FAQs from './delhicomponents/FAQs';
import Awards from './delhicomponents/Awards';
import FindUsHere from './delhicomponents/FindUsHere';
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