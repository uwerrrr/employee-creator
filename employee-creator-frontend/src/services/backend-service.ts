export const getAllEmployee = async () => {
  //// fetch data
  const response = await fetch("http://localhost:8080/employee");

  //// error handling
  if (!response.ok) {
    throw new Error("Could not get employee");
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
