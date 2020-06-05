import React, {useState, useEffect} from 'react';
import {APP_COLORS, APP_FONTS, BREAKPOINTS} from './Styles'
import {Button, ListItem, Typography, Container, IconButton} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from "@material-ui/icons/Close";
import {makeStyles} from '@material-ui/core/styles';
import {TextField} from "@material-ui/core";
import useKeypress from "./Hooks";


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

  export default function Tasks({task, completeTask, removeTask, newText, itemName, blah}) {
    const classes = useStyles();
    const [tasks, setTask] = useState([]);
    const [isInputActive, setIsInputActive] = useState(false);
    const [inputValue, setInputValue] = useState([]);

    const enter = useKeypress("Enter");
    const esc = useKeypress("Escape");

    function taskCompleted () {
        completeTask(task.id)
    }

    function taskRemoved () {
        removeTask(task.id)
    }

    useEffect(() => {
        if (isInputActive) {
          if (enter) {
            newText(inputValue);
            console.log(newText)
            setIsInputActive(false);
          }
          if (esc) {
            setInputValue(tasks.item);
            setIsInputActive(false);
          }
        }
      }, [enter, esc]);

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
            {!isInputActive &&
            <div>
                <Typography
                    className="Tasks"
                    style={{textDecoration: task.completed ? "line-through" : null}}>
                    {itemName}
                </Typography>
                <EditIcon onClick={() => setIsInputActive(true)} />
            </div>
            }
              {isInputActive &&
              <div>
                <TextField
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}/>
              </div>
              }
        </ListItem>
      </Container>
  );
}
