import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import type { Todo } from "../features/todos/todosTypes";

type TodoTaskProps = Todo & {
  deleteTodo: (id: string) => void;
};

const TodoTask = ({
  id,
  priority,
  task,
  description,
  progress,
  date,
  deleteTodo,
}: TodoTaskProps) => {
  const [currentProgress, setCurrentProgress] = useState<String>(progress);

  const priorityColor =
    priority === "High"
      ? "bg-red-600"
      : priority === "Medium"
      ? "bg-yellow-500"
      : "bg-green-700";

  const progressColor =
    currentProgress === "Completed"
      ? "text-green-600"
      : currentProgress === "Pending"
      ? "text-red-600"
      : "text-orange-500";

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentProgress(e.target.checked ? "Completed" : "In Progress");
  };

  return (
    <tr>
      <td className="px-4 py-4 text-sm">
        <span
          className={`py-1.5 px-4 text-white rounded-2xl ${priorityColor} text-center`}
        >
          {priority}
        </span>
      </td>
      <td className="px-4 py-4 text-sm font-semibold w-xs">
        <p>{task}</p>
        <p className="text-xs font-light py-1 text-gray-500">{description}</p>
      </td>
      <td
        className={`px-4 py-4 text-sm font-semibold ${progressColor} text-center`}
      >
        {currentProgress}
      </td>
      <td className="px-4 py-4 text-sm font-semibold text-gray-700 text-center">
        {date}
      </td>
      <td className="px-4 py-4 text-sm font-semibold">
        <div className="flex gap-5 justify-center items-center">
          {/* Delete Button */}
          <div className="relative group">
            <MdDeleteOutline
              className="text-2xl text-red-600 cursor-pointer"
              onClick={() => deleteTodo(id)}
            />
            <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-gray-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Delete
            </span>
          </div>

          {/* Edit Button */}
          <div className="relative group">
            <FaRegEdit className="text-2xl text-orange-400 cursor-pointer" />
            <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-gray-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Edit
            </span>
          </div>

          {/* Checkbox */}
          <input
            type="checkbox"
            className="w-5 h-5 accent-green-700"
            checked={currentProgress === "Completed"}
            onChange={handleCheckboxChange}
          />
        </div>
      </td>
    </tr>
  );
};

export default TodoTask;
