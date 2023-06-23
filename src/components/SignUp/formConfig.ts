import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    fullName: yup
      .string()
      .required("This field is required")
      .min(2, "Must be more than 2 characters")
      .matches(
        /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/,
        "Must be a valid name"
      ),
    name: yup
      .string()
      .required("This field is required")
      .min(2, "Must be more than 2 characters")
      .matches(/^[a-zA-Z0-9_.-]*$/, "Must contain only letter and integer"),

    password: yup
      .string()
      .required("This field is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must contain 8 characters, one uppercase, one lowercase, one number and one special case character"
      ),
    confirmPwd: yup
      .string()
      .required("This field is required")
      .oneOf([yup.ref("password")], "Passwords does not match"),
  })
  .required();
export type FormData = yup.InferType<typeof schema>;

export const formConfig = {
  defaultValues: { fullName: "", name: "", password: "", confirmPwd: "" },
  resolver: yupResolver(schema),
};
