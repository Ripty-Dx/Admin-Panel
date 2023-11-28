import express from "express";
import {
  createCompany,
  deleteCompany,
  filterCompaniesByEmployeeCounting,
  filterCompaniesByModel,
  filterCompaniesByModelAndCount,
  listOfCompanies,
  selectedCompany,
  updateCompany,
} from "../controller/company.js";
const router = express.Router();

// Company CRUD
router.get("/", (Req, res) => {
  res.send("company");
});
router.get("/list", listOfCompanies);
router.post("/create", createCompany);
router.get("/list/:id", selectedCompany);
router.put("/update/:id", updateCompany);
router.delete("/delete/:id", deleteCompany);
router.get("/filter/business_model/:business_model", filterCompaniesByModel);
router.get("/filters/:business_model/:employee_count", filterCompaniesByModelAndCount);
router.get("/filter/employee_counting/:employee_count", filterCompaniesByEmployeeCounting);

export default router;
