import { configureStore } from "@reduxjs/toolkit";
import tabReducer from "@/features/profileTab/profileTabSlice";

const store = configureStore({
  reducer: {
    tab: tabReducer,
  },
});

export default store;
