import React from "react";
import { AiFillHome } from "react-icons/ai";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./employees.css";
import { EmployeeValidation } from "../../validation schema/EmployeeValidation";
import TextError from "../../validation schema/TextError";
import useAddNewEmployee from "../../api/useAddNewEmployee";
import { useNavigate } from "react-router-dom";
import useFetchEmployeeData from "../../api/useFetchEmployeeData";
const AddNewEmployee = () => {
  const api = useAddNewEmployee();
  const employeesList = useFetchEmployeeData();
  const navigate = useNavigate();
  const handleBackToHome = () => {
    window.location.href = "/";
  };
  const initialValues = {
    name: "",
    email: "",
    mobile: "",
    dob: "",
    address: "",
    gender: "",
    skills: [],
    company: "",
  };
  console.log(initialValues);
  const onSubmit = async (values) => {
    const emailFilteredData = employeesList.filter((ele) => !ele.email.localeCompare(values.email));
    if (emailFilteredData.length > 0) {
      alert("This email already exists. Try Again!");
    } else {
      const data = await api.mutateAsync(values);
      if (data.status === 200) {
        navigate("/success", {
          state: {
            message: "Employee added successfully",
          },
        });
      } else {
        alert(data.message, "Try Again!");
      }
    }
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={EmployeeValidation}>
        <div className="bg-blue min-vh-100 p-4 d-flex">
          {/* <!-- Left part --> */}
          <div className="col-6 d-flex flex-wrap justify-content-center align-items-center flex-column">
            <button className="btn btn-light back" onClick={handleBackToHome}>
              <AiFillHome style={{ color: "#4070f4" }} />
            </button>
            <div className="d-flex flex-wrap justify-content-center align-items-center flex-column">
              <div>
                <h1 className="heading">Registration</h1>
                <h1 className="heading">Form</h1>
              </div>
            </div>
          </div>
          {/* <!-- right part --> */}
          <div className="w-50 mx-auto my-auto shadow-sm bg-white border rounded-3 px-4 py-3">
            <h3 className="mb-2">
              <span className="underline">Re</span>gistration
            </h3>
            <Form>
              {/* <!-- NAME --> */}
              <div className="mb-3 d-flex flex-column justify-content-center align-items-center w-100">
                <Field type="text" className="form-control shadow-sm" name="name" placeholder="Enter your name" />
                <ErrorMessage component={TextError} name="name" />
              </div>
              {/* <!-- EMAIL --> */}
              <div className="mb-3 d-flex flex-column justify-content-center align-items-center w-100">
                <Field type="email" className="form-control shadow-sm" name="email" placeholder="Enter your email" />
                <ErrorMessage component={TextError} name="email" />
              </div>

              {/* <!-- MOBILE --> */}
              <div className="mb-3 d-flex flex-column justify-content-center align-items-center w-100">
                <Field type="number" className="form-control shadow-sm" name="mobile" placeholder="Enter your mobile" />
                <ErrorMessage component={TextError} name="mobile" />
              </div>

              {/* <!-- DOB --> */}
              <div className="mb-3 d-flex flex-column justify-content-center align-items-center w-100" id="dob">
                <Field type="date" className="form-control shadow-sm" name="dob" placeholder="Enter your date of birth" />
                <ErrorMessage component={TextError} name="dob" />
              </div>

              {/* <!-- ADDRESS --> */}
              <div className="mb-2 d-flex flex-column justify-content-center align-items-center w-100">
                <Field as="textarea" className="form-control shadow-sm" name="address" placeholder="Enter your address" />
                <ErrorMessage component={TextError} name="address" />
              </div>

              {/* <!-- GENDER --> */}
              <div className="mb-2 d-flex flex-column flex-wrap justify-content-start align-items-center w-100">
                <div className="d-flex justify-content-start flex-wrap ps-1 align-items-center w-100">
                  <label className="form-label me-5" style={{ width: "80px" }}>
                    Gender{" "}
                  </label>
                  <div className="form-check">
                    <Field type="radio" className="form-check-input" name="gender" value="Male" id="Male" />
                    <label className="form-check-label me-5" htmlFor="Male">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <Field type="radio" className="form-check-input" name="gender" value="Female" id="Female" />
                    <label className="form-check-label me-5" htmlFor="Female">
                      Female
                    </label>
                  </div>
                  <div className="form-check">
                    <Field type="radio" className="form-check-input" name="gender" value="Others" id="Others" />
                    <label className="form-check-label me-5" htmlFor="Others">
                      Others
                    </label>
                  </div>
                </div>
                <ErrorMessage component={TextError} name="gender" />
              </div>
              {/* <!-- SKILLS --> */}
              <div className="mb-2 d-flex flex-wrap justify-content-start align-items-center w-100">
                <div className="d-flex justify-content-start flex-wrap ps-1 align-items-center w-100">
                  <label className="form-label me-5" style={{ width: "80px" }}>
                    {" "}
                    Skills{" "}
                  </label>
                  <div className="form-check">
                    <Field type="checkbox" className="form-check-input" name="skills" value="Python" id="Python" />
                    <label className="form-check-label me-4" htmlFor="Python">
                      Python
                    </label>
                  </div>
                  <div className="form-check">
                    <Field type="checkbox" className="form-check-input" name="skills" value="Javascript" id="Javascript" />
                    <label className="form-check-label me-4" htmlFor="Javascript">
                      Javascript
                    </label>
                  </div>
                  <div className="form-check">
                    <Field type="checkbox" className="form-check-input" name="skills" value="PHP" id="PHP" />
                    <label className="form-check-label me-4" htmlFor="PHP">
                      PHP
                    </label>
                  </div>
                  <div className="form-check">
                    <Field type="checkbox" className="form-check-input" name="skills" value="Java" id="Java" />
                    <label className="form-check-label me-4" htmlFor="Java">
                      Java
                    </label>
                  </div>
                </div>
                <ErrorMessage component={TextError} name="skills" />
              </div>
              {/* <!-- COMPANY --> */}
              <div className="mb-3 d-flex justify-content-start ps-1 align-items-center w-100">
                <label className="form-label me-5" style={{ width: "100px" }}>
                  {" "}
                  Company{" "}
                </label>
                <Field as="select" className="form-select" name="company">
                  <option disabled value="">
                    Select your company
                  </option>
                  <option value="Microsoft">Microsoft</option>
                  <option value="Google">Google</option>
                  <option value="Amazon">Amazon</option>
                  <option value="Meta">Meta</option>
                  <option value="Dell">Dell</option>
                  <option value="Apple">Apple</option>
                </Field>
                <ErrorMessage component={TextError} name="company" />
              </div>

              <button className="btn bg-blue btn-primary w-100">Submit</button>
            </Form>
          </div>
        </div>
      </Formik>
    </>
  );
};

export default AddNewEmployee;
