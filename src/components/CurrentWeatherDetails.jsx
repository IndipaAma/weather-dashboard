import React from "react";
import "./CurrentWeatherDetails.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CurrentWeatherDetails = ({ labelkey, value }) => {
  return (
    <div className="weather-detail">
      <p>{labelkey}</p>
      <h2>{value}</h2>
    </div>
  );
};

export default CurrentWeatherDetails;
