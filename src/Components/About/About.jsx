import React from "react";

import "./About.css";

import Coin from "../../Images/About/Coin.jpg";
import Lego from "../../Images/About/Lego.jpg";
import Landscape from "../../Images/About/Landscape.jpg";
import Collage from "../../Images/About/Collage.jpg";

export default function About() {
  return (
    <div id="About" className="about-box">
      <div className="about-title">Unity for all industries</div>
      <div className="about-cards-box">
        <div className="about-cards-collection">
          <div className="about-card">
            <img className="about-card-image" src={Lego} alt="Help" />
            <div className="about-card-content">Content</div>
          </div>
          <div className="about-card">
            <img className="about-card-image" src={Coin} alt="Help" />
            <div className="about-card-content">Content</div>
          </div>
          <div className="about-card">
            <img className="about-card-image" src={Landscape} alt="Help" />
            <div className="about-card-content">
              <div className="about-card-content-header">Automotive</div>
              <div>
                Take your design to the next level with the highest quality
                immersive content.
              </div>
            </div>
          </div>
          <div className="about-card">
            <img className="about-card-image" src={Collage} alt="Help" />
            <div className="about-card-content">Content</div>
          </div>
        </div>
      </div>
    </div>
  );
}
