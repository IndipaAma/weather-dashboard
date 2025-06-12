import React from "react";
import "./CurrentWeatherDetails.css";

const CurrentWeatherDetails = ({ labelkey, value }) => {
  return (
    <div className="weather-detail">
      <h1>{labelkey}</h1>
      <p>{value}</p>
    </div>
  );
};

export default CurrentWeatherDetails;
