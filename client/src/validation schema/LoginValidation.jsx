import * as Yup from "yup";

const LoginValidation = Yup.object({
  email: Yup.string().required("This Field is required.").email(),
  password: Yup.string().required("This Field is required."),
});

export default LoginValidation;
