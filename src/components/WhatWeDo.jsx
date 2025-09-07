import React, { useState } from 'react';
import '../styles/WhatWeDo.css';
import lock from "../assets/lock.png";
import fill from "../assets/fill.png";
import performance from "../assets/sales-performance.png";
import chain from "../assets/chain.png";


const items = [
  { title: 'Buy & Sell Properties', desc: ' Find verified homes for sale or list your property with ease.', icon: performance },
  { title: 'Find Rental Homes', desc: 'Browse through thousands of rental options suited to your needs', icon: chain },
  { title: 'Smart AI Property Search', desc: 'Get instant recommendations based on your budget & location', icon: fill },
  { title: 'Safe & Secure Transactions', desc: 'Verified listings & secure deals to ensure a smooth experience.', icon: lock },
];

export default function WhatWeDo() {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <section className="wwd">
      <div className='upper-section'>
        <h2>What We Do?</h2>
        <p>Helping you find, buy, and rent the perfect property with ease.</p>
      </div>


      <div className="card-main-container">
        {items.map((item, idx) => (
          <div className="card" key={idx}  style={{
            backgroundColor: activeIndex === idx ? "#ffffff" : "#EEEEEE", 
            cursor: "pointer",
          }}
          onClick={() => setActiveIndex(idx)}>
            <div className="icon-circle"><img src={item.icon} alt="chain" className="icon" /></div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
