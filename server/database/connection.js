import mysql from "mysql";

const connection = () => {
  const db = mysql
    .createConnection({
      host: "localhost",
      user: "root",
      database: "admin_panel",
      // password
    })
    .connect((err) => {
      if (err) return err.sqlMessage;
      console.log("mysql database connected...");
    });
  return db;
};

export default connection;
