import { useWeather } from "../contexts/WeatherContext";
import DayReport from "./DayReport";
import { useNavigate } from "react-router";

export default function WeatherDetails() {
  const { weatherData } = useWeather();
  const dailyMap = new Map();
  weatherData.list.forEach((entry) => {
    const date = entry.dt_txt.split(" ")[0];
    if (!dailyMap.has(date)) {
      dailyMap.set(date, entry);
    }
  });

  const forecasts = Array.from(dailyMap.values());
  const navigate = useNavigate();

  return (
    <div className="forecast-container">
      <h1 className="forecast-title">Forecast for {weatherData.city.name}</h1>
      <ul className="weather-cards">
        {forecasts.map((info) => (
          <DayReport key={info.dt} data={info} />
        ))}
      </ul>
      <button onClick={() => navigate("/HomePage")}>Go Back</button>
    </div>
  );
}
