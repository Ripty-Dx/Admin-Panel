import axios from "axios";

const useFetchSpecificEmployee = () => {
  return {
    fetchSpecificEmployee: async (props) => {
      try {
        const response = await axios.get(`http://localhost:5000/employee/list/${props}`);
        return response.data.EmployeeList[0];
      } catch (error) {
        console.log(error);
      }
    },
  };
};

export default useFetchSpecificEmployee;
