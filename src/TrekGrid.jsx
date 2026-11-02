import { useEffect, useState } from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

import TrekCard from "./TrekCard";
import { treks } from "./card-data";

function TrekGrid() {
  useEffect(() => {
    const trekSwiper = new Swiper(".trek_card_swiper", {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      breakpoints: {
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 4 },
      },
    });

    return () => trekSwiper.destroy(true, true);
  }, []);

  const searchBar = [query , setQuery] = useState("")

  return (
    <section className="popular-treks_section">
      <div className="custom-container">

        {/* HEADER */}
        <div className="flex justify-between relative">
          <div className="flex flex-col w-[550px] my-[20px]">
            <div className="text-[17px] text-[#2F6B3A] font-medium">Popular treks</div>
            <h2 className="text-[48px] font-bold text-[#111111] ">
              Find your next
              <span className="text-[#2F6B3A]"> trail</span>
            </h2>
            <p className="font-normal text-[#5C5C5C] text-[20px] ">Hand-picked Himalayan routes, from easy meadow walks to
              high-altitude passes. Pick your difficulty, check the distance, and start
              planning.</p>
          </div>

          <form className="trek_search absolute top-[114px] right-0" role="search" onSubmit={(e) => e.preventDefault()}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
            <input
              type="search"
              placeholder="Search treks"
              aria-label="Search treks"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />
          </form>

        </div>

        {/* CARDS */}
        <div className="trek_card_swiper swiper">
          <div className="swiper-wrapper">
            {treks.map((trek) => (
              <div className="swiper-slide" key={trek.id}>
                <TrekCard
                  image={trek.image}
                  name={trek.name}
                  route={trek.route}
                  rating={trek.rating}
                  level={trek.level}
                  distance={trek.distance}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-[40px] flex justify-center items-center text-center">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-[10px] h-[52px] px-[32px] border-[1.5px] border-[#111111] rounded-full text-[16px] font-semibold text-[#111111] no-underline transition-colors duration-200 hover:bg-[#111111] hover:text-white"
          >
            View all treks <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default TrekGrid;