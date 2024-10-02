// src/reducers/studentReducer.js
const initialState = {
    students: [],
};

const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_STUDENT":
            return {
                ...state,
                students: [...state.students, action.payload],
            };
        case "DELETE_STUDENT":
            return {
                ...state,
                students: state.students.filter(
                    (student) => student.id !== action.payload
                ),
            };

        default:
            return state;
    }
};

export default studentReducer;
