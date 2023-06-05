import { createSlice,  } from "@reduxjs/toolkit";

const nightMode = localStorage.getItem('nightMode')

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    nightMode: JSON.parse(nightMode)
  },
  reducers: {
    toggleTheme: (state, action) => {
      state.nightMode = action.payload
    }
  }
})

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;