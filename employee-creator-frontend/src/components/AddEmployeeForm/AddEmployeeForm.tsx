import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { schema } from "../../scripts/schema";

const AddEmployeeForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  return <div>AddEmployeeForm</div>;
};

export default AddEmployeeForm;
