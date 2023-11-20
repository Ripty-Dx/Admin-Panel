import axios from "axios";

const useAddNewEmployee = (props) => {
  return {
    mutateAsync: async (props) => {
      console.log("props", props);
      try {
        const response = await axios.post("http://localhost:5000/addNewEmployee", props);
        console.log(response);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
  };
};

export default useAddNewEmployee;
