import "./CurrentWeatherCard.css";
import FavouritesButton from "./FavouritesButton";
import CurrentWeatherDetails from "./CurrentWeatherDetails";
import TempAndLocation from "./TempAndLocation";

const CurrentWeatherCard = () => {
  return (
    <div className="current-weather-card-container">
      <div className="upper-weather-card">
        <TempAndLocation />
      </div>
      <div className="current-weather-details">
        <CurrentWeatherDetails labelkey="Humidity" value="60%" />
        <CurrentWeatherDetails labelkey="Wind Speed" value="15 km/h" />
        <CurrentWeatherDetails labelkey="Pressure" value="1012 hPa" />
        <CurrentWeatherDetails labelkey="Feels like" value="10 km" />
      </div>
      <div className="favourites-button">
        <FavouritesButton />
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
