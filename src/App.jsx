import Navbar from "./components/Navbar";
import "./App.css";
import CurrentWeatherCard from "./components/CurrentWeatherCard";
import WeatherForecastCard from "./components/WeatherForecastCard";

function App() {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <div className="current-weather-container">
          <CurrentWeatherCard />
        </div>
        <div className="weather-forecast-container">
          <WeatherForecastCard />
        </div>
      </div>
    </>
  );
}

export default App;
