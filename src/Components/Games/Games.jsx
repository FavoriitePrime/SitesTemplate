import React from "react";
import NightLightImg from "../../Images/Games/NightLight.jpg"
import { Link } from 'react-scroll'
import "./Games.css"

export default function Games(){
    return(
        <div id="Games" className="games-box">
        <div className="games-stickyList-box">
            <div className="games-stickyList">
                <div className="games-stickyList-title">
                    Games made with Unity
                </div>
                <ul>
                    <li>
                        <Link to="Zenith" smooth={true}>
                            Zenith:The Last City
                        </Link>
                    </li>
                    <li>
                        <Link to="V Rising" smooth={true}>
                            V Rising
                        </Link>
                    </li>
                    <li>
                        <Link to="Outer Wilds" smooth={true}>
                            Outer Wilds
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="games-contentBox">
                <div id="Zenith" className="games-contentBox-card">
                    <img className="games-contentBox-card-image" src={NightLightImg} alt="Help" />
                    <div className="games-contentBox-card-title">
                        Zenith: The Last City
                    </div>
                    <div>
                        Студия Ramen VR поставила перед
                        собой неординарную цель: создать
                        полноценную MMO в VR. Узнайте, какие
                        инструменты помогли этой инди-студии
                        превратить Zenith: The Last City в реальность.
                    </div>
                </div>
                <div id="V Rising" className="games-contentBox-card">
                    <img className="games-contentBox-card-image" src={NightLightImg} alt="Help" />
                    <div className="games-contentBox-card-title">
                        V Rising
                    </div>
                    <div>
                        Созданная студией Stunlock Studios
                        многопользовательская игра на выживание
                        в мире вампиров стала хитом: за первый
                        месяц после выпуска ее установили более
                        чем 2 миллиона игроков. Узнайте, как
                        технология DOTS помогла воплотить в жизнь
                        эпический и динамичный открытый игровой мир.
                    </div>
                </div>
                <div id="Outer Wilds" className="games-contentBox-card">
                    <img className="games-contentBox-card-image" src={NightLightImg} alt="Help" />
                    <div className="games-contentBox-card-title">
                        Outer Wilds
                    </div>
                    <div>
                        Приключенческая игра-головоломка от Mobius
                        Digital получила признание за зацикленный
                        сюжет и красивые космические визуальные
                        эффекты. В этом видео арт-директор студии
                        подробно рассматривает шейдеры океана в
                        Giant's Deep.
                    </div>
                </div>
            </div>
        </div>

    </div>
    )
}