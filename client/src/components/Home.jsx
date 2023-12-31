import React from "react";

const Home = () => {
  const handleClick = (str) => {
    if (str === "employee") {
      window.location.href = "/employee/list";
    }
    if (str === "company") {
      window.location.href = "/company/list";
    }
    if (str === "dataHandling") {
      window.location.href = "/dataHandling";
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="d-flex justify-content-center align-items-center">
            <p className="m-0 fs-1 text-white fw-bold">ADMIN PANEL</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="d-flex justify-content-center align-items-center gap-4">
            <div
              className="bg-white border rounded d-flex justify-content-center align-items-center"
              style={{ height: "150px", width: "250px", cursor: "pointer" }}
              onClick={() => handleClick("employee")}
            >
              <p className="m-0 fs-4">Employee</p>
            </div>
            <div
              className="border bg-white rounded d-flex justify-content-center align-items-center"
              style={{ height: "150px", width: "250px", cursor: "pointer" }}
              onClick={() => handleClick("company")}
            >
              <p className="m-0 fs-4">Company</p>
            </div>
            <div
              className="border bg-white rounded d-flex justify-content-center align-items-center"
              style={{ height: "150px", width: "250px", cursor: "pointer" }}
              onClick={() => handleClick("dataHandling")}
            >
              <p className="m-0 fs-4">Data handling</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
