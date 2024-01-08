import { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "../../../../components/LoadingSpinner/LoadingSpinner";
import styles from "./WeatherIcon.module.css";

export default function WeatherIcon() {
  const [weather, setWeather] = useState();

  function convertFromKelvinToCelsius(temp) {
    return Math.round(temp - 273.15);
  }

  useEffect(() => {
    axios(
      "https://api.openweathermap.org/data/2.5/weather?lat=26.96546281915211&lon=33.883077697384714&appid=f1130b3524feefd0549671bf69edc578"
    ).then((data) =>
      setWeather({
        temp: convertFromKelvinToCelsius(data.data.main.temp),
        icon: data.data.weather[0].icon,
      })
    );
  }, []);

  if (!weather) return <LoadingSpinner />;

  return (
    <div className="d-flex gap-2 align-items-center">
      <img
        className={styles.weather__icon}
        src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather.icon}.svg`}
        alt=""
      />
      {weather.temp}
    </div>
  );
}

//&#8451;
