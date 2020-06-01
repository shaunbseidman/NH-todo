import React from 'react';
import '../styles/Tasks.scss'

export default function Tasks({task}) {
    console.log(task.item, 'item');
  return (
    <div>
        <li className="Tasks">
            
            {task.item}
        </li>
    </div>
  );
}
