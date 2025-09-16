import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos, addTodo, updateTodo, deleteTodo } from "./todosThunks";
import type { Todo } from "./todosTypes";

interface TodosState {
  items: Todo[];
  loading: boolean;
  error: string | null;
}

const initialState: TodosState = {
  items: [],
  loading: false,
  error: null,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetch todos
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      // add todo
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      // update todo
      .addCase(updateTodo.fulfilled, (state, action) => {
        const index = state.items.findIndex((t) => t.id === action.payload.id);
        if (index !== -1) state.items[index] = action.payload;
      })
      // delete todo
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter((t) => t.id !== action.payload);
      });
  },
});

export default todosSlice.reducer;
