import React, {useState} from 'react';
import '../styles/TaskForm.scss'

export default function TaskForm({addTask}) {
    const [tasks, setTask] = useState({item: "", id: ""})

    function taskTyped(e) {
        setTask({...tasks, item: e.target.value});
    }

    const task = tasks.item

    function taskAdded(e) {
        const taskItem =[]
        e.preventDefault();
        if (task) {
            taskItem.push(tasks)
            taskItem.forEach((item, i) => {
                item.id = i +1
            })
            console.log(taskItem)
            setTask({...tasks, item: ""})
            addTask({...tasks, id: ""})
        }
    }

    return (
        <form className="task" onSubmit={taskAdded}>
            <input className="task-input" value={task} onChange={taskTyped}/>
            <button className="task-submitButton">Submit</button>
        </form>
    )
}
