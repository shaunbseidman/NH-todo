import React, {useState} from 'react';
import {APP_COLORS, APP_FONTS, BREAKPOINTS} from './Styles'
import {Button, ListItem, Typography, Container, IconButton} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from "@material-ui/icons/Close";
import {makeStyles} from '@material-ui/core/styles';
import {TextField} from "@material-ui/core";

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

  export default function Tasks({task, completeTask, removeTask, editTaskName}) {
    const classes = useStyles();
    const [newTaskName, SetNewTaskName] = useState(false)
    const [fart, setFart] = useState({item: ""})
    const [tasks, setTask] = useState([]);
    const [taskNames, setTaskName] = useState([])
    console.log(fart, 'blah')


    function taskCompleted () {
        completeTask(task.id)
    }

    function taskRemoved () {
        removeTask(task.id)
    }

    function editTask () {
        editTaskName(task.name)
    }

    function taskTyped(e) {
        setFart({...fart, item: e.target.value});
        console.log(fart.item, 'item')
    }

    function editTaskName(task) {
        setTask([task, ...tasks])
    }

    const taskName = fart.item
    console.log(tasks)

    function renameOldTask(e) {
        e.preventDefault();
        if(taskName) {
            console.log(taskName)
            setFart({...fart, item: ""})
            console.log(addTask)
            addTask({...fart})
        }
        console.log('update')
    }

    function addTask(name) {
        console.log('jdkfd')
        console.log(tasks.map(task=> {
            return task.item
        }))
        setFart(
          tasks.map(task => {
            const oldTaskName = task.item
            if(oldTaskName === name) {
              return {
                ...fart
              }
            }
            return fart
          })
        )
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
            <EditIcon onClick={() => {
                SetNewTaskName(true)
                }}/>
              {newTaskName &&
              <form onSubmit={renameOldTask}>
                <TextField onClick={editTask} onChange={taskTyped}/>
                <Button type="submit">Edit Task Name</Button>
              </form>
              }
        </ListItem>
      </Container>
  );
}
