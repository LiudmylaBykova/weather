import { createSlice } from "@reduxjs/toolkit";
import { getWeatherData } from "./weatherOps";

const initialState = {
  weatherData: [],
  isLoading: false,
  isError: false,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.isError = action.payload;
};

const weatherSlice = createSlice({
  name: "weatherData",
  initialState: initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getWeatherData.pending, handlePending)
      .addCase(getWeatherData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.weatherData = action.payload;
      })
      .addCase(getWeatherData.rejected, handleRejected);
  },
});

export const weatherReducer = weatherSlice.reducer;
