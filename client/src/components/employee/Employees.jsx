import React from "react";
import useFetchEmployeeData from "../../api/useFetchEmployeeData";
import useDeleteEmployee from "../../api/useDeleteEmployee";
import { useNavigate } from "react-router-dom";

const Employees = () => {
  const navigate = useNavigate();
  const userData = useFetchEmployeeData();
  const deleteApi = useDeleteEmployee();
  const handleAddNewEmployee = () => {
    window.location.href = "/addNewEmployee ";
  };
  const onEdit = async (id) => {
    sessionStorage.setItem("updateEmployeeId", id);
    window.location.href = "/updateEmployee";
  };
  const onDelete = async (id) => {
    const result = await deleteApi.deleteEmployee(id);
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
      <div className="container-fluid">
        <div className="row">
          <div className=" min-vh-100  p-4 d-flex">
            <div className="w-100 shadow-sm bg-white border rounded-3 p-4 min-vh-50">
              <div className="d-flex gap-3 justify-content-center px-1 align-items-center mb-1">
                <p className="align-middle m-0 fs-1 text-danger fw-bold">List of Employees </p>
                <h3 className="align-middle m-0 text-danger text-capitalize">{sessionStorage.getItem("user name")}</h3>
              </div>
              <div className="d-flex justify-content-between px-1 align-items-center mb-4">
                <h3>
                  <span className="underline">All</span> Users
                </h3>
                <div className="gap-2 d-flex">
                  <button className="btn btn-primary bg-blue" onClick={handleAddNewEmployee}>
                    Add New User
                  </button>
                  {/* <button className="btn btn-secondary ">Logout</button> */}
                </div>
              </div>
              {userData?.length ? (
                <>
                  <div className="table-responsive border" style={{ maxHeight: "65vh" }}>
                    <table className="table table-striped border">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Date of Birth</th>
                          <th>Mobile</th>
                          <th>Address</th>
                          <th>Gender</th>
                          <th>Skills</th>
                          <th>Company Name</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {userData?.map((ele, index) => {
                          const date = new Date(ele?.date_of_birth);
                          return (
                            <tr key={index}>
                              <td>{ele?.id}</td>
                              <td>{ele?.name}</td>
                              <td>{ele?.email}</td>
                              <td>{date.toString().slice(3, 15)}</td>
                              <td>{ele?.mobile}</td>
                              <td>{ele?.address?.length > 0 ? ele.address : "..."}</td>
                              <td>{ele?.gender}</td>
                              <td>
                                {ele.Python === "true" ? (
                                  <>
                                    Python<br></br>
                                  </>
                                ) : (
                                  ""
                                )}
                                {ele.Javascript === "true" ? (
                                  <>
                                    Javascript
                                    <br></br>
                                  </>
                                ) : (
                                  ""
                                )}
                                {ele.PHP === "true" ? (
                                  <>
                                    PHP<br></br>
                                  </>
                                ) : (
                                  ""
                                )}
                                {ele.Java === "true" ? (
                                  <>
                                    Java<br></br>
                                  </>
                                ) : (
                                  ""
                                )}
                              </td>
                              <td>{ele.company_name ?? "..."}</td>
                              <td>
                                <button className="btn btn-success me-2" onClick={() => onEdit(ele?.id)}>
                                  Edit
                                </button>
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
                  <div className="d-flex justify-content-center align-items-center min-vw-50 h-50">
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

export default Employees;
