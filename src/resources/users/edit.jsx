import React from "react"
import {
  TextInput,
  SimpleForm,
  Edit,
  SelectInput,
  DateInput,
  SelectArrayInput,
} from "react-admin"

const UserEdit = (props) => (
  <Edit title="Editando Usuario" {...props}>
    <SimpleForm>
      <TextInput source="profile.firstName" label="Nombre" />
      <TextInput source="profile.lastName" label="Apellido" />
      <TextInput label="Rut" source="profile.identifier" />

      <SelectInput
        source="profile.gender"
        choices={[
          { id: "hombre", name: "hombre" },
          { id: "mujer", name: "mujer" },
        ]}
        label="Sexo"
      />
      <TextInput label="Calle " source="profile.address.streetName" />
      <TextInput label="Número " source="profile.address.streetNumber" />
      <TextInput
        label="Departamento "
        source="profile.address.departmentNumber"
      />
      <TextInput label="Télefono " source="profile.phone.mobilePhone" />

      <DateInput
        source="profile.birthdate"
        label="Fecha de Nacimiento"
        // @ts-ignore
        options={{ format: "dd/MM/YYYY" }}
      />
      <SelectArrayInput
        label="Roles"
        source="roles"
        choices={[
          { id: "admin", name: "Admin" },
          { id: "admin-tvecino", name: "Admin tarjeta vecino" },
          { id: "admin-cdir", name: "Admin Cdir" },
        ]}
      />
    </SimpleForm>
  </Edit>
)
export default UserEdit
