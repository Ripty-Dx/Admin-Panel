import React from "react";
import { AiFillHome } from "react-icons/ai";
import { Formik, Form, Field, ErrorMessage } from "formik";
import EmployeeValidation from "../../validation schema/EmployeeValidation";
import TextError from "../../validation schema/TextError";
const AddNewEmployee = () => {
  const handleBackToHome = () => {
    window.location.href = "/";
  };
  const initialValues = {
    name: "",
    email: "",
    mobile: "",
    address: "",
    gender: "",
    password: "",
    confirm_password: "",
    hobbies: [],
    preferences: "",
  };
  const onSubmit = () => {};
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
              {/* <!-- PASSWORD --> */}
              <div className="mb-3 d-flex flex-column justify-content-center align-items-center w-100">
                <Field type="password" className="form-control shadow-sm" name="password" placeholder="Enter your password" />
                <ErrorMessage component={TextError} name="password" />
              </div>
              {/* <!-- CONFIRM PASSWORD --> */}
              <div className="mb-3 d-flex flex-column justify-content-center align-items-center w-100">
                <Field type="password" className="form-control shadow-sm" name="confirm_password" placeholder="Confirm password" />
                <ErrorMessage component={TextError} name="confirm_password" />
              </div>
              {/* <!-- MOBILE --> */}
              <div className="mb-3 d-flex flex-column justify-content-center align-items-center w-100">
                <Field type="number" className="form-control shadow-sm" name="mobile" placeholder="Enter your mobile" />
                <ErrorMessage component={TextError} name="mobile" />
              </div>
              {/* <!-- ADDRESS --> */}
              <div className="mb-2 d-flex flex-column justify-content-center align-items-center w-100">
                <Field type="text" className="form-control shadow-sm" name="address" placeholder="Enter your address" />
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
              {/* <!-- HOBBIES --> */}
              <div className="mb-2 d-flex flex-wrap justify-content-start align-items-center w-100">
                <div className="d-flex justify-content-start flex-wrap ps-1 align-items-center w-100">
                  <label className="form-label me-5" style={{ width: "80px" }}>
                    {" "}
                    Hobbies{" "}
                  </label>
                  <div className="form-check">
                    <Field type="checkbox" className="form-check-input" name="hobbies" value="Photography" id="Photography" />
                    <label className="form-check-label me-4" htmlFor="Photography">
                      Photography
                    </label>
                  </div>
                  <div className="form-check">
                    <Field type="checkbox" className="form-check-input" name="hobbies" value="Blogging" id="Blogging" />
                    <label className="form-check-label me-4" htmlFor="Blogging">
                      Blogging
                    </label>
                  </div>
                  <div className="form-check">
                    <Field type="checkbox" className="form-check-input" name="hobbies" value="Yoga" id="Yoga" />
                    <label className="form-check-label me-4" htmlFor="Yoga">
                      Yoga
                    </label>
                  </div>
                  <div className="form-check">
                    <Field type="checkbox" className="form-check-input" name="hobbies" value="Art" id="Art" />
                    <label className="form-check-label me-4" htmlFor="Art">
                      Art
                    </label>
                  </div>
                </div>
                <ErrorMessage component={TextError} name="hobbies" />
              </div>
              {/* <!-- PREFERENCES --> */}
              <div className="mb-3 d-flex justify-content-start ps-1 align-items-center w-100">
                <label className="form-label me-5" style={{ width: "100px" }}>
                  {" "}
                  Preferences{" "}
                </label>
                <select className="form-select" name="preferences">
                  <option selected disabled value="">
                    Select Top Soft Skills
                  </option>
                  <option value="Problem Solving">Problem Solving</option>
                  <option value="Critical Thinking">Critical Thinking</option>
                  <option value="Creativity">Creativity</option>
                </select>
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
