import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import TextError from "../../../validation schema/TextError";
import CompanyValidation from "../../../validation schema/CompanyValidation";
import useCreateCompany from "../../../api/company/useCreateCompany";
import { useNavigate } from "react-router-dom";
import useFetchCompany from "../../../api/company/useFetchCompany";

const NewCompany = () => {
  const companyListApi = useFetchCompany();
  // console.log(companyListApi);
  const createApi = useCreateCompany();
  const navigate = useNavigate();
  const handleBackToHome = () => {
    window.location.href = "/";
  };
  const initialValues = {
    name: "",
    email: "",
    headquarters: "",
    foundingDate: "",
    address: "",
    ceo: "",
    employee_count: "",
    business_model: "",
    sectors: [],
    basic_info: "",
  };
  const onSubmit = async (values) => {
    const emailFilteredData = companyListApi.filter((ele) => !ele.email.localeCompare(values.email));
    // console.log(emailFilteredData);
    if (emailFilteredData.length) {
      alert("This email already exists. Try again with different email");
    } else if (companyListApi.filter((ele) => !ele.name.localeCompare(values.name)).length) {
      alert("This company name already exists. Try again with different name");
    } else {
      const result = await createApi.createCompany(values);
      // console.log(result);
      if (result.status === 200) {
        navigate("/success", {
          state: {
            message: result.message,
          },
        });
      } else {
        alert(`${result.message}.Try again!`);
      }
    }
    // console.log(values);
  };
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={CompanyValidation}>
        <div className="bg-blue min-vh-100 p-3 d-flex">
          {/* <!-- Left part --> */}
          <div className="col-6 d-flex flex-wrap justify-content-center align-items-center flex-column">
            <button className="btn btn-light back" onClick={handleBackToHome}>
              <AiFillHome style={{ color: "#4070f4" }} />
            </button>
            <div className="d-flex flex-wrap justify-content-center align-items-center flex-column">
              <div>
                <h1 className="heading">Company</h1>
                <h1 className="heading ps-5">Registration</h1>
                {/* <h1 className="heading ps-5 ms-3">Form</h1> */}
              </div>
            </div>
          </div>
          {/* <!-- right part --> */}
          <div className="w-50 mx-auto my-auto shadow-sm bg-white border rounded-3 px-4 py-2 pb-3">
            <h3 className="mb-2 mt-0">
              <span className="underline">Re</span>gistration
            </h3>
            <Form>
              {/* <!-- NAME --> */}
              <div className="mb-3 d-flex flex-column justify-content-center align-items-center w-100">
                <Field type="text" className="form-control shadow-sm" name="name" placeholder="Enter company name" />
                <ErrorMessage component={TextError} name="name" />
              </div>
              {/* <!-- EMAIL --> */}
              <div className="mb-3 d-flex flex-column justify-content-center align-items-center w-100">
                <Field type="email" className="form-control shadow-sm" name="email" placeholder="Enter company email" />
                <ErrorMessage component={TextError} name="email" />
              </div>
              {/* <!-- Address --> */}
              <div className="mb-3 d-flex flex-column justify-content-center align-items-center w-100">
                <Field type="text" className="form-control shadow-sm" name="address" placeholder="Enter company Address" />
                <ErrorMessage component={TextError} name="address" />
              </div>
              {/* <!-- CEO --> */}
              <div className="d-flex gap-3">
                <div className="mb-3 d-flex flex-column justify-content-center align-items-center w-50">
                  <Field type="text" className="form-control shadow-sm" name="ceo" placeholder="Enter CEO of company" />
                  <ErrorMessage component={TextError} name="ceo" />
                </div>
                {/* <!-- No. of employees --> */}
                <div className="mb-3 d-flex flex-column justify-content-center align-items-center w-50">
                  <Field type="text" className="form-control shadow-sm" name="employee_count" placeholder="Enter no. of employees" />
                  <ErrorMessage component={TextError} name="employee_count" />
                </div>
              </div>
              {/* <!-- Founding Date --> */}
              <div className="mb-2 d-flex flex-column flex-wrap justify-content-start align-items-center w-100">
                <div className="d-flex justify-content-start flex-wrap ps-1 align-items-center w-100">
                  <label className="form-label me-3" style={{ width: "120px", fontWeight: "600" }}>
                    Founding Date
                  </label>
                  <div className="w-75">
                    <Field type="date" className="form-control px-2 shadow-sm" name="foundingDate" placeholder="Enter company date of birth" />
                  </div>
                </div>
                <ErrorMessage component={TextError} name="foundingDate" />
              </div>
              {/* <!-- BUSINESS MODEL --> */}
              <div className="mb-2 d-flex flex-column flex-wrap justify-content-start align-items-center w-100">
                <div className="d-flex justify-content-start flex-wrap ps-1 align-items-center w-100">
                  <label className="form-label me-3" style={{ width: "120px", fontWeight: "600" }}>
                    Business Model
                  </label>
                  <div className="form-check">
                    <Field type="radio" className="form-check-input" name="business_model" value="B2B" id="B2B" />
                    <label className="form-check-label me-5" htmlFor="B2B">
                      B2B
                    </label>
                  </div>
                  <div className="form-check">
                    <Field type="radio" className="form-check-input" name="business_model" value="B2C" id="B2C" />
                    <label className="form-check-label me-5" htmlFor="B2C">
                      B2C
                    </label>
                  </div>
                  <div className="form-check">
                    <Field type="radio" className="form-check-input" name="business_model" value="D2C" id="D2C" />
                    <label className="form-check-label me-5" htmlFor="D2C">
                      D2C
                    </label>
                  </div>
                </div>
                <ErrorMessage component={TextError} name="business_model" />
              </div>
              {/* <!-- Sectors --> */}
              <div className="mb-2 d-flex flex-wrap justify-content-start align-items-center w-100">
                <div className="d-flex justify-content-start flex-wrap ps-1 align-items-center w-100">
                  <label className="form-label me-3" style={{ width: "120px", fontWeight: "600" }}>
                    Sectors
                  </label>
                  <div className="form-check">
                    <Field type="checkbox" className="form-check-input" name="sectors" value="Software" id="Software" />
                    <label className="form-check-label me-4" htmlFor="Software">
                      Software
                    </label>
                  </div>
                  <div className="form-check">
                    <Field type="checkbox" className="form-check-input" name="sectors" value="Education" id="Education" />
                    <label className="form-check-label me-4" htmlFor="Education">
                      Education
                    </label>
                  </div>
                  <div className="form-check">
                    <Field type="checkbox" className="form-check-input" name="sectors" value="Art" id="Art" />
                    <label className="form-check-label me-4" htmlFor="Art">
                      Art
                    </label>
                  </div>
                  <div className="form-check">
                    <Field type="checkbox" className="form-check-input" name="sectors" value="Healthcare" id="Healthcare" />
                    <label className="form-check-label" htmlFor="Healthcare">
                      Healthcare
                    </label>
                  </div>
                </div>
                <ErrorMessage component={TextError} name="sectors" />
              </div>
              {/* <!-- Headquarters --> */}
              <div className="mb-2 d-flex justify-content-start ps-1 align-items-center w-100">
                <label className="form-label me-5" style={{ width: "100px", fontWeight: "600" }}>
                  Headquarters{" "}
                </label>
                <div className="w-75">
                  <Field as="select" className="form-select" name="headquarters">
                    <option selected disabled value="">
                      Select country
                    </option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                    <option value="UK">UK</option>
                    <option value="Australia">Australia</option>
                    <option value="Europe">Europe</option>
                  </Field>
                  <ErrorMessage component={TextError} name="headquarters" />
                </div>
              </div>

              {/* <!-- BASIC INFO --> */}
              <div className="mb-3 d-flex flex-column justify-content-center align-items-center w-100">
                <Field as="textarea" className="form-control shadow-sm" name="basic_info" placeholder="Enter company basic information" />
                <ErrorMessage component={TextError} name="basic_info" />
              </div>
              <button className="btn bg-blue btn-primary w-100">Submit</button>
            </Form>
          </div>
        </div>
      </Formik>
    </>
  );
};

export default NewCompany;
