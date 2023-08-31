import { useParams } from "react-router-dom";
import EmployeeView from "../../components/EmployeeView/EmployeeView";
import { Employee } from "../../scripts/interfaces";
import { useEffect, useState } from "react";
import { getEmployeeById } from "../../services/backend-service";

const ViewPage = () => {
  const { id } = useParams();

  const [employee, setEmployee] = useState<Employee>();

  const [loading, setLoading] = useState(true);

  const [errorMess, setErrorMess] = useState("");

  useEffect(() => {
    setLoading(true);
    if (id) {
      getEmployeeById(parseInt(id))
        .then((employee) => setEmployee(employee))
        .catch((err) => setErrorMess(err.message))
        .finally(() => setLoading(false));
    } else {
      setErrorMess("There is no ID in URL");
      setLoading(false);
    }
  }, [id]);

  return (
    <>
      {loading && <p>...</p>}
      {!loading && employee && <EmployeeView employee={employee} />}
      {!loading && errorMess && <p>{errorMess}</p>}
    </>
  );
};

export default ViewPage;
