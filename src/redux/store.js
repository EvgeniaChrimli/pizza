import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../redux/slices/filterSlice";
import basket from "./slices/basketSlice";

export const store = configureStore({
  reducer: {
    filterReducer,
    basket,
  },
});
