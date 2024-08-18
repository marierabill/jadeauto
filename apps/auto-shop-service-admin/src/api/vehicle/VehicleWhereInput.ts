import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ManufacturerWhereUniqueInput } from "../manufacturer/ManufacturerWhereUniqueInput";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type VehicleWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  manufacturer?: ManufacturerWhereUniqueInput;
  model?: StringNullableFilter;
  name?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  price?: FloatNullableFilter;
  reviews?: ReviewListRelationFilter;
  year?: IntNullableFilter;
};
