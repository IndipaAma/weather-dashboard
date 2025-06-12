import axios from "axios";
import { create } from "zustand";

export const useWeatherStore = create((set, get) => ({
  apiKey: import.meta.env.VITE_API_KEY,
  currentWeather: null,
  forecastWeather: null,
  latitude: 6.9271,
  longitude: 79.8612,
  isLoading: false,
  error: null,

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

  setCoordinates: (lat, lon) => set({ latitude: lat, longitude: lon }),

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
}));
