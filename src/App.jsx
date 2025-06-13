import Navbar from "./components/Navbar";
import "./App.css";
import CurrentWeatherCard from "./components/CurrentWeatherCard";
import WeatherForecastCard from "./components/WeatherForecastCard";
import SplashScreen from "./components/splash-screen/SplashScreen";
import { useEffect, useState } from "react";

function App() {
  const [splashScreen, setSplashScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashScreen(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return splashScreen ? (
    <SplashScreen />
  ) : (
    <div className="app">
      <Navbar />
      <div className="body-container">
        <div className="weather-container">
          <CurrentWeatherCard />
        </div>
        <div className="weather-container">
          <WeatherForecastCard />
        </div>
      </div>
    </div>
  );
}

export default App;
