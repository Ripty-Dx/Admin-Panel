import "../node_modules/bootstrap/dist/js/bootstrap";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Employees from "./components/employee/Employees";
import AddNewEmployee from "./components/employee/AddNewEmployee";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/employees" element={<Employees />}></Route>
        <Route path="/addNewEmployee" element={<AddNewEmployee />}></Route>
      </Routes>
    </>
  );
}

export default App;
