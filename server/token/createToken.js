import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const createToken = (props) => {
  const token = jwt.sign(props, process.env.SECRET_KEY);
//   console.log(token);
  return token;
};

export default createToken;
