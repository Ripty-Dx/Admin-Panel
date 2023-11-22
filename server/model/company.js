import { companyTableCreate } from "../controller/company.js";
import connection from "../database/connection.js";
import express from "express";
const db=connection();
const app = express();

app.get("/createCompanyTable", companyTableCreate);