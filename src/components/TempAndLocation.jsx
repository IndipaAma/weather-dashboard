import React from "react";
import SunnyLogo from "../assets/SunnySVG..svg";
import PinLocation from "../assets/Pin-locations.png";
import "./TempAndLocation.css";

const TempAndLocation = () => {
  return (
    <div className="current-temp-container">
      <img src={SunnyLogo} alt="Sunny Logo" />
      <h1 className="current-temp">22°c</h1>
      <h3>Sunny</h3>
      <div>
        <img src={PinLocation} alt="Pin Locations" />
        <h2>London, UK</h2>
      </div>
    </div>
  );
};

export default TempAndLocation;
