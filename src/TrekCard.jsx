import { useState } from "react";
import heartImg from "../himalayas_treks_db/public/images/icons/heart.png";
import starImg from "../himalayas_treks_db/public/images/icons/star.png";
import trekImg from "../himalayas_treks_db/public/images/icons/trek.png";

function TrekCard({ image, name, route, rating, level, distance }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="trek-card">
      <div className="card-inner">
        <img className="trek_img" src={image} alt={name} />
        <div className="blur-layer"></div>

        <button
          type="button"
          className={`like-btn ${liked ? "liked" : ""}`}
          onClick={() => setLiked(!liked)}
        >
          <img src={heartImg} alt="" />
        </button>

        <div className="content-area">
          <h2 className="heading">{name}</h2>
          <p className="route">{route}</p>

          <div className="meta">
            <span className="meta-item">
              <img src={starImg} alt="" /> {rating}
            </span>
            <span className="meta-item">
              <img src={trekImg} alt="" /> {level} {distance} km
            </span>
          </div>

          <button type="button" className="view-btn">View trek</button>
        </div>
      </div>
    </div>
  );
}

export default TrekCard;