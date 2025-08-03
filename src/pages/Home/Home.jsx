import "./home.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import info_icon from "../../assets/info_icon.png";
import play_icon from "../../assets/play_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <div className="hero-img">
          <img src={hero_banner} alt="banner-img" className="banner-img" />
        </div>
        <div className="hero-caption">
          <img src={hero_title} alt="hero-title" className="caption-img" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            nobis sapiente debitis, nihil optio, in ut officia ab corporis,
            voluptates tenetur iure assumenda voluptas accusantium qui sequi.
            Placeat, dolorum necessitatibus.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" /> More Info
            </button>
          </div>
          <TitleCards title="Popular on Netflix" />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title="Blackbuster Movies" category="top_rated" />
        <TitleCards title="Only on Netflix" category="popular" />
        <TitleCards title="Upcoming" category="upcoming" />
        <TitleCards title="Top pics for you" category="now_playing" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
