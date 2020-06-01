import React, {useState} from 'react';
import './App.css';
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTask] = useState([]);

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
