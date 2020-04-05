import { ADD_TASK, FETCH_TASKS, SHOW_LOADER, HIDE_LOADER, CHANGE_COMPLETED, DELETE_TASK } from "../constants";
import { load } from 'redux-localstorage-simple';

let TASKS = load({ namespace: 'tasks' });

if (!TASKS.tasks.tasks.length) {
    TASKS = {
        tasks: {
            tasks: []
        }
    }
} 


const initialState = {
    loading: false,
    alert: { status: false, msg: null },
    tasks: TASKS.tasks.tasks
}


export const tasksReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_TASK:
            return {...state, tasks: state.tasks.concat([payload]) }
        case FETCH_TASKS:
            return {...state, tasks: payload}
        case SHOW_LOADER:
            return {...state, loading: true}
        case HIDE_LOADER:
            return {...state, loading: false}
        case CHANGE_COMPLETED:
            return {...state, tasks: state.tasks.map( task => {
                    if (task.id === payload) {
                        task.completed = !task.completed;
                    }
                    return task;
                }) 
            }
        case DELETE_TASK:
            return {...state, tasks: state.tasks.filter( task => {
                return task.id !== payload;
            })}
        default: return state
    }
}