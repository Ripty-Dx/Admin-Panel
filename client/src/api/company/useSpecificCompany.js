import axios from "axios";

const useSpecificCompany = () => {
  return {
    specificCompany: async (id) => {
      console.log("id", id);
      const response = await axios.get(`http://localhost:5000/company/list/${id}`);
      console.log(response);
    },
  };
};

export default useSpecificCompany;
