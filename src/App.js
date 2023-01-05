import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather city="Kyiv" />
        <p className="link">
          This Weather React App was coded by Natalia Pavlyk and is{" "}
          <a
            href="https://github.com/tasha201/weather-react-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced
          </a>{" "}
          and <a href="https://fanciful-kringle-a1a815.netlify.app" target="_blank"
            rel="noreferrer">hosted</a> on Netlify
        </p>
      </header>
    </div>
  );
}

export default App;
