import axios from "axios";

const useDeleteCompany = () => {
  return {
    deleteCompany: async (id) => {
      const response = await axios.delete(`http://localhost:5000/company/delete/${id}`);
      return response.data;
    },
  };
};

export default useDeleteCompany;
