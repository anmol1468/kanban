import { createSlice } from "@reduxjs/toolkit";

const doingSlice = createSlice({
  name: 'doing',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      return [...state, action.payload]
    },
    removeTask: (state, action) => {
      return state.filter(task => task.id !== action.payload.id);
}
  }
})

export const {addTask, removeTask} = doingSlice.actions;


export default doingSlice.reducer;