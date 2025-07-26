import { createContext, useContext, useState } from "react";

const KEY = "db9ab212c64fb9a8c3764602f9bd1c9f";

const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [weatherData, setWeatherData] = useState();

  async function fetchWeather(city) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=imperial`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (e) {
      console.log(e);
    }
  }

  const value = { weatherData, setWeatherData, fetchWeather };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
}

export function useWeather() {
  const context = useContext(WeatherContext);
  if (!context)
    throw Error("useWeather must be used within an WeatherProvider");
  return context;
}
