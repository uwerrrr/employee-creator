import { useContext, useEffect, useState } from "react";

import EmployeeList from "../../components/EmployeeList/EmployeeList";
import { getAllEmployee } from "../../services/backend-service";
import { Employee } from "../../scripts/interfaces";
import myCals from "../../scripts/myCals.ts";
import {
  RequestNumContext,
  RequestNumContextType,
} from "../../context/RequestNumContextProvider.tsx";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const { requestNum } = useContext(RequestNumContext) as RequestNumContextType;

  const [employees, setEmployees] = useState<Employee[]>([]);

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
      <h2>All employees</h2>
      <button
        onClick={() => {
          navigate("/add");
        }}
      >
        Add new employee
      </button>
      <EmployeeList employees={employees} />
    </div>
  );
};

export default HomePage;
