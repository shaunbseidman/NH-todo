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

  function editTaskName(name) {
    setTaskName(
      tasks.map(task => {
        const oldTaskName = task.item
        if(oldTaskName === name) {
          return {
            ...task,
          }
        }
        return task
      })
    )
  }

  function updateTaskInput(e) {
    setTaskName({...taskNames, item: e.target.value})
  }

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
        editTaskName={editTaskName}
        removeTask={removeTask}
        updateTaskInput={updateTaskInput}
        completeTask={completeTask }/>
      <TaskForm addTask={addTask} />
    </div>
  );
}

export default App;
