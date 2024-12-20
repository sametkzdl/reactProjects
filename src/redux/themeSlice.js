import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themeColor: true,
};

const themeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.themeColor = !state.themeColor;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
