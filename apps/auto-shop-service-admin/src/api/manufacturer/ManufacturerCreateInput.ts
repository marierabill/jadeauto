import { VehicleCreateNestedManyWithoutManufacturersInput } from "./VehicleCreateNestedManyWithoutManufacturersInput";

export type ManufacturerCreateInput = {
  contactEmail?: string | null;
  country?: string | null;
  establishedYear?: number | null;
  name?: string | null;
  vehicles?: VehicleCreateNestedManyWithoutManufacturersInput;
};
