import React from "react";
import { AiFillHome } from "react-icons/ai";
import { useLocation } from "react-router-dom";
// import { Player } from "@lottiefiles/react-lottie-player";

const Success = () => {
  const handleBackToHome = () => {
    window.location.href = "/";
  };
  const handleBackToLogin = () => {
    window.location.href = "/login";
  };
  const location = useLocation();
  console.log(location.state);
  setTimeout(handleBackToLogin, 3000);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="bg-blue p-4 d-flex mvh-100 m-0">
            <div className="col-6 d-flex justify-content-center align-items-center flex-column mx-auto">
              <button className="btn btn-light back" onClick={handleBackToHome}>
                <AiFillHome style={{ color: "#4070f4" }} />
              </button>
              <div className="d-flex justify-content-center align-items-center flex-column" style={{ height: "90vh" }}>
                <h1 className="heading">{location.state.status === 200 || 201 ? location.state.message : "Something went wrong. Please try again...."}</h1>
                <img src={require("../../assets/success.gif")} alt="success" />
                {/* <Player src={require("../../assets/successAnimation.json")} className="player" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
