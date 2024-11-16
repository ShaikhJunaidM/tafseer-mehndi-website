import { NavLink } from "react-router-dom";

export const Hero = () => {
  return (
    <>
      <div className="container hero-container">
        <div className="hero-background"></div>
        <div className="hero-content">
          <div className="name">Tafseer Mehndi Artist</div>
          <div className="quote">
            Designs that make you , <span>fall in love .</span>
          </div>
          <NavLink to="/service" className="btn">
            Start Adorning<i className="fa-solid fa-arrow-right"></i>
          </NavLink>
        </div>
      </div>
    </>
  );
};
