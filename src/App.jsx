import React, { useState } from 'react';
import './App.css';

function App() {
const[tasks, setTasks] = useState([]);
const [newTask, setNewTask] = useState('');

const handleInputChange = (event) => {
  setNewTask(event.target.value);
};
const handleAddTask = () => {
  if (newTask.trim() !== '') {
    setTasks([...tasks,newTask]);
    setNewTask('');
  }
};

const handleDeleteTask = (index) => {
  const updatedTasks = [...tasks];
  updatedTasks.splice(index, 1);
  setTasks(updatedTasks);
};
  return (
    <>
      <div className='container'>

        <h1 className='title'>To Do List</h1>

        <input
        type="text"
        placeholder="Agregar tarea"
        value={newTask}
        onChange={handleInputChange}
        />
        <button onClick={handleAddTask}>Agregar Tarea</button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => handleDeleteTask(index)}>Eliminar</button>
              </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
