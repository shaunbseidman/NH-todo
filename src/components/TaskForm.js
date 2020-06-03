import React, {useState} from 'react';
import '../styles/TaskForm.scss'
import { Button, TextField } from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import {APP_COLORS} from './Styles'

const useStyles = makeStyles({
    taskForm: {
        width: '50%',
        margin: '0 auto',
    },
    submitButton: {
        backgroundColor: APP_COLORS.orchid20,
    },
  });

export default function SearchForm({addTask}) {
    const [tasks, setTask] = useState({item: "", id: "", completed: false})
    const classes = useStyles();

    function setTaskId() {
        const taskArray = []
        taskArray.push(tasks)
        taskArray.forEach((item) => {
            item.id = Math.floor(Math.random() * 100);
        })
    }

    function taskTyped(e) {
        setTask({...tasks, item: e.target.value, id:setTaskId});
    }

    const task = tasks.item

    function taskAdded(e) {
        const taskItem =[]
        e.preventDefault();
        if (task) {
            taskItem.push(tasks)
            taskItem.forEach((item) => {
                item.id = Math.floor(Math.random() * 100);
            })
            setTask({...tasks, item: ""})
            addTask({...tasks})
        }
    }

    return (
        <form className={classes.taskForm} onSubmit={taskAdded}>
            <TextField 
            variant="outlined"
            className="task-input"
            value={task}
            key={task.id}
            type="text"
            name="task"
            placeholder="Add new task"
            onChange={taskTyped}/>
            <Button type="submit" className={classes.submitButton}>Submit New Task</Button>
        </form>
    )
}
