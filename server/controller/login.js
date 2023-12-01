import connection from "../database/connection.js";
const db = connection();

export const loginCredentials = (req, res) => {
//   console.log(req.body.email);
//   res.send(req.body);
  let sqlQuery = `select count(id) as count from credentials where email="${req.body.email}" and password="${req.body.password}"`;
  db.query(sqlQuery, (err, result) => {
    if (err) {
      console.log(err.sqlMessage);
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
