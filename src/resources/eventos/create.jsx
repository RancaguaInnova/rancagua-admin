import React from "react";
import {
  TextInput,
  DateInput,
  SimpleForm,
  Create,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  ArrayInput,
  SimpleFormIterator,
} from "react-admin";

const EventoCreate = (props) => (
  <Create title="Crear Noticias" {...props}>
    <SimpleForm>
      <TextInput source="address.streetName" fullWidth={true} />
      <TextInput source="detail" fullWidth={true} />
      <TextInput source="validators" fullWidth={true} />
      <TextInput source="name" fullWidth={true} />
      <TextInput source="description" fullWidth={true} />
      <TextInput source="externalUrl" fullWidth={true} />
      <DateInput source="date" fullWidth={true} />
      <TextInput source="time" fullWidth={true} />
      <TextInput source="endTime" fullWidth={true} />
      <TextInput source="optionLabel" fullWidth={true} />
      <TextInput source="imageUrl" fullWidth={true} />
      <BooleanInput source="showInCalendar" />
      <ReferenceInput source="departmentId" reference="departments">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <ArrayInput source="tags" fullWidth={true}>
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
  </Create>
);
export default EventoCreate;
