import React, {useState} from 'react';
import '../styles/TaskForm.scss'

export default function TaskForm() {
    const [tasks, setTask] = useState({item: ""})

    function taskSubmitted(e) {
        setTask({...tasks, item: e.target.value});
    }

    function taskAdded(e) {
        e.preventDefault();
        console.log(tasks.item)
        if (tasks.item) {
            setTask({...tasks, item: ""})
            // console.log(setTask({...tasks, item: ""}))
        }
        // setTask({...tasks, task: ""})
    }

    return (
        <form className="task" onSubmit={taskAdded}>
            <input className="task-input" value={tasks.item} onChange={taskSubmitted}/>
            <button className="task-submitButton"/>
        </form>
    )
}
