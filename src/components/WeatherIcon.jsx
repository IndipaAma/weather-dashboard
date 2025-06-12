import clearIcon from "../assets/clear.png";
import cloudIcon from "../assets/cloud.png";
import drizzleIcon from "../assets/drizzle.png";
import rainIcon from "../assets/rain.png";
import snowIcon from "../assets/snow.png";

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

  return (
    <div>
      <img
        src={icon}
        alt="Weather Icon"
        className="weather-icon"
        key={icon.key}
        style={{ width: size, height: size }}
      />
    </div>
  );
};

export default WeatherIcon;
