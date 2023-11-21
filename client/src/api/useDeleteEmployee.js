import axios from "axios";

const useDeleteEmployee = () => {
  return {
    deleteEmployee: async (id) => {
      const response = await axios.delete(`http://localhost:5000/deleteEmployee/${id}`);
      return response.data;
    },
  };
};

export default useDeleteEmployee;
