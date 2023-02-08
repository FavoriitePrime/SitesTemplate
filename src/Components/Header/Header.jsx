import React from "react";
import { Link } from 'react-scroll'
import Clock from "../Clocks/Clock";

import "./Header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="header-box">
                <div className="header-logo">
                    Unity.<font>3D</font>
                </div>
                <div className="header-navigation">
                    <Link to="Gallery" smooth={true}>Main</Link>
                    <Link to="About" smooth={true}>About Unity</Link>
                    <Link to="Games" smooth={true}>Games</Link>
                    <Clock/>
                </div>
            </div>
        </div>
    );
}