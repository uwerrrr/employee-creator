import { CreateEmployeeDTO } from "../scripts/interfaces";
import myScripts from "../scripts/myScripts";

export const getAllEmployee = async () => {
  //// fetch data
  const response = await fetch("http://localhost:8080/employee");

  if (!response.ok) {
    throw new Error("Could not get employees");
  }

  const data = await response.json();

  data.map((item: any) => {
    item.startDate = new Date(item.startDate);
    item.finishDate =
      item.finishDate !== null ? new Date(item.finishDate) : null;
    return item;
  });

  return data;
};

export const createEmployee = async (data: CreateEmployeeDTO) => {
  const formattedData = {
    ...data,
    startDate: myScripts.toDateString(data.startDate),
    finishDate:
      data.finishDate !== null && data.finishDate !== undefined
        ? myScripts.toDateString(data.finishDate as Date)
        : null,
  };

  const response = await fetch("http://localhost:8080/employee", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formattedData),
  });

  if (!response.ok) {
    throw new Error("Could not create a employee");
  }
};

export const getEmployeeById = async (id: number) => {
  const response = await fetch(`http://localhost:8080/employee/${id}`);

  if (!response.ok) {
    throw new Error(`Employee with id : ${id} does not exist`);
  }

  const employee = await response.json();

  employee.startDate = new Date(employee.startDate);
  employee.finishDate =
    employee.finishDate !== null ? new Date(employee.finishDate) : null;

  return employee;
};

export const deleteEmployeeById = async (id: number) => {
  const response = await fetch(`http://localhost:8080/employee/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Could not delete employee");
  }
};
