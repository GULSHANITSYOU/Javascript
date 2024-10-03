import { configureStore } from "@reduxjs/toolkit";
import todoRedusers from "../features/todos/todoSlice";

export const store = configureStore({
  reducer: {
    todos: todoRedusers,
  },
});
