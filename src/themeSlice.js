import { createSlice,  } from "@reduxjs/toolkit";


const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    nightMode: false
  },
  reducers: {
    toggleTheme: (state, action) => {
      state.nightMode = action.payload
    }
  }
})

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;