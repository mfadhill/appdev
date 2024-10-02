// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import studentReducer from "./reducers/studentReducer";
import { watchStudentSagas } from "./sagas/studentSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        students: studentReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchStudentSagas);

export default store;
