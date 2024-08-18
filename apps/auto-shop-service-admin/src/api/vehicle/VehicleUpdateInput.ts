import { ManufacturerWhereUniqueInput } from "../manufacturer/ManufacturerWhereUniqueInput";
import { OrderUpdateManyWithoutVehiclesInput } from "./OrderUpdateManyWithoutVehiclesInput";
import { ReviewUpdateManyWithoutVehiclesInput } from "./ReviewUpdateManyWithoutVehiclesInput";

export type VehicleUpdateInput = {
  description?: string | null;
  manufacturer?: ManufacturerWhereUniqueInput | null;
  model?: string | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutVehiclesInput;
  price?: number | null;
  reviews?: ReviewUpdateManyWithoutVehiclesInput;
  year?: number | null;
};
