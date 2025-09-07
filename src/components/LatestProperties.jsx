import React from "react";
import house1 from "../assets/latest-house1.png";
import house2 from "../assets/latest-house2.png";
import "../styles/JourneyForm.css";
import budget from "../assets/budget.svg";
import trust from "../assets/trust.svg";
import prime from "../assets/prime.png";

const LatestProperties = () => {
  const pointsData = [
    {
      id: 1,
      icon: budget,
      title: "Budget Friendly",
      desc: "Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean tempus. Lectus quis pretium varius iaculis sed."
    },
    {
      id: 2,
      icon: trust,
      title: "Trusted By Thousand",
      desc: "Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean tempus. Lectus quis pretium varius iaculis sed."
    },
    {
      id: 3,
      icon: prime,
      title: "Prime Location",
      desc: "Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean tempus. Lectus quis pretium varius iaculis sed."
    }
  ];

  return (
    <div className="latest-container">
      <div className="latest-images">
        <img src={house1} alt="House 1" className="latest-img main-img" />
        <img src={house2} alt="House 2" className="latest-img overlay-img" />
      </div>

      <div className="latest-content">
        <h2>
          We Provide Latest Properties For Our Valuable Clients
        </h2>
        <div className="latest-points">
          {pointsData.map((point) => (
            <div className="point" key={point.id}>
              <span className="icon"><img src={point.icon} alt="budget" className="budget-icon" /></span>
              <div>
                <h4>{point.title}</h4>
                <p>{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestProperties;
