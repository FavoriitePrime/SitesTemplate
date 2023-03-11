import React from "react";
import {useState} from 'react';
import { Link } from 'react-scroll'
import Clock from "../Clocks/Clock";

import "./Header.css"

export default function Header() {
    const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    setIsActive(current => !current);
  };
    return (
        <div className="header">
            <div className="header-box">
                <div className="header-logo">
                    Unity.<font>3D</font>
                </div>
                <Clock />
                <div className={ isActive? "header-navigation-active": "header-navigation"}>
                    <Link to="Gallery" smooth={true}>Main</Link>
                    <Link to="About" smooth={true}>About Unity</Link>
                    <Link to="Games" smooth={true}>Games</Link>
                </div>
                <button className="burger-btn" onClick={handleClick}>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                </button>
            </div>
        </div>
    );
}