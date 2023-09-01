import { Link } from "react-router-dom";
import { Employee } from "../../scripts/interfaces";
import { useContext, useState } from "react";
import {
  RequestNumContext,
  RequestNumContextType,
} from "../../context/RequestNumContextProvider";
import { deleteEmployeeById } from "../../services/backend-service";

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
      () => setDeleteLoading(false);
    }
  };

  return (
    <>
      <hr />
      {deleteLoading && <p>...</p>}

      {!deleteLoading && (
        <>
          <section>
            <h4>
              {employee.firstName} {employee.middleName && employee.middleName}{" "}
              {employee.lastName}
            </h4>
            <p>
              {employee.employmentType} - {employee.duration} months
            </p>
            <p>{employee.email}</p>
          </section>
          <section>
            <Link to={`${employee.id}`}>View</Link>| <a href="">Edit</a> |{" "}
            <a href="" onClick={() => handleDelete(employee.id)}>
              Delete
            </a>
          </section>
        </>
      )}

      {!deleteLoading && deleteErrorMess && <p>{deleteErrorMess}</p>}
    </>
  );
};

export default EmployeeNode;
