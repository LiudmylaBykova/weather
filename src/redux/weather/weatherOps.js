import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://api.weatherapi.com/v1";
const API = "01832842340f4f4586595157243107";

export const getWeatherData = createAsyncThunk(
  "weather/fetchAll",
  async ({ q, days }, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/forecast.json?key=${API}&q=${q}&days=${days}`
      );
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
