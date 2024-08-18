import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type ReviewWhereInput = {
  comment?: StringNullableFilter;
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  rating?: IntNullableFilter;
  reviewDate?: DateTimeNullableFilter;
  vehicle?: VehicleWhereUniqueInput;
};
