import React from 'react';
import '../styles/Tasks.scss'
import styled from 'styled-components'

const ListItem = styled.li`
    color: red;
 }

`

export default function Tasks({task, completeTask, removeTask}) {
    function taskCompleted () {
        completeTask(task.id)
    }

    function taskRemoved () {
        removeTask(task.id)
    }

  return (
    <div>
        <input onClick={taskCompleted}/>
        <input onClick={taskRemoved}/>
        <ListItem className="Tasks" style={{textDecoration: task.completed ? "line-through" : null}}>
            {task.item}
        </ListItem>
    </div>
  );
}
