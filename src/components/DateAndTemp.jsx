import "./DateAndTemp.css";
import WeatherIcon from "./WeatherIcon";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useWeatherStore } from "../store/UseWeatherStore";

const DateAndTemp = ({
  day,
  minTemp,
  maxTemp,
  weatherDescription,
  weatherIconCode,
  humidity,
  windSpeed,
  pressure,
  feelsLike,
}) => {
  const [hovered, setHovered] = useState(false);
  const { isLoading } = useWeatherStore;

  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="date-and-temp-card-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="date-and-temp-card-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isLoading ? (
          <Skeleton />
        ) : hovered ? (
          <div className="default-container">
            <p>Humidity:</p>
            <h3>{humidity}</h3>
            <br />
            <p>Wind speed:</p>
            <h4>{windSpeed}</h4>
            <br />
            <p>Pressure:</p>
            <h4>{pressure}</h4>
            <br />
            <p>Feels like:</p>
            <h4>{feelsLike}</h4>
            <br />
          </div>
        ) : (
          <div className="default-container">
            <h2>{day}</h2>
            <div>
              <WeatherIcon weatherIconCode={weatherIconCode} size={100} />
            </div>
            <div className="minMax-temp">
              <h2>{minTemp}</h2>
              <h2>{maxTemp}</h2>
            </div>
            <p>{weatherDescription}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DateAndTemp;
