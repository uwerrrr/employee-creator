interface BaseEmployee {
  firstName: string;
  middleName: string | null;
  lastName: string;
  email: string;
  phone: number;
  address: string;
  contractType: "Full-Time" | "Part-Time";
  startDate: Date;
  finishDate: Date | null;
  employmentType: "Permanent" | "Contract";
  hoursPerWeek: number;
}

export interface Employee extends BaseEmployee {
  id: number;
  duration: number;
}
// Make all properties in T empty ""
type MakeNullable<T> = {
  [P in keyof T]: T[P] | "";
};

export interface CreateEmployeeDTO extends MakeNullable<BaseEmployee> {}
