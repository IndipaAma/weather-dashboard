import "./DateAndTemp.css";
import WeatherIcon from "./WeatherIcon";
const DateAndTemp = ({ day, minTemp, maxTemp, weatherDescription }) => {
  return (
    <div className="date-and-temp-card-container">
      <div className="date-and-temp-container">
        <h2>{day}</h2>
        <div>
          <WeatherIcon weatherIconCode="01d" size={100} />
        </div>
        <div className="minMax-temp">
          <p>{minTemp}</p>
          <p>{maxTemp}</p>
        </div>
        <p>{weatherDescription}</p>
      </div>
    </div>
  );
};

export default DateAndTemp;
