import { Link, useNavigate, useParams } from "react-router-dom";
import EmployeeForm from "../../components/EmployeeForm/EmployeeForm";
import { useEffect, useState } from "react";
import { getEmployeeById } from "../../services/backend-service";
import { Employee } from "../../scripts/interfaces";

const EditPage = () => {
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
    <div>
      <button onClick={() => navigate(-1)}> {"<"} Back</button>
      <h2>Edit employee</h2>
      {loading && <p>...</p>}
      {!loading && employee && <EmployeeForm employee={employee} />}
      {!loading && errorMess && <p>{errorMess}</p>}
    </div>
  );
};

export default EditPage;
