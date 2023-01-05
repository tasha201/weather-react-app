import React from "react";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}℃`
    );
  }
  let apiKey = "cde11fcb254a1b6acf6cc464209d076f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <RotatingLines
      strokeColor="#61DAFB"
      strokeWidth="5"
      animationDuration="0,75"
      width="96"
      visible={true}
    />
  );
}
