import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { schema } from "../../scripts/schema";
import style from "./EmployeeForm.module.scss";
import {
  CreateEmployeeDTO,
  Employee,
  UpdateEmployeeDTO,
} from "../../scripts/interfaces";
import { useState } from "react";
import {
  createEmployee,
  updateEmployeeById,
} from "../../services/backend-service";
import { useNavigate } from "react-router-dom";

export interface EmployeeFormProps {
  // editMode?: boolean;
  employee?: Employee;
}

interface FormData extends yup.InferType<typeof schema> {
  employmentType: "Full-Time" | "Part-Time";
  contractType: "Permanent" | "Contract";
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({
  employee,
}: EmployeeFormProps) => {
  const getDefaultVal = (
    fieldName: keyof UpdateEmployeeDTO | keyof CreateEmployeeDTO,
    manualDefault: string | number | null | undefined = undefined
  ) => {
    if (employee) {
      const val = employee[fieldName];
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
    return getDefaultVal(fieldName) === valToCheck ? true : false;
  };

  const navigate = useNavigate();

  const [errorMess, setErrorMess] = useState("");

  const formSubmit = async (data: FormData) => {
    // const formattedData = myScripts.convertUndefinedToNull(data);
    const formattedData = { ...data };

    setErrorMess(errorMess ? "" : errorMess);

    if (!employee) {
      const toCreateData: CreateEmployeeDTO = { ...formattedData };

      try {
        await createEmployee(toCreateData);
        console.log("New employee created");
        navigate("/");
      } catch (error) {
        setErrorMess((error as Error).message);
        console.error(error);
      }
    } else {
      const toUpdateData: UpdateEmployeeDTO = { ...formattedData };

      for (const key in formattedData) {
        const formKey = key as keyof FormData;
        // if data is unchanged -> delete it from toUpdateData
        if (employee.hasOwnProperty(formKey)) {
          const employeeKey: keyof Employee = formKey;
          const employeeValue = employee[employeeKey];
          const formattedValue = formattedData[formKey];

          if (
            employeeValue === formattedValue ||
            (employeeValue instanceof Date &&
              formattedValue instanceof Date &&
              employeeValue.getTime() === formattedValue.getTime())
          ) {
            const updateKey: keyof UpdateEmployeeDTO = formKey;
            delete toUpdateData[updateKey];
          }
        }
      }

      try {
        await updateEmployeeById(employee.id, toUpdateData);
        console.log(
          Object.keys(toUpdateData).length === 0
            ? `Employee ${employee.id} is unchanged`
            : `Employee ${employee.id} is updated`
        );
        navigate("/");
      } catch (error) {
        setErrorMess((error as Error).message);
        console.error(error);
      }
    }
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <>
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
          {errors.email && (
            <p className={style.error}>{errors.email.message}</p>
          )}
        </div>

        <div className={style.field}>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="phone"
            {...register("phone")}
            defaultValue={getDefaultVal("phone") as string}
          />
          {errors.phone && (
            <p className={style.error}>{errors.phone.message}</p>
          )}
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
                defaultChecked={getDefaultCheck("contractType", "Permanent")}
              />
              Permanent
            </label>
            <label>
              <input
                type="radio"
                value="Contract"
                {...register("contractType")}
                defaultChecked={getDefaultCheck("contractType", "Contract")}
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
                defaultChecked={getDefaultCheck("employmentType", "Full-Time")}
              />
              Full-Time
            </label>
            <label>
              <input
                type="radio"
                value="Part-Time"
                {...register("employmentType")}
                defaultChecked={getDefaultCheck("employmentType", "Part-Time")}
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
        <div className={style.btn_wrapper}>
          <button type="submit">Submit</button>
        </div>
      </form>
      {errorMess && <p>{errorMess}</p>}
    </>
  );
};

export default EmployeeForm;
