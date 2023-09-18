import { useContext, useEffect, useState } from "react";

import EmployeeList from "../../components/EmployeeList/EmployeeList";
import { getAllEmployee } from "../../services/backend-service";
import { Employee } from "../../scripts/interfaces";
import {
  RequestNumContext,
  RequestNumContextType,
} from "../../context/RequestNumContextProvider.tsx";
import { useNavigate } from "react-router-dom";
import style from "./HomePage.module.scss";

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

  return (
    <div className={style.page}>
      <h2 className={style.pageHeading}>All employees</h2>{" "}
      <button
        className={style.addBtn}
        onClick={() => {
          navigate("/add");
        }}
      >
        ADD NEW EMPLOYEE
      </button>
      {loading && (
        <p className={style.loading}>
          Loading...
          <br />
          Please allow up to 5 minutes for the initial load, as the backend may
          be starting from sleep mode.
        </p>
      )}
      {!loading && employees && <EmployeeList employees={employees} />}
      {!loading && errorMess && <p className={style.error}>{errorMess}</p>}
    </div>
  );
};

export default HomePage;
