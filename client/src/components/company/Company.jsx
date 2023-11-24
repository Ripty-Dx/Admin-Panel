import React from "react";
import useFetchCompany from "../../api/company/useFetchCompany";
import "./company.css";
const Company = () => {
  const companyData = useFetchCompany();
  const onEdit = (id) => {
    sessionStorage.setItem("update company id", id);
    window.location.href = "/company/update";
  };
  const onDelete = () => {};

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
                <div className="gap-2 d-flex">
                  <button className="btn btn-primary bg-blue" onClick={() => (window.location.href = "/company/create")}>
                    Add New Company
                  </button>
                  {/* <button className="btn btn-secondary ">Logout</button> */}
                </div>
              </div>
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

                              {/* <td>{ele?.address?.length > 0 ? ele.address : "..."}</td> */}
                              <td className="">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
