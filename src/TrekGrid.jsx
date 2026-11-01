import { useEffect } from "react";
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

  return (
    <div className="like_btn_card">
      <div className="custom-container">
        {/* HEADER */}
        <div className="flex flex-col w-[550px] my-[20px]">
          <div className="!text-[17px] text-[#2F6B3A] font-medium">Popular treks</div>
          <h2 className="!text-[48px] !font-bold !text-[#111111] ">
            Find your next
            <span className="text-[#2F6B3A]"> trail</span>
          </h2>
          <p className="font-normal text-[#5C5C5C] !text-[21px] ">Hand-picked Himalayan routes, from easy meadow walks to
            high-altitude passes. Pick your difficulty, check the distance, and start
            planning.</p>
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

        <div className="trek_controls">
          <button type="button" className="trek_prev">Prev</button>
          <div className="trek_pagination"></div>
          <button type="button" className="trek_next">Next</button>
        </div>
      </div>
    </div>
  );
}

export default TrekGrid;