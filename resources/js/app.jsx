import React from "react";
import ReactDOM from "react-dom/client"; // Perhatikan penggunaan 'react-dom/client'
import StudentList from "./components/StudentList";


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<StudentList />);
