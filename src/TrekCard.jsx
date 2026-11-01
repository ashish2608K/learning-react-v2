import { useState } from "react";
import heartImg from "./images/icons/heart.png";
import starImg from "./images/icons/star.png";
import trekImg from "./images/icons/trek.png";

function TrekCard({
  image,
  name,
  route,
  rating,
  level,
  distance }) {

  const [liked, setLiked] = useState(false);

  return (
    <div className="trek-card">
      <div className="img_wrap">
        <img className="trek_img" src={image} alt={name} />
        <button
          type="button"
          className={`like-btn ${liked ? "liked" : ""}`}
          onClick={() => setLiked(!liked)}>
          <img src={heartImg} alt="" />
        </button>
      </div>

      <div className="content-area">
        <h2 className="heading">{name}</h2>
        <div className="cnt-wrap">
          <p>{route}</p>
        </div>
        <div className="pills">
          <span className="pill">
            <img src={starImg} alt="" /> {rating}
          </span>
          <span className="pill">
            <img src={trekImg} alt="" /> {level} {distance} km
          </span>
        </div>
      </div>
    </div>
  );
}

export default TrekCard;