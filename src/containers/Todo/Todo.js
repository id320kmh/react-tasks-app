import React from 'react';

import './Todo.css';
import TodoList from '../../components/todo/todo-list/TodoList';

function Todo() {


    return (
        <div className='todo__row'>
            <div className='todo__column'>
                <h2 className='todo__main-title'>Tasks App</h2>
                <div className='todo__container'>
                    <TodoList key='my-todo-list-1'></TodoList>
                </div>
            </div>
        </div>
    )
}

export default Todo;