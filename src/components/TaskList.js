import React from 'react';
import Tasks from './Tasks';
import '../styles/TaskList.scss'

export default function TaskList({tasks}) {
  return (
    <div>
        <ul className="TaskList">
            {tasks.map(task => (
                <Tasks
                key={task.id}
                task={task}
                />
            ))}
        </ul>
    </div>
  );
}
