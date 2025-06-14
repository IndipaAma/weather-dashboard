import React from "react";
import WeatherLogo from "../assets/WeatherLogo.jpeg";
import "../components/Navbar.css";
import ToggleButton from "./ToggleButton";

const Navbar = ({ isDark, setIsDark }) => {
  return (
    <div className="navbar">
      <div className="navbar-title">
        <img src={WeatherLogo} alt="WeatherLogo" />
        <h1>Weather Dashboard</h1>
      </div>
      <div className="navbar-sub">
        <h3>Your personal weather companion</h3>
        <ToggleButton isDark={isDark} setIsDark={setIsDark} />
      </div>
    </div>
  );
};

export default Navbar;
