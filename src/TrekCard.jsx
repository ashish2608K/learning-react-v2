import { useState } from "react";

function TrekBtn() {

  const [liked, setLiked] = useState();

  return (
    <div className="like_btn_card">
      <div className="custom-container">
        <div className="row">
          <div className="col-12 col-xl-4">
            <div className="trek-card">
              <div className="img_wrap">
                <img className="trek_img" src="/images/card-img-two.jpg" alt="Trek" />

                <button type="button"  className={`like-btn ${liked ? "liked" : ""}`} onClick={() => setLiked(!liked)} >
                  <img src="/images/icons/heart.png" alt="" />
                </button>
              </div>

              <div className="content-area">
                <h2 className="heading">Annapurna</h2>
                <div className="cnt-wrap">
                  <p>Namche Bazaar → Lukla</p>
                </div>
                <div className="pills">
                  <span className="pill">
                    <img src="/images/icons/star.png" alt="" /> 4.8
                  </span>
                  <span className="pill">
                    <img src="/images/icons/trek.png" alt="" /> Hard 18.5 km
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrekBtn;