import * as yup from "yup";

// Validation using yup library
export const schema = yup.object({
  firstName: yup.string().required("Please enter a first name"),
  middleName: yup
    .string()
    .nullable()
    .transform((value, originalValue) =>
      originalValue === "" || originalValue === undefined ? null : value
    ),
  lastName: yup.string().required("Please enter a last name"),
  email: yup
    .string()
    .required("Email is required")
    .email("Email must be a valid email address"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]{8,12}$/, "Phone number must have 8 to 12 digits"),
  address: yup.string().required("Address is required"),
  employmentType: yup
    .mixed<"Full-Time" | "Part-Time">()
    .required("Employment type is required")
    .oneOf(["Full-Time", "Part-Time"], "Invalid contract type"),
  startDate: yup.date().required("Start date is required"),

  finishDate: yup
    .date()
    .nullable()
    .transform((value, originalValue) =>
      originalValue === "" || undefined ? null : value
    ),

  contractType: yup
    .mixed<"Permanent" | "Contract">()
    .required("Contract type is required")
    .oneOf(["Permanent", "Contract"], "Invalid employment type"),
  hoursPerWeek: yup
    .number()
    .required("Hours per week is required")
    .positive("Hours per week must be positive")
    .min(1)
    .integer("Hours per week must be an integer"),
});

// export interface CreateEmployeeDTO extends yup.InferType<typeof schema> {}
