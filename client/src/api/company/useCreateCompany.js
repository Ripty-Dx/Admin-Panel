import axios from "axios";

const useCreateCompany = () => {
  return {
    createCompany: async (props) => {
      console.log("props", props);
      try {
        const response = await axios.post("http://localhost:5000/company/create", props);
        console.log(response);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
  };
};

export default useCreateCompany;
