import { Link } from "react-router-dom";
import { Employee } from "../../scripts/interfaces";
import style from "./EmployeeView.module.scss";
interface EmployeeViewProps {
  employee: Employee;
}

const EmployeeView = ({ employee }: EmployeeViewProps) => {
  console.log(employee);

  const dateOption: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className={style.card}>
      <p className={style.item}>
        <span className={style.label}>Employee ID:</span> {employee.id}
      </p>
      <p className={style.item}>
        <span className={style.label}>First Name:</span> {employee.firstName}
      </p>
      <p className={style.item}>
        <span className={style.label}>Middle Name:</span>{" "}
        {employee.middleName || "N/A"}
      </p>
      <p className={style.item}>
        <span className={style.label}>Last Name:</span> {employee.lastName}
      </p>
      <p className={style.item}>
        <span className={style.label}>Email:</span> {employee.email}
      </p>
      <p className={style.item}>
        <span className={style.label}>Phone:</span> {employee.phone}
      </p>
      <p className={style.item}>
        <span className={style.label}>Address:</span> {employee.address}
      </p>
      <p className={style.item}>
        <span className={style.label}>Employment Type:</span>{" "}
        {employee.employmentType}
      </p>
      <p className={style.item}>
        <span className={style.label}>Start Date:</span>{" "}
        {employee.startDate.toLocaleDateString(undefined, dateOption)}
      </p>
      <p className={style.item}>
        <span className={style.label}>Finish Date:</span>{" "}
        {employee.finishDate ? employee.finishDate.toDateString() : "N/A"}
      </p>
      <p className={style.item}>
        <span className={style.label}>Contract Type:</span>{" "}
        {employee.contractType}
      </p>
      <p className={style.item}>
        <span className={style.label}>Hours Per Week:</span>{" "}
        {employee.hoursPerWeek}
      </p>
      <p className={style.item}>
        <span className={style.label}>Duration:</span> {employee.duration}
      </p>
      <Link to={`edit`} className={style.editLink}>
        Edit
      </Link>{" "}
    </div>
  );
};

export default EmployeeView;
