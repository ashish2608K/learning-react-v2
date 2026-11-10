import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AllTreks from "./pages/AllTreks";
import TrekDetails from "./pages/TrekDetails";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/treks" element={<AllTreks />} />
        <Route path="/treks/:id" element={<TrekDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;