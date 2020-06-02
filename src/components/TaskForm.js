import React, {useState} from 'react';
import '../styles/TaskForm.scss'

export default function TaskForm({addTask}) {
    const [tasks, setTask] = useState({item: "", id: "", completed: false})

    function setTaskId() {
        const taskArray = []
        taskArray.push(tasks)
        taskArray.forEach((item) => {
            item.id = Math.floor(Math.random() * 100);
        })
    }

    function taskTyped(e) {
        setTask({...tasks, item: e.target.value, id:setTaskId});
    }

    const task = tasks.item

    function taskAdded(e) {
        const taskItem =[]
        e.preventDefault();
        if (task) {
            taskItem.push(tasks)
            taskItem.forEach((item) => {
                item.id = Math.floor(Math.random() * 100);
            })
            console.log(tasks)
            setTask({...tasks, item: ""})
            addTask({...tasks})
        }
    }

    return (
        <form className="task" onSubmit={taskAdded}>
            <input className="task-input" value={task} key={task.id} type="text" name="task" onChange={taskTyped}/>
            <button className="task-submitButton">Submit</button>
        </form>
    )
}
