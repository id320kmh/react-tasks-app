import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import './TodoItem.css';
import {changeCompleted, deleteTask} from '../../../actions/actions'

import CheckCircleOutlineTwoToneIcon from '@material-ui/icons/CheckCircleOutlineTwoTone';
import CheckCircleTwoToneIcon from '@material-ui/icons/CheckCircleTwoTone';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';

function TodoItem({id, title, completed}) {

    const [deleteButtonFocused, setdeleteButtonFocused] = useState(false);

    const dispatch = useDispatch();

    const onClickCompletedHandler = () => {
        dispatch(changeCompleted(id));
    }

    const deleteHandler = () => {
        dispatch(deleteTask(id));
    }

    return (
        <li className='todo-list__item' >
            <div className='left-block'>
                {
                    completed ? (
                        <CheckCircleTwoToneIcon onClick={onClickCompletedHandler} />
                    ) : (
                        <CheckCircleOutlineTwoToneIcon onClick={onClickCompletedHandler} />
                    )
                }
               
                <span style={{marginLeft: '10px'}} className={completed ? 'completed_task' : ''}>
                    {title}
                </span>
            </div>
            <div className='right-block'>
                <DeleteForeverTwoToneIcon 
                    color={!deleteButtonFocused ? 'primary' : 'secondary'}
                    className='delete-icon'
                    onMouseEnter={() => setdeleteButtonFocused(true)}
                    onMouseLeave={() => setdeleteButtonFocused(false)}
                    onClick={deleteHandler}
                />
            </div>
        </li>
    )
}

export default TodoItem;