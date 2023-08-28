import { Employee } from "../../pages/HomePage/HomePage";

interface EmployeeNodeProps {
  employee: Employee;
}

const EmployeeNode: React.FC<EmployeeNodeProps> = ({ employee }) => {
  // duration: days round to 1 deciaml
  let duration: number;

  if (employee.finishDate !== null) {
    duration =
      Math.round(
        ((employee.finishDate.getTime() - employee.startDate.getTime()) /
          (1000 * 60 * 60 * 24)) *
          10
      ) / 10;
  } else
    duration =
      Math.round(
        ((Date.now() - employee.startDate.getTime()) / (1000 * 60 * 60 * 24)) *
          10
      ) / 10;

  return (
    <>
      <hr />
      <section>
        <h4>
          {employee.firstName} {employee.middleName && employee.middleName}{" "}
          {employee.lastName}
        </h4>
        <p>employmentType - duration</p>
        <p>email {duration}</p>
      </section>
      <section>
        <a href="">View</a> | <a href="">Edit</a> | <a href="">Delete</a>
      </section>
    </>
  );
};

export default EmployeeNode;
