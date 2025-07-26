import { useWeather } from "../contexts/WeatherContext";

export default function WeatherDetails() {
  const { weatherData } = useWeather();

  return (
    <>
      <h1>{weatherData.weather[0].description}</h1>
    </>
  );
}
