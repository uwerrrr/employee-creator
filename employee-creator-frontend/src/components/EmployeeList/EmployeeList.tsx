import { Employee } from "../../scripts/interfaces";
import EmployeeNode from "../EmployeeNode/EmployeeNode";
import style from "./EmployeeList.module.scss";

interface EmployeeListProps {
  employees: Employee[];
}

const EmployeeList: React.FC<EmployeeListProps> = ({ employees }) => {
  console.log(employees);

  return (
    <>
      {employees.length > 0 &&
        employees.map((employee) => (
          <EmployeeNode key={employee.id} employee={employee} />
        ))}
    </>
  );
};

export default EmployeeList;
