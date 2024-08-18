import { ManufacturerWhereUniqueInput } from "../manufacturer/ManufacturerWhereUniqueInput";
import { OrderCreateNestedManyWithoutVehiclesInput } from "./OrderCreateNestedManyWithoutVehiclesInput";
import { ReviewCreateNestedManyWithoutVehiclesInput } from "./ReviewCreateNestedManyWithoutVehiclesInput";

export type VehicleCreateInput = {
  description?: string | null;
  manufacturer?: ManufacturerWhereUniqueInput | null;
  model?: string | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutVehiclesInput;
  price?: number | null;
  reviews?: ReviewCreateNestedManyWithoutVehiclesInput;
  year?: number | null;
};
