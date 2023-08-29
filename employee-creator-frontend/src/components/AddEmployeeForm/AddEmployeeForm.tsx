import { useState } from "react";
import { CreateEmployeeDTO } from "../../scripts/interfaces";

const initialNewEmployeeData: CreateEmployeeDTO = {
  firstName: "",
  middleName: null,
  lastName: "",
  email: "",
  phone: "",
  address: "",
  contractType: "",
  startDate: new Date(),
  finishDate: null,
  employmentType: "",
  hoursPerWeek: "",
};

const AddEmployeeForm = () => {
  const [newEmployeeData, setNewEmployeeData] = useState<CreateEmployeeDTO>(
    initialNewEmployeeData
  );

  const [error, setError] = useState(false);

  const handleChange = () => {};

  const handleSubmit = () => {};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={newEmployeeData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Middle Name:
          <input
            type="text"
            name="middleName"
            value={newEmployeeData.middleName || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={newEmployeeData.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={newEmployeeData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={newEmployeeData.phone.toString()}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={newEmployeeData.address}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Contract Type:
          <div>
            <label>
              <input
                type="radio"
                name="contractType"
                value="Full-Time"
                checked={newEmployeeData.contractType === "Full-Time"}
                onChange={handleChange}
              />
              Permanent
            </label>
            <label>
              <input
                type="radio"
                name="contractType"
                value="Part-Time"
                checked={newEmployeeData.contractType === "Part-Time"}
                onChange={handleChange}
              />
              Contract
            </label>
          </div>
        </label>
        <label>
          Start Date:
          <input
            type="date"
            name="startDate"
            value={
              newEmployeeData.startDate
                ? newEmployeeData.startDate.toISOString().slice(0, 10)
                : ""
            }
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Finish Date:
          <input
            type="date"
            name="finishDate"
            value={
              newEmployeeData.finishDate
                ? newEmployeeData.finishDate.toISOString().slice(0, 10)
                : ""
            }
            onChange={handleChange}
          />
        </label>
        <label>
          Employment Type:
          <div>
            <label>
              <input
                type="radio"
                name="employmentType"
                value="Permanent"
                checked={newEmployeeData.employmentType === "Permanent"}
                onChange={handleChange}
              />
              Permanent
            </label>
            <label>
              <input
                type="radio"
                name="employmentType"
                value="Contract"
                checked={newEmployeeData.employmentType === "Contract"}
                onChange={handleChange}
              />
              Contract
            </label>
          </div>
        </label>
        <label>
          Hours Per Week:
          <input
            type="number"
            name="hoursPerWeek"
            value={newEmployeeData.hoursPerWeek.toString()}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployeeForm;
