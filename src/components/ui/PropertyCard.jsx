import React from 'react';
import '../../styles/PropertyCard.css';
import map from "../../assets/map-icon.png";
import ratingIcon from "../../assets/rating-icon.png";

const PropertyCard = ({ item }) => {
  const { image, name,buildingNumber,cardinalDirection,city, country, countryCode, rating, price,id } = item;
  return (
    <div className="pcard">
      <img src={image} alt={name} className="pcard__img" />
      <div className="property-part">
        <div className='location-part'>
          <div className='country-part'>
            <img src={map} alt="" className='map-icon' />
            <p className='location-text'>{country},<span> {countryCode}</span></p>
          </div>
          <div className='rating-part'><img src={ratingIcon} alt="" className='map-icon' /> <span className='rating-text'>{rating || "4.5"}/5</span></div>
        </div>
       <div className='pcard__body'>
        <p>{name} {buildingNumber} {cardinalDirection} {city}</p>
       </div>

        <div className="property-bottom">
          <button type="submit" className="buy-now-btn">Buy Now</button>
          <span className="price-t">    ${Number(price || 4500000).toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;