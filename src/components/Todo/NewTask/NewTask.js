import React, {useState} from 'react'

import Aux from '../../hoc/Auxiliary';

function NewTask(props) {

    const [taskDesc, setTaskDesc] = useState('');

    const updateTaskDesc = task => {
        setTaskDesc(task.target.value);
    }

    return (
        <div>
            {props.completed === 'pending' ?
                <Aux>
                    <input value={taskDesc} onChange={updateTaskDesc}/>
                    <button onClick={() => props.newTask(taskDesc)}>Submit</button>
                </Aux>
            : null }
        </div>
    )
}


export default NewTask

