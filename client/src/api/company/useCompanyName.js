import axios from "axios";
import { useEffect, useState } from "react";

const useCompanyName = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getName();
  }, []);
  const getName = async () => {
    const response = await axios.get("http://localhost:5000/company/names");
    setData(response.data.result);
  };
  //   console.log(response.data.result);
  return data;
};

export default useCompanyName;
