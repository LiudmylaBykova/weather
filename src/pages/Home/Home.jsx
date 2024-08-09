import React, { useEffect } from "react";
import TodayWeather from "../../components/TodayWeather/TodayWeather";

import css from "../Home/Home.module.css";
import FutureWeather from "../../components/FutureWeather/FutureWeather";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsError,
  selectIsLoading,
  selectWeather,
} from "../../redux/selectors";
import Loader from "../../components/Loader/Loader";
import { getWeatherData } from "../../redux/weather/weatherOps";

const Home = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const data = useSelector(selectWeather);
  const dispatch = useDispatch();

  useEffect(() => {
    const searchParams = {
      q: "Kyiv",
      days: 7,
    };
    if (data.length === 0) {
      dispatch(getWeatherData(searchParams));
    }
  }, [dispatch, data]);

  return (
    <div className={css.homeSection}>
      {isLoading && <Loader />}
      {!isLoading && !isError && <TodayWeather data={data} />}
      {!isLoading && !isError && <FutureWeather data={data} />}
    </div>
  );
};

export default Home;
