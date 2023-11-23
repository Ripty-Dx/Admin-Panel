import { createEmployeeTable } from "../controller/employee.js";
import connection from "../database/connection.js";
import express from "express";
const db=connection();
const app = express();


app.get("/createEmployeesTable", createEmployeeTable);