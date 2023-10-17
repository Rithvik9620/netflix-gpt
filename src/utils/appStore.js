import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "../utils/movieSlice";
import gptSlice from "./gptSlice";
import userPrefSlice from "./userPrefSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptSlice,
    pref: userPrefSlice,
  },
});

export default appStore;
