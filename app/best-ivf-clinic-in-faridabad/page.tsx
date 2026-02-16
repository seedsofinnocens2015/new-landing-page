import Banner from './faridabadcomponents/Banner';
import PackageIncludes from './faridabadcomponents/PackageIncludes';
import Specialists from './faridabadcomponents/Specialists';
import WhyChoose from './faridabadcomponents/WhyChoose';
import OurServices from './faridabadcomponents/OurServices';
import PatientSuccessStories from './faridabadcomponents/PatientSuccessStories';
import OurCentres from './faridabadcomponents/OurCentres';
import FAQs from './faridabadcomponents/FAQs';
import Awards from './faridabadcomponents/Awards';
import FindUsHere from './faridabadcomponents/FindUsHere';
import type { Metadata } from 'next';
import Navbar from './faridabadcomponents/Navbar';

export const metadata: Metadata = {
  title: 'Best IVF Clinic in Faridabad - Seeds Of Innocens Fertility & IVF',
  description: 'Best IVF Clinic in Faridabad - Seeds Of Innocens Fertility & IVF offers world-class fertility treatments and IVF services. Book your appointment today.',
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