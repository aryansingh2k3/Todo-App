import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState("");

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

  // Save Edited Task
  const saveTask = () => {
    const updatedTasks = tasks.map((item, index) => {
      if (index === editIndex) {
        return editTask;
      }
      return item;
    });

    setTasks(updatedTasks);
    setEditIndex(null);
    setEditTask("");
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
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      addTask();
    }
  }}
/>

        <button onClick={addTask}>Add Task</button>
      </div>

      {tasks.length === 0 ? (
        <p>No Tasks Available</p>
      ) : (
        <ul>
          {tasks.map((item, index) => (
            <li key={index}>
              {editIndex === index ? (
                <input
                  type="text"
                  value={editTask}
                  onChange={(e) => setEditTask(e.target.value)}
                />
              ) : (
                <span>{item}</span>
              )}

              <div>
                {editIndex === index ? (
                  <button onClick={saveTask}>Save</button>
                ) : (
                  <button
                    onClick={() => {
                      setEditIndex(index);
                      setEditTask(item);
                    }}
                  >
                    Edit
                  </button>
                )}

                <button onClick={() => deleteTask(index)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;