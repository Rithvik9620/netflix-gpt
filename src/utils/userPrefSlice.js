import { createSlice } from "@reduxjs/toolkit";

const userPrefSlice = createSlice({
  name: "userPrefSlice",
  initialState: {
    language: "English",
  },
  reducers: {
    changelang: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { changelang } = userPrefSlice.actions;

export default userPrefSlice.reducer;
