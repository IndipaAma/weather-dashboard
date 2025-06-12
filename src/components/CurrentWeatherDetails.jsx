import React from "react";
import "./CurrentWeatherDetails.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CurrentWeatherDetails = ({ labelkey, value }) => {
  return (
    <div className="weather-detail">
      <h1>{labelkey}</h1>
      <p>{value}</p>
    </div>
  );
};

export default CurrentWeatherDetails;
