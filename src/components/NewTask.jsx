import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [newTask, setNewTask] = useState("");

  function handleSetNewTask(event) {
    if (event && event.target) {
      setNewTask(event.target.value);
    }
  }
  function handleClick() {
    if (newTask === "") {
      return;
    }
    onAdd(newTask);
    setNewTask("");
  }
  return (
    <div className="flex text-center gap-4">
      <input
        onChange={handleSetNewTask}
        value={newTask}
        type="text"
        className="w-64 px-2 py-1 roundend-sm bg-stone-200"
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
}
