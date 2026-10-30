import TrekCard from "./TrekCard";
import { treks } from "./card";

function TrekGrid() {
  return (
    <div className="like_btn_card">
      <div className="custom-container">
        <div className="row gy-4">
          {treks.map((trek) => (
            <div key={trek.id} className="col-12 col-md-6 col-xl-4" >
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
    </div>
  );
}

export default TrekGrid;