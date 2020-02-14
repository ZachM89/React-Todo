// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import ToDo from './Todo';

// const todo = [
//     {
//         name: 'win',
//         id: 1,
//         finished: false
//     },
//     {
//         name: 'get money',
//         id: 2,
//         finished: false
//     },
//     {
//         name: 'be awesome',
//         id: 3,
//         finished: false
//     }
// ];

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.todo.map(item => (
                <ToDo key={item.id} item={item} toggleItem={props.toggleItem} />
            ))}
            <button className="clear-btn" onClick={props.clearFinished}>
                Clear Finished
            </button>
        </div>
    );
};

export default TodoList;