import { convertTo24Hour } from "../../helpers/convertTo24Hour";
import icon from "../../assets/icons.svg";

import css from "../TodayWeather/TodayWeather.module.css";

const TodayWeather = ({ data }) => {
  return (
    <div className={css.todayWeatherWrap}>
      <div className={css.todayWrap}>
        <div className={css.degreeSvgWrap}>
          <div>
            {data && data.current && (
              <p className={css.TodayDegree}>
                {Math.round(data.current.temp_c)}&#176;
              </p>
            )}
            <p className={css.todayDay}>Today</p>
          </div>
          {data && data.current && (
            <img
              className={css.todaySvg}
              src={data.current.condition.icon}
              alt={data.current.condition.text}
              width="50"
              height="50"
            />
          )}
        </div>
        {data && data.location && (
          <p className={css.todayTime}>
            Time: {data.location.localtime.slice(-5)}
          </p>
        )}
        {data && data.location && (
          <p className={css.todayCity}>City: {data.location.name}</p>
        )}

        <div className={css.sunriseSunsetWrap}>
          {data && data.forecast && (
            <p className={css.todaySunrise}>
              Sunrise:{" "}
              {convertTo24Hour(data.forecast.forecastday[0].astro.sunrise)}
            </p>
          )}
          {data && data.forecast && (
            <p className={css.todaySunset}>
              Sunset:{" "}
              {convertTo24Hour(data.forecast.forecastday[0].astro.sunset)}
            </p>
          )}
        </div>
      </div>

      <div className={css.todayDetailsWrap}>
        {data && data.current && (
          <ul className={css.detailsList}>
            <li>
              <div className={css.detailsItem}>
                <div className={css.svgDetailsWrap}>
                  <svg className={css.thermometerSvg} width="12" height="12">
                    <use href={`${icon}#icon-thermometer`}></use>
                  </svg>
                </div>
                <p className={css.detailsText}>
                  Temperature: {Math.round(data.current.temp_c)}&#176; feels
                  like {Math.round(data.current.feelslike_c)}&#176;
                </p>
              </div>
            </li>
            <li>
              <div className={css.detailsItem}>
                <div className={css.svgDetailsWrap}>
                  <svg className={css.pressureSvg} width="10" height="10">
                    <use href={`${icon}#icon-humidity`}></use>
                  </svg>
                </div>
                <p className={css.detailsText}>
                  Pressure: {data.current.pressure_mb} mm Hg
                </p>
              </div>
            </li>
            <li>
              <div className={css.detailsItem}>
                <div className={css.svgDetailsWrap}>
                  <svg className={css.evaporatorSvg} width="20" height="20">
                    <use href={`${icon}#icon-evaporator`}></use>
                  </svg>
                </div>
                <p className={css.detailsText}>
                  Precipitation: {data.current.condition.text}
                </p>
              </div>
            </li>
            <li>
              <div className={css.detailsItem}>
                <div className={css.svgDetailsWrap}>
                  <svg className={css.windSvg} width="10" height="10">
                    <use href={`${icon}#icon-wind`}></use>
                  </svg>
                </div>
                <p className={css.detailsText}>
                  Wind: {data.current.wind_mph / 4} m/s {data.current.wind_dir}
                </p>
              </div>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default TodayWeather;
