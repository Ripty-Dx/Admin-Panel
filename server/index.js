import express from "express";
import mysql from "mysql";
import bodyParser from "body-parser";
import cors from "cors";
import employeeRoutes from "./routes/employee.js";
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
// Employee CRUD
app.use("/employee", employeeRoutes);

// create table employees
app.get("/createEmployeesTable", (req, res) => {
  let sqlQuery =
    "create table employees(id int AUTO_INCREMENT, name varchar(255) NOT NULL, email varchar(255) NOT NULL , mobile int NOT NULL, gender varchar(255) NOT NULL, date_of_birth DATE NOT NULL, company_name varchar(255) NOT NULL,skill1 varchar(255), skill2 varchar(255), skill3 varchar(255),skill4 varchar(255), address varchar(255) NOT NULL,  UNIQUE(email), PRIMARY KEY (id) )";
  db.query(sqlQuery, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.status(200).send("Table created successfully!");
  });
});

// Home page
app.get("/", (req, res) => {
  res.send("node");
});
// listen on port 5000
app.listen(5000, () => {
  console.log("server is running on port 5000");
});
