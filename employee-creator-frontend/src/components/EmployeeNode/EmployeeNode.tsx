import { Link } from "react-router-dom";
import { Employee } from "../../scripts/interfaces";

interface EmployeeNodeProps {
  employee: Employee;
}

const EmployeeNode: React.FC<EmployeeNodeProps> = ({ employee }) => {
  return (
    <>
      <hr />
      <section>
        <h4>
          {employee.firstName} {employee.middleName && employee.middleName}{" "}
          {employee.lastName}
        </h4>
        <p>
          {employee.employmentType} - {employee.duration} months
        </p>
        <p>{employee.email}</p>
      </section>
      <section>
        <Link to={`${employee.id}`}>View</Link>| <a href="">Edit</a> |{" "}
        <a href="">Delete</a>
      </section>
    </>
  );
};

export default EmployeeNode;
