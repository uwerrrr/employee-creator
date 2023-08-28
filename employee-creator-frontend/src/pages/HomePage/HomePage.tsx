import { useEffect, useState } from "react";

import EmployeeList from "../../components/EmployeeList/EmployeeList";
import { getAllEmployee } from "../../services/backend-service";
import { Employee } from "../../scripts/interfaces";
import myCals from "../../scripts/myCals.ts";

const HomePage = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [requestNum, setRequestNum] = useState<number>(0);

  // get all data whenever requestNum state is changed
  useEffect(() => {
    getAllEmployee().then((res) => {
      res.forEach((element: Employee) => {
        element.duration = myCals.calDuration(element);
      });
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
