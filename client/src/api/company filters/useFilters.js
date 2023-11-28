import axios from "axios";

const useFilters = () => {
  return {
    filterByBusinessModel: async (model) => {
      const response = await axios.get(`http://localhost:5000/company/filter/business_model/${model}`);
      console.log(response.data);
      return response.data;
    },
    filterByEmployeeCount: async (count) => {
      const response = await axios.get(`http://localhost:5000/company/filter/employee_counting/${count}`);
      console.log(response.data);
      return response.data;
    },
    filterByModelAndCount: async (model, count) => {
      const response = await axios.get(`http://localhost:5000/company/filters/${model}/${count}`);
      console.log(response.data);
      return response.data;
    },
  };
};

export default useFilters;
