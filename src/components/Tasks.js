import React from 'react';
import {APP_COLORS, APP_FONTS, BREAKPOINTS} from './Styles'
import {Button, ListItem, Typography, Container, IconButton} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    taskContainer: {
        display: 'flex',
    },
    listItems: {
        fontFamily: APP_FONTS.headerFont,
        [BREAKPOINTS.down('sm')]: {
            display: 'flex',
            flexDirection: 'column-reverse',
        },
    },
    completed: {
        margin: '.5rem',
    },
    delete: {
        backgroundColor: APP_COLORS.coral,
        margin: '.3rem',
        color: APP_COLORS.black,
        [BREAKPOINTS.down('sm')]: {
            display: 'flex',
            margin:'0 auto',
        },
    },
  });

  export default function Tasks({task, completeTask, removeTask}) {
    const classes = useStyles();

    function taskCompleted () {
        completeTask(task.id)
    }

    function taskRemoved () {
        removeTask(task.id)
    }

  return (
      <Container className={classes.taskContainer}>
        <ListItem className={classes.listItems}>
            <div className={classes.buttonContainer}>
                <Button
                    className={classes.completed}
                    onClick={taskCompleted}
                    style={{backgroundColor: task.completed ? "rgba(0, 0, 0, 0.04)" : "#b3e9e9"}}>Complete Task
                </Button>
                <IconButton
                    className={classes.delete}
                    onClick={taskRemoved}>
                    <CloseIcon/>
                </IconButton>
            </div>
            <Typography 
                className="Tasks"
                style={{textDecoration: task.completed ? "line-through" : null}}>
                {task.item}
            </Typography>
        </ListItem>
      </Container>
  );
}
