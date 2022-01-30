import * as types from './actionTypes';

export const loadUsersStart = () => ({
    type: types.LOAD_USERS_START,
});

export const loadUsersSuccess = (users) => ({
    type: types.LOAD_USERS_SUCCESS,
    payload: users,
});

export const loadUsersError = (error) => ({
    type: types.LOAD_USERS_ERROR,
    payload: error,
});

// for creating user
export const createUserStart = (user) => ({
    type: types.CREATE_USER_START,
    payload: user,
});

export const createUserSuccess = () => ({
    type: types.CREATE_USER_SUCCESS,
});

export const createUserError = (error) => ({
    type: types.CREATE_USER_ERROR,
    payload: error,
});

// for delete user
export const deleteUserStart = (userId) => ({
    type: types.DELETE_USER_START,
    payload: userId,
});

export const deleteUserSuccess = (userId) => ({
    type: types.DELETE_USER_SUCCESS,
    payload: userId,
});

export const deleteUserError = (error) => ({
    type: types.DELETE_USER_ERROR,
    payload: error,
});