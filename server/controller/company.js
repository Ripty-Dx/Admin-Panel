import connection from "../database/connection.js";
const db = connection();
let sectors = ["Healthcare", "Education", "Art", "Software"];
let sectorObject = {};
export const companyTableCreate = (req, res) => {
  let sqlQuery =
    "create table company(id int AUTO_INCREMENT, logo varchar(255), name varchar(255) NOT NULL, email varchar(255) NOT NULL , sectors varchar(255) NOT NULL, headquarters varchar(255) NOT NULL, employee_count varchar(255) NOT NULL,basic_info varchar(255) NOT NULL, business_model varchar(255) NOT NULL, founding_date date,cto varchar(255), address varchar(255) NOT NULL,  UNIQUE(email), PRIMARY KEY (id) )";
  db.query(sqlQuery, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.status(200).send("Table company created successfully!");
  });
};
export const listOfCompanies = (req, res) => {
  let sqlQuery = "SELECT * FROM company";
  db.query(sqlQuery, (err, result) => {
    if (err) {
      return res.send({
        message: err.sqlMessage,
        status: 400,
      });
    }
    res.send({
      list: result,
      status: 200,
    });
  });
};
export const createCompany = (req, res) => {
  console.log(req.body);
  sectors.map((ele) => {
    if (req.body.sectors.includes(ele)) {
      sectorObject[ele] = "true";
    } else {
      sectorObject[ele] = "false";
    }
  });
  console.log(sectorObject);
  let sqlQuery = `INSERT INTO company (id, logo, name, email, headquarters, employee_count, basic_info, business_model, founding_date, ceo, address,Art,Software,Education,Healthcare) VALUES (NULL, NULL, "${req.body.name}", "${req.body.email}", "${req.body.headquarters}", "${req.body.employee_count}", "${req.body.basic_info}", "${req.body.business_model}", "${req.body.foundingDate}", "${req.body.ceo}", "${req.body.address}", "${sectorObject.Art}", "${sectorObject.Software}", "${sectorObject.Education}", "${sectorObject.Healthcare}")`;
  console.log(sqlQuery);
  db.query(sqlQuery, (err, result) => {
    if (err) {
      return res.send({
        message: err.sqlMessage,
        status: 400,
      });
    }
    console.log(result);
    res.send({
      message: "Company Registered successfully",
      status: 200,
    });
  });
};
export const selectedCompany = (req, res) => {
  let sqlQuery = `Select * from company where id=${req.params.id}`;
  db.query(sqlQuery, (err, result) => {
    if (err) {
      console.log(err.sqlMessage);
      return res.send({
        message: err.sqlMessage,
        status: 400,
      });
    }
    res.send({
      details: result,
      status: 200,
    });
  });
};
export const updateCompany = (req, res) => {
  sectors.map((ele) => {
    if (req.body.sectors.includes(ele)) {
      sectorObject[ele] = "true";
    } else {
      sectorObject[ele] = "false";
    }
  });
  let sqlQuery = `UPDATE company SET name="${req.body.name}", email="${req.body.email}", headquarters="${req.body.headquarters}", employee_count="${req.body.employee_count}", basic_info="${req.body.basic_info}", business_model="${req.body.business_model}", founding_date="${req.body.foundingDate}", ceo="${req.body.ceo}", address="${req.body.address}", Art="${sectorObject.Art}", Software="${sectorObject.Software}", Education="${sectorObject.Education}", Healthcare="${sectorObject.Healthcare}" WHERE id=${req.params.id}`;
  db.query(sqlQuery, (err, result) => {
    if (err) {
      return res.send({
        message: err.sqlMessage,
        status: 400,
      });
    }
    console.log(result);
    res.send({
      message: "Company Updated successfully",
      status: 200,
    });
  });
};
export const deleteCompany = (req, res) => {
  let sqlQuery = `delete FROM company where id=${req.params.id}`;
  db.query(sqlQuery, (err, result) => {
    if (err) {
      return res.send({
        message: err.sqlMessage,
        status: 400,
      });
    }
    res.send({
      message: "Company deleted successfully",
      status: 200,
    });
  });
};
export const filterCompaniesByModel = (req, res) => {
  console.log(req.params.business_model);
  let sqlQuery = `select * from company where business_model="${req.params.business_model}"`;
  // res.send({ fxn: "filterCompanies", list: req.params });

  db.query(sqlQuery, (err, result) => {
    if (err) {
      return res.send({
        message: err.sqlMessage,
        status: 400,
      });
    }
    console.log(result);
    res.send({
      result: result,
      status: 200,
    });
  });
};
export const filterCompaniesByModelAndCount = (req, res) => {
  console.log(req.params);
  let sqlQuery = `select * from company where business_model="${req.params.business_model}" and employee_count between ${Number(req.params.employee_count) - 50} and ${req.params.employee_count}`;
  // res.send({ fxn: "filterCompanies", list: req.params });

  db.query(sqlQuery, (err, result) => {
    if (err) {
      return res.send({
        message: err.sqlMessage,
        status: 400,
      });
    }
    console.log(result);
    res.send({
      result: result,
      status: 200,
    });
  });
};
export const filterCompaniesByEmployeeCounting = (req, res) => {
  console.log("count", req.params);
  let sqlQuery = `select * from company where employee_count between ${Number(req.params.employee_count) - 50} and ${req.params.employee_count}`;
  console.log(sqlQuery);
  db.query(sqlQuery, (err, result) => {
    if (err) {
      return res.send({
        message: err.sqlMessage,
        status: 400,
      });
    }
    console.log(result);
    res.send({
      result: result,
      status: 200,
    });
  });
};
export const nameOfCompanies=(req,res)=>{
  let sqlQuery="select name from company";
  db.query(sqlQuery, (err, result) => {
    if (err) {
      return res.send({
        message: err.sqlMessage,
        status: 400,
      });
    }
    console.log(result);
    res.send({
      result: result,
      status: 200,
    });
  });
}
