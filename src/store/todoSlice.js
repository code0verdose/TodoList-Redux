import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.value,
        isDone: false,
      });
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    removeAllTodo(state) {
      state.todos = [];
    },
    removeIsDoneTodo(state) {
      state.todos = state.todos.filter((todo) => !todo.isDone);
    },
    toggleIsDone(state, action) {
      const toggledItem = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggledItem.isDone = !toggledItem.isDone;
    },
  },
});

export const {
  addTodo,
  removeAllTodo,
  removeIsDoneTodo,
  removeTodo,
  toggleIsDone,
} = todoSlice.actions;

export default todoSlice.reducer;
