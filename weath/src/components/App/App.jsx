import "./App.css";
import { WeatherBlock } from "../WeatherBlock/WeatherBlock";

export const App = () => {
  return (
    <div className="app">
      <div className="widget-area">
        <WeatherBlock defaultCity={"Gomel"} />
      </div>
    </div>
  );
};
