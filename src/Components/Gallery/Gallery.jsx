import React from "react";
import "./Gallery.css"
import NightLightImg from "../../Images/Gallery/NightLight.jpg"
import Coridor from "../../Images/Gallery/Coridor.jpg"
import Forest from "../../Images/Gallery/Forest.jpg"

export default function Gallery() {
    return (
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
    )
}
