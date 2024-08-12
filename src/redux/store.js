import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const cityPersistConfig = {
  key: "weatherData",
  storage,
  whitelist: ["weatherData"],
};

import { weatherReducer } from "./weather/slice";

export const store = configureStore({
  reducer: { weather: persistReducer(cityPersistConfig, weatherReducer) },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
