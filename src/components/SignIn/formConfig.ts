import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
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
  })
  .required();
export type FormData = yup.InferType<typeof schema>;

export const formConfig = {
  defaultValues: { name: "", password: "" },
  resolver: yupResolver(schema),
};
