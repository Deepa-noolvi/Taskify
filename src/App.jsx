import React, { useEffect, useState } from 'react'
import Progresstracker from './Components/Progresstracker'
import Taskform from './Components/Taskform'
import Tasklist from './Components/Tasklist'

export default function App() {
  const[tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  });

  const addTask = (task) => {
    setTasks([...tasks,task]);
  }

   const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index ))
  }

  const clearTasks = () => {
    setTasks([]);
  }
  return (
    <div>
      <h1>Taskify</h1>
      <h4><i>The friendly task manager!</i></h4>
      <Taskform addTask={addTask}/>
      <Tasklist tasks = {tasks}
      updateTask={updateTask}
      deleteTask={deleteTask}/>
      <Progresstracker tasks={tasks}/>
      {tasks.length>0 &&
      (<button onClick={clearTasks}className='clear-btn'>Clear ALL Tasks</button>)}
    </div>
  )
}

