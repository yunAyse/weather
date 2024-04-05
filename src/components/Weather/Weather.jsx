import imgCloudy from "../../assets/icon/cloudy.svg";
import React from "react";
import "./Weather.css";

function Weather() {
  return (
    <>
      <span className="card-title">Lyon</span>
      <p>
        <img src={imgCloudy} />
      </p>
      <span className="temperature">15°</span>
      <div className="wind">Vent 1km/h (360°)</div>
    </>
  );
}

export default Weather;
