import express from "express";
import mysql from "mysql";
import bodyParser from "body-parser";

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
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
    "create table employees(id int AUTO_INCREMENT, name varchar(255) NOT NULL, email varchar(255) NOT NULL , mobile int NOT NULL, gender varchar(255) NOT NULL, date_of_birth DATE NOT NULL, company_name varchar(255) NOT NULL,skills JSON, address varchar(255) NOT NULL,  UNIQUE(email), PRIMARY KEY (id) )";
  db.query(sqlQuery, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.status(200).send("Table created successfully!");
  });
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
