import React, { useContext } from "react";
import EmployeeForm from "../../components/EmployeeForm/EmployeeForm";
import { Link } from "react-router-dom";
import {
  EditModeContext,
  EditModeContextType,
} from "../../context/EditModeContextProvider";

const AddPage = () => {
  const { editMode } = useContext(EditModeContext) as EditModeContextType;
  return (
    <>
      <Link to={"../"}> {"<"} Back</Link>
      <h2>Add new employee</h2>
      <EmployeeForm editMode={editMode} />
    </>
  );
};

export default AddPage;
