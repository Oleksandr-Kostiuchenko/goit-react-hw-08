//* Redux
import { createSlice } from "@reduxjs/toolkit";
import { logout } from "../auth/operations";

const saveFavs = (userEmail, favArr) => {
  localStorage.setItem(`${userEmail}Favs`, JSON.stringify(favArr));
};

//* Slice
const slice = createSlice({
  name: "fav",
  initialState: {
    items: [],
    user: null,
  },
  reducers: {
    setFavUser: (state, action) => {
      state.user = action.payload;
      state.items = [];
    },
    fetchFavs: (state) => {
      if (!state.user) return;

      const dataFromLS = JSON.parse(localStorage.getItem(`${state.user}Favs`));

      if (dataFromLS === null) {
        return;
      }

      state.items = dataFromLS;
    },
    addFav: (state, action) => {
      if (!state.user) return;

      state.items.push(action.payload);

      saveFavs(state.user, state.items);
    },
    deleteFav: (state, action) => {
      if (!state.user) return;

      state.items = state.items.filter((el) => el.id !== action.payload.id);

      saveFavs(state.user, state.items);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(logout.fulfilled, (state, action) => {
      state.user = null;
    });
  },
});

export const { setFavUser, addFav, deleteFav, fetchFavs } = slice.actions;
export default slice.reducer;
