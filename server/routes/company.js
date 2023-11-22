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
// INSERT INTO `company` (`id`, `logo`, `name`, `email`, `sectors`, `headquarters`, `employee_count`, `basic_info`, `business_model`, `founding_date`, `cto`, `address`) VALUES (NULL, '', 'VTVL', 'vtvl@gmail.com', 'Software, Technology, Services', 'Singapore', '20', 'Built by crypto native and venture capitalist, VTVL develop a token management platform powered by audited smart contracts for investors, projects and its employees to manage their token from issuance to token cap table management.', 'B2B', '2022-11-30', 'Nisha Foo', 'Singapore,Singapore');