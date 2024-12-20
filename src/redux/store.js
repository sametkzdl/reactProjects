import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import userReducer from "./usersSlice";
import themeSlice from "./themeSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer,
    theme: themeSlice,
  },
});
