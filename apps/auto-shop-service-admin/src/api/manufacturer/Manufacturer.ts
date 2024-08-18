import { Vehicle } from "../vehicle/Vehicle";

export type Manufacturer = {
  contactEmail: string | null;
  country: string | null;
  createdAt: Date;
  establishedYear: number | null;
  id: string;
  name: string | null;
  updatedAt: Date;
  vehicles?: Array<Vehicle>;
};
