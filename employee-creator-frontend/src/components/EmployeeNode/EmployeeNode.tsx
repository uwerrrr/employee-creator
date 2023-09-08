import { Link } from "react-router-dom";
import { Employee } from "../../scripts/interfaces";
import { useContext, useState } from "react";
import {
  RequestNumContext,
  RequestNumContextType,
} from "../../context/RequestNumContextProvider";
import { deleteEmployeeById } from "../../services/backend-service";
import style from "./EmployeeNode.module.scss";

interface EmployeeNodeProps {
  employee: Employee;
}

const EmployeeNode: React.FC<EmployeeNodeProps> = ({ employee }) => {
  const { makeRefresh } = useContext(
    RequestNumContext
  ) as RequestNumContextType;
  const [deleteErrorMess, setDeleteErrorMess] = useState("");
  const [deleteLoading, setDeleteLoading] = useState(false);

  const handleDelete = async (id: Employee["id"]) => {
    setDeleteLoading(true);
    try {
      setDeleteErrorMess(deleteErrorMess ? "" : deleteErrorMess);
      await deleteEmployeeById(id);
      console.log(`Employee ${id} is deleted`);
      makeRefresh();
    } catch (error) {
      setDeleteErrorMess((error as Error).message);
      console.error(error);
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <>
      {/* <hr className={style.separator} /> */}
      {deleteLoading && <p className={style.loading}>...</p>}

      {!deleteLoading && (
        <div className={style.card}>
          <section className={style.info}>
            <h4 className={style.name}>
              {employee.firstName} {employee.middleName && employee.middleName}{" "}
              {employee.lastName}
            </h4>
            <p className={style.employment}>
              {employee.employmentType} - {employee.duration} months
            </p>
            <p className={style.email}>{employee.email}</p>
          </section>
          <section className={style.actions}>
            <Link to={`${employee.id}`} className={style.link}>
              View
            </Link>{" "}
            {` | `}
            <Link to={`${employee.id}/edit`} className={style.link}>
              Edit
            </Link>{" "}
            {` | `}{" "}
            <a
              href="#"
              className={[style.link__delete, style.link].join(" ")}
              onClick={() => {
                const confirmDelete = window.confirm(
                  "Are you sure you want to delete this employee?"
                );
                if (confirmDelete) {
                  handleDelete(employee.id);
                }
              }}
            >
              Delete
            </a>
          </section>
        </div>
      )}

      {!deleteLoading && deleteErrorMess && (
        <p className={style.error}>{deleteErrorMess}</p>
      )}
    </>
  );
};

export default EmployeeNode;
