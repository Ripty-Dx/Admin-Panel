import express from "express";
import { createEmployee, deleteEmployee, listOfEmployees, selectedEmployee, updateEmployee } from "../controller/employee.js";
const router = express.Router();

// Employee CRUD
router.get("/",(req,res)=>{
    res.send("employee")
})
router.get("/list", listOfEmployees);
router.post("/create", createEmployee);
router.get("/list/:id", selectedEmployee);
router.put("/update/:id", updateEmployee);
router.delete("/delete/:id", deleteEmployee);

export default router;
