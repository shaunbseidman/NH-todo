import React, {useEffect, useState} from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const localTask = "task-list-items";

function App() {
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(localTask))
    if (storedTasks) {
      setTask(storedTasks)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(localTask, JSON.stringify(tasks))
  }, [tasks]);

  function addTask(task) {
    setTask([task, ...tasks])
  }

  return (
    <div className="App">
      <header className="App-header">
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks}/>
      </header>
    </div>
  );
}

export default App;
