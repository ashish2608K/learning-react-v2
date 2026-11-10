import Trek from "../TrekCard.jsx";
import Hero from "../components/Banner.jsx";
import SeasonsTreks from "../components/SeasonsTreks.jsx";
import PlanTrek from "../components/PlanTrek.jsx";

function Home() {
  return (
    <>
      <Hero />
      <Trek />
      <SeasonsTreks />
      <PlanTrek />
    </>
  );
}

export default Home;