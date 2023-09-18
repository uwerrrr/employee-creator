import {
  CreateEmployeeDTO,
  Employee,
  UpdateEmployeeDTO,
} from "../scripts/interfaces";
import myScripts from "../scripts/myScripts";

const hostDomain = `https://employee-creator-backend.onrender.com/`;
// localhost = `http://localhost:8080/`

export const getAllEmployee = async (): Promise<Employee[]> => {
  //// fetch data
  const response = await fetch(`${hostDomain}employee`);

  if (!response.ok) {
    throw new Error("Could not get employees");
  }

  const data = await response.json();

  data.map((item: any): Employee => {
    item.startDate = new Date(item.startDate);
    item.finishDate =
      item.finishDate !== null && item.finishDate !== undefined
        ? new Date(item.finishDate)
        : null;

    item.duration = myScripts.calDuration(item);
    return item;
  });

  return data;
};

export const createEmployee = async (
  data: CreateEmployeeDTO
): Promise<void> => {
  const formattedData = {
    ...data,
    startDate: myScripts.toDateString(data.startDate),
    finishDate:
      data.finishDate !== null && data.finishDate !== undefined
        ? myScripts.toDateString(data.finishDate as Date)
        : null,
  };

  const response = await fetch(`${hostDomain}employee`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formattedData),
  });

  if (!response.ok) {
    throw new Error("Could not create an employee");
  }
};

export const getEmployeeById = async (
  id: Employee["id"]
): Promise<Employee> => {
  const response = await fetch(`${hostDomain}employee/${id}`);

  if (!response.ok) {
    throw new Error(`Employee with id : ${id} does not exist`);
  }

  const employee: Employee = await response.json();

  employee.startDate = new Date(employee.startDate);
  employee.finishDate =
    employee.finishDate !== null && employee.finishDate !== undefined
      ? new Date(employee.finishDate)
      : null;
  employee.duration = myScripts.calDuration(employee);

  return employee;
};

export const deleteEmployeeById = async (id: Employee["id"]): Promise<void> => {
  const response = await fetch(`${hostDomain}employee/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Could not delete employee");
  }
};

export const updateEmployeeById = async (
  id: Employee["id"],
  data: UpdateEmployeeDTO
): Promise<void> => {
  const formattedData = {
    ...data,
    startDate:
      data.startDate !== null && data.startDate !== undefined
        ? myScripts.toDateString(data.startDate as Date)
        : null,
    finishDate:
      data.finishDate !== null && data.finishDate !== undefined
        ? myScripts.toDateString(data.finishDate as Date)
        : null,
  };

  const response = await fetch(`${hostDomain}employee/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formattedData),
  });

  if (!response.ok) {
    throw new Error(`Could not update employee ${id}`);
  }
};
