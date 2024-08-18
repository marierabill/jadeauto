import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type ReviewUpdateInput = {
  comment?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  rating?: number | null;
  reviewDate?: Date | null;
  vehicle?: VehicleWhereUniqueInput | null;
};
