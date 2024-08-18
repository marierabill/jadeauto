import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { VehicleListRelationFilter } from "../vehicle/VehicleListRelationFilter";

export type ManufacturerWhereInput = {
  contactEmail?: StringNullableFilter;
  country?: StringNullableFilter;
  establishedYear?: IntNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  vehicles?: VehicleListRelationFilter;
};
