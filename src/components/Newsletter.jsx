import React from 'react';
import '../styles/Newsletter.css';

export default function Newsletter(){
  return (
    <section className="newsletter">
      <div className="inner">
        <div>
          <h3>Get in Touch with Us</h3>
          <p>Subscribe to receive new property insights and deals.</p>
        </div>
        <form className="form" onSubmit={(e)=>e.preventDefault()}>
          <input required type="email" placeholder="Your email" />
          <button>Subscribe</button>
        </form>
      </div>
    </section>
  );
}
