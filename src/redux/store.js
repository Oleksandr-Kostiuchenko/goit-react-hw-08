//* Redux
import { configureStore } from "@reduxjs/toolkit";

//* Reducers
import contactsReducer from "./contacts/slice";
import filterReducer from "./filters/slice";
import favortitesReducer from "./favcontacts/slice";
import groupReducer from "./category/slice";
import authReducer from "./auth/slice";

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

const persistedGroupsReducer = persistReducer(
  {
    key: "groups",
    storage,
    whitelist: ["user"],
  },
  groupReducer
);

const persistedAuthReducer = persistReducer(
  {
    key: "token",
    storage,
    whitelist: ["token"],
  },
  authReducer
);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: persistedAuthReducer,
    filters: filterReducer,
    fav: favortitesReducer,
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
