import React from "react";
import {
  TextInput,
  SimpleForm,
  Create,
  required,
  minLength,
  maxLength,
  NumberInput,
} from "react-admin";
const validateTitle = [required(), minLength(2), maxLength(100)];

const NewsCreate = (props) => (
  <Create title="Crear Equipo" {...props}>
    <SimpleForm>
      <TextInput
        source="name"
        label="Nombre Completo"
        fullWidth={true}
        validate={validateTitle}
      />
      <TextInput source="position" label="Cargo" fullWidth={true} required />
      <NumberInput source="level" label="Nivel" step={1} />
      <TextInput source="contact.email" label="Email" fullWidth={true} />
      <TextInput source="contact.phone" label="Télefono" fullWidth={true} />
    </SimpleForm>
  </Create>
);
export default NewsCreate;
