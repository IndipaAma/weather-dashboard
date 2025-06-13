import clearIcon from "../assets/clear.png";
import cloudIcon from "../assets/cloud.png";
import drizzleIcon from "../assets/drizzle.png";
import rainIcon from "../assets/rain.png";
import snowIcon from "../assets/snow.png";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useWeatherStore } from "../store/UseWeatherStore";

const WeatherIcon = ({ weatherIconCode, size }) => {
  const weatherIcons = {
    "01d": clearIcon,
    "01n": clearIcon,
    "02d": cloudIcon,
    "02n": cloudIcon,
    "03d": cloudIcon,
    "03n": cloudIcon,
    "04d": cloudIcon,
    "04n": cloudIcon,
    "09d": drizzleIcon,
    "09n": drizzleIcon,
    "10d": rainIcon,
    "10n": rainIcon,
    "11d": rainIcon,
    "11n": rainIcon,
    "13d": snowIcon,
    "13n": snowIcon,
    "50d": cloudIcon,
    "50n": cloudIcon,
  };

  const icon = weatherIcons[weatherIconCode] || clearIcon;

  const { isLoading } = useWeatherStore();

  return (
    <div>
      {isLoading ? (
        <Skeleton borderRadius="50%" width={size} height={size} />
      ) : (
        <img
          src={icon}
          alt="Weather Icon"
          className="weather-icon"
          style={{ width: size, height: size }}
        />
      )}
    </div>
  );
};

export default WeatherIcon;
