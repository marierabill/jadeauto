import { VehicleUpdateManyWithoutManufacturersInput } from "./VehicleUpdateManyWithoutManufacturersInput";

export type ManufacturerUpdateInput = {
  contactEmail?: string | null;
  country?: string | null;
  establishedYear?: number | null;
  name?: string | null;
  vehicles?: VehicleUpdateManyWithoutManufacturersInput;
};
