import { UseRootSelector } from "../../hooks/root.hooks";
import "./Display.css";

let isDisplayed: boolean = false;
let currentWeatherData: any;
let title: string = "Have to pass a type";

function Display(props: any) {
  const rootStoreData = UseRootSelector((state: any) => state.root?.value);
  if (props.type === "tomorrow") {
    title = "Tomorrow's Weather";
  } else if (props.type === "current") {
    title = "Current Weather";
  }

  if (rootStoreData) {
    isDisplayed = true;
    if (props.type === "current") {
      currentWeatherData = rootStoreData.current;
    } else if (props.type === "tomorrow") {
      currentWeatherData = rootStoreData.daily[1];
    }
  }

  if (isDisplayed) {
    return (
      <div className="display">
        <h2>{title}</h2>
        <img
          src={`http://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}@2x.png`}
          alt="Weather icon"
        />
        <p>Tendancy : {currentWeatherData.weather[0].description}</p>
        <p>Wind speed : {currentWeatherData.wind_speed} meter/sec</p>
        <p>Humidity : {currentWeatherData.humidity} %</p>
        <p>Pressure : {currentWeatherData.pressure} hPa</p>
      </div>
    );
  } else {
    return (
      <div className="display">
        <h2>{title}</h2>
        <p>Input a city to get results</p>
      </div>
    );
  }
}

export default Display;
