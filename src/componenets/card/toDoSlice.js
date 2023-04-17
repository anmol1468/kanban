import { createSlice } from "@reduxjs/toolkit";

const toDoSlice = createSlice({
  name: 'todo',
  initialState: [
    {
      id: 1,
      info: 'Clean room'
    },
    {
      id: 2,
      info: 'do laundary'
    },
    {
      id: 3,
      info: 'go run'
    },
  ],
  reducers: {
    addTask: (state, action) => {
      return [...state, action.payload]
    },
    removeTask: (state, action) => {
      return state.filter(task => task.id !== action.payload.id);
}
  }
})

export const {addTask, removeTask} = toDoSlice.actions;

export default toDoSlice.reducer;