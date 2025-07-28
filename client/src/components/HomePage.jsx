import { useWeather } from "../contexts/WeatherContext";
import { useNavigate } from "react-router";

export default function HomePage() {
  const { fetchWeather } = useWeather();
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    const city = formData.get("city");
    console.log(city);
    await fetchWeather(city);
    navigate("/WeatherDetails");
  };

  return (
    <div className="home-container">
      <h1 className="title">Weather Dashboard</h1>
      <form action={handleSubmit} className="weather-form">
        <label>
          Enter your City:
          <input type="text" name="city" />
        </label>
        <button>Get Info</button>
      </form>
    </div>
  );
}
