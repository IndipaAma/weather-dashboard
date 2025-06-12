import "./CurrentWeatherCard.css";
import FavouritesButton from "./FavouritesButton";
import CurrentWeatherDetails from "./CurrentWeatherDetails";
import TempAndLocation from "./TempAndLocation";
import { useWeatherStore } from "../store/UseWeatherStore";
import { useEffect, useState } from "react";

const CurrentWeatherCard = () => {
  const [coordinates, setCoordinates] = useState({
    latitude: 6.9271,
    longitude: 79.8612,
  });
  const { currentWeather, getCurrentWeather } = useWeatherStore();

  useEffect(() => {
    getCurrentWeather(coordinates.latitude, coordinates.longitude);
  }, [coordinates]);

  const tempurature = currentWeather
    ? Math.round(currentWeather.main.temp - 273.15)
    : null;
  const weatherDescription = currentWeather
    ? currentWeather.weather[0].main
    : null;
  const country = currentWeather ? currentWeather.sys.country : null;
  const city = currentWeather ? currentWeather.name : null;
  const humidity = currentWeather ? currentWeather.main.humidity : null;
  const windSpeed = currentWeather ? currentWeather.wind.speed : null;
  const pressure = currentWeather ? currentWeather.main.pressure : null;
  const feelsLike = currentWeather
    ? Math.round(currentWeather.main.feels_like - 273.15)
    : null;

  return (
    <div className="current-weather-card-container">
      <div className="upper-weather-card">
        <TempAndLocation
          tempurature={tempurature}
          weatherDescription={weatherDescription}
          country={country}
          city={city}
        />
      </div>
      <div className="current-weather-details">
        <CurrentWeatherDetails labelkey="Humidity" value={`${humidity}%`} />
        <CurrentWeatherDetails
          labelkey="Wind Speed"
          value={`${windSpeed}km/h`}
        />
        <CurrentWeatherDetails labelkey="Pressure" value={`${pressure}hPa`} />
        <CurrentWeatherDetails labelkey="Feels like" value={`${feelsLike}°c`} />
      </div>
      <div className="favourites-button">
        <FavouritesButton />
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
