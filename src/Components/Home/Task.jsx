import React from 'react';

const Task = ({_id, task}) => {
    return (
        <div className='flex'>
            <input type="checkbox" name="" id={_id} />
            <h2>{task}</h2>
            
        </div>
    );
};

export default Task;