import React from "react";
import "./CurrentWeatherDetails.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useWeatherStore } from "../store/UseWeatherStore";

const CurrentWeatherDetails = ({ labelkey, value }) => {
  const { isLoading } = useWeatherStore();
  return (
    <div className="weather-detail">
      <p>{isLoading ? <Skeleton /> : labelkey}</p>
      <h2>{isLoading ? <Skeleton /> : value}</h2>
    </div>
  );
};

export default CurrentWeatherDetails;
