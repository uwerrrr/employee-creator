import { Employee } from "../../scripts/interfaces";

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
    <div>
      <p>Employee ID: {employee.id}</p>
      <p>First Name: {employee.firstName}</p>
      <p>Middle Name: {employee.middleName || "N/A"}</p>
      <p>Last Name: {employee.lastName}</p>
      <p>Email: {employee.email}</p>
      <p>Phone: {employee.phone}</p>
      <p>Address: {employee.address}</p>
      <p>Employment Type: {employee.employmentType}</p>
      <p>
        Start Date:{" "}
        {employee.startDate.toLocaleDateString(undefined, dateOption)}
      </p>
      <p>
        Finish Date:{" "}
        {employee.finishDate ? employee.finishDate.toDateString() : "N/A"}
      </p>
      <p>Contract Type: {employee.contractType}</p>
      <p>Hours Per Week: {employee.hoursPerWeek}</p>
      <p>Duration: {employee.duration}</p>
    </div>
  );
};

export default EmployeeView;
