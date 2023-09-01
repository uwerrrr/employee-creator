import * as yup from "yup";

// Validation using yup library
export const schema = yup.object({
  firstName: yup.string().required("Please enter a first name"),
  middleName: yup
    .string()
    .nullable()
    .transform((value, originalValue) => {
      if (
        originalValue !== undefined &&
        originalValue !== "" &&
        originalValue !== null
      ) {
        return value;
      }
      return null;
    }) as yup.Schema<string | null>,

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
    .oneOf(["Full-Time", "Part-Time"], "Invalid contract type")
    .required("Employment type is required"),

  startDate: yup
    .date()
    .required("Start date is required")
    .transform((value, originalValue) =>
      // Ensure that the date is treated as UTC to ignore automatic local time offset
      originalValue ? new Date(originalValue + "Z") : value
    ),

  finishDate: yup
    .date()
    .nullable()
    .when(
      "startDate",
      (startDate, schema) =>
        startDate &&
        schema.min(startDate, "Finish date cannot be before the start date")
    )
    .transform((value, originalValue) => {
      if (
        originalValue !== undefined &&
        originalValue !== "" &&
        originalValue !== null
      ) {
        return value;
      }
      return null;
    })
    .transform((value, originalValue) =>
      // Ensure that the date is treated as UTC to ignore automatic local time offset
      originalValue ? new Date(originalValue + "Z") : value
    ) as yup.Schema<Date | null>,

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
