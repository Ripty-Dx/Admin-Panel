import React from "react";

const TextError = (props) => {
  //   console.log(props);
  return <div className="text-danger w-100 ps-1 form-error m-0 fs-6">{props.children}</div>;
};

export default TextError;
