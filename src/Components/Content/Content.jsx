import React from "react";
import "./Content.css"



import Gallery from "../Gallery/Gallery"
import About from "../About/About";
import Games from "../Games/Games";

export default function Content() {

    return (
        <div className="content">
            <Gallery/>
            <About/>
            <Games/>
            <div className="footer">

            </div>
        </div>
    );
}