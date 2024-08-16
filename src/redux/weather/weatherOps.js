import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://api.weatherapi.com/v1";
const API = "d0284ea5f04e489d81d91501241508";

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
