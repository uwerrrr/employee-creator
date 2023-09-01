import { Employee } from "./interfaces";

const calDuration = (employee: Employee): number => {
  const timeDiffInMS =
    employee.finishDate !== null && employee.finishDate !== undefined
      ? employee.finishDate.getTime() - employee.startDate.getTime()
      : Date.now() - employee.startDate.getTime();
  // duration: months round to 1 decimal
  return (
    Math.round((timeDiffInMS / (1000 * 60 * 60 * 24 * ((7 * 52) / 12))) * 10) /
    10
  );
};

const toDateString = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const convertUndefinedToNull = (
  obj: Record<string, any>
): Record<string, any> => {
  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      // If the property is an object (and not null), recursively process items in that object
      obj[key] = convertUndefinedToNull(obj[key]);
    } else if (obj[key] === undefined) {
      // Convert undefined to null
      obj[key] = null;
    }
  }
  return obj;
};

export default {
  calDuration,
  toDateString,
  convertUndefinedToNull,
};
