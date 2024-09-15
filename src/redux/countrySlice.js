import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  country: "us",
};

const countrySlice = createSlice({
  initialState,
  name: "country",
  reducers: {
    changeCountry: (state, action) => {
      return { country: action.payload };
    },
  },
});

export const { changeCountry } = countrySlice.actions;

export default countrySlice.reducer;
