import { useState } from "react";
import "./WeatherBlock.css";

let temperature;
let clouds = "";
let name = "";

export const WeatherBlock = ({ defaultCity }) => {
  const [city, setCity] = useState();

  !city ? getWeather(defaultCity) : console.log("init");

  async function getWeather(city) {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=073bec67030f76e1cab05adace5c176a&units=metric`;
      const res = await fetch(url);
      const data = await res.json();
      temperature = `${data.main.temp}°C`;
      clouds = data.weather[0].description;
      name = data.name;
      setCity(city);
    } catch (err) {}
  }

  const submit = (e) => {
    e.preventDefault();
    getWeather(e.target[0].value);
    e.target[0].value = "";
  };
  return (
    <form className="weather-block" action="" onSubmit={submit}>
      <input type="text" placeholder="City" />
      <h1>{name}</h1>
      <p>{temperature}</p>
      <p>{clouds}</p>
    </form>
  );
};
