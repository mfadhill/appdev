// src/sagas/studentSaga.js
import { call, put, takeEvery } from "redux-saga/effects";
import {
    ADD_STUDENT,
    DELETE_STUDENT,
    UPDATE_STUDENT,
} from "../actions/studentActions";

let nextId = 1;

export function* addStudentSaga(action) {
    const studentWithId = { ...action.payload, id: nextId++ };
    yield put({ type: ADD_STUDENT, payload: studentWithId });
}

export function* deleteStudentSaga(action) {
    yield put({ type: DELETE_STUDENT, payload: action.payload });
}

export function* updateStudentSaga(action) {
    yield put({ type: UPDATE_STUDENT, payload: action.payload });
}

export function* watchStudentSagas() {
    yield takeEvery("ADD_STUDENT", addStudentSaga);
    yield takeEvery("DELETE_STUDENT", deleteStudentSaga);
    yield takeEvery("UPDATE_STUDENT", updateStudentSaga);
}
