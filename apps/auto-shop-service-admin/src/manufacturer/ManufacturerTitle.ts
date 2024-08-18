import { Manufacturer as TManufacturer } from "../api/manufacturer/Manufacturer";

export const MANUFACTURER_TITLE_FIELD = "name";

export const ManufacturerTitle = (record: TManufacturer): string => {
  return record.name?.toString() || String(record.id);
};
