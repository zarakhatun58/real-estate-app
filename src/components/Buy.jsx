import React, { useEffect, useState } from 'react';
import rightIcon from "../assets/right-arrow.png";
import '../styles/Buy.css';
import feaure1 from "../assets/feature1.png";
import feaure2 from "../assets/feature2.png";
import riban from "../assets/riban.png";
import map from "../assets/location-blue.png";
import Hero from './ui/Hero';
import { fetchProperties } from '../services/api';


const Buy = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
 const [filters, setFilters] = useState({ purpose: "", category: "", country: "", city: "" });

    useEffect(() => {
        fetchProperties()
            .then(data => setProperties(data.slice(0, 2)))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);
     const filteredProperties = properties.filter(p => {
    return (
      (!filters.category || p.name === filters.category) &&
      (!filters.country || p.country === filters.country) &&
      (!filters.city || p.city === filters.city)
    );
  });
    return (
        <div className='buy-container'>
            <div>
                <Hero onSearch={setFilters} />
            </div>
            <div className='feature-main'>
                <div className='header'>
                    <p className='feature-text'>Featured Property</p>
                    <div className='project-btn'><p className='porject-text'>See {filteredProperties.length} New Projects</p> <img src={rightIcon} alt="" className='arrow' /></div>
                </div>
                {loading && <p>Loading...</p>}
                {error && <p className="error">{error}</p>}

                <div className='property-main'>
                    {filteredProperties.map((item) => (
                        <div className='property-secondary' key={item.id}>
                            <div>
                                <img
                                    src={item.image || feaure1 }
                                    alt={item.name}
                                    className='property-img'
                                />
                            </div>

                            <div className='address-card'>
                                <div className='map-part'>
                                    <img src={map} alt="location" className='icons' />
                                    <p className='greenvila-text'>
                                        {item.city}, {item.country}
                                    </p>
                                    <img src={riban} alt="riban" className='icons' />
                                </div>

                                <div className='desc'>
                                    <p>
                                        Spacious {item.buildingNumber || "N/A"} BHK apartment in {item.state}.
                                    </p>
                                </div>

                                <div><hr /></div>

                                <div className='know-more-part'>
                                    <div>
                                        <p>${(item.price || 450000).toLocaleString()}</p>
                                    </div>
                                    <div>
                                        <button className='know-more-btn'>Know More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Buy;