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

export default function App() {
  return (
    <main className="min-h-screen bg-[#f6f4f1] overflow-x-hidden selection:bg-[#768c5e] selection:text-white">
      <Banner />
      <PearlDivider />
      <Invitation />
      <History />
      <Location />
      <Timing />
      <DressCode />
      <ImportantInfo />
      <Form />
      <Timer />
    </main>
  );
}
