import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./componenets/projectSlice";
import themeSlice from "./themeSlice";


const store = configureStore({
  reducer: {
    projects: projectSlice,
    theme: themeSlice
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   })
})

export default store