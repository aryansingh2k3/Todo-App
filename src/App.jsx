import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add Task
  const addTask = () => {
    if (task.trim() === "") {
      alert("Please Enter Task");
      return;
    }

    setTasks([...tasks, task]);
    setTask("");
  };

  // Delete Task
  const deleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter((item, index) => {
      return index !== indexToDelete;
    });

    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>Todo App</h1>

      <h3>Total Tasks: {tasks.length}</h3>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTask}>Add Task</button>
      </div>

      {tasks.length === 0 ? (
        <p>No Tasks Available</p>
      ) : (
        <ul>
          {tasks.map((item, index) => (
            <li key={index}>
              <span>{item}</span>

              <button onClick={() => deleteTask(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;