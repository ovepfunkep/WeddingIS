import Banner from './components/Banner';
import PearlDivider from './components/PearlDivider';
import Invitation from './components/Invitation';
import History from './components/History';
import Location from './components/Location';
import Timing from './components/Timing';
import DressCode from './components/DressCode';
import ImportantInfo from './components/ImportantInfo';
import Form from './components/Form';
import Timer from './components/Timer';
import SectionReveal from './components/SectionReveal';

export default function App() {
  return (
    <main className="min-h-screen bg-[#f6f4f1] overflow-x-clip selection:bg-[#768c5e] selection:text-white">
      <SectionReveal className="w-full">
        <Banner />
      </SectionReveal>
      <SectionReveal className="w-full">
        <PearlDivider />
      </SectionReveal>
      <SectionReveal className="w-full">
        <Invitation />
      </SectionReveal>
      <SectionReveal className="w-full">
        <History />
      </SectionReveal>
      <SectionReveal className="w-full">
        <Location />
      </SectionReveal>
      <SectionReveal className="w-full">
        <Timing />
      </SectionReveal>
      <SectionReveal className="w-full">
        <DressCode />
      </SectionReveal>
      <SectionReveal className="w-full">
        <ImportantInfo />
      </SectionReveal>
      <SectionReveal className="w-full">
        <Form />
      </SectionReveal>
      <SectionReveal className="w-full">
        <Timer />
      </SectionReveal>
    </main>
  );
}
