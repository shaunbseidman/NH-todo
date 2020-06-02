import React from 'react';
import Tasks from './Tasks';
import '../styles/TaskList.scss'
import { List } from "@material-ui/core";

export default function TaskList({tasks, completeTask, removeTask}) {
  return (
    <div>
        <List className="TaskList">
            {tasks.map(task => (
                <Tasks
                key={task.id}
                task={task}
                removeTask={removeTask}
                completeTask={completeTask}
                />
            ))}
        </List>
    </div>
  );
}
