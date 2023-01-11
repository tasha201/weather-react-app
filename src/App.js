import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Bamberg" />
        <footer>
          This Weather React App was coded by Natalia Pavlyk and is{" "}
          <a
            href="https://github.com/tasha201/weather-react-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on Github
          </a>{" "}
          and <a href="https://fanciful-kringle-a1a815.netlify.app" target="_blank"
            rel="noreferrer">hosted</a> on Netlify
        </footer>
      </div>
    </div>
  );
}


