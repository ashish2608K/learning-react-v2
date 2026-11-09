import TrekGrid from "./TrekGrid.jsx";
import Hero from "./components/Banner.jsx";
import Navbar from "./components/Navbar";
import SeasonsTreks from "./components/SeasonsTreks.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TrekGrid />
      <SeasonsTreks />
    </div>
  );
}

export default App;