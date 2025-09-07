import React from "react";
import residence1 from "../assets/residence1.png";
import residence2 from "../assets/residence2.png";
import residence3 from "../assets/residence3.png";
import residence4 from "../assets/residence4.png";
import "../styles/Feature.css";

const FeaturedProperty = () => {
  return (
    <div className="featured-container">
        <div className="featured-side">
          <div>
            <img src={residence1} alt="Side" className="featured-side-img" />
          </div>
          <div>
            <img src={residence2} alt="Side" className="featured-side-img" />
          </div>
          <div className="residence-right">
            <img src={residence3} alt="Side" className="featured-side-img" />
            <img src={residence4} alt="Side" className="featured-side-img" />
          </div>

        </div>
    </div>
  );
};

export default FeaturedProperty;
