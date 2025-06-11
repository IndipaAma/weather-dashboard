import "./CurrentWeatherCard.css";
import SunnyLogo from "../assets/SunnySVG..svg";
import PinLocation from "../assets/Pin-locations.png";

const CurrentWeatherCard = () => {
  return (
    <div className="current-weather-card">
      <div className="current-temp-container">
        <img src={SunnyLogo} alt="Sunny Logo" />
        <h1 className="current-temp">22°c</h1>
        <h3>Sunny</h3>
        <div>
          <img src={PinLocation} alt="Pin Locations" />
          <h2>London, UK</h2>
        </div>
      </div>
      <div className="current-weather-details">
        <div className="weather-detail">
          <h3>Humidity</h3>
          <p>60%</p>
        </div>
        <div className="weather-detail">
          <h3>Wind Speed</h3>
          <p>15 km/h</p>
        </div>
        <div className="weather-detail">
          <h3>Pressure</h3>
          <p>1012 hPa</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
