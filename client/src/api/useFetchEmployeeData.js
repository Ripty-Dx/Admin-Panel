import axios from "axios";
import { useEffect, useState } from "react";
const useFetchEmployeeData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/useFetchEmployeeData");
    //   console.log(response);
      setData(response.data.EmployeeList);
    } catch (error) {
      console.log(error);
    }
  };
  return data;
};

export default useFetchEmployeeData;
