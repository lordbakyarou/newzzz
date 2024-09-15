import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "white",
};

const themeSlice = createSlice({
  initialState,
  name: "theme",
  reducers: {
    changeTheme: (state, action) => (state.theme = action.payload),
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
