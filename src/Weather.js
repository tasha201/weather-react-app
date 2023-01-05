import "./App.css";
import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState(" ");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState(null);

  function showTemperature(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
    // console.log(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "cde11fcb254a1b6acf6cc464209d076f";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city...."
          onChange={updateCity}
        />
        <button type="Submit">Search</button>
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>
            <strong>Temperature</strong>: {Math.round(weather.temperature)} ℃
          </li>
          <li>
            <strong>Description</strong>: {weather.description}
          </li>
          <li>
            <strong>Humidity</strong>: {weather.humidity} %
          </li>
          <li>
            <strong>Wind</strong>: {Math.round(weather.wind)} km/h
          </li>
          <li>
            <img src={weather.icon} alt="weather icon" className="icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}

