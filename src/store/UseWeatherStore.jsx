import axios from "axios";
import { create } from "zustand";

export const useWeatherStore = create((set, get) => ({
  apiKey: import.meta.env.VITE_API_KEY,
  weather: null,
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
    }

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
      );
      set({ weather: response.data, isLoading: false, error: null });
      console.log("Weather data fetched successfully:", response.data);
    } catch (error) {
      set({ isLoading: false, error: error.message });
    }
  },

  getFiveDayForecase: async (lat, lon) => {
    set({ isLoading: true, error: null });
    const { apiKey } = get();
    if (!apiKey) {
      set({
        isLoading: false,
        error: "API key is not set. Please provide a valid API key.",
      });
    }

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
      );
      set({ weather: response.data, isLoading: false, error: null });
      console.log(
        "Five-day forecast data fetched successfully:",
        response.data
      );
    } catch (error) {
      set({ isLoading: false, error: error.message });
    }
  },
}));
