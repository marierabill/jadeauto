import { SortOrder } from "../../util/SortOrder";

export type ReviewOrderByInput = {
  comment?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  rating?: SortOrder;
  reviewDate?: SortOrder;
  updatedAt?: SortOrder;
  vehicleId?: SortOrder;
};
