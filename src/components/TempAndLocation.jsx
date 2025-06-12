import React from "react";
import SunnyLogo from "../assets/SunnySVG..svg";
import PinLocation from "../assets/Pin-locations.png";
import "./TempAndLocation.css";

const TempAndLocation = ({
  tempurature,
  weatherDescription,
  country,
  city,
}) => {
  return (
    <div className="current-temp-container">
      <img src={SunnyLogo} alt="Sunny Logo" />
      <h1 className="current-temp">{tempurature}°c</h1>
      <h3>{weatherDescription}</h3>
      <div>
        <img src={PinLocation} alt="Pin Locations" />
        <h2>
          {country}, {city}
        </h2>
      </div>
    </div>
  );
};

export default TempAndLocation;
