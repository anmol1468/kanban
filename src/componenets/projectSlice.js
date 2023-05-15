import { createSlice,  } from "@reduxjs/toolkit";

const projects = localStorage.getItem('projects') !== null? {
  visibleProjectIndex: 0,
  projects: JSON.parse(localStorage.getItem('projects'))}: {
  visibleProjectIndex: 0,
  projects: [
    {
      id:1,
      name: 'demo',
      toDo: [],
      doing: [],
      done: [],
    }
  ]
};

const initialState = projects

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state, action) => {
      const { projectId, projectName } = action.payload;

      if (projectName.length) {

      state.projects.push({
        id: projectId,
        name: projectName,
        toDo: [],
        doing: [],
        done: [],
      });
    
      localStorage.setItem(`projects`, JSON.stringify(state.projects))}  
    },

    removeProject: (state, action) => {

      if (state.projects.length===1) {
        alert('At least 1 ongoing project needed!')
        return
      }

      state.projects = state.projects.filter(project => project.id !== action.payload.projectId); 
      state.visibleProjectIndex = 0

      localStorage.setItem('projects', JSON.stringify(state.projects))
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
        info: action.payload.taskInfo,
        description: action.payload.description
      })
    

    localStorage.setItem('projects', JSON.stringify(state.projects))
    }
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
        info: action.payload.taskInfo,
        description: action.payload.description
      })
    

      localStorage.setItem('projects', JSON.stringify(state.projects))
    }
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
        info: action.payload.taskInfo,
        description: action.payload.description
      })

    localStorage.setItem('projects', JSON.stringify(state.projects))
    }
    },
    
    removeToDo: (state, action) => {
      state.projects[state.visibleProjectIndex].toDo = state.projects[state.visibleProjectIndex].toDo.filter(task => task.id !== action.payload.taskId);

      localStorage.setItem('projects', JSON.stringify(state.projects))
    },

    removeDoing: (state, action) => {
      state.projects[state.visibleProjectIndex].doing = state.projects[state.visibleProjectIndex].doing.filter(task => task.id !== action.payload.taskId);

      localStorage.setItem('projects', JSON.stringify(state.projects))
    },

    removeDone: (state, action) => {
      state.projects[state.visibleProjectIndex].done = state.projects[state.visibleProjectIndex].done.filter(task => task.id !== action.payload.taskId);

      localStorage.setItem('projects', JSON.stringify(state.projects))
    },
  },
});

export const { addProject, removeProject, changeVisibleProject, addToDo, addDoing, addDone, removeToDo, removeDoing, removeDone } = projectSlice.actions;

export default projectSlice.reducer;