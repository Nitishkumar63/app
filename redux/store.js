import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/Slice/userSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
