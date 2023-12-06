import connection from "../database/connection.js";
import bcrypt from "bcrypt";
import createToken from "../token/createToken.js";
const db = connection();
import cookieParser from "cookie-parser";
import express from "express";
const app = express();
app.use(cookieParser());

export const registerAdmin = async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const token = createToken(hashedPassword);
  let sql = `INSERT INTO credentials (id, email, password,token) VALUES (NULL,"${req.body.email}", "${hashedPassword}","${token}")`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err.sqlMessage);
      return res.send({
        message: err.sqlMessage,
        status: 400,
      });
    }
  res.send({
    message: "Admin registered successfully",
    status: 200,
  });
  });
};
