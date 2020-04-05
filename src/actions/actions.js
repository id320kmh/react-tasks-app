import { ADD_TASK, FETCH_TASKS, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, CHANGE_COMPLETED, DELETE_TASK, CHANGE_FILTER } from "../constants";

export function addTask(task) {
    return {
        type: ADD_TASK,
        payload: task
    }
}

export function fetchTasks() {
    const task_URL = 'https://jsonplaceholder.typicode.com/todos?_limit=4';

    return async dispatch => {

        dispatch({ type: SHOW_LOADER });

        fetch(task_URL)
            .then( response => response.json())
            .then( tasks => {
                dispatch({ type: HIDE_LOADER });
                dispatch({ type: FETCH_TASKS, payload: tasks});
            })
            .catch( err => {
                dispatch({ type: HIDE_LOADER });
                dispatch({ type: SHOW_ALERT, payload: err });
            });
    }
}


export function changeCompleted(id) {
    return {
        type: CHANGE_COMPLETED,
        payload: id
    }
}

export function deleteTask(id) {
    return {
        type: DELETE_TASK,
        payload: id
    }
}


export function changeFilter(name) {
    return {
        type: CHANGE_FILTER,
        payload: name
    }
}
