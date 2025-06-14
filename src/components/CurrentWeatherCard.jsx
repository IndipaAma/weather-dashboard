import "./CurrentWeatherCard.css";
import FavouritesButton from "./FavouritesButton";
import CurrentWeatherDetails from "./CurrentWeatherDetails";
import TempAndLocation from "./TempAndLocation";
import { useWeatherStore } from "../store/UseWeatherStore";
import { useEffect } from "react";
import * as motion from "motion/react-client";

const CurrentWeatherCard = () => {
  const { currentWeather, getCurrentWeather, latitude, longitude } =
    useWeatherStore();

  useEffect(() => {
    getCurrentWeather(latitude, longitude);
  }, [latitude, longitude]);

  const tempurature = currentWeather
    ? Math.round(currentWeather.main.temp)
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
    ? Math.round(currentWeather.main.feels_like)
    : null;
  const weatherIconCode = currentWeather
    ? currentWeather.weather[0].icon
    : "Icon not available";

  return (
    <motion.div
      className="current-weather-card-container"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", bounce: 0.5, duration: 3 },
      }}
    >
      <div className="upper-weather-card">
        <TempAndLocation
          tempurature={tempurature}
          weatherDescription={weatherDescription}
          country={country}
          city={city}
          weatherIconCode={weatherIconCode}
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
    </motion.div>
  );
};

export default CurrentWeatherCard;
