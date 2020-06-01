import React, {useState} from 'react';
import '../styles/TaskForm.scss'

export default function TaskForm() {
    const [tasks, setTask] = useState({item: ""})
    console.log(tasks)

    function taskSubmitted(e) {
        console.log(setTask({...tasks, item: e.target.value}))
    }

    return (
        <form className="task">
            <input className="task-input" value={tasks.item} onChange={taskSubmitted}/>
            <button className="task-submitButton"/>
        </form>
    )
}
