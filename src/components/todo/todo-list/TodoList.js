import React, {useState, useEffect} from 'react';
// import FlipMove from 'react-flip-move';
import {connect, useSelector} from 'react-redux';
import {addTask, fetchTasks, changeFilter} from '../../../actions/actions';
import './TodoList.css';
import TodoItem from '../todo-item/TodoItem';
import PlaylistAddTwoToneIcon from '@material-ui/icons/PlaylistAddTwoTone';
import Loader from './Loader/Loader';
import Alert from './Alert/Alert';

function TodoList({addTask, fetchTasks, tasks, activeFilter, changeFilter}) {

    const [addButtonFocused, setAddButtonFocused] = useState(false);
    const [title, setTitle] = useState('');
    const [filteredTasks, setFilteredTasks] = useState(tasks);
    const loading = useSelector( state => state.tasks.loading);
    const alert = useSelector( state => state.tasks.alert);

    useEffect( () => {
        setFilteredTasks(filterTasks(tasks, activeFilter))
    }, [activeFilter, tasks]);

    const inputChangeHandler = e => {
        setTitle( e.target.value );
    }

    const inputKeyPressHandler = ({ key, target }) => {
        if ( key === 'Enter' && target.value.length > 3) {
            const newTask = {
                id: (new Date()).getTime(),
                title: target.value,
                completed: false
            }
            addTask(newTask);
            setTitle('');
        }
    }
    
    const changeFilterHandler = ({target}) => {
        const filterLinks =  document.getElementsByClassName('filter-link');
        for(let elem of filterLinks) {
            elem.classList.remove('filter-active');
        }
        target.classList.add('filter-active');
        changeFilter(target.name);
    }

    const filterTasks = (tasks, active) => {
        switch (active) {
            case 'completed':
                return tasks.filter( task => task.completed );
            case 'uncompleted':
                return tasks.filter( task => !task.completed );
            default: return tasks
        }
    }

    const getAmountActiveTasks = tasks.filter( task => !task.completed ).length;

    return (
        <>
            { 
                alert.status 
                    ? ( <Alert msg={alert.msg}></Alert> ) 
                    : ( 
                        <ul className='todo-list__row'>
                            <li className='todo-list__add-title'>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span 
                                            className="input-group-text" 
                                            id="basic-addon1"
                                            style={{margin: 0}}
                                        >
                                            <PlaylistAddTwoToneIcon 
                                                onMouseEnter={() => setAddButtonFocused(true)}
                                                onMouseLeave={() => setAddButtonFocused(false)}
                                                color={!addButtonFocused ? 'primary' : 'action'}
                                            ></PlaylistAddTwoToneIcon>
                                        </span>
                                    </div>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Click to add new task" 
                                        aria-label="Click to add new task" aria-describedby="basic-addon1"
                                        value={title}
                                        name='title'
                                        onChange={inputChangeHandler}
                                        onKeyPress={inputKeyPressHandler}
                                    />
                                </div>
                            </li>
                            { loading && ( <Loader></Loader> ) }
                            {
                                filteredTasks.length===0 && (
                                    <li style={{padding: '30px 0'}}><h2>Task List is empty!</h2></li>
                                )
                            }
                            {
                                filteredTasks.map( task => {
                                    return (
                                        // <FlipMove duration={500} easing='ease-out'>
                                            <TodoItem 
                                                key={task.id} 
                                                id={task.id}
                                                title={task.title}
                                                completed={task.completed}
                                            ></TodoItem>
                                        // </FlipMove>
                                    )
                                })
                            }
                            <li className='todo-list__footer'>
                                <div className='todo-list__left-column'>
                                    <span>You have <strong>{ getAmountActiveTasks }</strong> uncompleted task(s)! </span>
                                </div>
                                <div className='todo-list__right-column'>
                                    <a 
                                        className='filter-link filter-active' 
                                        name='all' 
                                        onClick={changeFilterHandler}
                                    >all</a>
                                    <a 
                                        className='filter-link' 
                                        name='completed' 
                                        onClick={changeFilterHandler}
                                    >completed</a>
                                    <a 
                                        className='filter-link' 
                                        name='uncompleted' 
                                        onClick={changeFilterHandler}
                                    >uncompleted</a>
                                </div>
                            </li>
                        </ul>
                    )
            }
        </>
    )
}

const mapDispatchToProps = {
    addTask,
    fetchTasks,
    changeFilter
}

const mapStateToProps = state => ({
    tasks: state.tasks.tasks,
    activeFilter: state.filters.activeFilter
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);