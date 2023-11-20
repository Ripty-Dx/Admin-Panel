import * as Yup from "yup";

export const EmployeeValidation = Yup.object({
  name: Yup.string().required("This field is required").min(2, "Please enter name more than 1 character").max(40, "Name is too long!"),
  email: Yup.string().email("Invalid email").required("This field is required"),
  gender: Yup.string().required("This field is required"),
  dob: Yup.date().required("This field is required"),
  company: Yup.string().required("This field is required"),
  address: Yup.string().required("This field is required"),
  skills: Yup.array().min(1, "Pick atleast one skill").required("This field is required"),
  mobile: Yup.number("Only Numbers allowed").min(6000000000, "Mobile number must be of 10 digits and valid").max(9999999999, "Invalid number"),
});
