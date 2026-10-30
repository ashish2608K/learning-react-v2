import BannerImg from "../images/banner/banner_img.jpg";

function Hero() {
    return (
        <section className="home_banner">
            <div className="banner_wrapper">
                <div className="img_wrap">
                    <img src={BannerImg} alt="Trekkers walking through a Himalayan valley" />
                </div>
                <div className="banner_inner">
                    <div className="content_area">
                        <h1 className="heading">
                            Your life begins beyond your comfort zone
                        </h1>
                        <div className="mont_btn">
                            <a href="#treks" className="banner_btn">
                                Choose your trek
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;