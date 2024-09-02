import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    preferredLang: "en",
  },
  reducers: {
    setPreferredLang: (state, action) => {
      state.preferredLang = action.payload;
    },
  },
});

export const { setPreferredLang } = configSlice.actions;

export default configSlice.reducer;
