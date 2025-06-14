# Weather Dashboard 🌦️

A modern, responsive weather dashboard built with React that provides current weather conditions and 5-day forecasts.

## Features

- **Current Weather Display**
  - Temperature
  - Weather conditions
  - Location information
  - Humidity, wind speed, pressure, and "feels like" temperature
  - Dynamic weather icons

- **5-Day Forecast**
  - Daily temperature highs and lows
  - Weather conditions for each day
  - Detailed weather metrics on hover

- **Location Management**
  - Manual coordinate input
  - Favorites system for saving locations
  - Quick switching between saved locations

- **User Interface**
  - Dark/Light theme toggle
  - Responsive design
  - Loading skeletons for better UX
  - Toast notifications for user feedback
  - Animated weather icons

## Tech Stack

- React
- Vite
- Material-UI (MUI)
- Zustand (State Management)
- Axios
- React Hot Toast
- Framer - Motion (Animations)

##Install dependencies:
  - npm install
    
##Create a .env file in the root directory and add your OpenWeather API key:
  -VITE_API_KEY=your_api_key_here

##Start the development server:
  -npm run dev

##Project Structure
      src/
    ├── assets/          # Images and static assets
    ├── components/      # React components
    │   ├── current-weather/
    │   ├── forecast-weather/
    │   ├── nav-bar/
    │   ├── splash-screen/
    │   └── util-components/
    ├── store/          # Zustand store
    └── App.jsx         # Main application component


    
