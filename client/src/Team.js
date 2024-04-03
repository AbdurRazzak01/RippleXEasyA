import React from "react";
import { Link } from "react-router-dom";
import bannerImg from ".";
import "./AboutUs.css";
import Container from "react-bootstrap/Container";
import logoftp from "./img/fin.jpg";
import avatar from "./img/fin.jpg";
import abdur from "./img/fin.jpg";
import rebecca from "./img/rebecca.png";
import abdurr from "./img/abdur.png";


const About = () => {
  return (
    <div className="row text-center">
    <div className="container">
      <div className="aboutUs">
       
      <div>
  <h2 style={{ marginBottom: "10px" }}>Our Mission</h2> {/* Add margin-bottom */}
  <p style={{ marginBottom: "20px" }}> {/* Add margin-bottom */}
    Our mission is to make the world more sustainable while having the farms
    and local shops connected with the local community. Our aim to have all
    the farms of London registered with us within July 2023 and cover the whole
    UK within December 2024. We plan to play a prominent role in the world of
    fresh produces from year 2025.
  </p>
  <hr />
</div>
        
        <h2>Our Team</h2>
        <div className="grid-container">
          <div classname="grid-item">
            <img className="banner-img" src={rebecca} alt="Bannerimg" />
            <h4 className="font-weight-bold dark-grey-text mt-4">Rebecca Gatto</h4>
            <h6 className="font-weight-bold blue-text my-3">
              CEO 
            </h6>
            <p className="font-weight-normal dark-grey-text"></p>
          </div>
          <div classname="grid-item">
            <div className="testimonial mb-5">
              <img className="banner-img" src={abdurr} alt="Bannerimg" />
              <h4 className="font-weight-bold dark-grey-text mt-4">Abdur Razzak</h4>
              <h6 className="font-weight-bold blue-text my-3">
                CTO
              </h6>
              <p className="font-weight-normal dark-grey-text"></p>
            </div>
          </div>
         
          <div classname="grid-item">
            <img className="banner-img" src={avatar} alt="Bannerimg" />
            <h4 className="font-weight-bold dark-grey-text mt-4">ZZZ</h4>
            <h6 className="font-weight-bold blue-text my-3">
              Product Owner: Sprint 1B
            </h6>
            <p className="font-weight-normal dark-grey-text"></p>
          </div>
          <div classname="grid-item">
            <div className="testimonial mb-5">
              <img className="banner-img" src={abdur} alt="Bannerimg" />
              <h4 className="font-weight-bold dark-grey-text mt-4">
                Abdur Razzak
              </h4>
              <h6 className="font-weight-bold blue-text my-3">
                Scrum Master: Sprint 2
              </h6>
              <p className="font-weight-normal dark-grey-text"></p>
            </div>
          </div>
         
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;