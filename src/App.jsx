import TrekGrid from "./TrekGrid.jsx";
import Hero from "./components/Banner.jsx";
import Navbar from "./components/Navbar";
import SeasonsTreks from "./components/SeasonsTreks.jsx";
import PlanTrek from "./components/PlanTrek.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TrekGrid />
      <SeasonsTreks />
      <PlanTrek />
    </div>
  );
}

export default App;