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

export interface CreateEmployeeDTO extends BaseEmployee {}
