import { useState } from "react";
import { CreateEmployeeDTO } from "../../scripts/interfaces";

const initialData: CreateEmployeeDTO = {
  firstName: "",
  middleName: null,
  lastName: "",
  email: "",
  phone: 0,
  address: "",
  contractType: "Full-Time",
  startDate: new Date(),
  finishDate: null,
  employmentType: "Permanent",
  hoursPerWeek: 0,
};

const AddEmployeeForm = () => {
  const [newEmployeeData, setNewEmployeeData] =
    useState<CreateEmployeeDTO>(initialData);

  const [error, setError] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log({ name, value });

    let convertedValue: string | null | number | Date;

    if (name === "startDate" || (name === "finishDate" && value)) {
      convertedValue = new Date(value);
    } else if (value === null || value === "" || value === undefined) {
      convertedValue = null;
    }

    setNewEmployeeData((prevData) => ({
      ...prevData,
      [name]: convertedValue,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const getValue = (fieldName: keyof CreateEmployeeDTO) => {
    if (
      fieldName === "contractType" ||
      fieldName === "employmentType" ||
      fieldName === "startDate"
    ) {
      return newEmployeeData[fieldName];
    } else {
      return newEmployeeData[fieldName] !== initialData[fieldName]
        ? newEmployeeData[fieldName]
        : "";
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={getValue("firstName") as string}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Middle Name:
          <input
            type="text"
            name="middleName"
            value={getValue("middleName") as string}
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
            value={newEmployeeData.phone}
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
            value={newEmployeeData.startDate.toISOString().slice(0, 10)}
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
            value={newEmployeeData.hoursPerWeek}
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
