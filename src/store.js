import { configureStore } from "@reduxjs/toolkit";
import toDoSlice from "./componenets/card/toDoSlice";
import doingSlice from "./componenets/card/doingSlice";
import doneSlice from "./componenets/card/doneSlice";

const store = configureStore({
  reducer: {
    toDo: toDoSlice,
    doing: doingSlice,
    done: doneSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})

export default store