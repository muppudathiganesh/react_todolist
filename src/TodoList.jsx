import React, { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (e) => {
    e.preventDefault();

    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Todo List</h2>

        <form onSubmit={handleAddTask} className="flex mb-4">
          <input
            type="text"
            className="flex-grow px-4 py-2 border rounded-l focus:outline-none"
            placeholder="Enter a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600"
          >
            Add
          </button>
        </form>

        <ul>
          {tasks.map((t, index) => (
            <li
              key={index}
              className="flex justify-between items-center mb-2 bg-gray-100 px-4 py-2 rounded"
            >
              <span>{t}</span>
              <button
                onClick={() => handleRemoveTask(index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>

        {tasks.length === 0 && (
          <p className="text-gray-500 text-center mt-4">No tasks yet</p>
        )}
      </div>
    </div>
  );
};

export default TodoList;
