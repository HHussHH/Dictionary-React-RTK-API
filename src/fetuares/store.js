import { configureStore } from "@reduxjs/toolkit";
import wordSlice from "./word/wordSlice";

export const store = configureStore({
  reducer: {
    word: wordSlice,
  },
  devTools: true,
});
