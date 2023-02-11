import React from "react";

import "./About.css"

import Coin from "../../Images/About/Coin.jpg"
import Lego from "../../Images/About/Lego.jpg"
import Landscape from "../../Images/About/Landscape.jpg"
import Collage from "../../Images/About/Collage.jpg"

export default function About() {
    return (
        <div id="About" className="about-box">
            <div className="about-title">
                Unity for all industries
            </div>
            <div className="about-cards-box">
                <div className="about-cards-collection">
                    <div className="about-card">
                        <img className="about-card-image" src={Lego} alt="Help" />
                        <div className="about-card-content">
                            <div className="about-card-content-title"></div>
                            Content
                        </div>
                    </div>
                    <div className="about-card">
                        <img className="about-card-image" src={Coin} alt="Help" />
                        <div className="about-card-content">
                            <div className="about-card-content-title">
                                Advanced cinematic effects
                            </div>
                            <div className="about-card-content-text">
                                Produce a cinematic look that mimics the artifacts
                                of real-world lenses and films. Post processing
                                effects like Depth of Field, Vignette, Motion Blur,
                                Bloom, and Film Grain simulate physical camera
                                parameters. You can also access professional yet
                                user-friendly color grading tools.
                            </div>
                        </div>
                    </div>
                    <div className="about-card">
                        <img className="about-card-image" src={Landscape} alt="Help" />
                        <div className="about-card-content">
                            <div className="about-card-content-title">
                                Spectacular atmosphere
                            </div>
                            <div className="about-card-content-text">
                                Create beautiful skies and dramatic clouds.
                                Unity supports multiple types of sky,
                                from the simpler static gradient and
                                HDRI skies to physically based procedural
                                skies that can automatically simulate
                                different times of day in real-time.
                            </div>
                        </div>

                    </div>
                    <div className="about-card">
                        <img className="about-card-image" src={Collage} alt="Help" />
                        <div className="about-card-content">
                            <div className="about-card-content-title"></div>
                            Content
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}