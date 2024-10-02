import { call, put, takeEvery } from "redux-saga/effects";
import {
    FETCH_STUDENTS,
    ADD_STUDENT,
    setStudents,
} from "../actions/studentActions";

export function* fetchStudentsSaga() {
    try {
        const data = window.studentData;
        yield put(setStudents(data));
    } catch (error) {
        console.error("Error fetching students:", error);
    }
}

const uploadPhoto = async (file) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(file.name);
        }, 5000);
    });
};

export function* addStudentSaga(action) {
    try {
        const newStudent = {
            id: new Date().getTime(),
            ...action.payload,
        };

        window.studentData.push(newStudent);

        yield put(addStudentSuccess(newStudent));
    } catch (error) {
        yield put(addStudentFailure(error.message));
    }
}

export function* watchStudentSagas() {
    yield takeEvery(FETCH_STUDENTS, fetchStudentsSaga);
    yield takeEvery(ADD_STUDENT, addStudentSaga);
}
