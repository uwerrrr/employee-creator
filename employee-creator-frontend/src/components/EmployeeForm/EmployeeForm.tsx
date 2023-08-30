import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { schema } from "../../scripts/schema";
import style from "./EmployeeForm.module.scss";
import { CreateEmployeeDTO, UpdateEmployeeDTO } from "../../scripts/interfaces";

export interface EmployeeFormProps {
  editMode?: boolean;
  employee?: UpdateEmployeeDTO;
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({
  editMode,
  employee,
}: EmployeeFormProps) => {
  employee = {
    address: "123 Main St, City",
    employmentType: "Full-Time",
    email: "johndoe@example1.com",
    contractType: "Permanent",
    finishDate: null,
    firstName: "John1abc",
    hoursPerWeek: 40,
    lastName: "Doe",
    middleName: null,
    phone: "1234567890",
    startDate: new Date(1998, 3, 20),
  };

  const getDefaultVal = (
    fieldName: keyof UpdateEmployeeDTO | keyof CreateEmployeeDTO,
    manualDefault: string | number | null | undefined = undefined
  ) => {
    if (employee) {
      const val = employee[fieldName];
      console.log(val);
      if (val === null) return null;
      else if (typeof val === typeof new Date()) {
        return (val as Date).toISOString().split("T")[0];
      }
      return val;
    } else return manualDefault;
  };

  const getDefaultCheck = (
    fieldName: "employmentType" | "contractType",
    valToCheck:
      | UpdateEmployeeDTO["employmentType"]
      | UpdateEmployeeDTO["contractType"]
  ): boolean => {
    // if (getDefaultVal(fieldName) === valToCheck) {
    //   return true;
    // } else return false;

    return getDefaultVal(fieldName) === valToCheck ? true : false;
  };

  const formSubmit = (data: CreateEmployeeDTO | UpdateEmployeeDTO): void => {
    const formattedData: CreateEmployeeDTO = {
      ...data,
      middleName: data.middleName || null,
      finishDate: data.finishDate || null,
    };

    console.log("Form submitted");
    console.log(formattedData);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <form className={style.form} onSubmit={handleSubmit(formSubmit)}>
      {/* ------- section ------- */}
      <h3 className={style.form__section}>Personal information</h3>
      <div className={style.field}>
        <label htmlFor="firstName">First name</label>
        <input
          id="firstName"
          type="text"
          {...register("firstName")}
          defaultValue={getDefaultVal("firstName") as string}
        />

        {errors.firstName && (
          <p className={style.error}>{errors.firstName.message}</p>
        )}
      </div>

      <div className={style.field}>
        <label htmlFor="middleName">Middle name</label>
        <input
          id="middleName"
          type="text"
          {...register("middleName")}
          defaultValue={getDefaultVal("middleName") as string}
        />
        {errors.middleName && (
          <p className={style.error}>{errors.middleName.message}</p>
        )}
      </div>
      <div className={style.field}>
        <label htmlFor="lastName">Last name</label>
        <input
          id="lastName"
          type="text"
          {...register("lastName")}
          defaultValue={getDefaultVal("lastName") as string}
        />
        {errors.lastName && (
          <p className={style.error}>{errors.lastName.message}</p>
        )}
      </div>

      {/* ------- section ------- */}
      <h3 className={style.form__section}>Contact details</h3>
      <div className={style.field}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register("email")}
          defaultValue={getDefaultVal("email") as string}
        />
        {errors.email && <p className={style.error}>{errors.email.message}</p>}
      </div>

      <div className={style.field}>
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="phone"
          {...register("phone")}
          defaultValue={getDefaultVal("phone") as string}
        />
        {errors.phone && <p className={style.error}>{errors.phone.message}</p>}
      </div>

      <div className={style.field}>
        <label htmlFor="address">Address</label>
        <input
          id="address"
          type="address"
          {...register("address")}
          defaultValue={getDefaultVal("address") as string}
        />
        {errors.address && (
          <p className={style.error}>{errors.address.message}</p>
        )}
      </div>

      {/* ------- section ------- */}
      <h3 className={style.form__section}>Employee status</h3>

      <div className={style.field}>
        <label>What is contract type</label>
        <div className={style.radioGroup}>
          <label>
            <input
              type="radio"
              value="Permanent"
              {...register("contractType")}
              checked={getDefaultCheck("contractType", "Permanent")}
            />
            Permanent
          </label>
          <label>
            <input
              type="radio"
              value="Contract"
              {...register("contractType")}
              checked={getDefaultCheck("contractType", "Contract")}
            />
            Contract
          </label>
        </div>

        {errors.contractType && (
          <p className={style.error}>{errors.contractType.message}</p>
        )}
      </div>

      <div className={style.field}>
        <label htmlFor="startDate">Start Date</label>
        <input
          id="startDate"
          type="date"
          // defaultValue={new Date().toISOString().split("T")[0]}
          {...register("startDate")}
          defaultValue={
            getDefaultVal(
              "startDate",
              new Date().toISOString().split("T")[0]
            ) as string
          }
        />
        {errors.startDate && (
          <p className={style.error}>{errors.startDate.message}</p>
        )}
      </div>

      <div className={style.field}>
        <label htmlFor="finishDate">Finish Date</label>
        <input
          id="finishDate"
          type="date"
          {...register("finishDate")}
          defaultValue={getDefaultVal("finishDate") as string | undefined}
        />
        {errors.finishDate && (
          <p className={style.error}>{errors.finishDate.message}</p>
        )}
      </div>

      <div className={style.field}>
        <label>Employment Type</label>
        <div className={style.radioGroup}>
          <label>
            <input
              type="radio"
              value="Full-Time"
              {...register("employmentType")}
              checked={getDefaultCheck("employmentType", "Full-Time")}
            />
            Full-Time
          </label>
          <label>
            <input
              type="radio"
              value="Part-Time"
              {...register("employmentType")}
              checked={getDefaultCheck("employmentType", "Part-Time")}
            />
            Part-Time
          </label>
        </div>
        {errors.employmentType && (
          <p className={style.error}>{errors.employmentType.message}</p>
        )}
      </div>

      <div className={style.field}>
        <label htmlFor="hoursPerWeek">Hours per week</label>
        <input
          id="hoursPerWeek"
          type="number"
          {...register("hoursPerWeek")}
          defaultValue={getDefaultVal("hoursPerWeek", 0) as number}
        />
        {errors.hoursPerWeek && (
          <p className={style.error}>{errors.hoursPerWeek.message}</p>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default EmployeeForm;