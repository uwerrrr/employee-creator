import { Employee } from "../../scripts/interfaces";

interface EmployeeViewProps {
  employee: Employee;
}

const EmployeeView = ({ employee }: EmployeeViewProps) => {
  return <div>EmployeeView</div>;
};

export default EmployeeView;
