import Banner from './components/Banner';
import PackageIncludes from './components/PackageIncludes';
import Specialists from './components/Specialists';
import WhyChoose from './components/WhyChoose';
import OurServices from './components/OurServices';
import PatientSuccessStories from './components/PatientSuccessStories';
import OurCentres from './components/OurCentres';
import FAQs from './components/FAQs';
import Awards from './components/Awards';
import FindUsHere from './components/FindUsHere';

export default function Home() {
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
