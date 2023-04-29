import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visibleProjectIndex: 0,
  projects: [
    {
      id:1,
      name: 'demo',
      toDo: [
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
      doing: [],
      done: [],
    }
  ]
}

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state, action) => {
      const { projectId, projectName } = action.payload;
      state.projects.push({
        id: projectId,
        name: projectName,
        toDo: [],
        doing: [],
        done: [],
      });
    }, 
    changeVisibleProject: (state, action) => {
      state.visibleProjectIndex = action.payload
    },
    addToDo: (state, action) => {

      let taskAlreadyExists = false;

      state.projects[state.visibleProjectIndex].toDo.forEach(task => {
        if (action.payload.taskId === task.id) {
          taskAlreadyExists = true;
        }
      })

      if (taskAlreadyExists) {return}
      else {
      state.projects[state.visibleProjectIndex].toDo.push({
        id: action.payload.taskId,
        info: action.payload.taskInfo
      })}
    },
    addDoing: (state, action) => {
      let taskAlreadyExists = false;

      state.projects[state.visibleProjectIndex].doing.forEach(task => {
        if (action.payload.taskId === task.id) {
          taskAlreadyExists = true;
        }
      })

      if (taskAlreadyExists) {return}
      else {
      state.projects[state.visibleProjectIndex].doing.push({
        id: action.payload.taskId,
        info: action.payload.taskInfo
      })}
    },
    addDone: (state, action) => {
      let taskAlreadyExists = false;

      state.projects[state.visibleProjectIndex].done.forEach(task => {
        if (action.payload.taskId === task.id) {
          taskAlreadyExists = true;
        }
      })

      if (taskAlreadyExists) {return}
      else {
      state.projects[state.visibleProjectIndex].done.push({
        id: action.payload.taskId,
        info: action.payload.taskInfo
      })}
    },

    
    removeToDo: (state, action) => {
      state.projects[state.visibleProjectIndex].toDo = state.projects[state.visibleProjectIndex].toDo.filter(task => task.id !== action.payload.taskId);
    },
    removeDoing: (state, action) => {
      state.projects[state.visibleProjectIndex].doing = state.projects[state.visibleProjectIndex].doing.filter(task => task.id !== action.payload.taskId);
    },
    removeDone: (state, action) => {
      state.projects[state.visibleProjectIndex].done = state.projects[action.payload.projectIndex].done.filter(task => task.id !== action.payload.taskId);
    },
  },
});

export const { addProject, changeVisibleProject, addToDo, addDoing, addDone, removeToDo, removeDoing, removeDone } = projectSlice.actions;

export default projectSlice.reducer;