import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <h1>TravelHub</h1>
          <p>Your Ultimate Travel Companion</p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/tours">Tours</a></li>
            <li><a href="/destinations">Destinations</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: contact@travelhub.com</p>
          <p>Phone: +123-456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TravelHub. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;