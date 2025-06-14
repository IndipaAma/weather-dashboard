import axios from "axios";
import { create } from "zustand";

const storedFavourites = JSON.parse(localStorage.getItem("favourites") || "[]");

export const useWeatherStore = create((set, get) => ({
  apiKey: import.meta.env.VITE_API_KEY,
  currentWeather: null,
  forecastWeather: null,
  latitude: 6.9271,
  longitude: 79.8612,
  isLoading: false,
  error: null,
  favourites: storedFavourites,

  getCurrentWeather: async (lat, lon) => {
    set({ isLoading: true, error: null });
    const { apiKey } = get();
    if (!apiKey) {
      set({
        isLoading: false,
        error: "API key is not set. Please provide a valid API key.",
      });
      return;
    }
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&units=metric&lon=${lon}&appid=${apiKey}`
      );
      set({
        currentWeather: response.data,
        latitude: lat,
        longitude: lon,
        isLoading: false,
        error: null,
      });
      console.log("Weather data fetched successfully:", response.data);
    } catch (error) {
      set({ isLoading: false, error: error.message });
    }
  },

  getFiveDayForecast: async (lat, lon) => {
    set({ isLoading: true, error: null });
    const { apiKey } = get();
    if (!apiKey) {
      set({
        isLoading: false,
        error: "API key is not set. Please provide a valid API key.",
      });
      return;
    }

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
      );
      set({
        forecastWeather: response.data,
        latitude: lat,
        longitude: lon,
        isLoading: false,
        error: null,
      });
      console.log(
        "Five-day forecast data fetched successfully:",
        response.data
      );
    } catch (error) {
      set({ isLoading: false, error: error.message });
    }
  },
  setCoordinates: (lat, lon) => set({ latitude: lat, longitude: lon }),

  addToFavourites: (lat, lon) => {
    const { favourites } = get();
    const newFavourite = { latitude: lat, longitude: lon };

    //check if the same coordinates already exist in favourites
    const duplicates = favourites.some(
      (fav) => fav.latitude === lat && fav.longitude === lon
    );

    if (!duplicates) {
      const updated = [...favourites, newFavourite];
      set({ favourites: updated });
      localStorage.setItem("favourites", JSON.stringify(updated));

      console.log("Updated favourites:", updated);
    }
  },
}));
