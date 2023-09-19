import { useNavigate, useParams } from "react-router-dom";
import EmployeeView from "../../components/EmployeeView/EmployeeView";
import { Employee } from "../../scripts/interfaces";
import { useEffect, useState } from "react";
import { getEmployeeById } from "../../services/backend-service";
import style from "./ViewPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

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
    <div className={style.page}>
      <h2 className={style.pageHeading}>
        <button className={style.backBtn} onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faBackward} /> back
        </button>
        Employee Information
      </h2>

      {loading && <p className={style.loading}>Loading...</p>}
      {!loading && employee && <EmployeeView employee={employee} />}
      {!loading && errorMess && <p className={style.error}>{errorMess}</p>}
    </div>
  );
};

export default ViewPage;
