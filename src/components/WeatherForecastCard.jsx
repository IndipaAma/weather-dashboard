import { useEffect, useState } from "react";
import "./WeatherForecastCard.css";
import DateAndTemp from "./DateAndTemp";
import { useWeatherStore } from "../store/UseWeatherStore";

const WeatherForecastCard = () => {
  const {
    forecastWeather,
    getFiveDayForecast,
    latitude,
    longitude,
    setCoordinates,
  } = useWeatherStore();

  useEffect(() => {
    getFiveDayForecast(latitude, longitude);
  }, [latitude, longitude]);

  return (
    <div className="weather-forecast-card-container">
      <div className="title-container">
        <h1>5-Day Forecast</h1>
      </div>
      <div className="forecast-items-container">
        <DateAndTemp
          day="Monday"
          minTemp="18°C"
          maxTemp="25°C"
          weatherDescription="Sunny"
        />
        <DateAndTemp
          day="Tommorrow"
          minTemp="18°C"
          maxTemp="25°C"
          weatherDescription="Sunny"
        />
        <DateAndTemp
          day="Monday"
          minTemp="18°C"
          maxTemp="25°C"
          weatherDescription="Sunny"
        />
        <DateAndTemp
          day="Monday"
          minTemp="18°C"
          maxTemp="25°C"
          weatherDescription="Sunny"
        />
        <DateAndTemp
          day="Monday"
          minTemp="18°C"
          maxTemp="25°C"
          weatherDescription="Sunny"
        />
      </div>
    </div>
  );
};

export default WeatherForecastCard;
