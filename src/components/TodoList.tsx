// src/components/TodoList.tsx
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import { fetchTodos, deleteTodo } from "../features/todos/todosThunks";
import TodoTask from "./TodoTask";

type searchProps = {
  searchQuery: string;
}

const TodoList = ({ searchQuery }: searchProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.todos.items);

  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;

  useEffect(() => {
    dispatch(fetchTodos()); // fetch once when mounted
  }, [dispatch]);


  // Search logic
  const query = searchQuery.trim().toLowerCase();
  const filterTodo = todos.filter((todo) => (
    query === " " || todo.task.toLowerCase().includes(query) || todo.description.toLowerCase().includes(query)
  ))


  // pagination
  const totalPage = Math.ceil(filterTodo.length / dataPerPage);
  const startIndex = (currentPage - 1) * dataPerPage;
  const paginatedTodos = filterTodo.slice(startIndex, startIndex + dataPerPage);

  const prevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : currentPage));
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev < totalPage ? prev + 1 : totalPage));
  };

  return (
    <div className="bg-white shadow-md w-full rounded-lg overflow-x-auto ">
      <table className="table-auto w-full text-left">
        <thead>
          <tr className="border-b border-gray-500">
            <th className="px-6 py-4 text-sm font-semibold text-gray-900">
              Priority
            </th>
            <th className="px-6 py-4 text-sm font-semibold text-gray-900 w-xs text-center">
              Tasks
            </th>
            <th className="px-6 py-4 text-sm font-semibold text-gray-900 text-center">
              Progress
            </th>
            <th className="px-6 py-4 text-sm font-semibold text-gray-900 text-center">
              Date
            </th>
            <th className="px-6 py-4 text-sm font-semibold text-gray-900 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="border-b-gray-400">

          {paginatedTodos.length === 0 ?
            <tr>
              <td colSpan={5} className="py-6 text-center text-sm font-semibold text-gray-700">
                No tasks found.
              </td>
            </tr> :

            paginatedTodos.map((todo) => (
              <TodoTask
                key={todo.id}
                id={todo.id}
                priority={todo.priority}
                task={todo.task}
                description={todo.description}
                progress={todo.progress}
                date={todo.date}
                deleteTodo={(id: string) => dispatch(deleteTodo(id))}
              />
            ))

          }

        </tbody>
      </table>

      {/* Pagination UI (unchanged) */}
      <div className="flex items-center justify-between px-5 py-3 my-4">
        <button
          className="text-sm bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700 transition shadow-md"
          onClick={prevPage}
        >
          Prev
        </button>
        <div className="flex items-center gap-2">
          {totalPage <= 3 ? (
            // Show all pages if totalPage is 3 or less
            [...Array(totalPage)].map((_, index) => {
              const page = index + 1;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 rounded-full text-sm ${currentPage === page
                    ? "bg-violet-100 text-violet-700 font-medium"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                >
                  {page}
                </button>
              );
            })
          ) : (
            <>
              {/* Always show first 3 pages */}
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 rounded-full text-sm ${currentPage === page
                    ? "bg-violet-100 text-violet-700 font-medium"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                >
                  {page}
                </button>
              ))}

              {/* Ellipsis */}
              <span className="px-3 py-1 text-gray-400">...</span>

              {/* Last page */}
              <button
                onClick={() => setCurrentPage(totalPage)}
                className={`px-3 py-1 rounded-full text-sm ${currentPage === totalPage
                  ? "bg-violet-100 text-violet-700 font-medium"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
              >
                {totalPage}
              </button>
            </>
          )}
        </div>

        <button
          className="text-sm bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700 transition shadow-md"
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TodoList;
