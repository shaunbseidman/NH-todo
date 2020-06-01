import React from 'react';
import '../styles/TaskForm.scss'

export default function TaskForm() {
    return (
        <form className="task">
            <input className="task-input"/>
            <button className="task-submitButton"/>
        </form>
    )
}
