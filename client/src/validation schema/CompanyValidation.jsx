import * as Yup from "yup";

const CompanyValidation = Yup.object({
  name: Yup.string().required("This field is required").min(2, "Please enter name more than 1 character").max(100, "Name is too long!"),
  email: Yup.string().email("Invalid email").required("This field is required"),
  ceo: Yup.string().required("This field is required"),
  business_model: Yup.string().required("This field is required"),
  foundingDate: Yup.date().required("This field is required"),
  headquarters: Yup.string().required("This field is required"),
  address: Yup.string().required("This field is required"),
  basic_info: Yup.string(),
  sectors: Yup.array().min(1, "Pick atleast one skill").required("This field is required"),
  employee_count: Yup.number("Only Numbers allowed").min(10, "Minimum Employee Count = 10").required("This field is required"),
});

export default CompanyValidation;
