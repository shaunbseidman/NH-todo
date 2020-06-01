import React from 'react';
import Tasks from './Tasks';
import '../styles/TaskList.scss'

export default function TaskList({tasks, completeTask}) {
  return (
    <div>
        <ul className="TaskList">
            {tasks.map(task => (
                <Tasks
                key={task.id}
                task={task}
                completeTask={completeTask}
                />
            ))}
        </ul>
    </div>
  );
}
