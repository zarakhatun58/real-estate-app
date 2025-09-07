import React from "react";
import PropertyCard from "./PropertyCard";
import banner from "../assets/banner.png";
import "../styles/Feature.css";

const properties = [
  { title: "Spacious 3BHK", location: "New York, NY", rating: 4.5, price: 450000, image: banner },
  { title: "Modern Apartment", location: "New York, NY", rating: 4.5, price: 450000, image: banner },
  { title: "Cozy Family Home", location: "New York, NY", rating: 4.5, price: 450000, image: banner },
  { title: "Luxury Villa", location: "New York, NY", rating: 4.5, price: 450000, image: banner },
];

const BestProperties = () => {
  return (
    <div className="best-container">
      <h2>Best Properties Available For Sale</h2>
      <p>Browse our top-rated properties for sale, featuring premium listings tailored to your needs. Find your dream home today!</p>
      <div className="best-grid">
        {properties.map((prop, idx) => (
          <PropertyCard key={idx} {...prop} />
        ))}
      </div>
      <button className="view-more-btn">View More Properties</button>
    </div>
  );
};

export default BestProperties;
