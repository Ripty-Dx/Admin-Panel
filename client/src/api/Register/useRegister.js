import axios from "axios";

const useRegister = () => {
  return {
    register: async (props) => {
      const response = await axios.post("http://localhost:5000/register", props);
      console.log(response.data);
      return response.data;
    },
  };
};

export default useRegister;
