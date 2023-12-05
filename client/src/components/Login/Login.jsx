import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import TextError from "../../validation schema/TextError";
import LoginValidation from "../../validation schema/LoginValidation";
import useLogin from "../../api/login/useLogin";

const Login = () => {
  const loginApi = useLogin();
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = async (values, actions) => {
    // console.log(values);
    if (values.email && values.password) {
      const result = await loginApi.sendCredentials(values);
      console.log(result);
      // window.location.href = "/";
      if (result.status === 200) {
        window.location.href = "/";
      } else {
        alert(`${result.message}.Try again!`);
      }
    } else {
      alert("Invalid Credentials");
    }
    actions.resetForm();
  };
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={LoginValidation}>
        <div className="bg-blue min-vh-100 min-vw-100 d-flex justify-content-center align-items-center">
          {/* left part */}
          <div className="col-6 d-flex flex-wrap justify-content-center align-items-center flex-column">
            <div className="d-flex flex-wrap justify-content-center align-items-center flex-column">
              <div>
                <h1 className="heading">Admin</h1>
                <h1 className="heading ps-5">Portal</h1>
              </div>
            </div>
          </div>
          {/* right part */}
          <div className="col-4 mx-auto my-auto shadow-sm bg-white border rounded-3 p-4 py-5">
            <h3 className="mb-4">
              <span className="underline">Si</span>gn in
            </h3>
            <Form>
              {/* <!-- EMAIL --> */}
              <div className="mb-3 d-flex justify-content-center flex-column align-items-center w-100">
                <Field type="email" className="form-control shadow-sm" name="email" placeholder="Enter your email" />
                <ErrorMessage component={TextError} name="email" />
              </div>
              {/* <!-- PASSWORD --> */}
              <div className="mb-3 d-flex flex-column justify-content-center align-items-center w-100">
                <Field type="password" className="form-control shadow-sm" name="password" placeholder="Enter your password" />
                <ErrorMessage component={TextError} name="password" />
              </div>

              <button className="btn bg-blue btn-primary w-100 mb-3" type="submit">
                Submit
              </button>
              <div className="mb-3 d-flex justify-content-center align-items-center w-100">
                <a href="/register" className="text-center">
                  New User? Sign up here!
                </a>
              </div>
            </Form>
          </div>
        </div>
      </Formik>
    </>
  );
};

export default Login;
