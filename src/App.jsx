import TrekGrid from "./TrekGrid.jsx";
import Hero from "./components/Banner.jsx";
import Navbar from "./components/Navbar";
import SeasonsTreks from "./components/SeasonsTreks.jsx";
import PlanTrek from "./components/PlanTrek.jsx";
import { Routes, Route } from "react-router-dom";


function App() {
  return (

    <Routes>
       <Route path="/" element={<h1>Welcome to Himalayas</h1>}></Route>
       <Route path="/treks" element={<h1>Explore All Treks</h1>}></Route>
    </Routes>
  );
}

export default App;