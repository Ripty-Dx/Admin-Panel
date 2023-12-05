import connection from "../database/connection.js";
import bcrypt from "bcrypt";
const db = connection();

export const registerAdmin = async (req, res) => {
  console.log(req.body);
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  console.log(hashedPassword);
  let sql = `INSERT INTO credentials (id, email, password) VALUES (NULL,"${req.body.email}", "${hashedPassword}")`;
  // console.log(db);
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
