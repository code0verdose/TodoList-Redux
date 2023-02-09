import { createSlice } from "@reduxjs/toolkit";

const savedTodos = JSON.parse(localStorage.getItem("todos")) ?? [];

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: savedTodos,
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.value,
        isDone: false,
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    removeAllTodo(state) {
      state.todos = [];
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    removeIsDoneTodo(state) {
      state.todos = state.todos.filter((todo) => !todo.isDone);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    toggleIsDone(state, action) {
      const toggledItem = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggledItem.isDone = !toggledItem.isDone;
      localStorage.setItem("todos", JSON.stringify(state.todos));
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
