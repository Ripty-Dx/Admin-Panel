import axios from "axios";

const useUpdateEmployeeDetails = () => {
  return {
    updateEmployeeDetails: async (details, employeeId) => {
      console.log("props", details, employeeId);
      const response = await axios.put(`http://localhost:5000/employee/update/${employeeId}`, details);
    //   console.log(response.data);
      return response.data;
    },
  };
};

export default useUpdateEmployeeDetails;
