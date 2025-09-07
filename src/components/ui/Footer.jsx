import React from 'react';
import '../../styles/Footer.css';
import homeIcon from "../../assets/footer-home.png"

export default function Footer() {
  return (
    <footer className="footer">
      <div className='footer-up-part'>
        <h4 className='fo-head'>Get in Touch with Us</h4>
        <p className='fo-text'>Subscribe now for exclusive property insights and deals!</p>
        <form>
          <div className="footer-wrapper">
            <input type="email" placeholder="Enter your email" required />
              <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div className="wrap">
        <div className='footer-home'><img src={homeIcon} alt="hub" /><span> PropBot</span></div>
        <div className="links">
          <a href="#">For Sale</a>
          <a href="#">Rentals</a>
          <a href="#">New Projects</a>
          <a href="#">Property News</a>
          <a href="#">Terms</a>
        </div>
        <div>© {new Date().getFullYear()} PropBot. All rights reserved.</div>

      </div>
    </footer>
  );
}
