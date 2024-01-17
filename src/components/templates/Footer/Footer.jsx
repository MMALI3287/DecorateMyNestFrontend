import React from "react";
import "./footer.style.scss";
import twitter from "./images/twitter.png";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <p className="footer-description">
            Minimal is synonymous with sensible design thinking and authenticity
            in heritage and culture. Our mission is to create a space that is
            both connected and fresh, achieving balance and harmony through
            meaningful simplicity.
          </p>
          <div className="footer-social-icons">
            <a href="https://facebook.com" target="_blank" rel="no">
              <img src="facebook.png" alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="no">
              <img src="twitter.png" alt="Twitter" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="no">
              <img src="youtube.png" alt="YouTube" />
            </a>
          </div>
          <div className="footer-contact-items">
            <div className="footer-contact-item">
              <img src="phone.png" alt="Phone" />
              <p>+123 456 7890</p>
            </div>
            <div className="footer-contact-item">
              <img src="email.png" alt="Email" />
              <p>info@example.com</p>
            </div>
            <div className="footer-contact-item">
              <img src="location.png" alt="Location" />
              <p>123 Main St, Any, CA</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
