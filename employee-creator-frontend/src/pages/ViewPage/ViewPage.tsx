import { Link, useNavigate, useParams } from "react-router-dom";
import EmployeeView from "../../components/EmployeeView/EmployeeView";
import { Employee } from "../../scripts/interfaces";
import { useEffect, useState } from "react";
import { getEmployeeById } from "../../services/backend-service";

const ViewPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState<Employee>();

  const [loading, setLoading] = useState(true);

  const [errorMess, setErrorMess] = useState("");

  useEffect(() => {
    setLoading(true);
    if (errorMess) {
      setErrorMess("");
    }
    if (id) {
      getEmployeeById(parseInt(id))
        .then((employee) => {
          setEmployee(employee);
        })
        .catch((err) => setErrorMess(err.message))
        .finally(() => setLoading(false));
    } else {
      setErrorMess("There is no ID in URL");
      setLoading(false);
    }
  }, [id]);

  return (
    <>
      <button onClick={() => navigate(-1)}> {"<"} Back</button>
      <h2>Employee Information</h2>
      {loading && <p>Loading...</p>}
      {!loading && employee && <EmployeeView employee={employee} />}
      {!loading && errorMess && <p>{errorMess}</p>}
    </>
  );
};

export default ViewPage;
