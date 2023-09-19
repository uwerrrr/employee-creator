import { useNavigate, useParams } from "react-router-dom";
import EmployeeForm from "../../components/EmployeeForm/EmployeeForm";
import { useEffect, useState } from "react";
import { getEmployeeById } from "../../services/backend-service";
import { Employee } from "../../scripts/interfaces";
import style from "./EditPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

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
    <div className={style.page}>
      <h2 className={style.pageHeading}>
        <button className={style.backBtn} onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faBackward} /> back
        </button>{" "}
        Edit employee
      </h2>
      {loading && <p className={style.loading}>Loading...</p>}
      {!loading && employee && <EmployeeForm employee={employee} />}
      {!loading && errorMess && <p className={style.error}>{errorMess}</p>}
    </div>
  );
};

export default EditPage;
