import React from "react";
import css from "../SearchBar/SearchBar.module.css";
import { useDispatch } from "react-redux";
import { getWeatherData } from "../../redux/weather/weatherOps";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import icon from "../../assets/icons.svg";

const schema = yup.object().shape({
  city: yup.string().required("Please, enter the city!"),
});

const defaultValues = {
  city: "Kyiv",
  days: 7,
};

const SearchBar = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), defaultValues });

  const handleSearchBtnSubmit = (values) => {
    const searchParams = {
      q: values.city.trim(),
      days: defaultValues.days,
    };
    try {
      dispatch(getWeatherData(searchParams));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={css.searchFormWrap}>
      <form
        className={css.searchForm}
        onSubmit={handleSubmit(handleSearchBtnSubmit)}
      >
        <input
          className={css.searchInput}
          type="city"
          name="city"
          {...register("city")}
          autoComplete="off"
        />
        <button className={css.searchBtn} type="submit">
          <svg className={css.searchSvg} width="14" height="14">
            <use href={`${icon}#icon-search`}></use>
          </svg>
        </button>
      </form>
      {errors.city && <p className={css.error}>{errors.city.message}</p>}
    </div>
  );
};

export default SearchBar;
