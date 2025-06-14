import Navbar from "./components/Navbar";
import "./App.css";
import CurrentWeatherCard from "./components/CurrentWeatherCard";
import WeatherForecastCard from "./components/WeatherForecastCard";
import SplashScreen from "./components/splash-screen/SplashScreen";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

function App() {
  const [splashScreen, setSplashScreen] = useState(true);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashScreen(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return splashScreen ? (
    <SplashScreen />
  ) : (
    <div className="app" data-theme={isDark ? "dark" : "light"}>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Toaster position="top-right" reverseOrder={false} />
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
