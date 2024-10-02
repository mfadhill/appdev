// src/actions/studentActions.js
export const ADD_STUDENT = "ADD_STUDENT";
export const FETCH_STUDENTS = "FETCH_STUDENTS";
export const DELETE_STUDENT = "DELETE_STUDENT";
export const UPDATE_STUDENT = "UPDATE_STUDENT";

export const addStudent = (student) => ({
    type: ADD_STUDENT,
    payload: student,
});

export const fetchStudents = () => ({
    type: FETCH_STUDENTS,
});

export const deleteStudent = (id) => ({
    type: DELETE_STUDENT,
    payload: id,
});

export const updateStudent = (student) => ({
    type: UPDATE_STUDENT,
    payload: student,
});
