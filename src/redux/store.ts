import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import cityNameReducer from "./cityList.slice";
import { cityApi } from "./rtk_query.slice";

const reducer = combineReducers({
  cityName: cityNameReducer,
  [cityApi.reducerPath]: cityApi.reducer,
});

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false }).concat(
      cityApi.middleware
    );
  },
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
