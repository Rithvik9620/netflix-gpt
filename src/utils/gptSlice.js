import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSlice",
  initialState: {
    showGptSearchBox: false,
  },
  reducers: {
    toggleGptSearchMode: (state, action) => {
      state.showGptSearchBox = !state.showGptSearchBox;
    },
  },
});

export const { toggleGptSearchMode } = gptSlice.actions;

export default gptSlice.reducer;
