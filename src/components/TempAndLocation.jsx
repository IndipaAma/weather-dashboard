import PinLocation from "../assets/Pin-locations.png";
import { useWeatherStore } from "../store/UseWeatherStore";
import "./TempAndLocation.css";
import WeatherIcon from "./WeatherIcon";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TempAndLocation = ({
  tempurature,
  weatherDescription,
  country,
  city,
  weatherIconCode,
}) => {
  const { isLoading } = useWeatherStore();

  return (
    <div className="current-temp-container">
      <div>
        <WeatherIcon weatherIconCode={weatherIconCode} size={200} />
      </div>
      <h1 className="current-temp">
        {isLoading ? <Skeleton /> : tempurature}°c
      </h1>
      <h2>{isLoading ? <Skeleton /> : weatherDescription}</h2>
      <div className="location-container">
        <img src={PinLocation} alt="Pin Locations" />
        {isLoading ? (
          <Skeleton />
        ) : (
          <h2>
            {" "}
            {city}, {country}
          </h2>
        )}
      </div>
    </div>
  );
};

export default TempAndLocation;
