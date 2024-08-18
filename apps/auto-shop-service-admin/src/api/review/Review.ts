import { Customer } from "../customer/Customer";
import { Vehicle } from "../vehicle/Vehicle";

export type Review = {
  comment: string | null;
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  rating: number | null;
  reviewDate: Date | null;
  updatedAt: Date;
  vehicle?: Vehicle | null;
};
