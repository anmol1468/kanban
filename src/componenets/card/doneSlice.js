import { createSlice } from "@reduxjs/toolkit";

const doneSlice = createSlice({
  name: 'done',
  initialState: [{info:'something', id:4}],
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

export const {addTask, removeTask} = doneSlice.actions;

export default doneSlice.reducer;