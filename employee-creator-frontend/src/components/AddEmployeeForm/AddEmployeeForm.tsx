import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { schema } from "../../scripts/schema";
import style from "./AddEmployeeForm.module.scss";
import { CreateEmployeeDTO } from "../../scripts/interfaces";

const AddEmployeeForm = () => {
  const formSubmit = (data: CreateEmployeeDTO): void => {
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
        <input id="firstName" type="text" {...register("firstName")} />
        {errors.firstName && (
          <p className={style.error}>{errors.firstName.message}</p>
        )}
      </div>
      <div className={style.field}>
        <label htmlFor="middleName">Middle name</label>
        <input id="middleName" type="text" {...register("middleName")} />
        {errors.middleName && (
          <p className={style.error}>{errors.middleName.message}</p>
        )}
      </div>
      <div className={style.field}>
        <label htmlFor="lastName">Last name</label>
        <input id="lastName" type="text" {...register("lastName")} />
        {errors.lastName && (
          <p className={style.error}>{errors.lastName.message}</p>
        )}
      </div>

      {/* ------- section ------- */}
      <h3 className={style.form__section}>Contact details</h3>
      <div className={style.field}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" {...register("email")} />
        {errors.email && <p className={style.error}>{errors.email.message}</p>}
      </div>

      <div className={style.field}>
        <label htmlFor="phone">Phone</label>
        <input id="phone" type="phone" {...register("phone")} />
        {errors.phone && <p className={style.error}>{errors.phone.message}</p>}
      </div>

      <div className={style.field}>
        <label htmlFor="address">Address</label>
        <input id="address" type="address" {...register("address")} />
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
            />
            Permanent
          </label>
          <label>
            <input
              type="radio"
              value="Contract"
              {...register("contractType")}
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
          defaultValue={new Date().toISOString().split("T")[0]}
          {...register("startDate")}
        />
        {errors.startDate && (
          <p className={style.error}>{errors.startDate.message}</p>
        )}
      </div>

      <div className={style.field}>
        <label htmlFor="finishDate">Finish Date</label>
        <input id="finishDate" type="date" {...register("finishDate")} />
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
            />
            Full-Time
          </label>
          <label>
            <input
              type="radio"
              value="Part-Time"
              {...register("employmentType")}
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
          defaultValue={0}
          {...register("hoursPerWeek")}
        />
        {errors.hoursPerWeek && (
          <p className={style.error}>{errors.hoursPerWeek.message}</p>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddEmployeeForm;
