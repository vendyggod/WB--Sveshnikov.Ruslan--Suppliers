import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../entities/filter/filterSlice.ts";

export const store = configureStore({
  reducer: {
    ui: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
