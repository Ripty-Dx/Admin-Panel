import axios from "axios";

const useAddNewEmployee = (props) => {
  return{
    mutateAsync:async(props)=>{
        console.log("props",props);
        const response=await axios.post("http://localhost:5000/addNewEmployee",props)
        console.log(response);
    }
  }
}

export default useAddNewEmployee