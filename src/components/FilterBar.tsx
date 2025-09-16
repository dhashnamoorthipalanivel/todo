type FilterBarProps = {
  AddTask: () => void;
};


const FilterBar = ({ AddTask }: FilterBarProps) => {
  return (
    <div className="flex justify-between items-center flex-wrap gap-4 px-4 py-2 w-full bg-white my-2 shadow-2xs">
      <div className="flex flex-wrap gap-6">
        <div className="flex flex-col">
          <label
            htmlFor="status"
            className="text-sm font-medium text-gray-700 mb-2"
          >
            Status
          </label>
          <select
            id="status"
            className="border border-gray-300 rounded px-2 py-1 focus:border-violet-600"
          >
            <option>Any</option>
            <option>Completed</option>
            <option>Pending</option>
            <option>In-progress</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="priority"
            className="text-sm font-medium text-gray-700 mb-2"
          >
            Priority
          </label>
          <select
            id="priority"
            className="border border-gray-300 rounded px-2 py-1 focus:border-violet-600"
          >
            <option>Any</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="assignee"
            className="text-sm font-medium text-gray-700 mb-2"
          >
            Tags
          </label>
          <select
            id="assignee"
            className="border border-gray-300 rounded px-2 py-1 focus:border-violet-600"
          >
            <option>Any</option>
            <option>Work</option>
            <option>Personal</option>
            <option>Urgent</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="due"
            className="text-sm font-medium text-gray-700 mb-2"
          >
            Due
          </label>
          <select
            id="due"
            className="border border-gray-300 rounded px-2 py-1 focus:border-violet-600"
          >
            <option>Any</option>
            <option>Today</option>
            <option>This Week</option>
            <option>Overdue</option>
          </select>
        </div>
      </div>
      <button
        className=" text-[1rem] bg-violet-600 shadow-2xs shadow-violet-800 text-white px-4 py-2 rounded hover:bg-violet-700 transition"
        onClick={AddTask}
      >
        + Add Task
      </button>
    </div>
  );
};

export default FilterBar;
