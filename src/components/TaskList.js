import React, { useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Setup React', completed: true },
    { id: 2, title: 'Learn State', completed: false }
  ]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (!input) return;
    setTasks([...tasks, { id: Date.now(), title: input, completed: false }]);
    setInput('');
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">My Tasks</h2>
      <div className="flex gap-2 mb-4">
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 flex-1 rounded" 
          placeholder="New task..."
        />
        <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className="border-b py-2 flex justify-between">
            <span className={task.completed ? "line-through" : ""}>{task.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;