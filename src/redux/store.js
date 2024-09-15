import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import themeReducer from "./themeSlice";
import countryReducer from "./countrySlice";
import persistReducer from "redux-persist/es/persistReducer";
import searchReducer from "./searchSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["search"],
};

const rootReducer = combineReducers({
  theme: themeReducer,
  country: countryReducer,
  search: searchReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
