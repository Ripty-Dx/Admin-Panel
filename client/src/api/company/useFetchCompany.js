import axios from "axios";
import { useEffect, useState } from "react";
const useFetchCompany = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchCompanyList();
  }, []);
  const fetchCompanyList = async () => {
    try {
      const response = await axios.get("http://localhost:5000/company/list");
      //   console.log(response);
      setData(response.data.list);
    } catch (error) {
      console.log(error);
    }
  };
  return data;
};

export default useFetchCompany;
