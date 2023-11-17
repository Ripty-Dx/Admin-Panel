import express from "express";
import mysql from "mysql";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//  create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "admin_panel",
  // password
});
// to connect
db.connect((err) => {
  if (err) throw err;
  console.log("mysql database connected");
});
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
app.get("/useFetchEmployeeData", (req, res) => {
  let sql = "select * from employees";
  // console.log(res);
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
    res.status(200).send({ "EmployeeList": result });
  });
  // res.status(200).send("node");
});
app.get("/addNewEmployee", (req, res) => {
  let data = {
    name: "Ripty",
    email: "ripty@gmail.com",
    mobile: 1234567890,
    gender: "Female",
    date_of_birth: "1994-11-30",
    company_name: "DELL",
    address: "Mohali",
    skills: '{"1": "Java", "2": "PHP"}',
  };
  let sql = "insert into employees SET ?";
  console.log(res);
  db.query(sql, data, (err, result) => {
    if (err) {
      throw err;
    }
    // console.log(result);
    res.status(200).send("Employee added successfully");
  });
});
app.listen(5000, () => {
  console.log("server is running on port 5000");
});
