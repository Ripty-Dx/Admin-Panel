import express from "express";
// import connection from "../database/connection";
// const db = connection();

export const registerAdmin = (req, res) => {
  console.log(req.body);
  res.send(req.body);
};
