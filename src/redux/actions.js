import { CREATE_POST, FETCH_POSTS, HIDE_LOADER, SHOW_LOADER, SHOW_ALERT, HIDE_ALERT } from "./types";

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function showAlert(text) {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: text
        });
        setTimeout( () => {
            dispatch( hideAlert() );
        }, 4000);
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT
    }
}

export function fetchPosts() {
    return async dispatch => {
        dispatch({ type: SHOW_LOADER });
        // fetch('https://jsonplaceholder9.typicode.com/posts?_limit=100')
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=100')
            .then ( response => response.json())
            .then( json => {
                dispatch({ type: HIDE_LOADER });
                dispatch({ type: FETCH_POSTS, payload: json});
            })
            .catch( err => {
                dispatch(showAlert(err.toString()));
                dispatch({ type: HIDE_LOADER });
            });
    }
}