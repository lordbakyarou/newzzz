import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
};

const searchSlice = createSlice({
  initialState,
  name: "search",
  reducers: {
    changeSearch: (state, action) => {
      return { search: action.payload };
    },
  },
});

export const { changeSearch } = searchSlice.actions;

export default searchSlice.reducer;
