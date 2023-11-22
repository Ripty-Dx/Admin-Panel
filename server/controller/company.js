import connection from "../database/connection.js";
const db = connection();
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
  db.query(sqlQuery,(err,result)=>{
    if (err) {
      return res.send({
        message:err.sqlMessage,
        status:400
      })
    }
    res.send({
      list:result,
      status:200
    })
  })
};
export const createCompany = () => {};
export const selectedCompany = () => {};
export const updateCompany = () => {};
export const deleteCompany = () => {};
