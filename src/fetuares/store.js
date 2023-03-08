import { configureStore } from "@reduxjs/toolkit";
import wordSlice from "./word/wordSlice";
import { themeReducer } from "./theme/themeSlice";

export const store = configureStore({
  reducer: {
    word: wordSlice,
    theme: themeReducer,
  },
  devTools: true,
});
