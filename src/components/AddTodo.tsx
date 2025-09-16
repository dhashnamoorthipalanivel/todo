import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store";
import { addTodo } from "../features/todos/todosThunks";

type AddTodoProps = {
  toggleBtn: () => void;
};

const AddTodo = ({ toggleBtn }: AddTodoProps) => {
  const dispatch = useDispatch<AppDispatch>();

  // Form State
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("Work");
  const [priority, setPriority] = useState("Low");
  const [due, setDue] = useState("Today");
  const [status, setStatus] = useState("Pending");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      addTodo({
        task: title,
        description,
        priority: priority as "Low" | "Medium" | "High",
        progress: status as "Pending" | "In progress" | "Completed",
        date: new Date().toISOString().split("T")[0],
      })
    );
    toggleBtn();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center bg-opacity-60"
      style={{ background: "oklch(0.1 0 0 / 0.19)" }}
    >
      <div className="bg-white rounded-2xl shadow-lg max-w-2xl w-full p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Add New Task</h1>
          <IoCloseOutline
            className="text-2xl text-gray-900 cursor-pointer"
            onClick={toggleBtn}
          />
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full border-2 border-gray-300 rounded-xl py-2 px-3 outline-none focus:border-violet-600"
          />

          <textarea
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border-2 border-gray-300 rounded-xl py-2 px-3 outline-none resize-none focus:border-violet-600"
          />

          <div className="flex flex-row gap-6">
            <div className="flex flex-col w-full">
              <label
                htmlFor="tags"
                className="text-sm font-medium text-gray-700 mb-1"
              >
                Tags
              </label>
              <select
                id="tags"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 outline-none focus:border-violet-600"
              >
                <option>Work</option>
                <option>Personal</option>
                <option>Urgent</option>
              </select>
            </div>

            <div className="flex flex-col w-full">
              <label
                htmlFor="priority"
                className="text-sm font-medium text-gray-700 mb-1"
              >
                Priority
              </label>
              <select
                id="priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 outline-none focus:border-violet-600"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
          </div>

          <div className="flex flex-row gap-6">
            <div className="flex flex-col w-full">
              <label
                htmlFor="due"
                className="text-sm font-medium text-gray-700 mb-1"
              >
                Due
              </label>
              <select
                id="due"
                value={due}
                onChange={(e) => setDue(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 outline-none focus:border-violet-600"
              >
                <option>Today</option>
                <option>This Week</option>
                <option>Overdue</option>
              </select>
            </div>

            <div className="flex flex-col w-full">
              <label
                htmlFor="status"
                className="text-sm font-medium text-gray-700 mb-1"
              >
                Status
              </label>
              <select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 outline-none focus:border-violet-600"
              >
                <option>Completed</option>
                <option>Pending</option>
                <option>In-Progress</option>
              </select>
            </div>
          </div>

          <div className="flex justify-evenly mt-4">
            <button
              type="button"
              className="text-[1rem] bg-red-500 shadow-md text-white px-4 py-2 rounded hover:bg-red-600 transition"
              onClick={toggleBtn}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="text-[1rem] bg-green-600 shadow-md text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
