import React, {useState} from 'react';
import '../styles/SearchForm.scss'
import { Button, TextField } from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import {APP_COLORS} from './Styles'

const useStyles = makeStyles({
    searchForm: {
        width: '50%',
        margin: '0 auto',

    },
    searchButton: {
        backgroundColor: APP_COLORS.orchid20,
    },
  });


export default function TaskForm({searchTask}) {
    const classes = useStyles();
    const task = tasks.item

    function taskAdded(e) {
        const taskItem =[]
        e.preventDefault();
        if (task) {
            taskItem.push(tasks)
            taskItem.forEach((item) => {
                item.id = Math.floor(Math.random() * 100);
            })
            console.log(tasks)
            setTask({...tasks, item: ""})
            addTask({...tasks})
        }
    }

    return (
        <form className={classes.searchForm} onSubmit={taskAdded}>
            <TextField variant="outlined" className="task-input" value={task} key={task.id} type="text" name="task" onChange={taskTyped}/>
            <Button type="submit" className={classes.searchButton}>Search Tasks</Button>
        </form>
    )
}
