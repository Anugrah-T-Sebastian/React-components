import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSLice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
