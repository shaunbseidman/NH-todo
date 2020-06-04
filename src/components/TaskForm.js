import React, {useState} from 'react';
import { Button, TextField } from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import {APP_COLORS} from './Styles'

const useStyles = makeStyles({
    taskForm: {
        width: '50%',
        marginTop: '1rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        flexDirection: 'column',
    },
    submitButton: {
        backgroundColor: APP_COLORS.orchid20,
        width: '50%',
        marginTop: '1rem',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
  });

export default function TaskForm({addTask}) {
    const [tasks, setTask] = useState({item: "", id: "", completed: false})
    const classes = useStyles();

    function taskTyped(e) {
        setTask({...tasks, item: e.target.value});
    }

    const task = tasks.item

    function taskAdded(e) {
        const taskItem =[]
        e.preventDefault();
        if (task) {
            taskItem.push(tasks)
            taskItem.forEach((item, i) => {
                item.id = Math.floor(Math.random() * 1000);
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
