import React, {useEffect, useState} from 'react';
import Tasks from './Tasks';
import {TextField} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  header: {
      padding: '16px',
  },
  search: {
    display: 'flex',
    marginBottom: '1rem',
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  tasks: {
    display: 'flex',
    flexDirection: 'column-reverse',
  }
});

export default function TaskList({tasks, completeTask, removeTask, editTaskName, updateTaskInput}) {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    setFilteredTasks(
      tasks.filter(task =>
        task.item.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, tasks]);

  return (
    <div>
      <TextField
        type="text"
        className={classes.searchForm}
        variant="outlined"
        placeholder="Search Your Tasks"
        onChange={e => setSearch(e.target.value)}
      />
      <div className={classes.tasks}>

      {filteredTasks.map(task => (
        <Tasks
          key={task.id}
          task={task}
          updateTaskInput={updateTaskInput}
          editTaskName={editTaskName}
          removeTask={removeTask}
          completeTask={completeTask} />
      ))}
      </div>
    </div>
  );
}
