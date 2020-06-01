import React from 'react';
import '../styles/Tasks.scss'

export default function Tasks({task, completeTask}) {
    function taskCompleted () {
        completeTask(task.id)
        console.log(task.id, 'done')
    }
  return (
    <div>
        <input onClick={taskCompleted}/>
        <li className="Tasks"    style={{
          textDecoration: task.completed ? "line-through" : null
        }}>
            {task.item}
        </li>
    </div>
  );
}
