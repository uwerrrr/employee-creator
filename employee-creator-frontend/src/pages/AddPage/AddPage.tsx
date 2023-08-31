import EmployeeForm from "../../components/EmployeeForm/EmployeeForm";
import { Link } from "react-router-dom";

const AddPage = () => {
  return (
    <>
      <Link to={"../"}> {"<"} Back</Link>
      <h2>Add new employee</h2>
      <EmployeeForm />
    </>
  );
};

export default AddPage;
