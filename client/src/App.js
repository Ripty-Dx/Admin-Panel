import "../node_modules/bootstrap/dist/js/bootstrap";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Employees from "./components/employee/Employees";
import Success from "./components/success/Success";
import AddNewEmployee from "./components/employee/add new employee/AddNewEmployee";
import UpdateEmployee from "./components/employee/update/UpdateEmployee";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/employees" element={<Employees />}></Route>
        <Route path="/addNewEmployee" element={<AddNewEmployee />}></Route>
        <Route path="/success" element={<Success />}></Route>
        <Route path="/updateEmployee" element={<UpdateEmployee /> }></Route>
      </Routes>
    </>
  );
}

export default App;
