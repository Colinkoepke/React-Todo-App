import React from 'react'

import './Task.css';

function Task(props) {
    return (
        <div className="Task">
            <p>{props.taskDescription}</p>
            {props.completed === 'pending' ? <button onClick={props.completeTask}>Complete</button> : null }
            <button onClick={() => props.removeTask(props.index)}>Remove</button>
        </div>
    )
}

export default Task;

