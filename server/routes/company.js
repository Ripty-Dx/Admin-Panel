import express from "express";
import { createCompany, deleteCompany, listOfCompanies, selectedCompany, updateCompany } from "../controller/company.js";
const router = express.Router();

// Company CRUD
router.get("/",(Req,res)=>{
    res.send("company")
})
router.get("/list", listOfCompanies);
router.post("/create", createCompany);
router.get("/list/:id", selectedCompany);
router.put("/update/:id", updateCompany);
router.delete("/delete/:id", deleteCompany);

export default router;