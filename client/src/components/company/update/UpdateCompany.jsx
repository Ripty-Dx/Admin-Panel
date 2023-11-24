import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import TextError from "../../../validation schema/TextError";
import { AiFillHome } from "react-icons/ai";
import CompanyValidation from "../../../validation schema/CompanyValidation";
import useSpecificCompany from "../../../api/company/useSpecificCompany";
import useUpdateCompany from "../../../api/company/useUpdateCompany";
import { useNavigate } from "react-router-dom";

const UpdateCompany = () => {
  const navigate = useNavigate();
  const companyId = sessionStorage.getItem("update company id");
  const [companyData, setCompanyData] = useState([]);
  const apiCallSpecificCompany = useSpecificCompany();
  const apiUpdateCompany = useUpdateCompany();
  const date = new Date(companyData?.founding_date);
  const companyDetails = async (companyId) => {
    const result = await apiCallSpecificCompany.specificCompany(companyId);
    setCompanyData(result);
  };
  const handleBackToHome = () => {
    window.location.href = "/";
  };
  useEffect(() => {
    companyDetails(companyId);
  }, [companyId]);
  //   console.log(companyData);
  const initialValues = {
    name: companyData?.name,
    email: companyData?.email,
    address: companyData?.address,
    ceo: companyData?.ceo,
    employee_count: companyData?.employee_count,
    business_model: companyData?.business_model,
    headquarters: companyData?.headquarters,
    basic_info: companyData?.basic_info,
    foundingDate:
      date.getMonth() < 10
        ? date.getDate() < 10
          ? `${date.getFullYear()}-0${Number(date.getMonth() + 1)}-0${date.getDate()}`
          : `${date.getFullYear()}-0${Number(date.getMonth() + 1)}-${date.getDate()}`
        : date.getDate() < 10
        ? `${date.getFullYear()}-${Number(date.getMonth() + 1)}-0${date.getDate()}`
        : `${date.getFullYear()}-${Number(date.getMonth() + 1)}-${date.getDate()}`,
    sectors: [
      companyData?.Art === "true" ? "Art" : null,
      companyData?.Software === "true" ? "Software" : null,
      companyData?.Education === "true" ? "Education" : null,
      companyData?.Healthcare === "true" ? "Healthcare" : null,
    ],
    // name: companyData?.name,
  };
  const onSubmit = async (values) => {
    console.log(values);
    const result = await apiUpdateCompany.updateDetails(values, companyId);
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
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={CompanyValidation} enableReinitialize={true}>
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

export default UpdateCompany;
