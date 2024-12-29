import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profileTab: "personal",
};

const profileTabSlice = createSlice({
  name: "profileTab",
  initialState,
  reducers: {
    setProfileTab: (state, action) => {
      //   console.log("This is the action payload", action.payload);
      state.profileTab = action.payload;
    },
  },
});

export const { setProfileTab } = profileTabSlice.actions;
export default profileTabSlice.reducer;
