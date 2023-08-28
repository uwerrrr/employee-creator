import { Employee } from "./interfaces";

const calDuration = (employee: Employee): number => {
  const timeDiffInMS =
    employee.finishDate !== null
      ? employee.finishDate.getTime() - employee.startDate.getTime()
      : Date.now() - employee.startDate.getTime();
  // duration: months round to 1 decimal
  return (
    Math.round((timeDiffInMS / (1000 * 60 * 60 * 24 * ((7 * 52) / 12))) * 10) /
    10
  );
};

export default {
  calDuration,
};
