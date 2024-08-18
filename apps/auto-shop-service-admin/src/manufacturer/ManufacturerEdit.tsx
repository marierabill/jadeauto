import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { VehicleTitle } from "../vehicle/VehicleTitle";

export const ManufacturerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="contactEmail" source="contactEmail" type="email" />
        <TextInput label="country" source="country" />
        <NumberInput
          step={1}
          label="establishedYear"
          source="establishedYear"
        />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="vehicles"
          reference="Vehicle"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VehicleTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};