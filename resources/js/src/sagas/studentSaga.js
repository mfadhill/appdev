// src/sagas/studentSaga.js
import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_STUDENTS, setStudents } from "../actions/studentActions";

export function* fetchStudentsSaga() {
    try {
        const data = window.studentData;
        yield put(setStudents(data));
    } catch (error) {
        console.error("Error fetching students:", error);
    }
}

export function* watchStudentSagas() {
    yield takeEvery(FETCH_STUDENTS, fetchStudentsSaga);
}
