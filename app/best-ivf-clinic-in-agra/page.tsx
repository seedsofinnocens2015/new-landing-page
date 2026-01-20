import Banner from './agracomponents/Banner';
import PackageIncludes from './agracomponents/PackageIncludes';
import Specialists from './agracomponents/Specialists';
import WhyChoose from './agracomponents/WhyChoose';
import OurServices from './agracomponents/OurServices';
import PatientSuccessStories from './agracomponents/PatientSuccessStories';
import OurCentres from './agracomponents/OurCentres';
import FAQs from './agracomponents/FAQs';
import Awards from './agracomponents/Awards';
import FindUsHere from './agracomponents/FindUsHere';
import type { Metadata } from 'next';
import Navbar from './agracomponents/Navbar';

export const metadata: Metadata = {
  title: 'Best IVF Clinic in Agra - Seeds Of Innocens Fertility & IVF',
  description: 'Best IVF Clinic in Agra - Seeds Of Innocens Fertility & IVF offers world-class fertility treatments and IVF services. Book your appointment today.',
};

export default function AgraPage() {
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