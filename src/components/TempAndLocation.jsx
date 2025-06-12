import PinLocation from "../assets/Pin-locations.png";
import "./TempAndLocation.css";
import WeatherIcon from "./WeatherIcon";

const TempAndLocation = ({
  tempurature,
  weatherDescription,
  country,
  city,
  weatherIconCode,
}) => {
  return (
    <div className="current-temp-container">
      <div>
        <WeatherIcon weatherIconCode={weatherIconCode} size={200} />
      </div>
      <h1 className="current-temp">{tempurature}°c</h1>
      <h2>{weatherDescription}</h2>
      <div className="location-container">
        <img src={PinLocation} alt="Pin Locations" />
        <h2>
          {city}, {country}
        </h2>
      </div>
    </div>
  );
};

export default TempAndLocation;
