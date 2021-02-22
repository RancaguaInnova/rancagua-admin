import React from "react";
import {
  TextInput,
  DateInput,
  SimpleForm,
  Edit,
  BooleanInput,
  ArrayInput,
  SimpleFormIterator,
} from "react-admin";

export const EventoEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" fullWidth={true} />
      <TextInput source="description" fullWidth={true} />
      <DateInput source="date" />
      <TextInput source="time" />
      <TextInput source="endTime" />
      <TextInput source="address.streetName" fullWidth={true} />
      <TextInput source="address.streetNumber" fullWidth={true} />

      <TextInput source="detail" fullWidth={true} />
      <TextInput source="validators" fullWidth={true} />

      <TextInput source="externalUrl" fullWidth={true} />

      <TextInput source="optionLabel" fullWidth={true} />
      <TextInput source="imageUrl" fullWidth={true} />
      <BooleanInput source="showInCalendar" fullWidth={true} />
      <TextInput source="departmentId" fullWidth={true} />

      <ArrayInput source="tags">
        <SimpleFormIterator>
          <TextInput source="tag" />
        </SimpleFormIterator>
      </ArrayInput>
      <TextInput source="locations" fullWidth={true} />
      <BooleanInput source="sendFirebase" fullWidth={true} />
      <TextInput source="firebaseIdEvent" fullWidth={true} />
      <TextInput source="notification" fullWidth={true} />
      <TextInput source="id" />
    </SimpleForm>
  </Edit>
);
export default EventoEdit;
