import dotenv from "dotenv";
import connection from "../database/connection.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
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
  // console.log(req.body);
  let sqlQuery = `Select * from credentials WHERE email="${req.body.email}"`;
  db.query(sqlQuery, async (err, result) => {
    if (err) {
      console.log("error");
      return res.send({
        message: err.sqlMessage,
        status: 400,
      });
    }
    // console.log(result);
    if (result.length) {
      const isMatch = await bcrypt.compare(req.body.password, result[0].password);
      console.log(isMatch);
      if (isMatch) {
        // console.log("matched");
        res.send({
          status: 200,
          message: "logged in successfully",
        });
      } else {
        return res.send({
          message: "Invalid credentials",
          status: 400,
        });
      }
    } else {
      return res.send({
        message: "Invalid credentials",
        status: 400,
      });
    }
  });
  // res.send("hh");
};
