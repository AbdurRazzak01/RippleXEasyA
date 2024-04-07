import React from 'react';
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importing the necessary icons
import "./Main.css"; // Importing the CSS file

const Footer = () => {
  return (
    <div className="footer"> {/* Applying the footer class */}
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <p>Protein House, London</p>
          </div>
          <div className="phone">
            <p>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              07438282689
            </p>
          </div>
          <div className="email">
            <p>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              purpleX.com
            </p>
          </div>
        </div>

        <div className="right">
          <h4>About</h4>
          <p>
            Rapple X is a platform service that promotes business that sells local and seasonal produce based in the UK.
          </p>
          <div className="socialmedia">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaInstagram
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
