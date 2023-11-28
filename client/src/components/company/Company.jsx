import React, { useEffect, useState } from "react";
import useFetchCompany from "../../api/company/useFetchCompany";
import "./company.css";
import useDeleteCompany from "../../api/company/useDeleteCompany";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import useFilters from "../../api/company filters/useFilters";
const Company = () => {
  const companyList = useFetchCompany();
  // console.log(companyList);
  const [companyData, setCompanyData] = useState(companyList || []);
  const filterApi = useFilters();
  const apiDeleteCompany = useDeleteCompany();
  const navigate = useNavigate();
  const onEdit = (id) => {
    sessionStorage.setItem("update company id", id);
    window.location.href = "/company/update";
  };
  useEffect(() => {
    setCompanyData(companyList);
  }, [companyList]);
  const onDelete = async (id) => {
    const result = await apiDeleteCompany.deleteCompany(id);
    console.log(result);
    navigate("/success", {
      state: {
        message: result.message,
      },
    });
  };
  const initialValues = {
    business_model: "",
    employee_count: "",
  };

  const handleSubmit = async (values) => {
    console.log(values);
    if (values.business_model) {
      const result = await filterApi.filterByBusinessModel(values.business_model);
      if (result.status === 200) {
        setCompanyData(result.result);
      }
      console.log(result);
    }
    if (values.employee_count) {
      const result = await filterApi.filterByEmployeeCount(values.employee_count);
      if (result.status === 200) {
        setCompanyData(result.result);
      }
      console.log(result);
    }
    if (values.employee_count && values.business_model) {
      const result = await filterApi.filterByModelAndCount(values.business_model, values.employee_count);
      if (result.status === 200) {
        setCompanyData(result.result);
      }
      console.log(result);
    }
  };
  const handleReset = () => {
    setCompanyData(companyList);
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        onReset={handleReset}
        // validationSchema={Yup.object({
        //   business_model: Yup.string().when(["employee_count"], {
        //     is: true,
        //     then: Yup.string().required("business_model is required"),
        //     otherwise: Yup.string().notRequired(),
        //   }),
        // })}
      >
        {(formik) => {
          // console.log("fp", formik);
          return (
            <>
              <div className="container-fluid">
                <div className="row">
                  <div className=" min-vh-100  p-4 d-flex">
                    <div className="w-100 shadow-sm bg-white border rounded-3 p-4 min-vh-50">
                      <div className="d-flex gap-3 justify-content-center px-1 align-items-center mb-1">
                        <p className="align-middle m-0 fs-1 text-danger fw-bold">List of Companies </p>
                      </div>
                      <div className="d-flex justify-content-between px-1 align-items-center mb-4">
                        <h3>
                          <span className="underline">All</span> Companies
                        </h3>
                        <Form className="d-flex justify-content-between px-1 align-items-center gap-3">
                          {/* business_model */}
                          <Field as="select" className="form-select" name="business_model">
                            <option value="" disabled>
                              Select Business Model
                            </option>
                            <option value="B2B">B2B</option>
                            <option value="B2C">B2C</option>
                            <option value="D2C">D2C</option>
                          </Field>
                          {/* employee_count */}
                          <Field as="select" className="form-select" name="employee_count">
                            <option value="" disabled>
                              Select Employee Strength
                            </option>
                            <option value="50">10 to 50</option>
                            <option value="100">51 to 100</option>
                            <option value="150">101 to 150</option>
                            <option value="200">151 to 200</option>
                          </Field>
                          <button className="btn btn-info " type="submit" disabled={!formik.isValid}>
                            Search
                          </button>
                          <button className="btn btn-secondary" type="reset">
                            Clear
                          </button>
                        </Form>

                        <div className="gap-2 d-flex">
                          <button className="btn btn-primary bg-blue" onClick={() => (window.location.href = "/company/create")}>
                            Add New Company
                          </button>
                          {/* <button className="btn btn-secondary ">Logout</button> */}
                        </div>
                      </div>
                      {!companyList.length ? (
                        <div className="d-flex justify-content-center align-items-center h-50">
                          <div className="spinner-border " style={{ width: "4rem", height: "4rem" }} role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        </div>
                      ) : (
                        <>
                          {companyData?.length ? (
                            <>
                              <div className="table-responsive border" style={{ maxHeight: "65vh" }}>
                                <table className="table table-striped border">
                                  <thead>
                                    <tr>
                                      <th>ID</th>
                                      {/* <th>Logo</th> */}
                                      <th>Name</th>
                                      <th>Email</th>
                                      <th>Sectors</th>
                                      <th>Headquarters</th>
                                      <th>
                                        Employee<br></br> Count
                                      </th>
                                      <th>
                                        Business <br></br>Model
                                      </th>
                                      <th>
                                        Founding<br></br> Date
                                      </th>
                                      <th>CEO</th>
                                      <th>Address</th>
                                      <th>Actions</th>
                                      <th></th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {companyData?.map((ele, index) => {
                                      const date = new Date(ele?.founding_date);
                                      return (
                                        <tr key={index}>
                                          <td>{ele?.id}</td>
                                          {/* <td>{ele?.logo ?? "..."}</td> */}
                                          <td>{ele?.name ?? "..."}</td>
                                          <td>{ele?.email ?? "..."}</td>
                                          <td>
                                            {ele.Art === "true" ? (
                                              <>
                                                Art<br></br>
                                              </>
                                            ) : (
                                              ""
                                            )}
                                            {ele.Software === "true" ? (
                                              <>
                                                Software
                                                <br></br>
                                              </>
                                            ) : (
                                              ""
                                            )}
                                            {ele.Education === "true" ? (
                                              <>
                                                Education<br></br>
                                              </>
                                            ) : (
                                              ""
                                            )}
                                            {ele.Healthcare === "true" ? (
                                              <>
                                                Healthcare<br></br>
                                              </>
                                            ) : (
                                              ""
                                            )}
                                          </td>
                                          <td>{ele?.headquarters ?? "..."}</td>
                                          <td>{ele?.employee_count ?? "..."}</td>
                                          <td>{ele?.business_model ?? "..."}</td>
                                          <td>{date.toString().slice(3, 15)}</td>
                                          <td>{ele?.ceo ?? "..."}</td>
                                          <td>{ele?.address ?? "..."}</td>
                                          <td className="pe-0">
                                            <button className="btn btn-success me-2" onClick={() => onEdit(ele?.id)}>
                                              Edit
                                            </button>
                                          </td>
                                          <td className="ps-0">
                                            <button className="btn btn-danger" onClick={(e) => onDelete(ele?.id)}>
                                              Delete
                                            </button>
                                          </td>
                                        </tr>
                                      );
                                    })}
                                  </tbody>
                                </table>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="d-flex justify-content-center align-items-center h-50">
                                <p className=""> No data found</p>
                              </div>
                            </>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              ;
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default Company;
