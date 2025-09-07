
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../../styles/Hero.css";
import dreamHome from "../../assets/dream-home.png";
import bannerImg from "../../assets/banner.png";
import mapIcon from "../../assets/map-icon.png"
import searchIcon from "../../assets/search-arrow.png"
import { fetchProperties } from "../../services/api";

export default function Hero({ onSearch }) {
  const location = useLocation();
  const isHome = location.pathname === "/home" || location.pathname === "/";
  const isBuy = location.pathname === "/buy";
const [filters, setFilters] = useState({ purpose: "buy", category: "", country: "", city: "" });
 const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    fetchProperties()
      .then((data) => {
        const uniqueCities = [...new Set(data.map((p) => p.city))];
        const uniqueCountries = [...new Set(data.map((p) => p.country))];
        const uniqueCategories = [...new Set(data.map((p) => p.name))]; 

        setCities(uniqueCities);
        setCountries(uniqueCountries);
        setCategories(uniqueCategories);
      })
      .catch((e) => console.error("Error fetching properties", e));
  }, []);

 const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    onSearch(filters); 
  };
  return (
    <section className="hero" aria-label="Hero banner">
      <img
        src={isHome ? dreamHome : bannerImg}
        alt="hero banner"
        className="hero__img"
      />
      <div className="hero__overlay" />

      {/* Top Title & Subtitle */}
      <div className={`hero__content ${isBuy ? "hero__buy_content" : ""}`}>
        <h1 className="hero__title">
          {isHome ? "Find Your Dream Home in One Click!" : "Featured Properties For Sale"}
        </h1>
        <p className="hero__subtitle">
          {isHome
            ? "Discover, Buy, or Rent Verified Properties with Ease."
            : "Discover curated properties for sale across the city."}
        </p>
      </div>
      {!isBuy && (
        <div className="location__part">
          <div className="search-left">
            <span className="left-icon" aria-hidden="true"><img src={mapIcon} alt="pin" /></span>
            <input
              className="location-input"
              type="text"
              placeholder="Search Location..."
              aria-label="Search Location"
            />
            <div className="location-search-btn" aria-label="Search">
              <i className="fa-solid fa-magnifying-glass" />
            </div>
          </div>
          <div className="search-right">
            <button
              className="list-property-btn"
              onClick={() => (window.location.href = "/list-property")}
              aria-label="List your property"
            >
              List Your Property
            </button>
          </div>
        </div>
      )}
      <div className="hero__search-card" role="search" aria-label="Property search">
        <div className="search-middle">
          <div className="filter">
            <i className="fa-solid fa-house filter-icon" />
            <select name="purpose" onChange={handleChange}>
              <option>For Buying</option>
              <option>For Rent</option>
            </select>
          </div>

          <div className="filter">
            <i className="fa-solid fa-building filter-icon" />
            <select name="category" onChange={handleChange}>
               {categories.map((c, idx) => (
                  <option key={idx} value={c}>
                    {c}
                  </option>
                ))}
            </select>
          </div>

          <div className="filter">
            <i className="fa-solid fa-globe filter-icon" />
             <select name="country" onChange={handleChange}>
                {countries.map((c, idx) => (
                  <option key={idx} value={c}>
                    {c}
                  </option>
                ))}
              </select>
          </div>

          <button className="find-btn" aria-label="Find Property" onClick={handleSearch}>
            Find Property
          </button>
        </div>



      </div>
    </section>
  );
}
