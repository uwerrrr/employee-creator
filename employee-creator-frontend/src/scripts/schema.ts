import * as yup from "yup";

// Validation using yup library
export const schema = yup.object({
  username: yup
    .string()
    .required("Please enter a username")
    .min(6, "Username must be at least 6 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Email must be a valid email address"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "password must be at least 6 characters"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match"),
});
