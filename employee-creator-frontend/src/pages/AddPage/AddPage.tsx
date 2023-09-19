import EmployeeForm from "../../components/EmployeeForm/EmployeeForm";
import { Link } from "react-router-dom";
import style from "./AddPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

const AddPage = () => {
  return (
    <div className={style.page}>
      <h2 className={style.pageHeading}>
        <button className={style.backBtn}>
          <Link className={style.backLink} to={"../"}>
            <FontAwesomeIcon icon={faBackward} /> back
          </Link>
        </button>
        Add new employee
      </h2>
      <EmployeeForm />
    </div>
  );
};

export default AddPage;
