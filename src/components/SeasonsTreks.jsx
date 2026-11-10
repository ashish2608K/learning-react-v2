import { useState, useEffect } from "react";

const API = "http://localhost:5000";

export default function SeasonsTreks() {
  // 👉 YOUR LOGIC: replace this array with state filled by your GET (starts as [])
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [season, setseasonData] = useState(null)

  useEffect(() => {
    async function seasons() {
      try {
        const res = await fetch(`${API}/api/seasons`);
        if (!res.ok) throw new error(" SERVER ERROR" + res.status);
        const data = await res.json();
        setseasonData(data);
      }
      catch (err) {
        console.error(err.message);
      }
    }
    seasons();
  }, []);

  // const seasons = [
  //   {
  //     id: 1,
  //     name: "Winter",
  //     months: "Dec – Mar",
  //     tagline: "Snow trails. Frozen lakes.",
  //     description: "Walk through deep snow, frozen meadows and quiet pine forests on summit treks like Kedarkantha.",
  //     image: "/images/seasons/winter.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "Summer",
  //     months: "May – Jun",
  //     tagline: "Green meadows. High passes.",
  //     description: "Clear skies and open trails make this the best time for high passes like Hampta and Rupin.",
  //     image: "/images/seasons/summer.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "Monsoon",
  //     months: "Jul – Aug",
  //     tagline: "Flower valleys. Misty ridges.",
  //     description: "The rains turn the Himalayas green and fill valleys with flowers, like the Valley of Flowers.",
  //     image: "/images/seasons/monsoon.jpg",
  //   },
  // ];

  const [index, setIndex] = useState(0);        // which season is selected
  const active = seasons[index];

  const prev = () => setIndex((index - 1 + seasons.length) % seasons.length);
  const next = () => setIndex((index + 1) % seasons.length);

  return (
    <section className="relative min-h-[680px] overflow-hidden bg-black text-white lg:h-screen">

      {/* BACKGROUND: one image per season, stacked. Only the active one is visible. */}
      {seasons.map((season, i) => (
        <img
          key={season.id}
          src={API + season.image}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"
            }`}
        />
      ))}

      {/* dark layer so the text is readable */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.7),rgba(0,0,0,0.1)_70%)]" />

      <div className="custom-container relative flex h-full min-h-[680px] flex-col justify-end gap-[40px] pb-[60px] pt-[120px] lg:flex-row lg:items-end lg:justify-between">

        {/* LEFT: text of the active season */}
        <div className="max-w-[520px]">
          <div className="text-[13px] font-medium uppercase tracking-[0.2em] text-white/80">
            Choose your season · {active.months}
          </div>
          <h2 className="mt-[12px] text-[clamp(48px,7vw,96px)] font-bold uppercase leading-[0.95]">
            {active.name}
          </h2>
          <p className="mt-[16px] text-[18px] font-medium text-white">{active.tagline}</p>
          <p className="mt-[10px] text-[15px] leading-[1.6] text-white/80">{active.description}</p>

          <a
            href="#treks"
            className="mt-[24px] inline-flex h-[48px] items-center gap-[10px] rounded-full border border-white/80 px-[28px] text-[14px] font-semibold transition-colors duration-200 hover:bg-white hover:text-black"
          >
            Explore {active.name} treks <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* RIGHT: the three cards */}
        <div className="flex gap-[16px]">
          {seasons.map((season, i) => (
            <button
              key={season.id}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show ${season.name}`}
              className={`relative h-[260px] w-[150px] shrink-0 overflow-hidden rounded-[18px] text-left transition-all duration-300 sm:w-[180px] lg:h-[320px] lg:w-[200px] ${i === index
                ? "-translate-y-[12px] ring-2 ring-white"
                : "opacity-80 hover:opacity-100"
                }`}
            >
              <img
                src={API + season.image}
                alt={season.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.8),transparent_60%)]" />
              <div className="absolute inset-x-[14px] bottom-[14px]">
                <div className="text-[10px] uppercase tracking-[0.15em] text-white/70">
                  {season.months}
                </div>
                <div className="mt-[2px] text-[18px] font-semibold uppercase leading-[1.1]">
                  {season.name}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* BOTTOM CONTROLS: arrows + counter */}
      <div className="absolute bottom-[20px] left-0 right-0 hidden lg:block">
        <div className="custom-container flex items-center gap-[16px]">
          <button type="button" onClick={prev} aria-label="Previous season"
            className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-white/80 transition-colors hover:bg-white hover:text-black">
            ←
          </button>
          <button type="button" onClick={next} aria-label="Next season"
            className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-white/80 transition-colors hover:bg-white hover:text-black">
            →
          </button>
          <div className="ml-auto text-[32px] font-light">
            0{index + 1} <span className="text-[16px] text-white/60">/ 0{seasons.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
}