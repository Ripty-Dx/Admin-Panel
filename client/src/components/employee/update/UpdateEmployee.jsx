import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EmployeeValidation } from "../../../validation schema/EmployeeValidation";
import { AiFillHome } from "react-icons/ai";
import TextError from "../../../validation schema/TextError";
import useFetchSpecificEmployee from "../../../api/useFetchSpecificEmployee";
import useUpdateEmployeeDetails from "../../../api/useUpdateEmployeeDetails";
import useCompanyName from "../../../api/company/useCompanyName";

const UpdateEmployee = () => {
  const employee = useFetchSpecificEmployee();
  const apiUpdateCall = useUpdateEmployeeDetails();
  const [employeeDetailsState, setEmployeeDetailsState] = useState({});
  const employeeId = sessionStorage.getItem("updateEmployeeId");
  const date = new Date(employeeDetailsState?.date_of_birth);
  const employeeDetails = async () => {
    const response = await employee.fetchSpecificEmployee(employeeId);
    setEmployeeDetailsState(response);
    return response;
  };
  useEffect(() => {
    employeeDetails();
  }, [employeeId]);
  const navigate = useNavigate();
  const handleBackToHome = () => {
    window.location.href = "/";
  };
  const companyName = useCompanyName();

  const initialValues = {
    name: employeeDetailsState?.name,
    email: employeeDetailsState?.email,
    mobile: employeeDetailsState?.mobile,
    dob:
      date.getMonth() < 10
        ? date.getDate() < 10
          ? `${date.getFullYear()}-0${Number(date.getMonth() + 1)}-0${date.getDate()}`
          : `${date.getFullYear()}-0${Number(date.getMonth() + 1)}-${date.getDate()}`
        : date.getDate() < 10
        ? `${date.getFullYear()}-${Number(date.getMonth() + 1)}-0${date.getDate()}`
        : `${date.getFullYear()}-${Number(date.getMonth() + 1)}-${date.getDate()}`,
    address: employeeDetailsState?.address,
    gender: employeeDetailsState?.gender,
    skills: [
      employeeDetailsState?.Java === "true" ? "Java" : null,
      employeeDetailsState?.PHP === "true" ? "PHP" : null,
      employeeDetailsState?.Python === "true" ? "Python" : null,
      employeeDetailsState?.Javascript === "true" ? "Javascript" : null,
    ],
    company: employeeDetailsState?.company_name,
  };
  const onSubmit = async (values) => {
    const result = await apiUpdateCall.updateEmployeeDetails(values, employeeId);
    console.log(result);
    if (result.status === 200) {
      navigate("/success", {
        state: {
          message: result.message,
        },
      });
    } else {
      alert(result.message, "Try Again!");
    }
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={EmployeeValidation} enableReinitialize={true}>
        <div className="bg-blue min-vh-100 p-4 d-flex">
          {/* <!-- Left part --> */}
          <div className="col-6 d-flex flex-wrap justify-content-center align-items-center flex-column">
            <button className="btn btn-light back" onClick={handleBackToHome}>
              <AiFillHome style={{ color: "#4070f4" }} />
            </button>
            <div className="d-flex flex-wrap justify-content-center align-items-center flex-column">
              <div>
                <h1 className="heading">Updating</h1>
                <h1 className="heading">Form</h1>
              </div>
            </div>
          </div>
          {/* <!-- right part --> */}
          <div className="w-50 mx-auto my-auto shadow-sm bg-white border rounded-3 px-4 py-3">
            <h3 className="mb-2">
              <span className="underline">U</span>pdate
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
                  {companyName?.map((ele) => (
                    <option value={ele.name}>{ele.name}</option>
                  ))}
                </Field>
                <ErrorMessage component={TextError} name="company" />
              </div>

              <button className="btn bg-blue btn-primary w-100" >Update</button>
            </Form>
          </div>
        </div>
      </Formik>
    </>
  );
};

export default UpdateEmployee;
