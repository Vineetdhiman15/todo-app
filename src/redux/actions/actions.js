import * as actionTypes from './actionTypes';

export const addUser = payload => ({
    type: actionTypes.ADD_USER,
    payload: payload
});

export const editUser = payload => ({
    type: actionTypes.EDIT_USER,
    payload: payload
});

export const deleteUser = payload => ({
    type: actionTypes.DELETE_USER,
    payload: payload
});

export const toggleEditUserModal = () => ({
    type: actionTypes.TOGGLE_EDIT_USER_MODAL
});

export const editModalInputValue = payload => ({
    type: actionTypes.EDIT_INPUT_VALUE,
    payload: payload
});

export const addTodo = payload => ({
    type: actionTypes.ADD_TODO,
    payload: payload
});

export const editTodo = payload => ({
    type: actionTypes.EDIT_TODO,
    payload: payload
});

export const deleteTodo = payload => ({
    type: actionTypes.DELETE_TODO,
    payload: payload
});

export const toggleEditTodoModal = () => ({
    type: actionTypes.TOGGLE_EDIT_TODO_MODAL
});

export const editModalInputValueTodo = payload => ({
    type: actionTypes.EDIT_INPUT_VALUE_TODO,
    payload: payload
});
