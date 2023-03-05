import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modeSlice from "./slice/modeSlice";

const rootReducer = combineReducers({
  mode: modeSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
