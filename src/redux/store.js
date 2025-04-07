//* Redux
import { configureStore } from "@reduxjs/toolkit";

//* Reducers
import contactsReducer from "./contactsSlice";
import filterReducer from "./filtersSlice";
import favortitesReducer from "./favSlice";
import groupReducer from "./categorySlice";

//* Persist
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistedFavsReducer = persistReducer(
  {
    key: "favorites",
    storage,
  },
  favortitesReducer
);

const persistedGroupsReducer = persistReducer(
  {
    key: "groups",
    storage,
  },
  groupReducer
);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReducer,
    fav: persistedFavsReducer,
    groups: persistedGroupsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistedStore = persistStore(store);
