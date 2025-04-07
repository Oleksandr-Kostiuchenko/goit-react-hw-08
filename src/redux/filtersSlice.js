//* Redux
import { createSlice } from "@reduxjs/toolkit";

//* Slice
const slice = createSlice({
  name: "filter",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = slice.actions;
export default slice.reducer;

//* Selector
export const selectNameFilter = (state) => state.filters.name;
