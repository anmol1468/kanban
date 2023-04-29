import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./componenets/projectSlice";


const store = configureStore({
  reducer: {
    projects: projectSlice
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   })
})

export default store