import { useState } from "react";
import AddTodo from "./components/AddTodo";
import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  let [toggle, setToggle] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Add Task Toggle Button
  const toggleBtn = (): void => {
    setToggle((prev) => !prev);
  };


  return (
    <>
      <div className="bg-violet-500 min-h-screen font-poppins ">
        <div className="flex justify-center flex-col items-center max-h-screen bg-white/50 max-w-5xl w-full h-auto mx-auto  rounded-xl shadow-lg px-8 py-3">
          <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <FilterBar AddTask={toggleBtn} />
          <TodoList searchQuery={searchQuery} />
        </div>
        {toggle && <AddTodo toggleBtn={toggleBtn} />}
      </div>
    </>
  );
}

export default App;
