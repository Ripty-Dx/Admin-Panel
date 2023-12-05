import axios from "axios";

const useLogin = () => {
  return {
    sendCredentials: async (props) => {
      console.log(props);
      const response = await axios.post("http://localhost:5000/login", props);
      console.log(response);
    //   return response.data.result.length;
    },
  };
};

export default useLogin;
