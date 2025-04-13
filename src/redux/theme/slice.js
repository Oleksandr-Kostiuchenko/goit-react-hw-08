//* Redux
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "userTheme",
  initialState: {
    theme: "light",
  },
  reducers: {
    setUserTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setUserTheme } = slice.actions;
export default slice.reducer;
