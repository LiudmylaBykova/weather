import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import TodayWeather from "../../components/TodayWeather/TodayWeather";
import FutureWeather from "../../components/FutureWeather/FutureWeather";
import {
  selectIsError,
  selectIsLoading,
  selectWeather,
} from "../../redux/selectors";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { getWeatherData } from "../../redux/weather/weatherOps";

import css from "../Home/Home.module.css";

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
      {isError && <ErrorMessage />}
      {!isLoading && !isError && <TodayWeather data={data} />}
      {!isLoading && !isError && <FutureWeather data={data} />}
    </div>
  );
};

export default Home;
