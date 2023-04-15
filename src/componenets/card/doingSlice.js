import { createSlice } from "@reduxjs/toolkit";

const doingSlice = createSlice({
  name: 'doing',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      return [...state, action.payload]
    },
    removeTask: (state, action) => {
  const idToRemove = parseInt(action.payload.id); // convert to number
  return state.filter(task => task.id !== idToRemove);
}
  }
})

export const {addTask, removeTask} = doingSlice.actions;


export default doingSlice.reducer;