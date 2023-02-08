import React from "react";
import { Link } from 'react-scroll'
import "./Content.css"
import NightLightImg from "../../Images/Main/NightLight.jpg"
import Coridor from "../../Images/Main/Coridor.jpg"
import Forest from "../../Images/Main/Forest.jpg"
import Coin from "../../Images/Main/Coin.jpg"
import Lego from "../../Images/Main/Lego.jpg"
import Landscape from "../../Images/Main/Landscape.jpg"
import Collage from "../../Images/Main/Collage.jpg"

export default function Content() {

    return (
        <div className="content">
            <div id="Gallery" className="gallery-box">
                <div className="content-gallery">
                    <div className="gallery-card">
                        <img className="card-image" src={NightLightImg} alt="Help" />
                        <div className="card-content">
                            Без авторских отчислений — все доходы принадлежат вам
                        </div>
                    </div>
                    <div className="gallery-card">
                        <img className="card-image" src={Coridor} alt="Help" />
                        <div className="card-content">
                            Более 20 платформ, поддерживающих Unity-контент
                        </div>
                    </div>
                    <div className="gallery-card">
                        <img className="card-image" src={Forest} alt="Help" />
                        <div className="card-content">
                            Доверие 1,5 млн активных разработчиков ежемесячно
                        </div>
                    </div>
                </div>
            </div>
            <div id="About" className="about-box">
                <div className="about-title">
                    Unity for all industries
                </div>
                <div className="about-cards-box">
                    <div className="about-cards-collection">
                        <div className="about-card">
                            <img className="about-card-image" src={Lego} alt="Help" />
                            <div className="about-card-content">
                                Content
                            </div>
                        </div>
                        <div className="about-card">
                            <img className="about-card-image" src={Coin} alt="Help" />
                            <div className="about-card-content">
                                Content
                            </div>
                        </div>
                        <div className="about-card">
                            <img className="about-card-image" src={Landscape} alt="Help" />
                            <div className="about-card-content">
                                <div>
                                Spectacular atmosphere
                                </div>
                                <div>
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
                                Content
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
            <div className="footer">

            </div>
        </div>
    );
}