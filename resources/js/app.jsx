import React from "react";
import ReactDOM from "react-dom/client";
import StudentList from "./src/components/StudentList.jsx";
import { Provider } from "react-redux";
import store from "./src/store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
        <Provider store={store}>
            <StudentList />
        </Provider>
    </>
);
