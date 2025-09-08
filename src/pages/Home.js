import React, { useEffect, useState, useMemo } from 'react';
import Hero from '../components/ui/Hero';
import WhatWeDo from '../components/WhatWeDo';
import PropertyCard from '../components/ui/PropertyCard';
import { fetchProperties } from '../services/api';
import '../styles/Home.css';
import rightIcon from "../assets/right-arrow.png";
import FeaturedProperty from '../components/FeaturedProperty';
import PropertyHeader from '../components/ui/PropertyHeader';
import Form from '../components/ui/Form';
import LatestProperties from '../components/LatestProperties';


export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    fetchProperties()
      .then(setData).catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, []);
  const featured = useMemo(() => data.slice(0, 4), [data]);
  const sale = useMemo(() => data.filter(d => d.listingType === 'sale').slice(0, 4), [data]);
  const rent = useMemo(() => data.filter(d => d.listingType === 'rent').slice(0, 6), [data]);

  return (
    <div className="page-wrap">
      <div className="container">
        <Hero />
        <WhatWeDo />
        <section className="section">
          <div className='header'>
            <p className='feature-text'>Featured Property</p>
            <div className='project-btn'><p className='porject-text'>See 268 New Projects</p> <img src={rightIcon} alt="" className='arrow' /></div>
          </div>
          <FeaturedProperty />
          <PropertyHeader
            title="Best Properties Available For Sale"
            desc="Browse our top-rated properties for sale, featuring premium listings tailored to your needs. Find your dream home today!"
            buttonText="View More Properties"
            onButtonClick={() => console.log("View More Properties")}
          />
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="error">{error}</p>
          ) : (
            <div className="p-card-grid">
              {featured.map((i) => (
                <PropertyCard key={i.id} item={i} />
              ))}
            </div>
          )}
        </section>

        <section className="section">
          <PropertyHeader
            title="Find The Perfect Rental Home"
            desc="Browse our top-rated properties for rent, featuring premium listings tailored to your needs. Find your dream home today!"
            buttonText="View All Rentals"
            onButtonClick={() => console.log("View All Rentals")}
          />
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="error">{error}</p>
          ) : (
            <div className="p-card-grid">
              {featured.map((i) => (
                <PropertyCard key={i.id} item={i} isMonthly />
              ))}
            </div>
          )}
        </section>

        <section className="section">
          <PropertyHeader
            title="Start Your Journey Today!"
            desc="Create a profile in seconds and find your ideal home."
          />
          <Form />
        </section>
        <section>
          <LatestProperties />
        </section>
      </div>
    </div>
  );
}
