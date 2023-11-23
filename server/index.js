import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import employeeRoutes from "./routes/employee.js";
import companyRoutes from "./routes/company.js";
import { companyTableCreate } from "./controller/company.js";
import { createEmployeeTable } from "./controller/employee.js";
const app = express();
const port = 5000;

var corsOptions = {
  origin: "http://localhost:5000",
};
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors(corsOptions));
app.use(cors());
// parse requests of content-type - application/json
app.use(express.json());

// CRUD
app.use("/employee", employeeRoutes);
app.use("/company", companyRoutes);

// Models
// app.use(companyTableCreate)
// app.use(createEmployeeTable) // create table employees

// Home page
app.get("/", (req, res) => {
  res.send("node");
});
// listen on port 5000
app.listen(5000, () => {
  console.log("server is running on port 5000");
});
