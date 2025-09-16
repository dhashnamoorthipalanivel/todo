import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Todo } from "./todosTypes";
import {
  fetchTodosApi,
  addTodoApi,
  updateTodoApi,
  deleteTodoApi,
} from "../../api/todoApi";

/**
 * Fetch all todos
 */
export const fetchTodos = createAsyncThunk<Todo[]>(
  "todos/fetchTodos",
  async () => {
    const response = await fetchTodosApi();
    return response.data as Todo[];
  }
);

/**
 * Add a new todo (id generated here for now)
 */
export const addTodo = createAsyncThunk<Todo, Omit<Todo, "id">>(
  "todos/addTodo",
  async (newTodo) => {
    const todoWithId: Todo = {
      ...newTodo,
      id: Date.now().toString(),
    };
    const response = await addTodoApi(todoWithId);
    return response.data as Todo;
  }
);

/**
 * Update a todo
 */
export const updateTodo = createAsyncThunk<Todo, Todo>(
  "todos/updateTodo",
  async (updatedTodo) => {
    const response = await updateTodoApi(updatedTodo);
    return response.data as Todo;
  }
);

/**
 * Delete a todo by id
 */
export const deleteTodo = createAsyncThunk<string, string>(
  "todos/deleteTodo",
  async (id) => {
    await deleteTodoApi(id);
    return id;
  }
);
