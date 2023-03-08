import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getWord = createAsyncThunk(
  "word/getWord",
  async (word, ThunkAPI) => {
    const res = await axios(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    return res.data[0];
  }
);

const wordSlice = createSlice({
  name: "@@word/",
  initialState: {
    word: "",
    trans: "",
    audio: "",
    meanings: [],
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getWord.fulfilled, (state, { payload }) => {
      state.word = payload.word;
      state.trans = payload.phonetics[1].text;
      state.audio = payload.phonetics[1].audio;
      state.meanings = [...payload.meanings];
      state.error = false;
    });
    builder.addCase(getWord.rejected, (state, { payload }) => {
      state.error = true;
      state.word = "";
      state.trans = "";
      state.audio = "";
      state.meanings = [];
    });
  },
});

export default wordSlice.reducer;
