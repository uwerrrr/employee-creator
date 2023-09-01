import { useContext, useEffect, useState } from "react";

import EmployeeList from "../../components/EmployeeList/EmployeeList";
import { getAllEmployee } from "../../services/backend-service";
import { Employee } from "../../scripts/interfaces";
import myScripts from "../../scripts/myScripts.ts";
import {
  RequestNumContext,
  RequestNumContextType,
} from "../../context/RequestNumContextProvider.tsx";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const { requestNum } = useContext(RequestNumContext) as RequestNumContextType;

  const [loading, setLoading] = useState(true);
  const [errorMess, setErrorMess] = useState("");

  const [employees, setEmployees] = useState<Employee[]>([]);

  // get all data whenever requestNum state is changed
  useEffect(() => {
    setErrorMess(errorMess ? "" : errorMess);
    setLoading(true);
    getAllEmployee()
      .then((res) => {
        setEmployees(res);
      })
      .catch((err) => setErrorMess(err.message))
      .finally(() => setLoading(false));
  }, [requestNum]);

  // const { makeRefresh } = useContext(
  //   RequestNumContext
  // ) as RequestNumContextType;
  // const [errorMess, setErrorMess] = useState("");
  // const [loading, setLoading] = useState(false);

  // const handleDelete = async (id: Employee["id"]) => {
  //   setLoading(true);
  //   try {
  //     setErrorMess(errorMess ? "" : errorMess);
  //     await deleteEmployeeById(id);
  //     console.log(`Employee ${id} is deleted`);
  //     makeRefresh();
  //   } catch (error) {
  //     setErrorMess((error as Error).message);
  //     console.error(error);
  //   } finally {
  //     () => setLoading(false);
  //   }
  // };

  return (
    <div>
      <h2>All employees</h2>{" "}
      <button
        onClick={() => {
          navigate("/add");
        }}
      >
        Add new employee
      </button>
      {loading && <p>...</p>}
      {!loading && employees && <EmployeeList employees={employees} />}
      {!loading && errorMess && <p>{errorMess}</p>}
    </div>
  );
};

export default HomePage;
