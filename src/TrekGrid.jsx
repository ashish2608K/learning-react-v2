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