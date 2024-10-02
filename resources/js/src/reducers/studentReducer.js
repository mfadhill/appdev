// src/reducers/studentReducer.js
import { SET_STUDENTS } from "../actions/studentActions";

const initialState = {
    students: [],
};

const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STUDENTS:
            return {
                ...state,
                students: action.payload,
            };
        default:
            return state;
    }
};

export default studentReducer;
