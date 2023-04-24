import { createSlice } from "@reduxjs/toolkit";

const doneSlice = createSlice({
  name: 'done',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      
      let taskAlreadyExists = false;

      state.forEach(task => {
        if (action.payload.id === task.id) {
          taskAlreadyExists = true;
        }
      })

      if (taskAlreadyExists) {
        return } else { return [...state, action.payload] }
    },
    removeTask: (state, action) => {
      return state.filter(task => task.id !== action.payload.id);
}
  }
})

export const {addTask, removeTask} = doneSlice.actions;

export default doneSlice.reducer;