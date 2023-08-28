import { useEffect, useState } from "react";

import EmployeeList from "../../components/EmployeeList/EmployeeList";
import { getAllEmployee } from "../../services/backend-service";

export interface Employee {
  id: number;
  firstName: string;
  middleName: string | null;
  lastName: string;
  email: string;
  phone: number;
  address: string;
  contractType: "Full-Time" | "Part-Time";
  startDate: Date;
  finishDate: Date | null;
  employmentType: "Permanent" | "Contract";
  hoursPerWeek: number;
}

const HomePage = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [requestNum, setRequestNum] = useState<number>(0);

  // get all data whenever requestNum state is changed
  useEffect(() => {
    getAllEmployee().then((res) => {
      setEmployees(res);
    });
  }, [requestNum]);

  return (
    <div>
      <h1>Employee creator application</h1>
      <EmployeeList employees={employees} />
    </div>
  );
};

export default HomePage;
