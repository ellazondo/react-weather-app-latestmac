import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div ClassName="Container">
        <Weather />

        <footer>
          This project was coded by Gabriella Elizondo and is{" "}
          <a href="https://github.com/ellazondo/react-weather-app-new-mac">
            open sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
