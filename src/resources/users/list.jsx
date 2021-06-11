import React from "react"
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  Filter,
  TextInput,
} from "react-admin"

const UserFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Nombre" source="profile.firstName" alwaysOn />
    <TextInput label="Apellido" source="profile.lastName" alwaysOn />
    <TextInput label="Rut" source="profile.identifier" alwaysOn />
  </Filter>
)
export const UserList = (props) => {
  return (
    <List {...props} filters={<UserFilter />}>
      <Datagrid rowClick="edit">
        <TextField source="profile.firstName" label="Nombre" />
        <TextField source="profile.lastName" label="Apellido" />
        <TextField source="profile.identifier" label="Rut" />

        <TextField source="profile.gender" label="Sexo" />
        <DateField source="profile.birthdate" label="Fecha de nacimiento" />
        <EditButton label="Editar" />
      </Datagrid>
    </List>
  )
}

export default UserList
