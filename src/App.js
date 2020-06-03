import React, {useEffect, useState} from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from '@material-ui/core/styles';
import { List, TextField } from "@material-ui/core";

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
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(localTask))
    if (storedTasks) {
      setTask(storedTasks)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(localTask, JSON.stringify(tasks))
  }, [tasks]);

  useEffect(() => {
    const results = tasks.filter(item =>
      item.item.includes(searchTerm)
    );
    console.log(searchTerm, 'results')
    setSearchResults(results);
  }, [searchTerm]);

  function searchTyped(event) {
    setSearchTerm(event.target.value);
  }

  function addTask(task) {
    setTask([task, ...tasks])
  }

  function removeTask(id) {
    setTask(tasks.filter(task => task.id !== id));
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
      <Typography className={classes.header} variant="h2">
        Tasks
        <TextField
        className={classes.search}
        variant="outlined"
        type="text"
        placeholder="Search Your Tasks"
        value={searchTerm}
        onChange={searchTyped}
        />
        <List>
          {searchResults.map(item => (
            <Typography>{item.item}</Typography>
          ))}
        </List>
        <TaskList
        tasks={tasks}
        searchTyped={searchTyped}
        removeTask={removeTask}
        completeTask={completeTask}>
        </TaskList>
        <TaskForm addTask={addTask} />
        </Typography>
    </div>
  );
}

export default App;
