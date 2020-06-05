import React, {useEffect, useState} from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from '@material-ui/core/styles';

const localTask = "task-list-items";

const useStyles = makeStyles({
  header: {
      padding: '16px',
  },
  search: {
    display: 'flex',
  }
});

function App() {
  const classes = useStyles();
  const [tasks, setTask] = useState([]);
  const [taskNames, setTaskName] = useState([])

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

  function removeTask(id) {
    setTask(tasks.filter(task => task.id !== id));
  }

  function blah() {
    setTask(tasks.filter(task => task.item));
  }
  console.log(blah)

  function completeTask(id) {
    setTask (
      tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task
      })
    );
  }

  return (
    <div className="App">
      <Typography 
        className={classes.header}
        variant="h2">Tasks</Typography>
      <TaskList
        tasks={tasks}
        blah={blah}
        removeTask={removeTask}
        completeTask={completeTask }/>
      <TaskForm addTask={addTask} />
    </div>
  );
}

export default App;
