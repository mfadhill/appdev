// src/actions/studentActions.js
export const ADD_STUDENT = "ADD_STUDENT";
export const FETCH_STUDENTS = "FETCH_STUDENTS";
export const DELETE_STUDENT = "DELETE_STUDENT";
export const UPDATE_STUDENT = "UPDATE_STUDENT";
export const SET_STUDENTS = "SET_STUDENTS";

export const addStudent = (studentData) => ({
    type: ADD_STUDENT,
    payload: studentData,
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

export const setStudents = (students) => ({
    type: SET_STUDENTS,
    payload: students,
});
