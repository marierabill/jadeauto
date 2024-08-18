import { Manufacturer } from "../manufacturer/Manufacturer";
import { Order } from "../order/Order";
import { Review } from "../review/Review";

export type Vehicle = {
  createdAt: Date;
  description: string | null;
  id: string;
  manufacturer?: Manufacturer | null;
  model: string | null;
  name: string | null;
  orders?: Array<Order>;
  price: number | null;
  reviews?: Array<Review>;
  updatedAt: Date;
  year: number | null;
};
