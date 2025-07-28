export default function DayReport({ data }) {
  const date = data.dt_txt.split(" ")[0]; // "YYYY-MM-DD"
  const temp = Math.round(data.main.temp);
  const description = data.weather[0].description;
  const icon = data.weather[0].icon;
  const humidity = data.main.humidity;
  const wind = data.wind.speed;

  return (
    <li
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        marginBottom: "1rem",
      }}
    >
      <h3>{date}</h3>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />
      <p>
        {temp}°F – {description}
      </p>
      <p>Humidity: {humidity}%</p>
      <p>Wind: {wind} mph</p>
    </li>
  );
}
