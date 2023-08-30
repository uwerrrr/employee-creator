import React from "react";
import { Link } from "react-router-dom";
import EmployeeForm from "../../components/EmployeeForm/EmployeeForm";

const EditPage = () => {
  return (
    <div>
      <Link to={"/"}> {"<"} Back</Link>
      <h2>Edit employee</h2>
      <EmployeeForm />
    </div>
  );
};

export default EditPage;
