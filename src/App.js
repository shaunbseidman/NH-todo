import React, {useState} from 'react';
import './App.css';
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList';
import Tasks from './components/Tasks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tasks />
        <TaskForm />
        <TaskList />
      </header>
    </div>
  );
}

export default App;
