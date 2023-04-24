import { createSlice } from "@reduxjs/toolkit";

const doingSlice = createSlice({
  name: 'doing',
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

export const {addTask, removeTask} = doingSlice.actions;


export default doingSlice.reducer;