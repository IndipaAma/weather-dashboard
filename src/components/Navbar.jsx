import React from "react";
import WeatherLogo from "../assets/WeatherLogo.jpeg";
import "../components/Navbar.css"; // Assuming you have a logo image

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-title">
        <img src={WeatherLogo} alt="WeatherLogo" />
        <h1>Weather Dashboard</h1>
      </div>
      <h3>Your personal weather companion</h3>
    </div>
  );
};

export default Navbar;
