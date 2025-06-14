import { useEffect } from "react";
import "./WeatherForecastCard.css";
import DateAndTemp from "./DateAndTemp";
import { useWeatherStore } from "../store/UseWeatherStore";
import * as motion from "motion/react-client";

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

  const forecastList = forecastWeather?.list || [];
  const midDayForecast = forecastList.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  const forecastDetails = midDayForecast.map((detail) => ({
    date: detail.dt_txt.split(" ")[0],
    minTemp: `${Math.round(detail.main.temp_min)}°c`,
    maxTemp: `${Math.round(detail.main.temp_max)}°c`,
    humidity: `${detail.main.humidity}%`,
    windSpeed: `${detail.wind.speed}km/h`,
    pressure: `${detail.main.pressure}hPa`,
    feelsLike: `${Math.round(detail.main.feels_like)}°c`,
    weatherDescription: detail.weather[0].main,
    weatherIconCode: detail.weather[0].icon,
  }));

  return (
    <div className="weather-forecast-card-container">
      <div className="title-container">
        <h1>5-Day Forecast</h1>
      </div>
      <motion.div
        className="forecast-items-container"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", bounce: 0.5, duration: 3 },
        }}
      >
        {forecastDetails.map((detail, index) => (
          <DateAndTemp
            key={index}
            day={new Date(detail.date).toLocaleDateString("en-US", {
              weekday: "long",
            })}
            minTemp={detail.minTemp}
            maxTemp={detail.maxTemp}
            weatherDescription={detail.weatherDescription}
            weatherIconCode={detail.weatherIconCode}
            humidity={detail.humidity}
            windSpeed={detail.windSpeed}
            pressure={detail.pressure}
            feelsLike={detail.feelsLike}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default WeatherForecastCard;
