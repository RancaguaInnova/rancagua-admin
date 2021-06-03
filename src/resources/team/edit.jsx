import React from "react";
import {
  TextInput,
  SimpleForm,
  required,
  minLength,
  maxLength,
  Edit,
  NumberInput,
} from "react-admin";
const validateTitle = [required(), minLength(2), maxLength(100)];
const NewsEdit = (props) => (
  <Edit {...props} title="Editando Equipo">
    <SimpleForm>
      <TextInput
        source="name"
        label="Nombre Completo"
        fullWidth={true}
        validate={validateTitle}
      />
      <TextInput source="position" label="Cargo" fullWidth={true} required />
      <NumberInput source="level" step={1} />
      <TextInput source="contact.email" label="Email" fullWidth={true} />
      <TextInput source="contact.phone" label="Télefono" fullWidth={true} />
    </SimpleForm>
  </Edit>
);
export default NewsEdit;
