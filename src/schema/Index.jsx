import * as Yup from "yup";

export const LoginSchema = Yup.object({
  manager_email: Yup.string()
    .email("Invalid email address")
    .required("Email Is Required"),
  manager_password: Yup.string()
    .required("Password is required")
    // .min(8, "Password must be at least 8 characters long")
    // .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    // .matches(/\d/, "Password must contain at least one number"),
});
