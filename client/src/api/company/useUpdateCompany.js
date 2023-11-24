import axios from "axios";
const useUpdateCompany = () => {
  return {
    updateDetails: async (values, id) => {
      const response = await axios.put(`http://localhost:5000/company/update/${id}`, values);
      console.log(response);
      return response.data;
    },
  };
};

export default useUpdateCompany;
