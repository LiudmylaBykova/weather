import { getDate } from "../../helpers/getDate";
import { getDay } from "../../helpers/getDay";

import css from "../FutureWeather/FutureWeather.module.css";

const FutureWeather = ({ data }) => {
  const forecast = data.forecast;

  return (
    <div className={css.futureWeatherWrap}>
      <div className={css.buttonsWrap}>
        <ul className={css.periodList}>
          <li>
            <button className={css.periodBtn} type="button">
              For week
            </button>
          </li>
        </ul>
      </div>
      <ul className={css.forecastList}>
        {forecast &&
          forecast.forecastday.map((day, index) => (
            <li key={index}>
              <div className={css.forecastItem}>
                <div className={css.forecastDetailsWrap}>
                  <h2 className={css.dayName}>{getDay(day.date)}</h2>
                  <p className={css.dayData}>{getDate(day.date)}</p>
                  <img
                    className={css.svg}
                    src={day.day.condition.icon}
                    alt={day.day.condition.text}
                    width={30}
                    height={30}
                  />
                  <p className={css.dayTemperature}>
                    {Math.round(day.day.maxtemp_c)}&#176;
                  </p>
                  <p className={css.nightTemperature}>
                    {Math.round(day.day.mintemp_c)}&#176;
                  </p>
                </div>
                <p className={css.precipitation}>{day.day.condition.text}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FutureWeather;
