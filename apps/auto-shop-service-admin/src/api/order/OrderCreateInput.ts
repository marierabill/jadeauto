import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type OrderCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  orderDate?: Date | null;
  status?: "Option1" | null;
  totalAmount?: number | null;
  vehicle?: VehicleWhereUniqueInput | null;
};
