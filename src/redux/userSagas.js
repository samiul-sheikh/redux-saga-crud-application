import * as types from './actionTypes';

import { take, takeEvery, takeLatest, put, all, delay, fork, call, } from 'redux-saga/effects';

import { loadUsersSuccess, loadUsersError, createUserSuccess, createUserError, deleteUserSuccess, deleteUserError, updateUserSuccess, updateUserError } from './actions';
import { loadUsersApi, createUserApi, deleteUserApi, updateUserApi } from './api';

export function* onLoadUsersStartAsync() {
    try {
        const response = yield call(loadUsersApi);
        if (response.status === 200) {
            yield delay(500);
            yield put(loadUsersSuccess(response.data));
        }
    }
    catch (error) {
        yield put(loadUsersError(error.response.data));
    }
}

// create user
export function* onCreateUserStartAsync({ payload }) {
    try {
        const response = yield call(createUserApi, payload);
        if (response.status === 200) {
            yield put(createUserSuccess(response.data));
        }
    }
    catch (error) {
        yield put(createUserError(error.response.data));
    }
}

// update user
function* onUpdateUserStartAsync({ payload: { id, values } }) {
    // console.log("payload", payload);
    try {
        // console.log("payload", id, values);
        const response = yield call(updateUserApi, id, values);
        if (response.status === 200) {
            yield put(updateUserSuccess())
        }
    }
    catch (error) {
        yield put(updateUserError(error.response.data));
    }
}

// delete User
function* onDeleteUserStartAsync(userId) {
    try {
        const response = yield call(deleteUserApi, userId);
        if (response.status === 200) {
            yield delay(500);
            yield put(deleteUserSuccess(userId));
        }
    }
    catch (error) {
        yield put(deleteUserError(error.response.data))
    }
}

export function* onLoadUsers() {
    yield takeEvery(types.LOAD_USERS_START, onLoadUsersStartAsync);
}

// create user
export function* onCreateUser() {
    yield takeLatest(types.CREATE_USER_START, onCreateUserStartAsync);
}

// update user
function* onUpdateUser() {
    yield takeLatest(types.UPDATE_USER_START, onUpdateUserStartAsync);
}

// delete user
function* onDeleteUser() {
    while (true) {
        const { payload: userId } = yield take(types.DELETE_USER_START);
        yield call(onDeleteUserStartAsync, userId);
    }
}

const userSagas = [
    fork(onLoadUsers), fork(onCreateUser), fork(onDeleteUser), fork(onUpdateUser),
];

export default function* rootSaga() {
    yield all([...userSagas])
}