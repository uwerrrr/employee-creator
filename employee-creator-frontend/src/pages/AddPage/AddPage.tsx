import React from "react";
import AddEmployeeForm from "../../components/AddEmployeeForm/AddEmployeeForm";
import { Link } from "react-router-dom";

const AddPage = () => {
  return (
    <>
      <Link to={"../"}> {"<"} Back</Link>
      <h2>Add new employee</h2>
      <AddEmployeeForm />
    </>
  );
};

export default AddPage;
