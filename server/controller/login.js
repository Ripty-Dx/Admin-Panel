import dotenv from "dotenv";
import connection from "../database/connection.js";
import jwt from "jsonwebtoken";
dotenv.config();
const db = connection();
const createToken = async (values) => {
  const token = await jwt.sign(values, process.env.SECRET_KEY);
  console.log(token);
  const verify = await jwt.verify(token, process.env.SECRET_KEY);
  console.log(verify);
};

export const loginCredentials = (req, res) => {
  // createToken(req.body);
  // console.log( process.env.SECRET_KEY);
  let sqlQuery = `select count(id) as count from credentials where email="${req.body.email}" and password="${req.body.password}"`;
  // db.query(sqlQuery, (err, result) => {
  //   if (err) {
  //     console.log(err.sqlMessage);
  //     return res.send({
  //       message: err.sqlMessage,
  //       status: 400,
  //     });
  //   }
  //   console.log(result);
  //   res.send({
  //     result: result,
  //     status: 200,
  //   });
  // });
  res.send("hh");
};
