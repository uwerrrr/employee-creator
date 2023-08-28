export interface Employee {
  id: number;
  firstName: string;
  middleName: string | null;
  lastName: string;
  email: string;
  phone: number;
  address: string;
  contractType: "Full-Time" | "Part-Time";
  startDate: Date;
  finishDate: Date | null;
  duration: number;
  employmentType: "Permanent" | "Contract";
  hoursPerWeek: number;
}
