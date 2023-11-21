import express from "express";
import mysql from "mysql";
import bodyParser from "body-parser";
import cors from "cors";

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
// fetch all data from table employees
app.get("/useFetchEmployeeData", (req, res) => {
  let sql = "select * from employees";
  // console.log(res);
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    // console.log(result);
    res.status(200).send({ EmployeeList: result });
  });
  // res.status(200).send("node");
});
// TO add new employee in database
app.post("/addNewEmployee", (req, res) => {
  let data = req.body;
  let skillObject = {};
  let skills = ["Python", "Javascript", "PHP", "Java"];
  skills.map((ele) => {
    if (req.body.skills.includes(ele)) {
      skillObject[ele] = "true";
    } else {
      skillObject[ele] = "false";
    }
  });

  let sql = `insert into employees (name,email,mobile,gender,date_of_birth,company_name,address, Python,Javascript,PHP,Java) values("${req.body.name}","${req.body.email}","${req.body.mobile}","${req.body.gender}","${req.body.dob}","${req.body.company}","${req.body.address}", "${skillObject.Python}","${skillObject.Javascript}","${skillObject.PHP}","${skillObject.Java}")`;
  db.query(sql, data, (err, result) => {
    if (err) {
      console.log(err.sqlMessage);
      return res.send({
        message: err.sqlMessage,
        status: 400,
      });
    }
    // console.log(result);
    res.send({
      message: "data inserted successfully",
      status: 200,
    });
  });
});
// to get details of selected employee
app.get("/useFetchEmployeeData/:id", (req, res) => {
  let id = req.params.id;
  let sql = `select * from employees where id=${id}`;
  // console.log(res);
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err.sqlMessage);
      return res.send({
        message: err.sqlMessage,
        status: 400,
      });
    }
    // console.log(result);
    res.send({
      EmployeeList: result,
      status: 200,
    });
  });
});
// to update employee details
app.put("/updateEmployee/:id", (req, res) => {
  console.log("put request");
  let data = req.body;
  let id = req.params.id;
  console.log("data", data, "id", id);
  let skillObject = {};
  let skills = ["Python", "Javascript", "PHP", "Java"];
  skills.map((ele) => {
    if (req.body.skills.includes(ele)) {
      skillObject[ele] = "true";
    } else {
      skillObject[ele] = "false";
    }
  });
  let sql = `UPDATE employees set name="${req.body.name}",email="${req.body.email}", mobile="${req.body.mobile}", gender="${req.body.gender}",date_of_birth="${req.body.dob}", company_name="${req.body.company}",address="${req.body.address}", Python="${skillObject.Python}", PHP="${skillObject.PHP}", Java="${skillObject.Java}", Javascript="${skillObject.Javascript}" where id=${id}`;
  db.query(sql, data, (err, result) => {
    if (err) {
      console.log(err.sqlMessage);
      return res.send({
        message: err.sqlMessage,
        status: 400,
      });
    }
    // console.log(result);
    res.send({
      message: "Data updated successfully",
      status: 200,
    });
  });
});
// to delete employee details
app.delete("/deleteEmployee/:id", (req, res) => {
  const id = req.params.id;
  const sqlQuery = `DELETE FROM employees WHERE id=${id}`;
  db.query(sqlQuery, (err, result) => {
    if (err) {
      console.log(err.sqlMessage);
      return res.send({
        message: err.sqlMessage,
        status: 400,
      });
    }
    res.send({
      message: "Data deleted successfully",
      status: 200,
    });
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
