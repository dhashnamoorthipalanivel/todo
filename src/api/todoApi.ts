// src/api/todosApi.ts
import axios from "axios";
import type { Todo } from "../features/todos/todosTypes";

const api = axios.create({
  baseURL: "http://localhost:3000", // json-server
});

export const fetchTodosApi = () => api.get("/todoItem");

export const addTodoApi = (todo: Todo) => api.post("/todoItem", todo);

export const updateTodoApi = (todo: Todo) =>
  api.put(`/todoItem/${todo.id}`, todo);

export const deleteTodoApi = (id: string) =>
  api.delete(`/todoItem/${id}`);
